"""Document checks only; these are not a proof checker."""
from pathlib import Path
import hashlib, json, re
import fitz

root=Path(__file__).resolve().parent
texts={p.name:p.read_text() for p in root.glob('*.tex')}
alltex='\n'.join(texts.values())
labels=re.findall(r'\\label\{([^}]+)\}',alltex)
refs=re.findall(r'\\(?:ref|eqref|pageref)\{([^}]+)\}',alltex)
missing=sorted(set(refs)-set(labels))
duplicates=sorted({x for x in labels if labels.count(x)>1})
log=(root/'paper.log').read_text(errors='replace')
warnings=[x for x in log.splitlines() if re.search(
 r'Overfull|Underfull|LaTeX Warning|Missing character|Undefined control',x)]
pdf=fitz.open(root/'paper.pdf')
outside=[]
page_lengths=[]
bad_links=[]
for i,page in enumerate(pdf):
    text=page.get_text()
    page_lengths.append(len(text.strip()))
    for b in page.get_text('blocks'):
        if b[0]<20 or b[1]<20 or b[2]>page.rect.width-20 or b[3]>page.rect.height-20:
            outside.append({'page':i+1,'box':list(b[:4]),'text':b[4][:100]})
    for link in page.get_links():
        if link.get('kind')==fitz.LINK_GOTO and not 0<=link.get('page',-1)<len(pdf):
            bad_links.append({'page':i+1,'link':link})
fulltext='\n'.join(p.get_text() for p in pdf)
report={
 'kind':'document-and-layout-checks-not-formal-mathematics',
 'page_count':len(pdf),'main_font_points':11,'paper':'A4','margin_mm':24,
 'missing_references':missing,'duplicate_labels':duplicates,
 'latex_warnings':warnings,'out_of_page_blocks':outside,'bad_internal_links':bad_links,
 'blank_pages':[i+1 for i,n in enumerate(page_lengths) if n<30],
 'unresolved_notebook_reference_macros':alltex.count('\\src{'),
 'replacement_characters':fulltext.count('\ufffd'),
 'pdf_sha256':hashlib.sha256((root/'paper.pdf').read_bytes()).hexdigest(),
 'visual_review':'pending',
}
(root/'VALIDATION.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
(root/'paper-extracted.txt').write_text(fulltext)
print(json.dumps(report,ensure_ascii=False,indent=2))
assert 0<len(pdf)<100
assert not (missing or duplicates or warnings or outside or bad_links)
assert not report['blank_pages']
assert not report['unresolved_notebook_reference_macros']
assert not report['replacement_characters']
