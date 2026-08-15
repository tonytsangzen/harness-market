# DeepSeek Harness 生态插件 / 扩展 / 工具清单

> 收录与 deepseek-ai/DeepSeek-Harness(DSH,测试/评估 harness)直接相关的插件、扩展、任务包、集成工具。
> 排除无关的 DeepSeek 库(纯 API SDK、聊天应用等)。

**上次更新:** 2026-08-16(第 2 次运行,增量合并)
**统计:** 总计 **34** 条 — 官方插件 1 | 测试与评估 3 | 数据加载与处理 0 | 集成适配器 3 | CLI 工具 1 | 其他 26

**本次检索来源:** npm registry 搜索 API(5 个关键词:`deepseek harness` / `deepseek-harness` / `ds-harness` / `harness plugin` / `deepseek eval`)✅;GitHub 搜索 API(3 个查询:`deepseek+harness` / `deepseek-harness` / `deepseek+eval+harness`,各 per_page=30)✅;web 搜索兜底未使用(API 全部成功,无限流)。来源覆盖完整。本次无移除;旧清单全部条目复验仍有效(无 404、无 fork 混入)。注:旧统计行少计 1 条(其他分类实为 25 条),本次已修正。

---

## 官方插件(deepseek-ai 出品)

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| deepseek-ai/deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/deepseek-ai/deepseek-harness | ⭐ 112,489 | MIT | 2026-08-13 | DSH 官方核心仓库,"一切皆插件",提供 dsh CLI 与插件运行时(新增于 2026-08-16) |

## CLI 工具

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| create-dsh-plugin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/create-dsh-plugin | 135/月 | MIT | 2026-08-13 | DSH 插件脚手架 CLI:秒级生成 tool/events/webui 模板,内置 --verify 冒烟测试与 next-tag 版本锁定(新增于 2026-08-16) |

## 测试与评估(evals / tasks / 基准)

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| BiBoyang/dsh-eval-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/BiBoyang/dsh-eval-harness | ⭐ 5 | — | 2026-08-14 | DSH 插件评测工具:YAML 用例驱动真实 agent 回归评测,支持 PASS/WARN/FAIL 门禁与 baseline 对比(新增于 2026-08-16) |
| ShawnSiao/dsh-agent-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ShawnSiao/dsh-agent-eval | ⭐ 1 | — | 2026-08-13 | 规划中的 DSH agent 与插件可重复回归评测框架(新增于 2026-08-16) |
| hccccc01333/dsh-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/hccccc01333/dsh-eval | ⭐ 0 | MIT | 2026-08-14 | DSH agent 评测平台:benchmark YAML + headless dsh 编排 + 基于轨迹的分析(新增于 2026-08-16) |

## 数据加载与处理

*当前未发现直接相关的条目。*

## 集成适配器

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| xiufengsun/TokenTracker 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/xiufengsun/TokenTracker | ⭐ 1,320 | MIT | 2026-08-15 | 本地优先的 AI token 用量与成本追踪器,覆盖 31 种编码工具(含 DeepSeek Harness),自带原生应用、不读取提示词内容(新增于 2026-08-16) |
| @m2atrid/pis-harness-dsh-adapter 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@m2atrid/pis-harness-dsh-adapter | 138/月 | MIT | 2026-08-06 | DeepSeek Harness 适配器,当前为契约先行版本,待 DSH 协议正式发布后实现(新增于 2026-08-16) |
| egnmosk/dsh-browser-bridge 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/egnmosk/dsh-browser-bridge | ⭐ 0 | MIT | 2026-08-13 | DSH 插件 + 浏览器扩展桥接:为 agent 提供 browser_* 导航/点击/输入/截图工具(新增于 2026-08-16) |

## 其他

### 桌面端与 Web UI

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| anywhere-labs/deepseek-harness-desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/anywhere-labs/deepseek-harness-desktop | ⭐ 5,387 | MIT | 2026-08-15 | 为 DSH 生态打造的现代化桌面端体验(新增于 2026-08-16) |
| zhu1090093659/dsh-web-ui 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/zhu1090093659/dsh-web-ui | ⭐ 2,618 | Apache-2.0 | 2026-08-15 | DSH Web UI 插件与皮肤集合:任务面板、git 图谱、右侧栏等(新增于 2026-08-16) |
| dataelement/dsh-desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/dataelement/dsh-desktop | ⭐ 236 | MIT | 2026-08-15 | DeepSeek Harness 桌面应用(新增于 2026-08-16) |
| zouyuxuan122/Deepseek-Harness-EAC 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/zouyuxuan122/Deepseek-Harness-EAC | ⭐ 211 | — | 2026-08-15 | Windows 桌面客户端:内置 Node.js 与 dsh CLI,一键启动(新增于 2026-08-16) |
| hairyf/deepseek-harness-desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/hairyf/deepseek-harness-desktop | ⭐ 150 | MIT | 2026-08-15 | DSH Tauri 桌面版:一键启动、零环境配置(新增于 2026-08-16) |
| steven-kid/deepseek-harness-desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/steven-kid/deepseek-harness-desktop | ⭐ 149 | MIT | 2026-08-15 | 极简跨平台 DSH 桌面包装器,免配置开箱即用(新增于 2026-08-16) |
| vibeinging/deepseek-harness-desktop-app 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/vibeinging/deepseek-harness-desktop-app | ⭐ 115 | MIT | 2026-08-15 | 本地 AI 桌面工作区:管理 DSH 会话、项目、文件与 Web 资源(新增于 2026-08-16) |
| ChisaAlter/Deepseek-Harness-Desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ChisaAlter/Deepseek-Harness-Desktop | ⭐ 84 | MIT | 2026-08-15 | Electron 桌面壳,支持主题与背景图等个性化配置(新增于 2026-08-16) |
| xingj404-lab/dsh-desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/xingj404-lab/dsh-desktop | ⭐ 50 | — | 2026-08-15 | DeepSeek Harness 桌面端(新增于 2026-08-16) |
| ningbainb/deepseek-harness-desktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ningbainb/deepseek-harness-desktop | ⭐ 44 | BSD-3-Clause | 2026-08-15 | Windows 无损桌面应用,带完整 DSH Web UI、插件与皮肤(新增于 2026-08-16) |
| wess09/DeepSeekHarnessDesktop 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/wess09/DeepSeekHarnessDesktop | ⭐ 37 | MIT | 2026-08-13 | DSH 桌面端打包分发(新增于 2026-08-16) |

