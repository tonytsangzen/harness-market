/* DeepSeek Harness 插件市场 — 前端逻辑 (无依赖) */
(function () {
  "use strict";

  const DATA = window.PLUGIN_DATA;
  if (!DATA || !Array.isArray(DATA.plugins)) {
    document.body.innerHTML = "<p style='padding:40px;text-align:center'>数据加载失败：缺少 data.js 或 PLUGIN_DATA。</p>";
    return;
  }

  const plugins = DATA.plugins;
  const state = { query: "", category: "全部", type: "all", sort: "default" };

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

  /* ---------- Header stats ---------- */
  function renderStats() {
    const chips = [
      { dot: "blue", label: "插件", val: String(DATA.total) },
      { dot: "green", label: "GitHub 仓库", val: String(DATA.repos) },
      { dot: "violet", label: "npm 包", val: String(DATA.packages) },
      { dot: "amber", label: "星标", val: compact(DATA.total_stars) },
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
    const chips = [{ label: "全部", key: "全部", count: plugins.length }]
      .concat(ordered.map((c) => ({ label: c, key: c, count: counts[c] })));
    els.chips.innerHTML = chips
      .map((c) => `<button class="chip${state.category === c.key ? " active" : ""}" data-cat="${esc(c.key)}">${esc(c.label)}<span class="count">${c.count}</span></button>`)
      .join("");
  }

  /* ---------- Filter & sort ---------- */
  function searchText(p) {
    return [
      p.name, p.display_name, p.owner, p.repo,
      p.description, p.description_zh,
      p.category, p.publisher,
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

  function metaRow(p) {
    const parts = [];
    if (p.stars != null) parts.push(`<span class="meta-item stars">${svg.star}${compact(p.stars)}</span>`);
    if (p.downloads_monthly != null) parts.push(`<span class="meta-item downloads">${svg.download}${compact(p.downloads_monthly)}/月</span>`);
    if (p.language) parts.push(`<span class="meta-item">${esc(p.language)}</span>`);
    parts.push(`<span class="meta-item">更新 ${esc(p.updated || "—")}</span>`);
    return parts.join("");
  }

  function cardTemplate(p) {
    const desc = p.description_zh || p.description || "暂无简介";
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
              <span class="badge category">${esc(p.category || "其他")}</span>
              ${p.is_new ? '<span class="badge new">新</span>' : ""}
              ${p.license ? `<span class="badge license">${esc(p.license)}</span>` : ""}
            </div>
          </div>
        </div>
        <p class="card-desc">${esc(desc)}</p>
        <div class="card-meta">${metaRow(p)}</div>
        ${topics.length ? `<div class="card-topics">${topics.map((t) => `<span class="topic">${esc(t)}</span>`).join("")}</div>` : ""}
        <div class="card-actions">
          <button class="btn btn-ghost btn-block" data-action="detail" data-id="${esc(p.id)}">详情</button>
          <a class="btn btn-primary btn-block" href="${esc(p.download_url || p.url)}" target="_blank" rel="noopener noreferrer">${svg.download} 下载</a>
        </div>
      </article>`;
  }

  function render() {
    const list = filtered();
    els.count.innerHTML = `共 <b>${list.length}</b> 个插件${state.query.trim() ? `，匹配「<b>${esc(state.query.trim())}</b>」` : ""}`;
    els.grid.innerHTML = list.map(cardTemplate).join("");
    els.empty.hidden = list.length !== 0;
    els.grid.hidden = list.length === 0;
    els.clear.hidden = state.query.length === 0;
  }

  /* ---------- Detail modal ---------- */
  function detailTemplate(p) {
    const icon = p.type === "repo" ? "▣" : "⬡";
    const install = p.install_command || (p.type === "repo" ? `git clone ${p.url}.git` : `npm install ${p.name}`);

    const cells = [
      ["类型", p.type_label, false],
      ["分类", p.category || "其他", false],
      ["来源", p.source || "—", false],
      ["许可证", p.license || "—", true],
      ["最近更新", p.updated || "—", true],
      ["编程语言", p.language || "—", false],
    ];
    if (p.stars != null) cells.push(["星标 Star", fullNum(p.stars), false]);
    if (p.forks != null) cells.push(["Fork", fullNum(p.forks), false]);
    if (p.downloads_monthly != null) cells.push(["月下载量", fullNum(p.downloads_monthly), false]);
    if (p.version) cells.push(["最新版本", p.version, true]);
    if (p.publisher) cells.push(["发布者", p.publisher, false]);

    const links = [];
    links.push(`<a class="link-btn" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${svg.link} ${p.type === "repo" ? "GitHub 仓库" : "npm 页面"}</a>`);
    if (p.homepage && p.homepage !== p.url) links.push(`<a class="link-btn" href="${esc(p.homepage)}" target="_blank" rel="noopener noreferrer">${svg.link} 主页</a>`);

    const downloadBtns = [];
    if (p.type === "repo") {
      downloadBtns.push(`<a class="btn btn-primary" href="${esc(p.download_url)}" target="_blank" rel="noopener noreferrer">${svg.download} 下载 ZIP</a>`);
      if (p.tarball_url) downloadBtns.push(`<a class="btn btn-ghost" href="${esc(p.tarball_url)}" target="_blank" rel="noopener noreferrer">${svg.download} 下载 tar.gz</a>`);
    } else {
      downloadBtns.push(`<a class="btn btn-primary" href="${esc(p.download_url || p.url)}" target="_blank" rel="noopener noreferrer">${svg.download} 下载 .tgz</a>`);
      downloadBtns.push(`<a class="btn btn-ghost" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${svg.box} npm 页面</a>`);
    }

    const topics = (p.topics || []).concat(p.type === "package" ? (p.keywords || []) : []).slice(0, 12);

    return `
      <div class="detail-head">
        <div class="detail-icon ${p.type}">${icon}</div>
        <div>
          <h2 class="detail-title" id="detailTitle">${esc(p.name)}</h2>
          <div class="detail-badges">
            ${typeBadge(p)}
            <span class="badge category">${esc(p.category || "其他")}</span>
            ${p.is_new ? '<span class="badge new">新收录</span>' : ""}
            ${p.license ? `<span class="badge license">${esc(p.license)}</span>` : ""}
          </div>
        </div>
      </div>

      <div class="detail-desc">
        <h3>简介</h3>
        ${p.description_zh ? `<p>${esc(p.description_zh)}</p>` : ""}
        ${p.description ? `<p class="en">${esc(p.description)}</p>` : ""}
        ${!p.description_zh && !p.description ? "<p>暂无简介。</p>" : ""}
      </div>

      <div class="detail-actions">${downloadBtns.join("")}</div>

      <div class="install-box">
        <div class="install-head">
          <span>${p.type === "repo" ? "克隆 / 安装命令" : "安装命令"}</span>
          <button class="copy-btn" data-copy="${esc(install)}">复制</button>
        </div>
        <code>${esc(install)}</code>
      </div>

      <div class="detail-meta-table">
        ${cells.map(([k, v, mono]) => `<div class="meta-cell"><span class="k">${esc(k)}</span><span class="v${mono ? " mono" : ""}">${esc(v)}</span></div>`).join("")}
      </div>

      ${topics.length ? `<div class="detail-topics"><h3>主题标签</h3>${topics.map((t) => `<span class="topic">${esc(t)}</span>`).join("")}</div>` : ""}
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
      toast("已复制到剪贴板 ✓");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast("已复制到剪贴板 ✓"); }
      catch { toast("复制失败，请手动复制"); }
      document.body.removeChild(ta);
    }
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
  renderStats();
  renderChips();
  render();
  els.generated.textContent = "生成时间：" + (DATA.generated ? new Date(DATA.generated).toLocaleString("zh-CN") : "—");
})();
