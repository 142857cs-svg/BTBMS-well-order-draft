"""Package the independently buildable concise article, without notebooks."""
from pathlib import Path
import hashlib, json, shutil, zipfile

root=Path(__file__).resolve().parent
out=root.parent/'output'
(out/'pdf').mkdir(parents=True,exist_ok=True)
validation=json.loads((root/'VALIDATION.json').read_text())
assert validation['page_count']==38
assert validation['visual_review']!='pending'
names=sorted(p.name for p in root.glob('*.tex'))+[
 'README.md','build.sh','validate_document.py','package_release.py',
 'native-definition.ts','BTBM-pinned.ts','SOURCE-CONCORDANCE.csv',
 'VALIDATION.json','paper.pdf']
manifest=json.loads((root/'BUILD-MANIFEST.json').read_text())
manifest['release_files_sha256']={
 name:hashlib.sha256((root/name).read_bytes()).hexdigest() for name in names}
manifest['page_count']=validation['page_count']
manifest['pdf_sha256']=validation['pdf_sha256']
(root/'BUILD-MANIFEST.json').write_text(json.dumps(manifest,indent=2)+'\n')
names.append('BUILD-MANIFEST.json')
pdf=out/'pdf'/'BTBMS-concise-proof-2026-10-26.pdf'
shutil.copyfile(root/'paper.pdf',pdf)
archive=out/'BTBMS-concise-proof-source-2026-10-26.zip'
with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for name in names:
  z.write(root/name,'BTBMS-concise-proof/'+name)
with zipfile.ZipFile(archive) as z:
 assert z.testzip() is None
 assert len(z.namelist())==len(names)
result={'pdf':str(pdf),'source_archive':str(archive),'files':len(names),
        'page_count':validation['page_count'],'pdf_bytes':pdf.stat().st_size,
        'source_archive_bytes':archive.stat().st_size,
        'archive_sha256':hashlib.sha256(archive.read_bytes()).hexdigest()}
(out/'BTBMS-concise-proof-release.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
