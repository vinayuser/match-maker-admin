import fs from "node:fs"
import path from "node:path"
import * as cheerio from "cheerio"
import HTMLtoJSX from "htmltojsx"

const root = "/var/www/html/stitch_kesher_admin_dashboard"
const appRoot = path.join(root, "react_admin_app")
const pagesDir = path.join(appRoot, "src", "pages")

const pages = [
  { source: "dashboard_overview", component: "DashboardPage", file: "DashboardPage.jsx" },
  { source: "user_directory_listing", component: "UserDirectoryPage", file: "UserDirectoryPage.jsx" },
  { source: "user_management", component: "UserManagementPage", file: "UserManagementPage.jsx" },
  { source: "profile_approvals_queue", component: "ProfileApprovalsPage", file: "ProfileApprovalsPage.jsx" },
  { source: "matchmaker_dashboard", component: "MatchmakerDashboardPage", file: "MatchmakerDashboardPage.jsx" },
  { source: "matchmaker_team", component: "MatchmakerTeamPage", file: "MatchmakerTeamPage.jsx" },
  { source: "matchmaker_management_permissions", component: "MatchmakerPermissionsPage", file: "MatchmakerPermissionsPage.jsx" },
  { source: "match_pipeline_date_history_scheduling", component: "MatchPipelinePage", file: "MatchPipelinePage.jsx" },
  { source: "match_management", component: "MatchManagementPage", file: "MatchManagementPage.jsx" },
  { source: "case_file_detail", component: "CaseFileDetailPage", file: "CaseFileDetailPage.jsx" },
  { source: "completed_matches_archive", component: "CompletedMatchesPage", file: "CompletedMatchesPage.jsx" },
  { source: "completed_cycles_revenue", component: "CompletedRevenuePage", file: "CompletedRevenuePage.jsx" },
  { source: "system_configuration", component: "SystemConfigurationPage", file: "SystemConfigurationPage.jsx" }
]

const routeMap = {
  Dashboard: "/dashboard",
  Users: "/users/directory",
  "User Directory": "/users/directory",
  "User Management": "/users/management",
  "Approval Queue": "/approvals/profile-queue",
  "Team Management": "/matchmaker/team",
  Matchmakers: "/matchmaker/dashboard",
  "Match Pipeline": "/matches/pipeline",
  Schedule: "/matches/management",
  "Completed Matches": "/matches/completed",
  "Financial Audit": "/finance/completed-cycles-revenue",
  "System Settings": "/system/configuration",
  Settings: "/system/configuration"
}
const routeKeys = Object.keys(routeMap).sort((a, b) => b.length - a.length)

const converter = new HTMLtoJSX({ createClass: false })

const rewriteAnchors = (html) => {
  const withDefaults = html.replace(/href="#"/g, 'href="javascript:void(0)"')
  return withDefaults.replace(
    /<a([^>]*?)href="javascript:void\(0\)"([^>]*?)>([\s\S]*?)<\/a>/gi,
    (fullMatch, before, after, innerHtml) => {
      const label = innerHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
      const matchedKey = routeKeys.find((key) => label.includes(key.toLowerCase()))
      const href = matchedKey ? routeMap[matchedKey] : null
      if (!href) return fullMatch
      return fullMatch.replace('href="javascript:void(0)"', `href="${href}"`)
    }
  )
}

const normalizeClassNames = ($) => {
  $("[class]").each((_, el) => {
    const val = $(el).attr("class")
    if (!val) return
    const next = val
      .replace(/\bml-64\b/g, "")
      .replace(/\bw-\[calc\(100%-16rem\)\]\b/g, "")
      .replace(/\bmt-16\b/g, "")
      .replace(/\bpt-24\b/g, "pt-6")
      .replace(/\s+/g, " ")
      .trim()
    if (next) {
      $(el).attr("class", next)
    } else {
      $(el).removeAttr("class")
    }
  })
}

for (const page of pages) {
  const srcPath = path.join(root, page.source, "code.html")
  const html = fs.readFileSync(srcPath, "utf8")
  const linked = rewriteAnchors(html)
  const $ = cheerio.load(linked)

  $("aside").remove()
  $("header.fixed, header.sticky, body > header, body > footer").remove()
  $("div.fixed.bottom-10.right-10").remove()

  const main = $("main").first()
  const body = $("body")
  const contentRoot = main.length ? main : body

  normalizeClassNames($)

  let contentHtml = contentRoot.html() || ""
  contentHtml = contentHtml.trim()
  if (!contentHtml) {
    contentHtml = '<section class="p-8 text-white">No content found.</section>'
  }

  const jsxContent = converter.convert(
    `<div class="h-full overflow-y-auto px-4 pb-4">${contentHtml}</div>`
  )

  const fileContent = `export function ${page.component}() {
  return (
    ${jsxContent}
  )
}
`

  fs.writeFileSync(path.join(pagesDir, page.file), fileContent, "utf8")
}

console.log(`Generated ${pages.length} React page components.`)
