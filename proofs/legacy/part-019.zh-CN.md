# Earlier main notebook: part 019

Original sections: **10–10**.

**Historical research record.** Statements in this part retain their original
scope and may be revised later. Consult the latest argument for the current claim.

[Index](INDEX.md) · [Current status](../../README.md) · [Previous](part-018.zh-CN.md)

<!-- BEGIN SOURCE TEXT -->
## 10. 复核包

本轮新增多端口完整包、有限外参数链语法、前缀路径／有限来源及候选窗口规范化模块。主要复核入口：

    node audit-double-incoming-window-counterexample.mjs
    node probe-double-incoming-strict-source.mjs
    node audit-double-incoming-strict-entry.mjs
    node explore-double-incoming.mjs
    node probe-ranked-window-origins.mjs

29项S的5指标入口、规范化反例及n0..8块公式独立核验。525项T₂的471指标入口完整重放；475边／598菜单／523份原C，26阶段0中2非空。探索984来源、223小来源原C、892菜单；200次明确尺寸停止不计通过。窗口探针257判定、46不交换、3候选来源障碍；数学反例由显式比较和7.267证明，不依赖搜索失败。以下旧审计保留。

本轮新增继承外A的语法、原完成器、有限前缀／来源／窗口比较与固定上下文模块；三个复核入口：

    node audit-inherited-a-forest.mjs
    node probe-inherited-strict-source.mjs
    node audit-inherited-strict-entry.mjs

结构样本430来源、440边，630处跨额外私有层的外A，1057个开放类型及1652个bare窗口来源有限判定，40条外A修正和10条开放来源另重放。结构探索64次尺寸停止明确登记，不计通过。T的307指标入口另完整重放；除已由7.249处理的首步外，入口306边及T五份首步共311边、418菜单，351份独立原C全部一致。15处严格前缀切口；17处阶段0中1处非空整包。程序不计算序数或模型论证书，全称性由正文证明。以下旧审计保留。

本轮新增：

    node audit-ported-fixed-native-context.mjs

模块ported-fixed-native-context.mjs及JSON报告。10209实际矩阵、36145开放出现、18141类型共同来源判定（最大44轮，无本轮上限停止），23278内部精确交换式。余79菜单的13种来源路径、四个首分支的10种来源路径及56条外A修正另逐条重放。15个初始化前缀检查；候选高度界的实际反例入口也保留。旧数据22处未做探索仍不计通过。本轮只核原生公式；完整条件良序的标记部分调用既有接续引理，原C交接条件不变。以下旧审计保留。

本轮新增：

    node audit-ported-bare-root-windows.mjs
    node probe-ported-bare-activation-source.mjs
    node audit-ported-bare-activation-entry.mjs

模块ported-bare-root-windows.mjs，配三个JSON。10209实际矩阵中139297个bare窗口全部递归闭合，26626类型有限来源判定成功，最大46轮；5种新归约来源另重建并重放路径。6330精确窗口交换式，153启动及7word菜单新增覆盖，余79word。旧27不可达模板缺少3种局部窗口的有限来源。新260项S_act有289指标入口，294边／409菜单独立原C接续，336份去重补全、最大6378项。17阶段0（16bare、1非空原整包）位置和界见7.566；本轮未宣称完整后代良序。以下保留旧审计。

本轮新增：

    node audit-ported-sibling-subtree-order.mjs
    node probe-ported-sibling-copy-sources.mjs
    node audit-ported-sibling-copy-entry.mjs

独立模块ported-sibling-subtree-order.mjs，配三个同名主题JSON。10209份不同实际矩阵，117394对兄弟窗口比较、611份精确复制式；旧54不可达模板中27个A分裂违反新不变量，另27个A启动仍满足，明确新方法边界。12个完整候选均有重放入口和实际严格切口；297项S_A另核255指标入口，260边／368菜单，296去重独立原C，最大863项。17阶段0位置与唯一非空ℓ=182、n=0的完整原包和固定原末列界全部记录。本轮全称结果是结构保持与一类切口，仍不宣称完整节点良序。以下保留旧审计。

本轮新增：

    node audit-ported-owner-terminal-gap.mjs
    node probe-ported-special-copy-source.mjs
    node audit-ported-special-copy-entry.mjs

