# Proof overview

This guide follows the [concise English paper](paper/paper.pdf), dated
26 October 2026. That 38-page research manuscript is the primary proof text;
the Chinese notebooks preserve its development history. This overview is not
an independent verification of the arguments.

## 1. Domain and conclusion

For $I_k=\mathrm{Limit}[k]$, define the actual finite domain by

$$
\mathscr U=\bigcup_{k<\omega}D_{\mathrm{fs}}(I_k).
$$

Here $D_{\mathrm{fs}}(I_k)$ consists of nodes reached by finite histories of
the pinned original fundamental-sequence operation. The claim concerns this
domain and its original comparison, not every parseable expression:

$$
\mathrm{ZFC}+\text{“}0^\#\text{ exists”}
\ \vdash\ \operatorname{WO}(\mathscr U).
$$

Section 1 and the native-operation appendix fix the syntax, comparison and
operation. The auxiliary canonical ordering is fixed throughout as
$<_L^{\mathrm{fin}}$; the native operation is not changed by that choice.

## 2. From finite syntax to legal labels

Sections 2–3 establish the original finite completion, replay and pruning
properties, finite-history invariants, complete-window comparisons and strict
barriers. General arguments replace the accumulated node-specific cases.
There is no global two-bare or bare-ancestor restriction.

Sections 4–5 give the fixed canonical system and its uniform low certificates,
finite-term transport, the legal-labelling predicate and the work models
needed for reflection. Certificates are located at the actual low levels
used by the construction, including the tight successor case. Coding actual
incoming graphs uses source Gen and independently established finite-term
transport; it does not assert a canonical hull-collapse graph for every
arbitrary weak cut. Internal collection of whole graphs is distinguished
from transporting individual finite terms.

Section 6 proves common Point supply. When a construction enters an outer
frame, its internal witnesses are selected together again with the prescribed
source and finite bounds. A previously chosen output is not imposed as the
next step's extra source hypothesis.

## 3. Arbitrary-source descent

Section 7 retains the original one-map stage-1 supply, stage permissions,
completion requirements and the separate old-label bound for special steps.
Its central statement is:

$$
\begin{gathered}
M\in\mathscr U,\quad M\text{ nonterminal},\quad
C\text{ any legal labelling of }M
\\[2pt]
\Longrightarrow\quad
\forall n<\omega\ \exists C'\text{ legal for }M[n]
\quad[\rho(C')<\rho(C)],
\end{gathered}
$$

where $\rho(C)$ is the largest ordinal label. The quantifier over every
current legal source is essential. It is not restricted to outputs of one
preferred preceding construction.

## 4. Initialization, rank and the comparison order

Section 8 uses the first three Silver indiscernibles
$\iota_0<\iota_1<\iota_2$ to supply one bound $g'<\iota_2$ such that every
$I_k$ has a legal labelling below $g'$. Induction on a finite expansion history,
using arbitrary-source descent, gives a legal labelling below $g'$ for every
$M\in\mathscr U$. This is induction on natural-number history length and does
not assume the well-ordering under investigation.

Section 9 defines the rank separately for each node:

$$
r(M)=\min\{\alpha<g':
\exists C\,[C\text{ is legal for }M\text{ and }\rho(C)=\alpha]\}.
$$

The maximum for the empty terminal table is zero. Descent from a labelling
attaining the minimum yields

$$
r(M[n])\leq\rho(C')<r(M).
$$

A separate finite syntactic reachability argument shows that, for actual
nodes, $K<M$ admits a nonempty finite expansion path $M\to^*K$. Applying the
rank inequality along that path gives $r(K)<r(M)$ and hence the claimed
well-ordering. For the additional vertex, set
$r(\mathrm{Limit})=\iota_2$; then
$r(\mathrm{Limit}[n])<g'<\iota_2$.

## 5. Reading map and historical provenance

| Component | Current paper | Historical location |
| --- | --- | --- |
| Native system, legal framework and stage restrictions | Sections 1, 5 and 7; appendix | [Earlier notebook, section 0](proofs/legacy/part-001.zh-CN.md) |
| Completion, global finite invariants and descent construction | Sections 2–3 and 6–7 | [Continuation, sections 1003–1009](proofs/current/part-018.zh-CN.md) |
| Fixed canonical order and low certificates | Sections 4–5 | [Continuation, sections 1224–1234](proofs/current/part-022.zh-CN.md) and [sections 1235–1255](proofs/current/part-023.zh-CN.md) |
| Uniform Silver initialization | Section 8 | [Continuation, sections 1013–1019](proofs/current/part-019.zh-CN.md) |
| Comparison-to-expansion bridge | Section 9 | [Earlier notebook, sections 7.739–7.740; LR269–LR272](proofs/legacy/part-016.zh-CN.md) |
| Final v139 connection and least-label rank | Sections 5 and 7–9 | [v139 final argument, sections 1256–1268](proofs/latest-argument.zh-CN.md) |

The [source concordance](paper/SOURCE-CONCORDANCE.csv) gives a more detailed
provenance map. Notebook references identify the origins of arguments;
the concise article incorporates the arguments it uses. The current edition
also retains the amendments on actual work models, empty tail prefixes and
generated restrictions. See [HISTORY.md](HISTORY.md) for the revision record.
