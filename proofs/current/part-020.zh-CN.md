# Continuation notebook: part 020

Original sections: **1067–1117**.

**Historical research record.** Statements in this part retain their original
scope and may be revised later. Consult the latest argument for the current claim.

[Index](INDEX.md) · [Current status](../../README.md) · [Previous](part-019.zh-CN.md) · [Next](part-021.zh-CN.md)

<!-- BEGIN SOURCE TEXT -->
## 1067. 临界列上的整个有限适当后继段统一覆盖

B1228 已证明：任意极限 p>ω、任何有限 m≥1，均有

$$
 \mathrm{UGen}(p,p+m).
$$

所以对于当前原规范 J，凡 p+m<H，都可无额外生成假设地套 B1231—B1232。实际后继保持给 J(p+m)=c+m，从而

$$
 \boxed{
 \begin{gathered}
 1\le m<\omega,\quad p+m<H
 \Longrightarrow\\
 J''L_{p+m}
 =
 \operatorname{Hull}_{\mathrm{orig}}^{L_{c+m}}
      \bigl(p\cup\{c\}\bigr),\\
 k_{\rm can}=J|L_{p+m},\quad
 \lambda_{\rm can}=p+m,\\
 \mathrm{Gen}(c,c+m)\text{ 有实际 }L_V\text{ 内正确证书},\\
 J|L_{p+m}\text{ 有实际 }L_V\text{ 内整图低表示}.
 \end{gathered}
 }
 \tag{B1233}
$$

不要求 H non-bare、admissible 或极限。

若原 H=p+k、k≥2，则 B1210 给 V=c+k；本式同时覆盖 m=1,…,k−1，恰包括 v111 的完整原表路线未自动覆盖的整个顶部适当后继段。前述较低层和 non-bare 源路线继续适用，没有把它们重算为新成果。

最紧的示意例为：当前实际已有原规范图

$$
 J:L_{p+2}\longrightarrow_{\Sigma_1}L_{c+2}.
$$

则

$$
 J''L_{p+1}
 =
 \operatorname{Hull}_{\mathrm{orig}}^{L_{c+1}}
       \bigl(p\cup\{c\}\bigr),
$$

且同一限制图可低编码于 L_(c+2)。反向包含使用参数 $L_{c+1}=J(L_{p+1})$，正向包含使用已证 UGen(p,p+1)。全程不需要断言原全部表 H_(p+1)∈L_(p+2)。

这个例子以已有实际 J 为前提；它不单独证明这种任意薄标签配置存在，不是一个新 BTBMS 节点，更不是对某条原生边已经完成整份 Point 的声明。

一般 g=λ+m、λ>p，若已有 UGen(p,g)，也由 B1231—B1232 覆盖。若只有原 Gen，v113 的 X≺L_λ 与剩余条件 λ⊆X 仍须使用；本篇没有证明该条件对所有原 Gen 自动成立。已经有正确完整原表的情况，继续走 B1215—B1217，不必改走 UGen 路线。

## 1068. 当前基础义务的准确边界

本次复核没有在旧稿中找到 B1229—B1230 的这条连接。旧 B1204、B1215 通过逐个原运算相容证明像封闭；本篇使用实际较大原规范 hull 与“将见证坐标限制到小目标层”，直接获得相同的反向包含。这是对已有上行结论的推广，不是重开一类共同 Point 或严格挡项。

| 具体情形 | 本次结论 |
| --- | --- |
| 真实原规范大图 J 的任意适当限制 | 原小 hull⊆限制图之像，无需 Gen 或 UGen |
| 同上，源有 UGen | 精确原 hull、规范域与原限制图身份均已证明 |
| 同上，源有 UGen，g+1=H 也允许 | 正确 U 表可运输；目标普通 Gen、整图低代码与基底图低表示已付 |
| g=p+m<H | UGen 自动成立，整个有限适当后继段统一覆盖 |
| 一张旧原规范图与上述限制具有相同 p、c、目标 | 由同一原 hull 的唯一坍缩认同；不需要挑一张替代图 |
| 无上述实际规范大图来源的独立弱 bare 图 | 不由本篇自动覆盖 |
| 新量化 G 在实际低层中的完整可靠 Check_G | 外部规范性证明仍须内在化，不能只检查共同唯一输出项代码 |
| 一般 owner p<λ 的 Gen(p,λ+m) | UGen 充分路线的剩余仍是 v113 的基底覆盖条件；已有完整表路线保留 |

“独立旧图”这里只表示本定理的来源前件尚未验证，不等于已发现某个原生来源满足它且必然失败。本轮没有确认一条新的实际失败单边，也没有将辅助限制层计作一个完整 BTBMS 节点。

每条 FS 边仍从任意当前合法原 C 开始。凡已有恰当原图来源，本轮引理就直接应用；不要求前一步输出作为下一步输入，不将 UGen 或某种薄层形状增加为全域前提。进入共同 Point 的内部图、表与证书仍一起重选。

阶段0仍限于原 native-last 的 rootOnly 门槛及原末列前结束的源整包；阶段1仍只有原同一 j_*；阶段2仍只有原项操作许可，全部相邻指标保完整 Γ 时零新增，特殊步仍受旧保留项的旧标签界约束。相对虚拟支撑先删后 Cut、修正第6级与全部终止精确第7级均保持。

第三个 Silver 初始化、全部 Limit 首边及 B1179/B1182 的全实际域相对结论保持。现在已排除“这种适当限制还要另证非唯一闭包”和“这些已运输 UGen 限制还缺基底低图”两项重复待办；整份低层 G、R／Init／Point 正确证书及一般源生成连接仍未统一闭合。因此尚未获得无剩余接口的 ZFC＋0# 全 BTBMS 良序证明。

本轮是原系统内的证明与旧结果核对，无新有限节点枚举。直接依赖 B1199、B1210—B1211、B1213、B1215—B1216、B1219—B1220、B1228；不采用外部资料的另一种元组编码替换原定义。


# BTBMS：极限源旧规范图的独立低层规范性证书

日期：2026-10-25。检查点 v115；主稿第1069—1075节，B1234—B1239。

本篇补的是“原规范性如何进入实际低层检查”，不是再证明一个有限节点的扫描。v110 已有极限源的原运算相容性、图的层界与极限目标的原表；v114 则利用实际较大原规范图证明适当限制的 hull 身份。本篇把前一条路线接成不含较大图参数的有界规范性检查，覆盖源高度为极限的旧规范图，包括目标是任意有限后继层的情形。

检查直接核对目标 hull，不把 Gen 改写为新的反射工具，不要求 UGen，也不要求这张旧图是更大原规范图的适当限制。原见证元组、原构造良序、原 Skolem 运算及原精确域均不改变。

为避免将不同义务混称“完整 G”，本文把原 G 中的规范逆塌缩、临界点与精确域部分称为规范性条款 N；这是原条款的简称，不是另一个标记体系。下面的检查同时给有限存在前束加 Δ₀ 的全部初等性。若原 Σ₁ 采用这一口径，就一并支付这项初等性；若另外要求更广的有界交错语法类，原相应验证条款继续保留，不以本文的正存在式检查替换。这个约定问题不影响本文对原最小完整见证 hull 的精确认同，也不被另计为已经确认存在的新数学缺口。

## 1069. 极限源的整个原规范像，已是目标极限基底中的同一个 hull

固定一张当前实际旧原规范图

$$
 \begin{gathered}
 k:L_h\longrightarrow_{\Sigma_1}L_t,\qquad
 \operatorname{crit}(k)=p,\quad k(p)=c,\\
 p<h<c<t,\qquad h>\omega\text{ 为极限},\\
 R=k''L_h
   =\operatorname{Hull}_{\rm orig}^{L_t}(p\cup\{c\}).
 \end{gathered}
$$

写 t=μ+n，μ 为极限、n<ω；n=0 时 μ=t。令 A=L_μ、B=L_t。B1209 已给

$$
 c<\mu,\qquad R\subseteq A.
$$

回顾其位置理由：对 α<h 和每个有限 m，都有 α+m<h，所以 k(α)+m<t；当 n>0 时这迫使 k(α)<μ。每个源对象又属于某个适当 L_α，故其像属于 L_μ。这里没有取域顶点的像 k(h)。

还得到一个对所有原矩阵同时成立的见证存在性比较。若 $\bar y=k(\bar x)\in R^{<\omega}$，δ 为原 Δ₀ 矩阵，且

$$
 B\models\exists\bar w\,\delta(\bar y,\bar w),
$$

沿实际 k 反映，在 L_h 中取得见证；将各个见证取像，它们全部属于 A。Δ₀ 绝对性于是给

$$
 A\models\exists\bar w\,\delta(\bar y,\bar w).
$$

逆向由 A⊆B 的传递性直接成立。所以

$$
 A\models\exists\bar w\,\delta(\bar y,\bar w)
 \quad\Longleftrightarrow\quad
 B\models\exists\bar w\,\delta(\bar y,\bar w)
 \qquad(\bar y\in R^{<\omega}).
 \tag{W}
$$

这不是 L_μ≺Σ₁L_t：这里只量化 R 中的参数，不能将其扩大为 A 的全部参数。

若一个原运算在这些参数上有定义，(W) 给出坐标全部在 A 中的完整见证。因为 μ 是极限，原完整元组编码本身也在 A 中。原构造良序对构造层作末端延拓，故 B 中的最小完整见证就是 A 中的最小完整见证。因此

$$
 F_i^A(\bar y)=F_i^B(\bar y)
 \qquad(\bar y\in R^{<\omega}),
$$

且定义域相同。由原有限 hull 计算归纳，

$$
 \boxed{
 R=
 \operatorname{Hull}_{\rm orig}^{L_\mu}(p\cup\{c\})
 =
 \operatorname{Hull}_{\rm orig}^{L_t}(p\cup\{c\}).
 }
 \tag{B1234}
$$

两个方向都须核对。A 中存在完整见证时，最小完整元组已经在 A，因而在 B 中仍是同一选择；所以 A-hull 包含于 B-hull=R。反过来，每步 B-hull 计算的参数已经在 R；用(W)将该步转到 A，即得 R 包含于 A-hull。

本节只使用已有旧图的实际性质，没有从 Gen 选择标签，没有产生任何新的反射图。

## 1070. 图和基底 hull 的层界不必借助源 Gen 条款

B1209 已给图的层界。本节用实际原规范图自己的有限项表示重述其构造，使后续证书不需要添加源 Gen 或 UGen 条款。

原目标 hull 身份保证：每个 k(x) 有从 $\bar\xi<p$ 及 c 出发的原有限项表示。B1207 的极限源相容性和定义域反映，把同一有限计算沿 k 拉回源中；其值必为 x。这里使用的是已经存在的规范逆塌缩，而不是在向下公式中分析源 Gen。

源 h 为极限，B1212 直接给正确源项表 T_h∈L_(h+1)⊆L_c；这里不必另用 L_c 的 admissibility。由于 c<μ，T_h、L_h、p、c 都是 A 的元素。目标 A 为极限，原有限项求值在 A 上有 B1195/B1212 的统一正定义。于是通常函数图由下式在 A 上定义：

$$
 \begin{split}
 \langle x,y\rangle\in k
 \quad\Longleftrightarrow\quad&
 x\in L_h\ \land\ y\in A\ \land\\
 &\exists e,\bar\xi<p\
 \bigl[T_h(e;p,\bar\xi,x)
       \land\operatorname{Eval}^{A}(e;c,\bar\xi,y)\bigr].
 \end{split}
$$

源、目标对象及其通常有序对均在极限层 A。实际图的有限项表示保证全定义，相容性保证上式只给原来的 k(x)。因此 k∈Def(A)。

另外，B1212 给正确 H_μ、T_μ∈L_(μ+1)。在母集 A 上按 T_μ 的有限项表示分离 R，可得 R∈L_(μ+1)。这里即使 T_μ 不属于 A，也可在 L_(μ+1) 中用 B1213 的有界分离；不额外要求这一弱层有收集。

故

$$
 \boxed{
 k,\ R\in L_{\mu+1}.
 }
 \tag{B1235}
$$

k 在这里是真正的通常图，不只是一部分取值的代码。当 n≥1，它已属于 L_t；当 n=0，它属于 L_(t+1)。不与首 bare 有限后继源的通常图秩障碍冲突，因为那些图的源不满足 h 为极限。

源 T_h 只用于证明现有 k 的上述成员关系；接下来验证规范性的检查式甚至不必将 T_h 列为参数。

## 1071. 不含较大图参数的有界规范性检查

现在不再假定被检查的 k 已规范。构造检查式

$$
 \operatorname{Check}_{\rm lim}
 (p,c,h,t,\mu,k,R;\mathcal C_1,\ldots,\mathcal C_s).
$$

各 $\mathcal C_i$ 是分别量化的正确层、求值、真值及原有限项表资料，不组成一个可能越界的大元组。对本次实际有限 n，采用 B1197/B1205 的对应有限 Def 代码；n=0 使用极限层代码。

以下 U_μ=U_(μ,0)、U_t=U_(μ,n) 均指 B1205 的正存在式真值表，不是 v112 的唯一输出运算表。检查包括以下四组有界条款。

1. **层、图与临界点。** 正确识别 S=L_h、A=L_μ、B=L_t 及 t=μ+n，h、μ 为极限，p<h<c<t、c<μ。要求 R⊆A，k 恰为从 S 到 R 的成员关系同构；逐点检查所有 α<p 固定，且 k(p)=c。总定义、单值、单射、满射和成员关系的两个方向，均只在 S、A、R、k 中有界量化。
2. **表正确。** 给出 A 上正确的 D_μ、U_μ、原 H_μ、原 T_μ，以及 B 上正确的 D_t、U_t 和对象代码解释。U 表精确记录全部有限存在前束加 Δ₀ 查询；H_μ、T_μ 仍按原最小完整见证语法核验。其正确性使用 B1205、B1212 的有界检查，不以“这张表正确”作为额外语义公理。
3. **R 恰为基底原 hull。** 对每个 y∈A，要求 y∈R 当且仅当 T_μ 给出从有限多个 ξ<p 及 c 出发的原有限项、其值为 y。项、参数序列和计算轨迹全部在极限代码母集 A 内有界量化。这一双向条款保证精确生成，不只是证明 R 对某些运算封闭。
4. **完整目标没有新增见证。** 对每个原矩阵编号 i∈ω，以及每个坐标属于 R 的有限参数序列，比较 U_t 与 U_μ 中“该矩阵存在完整见证”的真值，要求两者相同。参数序列在 A 中编码，目标查询使用正确的 B 代码解释。遍历的是 R 的全部有限参数序列和全部原矩阵，不是只遍历曾在某一条有限计算中用到的查询。

上述每个量词均被已有集合所界定。尤其第4项虽检查全部原运算，其形式仍是有界量化；并未存在量化 B 上的全部原非唯一选择表 H_t。

证明可靠性。由第4项和 μ 为极限，对每个 R 中的输入，B 中的原最小完整见证与 A 中的同一选择一致，理由与第1069节完全相同。第3项给 R 等于 A-hull；因而 R 对全部原 B-运算封闭，包含原生成元，得 B-hull⊆R。A 中的每步原计算在 B 中仍给同一值，反向得 R⊆B-hull。因此

$$
 R=\operatorname{Hull}_{\rm orig}^{L_t}(p\cup\{c\}).
$$

第1项给 S=L_h 为 R 的传递坍缩，且 k 是其逆同构。唯一坍缩遂确定精确的规范域和整张图：

$$
 \boxed{
 \operatorname{Check}_{\rm lim}
 \Longrightarrow
 \left[
 \begin{gathered}
 k''L_h=\operatorname{Hull}_{\rm orig}^{L_t}(p\cup\{c\}),\\
 \lambda_{\rm can}=h,\quad k=k_{\rm can},\\
 \operatorname{crit}(k)=p,\quad k(p)=c.
 \end{gathered}
 \right]
 }
 \tag{B1236}
$$

此可靠性证明适用于任意通过检查的候选对象，不调用一个外部已经规范的更大 J，也不以“候选 k 已是原规范图”为前提。因此它能够验证新的存在变量，不只描述旧图的外部性质。

同时，第3—4项使 R 对 B 的全部原 Δ₀ 见证选择封闭。先按有界公式归纳得到 R≺Δ₀B，再对存在前束逐个取见证，得到 R≺_(∃Δ₀)B；经第1项的同构，k 具有该口径的全部初等性。这不是只检查有限多个应用公式。

原 cut 条件也随之得到 R∩c=p。若 ξ∈R∩c，由 Δ₀ 初等性，其源原像为序数 α；若 α≥p，序数次序保持及 k(p)=c 将迫使 ξ≥c，矛盾。因此 α<p，ξ=k(α)=α。反向包含由逐点固定给出。

若原 G 的 Σ₁ 指这一有限完整见证语法，上述便同时核准原初等性。若实际采用更宽的有界交错语法，不能仅用这个推论删除其原验证项。本文没有假定弱层中的收集正规形定理。

## 1072. 所有极限源旧规范图都能在任意实际 v>t 中提供这些证书

回到第1069节的实际旧图，并取任意实际工作边界 v>t。分项核对 Check_lim 的所有见证。

