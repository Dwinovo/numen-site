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

- **首页只讲愿景**：不逐个介绍四个仓库/模组。首页现有区块：首屏 NUMEN → 宣言（破笼）→ 对话演示 → 实录过场 → 数字 → 扩展愿景 + 页脚。
- 四个仓库的详细展示放在**后续的 addons 页面**；`src/components/Ecosystem.astro`（编辑部式仓库索引 + hover 实录预览）已做好，保留待 addons 页复用。
- 页脚不做整页背景色渐变（体感突兀），页脚自带深色背景作为实体块推入。

## 规划中的功能

- **GitHub 登录**：未来支持用户使用 GitHub 账号登录。
- **用户上传 skill / MCP**：登录用户可以提交自己的 skill 和 MCP，但本站**不存储内容本体**，只保存并展示其 CurseForge 链接或 GitHub 链接（纯索引/展示性质）。

## 技术栈（已确定）

- **框架**：Astro（混合渲染，静态优先）+ React 岛屿（交互部分）
- **样式**：Tailwind CSS v4
- **动效**：GSAP + ScrollTrigger（滚动运镜）、Lenis（平滑滚动）、Three.js（按需，3D 场景）——均懒加载，首屏保持轻量
- **后端/部署**：Cloudflare Workers（静态资源 + SSR 一体，`wrangler deploy`）
- **数据库**：Cloudflare D1 + Drizzle ORM（只存用户和提交的链接）
- **认证**：better-auth（GitHub OAuth）
- **本地开发**：支持 Docker 构建运行
- 注：Cloudflare 已于 2026 年 1 月收购 Astro，两者为同一生态

## 素材

- `raw-assets/minecraft/` 存放收集的 Minecraft 高清参考图（Mojang 官方壁纸，2560x1440），来源与版权记录见其中 `SOURCES.md`
- 使用 Mojang 官方素材需遵守其使用指南（https://www.minecraft.net/en-us/usage-guidelines）：站点需加 "Not an official Minecraft product" 免责声明，不得暗示官方关联

## 部署与访问

- 部署到 **Cloudflare**（Workers）。
- 需要做**国内外双线 CDN**：既方便中国大陆访问，也方便海外访问。技术选型和架构设计需考虑这一点（如静态资源分发、域名解析分流等）。
- 大陆访问策略：所有资源自托管（字体/图标/JS），不引用大陆不稳定的第三方 CDN；后续可选 ICP 备案 + 境内 CDN 回源。

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