对应ported-owner-terminal-gap-audit.json、ported-special-copy-source-probe.json、ported-special-copy-entry-audit.json。直接语法间隙不需共同来源；核34020种普通私有类型、323种owner末列类型，含96种开放。610份特殊菜单核精确复制公式；12个定向来源全可达并实际有严格前缀挡项。174项S入口131指标全部重放，136条边／211份菜单核原C，172份去重独立补全，最大572项。26处阶段0含唯一非空ℓ=118、n=0，源/c5/r3/c4/r2，原末列/c5/r3/c5，原包整体运输。本轮仍不声称完整节点良序。以下为历史审计。

本轮新增以下复核入口及对应JSON：

    node probe-ported-outer-window-cuts.mjs
    node audit-ported-outer-window-cuts.mjs
    node probe-ported-local-root-gaps.mjs

另有ported-outer-window-selected-examples.json，保存436项外层实例和176项本层实例的完整来源、有限入口和实际原C日志。9355来源核12049菜单、24579开放容器，13162个更外层容器全被保留A窗口覆盖；72来源另经独立原C比较，84菜单中69实际较小承载均为前缀。54个有非前缀夹项的合法语法模板，有限入口判定全部拒绝，无预算未知，最长22轮；它们没有进入实际挡项核验。原生实际来源、较早真实类型、实际扫描承载和不可达模板四类计数分开。无新增阶段0、序数／Point模拟或整边标记认同声明。以下为历史审计。

本轮新增ported-window-prefix-order.mjs及以下复核入口：

    node audit-ported-window-bound.mjs
    node audit-ported-window-bound-synthetic.mjs
    node audit-ported-window-birth-formulas.mjs
    node probe-ported-real-pairs.mjs

对应JSON保存窗口上界、直接外A菜单、定向语法保持、精确出生／分裂公式及较早真实类型对的有限判定。9456实际来源的186931对窗口均通过；171直接外A来源核513原生菜单，其中67来源另核201实际原C菜单。51份符合前提的人为来源核204条边；203份来源另核588非空前缀、15空前缀和6标准A启动菜单，共623份新窗口。280真实类型对的两种有限判定均成功，但不全是实际挡项，也不升级为全历史首次提升证明。旧22次语法尺寸停止保留；程序不模拟模型论、Gen、Point或证书L层。以下为历史审计。

本轮新增ported-bounded-predecessor-path.mjs、ported-completed-window-transport.mjs和audit-ported-completed-window-transport.mjs。运行：

    node audit-ported-completed-window-transport.mjs

输出ported-completed-window-transport-audit.json及ported-context-essential-example.json。17个传输实例、629条原生边、17次外A修复，最大335对象；50个成功输入重建1054步，205个正一般步骤核前一指标前缀条件；83个递归前缀另核1589步。显式核两份12步路径、任意复制构造的若干实例、从Z的入口及K₁不可达穿越式。程序只核有限原生语法，不替代§7.517—§7.524的证明，不迁移不相同路径的原C／Γ／反射审计。

probe-ported-earlier-templates.mjs、ported-earlier-template-probe.json保留2412模板有限调查；probe-ported-context-histories.mjs、ported-context-history-probe.json保留975来源的最后完整检查点及此前内存中止记录。计划上限未完成，不计未记录余段。clearCompletionCache只释放缓存，不改原补全。以下为历史审计。

本轮新增`ported-history-copy-lift.mjs`、`audit-ported-history-copy-lift.mjs`及`ported-history-copy-lift-audit.json`，给任意已知有限路径的复制构造；另有`ported-deep-history-blocker.json`、`audit-ported-deep-history-blocker.mjs`和`ported-deep-history-blocker-audit.json`，保存较深实际例的完整来源、精确替换和原C接续。运行：

    node audit-ported-history-copy-lift.mjs
    node audit-ported-deep-history-blocker.mjs

前者19例、951条原生重放边，核正外根指标、连续两次外根修复、特殊副本归一化及更深incoming窗口；后者363边、496菜单、658变化容器，最大1122项原C。明确65处阶段0，其中1处非空原包运输。全称有限证明及条件标记范围见§7.508—§7.516；不模拟序数、Gen、Point或证书L层。

`probe-ported-synthetic-blockers.mjs`与`ported-synthetic-blocker-search.json`保留6000候选的有界调查。先判定来源从Z[1]可达，再查实际切口；5861份来源通过，1206个实际提升均通过。调查记录witness=false、path=null，不能冒充完整路径；选中S†另取完整路径重放。没有因此宣布全历史良序或找到不可支付边。以下为历史审计记录。