| 对象或证书 | 已证层界 |
| --- | --- |
| p、c、h、t、μ 及正确 S、A、B 层资料 | 分别属于 L_v；目标层资料按 B1197/B1205 的有限 Def 解释取得 |
| 原通常图 k、其像 R | L_(μ+1)，由 B1235 |
| A 的 D_μ、U_μ、原 H_μ、原 T_μ 及正确检查资料 | L_(μ+1)，由 B1205/B1212 |
| B 的 D_t、U_t、代码原子图及正确求值资料 | L_(t+1)，由 B1197/B1205 |
| 图同构、精确域、临界点、R 的双向生成式及见证比较(W) | 对上述对象作有界检查，不另增加真值层 |

因为 μ+1≤t+1≤v，所有需要的证书分别落在实际 L_v。n≥1 时即使 v=t+1 也成立；n=0 时所有目标表与图同样已在 L_(t+1)。

第3项由 B1234 支付。第4项由实际 k 的初等性及其整像落在 A 中支付。第1项来自实际旧图，正确表则由已有构造取得。因此

$$
 \boxed{
 \begin{gathered}
 k\text{ 为当前旧原规范图},\quad h\text{ 为极限},\quad v>t\\
 \Longrightarrow
 L_v\models
 \exists R\,\exists\mathcal C_1\cdots\exists\mathcal C_s\
 \operatorname{Check}_{\rm lim}
 (p,c,h,t,\mu,k,R;\mathcal C_1,\ldots,\mathcal C_s).
 \end{gathered}
 }
 \tag{B1237}
$$

若 k 本身也须共同重选，将 k 放进同一个存在前束即可；B1235 已保证其实际成员关系。原固定参数及变量边界仍按各次 Point 处理。

这是“外部规范性”到“实际低层存在正确证书”的连接。它不需要先把某张更大规范图塞进 L_v，因而解决了 v114 所保留问题中的整个极限源分支。没有把所有弱 bare 图都限成此类，也没有从“在 L_(ι₂) 中有资料”代替实际 v 的层界。

## 1073. 可直接用于同一次共同存在式，且不新增反射来源

设一次实际 R／Init／Point 检查中，要记录有限张旧规范图 k_i，目标高度 t_i<v，每张源高度 h_i 为极限。父列 p_i、目标列 c_i 可以不同。B1237 对每张分别给出实际 L_v 内的正确资料。

于是可以将所有这些资料分别存在量化，组成同一个有限有界检查。共享的物理图、标签或源项仍使用同一个变量；不同请求不因高度相同而被认作同图。所有等式 h_i=δ_i、δ_i=g_(Γ_i) 及实际取值约束，仍按原第7级及原连接条件逐项保留。

从纯逻辑上，有

$$
 \boxed{
 \text{有限多张上述极限源图的规范性条款}
 \quad\text{可用同一实际 }L_v
 \text{ 中的有限存在前束加有界检查共同见证。}
 }
 \tag{B1238}
$$

其可靠性由 B1236 保证：反射后只要检查成立，新变量所解释的图仍是原规定的规范图；不需要在反射后重新调用外部较大图的规范性。

这里没有实施一次新的标签反射。若现有阶段1方案使用这些检查，它仍只沿原同一个 j_* 反射完整存在式。其他 k_i 只是被核验的图记录；对它们的模型论性质所作的证明，不将它们升级为阶段1中额外可用的供应图。

也没有把本步选出的任何证书固定为下一步输入。进入更外的共同 Point 时，各图、R_i、正确表和证书仍一起重选。Gen 在原式中继续作为普通条款；Check_lim 本身没有 Gen 或 UGen 前提。

本结论只替换已经支付的规范性子句。整个 R／Init／Point 还有其他项、私有表、共同边界和来源连接时，仍须全部检查；不能用本节的有限合取代替它们的存在性。

## 1074. 极限目标的旧 bare 记录不再留下本项规范性缺口

若一张实际原图的目标 t 为极限，B1210 的后继形状刚性保证其源 h 也为极限。因此 B1237 自动适用，且 μ=t。

与此同时，B1212 已将普通 Gen(c,t) 的正确原表及有限项证书放进 L_(t+1)。所以对于任何实际 v>t，

$$
 \boxed{
 \begin{gathered}
 t\text{ 为极限}\\
 \Longrightarrow
 \text{旧图的规范性、精确域与临界点证书，}\\
 \text{以及原目标普通 Gen 的正确证书，}\\
 \text{均可分别置于实际 }L_v.
 \end{gathered}
 }
 \tag{B1239}
$$

这是把已有构件接成实际可用的记录检查，不把极限标签重新计成一个 BTBMS 完整节点。bare 目标没有附高 D4；若记录属于更大非空项，其余内部约束仍沿原接口处理。原 Σ₁ 口径按第1069节前的说明保留。

对于“源 h 为极限、目标 t=μ+n 为后继”，本篇同样已经支付原规范性与图记录，但没有因此免费取得目标普通 Gen(c,t) 的全部证书。已有 v111/v113 的原表、唯一输出生成及基底覆盖路线继续用于该独立条款。

还可以准确看出本方法的另一边界。若实际源 h=λ+n、n≥1，B1210 给 t=k(λ)+n，故 μ=k(λ) 本身属于原图的像；但 μ∉L_μ。因此这种图不满足 R⊆L_μ，不能沿用本篇的基底 hull 检查。它仍须使用有限 Def 代码或其他真实可用的证书方式，不能把这项不适用说成原图不规范或某条边不下降。

## 1075. 已解决的分支和仍未闭合的义务

本次实质新增的是 B1236—B1238：把极限源旧图的原规范性组织成有界可靠检查，并证明所有正确见证确实分别存在于任意实际 L_v、v>t。B1234—B1235 是使这份检查不依赖源 Gen、UGen 或更大规范图参数的连接。旧 v110 已有大部分语义与层界构件，本篇没有把那些构件本身重报为新成果。

| 义务 | 当前准确状态 |
| --- | --- |
| 旧原图的源 h 为极限，目标可以是后继 | 原 hull、精确规范域、临界点的独立低证书已付；正存在式初等性一并可核 |
| 旧原图的目标 t 为极限 | 上项自动适用；目标普通 Gen 的低证书也已付 |
| 源、目标都是有限后继 | 保留 v109—v114 的低代码、正确表运输和适当限制结论；一般独立低规范性证书尚未统一完成 |
| 一般后继目标的普通 Gen | 已有相应原表或 UGen 证书时可核；owner 低于极限基底的剩余覆盖条件未自动消失 |
| 原 G 若另含更宽 Σ₁ 语法要求 | 保留原验证项；不把本篇 ∃Δ₀ 初等性擅自扩大，也不把约定差异冒充已确认新反例 |
| 完整 R／Init／Point | 本篇支付其中上述规范图子句；其余全体条款仍须共同取得 |
| 全 BTBMS 良序 | B1179/B1182 的全域相对结论保持；到 ZFC＋0# 的无剩余基础归约仍未完成 |

没有确认新的实际失败单边，也没有将这张表的未完成项当作某个原生节点不下降的证据。阶段0已付的严格承载图、v114 已付的有限适当限制、第三个 Silver 初始化及全部 Limit 首边均保留。

任意当前原 C、共同重选、阶段0的原 native-last rootOnly 门槛与源整包界、阶段1唯一原 j_*、阶段2项操作及全称保完整 Γ 时零新增、特殊步旧保留项的旧标签界、先删相对虚拟支撑再 Cut、修正第6级及全部终止精确第7级全部不变。

本轮没有新增有限节点枚举。直接复核 B1193—B1195、B1197、B1199、B1205—B1212、B1213 及 B1229—B1233。没有换用另一套 Skolem 函数或见证元组排序，也没有引入两bare、全标签 admissible 或未来 Point 公理。


# BTBMS：后继源的 cut 刚性与独立整图低编码

日期：2026-10-25。检查点 v116；主稿第1076—1083节，B1240—B1246。

本篇把 v114 的适当限制结论推广到不预设较大规范图来源的独立小图。主要结论是：后继源实际图若具有原唯一输出生成证明，则原 cut 条件已经足以推出精确原规范域及整图身份。证明不要求所有非唯一原 Skolem 运算逐一与该图交换。另将共同唯一输出项的低编码推广到独立整图，并支付其极限基底通常图的低表示。对临界有限后继目标，更直接由原 cut 取得精确坍缩，连预给实际图及 Gen/UGen 前提都不需要。

结论的使用范围必须保留：唯一输出生成仍是已识别情形的一种充分证明，不增加任意当前原 C 的合法性条件。借它认同规范图的有限项分析，只登记于原已许可的实际向上传递及其基础核验；不将阶段1的原 G 替换成“UGen 加 cut”，不通过 Gen 选择下行标签或增加反射来源。这里尚未构造一般后继目标中原 cut 的低层可靠证书。因此外部 cut 等价定理不等于完整 Check_G 已付。

以下 $\exists\Delta_0$ 指所有有限存在前束加 $\Delta_0$ 矩阵，见证坐标分别量化；不要求其普通元组属于弱层。原实际图的全部 $\Sigma_1$ 要求照旧。本篇的语义引理只需要上述较小公式类，不能因此删除原 G 可能另外要求的公式核验。

## 1076. 唯一输出生成确定整像，并给固定参数下的唯一性

沿用 B1219—B1220：$U_g$ 只记录原矩阵中指定输出由全部见证唯一确定的计算，辅助证书可以不唯一；$T_g^u$ 记录这些原计算的有限项。原最小完整见证元组、原构造良序及原运算编号均不改变。

设实际有

$$
 k:L_h\longrightarrow_{\exists\Delta_0}L_t,\qquad
 \operatorname{crit}(k)=p,\qquad k(p)=c,\qquad
 \mathrm{UGen}(p,h).
$$

令 $Y_t(p,c)$ 为目标中从 $p\cup\{c\}$ 出发，只调用上述唯一输出原运算所生成的闭包。这个辅助集合不替代原规范 hull。

先证明

$$
 k''L_h=Y_t(p,c).
$$

源中某一步有完整见证是一个 $\exists\Delta_0$ 事实；出现两份输出不同的见证也是一个 $\exists\Delta_0$ 事实。因此原初等性同时保持和反映存在性及指定输出唯一性。B1211 于是给每次唯一输出计算的相容性。对源的有限计算树归纳，得到 $k''L_h\subseteq Y_t(p,c)$。

反方向不只依赖源生成。若目标对有限多个像内输入有一个唯一输出原计算，见证存在先反射到源；目标的输出唯一性保证源输出也唯一。其源输出的像就是目标的唯一输出。因此 $k''L_h$ 对所有目标唯一输出运算封闭，又含有全部生成元，故 $Y_t(p,c)\subseteq k''L_h$。

从而

$$
 \boxed{
 \mathrm{UGen}(p,h)
 \Longrightarrow
 k''L_h=Y_t(p,c)
 \subseteq Q:=\operatorname{Hull}_{\mathrm{orig}}^{L_t}
                  (p\cup\{c\}).
 }
 \tag{B1240}
$$

这里最后的包含只因每个唯一输出计算都是原运算的一次真实计算；没有反过来假定原全部非唯一运算都保持整像。

