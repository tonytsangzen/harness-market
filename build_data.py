#!/usr/bin/env python3
"""Build site/data.js from plugins-inventory.md + raw npm/GitHub search JSON.

The curated inventory (plugins-inventory.md) is the authoritative "organized
plugin info"; the raw JSON files enrich it with exact stars, downloads, version,
language, topics, publisher, etc. Output is a browser-global `window.PLUGIN_DATA`
so the static site works from file:// or any static server (no fetch/CORS).
"""
import json
import os
import re
from datetime import datetime, timezone

BASE = os.path.dirname(os.path.abspath(__file__))
GH_FILES = ["gh1.json", "gh2.json", "gh3.json"]
NPM_FILES = [
    "npm_deepseek-harness.json",
    "npm_deepseek_eval.json",
    "npm_dh.json",
    "npm_ds-harness.json",
    "npm_harness_plugin.json",
]
INVENTORY = "plugins-inventory.md"
OUT = os.path.join("site", "data.js")


# --------------------------------------------------------------------------- #
# Load raw GitHub / npm search results
# --------------------------------------------------------------------------- #
def load_github():
    repos = {}
    for f in GH_FILES:
        with open(os.path.join(BASE, f), encoding="utf-8") as fh:
            data = json.load(fh)
        for it in data.get("items", []):
            full_name = it.get("full_name")
            if not full_name:
                continue
            lic = it.get("license") or {}
            repos[full_name] = {
                "full_name": full_name,
                "owner": (full_name.split("/")[0] if "/" in full_name else ""),
                "repo": (full_name.split("/")[1] if "/" in full_name else full_name),
                "html_url": it.get("html_url"),
                "description": it.get("description"),
                "stargazers_count": it.get("stargazers_count", 0),
                "forks_count": it.get("forks_count", 0),
                "open_issues_count": it.get("open_issues_count", 0),
                "language": it.get("language"),
                "license": lic.get("spdx_id") or lic.get("key") or None,
                "license_name": lic.get("name"),
                "topics": it.get("topics") or [],
                "updated_at": it.get("updated_at"),
                "created_at": it.get("created_at"),
                "pushed_at": it.get("pushed_at"),
                "default_branch": it.get("default_branch") or "master",
                "homepage": it.get("homepage"),
                "archived": it.get("archived", False),
            }
    return repos


def load_npm():
    pkgs = {}
    for f in NPM_FILES:
        with open(os.path.join(BASE, f), encoding="utf-8") as fh:
            data = json.load(fh)
        for obj in data.get("objects", []):
            pkg = obj.get("package", {})
            name = pkg.get("name")
            if not name:
                continue
            pub = pkg.get("publisher") or {}
            downloads = obj.get("downloads") or {}
            links = pkg.get("links") or {}
            pkgs[name] = {
                "name": name,
                "version": pkg.get("version"),
                "description": pkg.get("description"),
                "license": pkg.get("license"),
                "keywords": pkg.get("keywords") or [],
                "date": pkg.get("date"),
                "downloads_monthly": downloads.get("monthly", 0),
                "downloads_weekly": downloads.get("weekly", 0),
                "dependents": obj.get("dependents", 0),
                "publisher": pub.get("username"),
                "publisher_email": pub.get("email"),
                "homepage": links.get("homepage"),
                "repository": links.get("repository"),
                "npm_url": links.get("npm") or f"https://www.npmjs.com/package/{name}",
            }
    return pkgs


# --------------------------------------------------------------------------- #
# Parse curated inventory markdown
# --------------------------------------------------------------------------- #
SEP_RE = re.compile(r"^\|(\s*:?-+:?\s*\|)+\s*$")


def parse_inventory():
    entries = []
    section = None
    subsection = None
    with open(os.path.join(BASE, INVENTORY), encoding="utf-8") as fh:
        lines = fh.readlines()

    for line in lines:
        s = line.rstrip("\n")
        if s.startswith("## "):
            section = s[3:].strip()
            subsection = None
            continue
        if s.startswith("### "):
            subsection = s[4:].strip()
            continue
        if not s.startswith("|"):
            continue
        if SEP_RE.match(s):
            continue
        if "名称" in s or "类型" in s:
            continue  # header row
        cols = [c.strip() for c in s.strip("|").split("|")]
        if len(cols) < 8:
            continue
        # category: subsection wins, else section stripped of parenthetical
        if subsection:
            cat = subsection
        else:
            cat = section.split("(")[0].strip() if section else ""
        name = re.sub(r"\s*🆕\s*$", "", cols[0]).strip()
        entries.append(
            {
                "name": name,
                "type": cols[1],
                "source": cols[2],
                "url": cols[3],
                "stars_or_dl": cols[4],
                "license": cols[5],
                "updated": cols[6],
                "desc_zh": cols[7],
                "category": cat,
            }
        )
    return entries


def parse_stars_or_dl(cell):
    cell = cell.strip()
    if cell == "—" or cell == "-" or not cell:
        return None, None
    if "⭐" in cell:
        digits = re.sub(r"[^\d]", "", cell)
        return int(digits) if digits else None, None
    m = re.match(r"^\s*([\d,]+)\s*/月", cell)
    if m:
        return None, int(m.group(1).replace(",", ""))
    return None, None


