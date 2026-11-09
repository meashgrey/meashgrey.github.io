# meashgrey.github.io

个人主页 · 极简主义设计 · SolidJS + Vite + TypeScript · Hundar 衬线字体 · GitHub Pages 自动部署

## 本地开始

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 类型检查 + 构建到 dist/
npm run preview    # 预览构建结果
```

## 修改内容

站点所有文案、链接、作品和文章列表都集中在 **`src/data/site.ts`**，改这一个文件即可：

| 字段 | 说明 |
| --- | --- |
| `name` | 名字标题 |
| `lede` | 一句话简介 |
| `links` | 横向链接行（GitHub、Email 等），可继续增加，自动换行 |

刻意不放作品列表、页脚、日期、分类和统计数字，页面只留一张“名片”。

## 目录结构

```
index.html              入口（含防主题闪烁脚本、字体预加载、SEO meta）
src/
  index.tsx             SolidJS 挂载
  App.tsx               页面结构
  components/
    ThemeToggle.tsx     明暗主题切换（记忆到 localStorage）
  data/site.ts          站点内容配置
  styles.css            全部样式（明暗主题用 light-dark() 实现）
public/
  favicon.svg           图标
  fonts/
    Hundar.woff2        正文字体（26 KB）
    OFL.txt             字体许可证
.github/workflows/
  deploy.yml            GitHub Pages 自动部署
```

## 字体

页面所有文字都使用 [Hundar](https://github.com/The-EPL-Type-Foundry/Hundar)，一款为书籍和文章设计的开源衬线字体，采用 SIL Open Font License 1.1。

- 自行托管在 `public/fonts/`，不依赖第三方字体 CDN，并通过 `<link rel="preload">` 预加载。
- 当前字体只覆盖基本拉丁字符；中文、弯引号、破折号等会回退到系统衬线字体（`Songti SC` / `Noto Serif CJK SC` / Georgia），不会出现方块。
- 需要换字体时，改 `src/styles.css` 顶部的 `@font-face` 和 `--serif` 即可。

## 部署到 GitHub Pages

1. 推送到 `main` 分支。
2. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
3. 之后每次 push 都会自动构建并发布到 <https://meashgrey.github.io>。

工作流使用官方 Pages Actions（`configure-pages` / `upload-pages-artifact` / `deploy-pages`），无需 `gh-pages` 分支。

`vite.config.ts` 里的 `base` 已设为 `/`，因为这是用户主页站点（`<user>.github.io`）。如果将来部署成项目站点（`/<repo>/`），需要把 `base` 改成 `/<repo>/`。

## 设计说明

- 无 UI 框架、无图片，自托管 Hundar 衬线字体，首屏体积仍然很小。
- 单屏居中排版，衬线大标题 + 大量留白，整页不超过一个视口。
- 明暗主题通过 CSS `light-dark()` + `color-scheme` 实现，默认跟随系统，手动切换后记住偏好，且首屏无闪烁。
- 链接行水平排列，间距随视口缩放，之后加链接会自动换行而不会挤在一起。
- 进入时有一次缓慢的淡入，且支持 `prefers-reduced-motion`。