还有固定参数下的唯一性。若另有 $k':L_{h'}\to_{\exists\Delta_0}L_t$，同样固定所有 $\xi<p$、将 p 送到 c，且 $\mathrm{UGen}(p,h')$，则两图的整像都是同一个 $Y_t(p,c)$。它们均是传递集到这个成员结构的同构；传递坍缩唯一性给 $h=h'$ 且 $k=k'$。这不是对任意候选参数的规范性断言：唯一的初等图仍须另行认同原 Q。

## 1077. 独立整图也有紧下一层低代码

取原实际位置

$$
 p<h<c<t<v,\qquad
 h=\lambda+n,\quad n\ge1,\quad
 t=\mu+n,\quad \mu=k(\lambda),
$$

其中 $\lambda,\mu>\omega$ 为极限，后两项由 B1210 得到。设 $\mathrm{UGen}(p,h)$，但此处不要求 k 已经规范，也不要求它是任何更大图的适当限制。

置 $A=L_\lambda$、$B=L_\mu$。有 $\lambda<h<c\le\mu$，故 $A\subseteq B$；B 是极限层，且 $B\in L_v$，能容纳其元素的有限句法代码、配对及有限序列。

v114 运输源表的做法不能原样使用：源正确表一般只知属于 $L_{h+1}$，不必属于 $L_h$，因而这里不能写 $k(T_h^u)$。改为在两端独立重建正确表。B1219—B1220 给

$$
 U_h,T_h^u\in L_{h+1}\subseteq L_c\subseteq L_v,
 \qquad
 U_t,T_t^u\in L_{t+1}\subseteq L_v,
$$

各份正确层、原子图、求值及部分真值证书也分别满足相应层界。没有把这些对象再打包为一个高秩元组。

在低母集 B 上定义代码对关系 C：源代码 a 和目标代码 b 被配对，当且仅当存在同一个有限唯一输出项 e 及有限多个 $\xi_i<p$，使它们分别表示

$$
 e^{L_h}(p,\bar\xi),
 \qquad
 e^{L_t}(c,\bar\xi).
$$

这里“同一个”指原运算编号与计算树结构相同；叶子只按 $p\mapsto c$、$\xi_i\mapsto\xi_i$ 更换。高层对象始终以 B1197 的有限 Def 代码表示。代码域、项表、编号和有限序列的量词全部有界，求值相对化到作为元素的正确 $L_h,L_t$。B1213 的有界分离给 $C\in L_v$。

B1211 保证任何通过共同项检查的代码对都表示 $y=k(x)$。源 UGen 又保证每个 x 都有这种表示。故解码后 C 恰是整个 k；同一对象的不同代码给同一个实际值。特别，

$$
 \boxed{
 \begin{gathered}
 \mathrm{UGen}(p,h),\quad h=\lambda+n,\quad n\ge1,\quad v>t\\
 \Longrightarrow
 \exists C\in L_v\ 
   [C\text{ 准确编码整张实际 }k],\\
 E=\{\langle x,k(x)\rangle:x\in L_\lambda\}\in L_v.
 \end{gathered}
 }
 \tag{B1241}
$$

第二行的通常基底图 E 也须给出构造：B1199 给 $k[L_\lambda]\subseteq L_\mu=B$。对 $x\in A,y\in B$，两者的普通有序对属于极限层 B。用 C 和正确求值关系，在 B 上有界分离恰好这些满足 $y=k(x)$ 的普通有序对，便取得 E。故 $\lambda>p$ 时的基底低图义务，在本节覆盖范围内也已支付。

若需核验这份代码确为初等图，可另外分别给 B1205 的正确源、目标正存在式真值表 $P_h,P_t$。代码意义下的全域性、单值性、单射性、临界点，以及对全部公式编号和有限参数代码的 $P_h/P_t$ 比较，均为有界检查；正确资料分别在 $L_v$。这只支付 $\exists\Delta_0$ 初等性，不替代原 G 其余验证项。

此处也没有推出 $\mathrm{UGen}(c,t)$：独立图的像可以只是目标真子结构，源生成检查并不能运输成覆盖整个目标的表。v114 能取得目标 Gen，是因为源表处于实际较大 J 的定义域内；两种情形不混用。本节仅重建现有图的准确表示，不借 UGen 选择新标签或认同原规范域。

## 1078. 含最后真层的后继 hull 可以精确凝聚

先证明一个独立语义引理。设

$$
 N=L_{\beta+1}=\operatorname{Def}(M),\qquad M=L_\beta,
 \qquad Q\prec_{\exists\Delta_0}N,\qquad M\in Q.
$$

则 Q 的传递坍缩恰为某个后继构造层。

令 $X=Q\cap M$。对任何固定一阶公式 $\varphi$ 及 X 中有限多个参数，将 $\varphi$ 的所有量词限制到 M，得到 N 中以 M 为参数的 $\Delta_0$ 公式。在 Q 内，参数 M 的成员恰是 X。由 Q 的 $\Delta_0$ 初等性，

$$
 X\prec M=L_\beta
$$

是完整一阶初等性。故可使用普通 Gödel 凝聚定理，取得

$$
 \pi_0:X\cong L_\delta.
$$

这里只在完整初等的 X 上用经典凝聚，不假定一般弱后继层中的 $\Sigma_1$ 子结构都可直接凝聚。经典凝聚的所需表述可核对 P. D. Welch, *A Condensed History of Condensation*（2013），第3页：
https://people.maths.bris.ac.uk/~mapdw/EUSetTheory.pdf 。

再证明 Q 的完整坍缩是 $\operatorname{Def}(L_\delta)$。

任取 $y\in Q$。因为 $y\in\operatorname{Def}(M)$，可以在外部固定一个真实定义公式 $\psi$，使 y 是 M 上该公式与某组 M 参数所定义的子集。“存在这组参数属于 M，且对全部 $z\in M$，$z\in y$ 当且仅当 $\psi^M(z,\bar a)$”是以 M、y 为参数的有界公式；同时保留 $y\subseteq M$。由 Q 的初等性，可选参数 $\bar a\in X$。Q 与 N 对此有界公式的一致性保证这仍是 y 在 M 上的真实定义。因此 y 的坍缩是 $L_\delta$ 上同一公式用 $\pi_0(\bar a)$ 定义的子集。

反过来，任取 $L_\delta$ 上由固定公式和有限参数定义的子集，将参数拉回 X。在 N 中存在相应的 M 定义子集 y；“存在 y 且满足这份定义”是 $\exists\Delta_0$ 公式。它反射到 Q，取得真实 $y\in Q$。其坍缩就是所问子集。两个方向合起来给

$$
 \boxed{
 Q\prec_{\exists\Delta_0}L_{\beta+1},\quad L_\beta\in Q
 \Longrightarrow
 \operatorname{Coll}(Q)=L_{\delta+1}
 \text{，其中 }\operatorname{Coll}(Q\cap L_\beta)=L_\delta.
 }
 \tag{B1242}
$$

Q 的成员结构外部良基；其外延性由 $\Delta_0$ 初等性得到：若两个不同 Q 元素在 N 中有不同成员，则一个有界存在式把区分成员带回 Q。因此上述完整传递坍缩确实存在，且对 X 的限制就是 $\pi_0$。

现在核对原 hull 的适用条件。原 Q 对全部原见证选择及坐标投影封闭，故通常的有限公式归纳先给 $\Delta_0$ 初等性，再对每个有限存在前束取得全部见证坐标，得到 $Q\prec_{\exists\Delta_0}L_t$。这里是外部闭包论证，没有声称全部原运算表已经属于某个薄层。

若 k 的源是 $h=\alpha+1$，则 B1199—B1210 给

$$
 k(L_\alpha)=L_{t-1}.
$$

B1240 已给 $k''L_h\subseteq Q$，而 $L_\alpha\in L_h$，所以 $L_{t-1}\in Q$。因此这个原 Q 自动符合 B1242 的“最后真层作为元素在场”前提。无需新增一个普遍的弱层凝聚公理。

## 1079. 固定生成序数的唯一输出嵌入必为恒等

设

$$
 \ell:L_h\longrightarrow_{\exists\Delta_0}L_d,\qquad
 \mathrm{UGen}(p,h),\qquad
 \ell(\xi)=\xi\quad(\xi\le p).
$$

初等嵌入在序数上严格保序。对所有 $\alpha<h$ 作外部归纳得 $\alpha\le\ell(\alpha)<d$，所以 $h\le d$，从而自然包含 $L_h\subseteq L_d$。

对源中一份唯一输出有限计算归纳。叶子全部被固定。若某结点的输入已经固定，取其源中真实完整见证的各个坐标。这些坐标都是 $L_h$ 的元素，因而也在 $L_d$ 中。传递层间的 $\Delta_0$ 绝对性表明，源输出本身仍是目标矩阵的一个允许输出。另一方面，初等性把源输出唯一性保持到目标；$\ell$ 所给的输出因此只能是原输出。逐结点归纳及 UGen 得 $\ell(x)=x$ 对所有 $x\in L_h$ 成立。

若 h 还是后继，写 $h=\alpha+1$，则还能排除 $d>h$。参数 $M_0=L_\alpha$ 属于 $L_h$。在 $L_h=\operatorname{Def}(M_0)$ 中，每个 z 都是 $M_0$ 的子集，而 $M_0\notin M_0$，故

$$
 L_h\models\neg\exists z\ (M_0\in z).
$$

若 $d>h$，则 $L_h\in L_d$ 且 $M_0\in L_h$，所以

$$
 L_d\models\exists z\ (M_0\in z),
$$

与 $\ell=\mathrm{id}$ 的 $\exists\Delta_0$ 初等性矛盾。因此

$$
 \boxed{
 \begin{gathered}
 \mathrm{UGen}(p,h),\quad
 \ell:L_h\to_{\exists\Delta_0}L_d,\quad
 \ell|_{p+1}=\mathrm{id}\\
 \Longrightarrow \ell=\mathrm{id};\\
 h\text{ 为后继}\Longrightarrow d=h.
 \end{gathered}
 }
 \tag{B1243}
$$

最后的高度相等使用了后继前提；对极限 h，不能只由恒等嵌入就排除一个适当的自然初等扩张。

本引理用的是唯一输出计算的实际见证及传递性。没有假定非唯一原最小选择在自然包含下相容，也没有把高秩完整见证元组放进弱源层。

## 1080. 后继源的原规范性恰由原 cut 决定

设实际

$$
 k:L_h\longrightarrow_{\exists\Delta_0}L_t,\qquad
 \operatorname{crit}(k)=p,\quad k(p)=c,\quad
 p<h<c<t,
$$

h 为后继，且有 $\mathrm{UGen}(p,h)$。定义原目标 hull

$$
 Q=\operatorname{Hull}_{\mathrm{orig}}^{L_t}(p\cup\{c\}).
$$

假设原 cut 条件

$$
 Q\cap c=p. \tag{cut}
$$

B1240 给 $k''L_h\subseteq Q$，B1242 给 Q 的传递坍缩

$$
 \pi:Q\cong L_d.
$$

由 cut 和原生成元，$\pi(\xi)=\xi$ 对所有 $\xi<p$ 成立，而

$$
 \pi(c)=\operatorname{otp}(Q\cap c)=p.
$$

于是可分解实际图为

$$
 \ell=\pi\circ k:L_h\longrightarrow L_d.
$$

对像内参数，k 与 Q 都同原 $L_t$ 对 $\exists\Delta_0$ 公式一致；再经同构 $\pi$，可知 $\ell$ 是 $\exists\Delta_0$ 初等嵌入。它固定全部 $\xi\le p$。B1243 给

$$
 d=h,\qquad \ell=\mathrm{id}_{L_h}.
$$

所以 k 就是 $\pi^{-1}$，其像覆盖全部 Q，且精确规范域就是原 h。尤其，反向 hull 包含此时已经成立，不再额外索取“全部非唯一原运算与 k 逐一交换”。

逆方向同样明确。若 k 已是原规范逆塌缩，$Q=k''L_h$。所有 $\xi<p$ 被固定；任何像内序数小于 c 的原像也是序数，且不可能大于等于 p，否则其像大于等于 $k(p)=c$。因此 $Q\cap c=p$。

得到

$$
 \boxed{
 \begin{gathered}
 h\text{ 为后继},\quad \mathrm{UGen}(p,h),\quad
 k:L_h\to_{\exists\Delta_0}L_t,\quad
 \operatorname{crit}(k)=p,\quad k(p)=c\\
 \Longrightarrow\\
 \left[
 k\text{ 为原精确规范逆塌缩}
 \ \Longleftrightarrow\
 \operatorname{Hull}_{\mathrm{orig}}^{L_t}(p\cup\{c\})\cap c=p
 \right].
 \end{gathered}
 }
 \tag{B1244}
$$

盒内沿用本节位置条件。结论中的 hull 始终是原完整见证选择定义的 hull。没有将 $Y_t(p,c)$ 指定为另一个规范 hull；是原 cut 迫使原 Q 与实际像、唯一输出闭包三者相等。

也没有把“Q 恰好可坍缩到某个 L_d”视作待反射的免费证书。B1242 只是本定理的外部证明步骤，最后精确 d=h 是 B1243 的结论，不是预先加入的 $\lambda_{\rm can}<c$ 或精确域假设。

B1244 可用于已有许可的实际上行中核验原图身份，也可用来定位原基础证明真正需要承担的条件。它不授权把下行存在式中的原 G 改成 UGen 加 cut；尤其，尚未证明 (cut) 有正确见证分别属于实际 $L_v$。

## 1081. 临界列有限后继家族不再另欠规范域认同

B1228 已证明任意极限 $p>\omega$、任意有限 $n\ge1$ 都有

$$
 \mathrm{UGen}(p,p+n).
$$

因此对任何实际已有

$$
 k:L_{p+n}\longrightarrow_{\exists\Delta_0}L_{c+n},
 \qquad \operatorname{crit}(k)=p,\qquad k(p)=c,
 \qquad p+n<c,
$$

B1244 给

$$
 \boxed{
 \begin{gathered}
 \operatorname{Hull}_{\mathrm{orig}}^{L_{c+n}}
       (p\cup\{c\})\cap c=p\\
 \Longleftrightarrow\
 k''L_{p+n}=
 \operatorname{Hull}_{\mathrm{orig}}^{L_{c+n}}
       (p\cup\{c\}),\\
 \text{成立时 }\lambda_{\rm can}=p+n,\quad k_{\rm can}=k.
 \end{gathered}
 }
 \tag{B1245}
$$

无需让 k 成为 $L_{p+n+1}$ 或更高原规范图的限制，也无需对 p、c 新增 admissibility 要求。本节不证明任意这样的 p、c 都存在实际 k；原图存在性仍是前提。

最紧的旧例是

$$
 k:L_{p+1}\to L_{c+1},\qquad v=c+2.
$$

其同码整图表示已有 B1201，正存在式初等性资料已有 B1202，普通 $\mathrm{Gen}(c,c+1)$ 的正确证书已有 B1220/B1228。本次新增的是：若原 cut 已成立，精确原 hull 与原规范域不再有另外的语义缺口。不能仍把“非唯一运算相容”“反向包含”“精确域”列成三个相互独立的待办。

但原 cut 的低层可靠检查仍须支付。知道已有合法 k 在外部满足 cut，并不自动说明一个重新存在量化的代码变量在 $L_{c+2}$ 中已经通过可靠的原规范性核验。也不能只用“同参数下初等图唯一”，就省去反射后新参数的原 cut 检查。

这仍是早已研究的有限 Def 家族，不登记为一个新完整 BTBMS 节点。一般 $\lambda>p$ 的后继源，只要已有 UGen 证明，同样使用 B1241/B1244；若仅知普通 Gen，则 v113 的基底覆盖问题保留。

## 1082. 临界有限后继目标：cut 本身确定坍缩，无须预给实际图

上一节以实际 k 为前提。对目标极限基底恰是生成参数 c 的整个有限后继家族，还可以去掉这个前提，直接从原 hull 凝聚。此结论也不使用 Gen 或 UGen。

设 $p,c>\omega$ 为极限，$n\ge1$ 为固定有限数，且 $p+n<c$。令

$$
 Q=\operatorname{Hull}_{\mathrm{orig}}^{L_{c+n}}
        (p\cup\{c\}),\qquad Q\cap c=p.
$$

先不假定任何嵌入存在，直接证明 $L_{c+n-1}\in Q$。

参数 c 本来就在 Q 中。B1191 的 $\operatorname{LevChk}$ 以 c 为输入唯一确定 $L_c$；其正确辅助证书分别在 $L_{c+1}\subseteq L_{c+n}$，所以这是一项输出唯一的原计算，得 $L_c\in Q$。依次识别 $L_{c+r}$，$1\le r<n$：B1198 给上一层的完整代码真值

$$
 S_{c,r-1}\in L_{c+r+1}\subseteq L_{c+n}.
$$

正确代码、原子图与有限 Def 资料也在同一边界内。以已经识别的低层分别作参数，正确真值加 Def 双向检查唯一确定新层 $L_{c+r}$。这与 B1199 的有限后继层识别完全相同，只是在此直接作为原 hull 的唯一输出计算使用，而不沿任何图运输。每个固定 r 所需证书分别量化，不把它们另组为高秩包。归纳得到 $L_{c+n-1}\in Q$。

原 Q 是 $\exists\Delta_0$ 初等子结构，因此 B1242 已给 $\operatorname{Coll}(Q)=L_d$。另一方面，后继运算的唯一输出使 $c,c+1,\ldots,c+n-1$ 全在 Q 中。结合 cut 与目标序数上界，准确有

$$
 Q\cap\mathrm{Ord}
   =p\ \cup\ \{c,c+1,\ldots,c+n-1\}.
$$

这不是“Q 的所有对象都只有这些”，而是其序数部分的完整描述。其序型恰为 $p+n$。传递坍缩保持序数部分的序型，而 $L_d\cap\mathrm{Ord}=d$，所以 $d=p+n$。

于是得到

$$
 \boxed{
 \begin{gathered}
 Q=\operatorname{Hull}_{\mathrm{orig}}^{L_{c+n}}
       (p\cup\{c\}),\quad Q\cap c=p,\quad p+n<c\\
 \Longrightarrow
 \operatorname{Coll}(Q)=L_{p+n},\\
 k_{\rm can}:L_{p+n}\to_{\exists\Delta_0}L_{c+n},
 \qquad \operatorname{crit}(k_{\rm can})=p,\quad
 k_{\rm can}(p)=c.
 \end{gathered}
 }
 \tag{B1246}
$$

其中 p、c、n 沿用本节前提。逆坍缩固定全部 $\xi<p$，将 p 送到 c，所以临界点及精确规范域同时得到。这里构造的就是原完整见证 hull 的逆坍缩；其 $\exists\Delta_0$ 初等性由 Q 的闭包取得。原 G 如有更宽的公式要求，仍按原要求核验。

因此这个家族的规范塌缩存在性、精确域及临界点都可从原 cut 推出，无需先假定候选 k，更无需增加 UGen 条款。取得该逆坍缩后，B1228 与 B1241 又给它在每个实际 $L_v$、$v>c+n$ 中的准确低代码；这仍是已构造图的表示，不是原 cut 的内部证书。若已有另一张实际 k，B1245 会认同它与这个逆坍缩；两种结论的前提不同，不相互循环。

B1246 仍不宣称原 cut 对任意 p、c 自动成立，也没有将外部凝聚步骤转成 $L_{c+n+1}$ 中已经存在的完整有界证书。它消除了一个语义前提，尚未支付剩余的薄层 cut 证书。因为本节没有 Gen 前提或 Gen 有限项认同，亦不触及此前 Gen 分析仅用于许可实际上行的方向限制；但原下行步骤仍必须保留其完整合法性公式，不能跳过可靠证书问题。

## 1083. 与旧工作的关系及准确剩余

本篇逐项回查并使用 B1199/B1201—B1205/B1210—B1213/B1219—B1220/B1228、v114 和 v115。新证明没有重复登记共同 Point、严格挡项、前缀归纳或某份辅助结构为新节点。

| 对象或义务 | 本次结论及边界 |
| --- | --- |
| 已有 UGen 源的独立实际图 | 全像由共同唯一输出项确定；固定 p、c、目标下唯一 |
| 这类后继源图的整图低表示 | 正确代码分别属于每个实际 $L_v$、$v>t$，不需更大规范图来源 |
| 这类图的极限基底通常图 | 同样属于实际 $L_v$；$\lambda>p$ 不再单独留下这项缺口 |
| 这类后继源图的外部原规范性 | 与原 cut 等价；cut 成立即得全部原 hull、精确域及整图身份 |
| 临界列有限后继源 $h=p+n$ | UGen 自动，统一纳入上行身份结论；更强的 B1246 直接由原 cut 取得精确坍缩，不预设实际图或 Gen/UGen |
| 重新量化的后继源原 G | 本篇没有给一般原 cut 的低层正确证书；不宣布完整 Check_G 已付 |
| 一般 owner $p<\lambda$ 的普通 Gen | 不能免费加强为 UGen；v113 的基底覆盖条件仍须核准 |
| 源高度为极限的旧原规范图 | v115 的独立低层 Check_lim 继续适用，本篇没有撤回或重开它 |
| 完整 R／Init／Point 与全 BTBMS | 剩余基础未统一闭合，B1179/B1182 仍是全实际域的相对结论 |

特别，普通 Gen 的低证书与规范身份分析有不同用途。B1241 为一张已存在的实际图重建准确表示；B1244 的 Gen 有限项认同只登记于原许可的实际向上传递。阶段1仍保留原 G、普通 Gen 及原 Init/R 语句，且仅由同一个原 $j_*$ 作反射。其他旧图是共同量化的被核验记录，不成为旁置反射来源。

每条 FS 边仍从任意当前合法原 C 开始。进入更外的共同 Point 时，内部头、图、Δ、层、代码表和全部证书一起重选；本次的任何特选输出都不固定为下一边唯一输入。阶段0冻结原 native-last rootOnly 门槛、源整包在原末列前、阶段2项操作许可、全称保Γ时零新增、特殊步旧保留项旧标签界、修正6、所有终止的精确7、同 owner 相对虚拟支撑先删再 Cut 全部保留。

v107 第三个 Silver 的初始化与全部 Limit 首边继续成立。本次没有完成无剩余接口的 ZFC＋0# 全 BTBMS 良序证明，也没有确认一个新的实际失败边或未覆盖完整节点。具体下一基础任务是后继目标中原 cut 的正确低证书；不能靠增加 UGen、admissibility 或两bare条件绕开任意原 C。

本轮核验是上述语义证明、证书层界、旧引理适用范围和检查点文件一致性。没有新增有限节点枚举，也不以有限枚举代替全称结论。



# BTBMS：普通 Gen 的唯一输出生成与全部端点的低证书

日期：2026-10-25。检查点 v117；主稿第1084—1090节，B1247—B1252。

本篇补齐 v113 留下的一项普遍问题：owner 低于极限基底时，普通 Gen 是否足以推出唯一输出生成。答案为是。关键不是直接由基底的完整初等性断言基底已覆盖，而是把完整初等性推进到最后真层，作一次 Def 延拓，再调用 v116 的生成元刚性。这样无需更换原完整见证选择，也无需额外的 admissibility、两bare或特选历史。

由此，原普通 Gen 的正确证书可分别置于紧接下一层，覆盖一般有限后继端点；实际后继源图的目标 Gen 及整图低表示也得到统一推广。原 cut 的一般低层规范性证书仍未完成，所以本篇不宣布全部 G／Point 已归约，也不宣布全 BTBMS 良序已无条件证明。

本篇所用 $\exists\Delta_0$ 仍指有限存在前束加有界矩阵。原实际嵌入的全部 $\Sigma_1$ 要求保持。Gen 分析在下行中只支付原普通命题的正确证书，不选择标签、不推位置界、不增加反射来源；涉及图身份的生成分析仍只登记于原许可的实际上行。

## 1084. 从极限基底推广到最后真层的完整初等性

固定

$$
 g=\mu+n,\qquad \mu>\omega\text{ 为极限},\quad 1\le n<\omega,
 \qquad \omega<a<\mu.
$$

令

$$
 Y=U\operatorname{Hull}^{L_g}(a+1)
$$

为从全部 $\xi\le a$ 出发的原唯一输出有限计算闭包。本节暂只假设 $\mu\in Y$，不假设原 Gen，更不假设 $Y=L_g$ 或 $\mu\subseteq Y$。

B1191、B1198—B1199 及 v113 第1059节已经给出：从 $\mu$ 可以用原唯一输出计算取得

$$
 A=L_\mu,\qquad W_\mu,\qquad
 M_r=L_{\mu+r}\quad(0\le r<n),
$$

其中 $W_\mu$ 是 A 上正确的原构造良序关系。每次层识别的正确辅助资料分别属于 $L_g$。最后一次 $M_{n-1}$ 识别只需要前一层的完整真值，界为 $L_{\mu+n}$，没有使用 $L_g$ 自身的完整真值。

记

$$
 M=M_{n-1}=L_{\mu+n-1},\qquad X=Y\cap M.
$$

要证明的是 $X\prec M$ 的完整一阶初等性，而非仅有 $Y\cap A\prec A$。

B1197 给一个外部满射

$$
 \operatorname{ev}_{\mu,n-1}:A\twoheadrightarrow M.
$$

当 n=1，它就是恒等；当 n>1，其求值定义使用 $A,M_1,\ldots,M_{n-2}$ 等已经在 Y 中的参数。现在 M 本身是 $L_g$ 的元素。把该求值定义的全部量词限制到 M，得到有界关系

$$
 \operatorname{Ev}(b,z),\qquad b\in A,\quad z\in M,
$$

其含义正是 $\operatorname{ev}_{\mu,n-1}(b)=z$。不要求通常求值函数图属于 $L_g$，也不要求 M 对高层普通元组配对封闭。

固定任意一阶公式 $\varphi(z,\bar x)$ 及 $\bar x\in X$，并假设 $M\models\exists z\,\varphi(z,\bar x)$。对 b∈A 定义

$$
 P(b)\ \Longleftrightarrow\
 \exists z\in M\,
 [\operatorname{Ev}(b,z)\land\varphi^M(z,\bar x)].
$$

这是 $L_g$ 中以已有 Y 参数写出的 $\Delta_0$ 公式。由于 A 上的 $W_\mu$ 是真实良序，存在唯一的 $W_\mu$-最小 b 满足 P。其解码值 z 也唯一。具体的输出 z 由下列有界矩阵唯一确定：

$$
 z\in M\ \land\
 \exists b\in A\left[
 \begin{gathered}
 \operatorname{Ev}(b,z)\land\varphi^M(z,\bar x)\\
 {}\land\
 \forall b'\in A\,
 (b'<_{W_\mu}b\ \Longrightarrow\ \neg P(b'))
 \end{gathered}\right].