def to_date(s):
    if not s:
        return None
    s = s.strip()
    if not s:
        return None
    # GitHub ISO -> YYYY-MM-DD
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", s)
    if m:
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    return s[:10]


# --------------------------------------------------------------------------- #
# Merge
# --------------------------------------------------------------------------- #
def npm_tarball(name, version):
    if not version:
        return None
    short = name.split("/")[-1]
    return f"https://registry.npmjs.org/{name}/-/{short}-{version}.tgz"


def build():
    gh = load_github()
    npm = load_npm()
    inv = parse_inventory()

    plugins = []
    unmatched = []
    for e in inv:
        name = e["name"]
        is_gh = "GitHub" in e["type"]
        is_npm = "npm" in e["type"]

        rec = {
            "id": None,
            "name": name,
            "display_name": name.split("/")[-1],
            "type": "repo" if is_gh else "package",
            "type_label": "GitHub 仓库" if is_gh else "npm 包",
            "source": e["source"],
            "category": e["category"],
            "url": e["url"],
            "description": None,
            "description_zh": e["desc_zh"],
            "license": e["license"] if e["license"] not in ("—", "-", "") else None,
            "updated": e["updated"] if e["updated"] not in ("—", "-", "") else None,
            "stars": None,
            "downloads_monthly": None,
            "language": None,
            "topics": [],
            "forks": None,
            "version": None,
            "download_url": None,
            "install_command": None,
            "is_new": "🆕" in e["name"],  # fallback; name already stripped
            "owner": None,
            "repo": None,
        }

        if is_gh:
            meta = gh.get(name)
            if meta is None:
                unmatched.append(name)
            else:
                rec.update(
                    {
                        "id": "gh:" + name,
                        "url": meta["html_url"] or e["url"],
                        "description": meta["description"],
                        "license": meta["license"] or rec["license"],
                        "updated": to_date(meta["updated_at"]) or rec["updated"],
                        "stars": meta["stargazers_count"],
                        "forks": meta["forks_count"],
                        "language": meta["language"],
                        "topics": meta["topics"],
                        "owner": meta["owner"],
                        "repo": meta["repo"],
                    }
                )
                branch = meta["default_branch"] or "master"
                rec["download_url"] = (
                    f"https://codeload.github.com/{name}/zip/refs/heads/{branch}"
                )
                rec["tarball_url"] = (
                    f"https://codeload.github.com/{name}/tar.gz/refs/heads/{branch}"
                )
                rec["install_command"] = f"git clone https://github.com/{name}.git"
        elif is_npm:
            meta = npm.get(name)
            if meta is None:
                unmatched.append(name)
            else:
                rec.update(
                    {
                        "id": "npm:" + name,
                        "url": meta["npm_url"] or e["url"],
                        "description": meta["description"],
                        "license": meta["license"] or rec["license"],
                        "updated": to_date(meta["date"]) or rec["updated"],
                        "downloads_monthly": meta["downloads_monthly"],
                        "version": meta["version"],
                        "keywords": meta["keywords"],
                        "publisher": meta["publisher"],
                        "homepage": meta["homepage"],
                    }
                )
                rec["download_url"] = npm_tarball(name, meta["version"])
                v = meta["version"] or "latest"
                rec["install_command"] = f"npm install {name}@{v}"

        if rec["updated"] and "T" in str(rec["updated"]):
            rec["updated"] = rec["updated"][:10]
        rec["is_new"] = True  # inventory marks every curated entry as new (2026-08-16)

        plugins.append(rec)

    # Sort: official first, then by stars/downloads desc
    def sort_key(p):
        weight = 0
        if p["type"] == "repo":
            weight = p["stars"] or 0
        else:
            weight = p["downloads_monthly"] or 0
        return weight

    plugins.sort(key=sort_key, reverse=True)

    categories = []
    for p in plugins:
        if p["category"] and p["category"] not in categories:
            categories.append(p["category"])

    total_stars = sum(p["stars"] or 0 for p in plugins)
    total_downloads = sum(p["downloads_monthly"] or 0 for p in plugins)

    payload = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "total": len(plugins),
        "repos": sum(1 for p in plugins if p["type"] == "repo"),
        "packages": sum(1 for p in plugins if p["type"] == "package"),
        "total_stars": total_stars,
        "total_downloads": total_downloads,
        "categories": categories,
        "plugins": plugins,
    }

    os.makedirs(os.path.join(BASE, "site"), exist_ok=True)
    js = (
        "// Auto-generated by build_data.py — do not edit by hand.\n"
        "// Regenerate with: python3 build_data.py\n"
        "window.PLUGIN_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n"
    )
    with open(os.path.join(BASE, OUT), "w", encoding="utf-8") as fh:
        fh.write(js)

    print(f"Wrote {OUT}")
    print(f"  entries: {len(plugins)}  (repos {payload['repos']}, packages {payload['packages']})")
    print(f"  categories: {categories}")
    print(f"  total stars: {total_stars:,}   total monthly downloads: {total_downloads:,}")
    if unmatched:
        print(f"  !! unmatched (no raw metadata): {unmatched}")
    else:
        print("  all entries matched raw metadata ✓")


if __name__ == "__main__":
    build()
