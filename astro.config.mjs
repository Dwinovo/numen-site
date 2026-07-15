// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// 纯静态站点（Neubrutalism）。全站预渲染，无服务端、无数据库。
// 附属目录数据来自 src/content/addons/*.json（内容集合），经 GitHub PR 协作维护，
// 合并到 main 后由 EdgeOne Pages 自动构建（npm run build → dist/）并部署。
// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://numen.dwinovo.cn',
  vite: {
    plugins: [tailwindcss()]
  }
});