$$

其中关系 $b'<_{W_\mu}b$ 的普通对由极限母集 A 容纳。所有参数均在 Y 中，输出唯一，所以这是原系统中的一次唯一输出计算，得到 $z\in Y\cap M=X$。

由 Tarski–Vaught 判据，

$$
 \boxed{
 \mu\in Y
 \Longrightarrow
 Y\cap L_{\mu+n-1}\prec L_{\mu+n-1}.
 }
 \tag{B1247}
$$

没有在这里假定 X 传递或等于 M。选择低代码最小值只是构造一个输出唯一的辅助矩阵；这个矩阵仍由原 Skolem 运算执行。它没有用低代码次序替换原非唯一运算比较完整见证元组时的构造良序。

本证明逐个固定 $\varphi$ 进行，不需要把 M 的完整满意度放入 $L_g$。这正是可以从 v113 的基底完整初等性推进到最后真层的原因。

## 1085. 只作一次 Def 延拓，得到整个唯一输出闭包的初等性

沿用上一节。B1247 及普通完整初等凝聚给

$$
 \pi_0:X\cong L_\delta,\qquad
 e_0=\pi_0^{-1}:L_\delta\prec M.
$$

这里 $\delta\le\mu+n-1$。对这个完整初等嵌入应用 B1200，作一次 Def 延拓：

$$
 e=\widehat e_0:L_{\delta+1}
       \longrightarrow_{\exists\Delta_0}
       \operatorname{Def}(M)=L_g.
$$

设 $Z=e''L_{\delta+1}$。下面证明 $Z=Y$。

首先 $Z\subseteq Y$。任取 Z 中的元素，它是在 M 上由某个固定公式和有限多个 X 参数定义的子集。参数 M 与这些 X 元素都在 Y 中。该子集可由

$$
 z\subseteq M\ \land\
 \forall u\in M\,
 [u\in z\longleftrightarrow\psi^M(u,\bar x)]
$$

唯一确定。这是有界矩阵，所以该 z 属于 Y。

反过来，Z 含有全部生成元 $\xi\le a$：因为 $a<\mu$，它们都属于 X，而 Def 延拓包含 $e_0$ 的像 X。Z 又对目标的所有唯一输出原运算封闭。理由是 $Z\prec_{\exists\Delta_0}L_g$：目标中在 Z 输入上存在完整见证时，可将存在式反射到 Z；目标输出唯一，所得 Z 输出必是目标的同一个值。由 Y 的最小闭包性质，$Y\subseteq Z$。

所以

$$
 \boxed{
 \mu\in Y
 \Longrightarrow
 Y=e''L_{\delta+1}
 \prec_{\exists\Delta_0}L_g.
 }
 \tag{B1248}
$$

这一论证没有把“一步 Def 延拓保持正存在式”无条件迭代成多步完整初等性。先在真实最后层 M 上重新证明完整初等性，再只延拓一次；因此 B1200 的前提逐项满足。

这里的 e 只是外部基础证明中的辅助同构。它不被安装为 BTBMS 图，也不用于供应阶段1标签。

## 1086. 刚性消除真子结构：普通 Gen 与 UGen 等价

继续上一节。X 包含全部 $\xi\le a$，故其坍缩固定这些序数；e 也固定它们。

此外，$L_{\delta+1}$ 满足 $\mathrm{UGen}(a,\delta+1)$。逐个拉回 Y 中的有限唯一输出计算即可证明：其叶子的原像仍是同一个 $\xi\le a$；每个目标结点的见证存在及输出唯一性沿 e 反映，得到源中对应的唯一输出计算。Y 的每个元素都有有限项表示，而 e 满射到 Y，所以源的每个元素都被这些计算生成。

于是 B1243 适用于

$$
 e:L_{\delta+1}\to_{\exists\Delta_0}L_g,\qquad
 e|_{a+1}=\mathrm{id},\qquad
 \mathrm{UGen}(a,\delta+1).
$$

它给 e 为恒等，并因源高度为后继而给 $\delta+1=g$。所以 $Y=L_g$。

为明确排除循环，这里的 UGen 前提是在 e 的源 $L_{\delta+1}$ 上，由 Y 的定义及已有初等性拉回得到；并没有先假定目标的 $\mathrm{UGen}(a,g)$。刚性的具体机制是：源包含于目标，源实际见证在目标仍有效，目标唯一性逐项固定全部输出；而后继 $L_{\delta+1}$ 不可能自然地正存在式初等于一个严格更大的 L 层。

因此，a<μ 时已证明

$$
 \mu\in U\operatorname{Hull}^{L_g}(a+1)
 \Longrightarrow
 U\operatorname{Hull}^{L_g}(a+1)=L_g.
$$

a≥μ 时，B1228 已从包含全部≤μ的生成元直接给 UGen，故同一结论也成立。结合 B1225 的“原 Gen 使 μ 可唯一输出生成”，以及 B1220 的 UGen⇒Gen，得到

$$
 \boxed{
 \begin{gathered}
 g=\mu+n,\quad \mu>\omega\text{ 极限},\quad n\ge1,\quad
 \omega<a<g:\\
 \operatorname{Gen}(a,g)
 \ \Longleftrightarrow\
 \mu\in U\operatorname{Hull}^{L_g}(a+1)
 \ \Longleftrightarrow\
 \operatorname{UGen}(a,g).
 \end{gathered}
 }
 \tag{B1249}
$$

这里同时证明了 v113 留下的基底覆盖：在原 Gen 下，
$Y\cap L_\mu=L_\mu$，尤其 $\mu\subseteq Y\cap L_\mu$。不是从某个任意的完整初等子结构 X≺L_μ 直接推出这一点；使用了 Y 的唯一输出闭包、最后真层、一次 Def 延拓及生成元刚性四项具体性质。

对极限 g>ω 也有 Gen⇒UGen。B1195/B1206 已把每次实际原 Skolem 计算写成具有正确小层及良序初段证书的唯一输出正定义，参数仍只是该次原输入；将原生成计算中的结点逐项改写即可。UGen⇒Gen 仍由定义给出。因此在本程序实际出现的全部 g>a>ω 上，普通 Gen 与 UGen 等价；后继部分的新增证明是上述最后真层论证。

这个等价不宣称原所有非唯一 Skolem 运算的统一图在 $L_g$ 内可定义。它只说：当全层能由原生成元生成时，每个元素也有某份唯一输出的有限表示；这些表示无需是原非唯一计算的同一个编号，更未给出从任意输入统一求原最小完整见证的内部算法。

## 1087. 所有原普通 Gen 均有紧下一层的正确证书

B1219—B1220 已对固定实际有限后继深度给出正确的唯一输出表 $U_g$、有限计算表 $T_g^u$，以及分别量化的正确层、代码、原子图与部分真值资料，全部属于 $L_{g+1}$。它们的正确性和全域生成检查均为有界核验；此前只差“普通 Gen 是否总能使用这类证书”。

B1249 现在补齐充分性。原 Gen(a,g) 为真时，正确 $T_g^u$ 确实覆盖全部 L_g 对象代码；因此 B1220 的证书给原普通 Gen 的正确证明。反过来，任何通过这些正确表及生成检查的变量都给真实 UGen，继而给原 Gen，可靠性仍由旧证明承担。

极限 g 的同一唯一输出证书，或 B1212 的原有限项表证书，亦可使用。于是

$$
 \boxed{
 \begin{gathered}
 \operatorname{Gen}(a,g),\quad g>a>\omega,\quad v>g\\
 \Longrightarrow
 \text{原普通 Gen 的正确证书可分别取于 }
 L_{g+1}\subseteq L_v.
 \end{gathered}
 }
 \tag{B1250}
$$

在后继层上，这也可简化为检查“存在一份唯一输出有限计算得到极限基底 μ”，再应用 B1249；不过继续使用 B1220 已定义的全部生成检查就足够，不必另换证书格式。

层界包含最紧的 v=g+1，不要求 v 或 g admissible。有限多项可分别量化各份证书，父列可以不同；不要求把接近边界的实际对象再组成一个普通高秩元组。

公式范围也要准确：对一次实际有限记录，每个后继深度 n 都是已确定的有限数，使用相应有限证书公式及分别列出的变量。结论对所有有限 n 成立，不声称已把所有 n 的高层资料集合化为某个薄层中的单一大包。

这支付的是原 Gen 条款的可靠普通证书，而不是增加一个 UGen 合法性要求。向下仍携带原 Gen；不由其有限表示选标签、反推标签位置、加入规范域下界或增加一张反射图。

## 1088. 后继源实际图自动给目标 Gen，且独立整图可低表示

设原实际图满足

$$
 \begin{gathered}
 k:L_h\longrightarrow_{\Sigma_1}L_t,\qquad
 \operatorname{crit}(k)=p,\qquad k(p)=c,\\
 p<h<c<t<v,\qquad
 h=\lambda+n,\quad n\ge1,\qquad
 \operatorname{Gen}(p,h).
 \end{gathered}
$$

B1210 给 $t=\mu+n$，其中 $\mu=k(\lambda)$。B1249 给源 UGen，因此源中的 λ 有一份从≤p序数出发的唯一输出有限表示。沿实际 k 逐结点运输，该表示给 μ；其叶子变为 c 和若干固定的 $\xi<p$，都属于目标的生成元 c+1。因此

$$
 \mu\in U\operatorname{Hull}^{L_t}(c+1).
$$

若 c<μ，直接用 B1249 的基底判据；若 c=μ，用 B1228。两种情形都得到 $\mathrm{UGen}(c,t)$，于是得到原 $\mathrm{Gen}(c,t)$。B1250 再给正确证书分别属于 $L_{t+1}\subseteq L_v$。

同时源 UGen 已自动满足 B1241 的前提，其独立整图代码 C 以及通常极限基底图 E 均属于 L_v。故

$$
 \boxed{
 \begin{gathered}
 h\text{ 为后继},\quad \operatorname{Gen}(p,h)
 \Longrightarrow
 \operatorname{Gen}(c,t),\\
 \text{目标普通 Gen 的正确证书分别在 }L_{t+1},\\
 \exists C\in L_v\ [C\text{ 准确编码整张 }k],\\
 E=\{\langle x,k(x)\rangle:x\in L_\lambda\}\in L_v.
 \end{gathered}
 }
 \tag{B1251}
$$

盒内沿用上面的实际图与位置条件。不要求 k 已经是原规范图，也不要求存在较大规范图 J。

此处没有非法使用 $k(T_h^u)$：源表可能只在 $L_{h+1}$，确实不必属于 k 的定义域。运输的是一份有限计算的各个实际结点与见证，每个结点和每个见证坐标都在 $L_h$。目标的完整 U/T 表和正确证书由 B1219—B1220 独立重建；低整图由 B1241 的共同项关系取得。

这修正 v116 第1077节的适用范围说明：当时仅由独立图的整像不能推出目标 UGen；现在借助新增的“基底进入闭包即全层生成”，后继源的目标 Gen 已可推出。不是把源项表的逐点像误认为完整目标项表。

本节没有把结论扩大到“极限源、后继目标也自动运输目标 Gen”。本篇新的推导使用了域内序数 λ 及其像 μ；极限源的顶点不在域内，不能照写 k(h)。实际合法目标自身已有的 Gen 证书则已由 B1250 单独支付。

## 1089. 原规范大图的全部适当生成限制统一认同

设当前实际有原规范图

$$
 J:L_H\longrightarrow_{\Sigma_1}L_V,\qquad
 \operatorname{crit}(J)=p,\quad J(p)=c,\quad p<H<c<V,
$$

取 p<g<H，并有原 $\operatorname{Gen}(p,g)$。这些是许可实际上行所核的当前对象条件，不是对未来历史的新要求。

B1249 及极限情形的推论给 $\mathrm{UGen}(p,g)$。于是 v114 的两个方向都成立：

- B1230 从真正的大原 hull 与参数 $J(L_g)=L_{J(g)}$ 得到小原 hull 包含于 $J''L_g$，不使用生成性。
- B1231 以源唯一输出有限项取得反向包含，认同精确域。

所以

$$
 \boxed{
 \begin{gathered}
 p<g<H,\quad \operatorname{Gen}(p,g)\\
 \Longrightarrow\
 J''L_g=
 \operatorname{Hull}_{\mathrm{orig}}^{L_{J(g)}}
      (p\cup\{c\}),\\
 \lambda_{\mathrm{can}}=g,\qquad
 k_{\mathrm{can}}=J|L_g.
 \end{gathered}
 }
 \tag{B1252}
$$

本式沿用实际原规范 J 的前提。它统一覆盖任意有限后继 g，即使 g 的极限基底大于 p、H 本身为弱后继、或 g+1=H。无需另索取完整非唯一原运算表 $H_g\in L_H$。

正确 $U_g,T_g^u$ 与证书在 $L_{g+1}\subseteq L_H$，所以在这种真正的适当限制情形，v114 的整表运输仍可使用，给目标普通 Gen 与低整图。独立后继源图则按 B1251 办理，不混用两种表来源。

这只是对原许可实际上行的规范图身份作完整推广。没有放宽阶段0的来源门槛与整包界，也没有给阶段2新增项反射许可。对于一张新量化的独立图，B1252 所用“大图是真正原规范图”仍不能当作已经在低层中核准的免费前提。

v116 B1244 的外部 cut 等价定理也随之推广：对有原 $\operatorname{Gen}(p,h)$ 的后继源实际图，不必另加 UGen 假设，原 cut 即足以认同精确原逆塌缩。其在实际下行存在式中的使用仍须先支付 cut 的可靠低证书；本篇没有借这个推论替换阶段1原 G。

## 1090. 已消除的待办、仍未完成的接口及复核边界

本次直接回用了 B1195/B1197/B1200/B1206/B1219—B1220/B1225/B1228/B1230—B1232/B1241/B1243，并回读原主稿第7.11节的完整见证选择约定。没有改用别的规范 hull。

| 原来保留的义务 | 本次准确状态 |
| --- | --- |
| 原 Gen(a,μ+n)、a<μ 是否足以覆盖唯一输出基底 | 已证明；最后真层完整初等性、一次 Def 延拓和刚性给全覆盖 |
| 一般后继标签的普通 Gen 正确低证书 | 已支付，分别在紧接下一层；不限于 owner=μ 的旧家族 |
| 有原 Gen 的独立后继源实际图之整图及基底低表示 | 已统一支付，UGen 不再是额外前提 |
| 这种图的目标普通 Gen | 由运输有限基底表示及新判据推出，证书也已付 |
| 实际原规范大图的适当生成限制之精确规范身份 | 已统一推广到任意弱后继适当层；不要求完整非唯一表在域中 |
| 独立后继源原 G 的完整低规范性证书 | 仍欠一般原 cut 的正确低层核验；低图及 Gen 不替代它 |
| 完整 R／Init／Point 与全 BTBMS | 必须继续核准剩余原 G 及所有其他原条款，尚未统一闭合 |

