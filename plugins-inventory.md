# DeepSeek Harness 生态插件 / 扩展 / 工具清单

> 收录与 deepseek-ai/DeepSeek-Harness(DSH,测试/评估 harness)直接相关的插件、扩展、任务包、集成工具。
> 排除无关的 DeepSeek 库(纯 API SDK、聊天应用等)。

**上次更新:** 2026-08-21(第 6 次运行)
**统计:** 总计 **197** 条 — 官方插件 87 | 测试与评估 13 | 数据加载与处理 0 | 集成适配器 18 | CLI 工具 3 | 其他 76

**本次检索来源:** npm registry 搜索 API(5 个关键词:`deepseek harness` / `deepseek-harness` / `ds-harness` / `harness plugin` / `deepseek eval`,size=50)✅;GitHub 搜索 API(3 个查询,per_page=30)+ 12 个新仓库详情核实(逐条检查 fork 字段,均非 fork)✅;web 搜索兜底未使用(API 全部成功,无限流)。本次新增 **40** 条:3 个官方 `@deepseek-ai/dsh-*` npm 包(布局/凭据/typert 注册表,月下载 63-68 万)、25 个社区 npm 插件与 12 个 GitHub 仓库;无移除(对旧清单 114 个 npm 条目做全量 HEAD 存活校验,全部 200;仅修正 1 条旧条目包名:`laizhixingxingdeli/dsh-coagenthub` 实际包名为 `@laizhixingxingdeli/dsh-coagenthub`,原记录漏写 `@` 前缀,已改名并修正 URL)。边界排查:`Nagi-ovo/voyager`、`Prism-Shadow/penguin-harness`、`zhukunpenglinyutong/desktop-cc-gui`(多引擎套件,非 DSH 专属)、`MemTensor/MemOS`(通用记忆 OS)、`Heathcliff-1104/coding-agent-harness-eval` 之外的泛化 eval(如 `gauravvij/local-llm-coding-eval`、`theruviparambil/veriva-eval`、`ZeekrBaha/eval-hotel-bot-*` 等)不收录;`@ai-sdk/harness*`、`@react-native-harness/*`、`vitest-evals`、`plugin-manager-mcp`、`@metaharness/*`、`agentic-flow`、`@a5c-ai/*`、`@h-rig/harness-plugin` 等亦沿用既往结论不收录。

---

## 官方插件(deepseek-ai 出品)

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| deepseek-ai/deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/deepseek-ai/deepseek-harness | ⭐ 112,489 | MIT | 2026-08-13 | DSH 官方核心仓库,"一切皆插件",提供 dsh CLI 与插件运行时(新增于 2026-08-16) |