### 精选列表 / 教程 / 指南

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| awesome-dsh-plugin/awesome-dsh-plugin 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/awesome-dsh-plugin/awesome-dsh-plugin | ⭐ 2,802 | CC0-1.0 | 2026-08-15 | DSH 插件精选列表(中英双语)(新增于 2026-08-16) |
| alchaincyf/deepseek-harness-orange-book 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/alchaincyf/deepseek-harness-orange-book | ⭐ 740 | — | 2026-08-15 | DSH 橙皮书《从开机到拆开》:完整系统提示词、129 行启动清单与原始会话日志实测,提供 PDF/EPUB/HTML(新增于 2026-08-16) |
| 0xsline/awesome-deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/0xsline/awesome-deepseek-harness | ⭐ 480 | CC0-1.0 | 2026-08-15 | DSH 生态精选:插件、工具与基础设施(源自 dsh-external/hub)(新增于 2026-08-16) |
| libukai/awesome-deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/libukai/awesome-deepseek-harness | ⭐ 67 | — | 2026-08-15 | DSH 中文终极指南:快速入门、资源推荐、精选插件与实用工具(新增于 2026-08-16) |
| Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins | ⭐ 66 | MIT | 2026-08-15 | DSH 插件/扩展/工具/技能/客户端/运行时/集成精选(新增于 2026-08-16) |
| Dominic789654/awesome-deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Dominic789654/awesome-deepseek-harness | ⭐ 48 | NOASSERTION | 2026-08-15 | DSH 插件、技能、MCP 服务器、patch/profile 层、编排器与 UI 精选(新增于 2026-08-16) |
| ht426/deepseek-harness-tutorial 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ht426/deepseek-harness-tutorial | ⭐ 61 | MIT | 2026-08-13 | DeepSeek Harness 中文详细学习教程(新增于 2026-08-16) |
| beancookie/awesome-dsh-plugin 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/beancookie/awesome-dsh-plugin | ⭐ 31 | CC0-1.0 | 2026-08-15 | Awesome DeepSeek Harness 插件列表(新增于 2026-08-16) |

### 功能插件 / 预设 / 其他工具

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| crafter-station/petdex 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/crafter-station/petdex | ⭐ 3,831 | MIT | 2026-08-14 | 动画宠物画廊,支持 Codex、Claude Code、DeepSeek Harness、Hermes 等 agent(新增于 2026-08-16) |
| xiaobright/dsh-anchored-standard 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/xiaobright/dsh-anchored-standard | ⭐ 2,037 | NOASSERTION | 2026-08-15 | 两阶段 DSH 预设:最小对齐引导后切换到完整 Standard 工具集(新增于 2026-08-16) |
| NanmiCoder/dsh-agent-teams 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/NanmiCoder/dsh-agent-teams | ⭐ 327 | MIT | 2026-08-15 | 为 DeepSeek Harness 提供的 AgentTeams 多 agent 协作插件(新增于 2026-08-16) |
| @banlan/inkstone 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@banlan/inkstone | 364/月 | CC-BY-NC-SA-4.0 | 2026-08-13 | 会话历史浏览与管理工具,支持 Claude Code、Codex CLI、DeepSeek Harness (dsh) 等(新增于 2026-08-16) |
| leenkcool/Blue-Whale-Harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/leenkcool/Blue-Whale-Harness | ⭐ 45 | Apache-2.0 | 2026-08-15 | DeepSeek Harness 插件集合(新增于 2026-08-16) |
| junhongchashui/dsh-plugin-web-access 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/junhongchashui/dsh-plugin-web-access | ⭐ 0 | MIT | 2026-08-14 | 纯本地 DSH 按需网页访问插件:web_fetch 命令行抓取 + 无头浏览器双通道,免 API Key(新增于 2026-08-16) |
| HenryZ838978/deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/HenryZ838978/deepseek-harness | ⭐ 41 | MIT | 2026-08-15 | 独立维护的 DeepSeek V4-Pro / V4-Flash harness(Python 库,pip install deepseek-harness)+ dsh CLI,非官方 DSH 仓库、与官方 DSH 插件生态无直接关联(新增于 2026-08-16) |

---

## 备注

- **数据加载与处理**分类本次未发现直接相关条目。
- 已排除的常见干扰项:`@ai-sdk/deepseek`、`@langchain/deepseek`、`deepseek-mcp-server`、`n8n-nodes-deepseek`、`deepseek-cli`、`deepseek-chat`、`deepseek-kit` 等(纯 DeepSeek API SDK/聊天/代理类,与 DSH 无关);`@react-native-harness/*`、`agentic-flow`、`@metaharness/*`、`metaharness`、`reasonix`、`CodeWhale`、`CowAgent` 等(同名/泛化 "harness",非 DSH 生态)。
- `morlay/deepseek-harness` 已重定向废弃(指向 playpen),未收录。