最新新增`original-word-forest.mjs`、`word-original-transition.mjs`及三个入口`audit-original-word-forest.mjs`、`audit-word-original-transition.mjs`、`audit-word-frontier.mjs`和各自JSON。分别运行三个入口。主稿§7.401—§7.410给有限扇形／N₀全历史证明、Q来源与全部第一步以及准确未完成范围。`word-next-frontier-probe.json`仅为原生路径探索。

最新新增`original-bare-forest.mjs`、`audit-original-bare-forest.mjs`、`original-bare-forest-audit.json`，运行`node audit-original-bare-forest.mjs`。§7.393—§7.400给纸面闭包、P₁全历史结论及更早未闭合P₂的准确范围。审计核3576份状态、3528条边、124对相邻原C及P₂/U的明确模板；27次尺寸停止，无指标改选。`probe-n1-interfaces.mjs`与`n1-interfaces-probe.json`仅为探索，不承担标记结论。

最新新增`original-ancestor-components.mjs`、`audit-original-ancestor-components.mjs`、`original-ancestor-components-audit.json`，以及`original-mixed-return.mjs`、`audit-original-mixed-return.mjs`、`original-mixed-return-audit.json`。分别运行两份新审计，核原补全森林拼接及X的明确递归原补全模板。数学范围与来源修正在§7.385—§7.392；不把语法核验当作反射或序数证明。另保留`external-gamma-order-probe.mjs/json`的有限探索，未发现所筛选的外部Γ次序违例，不承担闭包结论。


最新新增`fan-stage-zero-boundary.mjs`、`audit-stage-zero-and-recursive-support.mjs`、`stage-zero-source-paths.json`与`stage-zero-and-recursive-support-audit.json`，对应§7.369—§7.375。阶段0明确启用，仍是原补入；新鲜原补全相等后才登记目标。29份来源、87份目标、53轮补像和6份递归整项裁剪均通过结构核验，未测试模型论。

最新新增`fan-original-special.mjs`、`audit-fan-original-special.mjs`及`fan-original-special-audit.json`，核§7.361—§7.366的Γ链缺槽配方、旧槽复用、定向支撑删除与新鲜原补全相等。2554个来源、3452份特殊目标、4749份末请求全both的一般目标；29份末请求rootOnly来源未处理。纸面证明与明确的整包域内性输入见对应新节；有限脚本不检验序数、Gen和证书层。

最新新增`audit-a-sparse-restriction-repair.mjs`及`a-sparse-restriction-repair.json`：核30份M[n][k]原补全模板、删行前后Γ和配对继承；有限诊断2594个状态。纸面条件构造及未完成全历史义务见§7.356—§7.360。本轮未用加强补入或阶段0。

最新新增route-one-diagnostic.mjs、search-route-one-schedule.mjs、audit-route-one-completed-cases.mjs及复核报告；另保存旧955项实例的逐步调度记录。数学结论及未完成义务见§7.307—§7.311，程序不计算序数或正确证书所属L层。

最新新增audit-f-exact-domain-branch-and-j.mjs及JSON：核§7.295—§7.297的F两指标配置升级、J实际来源、阶段0前件／旧Γ保持和新增非空rootOnly义务。另保存五项较早分支诊断脚本及报告，数学结论与搜索限制见§7.294、§7.298。

最新新增ancestor-double-components.mjs、audit-ancestor-double-components.mjs及JSON：核§7.287—§7.293的祖先第二端口闭包、持久局部表、五类实际后继、A₄到Y_(2,2)路径和独立FS逐步相等。全历史模型论证明见正文；有限审计的17次预算停止和零指标改选明确记录。

最新新增`audit-nonempty-row-boundary-return.mjs`及JSON，核§7.282—7.286的同一来源到达、阶段0新bare及所有旧Γ、全指标整列链公式和相邻完整Γ保持。

最新新增`audit-mixed-recursive-prefix.mjs`及`audit-retained-nonempty-row-family.mjs`，分别核§7.277的逻辑前缀模板与§7.278—7.280的实际来源和N_s[k]全指标公式的有限实例。模型论范围及未完成工作见§7.281。

本轮新增`audit-mixed-column-second-step.mjs`及`mixed-column-second-step-audit.json`，核(598)—(601)的有限实例、完整比较、相对首bare来边及未启动项整包前缀模板；模型论论证和完成范围见§7.270—7.275。

