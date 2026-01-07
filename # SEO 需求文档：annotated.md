# SEO 需求文档：annotated.help（广告站）
> 版本：v1.0  
> 站点域名：annotated.help  
> 目标地区/语言：US / English  
> 站点类型：Content + Display Ads（广告站）  
> 本文用途：交付给 Claude Code 作为实现与验收的唯一依据（不包含开发教程）

---

## 0. 背景与目标

### 0.1 背景
“annotated bibliography example(s)”属于典型学生作业刚需词，需求明确、长尾丰富、常年稳定。但 SERP 往往出现 AI Overview / People Also Ask 等分流模块，必须通过“可复制/可下载/可筛选”的内容形态抢回点击与停留。

### 0.2 目标
- 获取 US 英文自然流量，覆盖 **annotated bibliography example(s)** 及 MLA/APA/Chicago 等格式长尾。
- 以广告变现为核心：提升 PV/Session、停留时间、页面深度，保证 Core Web Vitals 不被广告拖垮。
- 建立可规模化页面体系（可扩展到 100+ 页）。

### 0.3 非目标
- 不做登录/订阅/付费。
- 不做复杂用户账户系统。
- 不追求“讲课型长文”，内容以“交作业可用”为第一优先级。

---

## 1. KPI 与成功标准（SEO + 广告站）

### 1.1 SEO KPI
- 60 天内：核心集群页面 90%+ 被索引
- 90 天内：MLA 集群（低 KD）获得稳定长尾自然流量
- 120 天内：Pillar 页开始获得主词 impressions 与 clicks（不要求立刻 top3）

### 1.2 广告站 KPI（行为指标）
- PV/Session ≥ 2.2
- 平均停留 ≥ 55s
- Copy CTA 点击率 ≥ 8%
- 站内搜索/筛选使用率 ≥ 5%

---

## 2. 站点定位与信息架构（IA）

### 2.1 站点定位（一句话）
**annotated.help = Copy-paste annotated bibliography examples by format (MLA / APA 7 / Chicago)**

### 2.2 核心承诺（首页/Meta/首屏可见）
- Copy-paste examples
- Correct format
- Multiple source types
- Fast

---

## 3. URL 结构与命名规则（固定）

### 3.1 三层结构（Pillar → Format Hub → Source Type）

#### Pillar（总入口）
- `/annotated-bibliography-example/`
- `/annotated-bibliography-examples/`

#### Format Hub（格式专题）
- `/annotated-bibliography-example/mla/`
- `/annotated-bibliography-example/apa-7/`
- `/annotated-bibliography-example/chicago/`
- `/annotated-bibliography-example/turabian/`
- `/annotated-bibliography-example/asa/`

#### Source Type（来源类型页，挂在 Format 下）
示例：
- `/annotated-bibliography-example/mla/journal-article/`
- `/annotated-bibliography-example/mla/book/`
- `/annotated-bibliography-example/mla/website/`
- `/annotated-bibliography-example/apa-7/journal-article/`
- `/annotated-bibliography-example/chicago/book/`

### 3.2 URL 命名规则（必须）
- 全小写，连字符 `-`
- 目录层级 ≤ 3
- 不允许同义重复页（例如 `/mla-format/` 与 `/mla/` 若无明确差异，禁止两者同时上线）
- 不用 query 参数创建“可索引页面”（筛选可用 query，但必须 canonical 回主路径 + noindex）

---

## 4. 页面类型与模板要求（SEO 核心）

> **原则**：不要做“讲课文章”，要做“作业交付工具箱”。  
> **核心交互**：Copy（复制）/ Tabs（格式切换）/ Pagination（更多例子翻页）/ Type（来源类型入口）

### 4.1 Pillar 模板：`/annotated-bibliography-example/`
**目的**：覆盖主词 + 承接全站内链 + 总导航枢纽

#### 必须包含模块（顺序固定）
1) **H1**：Annotated Bibliography Example (MLA, APA 7, Chicago)
2) **首屏 3 个可复制示例**（Journal / Book / Website 各 1）
   - 每个示例必须包含：
     - Citation（格式正确）
     - Annotation（150–200 words）
     - Copy buttons：`Copy citation` / `Copy annotation` / `Copy full`
3) **格式切换导航**（MLA / APA 7 / Chicago / Turabian / ASA）
4) **来源类型导航**（Journal Article / Book / Website / Video / News / Research Paper）
5) **Annotation template**（Summary / Evaluation / Reflection 三框架，简短可复制）
6) **Common mistakes**（≤8 条）
7) **FAQ**（≥6 个，覆盖 PAA 风格问法）
8) **Related pages**（≥12 个内部链接入口）

#### 内容原则
- 解释型内容控制在 150–250 词以内，不讲历史课。
- “例子”必须原创、可用、格式准确。

---

### 4.2 Format Hub 模板：以 `/annotated-bibliography-example/mla/` 为例
**目的**：抢低 KD 长尾，作为集群权重中心

