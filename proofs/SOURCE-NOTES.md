# Source notes and presentation changes

The original v139 upload package was prepared on 2026-10-26 from the
following research documents. This directory preserves those notebook files;
the current article is the [concise English edition](../paper/paper.pdf).

| Source | Included version |
| --- | --- |
| `BTBMS-external-Gamma-boundary-2026-10-19.zh-CN.md` | The master document in checkpoint v139, through section 1268 and B1365. |
| `BTBMS-single-j-stage-one-and-four-full-nodes-2026-10-14.zh-CN.md` | Version 161 of the earlier main notebook. |
| `fixed-order-global-interface-audit-and-rank-proof-2026-10-25.zh-CN.md` | The v139 final argument, sections 1256–1268; also present at the end of the continuation notebook. |
| `BTBMS-cut-foundations-and-reflection-locality-2026-09-26.md` | The earlier note bearing this date. |
| `BTBMS-short-bare-definable-reflection-2026-09-26.md` | The earlier note bearing this date. |

## Changes made for the original v139 package

1. Added the English README, overview, attribution note, history, and indices.
2. Split each long notebook at existing section boundaries and added navigation
   and historical-status notices. The initial status material is retained in a
   separate introductory file for each notebook.
3. Converted LaTeX delimiters outside code fences from `\(...\)` and
   `\[...\]` to the dollar delimiters supported by GitHub Markdown.
4. Replaced the three account-specific document links in the continuation
   notebook with relative links to the corresponding included documents.
5. Kept the latest argument separately as a convenient entry point. This is a
   duplicate of the same argument in the continuation, not an independent
   proof or a new mathematical revision.

No mathematical argument was intentionally changed by that packaging step.
Historical qualifications and superseded status statements remain visible.
There is no inferred publication date for the QQ proof, no fabricated public
link, and no copied QQ conversation in this package.

## Original checks and their limits

The preparation checks compare all split payloads with the corresponding
formatted source documents, preserve the original section and theorem labels,
check local Markdown file links, and record file hashes in
[source-manifest.json](source-manifest.json).

These are document-integrity checks. They do not validate the mathematics,
establish priority, reproduce every historical experiment, or certify any
claim of well-ordering.

The full working checkpoint also contained computational traces and scripts.
This package contains the proof documents rather than those experimental
artifacts. Older contextual references to work outside these documents have
not been silently promoted to newly proved results.

## Synchronization with the concise edition

The updated package adds the complete 38-page article release under `paper/`,
including its PDF, LaTeX sources, pinned native code, source concordance and
build instructions. Those files are copied unchanged from
`BTBMS-concise-proof-source-2026-10-26.zip`. The original notebook Markdown,
both notebook indices, the attribution note and the original source manifest
are preserved byte for byte.

The root README and proof overview now lead to the concise article; the
notebook guide and history explain the relationship between editions. The
article's condensation and mathematical clarifications predate this package
synchronization. This synchronization introduces no further mathematical
changes to the article or the notebook texts.

The original `source-manifest.json` remains a record of the original package,
including hashes for English guides that have since been revised. Use the
root [RELEASE-MANIFEST.json](../RELEASE-MANIFEST.json) to check the updated
package. It identifies the original input ZIPs and hashes every distributed
file except itself. Checks of links, hashes and compilation are document and
packaging checks, not an independent mathematical review.
