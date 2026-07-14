<!-- 提交一个附属？谢谢你！请照下面检查一遍，CI 会自动校验格式。 -->

## 这个 PR 做了什么
<!-- 例：新增附属 xxx / 修改 xxx 的链接 -->

## 如果是新增/修改附属，请确认

- [ ] 在 `src/content/addons/` 下**新增了一个 `.json` 文件**（文件名用附属的英文短名，如 `my-cool-mod.json`），或只改了已有文件
- [ ] 字段齐全：`name`、`description`、`author`、`links`（至少一条，`href` 是合法 http(s) 链接）
- [ ] 链接指向作品本体所在处（GitHub / CurseForge / Modrinth / 官网……）——**本站只做索引，不托管内容本体**
- [ ] 内容真实、无违规违法信息，作者署名属实
- [ ] 本地 `npm run build` 能通过（或等 CI 绿）

## 数据格式示例

```json
{
  "name": "my-cool-mod",
  "type": "模组",
  "author": "你的名字",
  "description": "一句到一段的介绍。",
  "links": [
    { "href": "https://github.com/you/my-cool-mod" },
    { "label": "CurseForge", "href": "https://curseforge.com/..." }
  ]
}
```

> 合并后由 EdgeOne Pages 自动构建部署，通常几分钟内上线。