v113 关于“基底覆盖未自动成立”、v114/v116 关于“仅原 Gen 时 UGen 仍待补”、v115 关于“一般后继目标 Gen 尚待统一支付”的历史状态，均按本篇收紧。原非唯一 Skolem 表的内部可定义性没有由此自动解决，也不必为了普通 Gen 再把它作为前提。

本次最初检查原 cut 的低证书时，仍遇到原完整见证元组的构造良序比较。辅助 Def 代码的最小选择不能冒充原非唯一最小完整见证。上述最后真层论证解决的是普通 Gen 及其后果，并没有绕过这一尚未支付的规范性条件。

任意当前合法原 C、共同重选、阶段1原同一个 j_*、丢弃高数据、阶段0冻结 native-last rootOnly 门槛与源整包界、阶段2许可与全称保Γ零新增、特殊步旧保留项旧标签界、第6级终端both不重置持久检查、全部终端精确第7级、同 owner 相对虚拟支撑先删再 Cut 全部保持。辅助 X、e 不供应任何新标签；本次的特选输出不固定为下一边输入。

第三个 Silver 的初始化与全部 Limit 首边、B1179/B1182 的全实际域相对下降及良序结论保留。无剩余接口的 ZFC＋0# 全 BTBMS 良序仍未完成；本篇没有新增一个完整节点，也没有确认新的实际失败边。

本轮核验了最后真层求值的有界性、低代码最小输出的唯一性、一次 Def 延拓的实际前提、源生成的拉回与刚性不循环、全部证书层界以及旧引理的适用范围。没有新增有限节点枚举，不用有限测试代替这些全称论证。

# BTBMS：任意原 hull 的弱层凝聚及受限分支的低 cut 证书

日期：2026-10-25。检查点 v118；主稿第1091—1097节，B1253—B1258。

本篇检查并推广 v113 的“第一次需要基底外见证”、v116 的最后真层凝聚及 v117 的普通 Gen 定理。新增范围是：不预给实际图、不预设源 Gen，直接从原完整见证 hull 出发，证明它在一般有限后继求值层中的凝聚；原 cut 成立时，精确逆坍缩及源 Gen 随之取得。临界有限后继目标 B1246 因而只是这个一般结论的一个特例。

此外，原 hull 是否停留在目标极限基底，可用已经支付的唯一输出表在紧下一层可靠判定。停留分支上的原 cut 有独立低证书，无须先量化一张规范图。这个低证书覆盖的实际源极限图已有 v115 的另一种证明；不把这项重述算作新增完整节点。真正的新基础推广是任意原 hull 的凝聚与原 cut 所给的生成性，不再额外假定已存在候选图。

一般越出基底分支的原 cut 低证书仍未完成。全 BTBMS 的 B1179/B1182 仍相对于未全部归约的原局部接口；本篇不宣布完整无条件良序。

## 1091. 固定原 hull，不把唯一输出闭包改成规范 hull

固定实际类型的序数位置

$$
 \omega<p<c<t=\mu+n,\qquad
 p,c,\mu\text{ 为极限},\qquad 1\le n<\omega.
$$

于是 $c\le\mu$。不假设这些层 admissible，也不假设任何图或 Gen。定义

$$
 S=p\cup\{c\},\qquad
 Q=\operatorname{Hull}_{\rm orig}^{L_t}(S),\qquad
 Y=U\operatorname{Hull}^{L_t}(S),\qquad A=L_\mu.
$$

这里 S 的叶子是全部 $\xi<p$ 及一个 c；不要求把 S 另作为弱层中的一个集合参数。Q 使用原完整见证元组、原构造良序及原运算，Y 只用其中指定输出唯一的原运算。因此 $Y\subseteq Q$。所有计算都是外部有限项计算。

沿用 $\exists\Delta_0$ 的准确口径：有限存在前束加有界矩阵，见证坐标分别量化。原 hull 对全部原见证运算封闭，给

$$
 Q\prec_{\exists\Delta_0}L_t.
$$

这项外部闭包论证已在 B1242 核过；取得完整见证时可以逐坐标选取，不把任意分别选出的辅助见证当成同一预先指定元组。这里不声称原全部运算表已经属于 $L_{t+1}$。

以下“原规范性”仍指 v115 的规范逆坍缩、临界点和精确域条款 N。原 G 若另要求更宽的有界交错 $\Sigma_1$ 语法，其验证要求保留；本文不由较小公式类的凝聚删除这些条款。

## 1092. 原 hull 的首次越界不需要整个 Gen 前提

证明

$$
 \boxed{
 Q\not\subseteq L_\mu
 \quad\Longleftrightarrow\quad
 \mu\in Y.
 }
 \tag{B1253}
$$

逆向直接由 $\mu\notin L_\mu$ 和 $Y\subseteq Q$ 得到。正向分两种情况。

若 $c=\mu$，则 $\mu$ 已是 Y 的叶子，不需要任何生成假设。

若 $c<\mu$，全部叶子都在 $L_\mu$。取一份原有限计算，其输出不属于 $L_\mu$。沿其依赖次序寻找第一个原矩阵在 $L_t$ 有完整见证、而在 $L_\mu$ 没有完整见证的结点。

这个结点必存在。否则每步在 $L_\mu$ 中已有一份完整见证，原元组的固定有限编码也在这个极限层中。原构造良序对构造层作末端延拓，所以在 $L_t$ 选择的首个完整见证与在 $L_\mu$ 选择的相同，输出仍在 $L_\mu$。有限归纳便不能产生所取的层外输出。

第一个上述结点之前的计算，还能逐步改写成唯一输出计算。B1206 的正确小层及原良序初段证书给每个已在基底完成的原计算一个唯一正定义；证书在 $L_\mu$ 中，对 $L_t$ 仍可靠。因此该结点的输入已经在 Y。

现在原样使用 B1224：对这个固定矩阵 $\delta(\bar x,\bar w)$，公式

$$
 \exists\bar w\,
 [\,\delta(\bar x,\bar w)\land
     \operatorname{Cov}_n(\beta;\bar w)\,]
$$

在 $L_{\mu+n}$ 中唯一确定 $\beta=\mu$，参数只有已在 Y 中的 $\bar x$。故 $\mu\in Y$。

这里没有从 Gen 得到一份生成 $\mu$ 的原计算；只需要某个 Q 元素越出基底。寻找的仍是第一次“基底无完整见证”，不是第一次“指定输出越出基底”，从而包含输出暂时仍在基底的情况。

一个随后的语义推论是：越界时 $\operatorname{Gen}(c,t)$ 自动成立。因为上述唯一计算的叶子都属于 $c+1$，B1249 的基底判据适用。这只是普通命题的证书分析，不用来选择下行标签或反推允许位置。

## 1093. 停留在基底时，两个 hull 完全相等

假设 $Q\subseteq L_\mu$。由 $Q\prec_{\exists\Delta_0}L_t$，在 Q 参数上，任何在 $L_t$ 有完整见证的原矩阵都能在 Q 中取得一份完整见证，因此也能在 $L_\mu$ 取得。

所以原计算的最小完整见证在两个层中相同。每个这种基底计算又有 B1206 的唯一输出正证书，属于 $L_\mu$，并在 $L_t$ 可靠。对 Q 的原有限项归纳，可把每个结点改写成 Y 的一个唯一输出计算。故 $Q\subseteq Y$。

结合另一包含，以及 B1253，得到

$$
 \boxed{
 \begin{gathered}
 Y\subseteq L_\mu
 \quad\Longleftrightarrow\quad
 Q\subseteq L_\mu;\\
 Q\subseteq L_\mu
 \quad\Longrightarrow\quad
 Q=Y\prec_{\exists\Delta_0}L_\mu.
 \end{gathered}
 }
 \tag{B1254}
$$

最后的初等性如下核对。对 Q 参数，若 $L_\mu$ 满足一个正存在式，则由传递性和有界绝对性 $L_t$ 也满足；它沿 Q 的初等性反射到 Q。反向同理由 $Q\prec_{\exists\Delta_0}L_t$ 及有界绝对性取得。对有界公式本身亦如此。

因此这不是给原 hull 换一种定义：只有在已经证明的停留分支，才取得它与 Y 的相等。越界分支不能免费使用这个等号。

## 1094. 一般原 hull 均可凝聚，且两种源高度得到区分

先处理停留分支。B1254 给 $Q\prec_{\exists\Delta_0}L_\mu$。在这个极限求值层，使用普通 $\Sigma_1$ 凝聚，得到

$$
 \pi:Q\cong L_h.
$$

这里用的是极限 L 层的标准凝聚，不是把后继层结论作为未证前件。所需标准表述可见 Sutner, The Lattice of β Recursively Enumerable Sets, §2.2，Proposition 2.1 后的凝聚陈述：
https://www.cs.cmu.edu/~sutner/papers/beta.pdf 。

h 必为极限。否则写 $h=\alpha+1$，令 $M_0=L_\alpha\in L_h$。源中不存在 z 使 $M_0\in z$，因为 $L_h=\operatorname{Def}(M_0)$ 的每个元素都是 $M_0$ 的子集。另一方面，$\pi^{-1}(M_0)\in L_\mu$，极限层 $L_\mu$ 容纳它的单元素集合，与逆坍缩的 $\exists\Delta_0$ 初等性矛盾。

再处理越界分支。B1253 给 $\mu\in Y\subseteq Q$。v113 的正确层识别从 $\mu$ 唯一取得

$$
 L_\mu,L_{\mu+1},\ldots,L_{\mu+n-1}\in Q.
$$

特别是最后真层 $L_{t-1}$ 作为元素在 Q 中。现在 B1242 的全部前提已满足，故 Q 凝聚为某个后继构造层 $L_h$。

还能精确识别其有限后继深度。令

$$
 \lambda=\operatorname{otp}(Q\cap\mu)=\pi(\mu).
$$

这个 $\lambda$ 为极限且大于 $\omega$：Q 包含全部 $<p$ 的序数，并且对任何 $\xi\in Q\cap\mu$，有界存在断言“在 $\mu$ 中有比 $\xi$ 更大的序数”在 Q 中仍成立，所以该序列无最大元。从 $\mu$ 作有限次唯一后继运算，还知

$$
 Q\cap[\mu,t)=\{\mu,\mu+1,\ldots,\mu+n-1\}.
$$

坍缩在序数上保序，因而 $h=\lambda+n$。综上，

$$
 \boxed{
 \begin{gathered}
 \operatorname{Coll}(Q)=L_h;\\
 Q\subseteq L_\mu\Longrightarrow h\text{ 为极限};\\
 Q\not\subseteq L_\mu\Longrightarrow
 h=\lambda+n,\quad \lambda=\pi(\mu)>\omega\text{ 为极限}.
 \end{gathered}
 }
 \tag{B1255}
$$

这项结论不预给图、不假设 cut、不假设 Gen。它推广 B1242 在本程序原 hull 上的适用范围：最后真层在场现在由首次越界证明，不再必须借一张实际后继源图保证。

对于原求值端点 t 本身为极限的情况，直接使用上述极限层分支；源高度仍为极限。

## 1095. 坍缩源的 Gen 及原 cut 所给的精确图都不必预设

沿用 B1255 的坍缩，令

$$
 k=\pi^{-1}:L_h\longrightarrow_{\exists\Delta_0}L_t,
 \qquad r=\pi(c)=\operatorname{otp}(Q\cap c).
$$

Q 包含全部 $\xi<p$，所以 $\pi(\xi)=\xi$ 对这些序数成立，且 $r\ge p>\omega$、$r<h$。在没有 cut 前，不把 r 叫作 k 的临界点；$Q\cap c$ 未必是一个序数初段。

先证明 $\operatorname{UGen}(r,h)$。

停留分支中，B1254 已给 $Q=Y$。将 Y 中每个有限唯一输出计算沿 k 拉回：完整见证的存在及指定输出唯一性，都由 $\exists\Delta_0$ 初等性保持和反映；其叶子的原像是 $\xi<p$ 或 r。k 满射到 Q，故源中每个元素都有从 $r+1$ 出发的唯一输出有限表示。

越界分支中，不先假定 $Q=Y$。只拉回 B1253 已给出的那一份生成 $\mu$ 的唯一输出有限计算。其源值为 $\lambda=\pi(\mu)$，叶子仍为 $\xi<p$ 或 r。B1255 给 $h=\lambda+n$，于是 B1249 的基底判据在源中给 $\operatorname{UGen}(r,h)$。这没有借用尚待证明的源 Gen。

所以

$$
 \boxed{
 r=\pi(c)
 \Longrightarrow
 \operatorname{UGen}(r,h)
 \ \land\ \operatorname{Gen}(r,h).
 }
 \tag{B1256}
$$

现在添加原 cut：

$$
 Q\cap c=p.
$$

此时 $r=p$，k 固定全部 $\xi<p$，且 $k(p)=c>p$，故其临界点恰为 p。Q 的定义和精确传递坍缩已经给出原规范逆塌缩身份，B1256 又给源 Gen。B1240 的唯一输出像等式于是适用，得到

$$
 \boxed{
 \begin{gathered}
 Q\cap c=p
 \Longrightarrow
 \exists h\ \exists k:L_h\to_{\exists\Delta_0}L_t:\\
 k=\operatorname{Coll}(Q)^{-1},\quad
 \operatorname{crit}(k)=p,\quad k(p)=c,\quad
 \operatorname{Gen}(p,h),\\
 Q=k''L_h=U\operatorname{Hull}^{L_t}(p\cup\{c\}).
 \end{gathered}
 }
 \tag{B1257}
$$

原 G 所需的额外位置 $h<c$ 仍须核验，没有从 cut 免费推出。h 已是精确坍缩高度，不能为满足这个界重新选择一个较小域。若原 G 的全部 $\Sigma_1$ 条款另有超出本篇公式类的要求，也仍须核验。

当 $t=c+n$ 时，$\mu=c$，自动属于越界分支；cut 给 $\lambda=p$，从而 $h=p+n$。于是旧 B1246 的结论立即复得。一般 $c<\mu$ 时，则允许停留分支或越界分支，源高度不是一律 $p+n$。这正是相对于旧有限临界家族的扩大。

还须防止逆用 B1257。它证明的是“原 cut 成立，则 Q 等于 Y”；并未证明

$$
 Y\cap c=p\Longrightarrow Q\cap c=p
$$

在一般越界分支成立。仅检查低的唯一输出闭包 cut，仍不能替代原 cut。

## 1096. 停留分支的原 cut 有独立紧下一层证书

B1254 让原 cut 的一个分支可直接低层核验，无须先假设实际规范图或源高度。

固定 $v>t$。B1219—B1220 给正确的 $U_t,T_t^u$，以及正确层、代码、原子图、部分真值等资料，分别属于

$$
 L_{t+1}\subseteq L_v.
$$

对当前固定有限深度 n，使用 $A=L_\mu$ 中的有限 Def 代码表示 $L_t$ 的对象。在 A 上定义 $\operatorname{Reach}(b)$：代码 b 的值有从 $p\cup\{c\}$ 出发的有限唯一输出计算。它只调用正确的 $T_t^u$、自然数项代码及 A 中的有限序数参数代码；所有量词有界。

构造一个检查 $\operatorname{Check}_{\rm conf}$，分别量化这些正确资料及一个 $Y_0\subseteq A$，要求：

1. 正确层、求值、$U_t,T_t^u$ 的原有界核验全部成立。
2. 每个满足 $\operatorname{Reach}$ 的代码，其解码值属于 A。
3. 对每个 $x\in A$，$x\in Y_0$ 当且仅当存在一个可达代码解码为 x。
4. 对每个 $\xi<c$，$\xi\in Y_0$ 当且仅当 $\xi<p$。

顶层 $L_t$ 本身是 $L_{t+1}$ 的元素，所以求值公式可相对化到这个正确集合；不把普通高秩求值图另放入本层。第2—4项全部是有界核验。正确资料已经在 $L_{t+1}$，B1213 的有界分离给正确 $Y_0\in L_{t+1}$。不需要配对整个证书包。

可靠性不依赖任何原高图。如果新量化变量通过检查，则正确项表保证 $Y\subseteq A$ 且 $Y_0=Y$。B1253—B1254 给 $Q\subseteq A$ 和 $Q=Y$；第4项因此正是原 cut。

反过来，若 $Q\subseteq A$ 且原 cut 成立，B1254 给 $Q=Y$，选择上述正确资料及 $Y_0=Y$ 就通过检查。于是

$$
 \boxed{
 \begin{gathered}
 \exists\text{分别属于 }L_v\text{ 的正确资料 }
       \operatorname{Check}_{\rm conf}\\
 \quad\Longleftrightarrow\quad
 Q\subseteq L_\mu\ \land\ Q\cap c=p,
 \qquad v>t.
 \end{gathered}
 }
 \tag{B1258}
$$

最紧的 $v=t+1$ 也包含在内。检查从头到尾未使用原非唯一运算的整个 $H_t$ 表，更未更换原完整见证的排序。