#### 必须包含
1) **H1**：MLA Annotated Bibliography Example
2) **首屏至少 5 个可复制例子**
   - 覆盖 ≥3 种 source type（journal/book/website…）
   - 每个例子必须标注：
     - Source type
     - Annotation type（summary/evaluation/reflection）
3) **MLA quick rules**（≤5 条）
4) **Source type cards**（指向各类型页）
5) **FAQ**（格式相关）
6) **Common mistakes (MLA)**（精简）
7) **Cross links**：指向 APA 7 / Chicago hub

#### 特别要求
- MLA Hub 是 Phase 1 第一优先级页面，必须先上线并可扩展。

---

### 4.3 Source Type 模板：以 `/.../mla/journal-article/` 为例
**目的**：规模化吃长尾，提高 PV/Session

#### 必须包含
1) **H1**：MLA Annotated Bibliography Example for Journal Articles
2) **首屏至少 6 个例子（推荐 8）**
3) 每个例子必须包含：
   - Citation
   - Annotation（150–200 words）
   - Source type 标签
   - Annotation type 标签
   - Copy buttons（citation/annotation/full）
4) **Quick template**（可复制句式框架）
5) **More examples 分页**（见第 7 节）
6) **内部链接**：
   - 返回 MLA hub
   - 指向 Pillar
   - 指向相邻 Source Type 页（例如 book / website）

---

## 5. 关键词策略（上线优先级）

### 5.1 Phase 1（先甜后硬）
先用 **MLA 低 KD 长尾** 起量 → 通过内链推 Pillar 与后续 APA：

- `mla annotated bibliography example`
- `mla format annotated bibliography example`
- `example of annotated bibliography mla`
- `mla annotated bibliography example pdf`
- 同步上线 Chicago hub（低 KD 小甜点）

### 5.2 Phase 2
- APA 7 hub + 类型页（从 `annotated bibliography example apa 7` 这类相对容易入口切）
- Source type 扩容 + 分页（把每个类型页扩到 30+ 例子）

### 5.3 Phase 3
- Turabian / ASA / NHD 等小众入口页与季节性专题

---

## 6. SEO 元数据规范（必须严格）

### 6.1 Title 规则（必须唯一）
- 主关键词靠前
- 建议 50–60 字符
- 统一品牌尾缀：`| annotated.help`

**Title 模板示例：**
- Pillar：`Annotated Bibliography Example (MLA, APA 7 & Chicago) | annotated.help`
- 复数页：`Annotated Bibliography Examples (Copy & Paste) | annotated.help`
- MLA Hub：`MLA Annotated Bibliography Example (Copy-Paste Samples) | annotated.help`
- Type 页：`MLA Annotated Bibliography Example for Journal Articles | annotated.help`

### 6.2 Meta Description 规则
- 140–160 字符
- 必须包含：format + “copy/paste” + “examples”
- 禁止绝对承诺（如 professor-approved / guaranteed A+）

**示例：**
`Copy & paste annotated bibliography examples in MLA, APA 7, and Chicago. Journal, book, website samples + quick annotation templates.`

### 6.3 H1/H2 规则
- 每页仅 1 个 H1
- H2 用于模块：Examples / Template / Mistakes / FAQ / More examples

### 6.4 Canonical 规则（非常关键）
- **分页页** canonical 指向**自身分页 URL**（不要都指向第一页）
- **筛选参数页**（例如 `?source=website&type=summary`）canonical 指向无参数主路径页，并建议 `noindex,follow`
- 避免重复：`/example/` vs `/examples/` 必须内容与意图明确区分，且不互相 canonical 冲突

---

## 7. 分页、筛选与索引策略（规模化但不作死）

### 7.1 分页规则（用于 Source Type 页）
- URL：`/annotated-bibliography-example/mla/journal-article/page/2/`（推荐路径分页）
- 每页例子数：6–10（默认 8）
- 顶部 + 底部都要分页导航
- 分页页 Title 必须包含 `Page 2/3...`
- 分页页允许索引（这是广告站 PV 的核心）

### 7.2 站内筛选（可用但不制造重复索引）
- 页面内筛选允许用 query 实现（source type / annotation type）
- 所有参数页：
  - 建议 `noindex,follow`
  - canonical 回无参数主路径页

### 7.3 站内搜索
- 顶部提供搜索框（按 format/type/keyword 搜索例子）
- 搜索结果页默认 `noindex,follow`

---

## 8. 结构化数据（Schema）需求

每个页面必须输出 JSON-LD：

### 8.1 全站
- `WebSite` + `SearchAction`（站内搜索）
- `BreadcrumbList`（面包屑）

### 8.2 内容页
- `Article` 或 `WebPage`（统一一种即可）
- 如页面确实展示 FAQ 模块，则额外输出 `FAQPage`

> 注意：不要滥用 schema；FAQPage 只能在页面真实展示 FAQ 时使用。

---

## 9. 内部链接策略（像地铁线路一样，别像面条）