### 官方 npm 插件包(@deepseek-ai/dsh-*,共 86 个,2026-08-21 累计补全)

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| @deepseek-ai/dsh-agent 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-agent | 214123/月 | MIT | 2026-08-13 | agent 接口、注册表、发起者作用域与事件词汇(新增于 2026-08-17) |
| @deepseek-ai/dsh 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh | 195945/月 | MIT | 2026-08-13 | 官方 dsh CLI:profile 启动、插件管理与浏览器 UI 别名入口(新增于 2026-08-17) |
| @deepseek-ai/dsh-agent-loop 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-agent-loop | 189853/月 | MIT | 2026-08-13 | 官方具体 agent 主循环插件(新增于 2026-08-17) |
| @deepseek-ai/dsh-agent-presets 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-agent-presets | 197823/月 | BSD-3-Clause | 2026-08-10 | 按 preset cordis.yml 文件组装每会话 agent 组合(新增于 2026-08-17) |
| @deepseek-ai/dsh-anonymous-user-id 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-anonymous-user-id | 189289/月 | BSD-3-Clause | 2026-08-12 | 匿名用户标识,用于遥测与反馈关联(新增于 2026-08-17) |
| @deepseek-ai/dsh-attachment 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-attachment | 215641/月 | BSD-3-Clause | 2026-08-10 | 持久不可变附件存储 seam(ctx.attachment)抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-attachment-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-attachment-local | 188017/月 | BSD-3-Clause | 2026-08-10 | DSH_HOME 内容寻址附件存储(新增于 2026-08-17) |
| @deepseek-ai/dsh-base 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-base | 188834/月 | BSD-3-Clause | 2026-08-10 | 共享 dsh 核心 profile bundle,每个 profile 的首个 patch 层(新增于 2026-08-17) |
| @deepseek-ai/dsh-bash-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-bash-local | 187414/月 | BSD-3-Clause | 2026-08-10 | bash 执行器 seam 的本地子进程实现(新增于 2026-08-17) |
| @deepseek-ai/dsh-bash-sandbox 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-bash-sandbox | 188333/月 | BSD-3-Clause | 2026-08-10 | 沙箱版 bash 执行器实现,隔离所有命令(新增于 2026-08-17) |
| @deepseek-ai/dsh-brand 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-brand | 216798/月 | BSD-3-Clause | 2026-08-10 | Branded<B> 名义类型原语(新增于 2026-08-17) |
| @deepseek-ai/dsh-client-ui-settings-plugin-inventory 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-settings-plugin-inventory | 187752/月 | BSD-3-Clause | 2026-08-12 | Web 插件设置页中的 Cordis Loader 清单只读页(新增于 2026-08-17) |
| @deepseek-ai/dsh-client-ui-layout 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-layout | 635964/月 | BSD-3-Clause | 2026-08-10 | 官方 shell 布局插件:三栏 AppFrame 应用框架 + ctx.layout 视图状态服务(导航与面板)(新增于 2026-08-21) |
| @deepseek-ai/dsh-client-ui-sidebar 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-sidebar | 189886/月 | BSD-3-Clause | 2026-08-10 | Web 端侧边栏插件:会话多级树、搜索、分组与状态点(新增于 2026-08-17) |
| @deepseek-ai/dsh-client-ui-theme 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-theme | 190627/月 | BSD-3-Clause | 2026-08-10 | Web 主题插件:ThemeService(亮/暗/跟随系统)与 --dsw-* token 基础样式(新增于 2026-08-17) |
| @deepseek-ai/dsh-code-runtime-worker-thread 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-code-runtime-worker-thread | 188062/月 | BSD-3-Clause | 2026-08-12 | 代码执行 seam 的 worker-thread 实现(新增于 2026-08-17) |
| @deepseek-ai/dsh-code-runtime 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-code-runtime | 205856/月 | BSD-3-Clause | 2026-08-10 | 代码执行 seam(ctx.codeRuntime)抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-command-feedback 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-command-feedback | 187918/月 | BSD-3-Clause | 2026-08-10 | 会话反馈产出与 /feedback 命令(新增于 2026-08-17) |
| @deepseek-ai/dsh-command-goal 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-command-goal | 188191/月 | BSD-3-Clause | 2026-08-10 | 会话内持久化目标 /goal 命令(新增于 2026-08-17) |
| @deepseek-ai/dsh-commands 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-commands | 201924/月 | BSD-3-Clause | 2026-08-10 | 插件自有的人类命令注册表,供 DSH UI 表面使用(新增于 2026-08-17) |
| @deepseek-ai/dsh-compaction 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-compaction | 191462/月 | BSD-3-Clause | 2026-08-12 | 上下文压缩服务 seam(ctx.compaction)抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-compaction-basic 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-compaction-basic | 188229/月 | BSD-3-Clause | 2026-08-12 | token 计量驱动的压缩策略与 LLM 摘要后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-credentials-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-credentials-local | 633006/月 | BSD-3-Clause | 2026-08-10 | 官方文件型凭据提供器($DSH_HOME/.env,随进程环境加载)(新增于 2026-08-21) |
| @deepseek-ai/dsh-fs 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-fs | 191035/月 | BSD-3-Clause | 2026-08-10 | 文件系统能力 seam(ctx.fs)词汇类型(新增于 2026-08-17) |
| @deepseek-ai/dsh-fs-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-fs-local | 189132/月 | BSD-3-Clause | 2026-08-10 | ctx.fs 的本地文件系统实现(新增于 2026-08-17) |
| @deepseek-ai/dsh-fs-observation-policy 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-fs-observation-policy | 188001/月 | BSD-3-Clause | 2026-08-12 | 文件上下文策略插件:观察态、先读后写、版本守卫的 write/edit(新增于 2026-08-17) |
| @deepseek-ai/dsh-fs-sandbox 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-fs-sandbox | 188127/月 | BSD-3-Clause | 2026-08-10 | 沙箱强制文件系统:围栏写/编辑/删除(新增于 2026-08-17) |
| @deepseek-ai/dsh-goal 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-goal | 198160/月 | BSD-3-Clause | 2026-08-10 | 事件溯源的同会话目标状态与生命周期服务(新增于 2026-08-17) |
| @deepseek-ai/dsh-goal-round-driver 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-goal-round-driver | 188446/月 | BSD-3-Clause | 2026-08-12 | 竞态围栏的同会话 goal 轮次驱动器(新增于 2026-08-17) |
| @deepseek-ai/dsh-headless 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-headless | 188127/月 | BSD-3-Clause | 2026-08-10 | 无头一键运行 bundle:无 Host/HTTP 直跑 Agent/Session(新增于 2026-08-17) |
| @deepseek-ai/dsh-home-paths 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-home-paths | 200252/月 | BSD-3-Clause | 2026-08-12 | 共享文件系统路径助手(新增于 2026-08-17) |
| @deepseek-ai/dsh-host-directory-picker 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-host-directory-picker | 196701/月 | BSD-3-Clause | 2026-08-10 | 工作区目录选择 seam 抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-host-directory-picker-native 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-host-directory-picker-native | 187957/月 | BSD-3-Clause | 2026-08-10 | 目录选择 seam 的原生 OS 选择器后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-host-frontend-static 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-host-frontend-static | 187841/月 | BSD-3-Clause | 2026-08-12 | Web shell SPA 静态资源服务器(新增于 2026-08-17) |
| @deepseek-ai/dsh-invariants 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-invariants | 220464/月 | BSD-3-Clause | 2026-08-10 | 包级运行时不变量注册服务(新增于 2026-08-17) |
| @deepseek-ai/dsh-jobs-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-jobs-local | 188662/月 | BSD-3-Clause | 2026-08-12 | 后台任务注册表 seam 的进程内实现(新增于 2026-08-17) |
| @deepseek-ai/dsh-launch-environment 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-launch-environment | 190689/月 | BSD-3-Clause | 2026-08-12 | 不可变启动环境,记录每项配置来源层(新增于 2026-08-17) |
| @deepseek-ai/dsh-llm 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-llm | 219280/月 | BSD-3-Clause | 2026-08-10 | provider 无关的 LLM 服务接口(新增于 2026-08-17) |
| @deepseek-ai/dsh-llm-deepseek 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-llm-deepseek | 190823/月 | BSD-3-Clause | 2026-08-10 | LLM seam 的 DeepSeek chat-completions 适配器(新增于 2026-08-17) |
| @deepseek-ai/dsh-llm-retry 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-llm-retry | 197550/月 | BSD-3-Clause | 2026-08-10 | 按 provider 路由的 LLM 请求重试策略(新增于 2026-08-17) |
| @deepseek-ai/dsh-message-feedback 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-message-feedback | 195000/月 | BSD-3-Clause | 2026-08-11 | 绑定生命周期的逐消息评分与备注 sidecar(新增于 2026-08-17) |
| @deepseek-ai/dsh-permission-presets 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-permission-presets | 188363/月 | BSD-3-Clause | 2026-08-12 | 用户权限预设(ctx.permissionPresets)(新增于 2026-08-17) |
| @deepseek-ai/dsh-persona 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-persona | 189896/月 | BSD-3-Clause | 2026-08-10 | 组合式部署 persona 配置段(新增于 2026-08-17) |
| @deepseek-ai/dsh-pwsh-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-pwsh-local | 188201/月 | BSD-3-Clause | 2026-08-10 | 本地 PowerShell 版 bash 执行器实现(新增于 2026-08-17) |
| @deepseek-ai/dsh-pwsh-sandbox 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-pwsh-sandbox | 188238/月 | BSD-3-Clause | 2026-08-10 | 沙箱版 PowerShell 执行器实现,隔离所有命令(新增于 2026-08-17) |
| @deepseek-ai/dsh-sandbox 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-sandbox | 192496/月 | BSD-3-Clause | 2026-08-10 | 进程沙箱 seam(ctx.sandbox)抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-sandbox-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-sandbox-local | 188547/月 | BSD-3-Clause | 2026-08-10 | 本地沙箱后端:bwrap、landlock-run、macOS Seatbelt、Windows(新增于 2026-08-17) |
| @deepseek-ai/dsh-sandbox-windows-acl 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-sandbox-windows-acl | 188628/月 | BSD-3-Clause | 2026-08-10 | Windows ACL 写限制沙箱后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-scope 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-scope | 213313/月 | BSD-3-Clause | 2026-08-10 | 作用域上下文注册原语(scope 标签/过滤分发)(新增于 2026-08-17) |
| @deepseek-ai/dsh-sdk-jsonrpc-server 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-sdk-jsonrpc-server | 1435/月 | BSD-3-Clause | 2026-08-12 | 进程外 SDK 客户端的 stdio JSON-RPC 服务器插件(新增于 2026-08-17) |
| @deepseek-ai/dsh-session 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session | 217135/月 | BSD-3-Clause | 2026-08-10 | 事件溯源会话存储(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-persistence 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-persistence | 198882/月 | BSD-3-Clause | 2026-08-10 | 会话持久化 seam 抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-persistence-jsonl 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-persistence-jsonl | 189252/月 | BSD-3-Clause | 2026-08-10 | JSONL 持久会话存储后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-stats 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-stats | 191405/月 | BSD-3-Clause | 2026-08-12 | 全日志会话计数与墙钟时间投影(sessionStats)(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-telemetry-otel 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-telemetry-otel | 187895/月 | BSD-3-Clause | 2026-08-10 | OpenTelemetry 遥测后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-title 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-title | 198263/月 | BSD-3-Clause | 2026-08-10 | 基于日志的会话标题服务与提供器注册表(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-title-first-prompt-llm 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-title-first-prompt-llm | 187743/月 | BSD-3-Clause | 2026-08-12 | 会话标题的首条消息 LLM 提供插件(新增于 2026-08-17) |
| @deepseek-ai/dsh-session-title-llm 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-session-title-llm | 186719/月 | BSD-3-Clause | 2026-08-10 | 会话标题提供器的共享 LLM 生成策略(新增于 2026-08-17) |
| @deepseek-ai/dsh-shell 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-shell | 190013/月 | BSD-3-Clause | 2026-08-12 | bash 执行器 seam(ctx.shell)抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-settings 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-settings | 205238/月 | BSD-3-Clause | 2026-08-10 | 用户设置 seam(ctx.settings)抽象(新增于 2026-08-17) |
| @deepseek-ai/dsh-settings-file 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-settings-file | 187980/月 | BSD-3-Clause | 2026-08-12 | settings.yaml 文件设置提供器(新增于 2026-08-17) |
| @deepseek-ai/dsh-skill 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-skill | 201083/月 | BSD-3-Clause | 2026-08-10 | agent 技能提供器注册表(新增于 2026-08-17) |
| @deepseek-ai/dsh-skill-badge 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-skill-badge | 187927/月 | BSD-3-Clause | 2026-08-10 | 内置 badge 技能提供器(新增于 2026-08-17) |
| @deepseek-ai/dsh-skill-filesystem 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-skill-filesystem | 188791/月 | BSD-3-Clause | 2026-08-12 | 本地文件系统技能提供器(新增于 2026-08-17) |
| @deepseek-ai/dsh-spill 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-spill | 186814/月 | BSD-3-Clause | 2026-08-10 | spill 存储 seam(ctx.spillStore)抽象:超大工具输出落盘并返回定位符(新增于 2026-08-17) |
| @deepseek-ai/dsh-spill-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-spill-local | 187930/月 | BSD-3-Clause | 2026-08-10 | spill 存储的本地文件系统实现(会话私有文件)(新增于 2026-08-17) |
| @deepseek-ai/dsh-storage 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-storage | 195905/月 | BSD-3-Clause | 2026-08-10 | 存储中心 ctx.storage:后端注册表与数据设施(新增于 2026-08-17) |
| @deepseek-ai/dsh-storage-domain 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-storage-domain | 196007/月 | BSD-3-Clause | 2026-08-10 | 域数据表单:schema 校验、事件发射的 KV 域(新增于 2026-08-17) |
| @deepseek-ai/dsh-storage-json 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-storage-json | 188221/月 | BSD-3-Clause | 2026-08-10 | JSON 文件 KV 存储后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-subprocess-local 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-subprocess-local | 189300/月 | BSD-3-Clause | 2026-08-10 | 子进程 seam 的本地实现(新增于 2026-08-17) |
| @deepseek-ai/dsh-system-prompt 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-system-prompt | 213186/月 | BSD-3-Clause | 2026-08-10 | 系统提示词装配注册表(新增于 2026-08-17) |
| @deepseek-ai/dsh-terminal 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-terminal | 189797/月 | BSD-3-Clause | 2026-08-12 | 持久 PTY 会话 seam(新增于 2026-08-17) |
| @deepseek-ai/dsh-terminal-bash 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-terminal-bash | 189621/月 | BSD-3-Clause | 2026-08-12 | 子进程终端原语之上的持久 shell PTY 后端(新增于 2026-08-17) |
| @deepseek-ai/dsh-token-meter 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-token-meter | 194136/月 | BSD-3-Clause | 2026-08-10 | 可回放感知的 token 计量服务(ctx.tokenMeter)(新增于 2026-08-17) |
| @deepseek-ai/dsh-tool-cordis 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tool-cordis | 190044/月 | BSD-3-Clause | 2026-08-10 | 自指 cordis 工具集:检查运行时并挂载/卸载模型编写的插件(新增于 2026-08-17) |
| @deepseek-ai/dsh-tool-fs 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tool-fs | 188762/月 | BSD-3-Clause | 2026-08-10 | 面向模型的文件系统工具(read/write/edit,基于 ctx.fs)(新增于 2026-08-17) |
| @deepseek-ai/dsh-tool-skill 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tool-skill | 189052/月 | BSD-3-Clause | 2026-08-10 | 面向模型的技能加载工具(新增于 2026-08-17) |
| @deepseek-ai/dsh-tool-subagent 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tool-subagent | 188464/月 | BSD-3-Clause | 2026-08-10 | 基于 ctx.subagents 的模型侧子 agent 委托工具(新增于 2026-08-17) |
| @deepseek-ai/dsh-tools 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tools | 211282/月 | BSD-3-Clause | 2026-08-10 | 工具注册表与执行管线(新增于 2026-08-17) |
| @deepseek-ai/dsh-tool-todo 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tool-todo | 188616/月 | BSD-3-Clause | 2026-08-10 | 面向模型的 todo_write 工具,基于事件溯源会话日志(新增于 2026-08-17) |
| @deepseek-ai/dsh-tool-web 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-tool-web | 188373/月 | BSD-3-Clause | 2026-08-10 | 面向模型的 web 工具(web_search/web_fetch,基于 ctx.web)(新增于 2026-08-17) |
| @deepseek-ai/dsh-typert-registry 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-typert-registry | 677352/月 | BSD-3-Clause | 2026-08-10 | 官方运行时注册表:生成包反射与 Zod schema 的注册服务(新增于 2026-08-21) |
| @deepseek-ai/dsh-user-approval 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-user-approval | 209765/月 | BSD-3-Clause | 2026-08-10 | 用户批准 seam(ctx.approval):一次性权限决策(新增于 2026-08-17) |
| @deepseek-ai/dsh-web-app 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-web-app | 188992/月 | BSD-3-Clause | 2026-08-10 | Web 界面 bundle:web patch 层与运行时胶水(新增于 2026-08-17) |
| @deepseek-ai/dsh-web-search-deepseek 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-web-search-deepseek | 188052/月 | BSD-3-Clause | 2026-08-10 | DeepSeek 原生 web_search 搜索提供器(新增于 2026-08-17) |
| @deepseek-ai/dsh-workspace 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-ai/dsh-workspace | 196916/月 | BSD-3-Clause | 2026-08-10 | 工作区实体注册表(ctx.workspace)(新增于 2026-08-17) |

## CLI 工具

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| create-dsh-plugin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/create-dsh-plugin | 135/月 | MIT | 2026-08-13 | DSH 插件脚手架 CLI:秒级生成 tool/events/webui 模板,内置 --verify 冒烟测试与 next-tag 版本锁定(新增于 2026-08-16) |

| @deepseek-harness-tui/dsh-tui 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@deepseek-harness-tui/dsh-tui | 3360/月 | MIT | 2026-08-17 | DSH agent 的 Claude Code 风格交互式 TUI 前端,基于 portable 运行时(新增于 2026-08-17) |
| dsh-web-open 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-web-open | 1792/月 | MIT | 2026-08-15 | 自动打开浏览器、托盘图标、桌面快捷方式与 dsh web 一键安装器(新增于 2026-08-17) |

## 测试与评估(evals / tasks / 基准)

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| BiBoyang/dsh-eval-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/BiBoyang/dsh-eval-harness | ⭐ 5 | — | 2026-08-14 | DSH 插件评测工具:YAML 用例驱动真实 agent 回归评测,支持 PASS/WARN/FAIL 门禁与 baseline 对比(新增于 2026-08-16) |
| ShawnSiao/dsh-agent-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ShawnSiao/dsh-agent-eval | ⭐ 1 | — | 2026-08-13 | 规划中的 DSH agent 与插件可重复回归评测框架(新增于 2026-08-16) |
| hccccc01333/dsh-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/hccccc01333/dsh-eval | ⭐ 0 | MIT | 2026-08-14 | DSH agent 评测平台:benchmark YAML + headless dsh 编排 + 基于轨迹的分析(新增于 2026-08-16) |

| dsh-testkit 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-testkit | 1027/月 | MIT | 2026-08-15 | DSH 插件真实宿主生命周期测试工具(新增于 2026-08-17) |
| dsh-plugin-clinic 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-plugin-clinic | 136/月 | MIT | 2026-08-16 | 对已装 DSH 插件集做只读健康检查:加载/清单/依赖诊断(新增于 2026-08-17) |
| ruby1304/dsh-public-plugins 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ruby1304/dsh-public-plugins | ⭐ 0 | MIT | 2026-08-17 | 可复用 DSH 插件与技能集:工作流画布工具包、盲评 harness、LLM 成本实验室与事件台账(新增于 2026-08-17) |
| 2326261098/dsh-agent-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/2326261098/dsh-agent-eval | ⭐ 0 | MIT | 2026-08-21 | 一键安装的 agent 评测插件:/eval 命令 + agent_eval 工具,自带 METR 任务套件、双语与 HTML 报告(新增于 2026-08-21) |
| Heathcliff-1104/coding-agent-harness-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Heathcliff-1104/coding-agent-harness-eval | ⭐ 1 | — | 2026-08-18 | mini-swe-agent / DeepSeek Harness / Pi 三者在同一 DeepSeek 模型下的可复现实测对比(新增于 2026-08-21) |
| huangdaxianer/dsh-dual-model-eval 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/huangdaxianer/dsh-dual-model-eval | ⭐ 0 | MIT | 2026-08-19 | DSH 内并排对比多个编程模型:隔离 Git worktree + 实时轨迹 + 可直接采纳的结果(新增于 2026-08-21) |
| leemiracle/deepseek-agent-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/leemiracle/deepseek-agent-harness | ⭐ 1 | MIT | 2026-08-20 | agent 系统插件:轨迹 JSONL schema 校验 + 成本基线评测 + 自举授权红线(新增于 2026-08-21) |
| leemiracle/deepseek-llm-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/leemiracle/deepseek-llm-harness | ⭐ 1 | MIT | 2026-08-20 | LLM 研究插件:三级生成冒烟(真实 Qwen2.5-0.5B 运行)+ PPL 健全性评测 + 反作弊守卫(新增于 2026-08-21) |
| litefuse/dsh-litefuse-plugin 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/litefuse/dsh-litefuse-plugin | ⭐ 0 | MIT | 2026-08-18 | Litefuse 官方 DSH 插件:agent 可观测性与评测(新增于 2026-08-21) |
| tkwkeven/dsh-sim-restart 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/tkwkeven/dsh-sim-restart | ⭐ 0 | MIT | 2026-08-20 | DSH 插件模拟重启测试:隔离子进程中验证插件重启存活(module eval → apply → smoke → dispose),带常驻自动监视器(新增于 2026-08-21) |

## 数据加载与处理

*当前未发现直接相关的条目。*

## 集成适配器

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| xiufengsun/TokenTracker 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/xiufengsun/TokenTracker | ⭐ 1,320 | MIT | 2026-08-15 | 本地优先的 AI token 用量与成本追踪器,覆盖 31 种编码工具(含 DeepSeek Harness),自带原生应用、不读取提示词内容(新增于 2026-08-16) |
| @m2atrid/pis-harness-dsh-adapter 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@m2atrid/pis-harness-dsh-adapter | 138/月 | MIT | 2026-08-06 | DeepSeek Harness 适配器,当前为契约先行版本,待 DSH 协议正式发布后实现(新增于 2026-08-16) |
| egnmosk/dsh-browser-bridge 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/egnmosk/dsh-browser-bridge | ⭐ 0 | MIT | 2026-08-13 | DSH 插件 + 浏览器扩展桥接:为 agent 提供 browser_* 导航/点击/输入/截图工具(新增于 2026-08-16) |

| dsh-bridges 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-bridges | 140/月 | Apache-2.0 | 2026-08-16 | 桥接为其他编码 agent(Claude Code 等)配置的项目,使其可被 DSH 驱动(新增于 2026-08-17) |
| dsh-feishu-bot 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-feishu-bot | 3614/月 | AGPL-3.0 | 2026-08-17 | 将 DSH 接入飞书/Lark:流式卡片、项目工作区(新增于 2026-08-17) |
| dsh-lark-bot 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-lark-bot | 3640/月 | AGPL-3.0 | 2026-08-17 | 将 DSH 接入飞书/Lark 的机器人桥(与 dsh-feishu-bot 同族独立包)(新增于 2026-08-17) |
| @openma/deepseek-harness-acp 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@openma/deepseek-harness-acp | 289/月 | Apache-2.0 | 2026-08-16 | Agent Client Protocol(ACP)适配器,可在 ACP 客户端中驱动 DeepSeek Harness(新增于 2026-08-17) |
| dsh-lark-bridge 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-lark-bridge | 61/月 | MIT | 2026-08-14 | 会话暂停等待用户交互(权限请求/提问/致命错误)时实时推送飞书/Lark 通知(新增于 2026-08-17) |
| sandbaseai/sandbase-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/sandbaseai/sandbase-harness | ⭐ 613 | Apache-2.0 | 2026-08-17 | 开源 CMA 兼容 agent 运行时(MCP 工具、沙箱会话、审计回放),内置 stdio MCP 的 DeepSeek Harness bundle(新增于 2026-08-17) |
| twinkle10010/dsh-rokid-aiui 🆕 | GitHub 仓库 | 手动补充 | https://github.com/twinkle10010/dsh-rokid-aiui | ⭐ 5 | — | 2026-08-17 | DSH 的 Rokid AIUI 开发套件:host 插件 + Agent 预设,在 Harness GUI 内实时开发/预览 AIUI(Ink 框架)应用,悬浮预览窗 + 文件树 + 保存即热刷新(新增于 2026-08-17) |
| @double-coding/flow2spec-deepseek-harness 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@double-coding/flow2spec-deepseek-harness | 1010/月 | MIT | 2026-08-20 | Flow2Spec 规格工具的原生 DSH 插件(新增于 2026-08-21) |
| @dsh-overdrive/gateway-core 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@dsh-overdrive/gateway-core | 393/月 | MIT | 2026-08-19 | dsh-overdrive 多平台聊天桥接核心:轨迹 / 审批 / 多 agent(新增于 2026-08-21) |
| @nefevcore/abap-adt-dsh-plugin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@nefevcore/abap-adt-dsh-plugin | 356/月 | MIT | 2026-08-20 | agent 原生访问 SAP ABAP(ADT REST 协议):搜索/编辑/激活/单测/ATC/传输,含批量与导出(新增于 2026-08-21) |
| @sparkelf/dsh-mobile-bridge 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@sparkelf/dsh-mobile-bridge | 872/月 | MIT | 2026-08-21 | 出站 E2EE 隧道 + 移动端呈现 + 一级 Mobile Bridge 设置区(新增于 2026-08-21) |
| @zseven-w/dsh-crew 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@zseven-w/dsh-crew | 413/月 | MIT | 2026-08-20 | 从 Claude Code / Codex 以原生子 agent 方式向 DSH agent 派发任务,实时进度(新增于 2026-08-21) |
| ds-harness-remote 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/ds-harness-remote | 574/月 | — | 2026-08-21 | DeepSeek harness 远程连接工具(新增于 2026-08-21) |
| dsh-tokensforce 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-tokensforce | 278/月 | MIT | 2026-08-20 | tokensforce 网关集成:登录引导、provider 配置与用量仪表盘页(新增于 2026-08-21) |
| Yash-Kavaiya/dsh-cxas 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Yash-Kavaiya/dsh-cxas | ⭐ 0 | Apache-2.0 | 2026-08-19 | 将 CXAS SCRAPI(cxas)CLI 暴露为模型侧工具:apps/deployments/evals/traces/pull-push/lint(新增于 2026-08-21) |

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

| fufankeji/deepseek-harness-studio 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/fufankeji/deepseek-harness-studio | ⭐ 158 | MIT | 2026-08-16 | DSH 零代码桌面端:一键启动,内置插件发现/热点推送/一键安装管理(新增于 2026-08-17) |
| lencx/Minke 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/lencx/Minke | ⭐ 289 | Apache-2.0 | 2026-08-21 | 🐳 DeepSeek Harness 桌面端(新增于 2026-08-21) |

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
| Anil-matcha/awesome-deepseek-harness 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Anil-matcha/awesome-deepseek-harness | ⭐ 923 | — | 2026-08-17 | DSH 及其最佳社区插件精选指南(新增于 2026-08-17) |
| imsai-sh/awesome-deepseek-harness-plugins 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/imsai-sh/awesome-deepseek-harness-plugins | ⭐ 50 | MIT | 2026-08-17 | DSH 插件商店/市场 hub:3100+ 插件搜索、排行、安装命令与免费公开 API(新增于 2026-08-17) |
| Anil-matcha/awesome-dsh-plugin 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Anil-matcha/awesome-dsh-plugin | ⭐ 964 | — | 2026-08-21 | DSH 插件生态精选列表(同作者 awesome-deepseek-harness 的姊妹篇)(新增于 2026-08-21) |

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

| nexu-io/open-design 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/nexu-io/open-design | ⭐ 87,548 | Apache-2.0 | 2026-08-16 | 开源 Claude Design 替代品,DSH 设计插件(新增于 2026-08-17) |
| @crazy_th/dsh-computer-use 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@crazy_th/dsh-computer-use | 1148/月 | MIT | 2026-08-15 | Windows 原生 Computer Use 工具集(新增于 2026-08-17) |
| dsh-context 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-context | 1022/月 | Apache-2.0 | 2026-08-16 | 上下文看板与 /context 命令,可视化上下文占用(新增于 2026-08-17) |
| dsh-graphlint 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-graphlint | 167/月 | MIT | 2026-08-16 | graphlint 死代码检测工具插件包(graphlint_* 工具)(新增于 2026-08-17) |
| dsh-multimodal-bridge 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-multimodal-bridge | 241/月 | MIT | 2026-08-16 | 多模态插件包:qwen_vision 图像理解与 qwen_generation 生成工具(新增于 2026-08-17) |
| dsh-smart-approval 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-smart-approval | 792/月 | MIT | 2026-08-16 | fail-closed 的 LLM 辅助审批审查器,默认拒绝(新增于 2026-08-17) |
| dsh-wechat-mp 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-wechat-mp | 278/月 | MIT | 2026-08-16 | 将 markdown 排版为微信公众号图文草稿(新增于 2026-08-17) |
| @icelily/dsh-gitbash-preset 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@icelily/dsh-gitbash-preset | 590/月 | MIT | 2026-08-16 | 安装 minimal-gitbash agent 预设(Windows 变体)(新增于 2026-08-17) |
| @laizhixingxingdeli/dsh-coagenthub 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@laizhixingxingdeli/dsh-coagenthub | 1356/月 | MIT | 2026-08-16 | 操作 CoAgentHub 的 DSH 插件:列参与者/建群/发消息(新增于 2026-08-17) |
| ZhenMoon/browser-auto 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/ZhenMoon/browser-auto | ⭐ 0 | MIT | 2026-08-16 | DSH 真实浏览器自动化:12 个浏览器模型工具(打开/截图等)(新增于 2026-08-17) |
| zhpingyun008/eve-dsh-plugins 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/zhpingyun008/eve-dsh-plugins | ⭐ 0 | — | 2026-08-16 | CMMI5 治理插件集:质量门禁 + 10 个流程插件(新增于 2026-08-17) |
| Devin-AXIS/deepseek-design 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Devin-AXIS/deepseek-design | ⭐ 62 | NOASSERTION | 2026-08-16 | DSH 可编辑设计系统:AI 生成、可视化编辑、模板市场与 PPT(新增于 2026-08-17) |
| dsh-full-remote 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-full-remote | 422/月 | MIT | 2026-08-17 | token 门控反向代理,公网隧道下保持设置、凭据与文件访问的远程访问插件(新增于 2026-08-17) |
| dsh-nocturne-memory 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-nocturne-memory | 284/月 | MIT | 2026-08-17 | Nocturne Memory 客户端:自动化长期记忆(启动/读取/搜索/创建/更新),基于自建 MCP server(新增于 2026-08-17) |
| dsh-cloudflare-browser-run 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-cloudflare-browser-run | 304/月 | MIT | 2026-08-17 | Cloudflare Browser Run 驱动的浏览工具(markdown/截图/PDF),真实无头 Chrome + JS 渲染(新增于 2026-08-17) |
| @dexthemes/deepseek-harness-plugin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@dexthemes/deepseek-harness-plugin | 533/月 | MIT | 2026-08-17 | DSH 主题插件:发现、预览、应用、恢复与回滚主题(新增于 2026-08-17) |
| dsh-multi-folder 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-multi-folder | 304/月 | MIT | 2026-08-17 | 为项目增加次级工作目录:agent 保持主工作区为 cwd,获得同等读写/执行权限(新增于 2026-08-17) |
| dsh-image-pathify 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-image-pathify | 127/月 | MIT | 2026-08-17 | 让纯文本模型接收粘贴图片,内置 OpenAI 兼容视觉分析工具(新增于 2026-08-17) |
| @pinkbanana/dsh-balance 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@pinkbanana/dsh-balance | 211/月 | MIT | 2026-08-17 | 设置页展示 API 余额与模型,并在聊天输入框下方显示余额(新增于 2026-08-17) |
| nexpeakcore/deepseek-harness-pr-review 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/nexpeakcore/deepseek-harness-pr-review | ⭐ 30 | MIT | 2026-08-17 | 基于 DSH headless 的 PR 审查自动化:逐条核验 PR 描述、文档与现实对照、人机协同+轮询+Web 仪表盘(新增于 2026-08-17) |
| @bleed00/dsh-claude-mem 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@bleed00/dsh-claude-mem | 480/月 | Apache-2.0 | 2026-08-14 | 接入本地 claude-mem 服务的记忆插件:查询 / 上下文注入 / 手动保存与会话生命周期(新增于 2026-08-21) |
| @dsh-plugin/dsh-auxiliary 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@dsh-plugin/dsh-auxiliary | 1623/月 | LGPL-3.0-only | 2026-08-21 | 用已配置模型提供器做图像分析与上下文压缩的辅助插件(新增于 2026-08-21) |
| @eric.wen/dsh-sight 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@eric.wen/dsh-sight | 431/月 | MIT | 2026-08-21 | 多模态直传插件:图片传输声明 + 按会话清图(surface replace),带设置页与输入框控制(新增于 2026-08-21) |
| @xinlongwu/dsh-github-reviewer 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@xinlongwu/dsh-github-reviewer | 1050/月 | Apache-2.0 | 2026-08-19 | GitHub PR 自动审查机器人(由 LingoBridge 移植)(新增于 2026-08-21) |
| dsh-akn-plugin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-akn-plugin | 201/月 | Apache-2.0 | 2026-08-20 | Agent Experience Network(AEXP 0.1)参考实现插件(新增于 2026-08-21) |
| dsh-all-search 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-all-search | 620/月 | MIT | 2026-08-19 | AnySearch 聚合搜索提供器(exa/tavily/firecrawl 经统一 MCP 网关)注册进 ctx.web(新增于 2026-08-21) |
| dsh-atuin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-atuin | 410/月 | MIT | 2026-08-13 | 将 Web UI 输入的用户提示词追加进 atuin shell 历史,便于搜索与 shell 集成(新增于 2026-08-21) |
| dsh-continual-harness 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-continual-harness | 837/月 | MIT | 2026-08-19 | 持续自进化插件:以小步证据驱动编辑沉淀提示笔记/记忆/技能契约/子 agent 规格(新增于 2026-08-21) |
| dsh-desktop-shortcut 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-desktop-shortcut | 1408/月 | MIT | 2026-08-18 | 创建启动 dsh web 的 Windows 桌面快捷方式(新增于 2026-08-21) |
| dsh-dev-crew 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-dev-crew | 503/月 | MIT | 2026-08-21 | 按角色与模型挂载子 agent 委托工具,各绑定独立 provider 路由(新增于 2026-08-21) |
| dsh-diff-approval 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-diff-approval | 896/月 | MIT | 2026-08-20 | 待审编辑审查:整文件 diff + Keep/Revert(新增于 2026-08-21) |
| dsh-harbor-evolution 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-harbor-evolution | 724/月 | MIT | 2026-08-20 | 配合 Harbor 安全演化 Cordis 候选插件的插件 + 技能包(新增于 2026-08-21) |
| dsh-onlyne 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-onlyne | 260/月 | MIT | 2026-08-13 | Onlyne IM 收件箱/发件箱,供 dsh agent 收发消息(新增于 2026-08-21) |
| dsh-quota 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-quota | 1089/月 | MIT | 2026-08-20 | 右下角会员额度徽标 + 面板:直连 Kimi/DeepSeek/智谱官方 API 查询各平台套餐额度(新增于 2026-08-21) |
| dsh-rewind-plugin 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-rewind-plugin | 3025/月 | MIT | 2026-08-21 | 同会话窗口内原地对话回退(Claude Code /rewind 语义),可选恢复工作区文件(新增于 2026-08-21) |
| dsh-session-cleanup 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-session-cleanup | 126/月 | MIT | 2026-08-20 | 交互式会话清理与 /nix 命令(pi-tui/dsh-tui),灵感来自 pi-session-cleanup(新增于 2026-08-21) |
| dsh-ui-spec 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/dsh-ui-spec | 139/月 | MIT | 2026-08-21 | 将 UI 截图转成可实现级 Web 规格:OCR + 确定性几何 + 场景图 + 渲染对比(新增于 2026-08-21) |
| oss-prompt-optimizer 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/oss-prompt-optimizer | 1174/月 | MIT | 2026-08-21 | 将原始指令优化为专业 Role/Task/Context/Format 提示词的插件包,走 harness LLM 服务(新增于 2026-08-21) |
| Small-tailqwq/dsh-deep-whale 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/Small-tailqwq/dsh-deep-whale | ⭐ 1,527 | — | 2026-08-21 | 适用于 DSH 的鲸鱼娘系列皮肤(新增于 2026-08-21) |
| yuanwang589-dev/deepseek-harness-quant 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/yuanwang589-dev/deepseek-harness-quant | ⭐ 65 | NOASSERTION | 2026-08-17 | A 股低频量化决策系统:Pitch 决策链 + 因子引擎 + 五池远期验证,嵌入 HARNESS(新增于 2026-08-21) |

### 账户 / 安全 / 其他

| 名称 | 类型 | 来源 | URL | stars/下载量 | 许可证 | 最近更新 | 简介 |
|---|---|---|---|---|---|---|---|
| deepseek-harness-wallet 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/deepseek-harness-wallet | 333/月 | MIT | 2026-08-16 | 本地优先的账户监控、用量记账、官方充值与额度提醒(新增于 2026-08-17) |
| @tokenharbor/halyard 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@tokenharbor/halyard | 2249/月 | MIT | 2026-08-15 | 基于 DeepSeek Harness 构建、对接 Token Harbor 的 agent harness(新增于 2026-08-17) |
| metavibe-dsh 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/metavibe-dsh | 519/月 | MIT | 2026-08-16 | MetaVibe 原生 DSH 插件:只读黄金架构地图(hub)与导航(新增于 2026-08-17) |
| zoahdev/dsh-poison-guard 🆕 | GitHub 仓库 | GitHub 搜索 | https://github.com/zoahdev/dsh-poison-guard | ⭐ 0 | MIT | 2026-08-16 | 安装前供应链投毒扫描器:AST(JS-X-Ray)静态分析 DSH 插件(新增于 2026-08-17) |
| @agentmentor/install 🆕 | npm 包 | npm 搜索 | https://www.npmjs.com/package/@agentmentor/install | 746/月 | proprietary | 2026-08-16 | Agent Mentor DSH 插件的公开安装器(插件本体为私有分发)(新增于 2026-08-17) |

---

## 备注

- **数据加载与处理**分类本次未发现直接相关条目。
- 已排除的常见干扰项:`@ai-sdk/deepseek`、`@langchain/deepseek`、`deepseek-mcp-server`、`n8n-nodes-deepseek`、`deepseek-cli`、`deepseek-chat`、`deepseek-kit` 等(纯 DeepSeek API SDK/聊天/代理类,与 DSH 无关);`@react-native-harness/*`、`agentic-flow`、`@metaharness/*`、`metaharness`、`reasonix`、`CodeWhale`、`CowAgent` 等(同名/泛化 "harness",非 DSH 生态)。
- 本轮(第 5 次)边界核实:`sandbaseai/sandbase-harness` 经仓库详情确认含 "native DeepSeek Harness bundle over stdio MCP",故收录于集成适配器;`nexpeakcore/deepseek-harness-pr-review` 基于 DSH headless 运行,收录于功能插件;`Prism-Shadow/penguin-harness`(RSI 泛化 harness)、`Nagi-ovo/voyager`(多引擎增强套件)、`plugin-manager-mcp`、`@sushanglewis/lincoln`、`@super-harness/server` 等均无 DSH 关联,未收录。
- `morlay/deepseek-harness` 已重定向废弃(指向 playpen),未收录。
- 本轮(第 6 次,2026-08-21):新增 40 条(官方 npm 3 + 社区 npm 25 + GitHub 12),无移除;对旧清单 114 个 npm 条目全量 HEAD 存活校验全部通过,仅修正 `laizhixingxingdeli/dsh-coagenthub` → `@laizhixingxingdeli/dsh-coagenthub`(漏写 @ 前缀,不计数为新增)。边界核实:`Heathcliff-1104/coding-agent-harness-eval`(DSH 参与的三方实测对比)、`yuanwang589-dev/deepseek-harness-quant`(名称含 HARNESS 且描述称嵌入 HARNESS 的量化系统)按直接关联收录于测试与评估/其他;`lencx/Minke` 经仓库详情确认为 DSH 桌面端;`MemTensor/MemOS`(通用记忆 OS)、`zhukunpenglinyutong/desktop-cc-gui`(多引擎套件,沿用既往结论)、`Nagi-ovo/voyager`、`Prism-Shadow/penguin-harness`、`@a5c-ai/*`(跨 harness 编译器,非 DSH 专属)、`vitest-evals`、`plugin-manager-mcp` 等未收录。
