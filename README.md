# 姥子的口袋

分类卡片导航，收录 chinheki 的日常工具。静态 HTML/CSS/JS，无构建依赖。

本地运行：`node server.mjs`，打开 http://127.0.0.1:19093 。

分类与搜索、名称排序、收藏、添加、编辑和移除卡片均可用。用户修改保存在当前浏览器 localStorage，不会跨设备同步。默认目录在 dist/app.js 的 defaults 中。

随心传为局域网地址，仅在相关服务运行且处于同一网络时可用。可编辑卡片更新地址。其余工具使用 chinheki 的 GitHub Pages 入口。

## 发布

推送 main 后，GitHub Actions 自动检查 JS，并将 dist 发布到 GitHub Pages。保留原配色、卡片和 CSS 小插画。正式地址：https://chinheki.github.io/heki-toolbox/ 。
