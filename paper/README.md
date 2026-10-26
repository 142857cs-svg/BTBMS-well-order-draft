# A well-ordering proof for BTBMS

This is the concise English edition of the v139 research manuscript.
It develops the well-ordering argument in ZFC + "0-sharp exists" for the
original finite BTBMS domain and comparison. The pinned fundamental
sequence operation is unchanged.

The 989-page consolidated edition included the transitive closure of
references into research notebooks. This edition replaces those historical
appendices with the general arguments used in the proof. The paper has
38 pages, including the native-operation appendix. It uses 11-point type
on A4 paper with 24 mm margins.

## Contents

- `paper.pdf`: the typeset article.
- `paper.tex`, `main-text.tex` and the other `.tex` files: the full article
  source, with internal theorem and equation references.
- `native-definition.ts`: the native-operation excerpt printed in the paper.
- `BTBM-pinned.ts`: the preserved complete native source file. Its external
  comparator imports are standard lexicographic utilities; the mathematical
  comparison is also defined in the article. This package is a paper source
  package, not a standalone TypeScript application.
- `SOURCE-CONCORDANCE.csv`: the origins of the consolidated arguments.
- `BUILD-MANIFEST.json`: input and release hashes and build information.
- `VALIDATION.json`: document checks, distinct from mathematical verification.

## Build

Use a TeX Live installation with pdfLaTeX, Latin Modern, AMS packages,
`mathrsfs`, `microtype`, `geometry`, `enumitem`, `fancyhdr`, `listings`,
`xurl`, `needspace`, `hyperref` and `bookmark`:

```sh
bash build.sh
```

This builds `paper.pdf`. No notebook files, custom fonts, network access
or old conversation are required. For optional document checks, install
PyMuPDF and run `python3 validate_document.py` after building.

## What was condensed

Historical progress reports, repeated node-specific cases superseded by
general lemmas, superseded hypotheses and bounded experimental logs were
removed. Necessary scan, complete-window, weak-endpoint coding, fixed-selector,
common Point, single-supplier and finite-path arguments are incorporated in
the paper. The source concordance is provenance information, not an external
proof dependency.

The three prior amendments are retained: the actual strong work model and
its matching elementary relations; the entry-count argument for an empty
tail prefix; and the source Gen hypothesis for generated restrictions.
Coverage of low graph codes is shortened using source Gen at actual terminal
entries and independently proved finite-term transport. This is restricted
to actual legal incoming maps and constructed generated restrictions; it
does not assert that every arbitrary weak cut has a hull-collapse graph.

There is no global two-bare or bare-ancestor restriction. The original
completion, corrected persistence convention, exact terminal domains,
general-stage permissions and separate special-step bound remain in force.
Jointly selected witnesses are re-quantified when entering an outer frame.
The one-step theorem continues to quantify over every current legal source.

## Attribution and status

The user supplied the initial G approach and the research constraints.
Subsequent arguments and this edition involved substantive ChatGPT assistance.
This is a research proof manuscript, not a proof-kernel verification or an
independent human peer review. Successful compilation and document checks
do not establish mathematical correctness.

The user reports that test_alpha0, the originator of F, circulated a separate proof on QQ
and acknowledged the independent development of G. An exact public date and
a stable public link have not been established here. No priority date is
invented; the acknowledgment concerns independence, not verification of this
manuscript. The AI-assisted arguments are not attributed to the user as
unaided work.
