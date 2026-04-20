import { Link } from "react-router-dom"
import { ROUTES } from "../constants/appConfig"

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-primary-container">404</h1>
        <p className="text-sm text-on-surface-variant">Page not found.</p>
        <Link
          to={ROUTES.dashboard}
          className="inline-flex metallic-gradient px-4 py-2 rounded text-on-primary text-xs uppercase tracking-widest font-bold"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
