/* DeepSeek Harness 插件市场 — 前端逻辑 (无依赖, 支持中/英双语) */
(function () {
  "use strict";

  /* ================= I18N ================= */
  const I18N = {
    zh: {
      title: "DeepSeek Harness 插件市场",
      metaDesc: "DeepSeek Harness (DSH) 生态插件、扩展、任务包与集成工具市场 — 查询、筛选、详情与下载。",
      brandMarket: "插件市场",
      brandSub: "Everything is a Plugin · 查询 / 详情 / 下载",
      statsPlugins: "插件",
      statsRepos: "GitHub 仓库",
      statsPackages: "npm 包",
      statsStars: "星标",
      searchPlaceholder: "搜索插件名称、简介、主题标签、作者…",
      clearSearch: "清空搜索",
      sortLabel: "排序方式",
      sort_default: "综合排序",
      sort_stars: "星标最多",
      sort_downloads: "下载量最多",
      sort_updated: "最近更新",
      sort_name: "名称 A–Z",
      type_all: "全部",
      type_repo: "GitHub 仓库",
      type_package: "npm 包",
      count: (n, q) => `共 <b>${n}</b> 个插件${q ? `，匹配「<b>${esc(q)}</b>」` : ""}`,
      noResultTitle: "没有找到匹配的插件",
      noResultDesc: "试试更换关键词或清除筛选条件。",
      resetFilters: "清除所有筛选",
      footerSource: "数据来源：npm registry 搜索 API 与 GitHub 搜索 API",
      updated: "更新",
      perMonth: "/月",
      noDesc: "暂无简介",
      badgeNew: "新",
      badgeNewFull: "新收录",
      detail: "详情",
      download: "下载",
      downloadZip: "下载 ZIP",
      downloadTar: "下载 tar.gz",
      downloadTgz: "下载 .tgz",
      repoPage: "GitHub 仓库",
      npmPage: "npm 页面",
      homepage: "主页",
      descLabel: "简介",
      descSecondLabel: "英文简介",
      installRepo: "克隆 / 安装命令",
      installPkg: "安装命令",
      copy: "复制",
      copied: "已复制到剪贴板 ✓",
      copyFail: "复制失败，请手动复制",
      topics: "主题标签",
      f_type: "类型",
      f_category: "分类",
      f_source: "来源",
      f_license: "许可证",
      f_updated: "最近更新",
      f_language: "编程语言",
      f_stars: "星标 Star",
      f_forks: "Fork",
      f_downloads: "月下载量",
      f_version: "最新版本",
      f_publisher: "发布者",
      generated: "生成时间：",
      dataError: "数据加载失败：缺少 data.js 或 PLUGIN_DATA。",
      close: "关闭",
      statsAria: "统计",
      filterAria: "筛选与搜索",
      typeAria: "类型筛选",
      catAria: "分类筛选",
    },
    en: {
      title: "DeepSeek Harness Plugin Market",
      metaDesc: "Marketplace of plugins, extensions, task packs and integration tools for the DeepSeek Harness (DSH) ecosystem — search, filter, inspect and download.",
      brandMarket: "Plugin Market",
      brandSub: "Everything is a Plugin · Search / Details / Download",
      statsPlugins: "Plugins",
      statsRepos: "GitHub Repos",
      statsPackages: "npm Packages",
      statsStars: "Stars",
      searchPlaceholder: "Search plugins by name, description, topics, author…",
      clearSearch: "Clear search",
      sortLabel: "Sort by",
      sort_default: "Recommended",
      sort_stars: "Most stars",
      sort_downloads: "Most downloads",
      sort_updated: "Recently updated",
      sort_name: "Name A–Z",
      type_all: "All",
      type_repo: "GitHub Repos",
      type_package: "npm Packages",
      count: (n, q) => `<b>${n}</b> plugin${n === 1 ? "" : "s"}${q ? ` matching “<b>${esc(q)}</b>”` : ""}`,
      noResultTitle: "No plugins found",
      noResultDesc: "Try different keywords or clear the filters.",
      resetFilters: "Clear all filters",
      footerSource: "Data source: npm registry search API & GitHub search API",
      updated: "Updated",
      perMonth: "/mo",
      noDesc: "No description",
      badgeNew: "New",
      badgeNewFull: "Newly added",
      detail: "Details",
      download: "Download",
      downloadZip: "Download ZIP",
      downloadTar: "Download tar.gz",
      downloadTgz: "Download .tgz",
      repoPage: "GitHub repo",
      npmPage: "npm page",
      homepage: "Homepage",
      descLabel: "Description",
      descSecondLabel: "中文简介",
      installRepo: "Clone / Install command",
      installPkg: "Install command",
      copy: "Copy",
      copied: "Copied to clipboard ✓",
      copyFail: "Copy failed, please copy manually",
      topics: "Topics",
      f_type: "Type",
      f_category: "Category",
      f_source: "Source",
      f_license: "License",
      f_updated: "Last updated",
      f_language: "Language",
      f_stars: "Stars",
      f_forks: "Forks",
      f_downloads: "Monthly downloads",
      f_version: "Latest version",
      f_publisher: "Publisher",
      generated: "Generated: ",
      dataError: "Failed to load data: missing data.js or PLUGIN_DATA.",
      close: "Close",
      statsAria: "Statistics",
      filterAria: "Filter and search",
      typeAria: "Filter by type",
      catAria: "Filter by category",
    },
  };

  let lang = "zh";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "zh" || saved === "en") lang = saved;
    else lang = (navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en";
  } catch (_) { /* localStorage unavailable */ }

  const t = (key, ...args) => {
    const v = I18N[lang] && I18N[lang][key];
    return typeof v === "function" ? v(...args) : (v != null ? v : key);
  };

  const DATA = window.PLUGIN_DATA;
  if (!DATA || !Array.isArray(DATA.plugins)) {
    document.body.innerHTML = "<p style='padding:40px;text-align:center'>" + t("dataError") + "</p>";
    return;
  }

  const plugins = DATA.plugins;
  const state = { query: "", category: "全部", type: "all", sort: "default" };

  /* category zh -> en lookup (from generated data) */
  const catEn = {};
  (DATA.categories || []).forEach((c, i) => { catEn[c] = (DATA.categories_en || [])[i] || c; });
  const catLabel = (c) => (lang === "zh" ? c : catEn[c] || c);

  /* ---------- DOM ---------- */
  const $ = (id) => document.getElementById(id);
  const els = {
    search: $("searchInput"),
    clear: $("clearSearch"),
    sort: $("sortSelect"),
    chips: $("categoryChips"),
    grid: $("grid"),
    empty: $("emptyState"),
    count: $("resultCount"),
    stats: $("headerStats"),
    generated: $("generatedAt"),
    backdrop: $("modalBackdrop"),
    body: $("detailBody"),
    close: $("modalClose"),
    toast: $("toast"),
    reset: $("resetFilters"),
  };

  /* ---------- Helpers ---------- */
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  const compact = (n) => {
    if (n == null) return "—";
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(n);
  };

  const fullNum = (n) => (n == null ? "—" : n.toLocaleString("en-US"));

  const svg = {
    star: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.9 6.26 6.6.56-5 4.4 1.5 6.5L12 16.9 6 19.72l1.5-6.5-5-4.4 6.6-.56L12 2z"/></svg>',
    download: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/></svg>',
    git: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M18 9v6M9 6h6M9 18h6"/></svg>',
    box: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
    link: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.5-1.5"/></svg>',
  };

  /* ---------- Language switch ---------- */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    els.search.placeholder = t("searchPlaceholder");
    document.querySelectorAll("#sortSelect option").forEach((o) => {
      o.textContent = t("sort_" + o.value);
    });
    document.querySelectorAll(".lang-btn").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    document.title = t("title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t("metaDesc");
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (_) { /* ignore */ }
    applyStatic();
    renderStats();
    renderChips();
    render();
    refreshGenerated();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  /* ---------- Header stats ---------- */
  function renderStats() {
    const chips = [
      { dot: "blue", label: t("statsPlugins"), val: String(DATA.total) },
      { dot: "green", label: t("statsRepos"), val: String(DATA.repos) },
      { dot: "violet", label: t("statsPackages"), val: String(DATA.packages) },
      { dot: "amber", label: t("statsStars"), val: compact(DATA.total_stars) },
    ];
    els.stats.innerHTML = chips
      .map((c) => `<span class="stat-chip"><span class="dot ${c.dot}"></span>${esc(c.label)} <b>${esc(c.val)}</b></span>`)
      .join("");
  }

  /* ---------- Category chips ---------- */
  function renderChips() {
    const counts = {};
    plugins.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    const ordered = DATA.categories.filter((c) => counts[c] != null);
    const chips = [{ label: t("type_all"), key: "全部", count: plugins.length }]
      .concat(ordered.map((c) => ({ label: catLabel(c), key: c, count: counts[c] })));
    els.chips.innerHTML = chips
      .map((c) => `<button class="chip${state.category === c.key ? " active" : ""}" data-cat="${esc(c.key)}">${esc(c.label)}<span class="count">${c.count}</span></button>`)
      .join("");
  }

  /* ---------- Filter & sort ---------- */
  function searchText(p) {
    return [
      p.name, p.display_name, p.owner, p.repo,
      p.description, p.description_zh,
      p.category, p.category_en, p.publisher,
      (p.topics || []).join(" "),
      (p.keywords || []).join(" "),
    ].join(" ").toLowerCase();
  }

  function filtered() {
    const q = state.query.trim().toLowerCase();
    let list = plugins.filter((p) => {
      if (state.type !== "all" && p.type !== state.type) return false;
      if (state.category !== "全部" && p.category !== state.category) return false;
      if (q && !searchText(p).includes(q)) return false;
      return true;
    });

    const metric = (p) => (p.type === "repo" ? (p.stars || 0) : (p.downloads_monthly || 0));
    const upd = (p) => (p.updated || "");

    const sorters = {
      default: (a, b) => metric(b) - metric(a),
      stars: (a, b) => (b.stars || 0) - (a.stars || 0) || (b.downloads_monthly || 0) - (a.downloads_monthly || 0),
      downloads: (a, b) => (b.downloads_monthly || 0) - (a.downloads_monthly || 0) || (b.stars || 0) - (a.stars || 0),
      updated: (a, b) => upd(b).localeCompare(upd(a)),
      name: (a, b) => a.name.localeCompare(b.name),
    };
    return list.sort(sorters[state.sort] || sorters.default);
  }

  /* ---------- Cards ---------- */
  function typeBadge(p) {
    return p.type === "repo"
      ? `<span class="badge type-repo">${svg.git} GitHub</span>`
      : `<span class="badge type-package">${svg.box} npm</span>`;
  }

  function cardDesc(p) {
    return lang === "zh"
      ? (p.description_zh || p.description || t("noDesc"))
      : (p.description || p.description_zh || t("noDesc"));
  }

  function metaRow(p) {
    const parts = [];
    if (p.stars != null) parts.push(`<span class="meta-item stars">${svg.star}${compact(p.stars)}</span>`);
    if (p.downloads_monthly != null) parts.push(`<span class="meta-item downloads">${svg.download}${compact(p.downloads_monthly)}${t("perMonth")}</span>`);
    if (p.language) parts.push(`<span class="meta-item">${esc(p.language)}</span>`);
    parts.push(`<span class="meta-item">${t("updated")} ${esc(p.updated || "—")}</span>`);
    return parts.join("");
  }

  function cardTemplate(p) {
    const topics = (p.topics || []).slice(0, 4);
    const icon = p.type === "repo" ? "▣" : "⬡";
    return `
      <article class="card">
        <div class="card-top">
          <div class="card-icon ${p.type}">${icon}</div>
          <div class="card-title-wrap">
            <h3 class="card-title"><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.display_name || p.name)}</a></h3>
            <div class="card-badges">
              ${typeBadge(p)}
              <span class="badge category">${esc(catLabel(p.category || "其他"))}</span>
              ${p.is_new ? `<span class="badge new">${esc(t("badgeNew"))}</span>` : ""}
              ${p.license ? `<span class="badge license">${esc(p.license)}</span>` : ""}
            </div>
          </div>
        </div>
        <p class="card-desc">${esc(cardDesc(p))}</p>
        <div class="card-meta">${metaRow(p)}</div>
        ${topics.length ? `<div class="card-topics">${topics.map((x) => `<span class="topic">${esc(x)}</span>`).join("")}</div>` : ""}
        <div class="card-actions">
          <button class="btn btn-ghost btn-block" data-action="detail" data-id="${esc(p.id)}">${esc(t("detail"))}</button>
          <a class="btn btn-primary btn-block" href="${esc(p.download_url || p.url)}" target="_blank" rel="noopener noreferrer">${svg.download} ${esc(t("download"))}</a>
        </div>
      </article>`;
  }

  function render() {
    const list = filtered();
    els.count.innerHTML = t("count", list.length, state.query.trim());
    els.grid.innerHTML = list.map(cardTemplate).join("");
    els.empty.hidden = list.length !== 0;
    els.grid.hidden = list.length === 0;
    els.clear.hidden = state.query.length === 0;
  }

  /* ---------- Detail modal ---------- */
  function detailTemplate(p) {
    const icon = p.type === "repo" ? "▣" : "⬡";
    const install = p.install_command || (p.type === "repo" ? `git clone ${p.url}.git` : `npm install ${p.name}`);

    const typeL = lang === "zh" ? (p.type_label || "") : (p.type_label_en || p.type_label || "");
    const srcL = lang === "zh" ? (p.source || "—") : (p.source_en || p.source || "—");

    const cells = [
      [t("f_type"), typeL, false],
      [t("f_category"), catLabel(p.category || "其他"), false],
      [t("f_source"), srcL, false],
      [t("f_license"), p.license || "—", true],
      [t("f_updated"), p.updated || "—", true],
      [t("f_language"), p.language || "—", false],
    ];
    if (p.stars != null) cells.push([t("f_stars"), fullNum(p.stars), false]);
    if (p.forks != null) cells.push([t("f_forks"), fullNum(p.forks), false]);
    if (p.downloads_monthly != null) cells.push([t("f_downloads"), fullNum(p.downloads_monthly), false]);
    if (p.version) cells.push([t("f_version"), p.version, true]);
    if (p.publisher) cells.push([t("f_publisher"), p.publisher, false]);

    const links = [];
    links.push(`<a class="link-btn" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${svg.link} ${p.type === "repo" ? t("repoPage") : t("npmPage")}</a>`);
    if (p.homepage && p.homepage !== p.url) links.push(`<a class="link-btn" href="${esc(p.homepage)}" target="_blank" rel="noopener noreferrer">${svg.link} ${t("homepage")}</a>`);

    const downloadBtns = [];
    if (p.type === "repo") {
      downloadBtns.push(`<a class="btn btn-primary" href="${esc(p.download_url)}" target="_blank" rel="noopener noreferrer">${svg.download} ${t("downloadZip")}</a>`);
      if (p.tarball_url) downloadBtns.push(`<a class="btn btn-ghost" href="${esc(p.tarball_url)}" target="_blank" rel="noopener noreferrer">${svg.download} ${t("downloadTar")}</a>`);
    } else {
      downloadBtns.push(`<a class="btn btn-primary" href="${esc(p.download_url || p.url)}" target="_blank" rel="noopener noreferrer">${svg.download} ${t("downloadTgz")}</a>`);
      downloadBtns.push(`<a class="btn btn-ghost" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${svg.box} ${t("npmPage")}</a>`);
    }

    const topics = (p.topics || []).concat(p.type === "package" ? (p.keywords || []) : []).slice(0, 12);

    const descPrimary = lang === "zh" ? p.description_zh : p.description;
    const descSecond = lang === "zh" ? p.description : p.description_zh;

    return `
      <div class="detail-head">
        <div class="detail-icon ${p.type}">${icon}</div>
        <div>
          <h2 class="detail-title" id="detailTitle">${esc(p.name)}</h2>
          <div class="detail-badges">
            ${typeBadge(p)}
            <span class="badge category">${esc(catLabel(p.category || "其他"))}</span>
            ${p.is_new ? `<span class="badge new">${esc(t("badgeNewFull"))}</span>` : ""}
            ${p.license ? `<span class="badge license">${esc(p.license)}</span>` : ""}
          </div>
        </div>
      </div>

      <div class="detail-desc">
        <h3>${esc(t("descLabel"))}</h3>
        ${descPrimary ? `<p>${esc(descPrimary)}</p>` : ""}
        ${descSecond ? `<p class="en">${esc(descSecond)}</p>` : ""}
        ${!descPrimary && !descSecond ? `<p>${esc(t("noDesc"))}.</p>` : ""}
      </div>

      <div class="detail-actions">${downloadBtns.join("")}</div>

      <div class="install-box">
        <div class="install-head">
          <span>${p.type === "repo" ? t("installRepo") : t("installPkg")}</span>
          <button class="copy-btn" data-copy="${esc(install)}">${esc(t("copy"))}</button>
        </div>
        <code>${esc(install)}</code>
      </div>

      <div class="detail-meta-table">
        ${cells.map(([k, v, mono]) => `<div class="meta-cell"><span class="k">${esc(k)}</span><span class="v${mono ? " mono" : ""}">${esc(v)}</span></div>`).join("")}
      </div>

      ${topics.length ? `<div class="detail-topics"><h3>${esc(t("topics"))}</h3>${topics.map((x) => `<span class="topic">${esc(x)}</span>`).join("")}</div>` : ""}
      ${links.length ? `<div class="detail-links">${links.join("")}</div>` : ""}
    `;
  }

  function openDetail(id) {
    const p = plugins.find((x) => x.id === id);
    if (!p) return;
    els.body.innerHTML = detailTemplate(p);
    els.backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDetail() {
    els.backdrop.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1800);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast(t("copied"));
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast(t("copied")); }
      catch { toast(t("copyFail")); }
      document.body.removeChild(ta);
    }
  }

  /* ---------- Generated time ---------- */
  function refreshGenerated() {
    const locale = lang === "zh" ? "zh-CN" : "en-US";
    els.generated.textContent = t("generated") + (DATA.generated ? new Date(DATA.generated).toLocaleString(locale) : "—");
  }

  /* ---------- Events ---------- */
  let debounce;
  els.search.addEventListener("input", (e) => {
    state.query = e.target.value;
    clearTimeout(debounce);
    debounce = setTimeout(render, 120);
  });

  els.clear.addEventListener("click", () => {
    state.query = "";
    els.search.value = "";
    render();
    els.search.focus();
  });

  els.sort.addEventListener("change", (e) => { state.sort = e.target.value; render(); });

  document.querySelectorAll(".type-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".type-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.type = btn.dataset.type;
      render();
    });
  });

  els.chips.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.category = chip.dataset.cat;
    renderChips();
    render();
  });

  els.grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='detail']");
    if (btn) openDetail(btn.dataset.id);
  });

  els.body.addEventListener("click", (e) => {
    const copy = e.target.closest("[data-copy]");
    if (copy) copyText(copy.dataset.copy);
  });

  els.close.addEventListener("click", closeDetail);
  els.backdrop.addEventListener("click", (e) => { if (e.target === els.backdrop) closeDetail(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !els.backdrop.hidden) closeDetail(); });

  els.reset.addEventListener("click", () => {
    state.query = ""; state.category = "全部"; state.type = "all"; state.sort = "default";
    els.search.value = ""; els.sort.value = "default";
    document.querySelectorAll(".type-btn").forEach((b) => b.classList.toggle("active", b.dataset.type === "all"));
    renderChips();
    render();
  });

  /* ---------- Boot ---------- */
  applyStatic();
  renderStats();
  renderChips();
  render();
  refreshGenerated();
})();
