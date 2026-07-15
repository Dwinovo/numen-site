# numen-site

本项目是 **Numen 生态**的产品页面（官网 / Landing Page）。

## Numen 生态

Numen 是一个围绕 Minecraft 与 AI 的开源生态，包含以下仓库：

| 仓库 | 地址 |
|------|------|
| minecraft-numen | https://github.com/Dwinovo/minecraft-numen |
| numen-maven | https://github.com/Dwinovo/numen-maven |
| numen-qq-mcp | https://github.com/Dwinovo/numen-qq-mcp |
| numen-api | https://github.com/Dwinovo/numen-api |

## 本仓库的目标

为上述 Numen 生态制作一个统一的产品展示页。具体的设计与实现由用户逐步详细指导，开发过程中遵循用户的指示推进。

## 页面结构决策

- **设计语言：活泼的粗新野主义（Neubrutalism）v1**（用户拍板，全站含首页）。令牌：米白底 `#fef9ed`、墨黑 `#171310`（文字/边框/硬阴影）；实体件 = 3px ink 边框 + `5px 5px 0` 硬阴影（零模糊）+ 10px 圆角；hover 抬起 `translate(-2px,-2px)` 阴影 7px、active 按下 `translate(2px,2px)` 阴影 2px；活泼色板：草绿 `#86c15c`（主）、橙 `#f5a623`、湖蓝 `#5bb8e8`、樱粉 `#f39fc5`（贴纸/chip/划线高亮，一处最多两彩）；贴纸可 ±2° 微旋转；禁止渐变/模糊阴影/玻璃拟态。大面积暗色废弃（用户不喜欢暗）。图片一律装粗边框相框。动效编排骨架（pin/scrub/充能曲线）在改版中保留。
- **Addons 页**：4 列 × 3 行卡片网格（每页 12），类型筛选 + 分页 + 点击卡片弹详情层（详情含多链接：GitHub / CurseForge / Modrinth 等，数据在 `entries[].links` 数组）。文案不带状态标签。
- **愿景区文案纪律**：只讲愿景——不点名具体 App、不举任务例子、不带"已接入/蓝图"状态，避免网页跟着产品进度更新。

- **首页只讲愿景**：不逐个介绍四个仓库/模组。首页现有区块：首屏 NUMEN → 宣言（破笼）→ 对话演示 → 实录过场 → 数字 → 扩展愿景 + 页脚。
- 四个仓库的详细展示放在**后续的 addons 页面**；`src/components/Ecosystem.astro`（编辑部式仓库索引 + hover 实录预览）已做好，保留待 addons 页复用。
- 页脚不做整页背景色渐变（体感突兀），页脚自带深色背景作为实体块推入。

## 附属共建：GitHub PR 模式（重大决策，2026-07-14）

**站点退化为纯静态,附属目录改由 GitHub PR 社区共建。** 动机:国内运营「登录 + 用户自助上传 + 即时上线」的 UGC 交互平台合规负担极重(实名、内容审核留存、可能需 ICP 经营许可 + 公安联网备案),个人主体是灰色地带。改成 PR 模式后,发布动作发生在 GitHub、审核发生在维护者点 Merge 的那一刻,站点退回成「只展示已审核内容的发布者」,把最重的义务甩掉;同时这正是本项目「只做索引、不存内容本体」初衷的最纯粹实现。

- **数据源**:`src/content/addons/*.json`(Astro 内容集合,一文件一条附属,PR 合并零冲突)。schema 写死在 `src/content.config.ts`,格式错的投稿连 `astro build` 都过不了,CI(`.github/workflows/validate.yml`)在合并前拦下。
- **协作流程**:Fork → 加/改一个 json → PR →(CI 校验 + 维护者 review)→ Merge → EdgeOne Pages 自动构建部署。投稿门槛=会 GitHub PR,恰好筛出开发者受众。见 `CONTRIBUTING.md`、`.github/PULL_REQUEST_TEMPLATE.md`。
- **已砍掉的动态栈**:登录(better-auth/GitHub OAuth)、数据库(D1/SQLite/Drizzle)、所有 `/api/*`、`login`/`me`/`submit`/`u/[id]` 页、点赞/评论。连带砍掉源站保护那整套(回源鉴权/自签证书/防火墙白名单)——没有动态源站要藏了。
- addons 详情弹窗:数据构建期内联进页面(`data-addons` script),点卡片本地取用,不请求;`/a/[id]` 另生成静态详情页供直链/无 JS/SEO。

## 技术栈（已确定）

- **框架**：Astro **纯静态**(`output: 'static'`,全站预渲染,无 adapter、无服务端、无数据库)
- **样式**：Tailwind CSS v4
- **动效**：GSAP + ScrollTrigger（滚动运镜）、Lenis（平滑滚动）、Three.js（按需，3D 场景）——均懒加载，首屏保持轻量
- **数据**：Astro 内容集合(`src/content/addons/*.json`),zod schema 校验
- **部署**：**EdgeOne Pages**(连 GitHub 仓库,`npm run build` → `dist/`,merge 到 main 自动构建部署,由 EdgeOne CDN 分发)。旧的腾讯轻量 + Nginx + Node 源站在迁移完成后可退役。
- 注：Cloudflare 已于 2026 年 1 月收购 Astro，两者为同一生态

## 素材

- `raw-assets/minecraft/` 存放收集的 Minecraft 高清参考图（Mojang 官方壁纸，2560x1440），来源与版权记录见其中 `SOURCES.md`
- 使用 Mojang 官方素材需遵守其使用指南（https://www.minecraft.net/en-us/usage-guidelines）：站点需加 "Not an official Minecraft product" 免责声明，不得暗示官方关联

## 部署与访问

- 已上线 **https://numen.dwinovo.cn**(根域 dwinovo.cn 已备案,子域名同备案覆盖)。
- **目标形态:EdgeOne Pages** —— 连 GitHub 仓库,`npm run build` 出 `dist/` 纯静态,merge 到 main 自动构建部署,由 EdgeOne CDN(境内可用区)分发。纯静态后无源站可打,DDoS 面几乎归零。
- 迁移完成后,旧的「腾讯轻量 + Nginx + Node + 回源鉴权 + 自签证书 + 防火墙白名单」整套源站可退役。
- 大陆访问策略：所有资源自托管（字体/图标/JS），不引用大陆不稳定的第三方 CDN。

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
