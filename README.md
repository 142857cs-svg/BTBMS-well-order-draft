# BTBMS well-ordering: the G approach

**Read the [38-page English paper](paper/paper.pdf).**
The [LaTeX source and build instructions](paper/README.md) are included.

This repository presents the G approach (an idea that is shown in idea.jpg, motivated in part by the approach considered in [A proof of termination of BMS](https://googology.fandom.com/wiki/User_blog:ReflectingOrdinal/A_proof_of_termination_of_BMS). Related arguments also appear in arXiv:2307.04606) to the well-ordering of the original
finite BTBMS domain, working in ZFC + "0-sharp exists". The current paper is
the concise edition dated **26 October 2026**, based on checkpoint v139 and
the subsequent clarifications. It contains the proof arguments, rather than
only a review of the research notes.

## Start here

| File | Purpose |
| --- | --- |
| [paper/paper.pdf](paper/paper.pdf) | Current English article: 38 pages, including the native-operation appendix. |
| [paper/README.md](paper/README.md) | Article contents, scope, provenance and compilation instructions. |
| [PROOF-OVERVIEW.md](PROOF-OVERVIEW.md) | Short English guide to the theorem and proof structure. |
| [proofs/README.md](proofs/README.md) | Guide to the preserved Chinese research notebooks. |
| [RELATED-WORK.md](RELATED-WORK.md) | Attribution, independent development and the separate proof circulated via QQ. |
| [HISTORY.md](HISTORY.md) | Document milestones and changes in this edition. |

The paper is the primary reading entry. The Chinese notebooks retain the
development history, including earlier restrictions, provisional claims and
superseded arguments. They are not needed to compile the paper. The directory
name `proofs/current/` and the filename `proofs/latest-argument.zh-CN.md` are
retained from the v139 package; they identify that notebook snapshot, not a
newer edition of the paper.

## Claim and scope

Let $I_k=\mathrm{Limit}[k]$ and let

$$
\mathscr U=\bigcup_{k<\omega}D_{\mathrm{fs}}(I_k)
$$

be the finite nodes obtained by the original fundamental-sequence operation.
The manuscript claims

$$
\mathrm{ZFC}+\text{“}0^\#\text{ exists”}
\ \vdash\ \operatorname{WO}(\mathscr U)
$$

for the original comparison. It also gives a decreasing rank from the
additional `Limit` vertex, assigned the third Silver indiscernible.

The auxiliary labels use one fixed finite-constructor-first canonical order
$<_L^{\mathrm{fin}}$. The native BTBMS operation is unchanged. The proof does
not impose a global two-bare restriction; its descent statement quantifies
over every current legal source. Canonical graph claims concern the actual
legal maps and generated restrictions specified in the paper, not arbitrary
weak cuts or every possible canonical ordering.

## Build the paper

With TeX Live and the packages listed in [paper/README.md](paper/README.md):

```sh
bash paper/build.sh
```

This produces `paper/paper.pdf`. No research notebooks, custom fonts, network
connection or previous conversation are needed for compilation.

## Status and attribution

This is a **research proof manuscript**. It has undergone AI-assisted review
and document checks, but it is not a proof-kernel verification or an
independent human peer review. Compilation, file integrity checks and finite
experiments do not establish the mathematical claims.

The repository author supplied the initial G approach and guided the
investigation, including constraints, corrections and requests to generalize
earlier arguments. ChatGPT contributed substantially to later arguments,
lemmas, checking scripts and writing; those contributions go beyond language
editing and are not presented as the author's unaided work.

**test_alpha0**, who proposed approach F, circulated a separate proof via QQ and acknowledged the independent development of G, according to the repository author's account.
An exact public date and stable public link have not been established here.
The acknowledgment concerns independence, not verification of this manuscript.
See [RELATED-WORK.md](RELATED-WORK.md) for the complete attribution record.

When citing this work, identify the concise edition and the actual repository
commit or release. Preparation dates are not evidence of public priority.

## Upload package

Extract the ZIP and copy its contents into the repository root. The package
contains the article and its sources in `paper/`, the original notebook paths
in `proofs/`, and the updated English guides. Preserve any unrelated files
already in your repository. This package does not itself publish a GitHub
commit or release.
