# BTBMS-well-order-draft
This repository outlines an idea that may lead to a proof of the well-orderedness of BTBMS ([BTBMS](https://wiki.googology.top/index.php/BTBMS)) in ZFC augmented by the existence of a virtually extendible cardinal. The idea is motivated in part by the approach considered in [A proof of termination of BMS](https://googology.fandom.com/wiki/User_blog:ReflectingOrdinal/A_proof_of_termination_of_BMS). Related arguments also appear in arXiv:2307.04606



update on Sep 11, 2026: After posting these preliminary notes, I learned of [Phyrion1343/1Y-Well-Ordering-Lean](https://github.com/Phyrion1343/1Y-Well-Ordering-Lean), which appears to establish a stronger result than the one targeted here. These notes are retained as a record of a preliminary approach and do not contain a complete proof.



### Remark on the foundational strength of the 1-Y proof

After briefly reading the proof in [Phyrion1343/1Y-Well-Ordering-Lean](https://github.com/Phyrion1343/1Y-Well-Ordering-Lean), I suspect that the stated ZFC upper bound is substantially stronger than necessary.

In particular, it seems plausible that the argument can be carried out in a system of roughly the strength of third-order arithmetic, or in a suitable weak set-theoretic formulation without the Power Set axiom. My intuition is that the relation $R(k,f(r),f(p),f(c))$ may be replaced by the existence of elementary embedding $L_{f(p)\times k+f(c)} \rightarrow L_{f(r)\times k+f(c)}$ with critical point $f(p)$ (or maybe $L_{f(p)\times (k+1)} \rightarrow L_{f(r)\times (k+1)}$ if $p=c$).

I have not checked this reduction formally, and I am not claiming a precise proof-theoretic upper bound. This is only an observation that may be worth investigating.
