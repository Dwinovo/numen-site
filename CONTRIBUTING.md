# 贡献指南 —— 提交你的附属

Numen 官网的「附属」目录是**社区共建**的:任何人都可以通过 GitHub Pull Request 把自己的模组、开发框架、Skill、MCP 或工具加进来。

本站是**纯静态的索引站**——只展示指向作品本体的链接(GitHub / CurseForge / Modrinth / 官网……),**不托管任何内容本体**。你的作品永远属于你。

## 怎么提交(3 步)

1. **Fork** 本仓库,在 `src/content/addons/` 下**新建一个 `.json` 文件**。
   - 文件名用你附属的英文短名,例如 `my-cool-mod.json`(它会成为详情页地址 `/a/my-cool-mod`)。
   - 一个文件 = 一条附属。这样多人同时投稿也不会冲突。
2. 按下面的格式填写内容。
3. 提交 **Pull Request**。CI 会自动校验格式;维护者 review 通过并合并后,**EdgeOne Pages 自动构建部署**,几分钟内上线。

## 数据格式

```json
{
  "name": "my-cool-mod",
  "type": "模组",
  "order": 100,
  "author": "你的名字",
  "description": "一句到一段的介绍,讲清楚这个附属是做什么的。",
  "links": [
    { "href": "https://github.com/you/my-cool-mod" },
    { "label": "CurseForge", "href": "https://curseforge.com/minecraft/mc-mods/my-cool-mod" }
  ]
}
```

| 字段 | 必填 | 说明 |
|------|------|------|
| `name` | ✅ | 展示名 |
| `description` | ✅ | 一句到一段的介绍 |
| `author` | ✅ | 作者署名(纯文字) |
| `links` | ✅ | 至少一条。`href` 必须是合法 http(s) 链接;`label` 可留空,前端会按域名自动识别 GitHub / CurseForge / Modrinth |
| `type` | 选填 | 类型标签:模组 / 开发框架 / MCP / Skill / 工具……自由填 |
| `order` | 选填 | 排序权重,越小越靠前;不填排在最后 |

> schema 定义在 `src/content.config.ts`。字段缺失、链接非法、JSON 写错,`npm run build` 会直接报错,CI 也会拦下,所以合并前你就能知道格式对不对。

## 本地预览(可选)

```bash
npm install
npm run dev      # 打开 http://localhost:4321/addons 看效果
npm run build    # 校验能否通过构建
```

## 内容要求

- 内容真实合法,不含违规、违法、侵权信息。
- 链接指向你自己有权分享的作品。
- 维护者保留对不符合要求的投稿不予合并或移除的权利。
