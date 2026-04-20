import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ROUTES } from "../constants/appConfig"
import { fetchAdminDashboard } from "../services/dashboardService"

const emptyDashboard = {
  overview: {
    totalRegisteredUsers: 0,
    pendingProfileApprovals: 0,
    oldestPendingLabel: "N/A",
    activeMatches: 0,
    closedMatchesThisMonth: 0,
    verifiedUsers: 0,
    lockedUsers: 0
  },
  recentRegistrations: [],
  criticalQueue: [],
  matchmakerPerformance: []
}

function formatDate(value) {
  if (!value) return "-"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "-"
  return date.toLocaleDateString(undefined, { month: "short", day: "2-digit", year: "numeric" })
}

function initials(fullName) {
  if (!fullName) return "NA"
  const [first = "", second = ""] = fullName.split(" ")
  return `${first[0] || ""}${second[0] || ""}`.toUpperCase() || "NA"
}

export function DashboardPage() {
  const [dashboard, setDashboard] = useState(emptyDashboard)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadDashboard = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await fetchAdminDashboard()
      setDashboard(data || emptyDashboard)
    } catch (err) {
      setError(err.message || "Failed to load dashboard data.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDashboard()
  }, [])

  const stats = [
    {
      id: "users",
      label: "Total Registered Users",
      value: dashboard.overview.totalRegisteredUsers,
      subText: `${dashboard.overview.verifiedUsers} verified profiles`,
      icon: "person",
      iconClass: "bg-primary-container/10 text-primary-container",
      cardClass: "border-l-4 border-primary-container"
    },
    {
      id: "approvals",
      label: "Pending Profile Approvals",
      value: dashboard.overview.pendingProfileApprovals,
      subText: `Oldest request: ${dashboard.overview.oldestPendingLabel}`,
      icon: "hourglass_empty",
      iconClass: "bg-error-container/20 text-error",
      attention: dashboard.overview.pendingProfileApprovals > 0
    },
    {
      id: "activeMatches",
      label: "Active Matches in Progress",
      value: dashboard.overview.activeMatches,
      subText: `${dashboard.overview.lockedUsers} locked profiles`,
      icon: "favorite",
      iconClass: "bg-tertiary-container/10 text-tertiary-container"
    },
    {
      id: "closedThisMonth",
      label: "Closed Matches This Month",
      value: dashboard.overview.closedMatchesThisMonth,
      subText: "Calculated from live match records",
      icon: "task_alt",
      iconClass: "bg-green-500/10 text-green-500"
    }
  ]

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      <header className="mb-10 flex flex-wrap justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Dashboard Overview</h2>
          <p className="text-on-surface-variant text-sm mt-1">Platform management and high-level health metrics.</p>
        </div>
        <button
          type="button"
          onClick={loadDashboard}
          className="px-4 py-2 border border-outline-variant/30 rounded text-xs font-bold uppercase tracking-widest text-[#A3A3A3] hover:border-primary-container/50 hover:text-white transition-all"
        >
          Refresh
        </button>
      </header>

      {error ? (
        <div className="mb-6 border border-error/30 bg-error/10 text-error rounded-lg px-4 py-3 text-sm">{error}</div>
      ) : null}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`bg-surface-container rounded-2xl p-6 flex justify-between items-start ${stat.cardClass || ""}`.trim()}
          >
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-black text-white tracking-tighter">{loading ? "-" : stat.value}</p>
                {stat.attention && !loading ? (
                  <span className="bg-error/20 text-error px-2 py-0.5 rounded-full text-[10px] font-black animate-pulse">
                    ACTION REQ.
                  </span>
                ) : null}
              </div>
              <p className="text-[10px] text-[#A3A3A3] mt-2">{stat.subText}</p>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.iconClass}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-surface rounded-2xl shadow-xl overflow-hidden border border-outline-variant/10">
          <div className="px-6 py-4 border-b border-outline-variant/10 bg-surface-container/30 flex justify-between items-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Recent User Registrations</h3>
            <Link to={ROUTES.userManagement} className="text-[10px] font-black text-primary-container hover:underline">
              VIEW ALL
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low/50">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Name</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Date</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
                    Religious Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {loading ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-6 text-xs text-on-surface-variant">
                      Loading registrations...
                    </td>
                  </tr>
                ) : dashboard.recentRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-6 text-xs text-on-surface-variant">
                      No registrations found.
                    </td>
                  </tr>
                ) : (
                  dashboard.recentRegistrations.map((row) => (
                    <tr key={row.userId} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary-container">
                            {initials(row.fullName)}
                          </div>
                          <div className="text-xs font-semibold text-white">{row.fullName}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-[#A3A3A3]">{formatDate(row.createdAt)}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-tighter bg-outline-variant/20 text-on-surface-variant">
                          {row.religiousLevel || "Not set"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-surface rounded-2xl shadow-xl overflow-hidden border border-outline-variant/10">
          <div className="px-6 py-4 border-b border-outline-variant/10 bg-surface-container/30 flex justify-between items-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Matchmaker Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low/50">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Name</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
                    Active Cases
                  </th>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">
                    Success Rate
                  </th>
                  <th className="px-6 py-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">
                    Closed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-6 text-xs text-on-surface-variant">
                      Loading matchmaker performance...
                    </td>
                  </tr>
                ) : dashboard.matchmakerPerformance.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-6 text-xs text-on-surface-variant">
                      No active matchmaker admins found.
                    </td>
                  </tr>
                ) : (
                  dashboard.matchmakerPerformance.map((row) => (
                    <tr key={row.adminId} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-xs font-semibold text-white">{row.name}</div>
                      </td>
                      <td className="px-6 py-4 text-center text-xs text-white">{row.activeCases}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-xs font-bold text-primary-container">{row.successRate}%</span>
                          <div className="w-12 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-primary-container" style={{ width: `${row.successRate}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-xs text-[#A3A3A3]">{row.closedCases}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-[#131313] border-2 border-primary-container/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(245,180,26,0.05)]">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  priority_high
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tighter">Critical Pending Approvals Queue</h3>
              </div>
              <p className="text-on-surface-variant text-xs">
                Profiles pending verification the longest, pulled directly from onboarding completion timestamps.
              </p>
            </div>
            <Link
              to={ROUTES.profileApprovals}
              className="bg-primary-container text-on-primary px-6 py-3 rounded font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-primary-container/20"
            >
              Open Approval Queue
            </Link>
          </div>

          {loading ? (
            <p className="text-sm text-on-surface-variant">Loading critical queue...</p>
          ) : dashboard.criticalQueue.length === 0 ? (
            <p className="text-sm text-on-surface-variant">No pending profiles waiting in queue.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboard.criticalQueue.map((row) => (
                <div
                  key={row.userId}
                  className="bg-surface-container p-4 rounded-xl flex gap-4 items-center group hover:bg-surface-container-highest transition-all border border-outline-variant/10"
                >
                  <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-xl font-black text-primary-container">
                    {initials(row.fullName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">{row.fullName}</p>
                    <p className="text-[10px] text-on-surface-variant/70 uppercase font-semibold">
                      {row.religiousLevel || "Not set"}
                    </p>
                    <div className="mt-2 flex gap-1">
                      <span className="text-[9px] bg-error-container/20 text-error px-1.5 py-0.5 rounded font-bold uppercase">
                        {row.waitingHours} Hours
                      </span>
                      <span className="text-[9px] bg-surface-container-highest text-white px-1.5 py-0.5 rounded font-bold uppercase">
                        Pending
                      </span>
                    </div>
                  </div>
                  <Link to={ROUTES.profileApprovals} className="material-symbols-outlined text-[#A3A3A3] group-hover:text-primary-container transition-colors">
                    chevron_right
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