本次纠正新增audit-k-stage-one-family.mjs及k-stage-one-family-audit.json，核原K的非空proper整表配对和n=0,1,2,3,8,16的原生公式、完整表及全部请求。全指标仅阶段1的模型论证明见§7.127，程序不执行反射或判断Gen。旧v-family报告的K状态改为已支付；H对应仅背景、不计推进。

本轮新增`audit-v-family-and-flat-bridge.mjs`及`v-family-and-flat-bridge-audit.json`。核B、V各5个指标及X的0、1、2、3、8、16共6个指标样本；核V中三份同型附高和X中已有非空proper both的实际读者。另以独立BM4数值展开核3000个纯bare状态、11984条边，4个状态因深度／大小界未展开、8334个排队状态未处理；这个有界核验不证明全称恒等式或良序。K的来源路径、最后特殊展开实际Γ变化及8→9项的未处理边均逐项核验。B、V、X的全指标模型论由§7.121—7.123承担，H全部后代良序由§7.124的逐步对应和引用的BM4定理承担；程序不核Gen、真实序数或反射。大表Y=X[1]→Y[1]的173→344项仍另作未处理记录。

下方保留以前轮次的核验说明。

本轮临时采用H_E，新增`audit-e-assumed-two-index.mjs`及`e-assumed-two-index-audit.json`。运行前者，核36个(k,n)、30个(k,m)、5个W[n]样本的原生公式、完整表计数及全部请求；核W新增共同κ整表及V=W[1]→V[1]的56→146项具体边。结构调查有1500状态、5992边、10大小预算省略和3907未处理排队状态，明确不是完整搜索。模型论全称局部结论由§7.117—7.119的有限储备归纳承担，程序不检验Gen、反射或真实序数；完整良序仍未证明。

本轮优先E及之前，新增`audit-e-earlier-focus.mjs`及`e-earlier-focus-audit.json`。执行`node audit-e-earlier-focus.mjs`，核E→A→T→U原生路径和展开类型，D、T、U各六个指标样本的完整表与逐条扫描，以及E[2]的17项补全和新增非空proper读者。U的Γ比较使用完整虚拟记录，向上上界旧t及κ₀<g由纸面证明承担。全称局部下降见§7.111—7.114；未完成边见§7.115。程序不验证真实序数、Gen或模型论，不证明完整节点良序。

本轮新增`audit-hvfree-f-family.mjs`及`hvfree-f-family-audit.json`。执行`node audit-hvfree-f-family.mjs`，核F的六个有限指标样本、逐条父／Γ／proper扫描、F[n]零指标删除及X→W删除、W→W[1]的两份完整表。加入special／阶段方案适用性及源F到F[n]的旧项保留对应检查；逐项比较9个保留项中的6条实际Γ请求。相邻指标截断只记录为另一结构事实。所有n≥0均无旧保留项Γ变化，故全部无向上许可；§7.105—7.106的阶段方案证明仍撤回，语法核验不等于合规下降证明。局部条件计算及纠正见§7.104—7.110，程序不验证模型论。

本次新增：`audit-root254-family.mjs`／`root254-family-audit.json`核根254全指标固定框架；`audit-initial-allgen.mjs`／`initial-allgen-audit.json`逐项核六个初始图的字段角色、请求、Γ、proper事件及F[1]短目标；`audit-proper-targetonly-search.mjs`／`proper-targetonly-search.json`记录有界调查及128个预算省略。数学存在性、Gen和反射均由§7.98—7.102纸面论证承担，程序不验证它们。


本轮新增共享bare接口模块及四组审计。依次运行前三项，短分支调查可独立运行：

    node audit-root218-family.mjs
    node audit-root288-prefix-family.mjs
    node audit-root254-frontier.mjs
    node audit-short-open-interfaces.mjs

根218核24份输入、1056条外围请求、26条实际边界请求、三层整项折回与当前根193型原生外框架恒等式。零指标1126、指标1为28174项，均有独立局部补全；指标2的677326只报递归计数。一般n的接口与同一j供应由§7.93—7.95证明。

根288核固定78项前缀、七项／七请求完整列模板、无副本间读取、8份C及400条外围请求；n=0,1,2分别给1118、1174、1230项局部表。任意有限复制次数由模板的结构归纳证明，阶段1单一B₁供应及阶段2整项接回见§7.96。两组符号检查均无未知附高内部上界调用。根254报告只认证指定局部补全和实际读者，未认证完整标记下降。

