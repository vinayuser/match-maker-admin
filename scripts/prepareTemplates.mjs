import fs from "node:fs"
import path from "node:path"

const root = "/var/www/html/stitch_kesher_admin_dashboard"
const appRoot = path.join(root, "react_admin_app")
const outDir = path.join(appRoot, "public", "templates")

const folders = [
  "dashboard_overview",
  "user_directory_listing",
  "user_management",
  "profile_approvals_queue",
  "matchmaker_dashboard",
  "matchmaker_team",
  "matchmaker_management_permissions",
  "match_pipeline_date_history_scheduling",
  "match_management",
  "case_file_detail",
  "completed_matches_archive",
  "completed_cycles_revenue",
  "system_configuration"
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

fs.mkdirSync(outDir, { recursive: true })

const rewriteAnchors = (html) => {
  const withDefaults = html.replace(/href="#"/g, 'href="javascript:void(0)"')

  return withDefaults.replace(
    /<a([^>]*?)href="javascript:void\(0\)"([^>]*?)>([\s\S]*?)<\/a>/gi,
    (fullMatch, before, after, innerHtml) => {
      const label = innerHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().toLowerCase()
      const matchedKey = routeKeys.find((key) => label.includes(key.toLowerCase()))
      const href = matchedKey ? routeMap[matchedKey] : null
      if (!href) {
        return fullMatch
      }
      return fullMatch.replace('href="javascript:void(0)"', `href="${href}"`)
    }
  )
}

const stripInternalLayoutChrome = (html) => {
  let cleaned = html

  // Remove all aside blocks from generated pages (left nav + right side panels).
  cleaned = cleaned.replace(/<aside[\s\S]*?<\/aside>/gi, "")

  // Remove only fixed/sticky headers used as internal topbars.
  cleaned = cleaned.replace(
    /<header(?=[^>]*\b(class|style)=["'][^"']*(fixed|sticky)[^"']*["'])[\s\S]*?<\/header>/gi,
    ""
  )

  // Remove floating fixed action widgets.
  cleaned = cleaned.replace(
    /<div(?=[^>]*\bclass=["'][^"']*fixed[^"']*bottom-[^"']*right-[^"']*["'])[\s\S]*?<\/div>/gi,
    ""
  )

  // Normalize main containers that were offset for in-page sidebars/topbars.
  cleaned = cleaned.replace(/\bml-64\b/g, "")
  cleaned = cleaned.replace(/\bw-\[calc\(100%-16rem\)\]\b/g, "")
  cleaned = cleaned.replace(/\bmt-16\b/g, "")
  cleaned = cleaned.replace(/\bpt-24\b/g, "pt-6")

  // Ensure full-width page content in the shared React shell.
  cleaned = cleaned.replace(/<body class="/i, '<body class="bg-[#0E0E0E] ')

  return cleaned
}

for (const folder of folders) {
  const srcPath = path.join(root, folder, "code.html")
  const outPath = path.join(outDir, `${folder}.html`)

  const html = fs.readFileSync(srcPath, "utf8")
  const rewritten = rewriteAnchors(stripInternalLayoutChrome(html))
  fs.writeFileSync(outPath, rewritten, "utf8")
}

console.log(`Prepared ${folders.length} templates.`)
