# DeepSeek Harness 插件市场

一个纯静态的单页插件市场网站,收录 DeepSeek Harness (DSH) 生态的插件、扩展、任务包与集成工具,支持**查询、筛选、详情查看与下载**。

> 🌐 **在线访问**: <https://tonytsangzen.github.io/harness-market/>
>
> 由 GitHub Actions 自动部署(`.github/workflows/deploy-pages.yml`),每次推送 `main` 分支即自动重新构建 `site/data.js` 并发布到 GitHub Pages。

## 功能

- **查询**:按名称、简介、主题标签、关键词、作者/发布者实时搜索(防抖)。
- **筛选**:按类型(GitHub 仓库 / npm 包)与分类(官方插件、桌面端与 Web UI、测试与评估、集成适配器、CLI 工具、精选列表、功能插件等)筛选。
- **排序**:综合、星标最多、下载量最多、最近更新、名称。
- **详情弹窗**:完整简介(中文 + 英文)、许可证、语言、星标/Fork、月下载量、版本、发布者、主题标签与外部链接。
- **下载 / 安装**:
  - GitHub 仓库 → 直接下载 ZIP / tar.gz(codeload),一键复制 `git clone` 命令;
  - npm 包 → 直接下载 `.tgz`(registry),一键复制 `npm install` 命令。
- 纯静态、零依赖、离线可用;数据以 `window.PLUGIN_DATA` 内嵌,无需 fetch/CORS,可直接 `file://` 打开。

## 目录结构

```
harness-plugins/
├── plugins-inventory.md          # 整理后的精选清单(权威来源,中文简介 + 分类)
├── gh1.json / gh2.json / gh3.json # GitHub 搜索原始数据
├── npm_*.json                    # npm 搜索原始数据
├── build_data.py                 # 构建脚本:合并清单与原始元数据 → site/data.js
├── .github/workflows/
│   └── deploy-pages.yml          # GitHub Actions:构建并部署 site/ 到 GitHub Pages
├── site/
│   ├── index.html                # 页面结构
│   ├── styles.css                # 样式
│   ├── app.js                    # 交互逻辑(搜索/筛选/排序/详情/下载/复制)
│   ├── data.js                   # 生成的数据(勿手改,重新生成见下)
│   └── 404.html                  # Pages 404 页 → 自动跳首页
└── README.md
```

## 本地运行

任意静态服务器均可(数据已内嵌,直接双击 `site/index.html` 用 `file://` 打开亦可):

```bash
cd site
python3 -m http.server 8317
# 浏览器打开 http://127.0.0.1:8317/
```

## 线上发布(GitHub Pages)

站点通过 `.github/workflows/deploy-pages.yml` 发布,流程:

1. 推送 `main` 分支后,GitHub Actions 自动运行 `python3 build_data.py` 重新生成 `site/data.js`(确保线上数据与清单/原始元数据一致);
2. 以 `site/` 为根上传制品,由 `actions/deploy-pages` 部署到 GitHub Pages。

**首次启用**(只需一次):仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**(本仓库已完成)。之后每次推送即自动发布,并可在 Actions → `Deploy site to GitHub Pages` 中查看运行状态与部署链接。

**在线地址**: <https://tonytsangzen.github.io/harness-market/>(已上线,部署完成后约 1 分钟内生效)。

## 数据更新 / 重新生成

原始搜索数据(`gh*.json`、`npm_*.json`)或清单 `plugins-inventory.md` 更新后,重新运行:

```bash
python3 build_data.py
```

该脚本会:

1. 解析 `plugins-inventory.md` 的分类表格(共 33 条精选条目);
2. 用 GitHub / npm 原始数据补齐精确的 stars、下载量、许可证、语言、topics、版本、发布者、默认分支等;
3. 生成带下载链接(codeload ZIP/tar.gz、npm registry tarball)与安装命令的 `site/data.js`。

## 数据说明

- **清单来源**:`plugins-inventory.md`(npm registry 搜索 API 5 个关键词 + GitHub 搜索 API 3 个查询,去重、排除与 DSH 无关的噪音后人工整理)。
- 清单头部写"总计 32 条"实为笔误,实际表格为 **33 条**(30 个 GitHub 仓库 + 3 个 npm 包);构建脚本按真实条目数输出。
- 所有 33 条均已成功关联到原始元数据(无未匹配项)。