short-open-interfaces-audit.json调查62个短来源，30个接口匹配、3个预算省略。匹配不等于新反例，已有targetOnly例不重新登记为未处理；重复Γ不违反当前第2级。所有程序均不验证Gen、反射、hull或真实序数，也不证明一般时序补全与候选认同。

下方保留以前轮次的审计说明；其中根218的旧未完成状态现由§7.93—7.95替代。

本轮新增四组程序及报告，按下列顺序运行；使用包内已有根151、根178定位及全1路径调查报告：

    node audit-root178-family.mjs
    node audit-root193-next-interface.mjs
    node audit-root193-family.mjs
    node audit-root218-open-interface.mjs

四项均已通过。根178核六份变量、140条局部固定请求、十二个实际跨界请求，以及根164型／根151型同步框架各自的实际端口、保留读者与原生组合恒等式；其后复用已证根151及根109外接口。根193核十二份变量、416条固定请求、二十四个实际跨界请求、共同Γ及十列前缀的两次整项接回，另核与根178原生外框架的精确组合。两组各有三次变量区间比较，均无未知附高上界调用；完整计数分别6N+156、12N+458。

根178、根193的零指标与指标1均作独立局部补全；根178指标2的6636仅为递归候选计数，未声称独立补全核验成功。根193定位报告保留生成时的未证明状态，当前条件结论见主稿§7.91。根218报告只核源图、零指标及实际proper读者，不把正指标尚未完成的标记证明归因于计算预算。所有程序均不验证反射、Gen、hull或真实序数；这些条件论证分别见§7.88—7.91，一般时序补全认同和完整良序仍开放。

下方为以前轮次的审计说明；旧“根178未处理”状态现由§7.88—7.90替代。

本轮新增四个复核程序及对应报告，先运行根137，再运行根151；后两项可独立运行：

    node audit-root137-family.mjs
    node audit-root151-synchronized-family.mjs
    node audit-frontier-family-survey.mjs
    node audit-root178-nested-port.mjs

根137程序核四份三bare列族、118条固定扫描及输出外接口；根151程序核六份变量、120条局部扫描、16份中间副本的32个实际外请求、602条外围扫描，特别核旧h、新η、v、w、t五个相关读者。共享符号引擎仅增加三bare首列参数，原根109默认接口已回归通过。模型论推导见§7.83—7.86；程序不检验反射、Gen、hull或序数真值。根178报告保存395步可达路径及具体共同Γ请求，调查程序的预算超限不作为数学反例。

以下为先前审计说明，其“剩余根137”状态已由§7.84替代。

本轮新增后接列段符号接口及指标2核验：`symbolic-column-suffixes.mjs`分别记录段起点和两个父端口；`root78-symbolic-frame.mjs`保留15项前缀全部请求。三份报告覆盖局部、外层及具体指标2，严格区分递归候选、独立小型补全与一般时序补全。依次运行并通过：

    node audit-root78-symbolic-frame.mjs
    node audit-root78-symbolic-context.mjs
    node audit-root78-index-two.mjs

新模型论归纳见§7.81，程序不求Gen、L层、hull或真实序数。§7.82记录根137的具体剩余边。以下审计说明为历史记录。

本轮新增根109局部／全图审计及符号接口审计。`substitution-view.mjs`表示精确有限替换；`root109-target-point-recipe.json`在旧P上保存1024处完整B₅替换，不物化全图。`symbolic-height-guards.mjs`及`root109-symbolic-frame.mjs`保存未知完整附高的约化、标准性、比较及端口义务；报告保存全部26个变量区间判定，遇到不能确定的比较则失败。原生递归样本只核公式抄写；全指标模型论归纳见§7.77，不由程序证明。

    node --expose-gc --max-old-space-size=4096 audit-root109-local.mjs
    node --expose-gc --max-old-space-size=4096 audit-root109-context.mjs
    node audit-root109-symbolic.mjs
    node --expose-gc --max-old-space-size=4096 audit-root109-symbolic-context.mjs
    node audit-root109-recursion.mjs

五项均已运行通过，前两项按顺序；符号全图同时核零指标分支。复核包含对应报告及下一根137原生边。以下保留此前审计说明，旧根109“仅临时记录”状态现由新小节替代。


