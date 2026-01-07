# 功能需求文档（FRD）：annotated.help 页面功能规划（广告站）
> 版本：v1.0  
> 域名：annotated.help  
> 目标：用“可复制/可筛选/可翻页/可搜索”的页面功能，提高 CTR、停留、PV/Session，并避免制造 SEO 重复索引垃圾页  
> 注意：本文只定义“要做什么、做到什么程度、验收标准是什么”，不包含开发实现教程

---

## 0. 产品目标与原则

### 0.1 核心目标（按优先级）
1) **让用户快速拿到可交作业的内容**（Copy-Paste）
2) **让用户继续看更多例子**（Pagination / Related / Next）
3) **让用户更快找到对应格式与来源类型**（Tabs / Filters / Search）
4) **广告变现不破坏体验与 CWV**（Ad rules）

### 0.2 设计原则（功能层面）
- **首屏即价值**：不允许首屏只有解释，没有例子
- **每次交互都要拉长 Session**：复制、切换、筛选、翻页都应该把用户留在站内
- **功能可用但不产生索引污染**：筛选/搜索结果页默认 noindex + canonical 策略
- **可规模化扩展**：例子数据结构化，能批量生成页面/分页

---

## 1. 页面类型与功能矩阵

| 页面类型 | 核心任务 | 必做功能 | 可选增强 |
|---|---|---|---|
| Pillar（总入口） | 引导到正确格式/类型；提供3个示例 | 格式切换入口、来源类型入口、复制、FAQ、Related | 站内搜索、筛选（不索引） |
| Format Hub（MLA/APA/Chicago） | 抢长尾；承接类型页内链 | 示例列表、复制、类型入口卡片、FAQ、Mistakes | 同页筛选（annotation type）、分页 |
| Source Type（如 MLA/website） | 吃长尾；拉 PV/Session | 示例列表、复制、分页、模板、面包屑 | 同页筛选、同格式“下一页类型”导航 |
| 复数页（examples） | 承接泛流量；做目录 | 分类目录（format/type）+ 热门示例 | 站内搜索 |
| 站内搜索页 | 快速定位 | 搜索框+结果列表 | 高级筛选（仍 noindex） |

---

## 2. 全站通用功能（Global）

### 2.1 顶部导航（Header）
**必须包含：**
- Logo（链接首页或 Pillar）
- 格式入口：MLA / APA 7 / Chicago（至少 3 个）
- Search 输入框（站内搜索）
- “Examples”目录入口（指向 `/annotated-bibliography-examples/`）

**验收标准：**
- 任何页面 2 次点击内能到 MLA Hub
- 移动端导航可展开，不遮挡正文

---

### 2.2 面包屑（Breadcrumb）
**规则：**
- Pillar：Home → Annotated Bibliography Example
- Format Hub：Home → Annotated Bibliography Example → MLA
- Type 页：Home → ... → MLA → Website

**验收标准：**
- 面包屑可点击回到上一级
- Schema 输出 BreadcrumbList（SEO 文档已要求）

---

### 2.3 站内搜索（Site Search）
**功能：**
- 输入关键词，返回匹配的页面或例子（优先页面）
- 支持按 format/type 的基础过滤（可选）

**SEO 规则：**
- 搜索结果页：`noindex,follow`
- 不允许搜索结果被 sitemap 收录

**验收标准：**
- 搜索 `MLA website` 可返回 MLA website type 页
- 无论搜索词是什么，都不会生成可索引的“无限组合 URL”

---

### 2.4 广告位系统（Ads）
**原则：**
- 不干扰核心内容（citation/annotation/copy）
- 不造成明显 CLS

**建议广告位（定义而非实现）：**
- 顶部横幅（首屏最多 1 个）
- In-content：每 2–3 个例子插 1 个（可配置）
- 侧边栏（桌面端）

**验收标准：**
- Copy 按钮区域不被广告遮挡
- 移动端无全屏插屏
- 布局稳定（广告容器预留高度）

---

## 3. 核心内容模块：Example Card（例子卡片）

### 3.1 例子卡片结构（必须字段）
每个 Example Card 必须包含：
- `Citation`（可复制）
- `Annotation`（150–200 words，可复制）
- 标签：
  - `Format`（MLA / APA 7 / Chicago）
  - `Source type`（Book / Website / Journal…）
  - `Annotation type`（Summary / Evaluation / Reflection）

### 3.2 Copy 功能（核心）
**按钮：**
- Copy citation
- Copy annotation
- Copy full (citation + annotation)

**交互要求：**
- 点击后显示短提示：`Copied!`
- 失败提示：`Copy failed — select & copy manually`

**验收标准：**
- 桌面/移动端均可复制
- 复制内容不包含多余 UI 文案（比如“Copied!”不应被复制）

---

## 4. Pillar 页功能规划（/annotated-bibliography-example/）

### 4.1 Above the fold（首屏）
**必须包含：**
- 3 个精选 Example Cards（journal/book/website）
- Format Switch（入口按钮/Tab 形式均可）
- Source Type shortcuts（入口按钮）

**验收标准：**
- 首屏无需滚动即可看到至少 1 个完整可复制例子
- 2 次点击内进入任何一个 Format Hub

### 4.2 FAQ 模块
**功能：**
- 折叠/展开（Accordion）
- 每条 FAQ 有独立锚点（可选）

**SEO：**
- 页面实际展示 FAQ 才输出 FAQPage schema