这项结果与 v115 的关系要准确陈述：v115 从一张已存在的极限源规范图出发，直接给完整 $\operatorname{Check}_{\rm lim}$；本节从原参数 p、c、t 出发，用唯一输出表先可靠识别停留分支及原 cut。B1255—B1257 再给精确坍缩和源 Gen。对原 G，还保留精确高度 $h<c$ 及其余原条款；本节不是不核这些要求就自动安装一张图。

## 1097. 已付与未付的边界

本轮统一支付了以下基础命题：

- 对原参数 $p\cup\{c\}$ 的任意原 hull，首次越界判据不需要 Gen。
- 一般有限后继目标中的原 hull 可凝聚，越界时源有相同有限后继深度；停留时源为极限。
- 原 cut 给精确逆塌缩及源 Gen，无须预给候选图；临界有限后继家族是特例。
- 停留分支的原 cut 有对新量化变量可靠的紧下一层证书。

一般原 cut 的低证书现在仍卡在越界分支。该分支能由低表可靠识别，因为 B1253 把它等价为 $\mu\in Y$；但

$$
 \mu\in Y,\qquad Y\cap c=p
$$

尚不足以根据现有证明认同原 $Q\cap c=p$。没有证成这个逆向，也没有构造满足这些条件却违反原 cut 的实际反例。

因此，不能把 B1257 的外部存在性定理改称已完成阶段1的完整低 $\operatorname{Check}_G$。在有原 Gen 的实际图上，v117 已付整图低表示、全部普通 Gen 证书及许可上行中的适当限制规范性；这些已付项不重新列为困难。独立后继源的原 cut 低核验仍须完成，随后还须逐项接回实际 R、Init、Point 的全部原条款。

本篇没有新增完整节点，也不把这项基础推广称作完整节点。没有改变任意当前原 C 的起点、一步量词、原完整见证及构造良序、共同重选、阶段0/1/2许可、全称保Γ时零新增、特殊步旧保留项上界、全部终端精确域等号或 Gen 的使用方向。没有沿辅助坍缩供应任何 BTBMS 标签。

B1179/B1182 的全实际域相对结论和第三个 Silver 初始化仍保留；无剩余接口的 ZFC＋0# 下整个 BTBMS 良序尚未完成。

# BTBMS：任意生成元的唯一输出 hull、初等性及正 cut 候选图

日期：2026-10-25。检查点 v119；主稿第1098—1104节，B1259—B1264。

本篇继续核对一般基底外分支。新结论是：唯一输出闭包的初等性和凝聚，不必限于 v117 的连续序数生成元，也不必如 v118 那样先给原 hull 的 cut。允许任意已有对象作额外生成元，仍可证明唯一输出闭包是包含这些生成元的最小正存在式初等子结构。由此，唯一输出 cut 本身等价于一个唯一的、带源 Gen 的正初等候选图存在；其正确低证书在紧下一层。

这项结论不认同原非唯一完整见证选择的规范图。尤其没有证明“唯一输出 cut 推出原 cut”。原 G、阶段许可、完整原 C 和 Gen 使用方向不变；全文的辅助 hull 不供应新的 BTBMS 标签。

## 1098. 生成元可以包含任意已有对象，公式口径保持明确

令 $t=\mu+n$，其中 $\mu>\omega$ 为极限、$n<\omega$。取任意外部生成元集

$$
 \omega+1\subseteq S\subseteq L_t,
 \qquad
 Y=U\operatorname{Hull}^{L_t}(S).
$$

$\omega+1\subseteq S$ 只是保证所有有限句法参数及 $\omega$ 已在闭包中；实际使用的 $S=p\cup\{c\}$、$\omega<p$，满足这一点。还允许在这样的序数生成元上加入任意实际对象，甚至位于 $L_t\setminus L_{\mu+n-1}$ 的对象。本节不要求 S 本身属于 $L_t$ 或 $L_{t+1}$；涉及低证书时再使用有界可描述的实际生成元。

Y 只对原运算中指定输出唯一的实例作有限闭包。辅助见证不必唯一，也不要求将其普通元组作为弱层中的一个元素。这里唯一的是所指输出的语义值，不是外部选择器挑选后的值。

本篇的初等性精确指全部有限存在前束加 $\Delta_0$ 矩阵，仍记 $\exists\Delta_0$。本轮回读了原主稿§7.11：其中具体正证书确实按全部无界见证及有界矩阵叙述；但这不授权把原 G 可能包含的其他公式要求自行删除。弱层不具收集时，对有界交错量词封闭的更宽语法不能免费正规化。本文保持 v109 以来的限制，不将这个约定问题额外算成已经确认的新数学障碍。

## 1099. 不取得基底时，唯一输出闭包已经是初等子结构

先设 $n\ge1$，并假设 $\mu\notin Y$。

首先，必有 $Y\subseteq L_\mu$。若 $y\in Y\setminus L_\mu$，则正公式

$$
 \operatorname{Cov}_n(\beta;y)
$$

在 $L_t$ 中唯一确定 $\beta=\mu$：$\beta=\mu$ 的正确证书存在；若极限 $\beta<\mu$，可靠性给 $y\in L_{\beta+n}\subseteq L_\mu$，矛盾；$\beta>\mu$ 则不可能是 $L_t$ 中的极限序数。这是一个以 y 为参数的唯一输出原计算，因而会给 $\mu\in Y$。这里没有把 B1224 的“输入在基底”前提误用于 y；直接使用的是 B1224 之前已证明的 $\operatorname{Cov}_n$ 正确性。

其次，在 Y 参数上，$L_t$ 不可能新增一个在 $L_\mu$ 无完整见证的正存在式。否则此时输入已在基底，可以真正调用 B1224，从这些输入唯一取得 $\mu$，又与假设矛盾。

因此对任何 Y 参数和有界矩阵，目标中的完整见证存在性与基底中的存在性一致。基底里存在见证时，B1206 的原首见证小层证书为所选输出给一个无额外高度参数的唯一正定义；它在 $L_t$ 仍可靠。输出于是属于 Y。逐坐标重复，可在 Y 中取得一份完整见证。

对有界公式作通常的有限 Tarski–Vaught 归纳，再处理有限存在前束，得到

$$
 \boxed{
 \mu\notin Y
 \Longrightarrow
 Y\subseteq L_\mu,\qquad
 Y\prec_{\exists\Delta_0}L_\mu,\qquad
 Y\prec_{\exists\Delta_0}L_t.
 }
 \tag{B1259}
$$

若 $n=0$，直接在极限 $L_t$ 使用同一个首见证正证书论证，得到 $Y\prec_{\exists\Delta_0}L_t$。没有有限后继基底需要识别。

这一步完全没有使用原 Q、原 cut 或任何 Gen 假设。

## 1100. 取得基底时，任意顶层生成元也能纳入一次 Def 延拓

以下 $n\ge1$，并设 $\mu\in Y$。回用 v113、v117 的正确唯一输出识别，取得

$$
 A=L_\mu,\quad W_\mu,\quad
 M_r=L_{\mu+r}\ (0\le r<n)
 \quad\text{都在 }Y.
$$

其中 $W_\mu$ 是 A 上正确的原构造良序。令

$$
 M=L_{\mu+n-1},\qquad X=Y\cap M.
$$

B1247 的证明实际上只需要上述参数在 Y 中，不需要 Y 的叶子是连续序数。因此同一证明给 $X\prec M$ 的完整一阶初等性：对任意固定 M 上的存在断言，用 A 的代码满射到 M，并以 $W_\mu$ 选取最小的见证代码。求值和断言均相对化到作为元素的 M，检查有界且输出唯一，所以见证属于 X。

完整初等凝聚给 $e_0:L_\delta\prec M$，其像为 X。B1200 允许作一次 Def 延拓

$$
 e=\widehat e_0:L_{\delta+1}
       \longrightarrow_{\exists\Delta_0}L_t,
 \qquad Z=e''L_{\delta+1}.
$$

仍有 $Z\subseteq Y$：Z 中每个元素是在 M 上由某个固定公式及 X 参数定义的子集，从 M 和这些参数可以唯一有界定义。

相反包含需要补证，不能沿用 v117 中“全部叶子已属于 X”的特殊理由。这里的叶子可能在最后真层之外。事实上，对任意 $y\in Y$，可以直接证明 $y\in Z$。

在外部固定一份真实定义

$$
 y=\{u\in M:M\models\varphi(u,\bar a)\},
 \qquad \bar a\in M.
$$

$\varphi$ 是当前这个 y 的一个固定有限公式，不要求在弱层中集合化所有 y 的定义。用 A 中的一个代码 b 表示有限元组 $\bar a$。第 $n-1$ 层求值相对化到 M，便得到有界条件

$$
 P_{\varphi,y}(b)
 \ \Longleftrightarrow\
 \text{b 解码为 }\bar a\in M
 \ \land\
 \forall u\in M\
 [u\in y\leftrightarrow\varphi^M(u,\bar a)].
$$

将 y、M、A、$W_\mu$ 及已有 proper 层作参数，取满足这个条件的 $W_\mu$-最小 b。存在性来自已固定的真实定义，最小代码唯一；因此 b 属于 Y。各个定义参数也由 b 和 M 唯一有界解码，所以均属于 $Y\cap M=X$。

于是 y 的同一真实定义已经只用 X 参数，这恰说明 $y\in Z$。这个过程允许把 y 自己用作“选出其一份定义参数”的输入；不假定 y 已在 Z，也不假定其原来的那组任意参数已经在 X。

故

$$
 \boxed{
 \mu\in Y
 \Longrightarrow
 Y=\widehat e_0''L_{\delta+1}
 \prec_{\exists\Delta_0}L_t.
 }
 \tag{B1260}
$$

本证明只在真实最后真层上取得完整初等性，然后延拓一次。没有无条件迭代 B1200，也没有把辅助低代码次序换成原完整见证元组的选择次序。

## 1101. 唯一输出闭包是最小正初等子结构，并可凝聚

B1259—B1260 合起来给

$$
 Y\prec_{\exists\Delta_0}L_t
$$

对第1098节的任意 S 成立。

它还有最小性。若 $X'\prec_{\exists\Delta_0}L_t$ 且 $S\subseteq X'$，则 $X'$ 对所有目标唯一输出运算封闭：目标在 $X'$ 参数上有完整见证时，存在式先反射到 $X'$；因目标的指定输出唯一，所取得的 $X'$ 输出必是同一个值。有限归纳给 $Y\subseteq X'$。

因此

$$
 \boxed{
 \begin{gathered}
 U\operatorname{Hull}^{L_t}(S)
 =
 \bigcap\{X'\subseteq L_t:
     S\subseteq X',\
     X'\prec_{\exists\Delta_0}L_t\},\\
 \operatorname{Coll}(Y)=L_h\quad\text{对某个 }h\le t.
 \end{gathered}
 }
 \tag{B1261}
$$

凝聚的两种依据不同。基底内分支用极限 L 层的普通正存在式凝聚；基底外分支已经由 B1260 显式给一次 Def 延拓的像。前者可参照 Sutner, The Lattice of β Recursively Enumerable Sets, §2.2 的极限层凝聚陈述：
https://www.cs.cmu.edu/~sutner/papers/beta.pdf 。
后者只用 v116 已核准的完整初等凝聚和 B1200。

还保持 v118 的高度区分：基底内的 h 为极限；基底外有

$$
 h=\lambda+n,\qquad
 \lambda=\operatorname{otp}(Y\cap\mu)>\omega
 \text{ 为极限}.
$$

因为后一分支含 $\mu,\mu+1,\ldots,\mu+n-1$，其余序数都低于 $\mu$。前一分支不能由后继 L 层正初等地嵌入极限层，理由仍是源最后真层没有成员容器、目标极限层却容纳其单元素集合。

“最小正初等子结构”不自动等于原固定非唯一选择器的闭包。原 Q 是一个包含 S 的正初等子结构，故只能由本节得到 $Y\subseteq Q$。要反向包含，必须证明原指定运算保持 Y；不能把两个不同定义的“hull”同名视作证明。

## 1102. 唯一输出 cut 恰给唯一的带 Gen 正初等候选图

恢复实际类型

$$
 \omega<p<c<t,\qquad p,c\text{ 为极限},
 \qquad Y=U\operatorname{Hull}^{L_t}(p\cup\{c\}).
$$

暂只问唯一输出 cut：

$$
 Y\cap c=p. \tag{Ucut}
$$

B1261 给 $\pi:Y\cong L_h$。由于 Y 含全部 $\xi<p$，$\pi$ 固定这些序数；Ucut 又给 $\pi(c)=p$。所以 $k=\pi^{-1}$ 满足

$$
 k:L_h\longrightarrow_{\exists\Delta_0}L_t,\qquad
 \operatorname{crit}(k)=p,\qquad k(p)=c.
$$

每个 Y 元素有原唯一输出有限项表示。将计算逐个沿 k 拉回，见证存在与输出唯一性均保持、反映，叶子变为全部 $\xi<p$ 及 p。因此直接得到 $\operatorname{UGen}(p,h)$，继而得到普通 $\operatorname{Gen}(p,h)$。此处没有预设源 Gen，也没有使用原 Q 的 cut。

反方向，若有一张带源普通 Gen 的正初等图，B1249 及其极限分支先给源 UGen，B1240 给整像恰为 Y；临界点条件随即给 Ucut。于是

$$
 \boxed{
 \begin{gathered}
 Y\cap c=p\\
 \Longleftrightarrow\
 \exists h\ \exists k:L_h\to_{\exists\Delta_0}L_t\
 [\,\operatorname{crit}(k)=p,\ k(p)=c,\
    \operatorname{Gen}(p,h)\,].
 \end{gathered}
 }
 \tag{B1262}
$$

这样的 h 和 k 唯一：每张图的整像都是同一个 Y，传递坍缩唯一性决定其全域和所有取值。由凝聚或序数单调性都有 $p<h\le t$。

本节没有把 $h<c$ 放进右端。这是原合法图另须核验的位置条件，Ucut 本身没有在本篇给它保证。对实际来源的原图，这个条件仍按原规则保留。

本节也没有给原规范性。B1257 证明原 cut 会产生这样的候选图并迫使 $Q=Y$；B1262 说明，仅有正初等候选图时，准确能反推的恰是 Ucut。两者不能混称完整 G。

## 1103. Ucut 及其候选图的正确证书都在紧下一层

设 $t=\mu+n$、$n\ge1$，并取任意 $v>t$。本节的生成元固定为 $p\cup\{c\}$，其叶子条件有界可描述；没有从任意外部 S 推断低代码存在。

正确的 $U_t,T_t^u$ 及分别列出的层、代码、原子图和部分真值资料都在 $L_{t+1}$。以 $A=L_\mu$ 为代码母集，用 $T_t^u$ 定义 $\operatorname{Reach}(b)$：代码 b 的值由 $\xi<p$ 与 c 经有限唯一输出计算得到。所有有限序列都在 A 中编码。

在 $L_{t+1}$ 中，$L_t$ 已是一个元素。将求值相对化到这个正确集合，便可用有界分离在母集 $L_t$ 上取得实际集合

$$
 Y=\{x\in L_t:
        \exists b\in A\
        [\operatorname{Reach}(b)\land
         \operatorname{Ev}_{\mu,n}(b,x)]\}
 \in L_{t+1}.
$$

这里 Y 只是 $L_t$ 的子集，不是通常有序对组成的整图，故不受后者的秩障碍限制。其与正确可达代码的双向相等可作有界检查。再核

$$
 \forall\xi\in c\quad
 [\,\xi\in Y\leftrightarrow\xi\in p\,]
$$

就给 Ucut 的可靠低证书。此检查对新量化变量同样可靠，并且不要求 $\mu\notin Y$。与 v118 的 $\operatorname{Check}_{\rm conf}$ 相比，新增的是基底外分支的 Ucut，而不是该分支的原 cut。

还可以为 B1262 的候选图给出低代码。其源高度 $h\le t$，所以正确源 $U_h,T_h^u$ 和正存在式真值资料分别在 $L_{h+1}\subseteq L_{t+1}$。若 h 为极限，源代码母集取 $L_h\subseteq A$；若 h 为后继，B1261 给 $h=\lambda+n$、$\lambda\le\mu$，源母集 $L_\lambda\subseteq A$。

在 A 上定义共同项代码关系 C：一对源、目标代码被配对，当且仅当它们分别由同一个唯一输出项在叶子

$$
 (p,\bar\xi)\quad\text{及}\quad(c,\bar\xi),
 \qquad \bar\xi<p
$$

求值得到。B1211 保证 C 解码为实际 k 的取值；源 UGen 保证全域。源、目标表都已在 $L_{t+1}$，故这是 A 上的有界分离，给 $C\in L_{t+1}$。

源与目标的正确部分真值表另行量化，可有界核验 C 的全域性、单值性、单射性、临界点、取值 $p\mapsto c$ 及全部 $\exists\Delta_0$ 初等性；源 Gen 也有 B1250 的正确低证书。没有使用普通高秩图 $k\in L_v$，也没有写域外的 $k(T_h^u)$。

因此

$$
 \boxed{
 \begin{gathered}
 Y\cap c=p,\quad v>t\\
 \Longrightarrow
 \text{Ucut 与其唯一正初等候选图的正确证书}\\
 \text{可分别取于 }L_{t+1}\subseteq L_v.
 \end{gathered}
 }
 \tag{B1263}