本轮新增`audit-root94-local.mjs`、`audit-root94-context.mjs`及对应报告，核中部根的193项记录、十层整项接口、全部P内及全图外部请求。`root94-target-point-tagged.json`保存P候选，`root94-next-edge.json`保存下一根109的完整原生边。`audit-root109-frontier.mjs`区分真实截断、被删除虚拟项和整项虚拟变化，核148项供体的两个真实祖先接口及149项临时记录；报告为`root109-frontier-audit.json`。依次运行并通过：

    node --expose-gc --max-old-space-size=4096 audit-root94-local.mjs
    node --expose-gc --max-old-space-size=4096 audit-root94-context.mjs
    node audit-root109-frontier.mjs

根94局部程序另外核所有外端口位于相应临界列之前；前沿匹配保留真实／虚拟身份，不能用一个旧虚拟bare冒充已保留的真实截断项。程序不执行反射、Gen或序数模型。根109仅完成供体及临时记录的条件输入，未验证全图下降。旧报告保留其当时核验范围。

本轮新增`audit-root78-local.mjs`、`audit-root78-context.mjs`，分别核完整局部接回和432份P之外的全部请求；报告为`root78-local-audit.json`、`root78-context-audit.json`。局部目标及下一原生边保存在`root78-target-point-tagged.json`、`root78-next-edge.json`。另有`audit-root78-nested-supply.mjs`核原生递归抄写，`audit-root94-frontier.mjs`核下一中部根的固定前缀和局部裁剪。后两者不证明任意指标或根94的全图下降。四项均已运行通过：

    node --expose-gc --max-old-space-size=4096 audit-root78-local.mjs
    node --expose-gc --max-old-space-size=4096 audit-root78-context.mjs
    node audit-root78-nested-supply.mjs
    node audit-root94-frontier.mjs

前两项按顺序运行。模型论由主稿§7.65—7.67的条件推导承担；根78旧前沿报告只记当时局部范围，其未完成状态现由新证明替代。

本次新增`audit-real-cut-virtual-rebuild.mjs`及`real-cut-virtual-rebuild-audit.json`，核一真七虚／一真三虚、唯一真实截断、三个／两个完整祖先重建、旧Γ的其他读者和220／188项的全覆盖。原三个报告已明确标注逐虚拟项修复用途撤回；阶段1输入和有限位置记录保留。本次依次运行并通过：

    node audit-bare-item-upward.mjs
    node audit-stage-two-bare-supply.mjs
    node audit-moving45-local.mjs
    node audit-real-cut-virtual-rebuild.mjs

这些程序验证有限结构；当前条件证明的数学依据是§7.62—7.63，不把脚本通过当成Gen或反射的证明。以下审计说明按既有版本保留。

本轮新增根61、根93两组审计：`audit-moving61-local.mjs`、`audit-moving61-context.mjs`、`audit-bare93-local.mjs`、`audit-bare93-context.mjs`；每组先局部后全图，根93组读取根61的输出。报告为同名前缀的`*-audit.json`，完整局部目标保存于`moving61-target-H-tagged.json`、`moving61-target-point-tagged.json`和`bare93-target-point-tagged.json`。`moving61-next-edge.json`、`bare93-next-edge.json`保存后续原生式。

共享有限附高表示在`compact-heights.mjs`，`audit-compact-heights.mjs`与固定版本原比较器作有限差分复核，报告`compact-heights-audit.json`。全图审计建议用`node --expose-gc --max-old-space-size=4096`运行；每条候选请求由局部或外部分割覆盖，未整图物化数百万重复项。`candidate-replay.mjs`的默认行为不变，仅增加可选比较及上界回调。

`audit-root78-frontier.mjs`及`root78-frontier-audit.json`核下一根78的完整保标裁剪条件、15＋192项平接、两个实际外端口及独立补全一致；它不核该边全部外层，不宣称根78已完成全图下降。上述程序均不验证反射、Gen、真实序数模型或完整良序。

本轮新增`audit-moving74-local.mjs`、`audit-moving74-context.mjs`及`audit-moving61-frontier.mjs`。局部程序核16字段封闭块、七个外端口、有限接续样本、32份替换和五层实际读者；全图程序分割核432份P及全部7876条外部请求。分别输出`moving74-local-audit.json`、`moving74-context-audit.json`、`moving74-target-point-tagged.json`、`moving74-next-edge.json`及`moving61-frontier-audit.json`。运行前两项时先局部后外层，外层建议使用`node --expose-gc --max-old-space-size=4096 audit-moving74-context.mjs`；它不验证反射或Gen。下一边程序仅作定位，不宣称下降。

