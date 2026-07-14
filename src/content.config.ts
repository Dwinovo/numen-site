// 内容集合 —— 附属目录的唯一数据源。
// 每条附属是 src/content/addons/ 下的一个 .json 文件（一文件一条，PR 合并零冲突）。
// schema 在此写死：格式不合规的投稿连 build 都过不了，CI 直接拦下。
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const addons = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/addons' }),
	schema: z.object({
		// 展示名（必填）
		name: z.string().min(1),
		// 类型标签，可空：模组 / 开发框架 / MCP / Skill / 工具 …… 自由填写
		type: z.string().optional(),
		// 一句到一段的介绍（必填）
		description: z.string().min(1),
		// 作者署名（必填，纯字符串）
		author: z.string().min(1),
		// 排序权重，越小越靠前；不填排在最后，同权重按名称排
		order: z.number().optional(),
		// 相关链接，至少一条。href 必须是合法 http(s) URL。
		// label 可空：留空时前端按域名自动识别 GitHub / CurseForge / Modrinth
		links: z
			.array(
				z.object({
					label: z.string().optional(),
					href: z.string().url(),
				}),
			)
			.min(1),
	}),
});

export const collections = { addons };