**验收标准：**
- FAQ 可展开，内容不为空
- 展示与 schema 一致

---

## 5. Format Hub 功能规划（/mla/ /apa-7/ /chicago/）

### 5.1 示例列表（必做）
- 默认展示 5–10 条精选例子
- 每条可复制（三按钮）
- “More by source type”入口卡片（指向 type 页）

**验收标准：**
- 进入 MLA Hub 用户 1 屏内能复制到东西
- 能清晰跳到 website/book/journal 等类型页

### 5.2 同页筛选（可选但推荐）
**筛选项：**
- Source type（website/book/journal…）
- Annotation type（summary/evaluation/reflection）

**SEO 规则：**
- 筛选产生的 URL（若用 query）必须 canonical 回 hub 主路径，并建议 `noindex,follow`

**验收标准：**
- 筛选能即时更新列表
- 刷新页面不会让筛选页变成可索引“垃圾新页面”

---

## 6. Source Type 页功能规划（/mla/website/ 等）

### 6.1 示例分页（必做）
**分页规则：**
- 路径分页：`/page/2/`
- 每页 8 条（默认）
- 顶部 + 底部分页导航
- 支持 Prev/Next

**验收标准：**
- page/2 可访问且有独立 title（含 Page 2）
- 分页页可索引，并包含在 sitemap（SEO 文档要求）

### 6.2 Quick template（必做）
**功能：**
- 展示 1–2 段可复制的 annotation 框架句式
- 提供 Copy template 按钮（可选）

**验收标准：**
- 模板文本可直接复制使用
- 与该页面的 format/type 强相关

### 6.3 “Next / Related”导航（必做）
**模块：**
- Next source type（同格式下推荐下一个类型页）
- Related format（指向 APA/Chicago 对应类型或 hub）

**验收标准：**
- 每页至少提供 6 个内部跳转入口
- 至少包含：父级 hub + pillar + 相邻类型页

---

## 7. Examples 目录页功能规划（/annotated-bibliography-examples/）

### 7.1 目录导航（必做）
- 按 Format 分区（MLA / APA 7 / Chicago）
- 每个 Format 下列出主要 Source Types（website/book/journal…）
- 展示热门页（Top pages）列表（可选）

**验收标准：**
- 目录页能作为“站点地图”的人类可读版
- 任何 hub/type 页在目录中可达（不要求全部，至少覆盖上线范围）

---

## 8. 分享与复制增强（可选但建议）

### 8.1 复制后浮层（可选）
- 复制成功后，展示小浮层：`Copied — See more examples`
- 提供跳转到下一页/相关页按钮

**验收标准：**
- 不阻塞用户继续复制
- 可关闭

### 8.2 深链接（可选）
- 每个 Example Card 可生成锚点链接 `#example-12`
- 便于社媒/同学分享“某一个例子”

**验收标准：**
- 锚点跳转准确，不会被广告盖住内容（需要 offset 处理）

---

## 9. 数据与事件埋点（用于广告站优化）
> 不限定实现平台，只定义要采集什么事件

### 9.1 必采事件
- `copy_citation`
- `copy_annotation`
- `copy_full`
- `filter_applied`（如有筛选）
- `pagination_next` / `pagination_prev`
- `search_submitted`
- `search_result_click`
- `ad_view`（如广告平台支持）

### 9.2 验收标准
- 每种事件能在日志/分析平台看到
- 事件包含页面类型信息（pillar/hub/type）

---

## 10. 内容数据模型（便于规模化）
> 用于约束“例子”可被程序化生成与分页

### 10.1 Example 数据字段（建议）
- id（唯一）
- format（mla/apa7/chicago）
- source_type（website/book/journal/video/news/research-paper）
- annotation_type（summary/evaluation/reflection）
- citation_text（string）
- annotation_text（string）
- topic_tag（可选：psychology/education/health…用于多样性）
- created_at / updated_at（可选）

### 10.2 验收标准
- 每个页面例子可按字段筛选/分页
- 同页例子不近重复（topic_tag 多样性可辅助）

---

## 11. Phase 1 功能交付清单（上线必备）

### 11.1 必做（没有就不算上线）
- Example Card（三复制按钮 + 标签）
- Pillar 首屏 3 例子 + format/type 入口
- MLA Hub 首屏 5 例子 + type 入口卡片
- MLA 三个 Type 页 + 分页（至少 page/1 可用，建议同时做 page/2 以验证）
- Chicago Hub（简版也要有可复制例子）
- Header 导航 + 站内搜索（搜索页 noindex）
- 面包屑
- 广告位基本规则（至少不遮挡、不插屏、不抖动）

### 11.2 可选增强（后续迭代）
- Hub 同页筛选（noindex 参数页）
- Example 锚点分享
- Copy 后浮层推荐跳转
- 目录页热门排序

---

## 12. 验收 Checklist（功能版）
1) 每页首屏可复制（Pillar≥3，Hub≥5，Type≥6）  
2) Copy 三按钮在移动端可用且复制内容干净  
3) Type 页分页 `/page/2/` 工作正常，title 含 Page 2  
4) Header Search 可用，搜索结果页 noindex  
5) 筛选（如有）不会产生可索引垃圾 URL（canonical+noindex）  
6) 广告不遮挡 copy 区域，移动端无插屏，布局稳定  
7) 内部导航完整：面包屑 + related/next 能推动继续浏览  

---