本轮另增`audit-moving45-local.mjs`、`audit-moving45-context.mjs`及共享有限扫描器`candidate-replay.mjs`；报告分别为`moving45-local-audit.json`和`moving45-context-audit.json`，局部目标记录保存在`moving45-target-point-tagged.json`，下一原生边保存在`moving45-next-edge.json`。前两项按顺序运行；所有模型论结论均由§7.44—7.48相对明列基础的纸面推导承担。

本轮新增`audit-tail-families.mjs`、`tail-families-audit.json`、`tail-family-x-body-tagged.json`及`tail-next-edge.json`。前者独立核两类各三个有限样本的组合全图扫描，另核X₁外层模块与独立补全一致、受影响的12处proper完整配对和真实末支的Γ／外部读者；后者记录下一边原生式。程序不验证§7.40—7.42的模型论、反射许可或Gen真值。

最新另增四个有限审计：`audit-bare-item-upward.mjs`核8个已有bare来源和220项Q₀；`audit-moving-root-target-interface.mjs`核S的局部目标及保留Γ读者；`audit-moving-root-outer-fold.mjs`核更外层三项、两层祖先和14条固定端口请求；`audit-moving-root-global-candidate.mjs`组合全图并重扫93412个请求。组合图通过不等于已证明一般虚拟补全语义或模型论真值。

最新增加三个有限检查：`audit-all-items-gen.mjs`核9763项的实际所在列及来源覆盖；`audit-moving-root-source.mjs`核下一来源Y的完整补全、B₃终端及根读者；`audit-moving-root-table.mjs`检查受限直接裁剪并记录具体失败列。后两者未完成目标T的虚拟图，三个程序都不验证Gen或反射引理的真值。

运行：

    node audit-single-j-four-nodes.mjs

包内包含固定版本原生内核、此前来源和删除映射、新审计及本稿。新审计检查：

- 四目标的严格原生次序和20步路径；
- 四个全指标公式的20个有限抄写检查样本；
- 四节点的指定补全重扫，特别是 E 的两个 targetOnly 终端；
- 末端 P 的248项、92列、226请求，两个外端口，源字段与高端 z_* 的位置；
- 既有374步来源的重放。

程序**不计算真实序数、L 层、初等嵌入、hull 或良序性**。本稿第3—7节为有明列基础依赖的纸面论证；其中第5节仅保留已禁止用于供应项标的历史计算。程序不判断新反射规则的数学许可。`audit-owner-retargeting.mjs` 核实17条首 bare 链、最后一组的三条边、仅一份 owner 请求需要替换，以及四组小附高的第二端口；`audit-downward-item-supply.mjs` 核实真实项 t、父／Γ、终端配对和边界附高位置，并补核高项只有一处 proper bare 配对、没有同列后项、低列两个虚拟项无父，以及完整 P 最后列的首 bare B₁ 请求。§4.1与§7.5—7.12仍是纸面论证；新审计不验证规范域恒等式、小结构闭包或新 D4。该脚本现另核其余三组的虚拟高端项、父／Γ、无同列后项及其与固定边界的区别。

参考背景：

`audit-ancestor-item-fold.mjs`检查385字段来源、三种完整目标模式、有限前缀、全部外部读者和未替换字段的位置界；现另核共用Γ的两目标具有同一3字段前缀。它不验证§7.20的无限供应族、模型论证明或反射许可。本轮另核三种附高均不读取外项标签、各固定外端口位于临界列之前；纸面状态已按§7.24—7.26更新，程序不验证Gen证书编码、Hull传递性或反射论证。旧自适应Gen用法的撤回记录保留。`audit-moving-root-port.mjs`仅核Y、T的原生语法、可达步数及第二bare父列身份，不验证完整虚拟补全或下降。

- Andrew Marks, *Set Theory*, §§18–21：集合结构满意度、绝对性、构造层及小集合 Löwenheim–Skolem／塌缩的背景。https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
- Victoria Gitman, Joel David Hamkins, Thomas A. Johnstone, *What is the theory ZFC without power set?*, §1：无幂集时收集的必要性。https://victoriagitman.github.io/files/ZFC-.pdf

这些材料不证明本文的 BTBMS 供应命题；该命题的具体推导及限制已在上文展开。

<!-- END SOURCE TEXT -->
