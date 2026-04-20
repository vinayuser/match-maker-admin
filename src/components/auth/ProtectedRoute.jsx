import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { ROUTES } from "../../constants/appConfig"

export function ProtectedRoute() {
  const location = useLocation()
  const { isAuthenticated } = useSelector((state) => state.auth)

  if (!isAuthenticated) {
    return <Navigate replace to={ROUTES.login} state={{ from: location }} />
  }

  return <Outlet />
}
