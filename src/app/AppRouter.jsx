import { Navigate, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "../components/auth/ProtectedRoute"
import { AdminLayout } from "../components/layout/AdminLayout"
import { ROUTES } from "../constants/appConfig"
import { CaseFileDetailPage } from "../pages/CaseFileDetailPage"
import { CompletedMatchesPage } from "../pages/CompletedMatchesPage"
import { CompletedRevenuePage } from "../pages/CompletedRevenuePage"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { MatchManagementPage } from "../pages/MatchManagementPage"
import { MatchmakerDashboardPage } from "../pages/MatchmakerDashboardPage"
import { MatchmakerPermissionsPage } from "../pages/MatchmakerPermissionsPage"
import { MatchmakerTeamPage } from "../pages/MatchmakerTeamPage"
import { MatchPipelinePage } from "../pages/MatchPipelinePage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { ProfileApprovalsPage } from "../pages/ProfileApprovalsPage"
import { SystemConfigurationPage } from "../pages/SystemConfigurationPage"
import { UserDirectoryPage } from "../pages/UserDirectoryPage"
import { UserManagementPage } from "../pages/UserManagementPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route
            path={ROUTES.dashboard}
            element={<DashboardPage />}
          />
          <Route
            path={ROUTES.userDirectory}
            element={<UserDirectoryPage />}
          />
          <Route
            path={ROUTES.userManagement}
            element={<UserManagementPage />}
          />
          <Route
            path={ROUTES.profileApprovals}
            element={<ProfileApprovalsPage />}
          />
          <Route
            path={ROUTES.matchmakerDashboard}
            element={<MatchmakerDashboardPage />}
          />
          <Route
            path={ROUTES.matchmakerTeam}
            element={<MatchmakerTeamPage />}
          />
          <Route
            path={ROUTES.matchmakerPermissions}
            element={<MatchmakerPermissionsPage />}
          />
          <Route
            path={ROUTES.matchPipeline}
            element={<MatchPipelinePage />}
          />
          <Route
            path={ROUTES.matchManagement}
            element={<MatchManagementPage />}
          />
          <Route
            path={ROUTES.caseFileDetail}
            element={<CaseFileDetailPage />}
          />
          <Route
            path={ROUTES.completedMatches}
            element={<CompletedMatchesPage />}
          />
          <Route
            path={ROUTES.completedRevenue}
            element={<CompletedRevenuePage />}
          />
          <Route
            path={ROUTES.systemConfiguration}
            element={<SystemConfigurationPage />}
          />
        </Route>
      </Route>
      <Route path="/" element={<Navigate replace to={ROUTES.dashboard} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
