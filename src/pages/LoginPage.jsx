import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { DEFAULT_ADMIN_CREDENTIALS, ROUTES } from "../constants/appConfig"
import { clearAuthMessage, loginUser } from "../store/slices/authSlice"

export function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth)

  const [form, setForm] = useState({
    email: DEFAULT_ADMIN_CREDENTIALS.email,
    password: DEFAULT_ADMIN_CREDENTIALS.password
  })

  useEffect(() => {
    if (isAuthenticated) {
      const redirectRoute = location.state?.from?.pathname || ROUTES.dashboard
      navigate(redirectRoute, { replace: true })
    }
  }, [isAuthenticated, location.state?.from?.pathname, navigate])

  useEffect(() => {
    return () => {
      dispatch(clearAuthMessage())
    }
  }, [dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(loginUser(form))
  }

  return (
    <div className="text-on-surface antialiased flex items-center justify-center min-h-screen selection:bg-primary-container selection:text-on-primary bg-[#0A0A0A]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-on-tertiary-container/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-[420px] px-6">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-surface-container border border-outline-variant/20 shadow-2xl">
            <span className="material-symbols-outlined text-primary-container text-4xl">lock</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white uppercase mb-1">Admin Portal Login</h1>
          <p className="text-xs font-medium tracking-[0.2em] text-on-surface-variant uppercase">Luxury Matchmaking</p>
        </div>

        <div className="glass-panel p-8 rounded-xl border border-outline-variant/10 shadow-[24px_0_40px_rgba(0,0,0,0.5)]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-[0.6875rem] font-semibold tracking-wider text-on-surface-variant uppercase ml-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl transition-colors group-focus-within:text-primary-container">
                    alternate_email
                  </span>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="block w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-3.5 pl-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="admin@matchmaker.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="block text-[0.6875rem] font-semibold tracking-wider text-on-surface-variant uppercase" htmlFor="password">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[0.6875rem] font-semibold tracking-wider text-primary-fixed-dim uppercase hover:text-primary transition-colors"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl transition-colors group-focus-within:text-primary-container">
                    key
                  </span>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                  className="block w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-3.5 pl-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            {error ? <p className="text-xs text-error px-1">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="metallic-gradient w-full py-4 px-6 rounded-lg text-on-primary font-bold text-sm uppercase tracking-widest shadow-[0_8px_24px_rgba(245,180,26,0.2)] hover:shadow-[0_12px_32px_rgba(245,180,26,0.3)] transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:transform-none"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-center">
            <div className="text-center text-[0.6875rem] text-on-surface-variant">
              <p className="font-semibold tracking-wider text-primary-fixed-dim uppercase mb-2">Default admin</p>
              <p className="tracking-wide">Email: {DEFAULT_ADMIN_CREDENTIALS.email}</p>
              <p className="tracking-wide">Password: {DEFAULT_ADMIN_CREDENTIALS.password}</p>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-[0.625rem] text-[#A3A3A3] tracking-[0.3em] uppercase leading-relaxed">
            Secure Access Node: 88.192.4.X
            <br />
            © 2026 Kesher Luxury Matchmaking
          </p>
        </footer>
      </main>
    </div>
  )
}
