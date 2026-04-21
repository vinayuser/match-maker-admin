import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants/appConfig"
import { logout } from "../../store/slices/authSlice"

export function Topbar({ onToggleSidebar, isSidebarCollapsed }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate(ROUTES.login)
  }

  return (
    <header className="h-16 bg-[#131313]/80 backdrop-blur-xl border-b border-outline-variant/20 px-8 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="w-10 h-10 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-primary-container/50 transition-colors flex items-center justify-center"
          title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <span className="material-symbols-outlined text-lg">menu</span>
        </button>
        <div className="relative w-72">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="bg-surface-container-lowest/50 border-none rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface w-full focus:ring-1 focus:ring-primary-container/50 placeholder:text-on-surface-variant/40"
            placeholder="Global search for clients or matches..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-xs text-on-surface-variant hidden lg:block">
          {user?.name} - {user?.role}
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="metallic-gradient px-4 py-2 rounded text-on-primary text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary-container/10"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
