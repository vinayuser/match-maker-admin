import { NavLink, useLocation } from "react-router-dom"
import { NAV_ACTIVE_PATTERNS, NAV_LINKS } from "../../constants/appConfig"

export function Sidebar({ isCollapsed = false }) {
  const location = useLocation()

  const getLinkState = (linkPath) => {
    const patterns = NAV_ACTIVE_PATTERNS[linkPath] || [linkPath]
    return patterns.some((pattern) => location.pathname.startsWith(pattern))
  }

  return (
    <aside
      className={`${isCollapsed ? "w-20" : "w-64"} h-screen fixed left-0 top-0 border-r border-[#504533]/20 bg-[#131313] flex flex-col py-6 z-40 shadow-[24px_0_40px_rgba(14,14,14,0.2)] transition-all duration-300`}
    >
      <div className={`${isCollapsed ? "px-2" : "px-6"} mb-8`}>
        {isCollapsed ? (
          <div className="w-10 h-10 mx-auto rounded-xl bg-primary-container/15 text-primary-container flex items-center justify-center font-black text-sm">
            KA
          </div>
        ) : (
          <>
            <h1 className="text-xl font-black text-[#F5B41A] tracking-tighter uppercase">Kesher Admin</h1>
            <p className="text-[10px] font-bold text-on-surface-variant/60 tracking-[0.2em] uppercase mt-1">
              Luxury Matchmaking
            </p>
          </>
        )}
      </div>

      <nav className={`flex-1 overflow-y-auto hide-scrollbar space-y-1 ${isCollapsed ? "px-2" : "px-3"}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            title={isCollapsed ? link.label : ""}
            className={() =>
              `flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-3 py-2.5 rounded text-sm uppercase tracking-wider transition-all duration-200 ${
                getLinkState(link.to)
                  ? "text-[#F5B41A] border-r-2 border-[#F5B41A] bg-gradient-to-r from-[#F5B41A]/10 to-transparent font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#201f1f] hover:text-white"
              }`
            }
          >
            <span className="material-symbols-outlined text-base">{link.icon}</span>
            {!isCollapsed ? <span>{link.label}</span> : null}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