$$

反过来，正确候选图检查配合源 Gen，按 B1262 必给真实 Ucut。故它也不是只对旧图有效的单向表示结果。所需源、目标有限深度按实际分支分别写有限公式，不将任意深度资料打成一个薄层中的大包。

若这张唯一候选图另满足 $h<c$，该不等式可直接加入同一有界检查；若不满足，不能修改 h 来安装它。上述低存在证书不授权把原 G 改成正初等性加 Gen，更不在阶段1从 Gen 独立选择新标签。

## 1104. 临界有限后继家族给出具体判据，但原规范性仍须另付

对 $t=c+n$，$\mu=c$ 已是 Y 的叶子，始终属于基底外分支。若 Ucut 成立，B1261 的高度计算给

$$
 h=p+n<c.
$$

v109 的同码求值因此完全适用。令 $r=n-1$，使用 B1198 的正确完整编码真值，考虑条件

$$
 \forall\varphi\in\omega\
 \forall\bar a\in\operatorname{Seq}(L_p)\quad
 S_{p,r}(\varphi,\bar a)
 \leftrightarrow
 S_{c,r}(\varphi,\bar a).
 \tag{*}
$$

它说源、目标最后真层之间的同码求值对应完整初等；n>1 时不把这个对应误称为自然包含。

Ucut 给实际候选图，由 B1199 和 B1201 得(*)。反过来，(*)给完整初等的最后真层同码对应，一次 Def 延拓给正初等图；B1228 给源 UGen，B1240 再给 Ucut。于是

$$
 \boxed{
 \begin{gathered}
 U\operatorname{Hull}^{L_{c+n}}(p\cup\{c\})\cap c=p
 \quad\Longleftrightarrow\quad (*);\\
 n=1:\qquad
 U\operatorname{Hull}^{L_{c+1}}(p\cup\{c\})\cap c=p
 \quad\Longleftrightarrow\quad
 L_p\prec L_c.
 \end{gathered}
 }
 \tag{B1264}
$$

这正好复核 v109 的正图证书，没有把同码条件升级为原规范性。首个后继情形中的实际候选图是自然包含 $L_p\prec L_c$ 的 Def 延拓，其像由 L_c 上使用 L_p 参数的定义子集组成。

因此，最基本的基底外情形已经可以把剩余问题写得很具体：能否从 $L_p\prec L_c$ 进一步推出

$$
 \operatorname{Hull}_{\rm orig}^{L_{c+1}}
       (p\cup\{c\})\cap c=p?
 \tag{未证的充分路线}
$$

本篇没有证明这一蕴含，也没有给出反例。即使这个蕴含不成立，也不表示原 cut 不能另有低证书；它只是一个可直接检验的充分路线，不新增为基础公理。

真正需要核对的是：原矩阵在候选像内输入上有见证时，原构造良序所选的最小完整见证是否仍给候选像内输出。已有完整初等性保证某份适当见证可取得，不能未经证明把它替换成原外部选择器指定的那一份。对固定矩阵的辅助 Def 代码取最小值，也仍不是原完整见证元组的排序。

本篇证明了任意生成元的唯一输出闭包自身初等、凝聚和最小性，以及 Ucut 与唯一正候选图的等价及低证书；没有把这些结论登记为原 cut 已解决。全实际域 B1179/B1182 仍相对于原局部接口，第三个 Silver 初始化保留。独立后继源原 G 的一般规范性低证书与其后完整 R／Init／Point 接合仍未全部支付。

没有新增完整节点、实际失败边或有限节点枚举。任意当前原 C 起点、原完整见证及构造良序、共同重选、阶段0整包来源界、阶段1原同一个 j_*、丢高、阶段2许可、全称保Γ零新增、特殊步旧保留项界、全部终端精确域以及 Gen 的使用方向均不变。

# BTBMS：不同陪域的刚性比较与原 cut 证书的共同复用

日期：2026-10-25。检查点 v120；主稿第1105—1111节，B1265—B1269。

本篇将 v116 的“固定目标下唯一”推广到不同目标层，并将 v114/v117 的“已知是大图限制”推广为可以从实际小图的源和临界点数据证明它必是该限制。对同一临界父列 p 和像列 c，所有已有普通 Gen 的后继源正初等图组成相容的限制链。给定一份有限记录，只需保留这条链最大图的独立原规范性义务；其余图可以直接检查覆盖关系并复用原 cut 的正确证书。

这里没有支付每条链最大弱图的原 cut。特别是单张孤立的弱后继图仍是原问题。新结论是比较与证书归约，不是整个 BTBMS 良序已经证明，也不计作新增完整节点。

## 1105. 两种用途分开：实际上行的图比较与下行的直接证书

保持原完整见证元组、原构造良序及原 hull。正初等性仍严格指有限存在前束加 Δ₀，记为 ∃Δ₀；原 G 的其余公式要求全部保留。

本篇的两个步骤不能混用：

- 图比较使用 B1249 的 Gen⇒UGen，逐个比较真实有限计算。其在 BTBMS 操作中的图身份用途仍只登记于原许可的实际上行，不以 Gen 向下选择标签或推位置。
- 原 cut 的证书复用不通过 Gen 推出新图身份。它直接核验一张已经有完整原规范性证书的图、一个域内取值和正确唯一输出 hull，再核验所请求的精确坍缩图。

后一个检查中的大图只是一份共同量化的记录，不成为新的反射供应者。阶段1仍仅用原同一个 j_*；若大图就是本次 j_*，不能据此把它的整图或完整自证书当成 L_v 的已有元素。

回查旧结果：B1240 固定 p、c 和目标；B1252 在已知 t=J(g) 时给限制图的规范性。本篇首先补的是不同目标的比较，随后才把已经可靠的原规范性证书共同复用。B1229—B1230 的见证限制论证仍直接沿用，不重新算作一次新证明。

## 1106. 相同生成源、不同陪域：整图相等，后继源还强制陪域相等

设已有两张正初等图

$$
 k_i:L_h\longrightarrow_{\exists\Delta_0}L_{t_i}
 \quad(i=0,1),
 \qquad
 \operatorname{crit}(k_i)=p,\quad k_i(p)=c,
 \qquad \operatorname{Gen}(p,h).
$$

不预设 $t_0=t_1$。B1249 及其极限分支给源 UGen。无妨设 $t_0\le t_1$，所以 $L_{t_0}\subseteq L_{t_1}$。

对一份源中真实的有限唯一输出计算作归纳。全部 $\xi<p$ 在两图下同为 $\xi$，p 在两图下同为 c。若当前输入的两个像已经相等，则：

1. 源计算的见证存在及指定输出唯一性，在两端都成立；唯一性是“没有两个输出不同的见证”的否定，故由 ∃Δ₀ 初等性保持。
2. 小目标 $L_{t_0}$ 中那份真实见证的各坐标也属于 $L_{t_1}$；Δ₀ 绝对性使它在大目标仍通过原矩阵。
3. 大目标的指定输出唯一，因而只能等于小目标的输出。

无需将完整元组放入小目标，也没有比较两端的非唯一最小见证。有限归纳及源 UGen 给

$$
 k_0=k_1
$$

作为全部 $L_h$ 上的取值函数。

若 $h=\alpha+1$，还能排除 $t_0<t_1$。令 $M=L_\alpha\in L_h$。由于 $L_h=\operatorname{Def}(M)$ 的每个元素都是 M 的子集，

$$
 L_h\models\neg\exists z\ (M\in z).
$$

两图对 M 的共同像记为 a。它属于 $L_{t_0}$。若 $t_0<t_1$，则 $L_{t_0}\in L_{t_1}$，而 $a\in L_{t_0}$，使大目标满足 $\exists z\ (a\in z)$，与初等性矛盾。因此

$$
 \boxed{
 \begin{gathered}
 \operatorname{Gen}(p,h),\
 k_i:L_h\to_{\exists\Delta_0}L_{t_i},\
 \operatorname{crit}(k_i)=p,\ k_i(p)=c\\
 \Longrightarrow k_0=k_1;\\
 h\text{ 为后继}\Longrightarrow t_0=t_1 .
 \end{gathered}}
 \tag{B1265}
$$

对极限 h，只得整图取值相等，不能顺便认同陪域高度。这正是后继假设真正使用的位置。

## 1107. 小图不必预先标注为限制：源在域内即可强制认同

设实际已有

$$
 J:L_H\to_{\exists\Delta_0}L_T,\qquad
 k:L_h\to_{\exists\Delta_0}L_t,
$$

两图的临界点均为 p，均将 p 送到 c，并且

$$
 p<h<H,\qquad h\text{ 为后继},\qquad
 \operatorname{Gen}(p,h).
$$

本节前半甚至不要求 J 已知原规范。因为 $h<H$，B1199 给

$$
 J|L_h:L_h\prec L_{J(h)}
$$

的完整一阶初等性。它与 k 有同一个源和同一生成元像，可以直接应用 B1265，得到

$$
 \boxed{
 t=J(h),\qquad k=J|L_h.
 }
 \tag{B1266}
$$

所以不必预先证明 t 在 J 的值域，也不必预给两张图的逐点相等。特别有 $t<T$。这不是对域外 h 求值；严格前提 $h<H$ 不可删。

如果 J 另是原规范图，则 B1252 的前提现在确已满足，故 k 的精确原规范身份随之取得。这里引用的是已证明的限制定理，没有从正初等性直接认同原 hull。

推论：固定同一对 p、c，取两张源有普通 Gen 的后继源正初等图。若 $h_0<h_1$，则

$$
 t_0=k_1(h_0)<t_1,\qquad
 k_0=k_1|L_{h_0}.
$$

若源高度相等，B1265 给目标高度及整图都相等。因此这类图按源高度和按目标高度的排序一致，并组成限制链。不同父列不能合并；仅有相同 c 或相同终端标志不足以调用本结论。

## 1108. 复用原 cut 时只检查覆盖取值，不通过 Gen 认同下行图

先把纯语义前件写全。设 J 已是原规范图，

$$
 \begin{gathered}
 J:L_H\to_{\exists\Delta_0}L_T,\quad
 \operatorname{crit}(J)=p,\quad J(p)=c,\\
 R=\operatorname{Hull}_{\rm orig}^{L_T}
        (p\cup\{c\})=J''L_H,\qquad R\cap c=p .
 \end{gathered}
$$

取 $p<g<H$，并真实核验 $J(g)=t$。B1199 给
$J(L_g)=L_t\in R$。置

$$
 Q_t=\operatorname{Hull}_{\rm orig}^{L_t}(p\cup\{c\}).
$$

B1229 将小层原矩阵的全部原见证坐标限制在 $L_t$ 内，且不增加见证坐标、改变元组编码或改变排序。R 对这个原大层运算封闭，故 B1230 已给 $Q_t\subseteq R\cap L_t$。于是

$$
 p\subseteq Q_t\cap c\subseteq R\cap c=p,
 \qquad Q_t\cap c=p.
$$

这一推论不需要 $\operatorname{Gen}(p,g)$，也不预给小图或小规范域。g 是层取值的原像，不因此自动等于小 hull 的精确坍缩高度。

现在处理低证书。固定实际 $v>T$。假定 J 的原规范性已经有一份在 $L_v$ 中可靠的有界检查及正确证书；不是只给它的正初等图代码。将这些已付资料分别列出，再加：

- 正确的 H、T、g、t 及各构造层、代码与求值资料；
- J 的正确整图代码 $C_J$；
- 有界检查 $p<g<H$ 以及该代码确实解出 $J(g)=t$。

最后一项只在正确的源、目标代码母集上找两个代码，并核其值分别为 g、t；求值相对化到作为元素的 $L_H,L_T$，故量词有界。没有使用通常高秩整图 $J\in L_v$。

该检查对新量化变量仍可靠：先由已付的大图证书得到真实原规范 J，再由实际取值和上述语义包含得到原 $Q_t\cap c=p$。因此

$$
 \boxed{
 \begin{gathered}
 \text{J 的原规范性在 }L_v\text{ 已有可靠证书},\\
 p<g<H,\quad J(g)=t\\
 \Longrightarrow
 \text{原 }Q_t\cap c=p\text{ 有 }L_v\text{ 内可靠证书}.
 \end{gathered}}
 \tag{B1267}
$$

若 J 的原规范性证书还没有支付，本结论就保留这一项待办，绝不把“J 实际规范”偷偷当成已经存在的低证书。可以使用 v115 的已付极限源检查；一般最大弱后继图则仍须另证。这里是证书复用定理，不是增加一个免费接口。

## 1109. 精确规范域和整图也可有界核验，不需要下行 Gen 身份推断

在 B1267 的前提下，原 cut 已经可靠成立。令

$$
 Y_t=U\operatorname{Hull}^{L_t}(p\cup\{c\}).
$$

B1257 给 $Q_t=Y_t$；B1261 给它的凝聚。对后继 t，B1263 已有正确 $Y_t\in L_{t+1}$ 及可靠有界核验。极限 t 可用原极限表的既有检查。因为 $t<T<v$，这些资料均在实际 $L_v$ 中。

要验证原请求指定的域 $L_h$，再直接核验：

1. h 满足原位置 $p<h<c$，并给出正确 $L_h$。
2. 小图代码 $C_k$ 解出一个从 $L_h$ 到 $Y_t$ 的满射成员结构同构。
3. 对源、目标代码的等价表示作相容性检查，确保单值、单射、全域、满像及成员关系双向保持。
4. 所需原临界点、$p\mapsto c$ 和其他原条款按原检查保留。

这些都是在已有母集、正确求值资料和 $Y_t$ 上的有界检查。满像明确量化全部 $y\in Y_t$，不能以只检查若干已标记对象代替。因为 $L_h$ 传递，任何这样的同构必是 $Y_t=Q_t$ 的唯一逆坍缩；所以 h 恰是原规范域，不是任选较小域。

反过来，若实际小图确是所问原规范逆坍缩，cut 所给的正候选图和整图低代码由 B1257/B1263 取得，因此上述检查有真实低见证。所需额外正确资料至多在 $L_{t+1}\subseteq L_v$；大图证书的层界仍照其真实界计算。得到

$$
 \boxed{
 \begin{gathered}
 \text{在已核准的 B1267 覆盖记录下，}\\
 \text{原小图的规范逆坍缩身份及精确域}\\
 \text{具有对新量化变量可靠的 }L_v\text{ 内有界证书}.
 \end{gathered}}
 \tag{B1268}
$$

这里不是将原 G 改成 Ucut 加 Gen。原 cut 来自已核准的原大 hull，随后才使用 $Q_t=Y_t$。检查本身不从 Gen 推出小图等于限制、不据 Gen 选 h 或 t、不增添反射供应者。普通 Gen 仍是另行共同量化、核验的原命题。

本节支付的是原规范性及精确域部分。若原 G 的全部 Σ₁ 语法要求超出本篇已验证的 ∃Δ₀ 初等性，相关检查仍保留，不能只凭这个同构证书就删去。

## 1110. 有限同父列记录只留下最大图的一份独立 cut 义务

考虑当前同一步中的一个非空有限记录组

$$
 k_i:L_{h_i}\to_{\exists\Delta_0}L_{t_i},
 \qquad
 \operatorname{crit}(k_i)=p,\quad k_i(p)=c,
 \qquad \operatorname{Gen}(p,h_i),
$$

其中所有 $h_i$ 都是后继。每张图均为已有实际记录；不是从 Gen 新选择出来的标签。

取组内最大的源高度 H。B1265 使该高度的重复记录具有同一目标 T 和同一整图 J。B1266 对其余每张图给

$$
 h_i<H,\qquad t_i=J(h_i)<T,\qquad
 k_i=J|L_{h_i}.
$$

所以组内确有一张同时具有最大源和最大目标的图；不需要先猜测一个并不存在的外部大图。若最大图 J 的原规范性低证书已付，在实际共同层 $v>T$ 中，对其余记录逐个写入真实取值 $J(h_i)=t_i$，再使用 B1267—B1268。有限份证书分别量化，不要求打成一个越界大包。得到

$$
 \boxed{
 \begin{gathered}
 \text{同一 }(p,c)\text{ 的有限后继源记录组：}\\
 \text{最大图的一份原规范性低证书}\\
 \Longrightarrow
 \text{全部较小记录的原 cut、规范性及精确域低证书}.
 \end{gathered}}
 \tag{B1269}
$$

这是现有实际图的比较及证书归约。使用 Gen 的比较只按第1105节登记于许可实际上行；下行公式直接保留并核验各覆盖取值、完整大图证书及精确小图证书，不将 B1266 变成靠 Gen 反推新标签的操作。

这项归约有三个明确限制：

- 最大弱图自身的原 cut 没有因此解决；单元素组完全保留原义务。
- 不同临界父列 p 的组须分别处理。不能仅因目标列 c 相同就只剩全表一张图。
- 若最大图就是原反射图 j_*，其规范性是外部已知事实也不等于整张图及其自证书属于当前工作层；本篇不将 j_* 添为被反射公式中的免费记录。

若另有已核准的极限源原规范图且其源高度严格超过本组全部源，则 B1266 同样提供覆盖，其低规范性可沿 v115。这类有较宽余量的配置也常被旧全表路线覆盖，不重复称为新薄边界已解决。