### 9.1 必须的链接关系
- 所有 Source Type 页 → 指向对应 Format Hub（父级）
- 所有 Format Hub → 指向 Pillar（总入口）
- Pillar → 链接所有 Format Hub + Top Source Types
- 每页至少 8 个内部链接（不含 header/footer 的固定链接）

### 9.2 锚文本规则
- 自然包含关键词变体：
  - `MLA annotated bibliography example`
  - `APA 7 annotated bibliography examples`
  - `Chicago style annotated bibliography example`
- 禁止统一使用 “click here”

---

## 10. 内容生成与质量门槛（广告站也要像“靠谱”）

### 10.1 Example 内容要求（每个例子）
每个例子必须包含：
- Citation（按对应格式严格正确）
- Annotation（150–200 words）
- Annotation 至少包含两种要素组合（例如 summary + evaluation / summary + reflection）
- 文本自然，不出现 “as an AI language model”

### 10.2 真实性与版权
- 不可复制粘贴其他站点的现成例子
- 可以使用虚构题名/作者规避版权，但引用格式必须真实规范
- 若使用真实书/文章信息，citation 必须避免明显错误（否则影响口碑与停留）

---

## 11. 广告位与体验约束（SEO 友好优先）

### 11.1 广告位原则
- 首屏不允许超过 1 个大型广告位
- 例子块之间可插入广告，但必须：
  - 不打断 Copy 按钮区域
  - 不遮挡 citation/annotation
- 移动端禁止全屏插屏式广告（除非法律合规提示）

### 11.2 CWV 底线（约束项）
- 避免显著 CLS（广告容器需预留高度/稳定布局）
- 首屏内容优先加载，避免广告抢主线程导致 LCP 变差

---

## 12. 技术 SEO 必须项

- 自动生成并更新：
  - `sitemap.xml`（包含分页页）
  - `robots.txt`
- 404 与 301：
  - slug 变更必须 301
  - 禁止软 404（内容过薄的页不要上线）
- 面包屑导航全站一致
- 站内搜索页默认 noindex
- 避免无限参数组合导致爬虫陷阱（参数页 noindex + canonical）

---

## 13. 上线节奏（强制优先级）

### Phase 1（必须先有）
- Pillar 1 页：`/annotated-bibliography-example/`
- Pillar（复数）1 页：`/annotated-bibliography-examples/`
- MLA Hub：`/annotated-bibliography-example/mla/`
- MLA Type 三页：
  - `/annotated-bibliography-example/mla/journal-article/`
  - `/annotated-bibliography-example/mla/book/`
  - `/annotated-bibliography-example/mla/website/`
- Chicago Hub（可简版）：`/annotated-bibliography-example/chicago/`
- 基础 SEO：sitemap/robots/canonical/breadcrumb/schema

### Phase 2
- APA 7 Hub + 三个 Source Type
- 分页系统（Type 页可扩到 30+ 例子）
- FAQ 扩展

### Phase 3
- Turabian/ASA/NHD 等小众入口页
- Tag 页（若必要且数量严格受控）

---

## 14. 验收清单（上线必过）

每个上线页面必须满足：
1) URL 符合结构与规则；无重复同义页  
2) Title/Description/H1 唯一且含目标关键词  
3) 首屏例子数量达标：
   - Pillar ≥ 3
   - Hub ≥ 5
   - Type ≥ 6（推荐 8）  
4) Copy 三按钮可用：citation / annotation / full block  
5) canonical 策略正确：
   - 分页自 canonical
   - 参数页 canonical 回主路径 + noindex,follow  
6) BreadcrumbList 输出正确；FAQ 展示才输出 FAQPage schema  
7) 内链数量达标（≥8），且包含：父级 hub、pillar、相邻页  
8) 移动端不被广告遮挡主要内容  
9) `sitemap.xml` 含所有可索引页面（含分页）  

---

## 15. Phase 1 必须交付页面清单（annotated.help 首发）

- `/annotated-bibliography-example/`
- `/annotated-bibliography-examples/`
- `/annotated-bibliography-example/mla/`
- `/annotated-bibliography-example/mla/journal-article/`
- `/annotated-bibliography-example/mla/book/`
- `/annotated-bibliography-example/mla/website/`
- `/annotated-bibliography-example/chicago/`

---

## 16. 风险与对策（必须承认现实）
- AI Overview 吞点击：用可复制块/模板/筛选/分页抢回访问理由  
- 内容质量太薄导致软 404：严格执行例子数量门槛 + 独特性  
- 重复页/参数页泛滥：canonical + noindex 强约束  
- 广告导致 CLS：预留广告高度 + 不遮挡核心内容  

---

## 17. 附：给 Claude 的内容生成硬约束（强制执行）
- 每条 annotation：150–200 words，英文自然，不要 AI 口吻  
- 每条至少包含 2 种要素：summary + evaluation / summary + reflection  
- Citation 必须严格符合对应格式（MLA/APA/Chicago 分开）  
- 禁止绝对承诺与夸张词：professor-approved / guaranteed A+ 等  
- 不抄任何现成例子文本  
- 同页例子之间必须明显不同（题材/观点/结构/措辞）避免近重复  

---