例：同一 p、c 的三张已有图源高为 $p+1,p+2,p+3$。B1228 支付三份 Gen；B1266 迫使目标分别为 $c+1,c+2,c+3$，小图为最大图的真实限制。若最大图在共同 $L_v$、$v>c+3$ 中已有正确原规范性证书，则两张较小图的原 cut 和精确域可同时复用它。即使最紧 $v=c+4$，额外的小图资料也分别在 $L_{c+2}$、$L_{c+3}\subseteq L_v$。这个例子的条件是最大图证书已经支付；没有证明它在 $L_{c+4}$ 自动存在。该三图配置也不是新完整 BTBMS 节点。

## 1111. 本轮实际缩小了什么，尚未缩小什么

已补的比较是：同生成源下，不同陪域中的图逐点相等；后继源时连陪域也唯一。由此，同 p、c 的生成后继源图自动组成限制链，不再需要把每张较小图与大图的关系列作独立来源假设。

已补的证书连接是：一旦大图的原规范性在实际层中已经可靠核准，用一个真实域内取值就能支付小目标的原 cut，再借正确唯一输出 hull 直接核验精确逆坍缩。这个检查不把 Ucut 当成原 cut，也不靠下行 Gen 身份推断。

尚未支付的是每个不能被已核准记录覆盖的最大弱后继图的原 cut。特别 v119 的基本问题

$$
 L_p\prec L_c
 \ \stackrel{?}{\Longrightarrow}\
 \operatorname{Hull}_{\rm orig}^{L_{c+1}}
      (p\cup\{c\})\cap c=p
$$

仍未证明；本篇也没有构造其反例。有限组的归约不能解决这个单张极端情形。

原 C、全体项 Gen、选项2的原 hull、全部终端精确第7级、修正第6级、共同重选、阶段0冻结的 native-last rootOnly 门槛和源整包界、阶段1原同一个 j_* 及丢高、阶段2许可、全称保Γ零新增、特殊步旧保留项旧标签界、同 owner 相对虚拟支撑先删再 Cut 均不变。共同 Point 中大图、小图、所有头和证书一起重新量化，不固定前一步特选输出作为下一步的唯一输入。

B1179/B1182 的全实际域相对结论和第三个 Silver 初始化保持。无剩余接口的 ZFC＋0# 下全 BTBMS 良序仍未完成；本轮无新增完整节点或确认失败边，也未进行有限节点枚举。

直接依赖：B1199、B1207—B1208、B1211、B1229—B1230、B1240、B1249、B1252、B1257、B1261—B1263。文献回查 Sutner §2.2 仍只说明极限与后继原 Skolem 解释须区分，不为未证的最大弱图 cut 提供现成结论：https://www.cs.cmu.edu/~sutner/papers/beta.pdf 。

# BTBMS：后继层内部的生成判据、最小生成序数与候选源高

日期：2026-10-25。检查点 v121；主稿第1112—1119节，B1270—B1275。

本篇回用 v113 的首次基底外见证与 v117 的 Gen⇔UGen，将连续序数生成元的普通 Gen 写成有正确基底参数的内部正存在判据。由此识别并运输最小生成序数，排除带源 Gen 的非平凡后继层自嵌入。另用实际临界列的局部基数性质证明：源高度严格小于目标高度时，源 Gen 强制源高度小于目标临界值。两项合并，支付 v118—v119 对后继目标候选图保留的一般外部高度问题。

这不是原 cut 的规范性证明。原 Q 仍使用原完整见证元组和原构造良序，离散叶子 p∪{c} 的原 cut 仍不能以唯一输出 cut 代替。原 G 的其余全部公式要求不变。新结论作为外部结构与证书范围的核查；阶段1仍分别核原普通 Gen 和原有界位置条件 h<c，不从 Gen 选取或安装标签，不引入新供应图。有限项的图身份运输仍限于原许可的实际上行。

以下正存在式一律指有限存在前束加 Δ₀ 矩阵，记为 ∃Δ₀。各后继深度 n 在一次应用中固定；所有高层参数和证书分别量化，不把它们捆成一个薄层中的普通元组。

## 1112. 内部判据需要基底表，不需要顶层的完整生成表

固定

$$
 g=\mu+n,\qquad \mu>\omega\text{ 为极限},\quad 1\le n<\omega,
 \qquad A=L_\mu,\quad M_r=L_{\mu+r}\ (r<n).
$$

取极限基底 A 的正确原有限项表 $\mathcal T_\mu$，以及原有限存在矩阵的正确正真值表 $P_\mu$。B1205、B1212 给这两份表分别属于 $L_{\mu+1}\subseteq L_g$。表的输入、有限项和有限轨迹都是 A 中的代码；其正确性可用同层的分别量化资料作有界核验。全部真层 $M_r$ 也分别是 $L_g$ 的元素。

令 $\mathcal P_g$ 表示上述有限列参数的书写缩记，不表示这些参数组成的集合元组属于 $L_g$。沿实际正初等嵌入运输时，B1199 识别全部真层；正确表的有界检查则识别整张像表。这里用的是整集合的像，不将表的逐点像当作完整目标表。

还需要 B1205 证明中的一个内部事实：固定 n，目标中“第 i 个原 Δ₀ 矩阵在基底输入 $\bar x$ 上有有限多个见证坐标”有一个统一的 ∃Δ₀ 判据，其参数只取自 $\mathcal P_g$。把它记为

$$
 \operatorname{Pos}_n(i,\bar x;\mathcal P_g).
$$

为核准其层界，逐项展开如下。目标见证各自选一个 A 中的 n 层 Def 代码；有限多个代码仍是 A 的元素。将所问 Δ₀ 矩阵及这些顶层定义展开，得到最后真层 $M=M_{n-1}$ 上的一份有限一阶公式。该公式的有限子公式真值表 R 可编码为 A 的子集，并且

$$
 R\in\operatorname{Def}(M)=L_g.
$$

这是每份有限公式各自的真值表，不是 M 或 $L_g$ 的全部满意度。n=1 时，赋值域直接是 A；n>1 时，赋值使用 B1197 的 A 代码。把该求值定义相对化到作为元素的 M，所得求值关系有界。因此语法翻译轨迹、R 的全部有限 Tarski 条款及最后查询，均能在 A、M、R、ω 和已给真层之间作 Δ₀ 检查。存在量化见证代码与 R，即得所需正判据。

特别地，没有把 $P_g$、$U_g$ 或 $T_g^u$ 放入 $L_g$；它们的已证一般界仍是 $L_{g+1}$。也没有使用不属于 $L_g$ 的顶点 g 或集合 $L_g$ 作为内部参数。

## 1113. 连续种子的 Gen 等价于一次可正见证的基底逃逸

对 $\omega<a<\mu$，令

$$
 K_a=\operatorname{Hull}_{\rm orig}^{L_\mu}(a+1).
$$

这里 a+1 包含全部 $\xi\le a$。成员关系 $x\in K_a$ 可由正确 $\mathcal T_\mu$ 有界表达：存在 A 中的有限原项及叶子序列，叶子均为不大于 a 的序数，计算值为 x。K_a 本身不必成为 $L_g$ 的一个另给参数。

定义逃逸判据

$$
 E_n(a;\mathcal P_g)\quad\Longleftrightarrow\quad
 \exists i\in\omega\ \exists\bar x\in A^{<\omega}
 \left[
  \bar x\subseteq K_a\ \land\
  (i,\bar x)\notin P_\mu\ \land\
  \operatorname{Pos}_n(i,\bar x;\mathcal P_g)
 \right].
$$

上式的有限序列量词都用 A 中的代码解释。$(i,\bar x)\notin P_\mu$ 是正确表上的有界非成员关系，不是未经支付的负无界真值。将 Pos 的有限存在变量一起列在前束即可。因此 E_n 是 $L_g$ 内的 ∃Δ₀ 判据。

证明

$$
 \boxed{
  \omega<a<\mu\quad\Longrightarrow\quad
  \operatorname{Gen}(a,g)
  \ \Longleftrightarrow\
  L_g\models E_n(a;\mathcal P_g).
 }
 \tag{B1270}
$$

**正向。** 由原 Gen，μ 有一份从所有 $\xi\le a$ 出发的有限原计算。按有限计算的依赖顺序，取第一个在 $L_g$ 有完整见证坐标、但在 $L_\mu$ 无完整见证坐标的结点。这样的结点必须存在：否则逐步由 B1206，原最小完整见证和输出都与极限基底相同，最后不可能产生 $\mu\notin L_\mu$。此前每个结点都由基底原计算取得，所以当前全部输入在 K_a 中；当前编号及输入正好见证 E_n。

**反向。** 若 E_n 成立，其输入 $\bar x$ 都由基底有限原计算生成。B1206 将每个实际基底计算的正确最小见证证书写为在目标中仍可靠的唯一输出正计算，故这些输入属于目标的 $U\operatorname{Hull}(a+1)$。当前矩阵在目标有见证、在基底无见证，B1224 的有限 Def 覆盖判据便从这些输入唯一确定 μ。于是

$$
 \mu\in U\operatorname{Hull}^{L_g}(a+1).
$$

B1249 给 UGen(a,g)，从而给原 Gen(a,g)。

本判据有两项必要范围限制。第一，参数必须是当前实际基底及其正确表；不能在一个更大的环境里任意猜一个较低基底，便声称识别了整个环境的 Gen。第二，种子是连续的 a+1；证明没有把它改成 p∪{c}，也没有在此证明原 cut。

## 1114. 最小生成序数可沿后继层实际嵌入运输

对 $g=\mu+n$，在外部定义

$$
 \rho(g)=\min\{a:\omega<a\le\mu\ \land\
                        \operatorname{Gen}(a,g)\}.
$$

B1228 给 Gen(μ,μ+n)，故这个最小值存在。这里不要求在 $L_g$ 中先把全部满足 Gen 的 a 收集成集合。

设实际正初等嵌入

$$
 j:L_{\lambda+n}\longrightarrow_{\exists\Delta_0}L_{\mu+n},
 \qquad j(\lambda)=\mu,
$$

并使用 B1199 识别真层及正确整表。此情形覆盖 B1210 给出的全部后继源实际图。B1270 和正初等性首先给出，对 $\omega<a<\lambda$，

$$
 \operatorname{Gen}(a,\lambda+n)
 \ \Longleftrightarrow\
 \operatorname{Gen}(j(a),\mu+n).
$$

还须排除目标中不在 j 像内的更小生成序数。令 $q=\rho(\lambda+n)$。源中的正存在式

$$
 \exists a\ [\omega<a<q\ \land E_n(a;\mathcal P_{\lambda+n})]
$$

为假。其目标对应式亦为假；因为 $a<j(q)\le\mu$，B1270 在这些 a 上全部适用，故不存在任何目标生成序数 a<j(q)，不只是不存某个像内的 a。

若 q<λ，E_n(q) 运输给 Gen(j(q),μ+n)。若 q=λ，目标端直接由 B1228 取得 Gen(μ,μ+n)。两种情况都得到

$$
 \boxed{j\bigl(\rho(\lambda+n)\bigr)=\rho(\mu+n).}
 \tag{B1271}
$$

此处使用正存在式的反映及其否定的保持；没有将带有有界交错量词的一般 Σ₁ 语法免费正规化，也没有声称任意弱层内部的全域 Gen 检查本身就是无参数正存在式。

## 1115. 源由临界点生成时，后继层不能发生同高度自嵌入

设

$$
 k:L_h\longrightarrow_{\exists\Delta_0}L_t,\qquad
 \operatorname{crit}(k)=p,\quad k(p)=c>p,\quad
 \operatorname{Gen}(p,h),\quad h=\lambda+n,
 \quad n\ge1.
$$

临界点 p 是大于 ω 的极限，故 p≤λ；B1210 给 t=k(λ)+n。

若某个 $\omega<a<p$ 满足 Gen(a,h)，B1249 给 UGen(a,h)。k 固定全部 $\xi\le a$，于是 B1243 的唯一输出生成刚性迫使 k 为恒等，矛盾。因此 p 恰为源的最小生成序数。再由 B1271，

$$
 \rho(h)=p,\qquad \rho(t)=c.
$$

任何序数保持嵌入都有 h≤t：对每个 α<h，k(α)≥α 且 k(α)<t。若 h=t，上面两式则给 p=c，矛盾。故

$$
 \boxed{
 h\text{ 为后继},\ \operatorname{Gen}(p,h),\
 \operatorname{crit}(k)=p,\ k(p)>p
 \quad\Longrightarrow\quad h<t.
 }
 \tag{B1272}
$$

这是外部结构的刚性结论。它不要求 k 预先是原规范 hull 图，不要求 h 或 t admissible，也没有预用待证位置 h<c。对极限源、极限目标的同高度情形，本节不作结论。

## 1116. 适当源高度加 Gen，强制 h 小于目标临界值

本节不要求 h 为后继。设实际正初等 k、p、c 如上，另有

$$
 \operatorname{Gen}(p,h),\qquad h<t.
$$

首先，p 在 $L_h$ 中不存在来自较小序数的满射。否则取 $f\in L_h$、δ<p，f:δ↠p。运输这项有界函数断言，k(f) 是 δ 到 c 的满射；但对每个 ξ<δ，

$$
 k(f)(\xi)=k(f(\xi))=f(\xi)<p,
$$

矛盾。“存在较小序数及其到所给序数的满射”是有限存在前束加 Δ₀ 矩阵，故其源侧为假也由 k 保持到目标：

$$
 L_t\models\text{不存在任何 }\delta<c\text{ 到 }c\text{ 的满射}.
$$

反设 c≤h。B1192—B1193 不以 h<c 为前提，仍给自然包含 $L_p\prec L_c$，以及两端完整分离、完整收集和 KP。特别 p 是 $L_c$ 中的无限基数；否则 $L_c$ 中较小序数到 p 的满射也是 $L_h$ 中的满射。

在 $L_c$ 中，取一个满射

$$
 e:p\twoheadrightarrow\omega\times p^{<\omega}.
$$

这里只用无限良序基数的通常有限序列编码。完整收集给有限序列集和所需递归，p×p 上按最大坐标再按坐标排列的良序给 p 的有限幂仍为 p，再将有限长度并入 ω 坐标即可。该论证不需要幂集公理。项编号包括有限树和“某个叶子使用指定参数 p”的标记；其余有限叶子均小于 p。因此不用将 p 当成 $p^{<\omega}$ 中一个允许的叶子值。

由 B1249 及其极限版本，原 Gen 给 UGen(p,h)。正确源有限唯一输出表 $T_h^u$ 属于 $L_{h+1}\subseteq L_t$。源对象的低代码母集以及作为元素的 $L_h$ 也在 $L_t$ 中；其求值定义相对化到 $L_h$ 后有界。必要时单独指定 p 的一个正确源代码，不要求 p 已属于源的极限基底代码母集。

注意下一步的分离母集是

$$
 p\times c\in L_{c+1}\subseteq L_t,
$$

而非断言它属于 $L_c$。因为 c 为极限，每个通常对 〈η,ξ〉、η<p、ξ<c 都在 $L_c$ 中；该全部乘积可在 $L_c$ 上用参数 p 定义，“第二坐标是本层序数”就给出 ξ<c。

利用 e、$T_h^u$ 和相对化的源求值，在这个母集上作 Δ₀ 分离，定义函数 f:p→c：η 对应一个有限唯一输出项及叶子；若它有定义且其值为序数 ξ<c，取 f(η)=ξ；否则取 f(η)=0。定义中的量词只遍历低代码母集、表和 $L_h$，无定义的默认情形也只是这些有界量词的否定。B1213 因此给

$$
 f\in L_t.
$$

不同代码表示同一对象不影响值的唯一性。UGen(p,h) 又保证每个 ξ<c 都有某个这样的有限项表示，因为 c≤h 使 ξ∈L_h；所以 f 是 p 到 c 的满射。这与目标刚才已证的局部基数性质矛盾。

于是

$$
 \boxed{
 \operatorname{crit}(k)=p,\ k(p)=c>p,\
 \operatorname{Gen}(p,h),\ h<t
 \quad\Longrightarrow\quad h<c.
 }
 \tag{B1273}
$$

特别核准了最紧的 h+1=t；源表和母集仍分别是 $L_t$ 的元素。证明没有把原高层函数图 k 放进 $L_t$，也没有假定目标 $L_t$ 有收集或幂集。

本节中的 f 和源项表用于外部反证，不是阶段1新添的图供应者。原向下存在式仍携带普通 Gen，直接检查已有的 h<c；不按这些有限项选择标签、修改精确域或派生新增标签的安装位置。

## 1117. 全部后继目标的生成候选图具有正确源高度

设

$$
 k:L_h\longrightarrow_{\exists\Delta_0}L_t,\qquad
 \operatorname{crit}(k)=p,\quad k(p)=c>p,\quad
 \operatorname{Gen}(p,h),\quad t\text{ 为后继}.
$$

若 h 为极限，则 h≤t 且 h≠t，所以 h<t。若 h 为后继，B1272 给 h<t。两种情况下均可应用 B1273，得到

$$
 \boxed{p<h<c<t.}
 \tag{B1274}
$$

这去掉了 v119 特例 t=c+n 的限制，也覆盖目标 t=μ+n、μ>c、源极限基底 λ>p 的情形。这里的后继深度仍逐次为固定有限 n；每个大于 ω 的后继高度都有这样的分解。

结论不以原规范性为前提，故不能反过来将满足它的正初等候选图称为原规范图。对任意原规范图，它当然适用，但原全部初等性、规范 hull 身份及阶段许可仍各自核验。

<!-- END SOURCE TEXT -->
