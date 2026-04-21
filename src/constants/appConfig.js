export const ROUTES = {
  login: "/login",
  dashboard: "/dashboard",
  userDirectory: "/users/directory",
  userManagement: "/users/management",
  profileApprovals: "/approvals/profile-queue",
  matchmakerDashboard: "/matchmaker/dashboard",
  matchmakerTeam: "/matchmaker/team",
  matchmakerPermissions: "/matchmaker/permissions",
  matchPipeline: "/matches/pipeline",
  matchManagement: "/matches/management",
  caseFileDetail: "/matches/case-file",
  completedMatches: "/matches/completed",
  completedRevenue: "/finance/completed-cycles-revenue",
  systemConfiguration: "/system/configuration"
}

export const STATUS_CODES = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500
}

export const APP_MESSAGES = {
  auth: {
    invalidCredentials: "Invalid admin credentials.",
    loginSuccess: "Login successful.",
    logoutSuccess: "You have been logged out."
  },
  common: {
    fetchSuccess: "Data loaded successfully.",
    serverUnavailable: "Server unavailable. Using fallback response.",
    unauthorized: "Session expired. Please log in again."
  }
}

export const DEFAULT_ADMIN_CREDENTIALS = {
  email: "admin@matchmaker.com",
  password: "Admin@123"
}

export const NAV_LINKS = [
  { label: "Dashboard", icon: "dashboard", to: ROUTES.dashboard },
  { label: "User Management", icon: "manage_accounts", to: ROUTES.userManagement },
  { label: "Approval Queue", icon: "fact_check", to: ROUTES.profileApprovals },
  { label: "Team Management", icon: "groups", to: ROUTES.matchmakerTeam },
  { label: "Role Management", icon: "admin_panel_settings", to: ROUTES.matchmakerPermissions }
]

export const NAV_ACTIVE_PATTERNS = {
  [ROUTES.dashboard]: [ROUTES.dashboard],
  [ROUTES.userManagement]: [ROUTES.userManagement],
  [ROUTES.profileApprovals]: [ROUTES.profileApprovals],
  [ROUTES.matchmakerTeam]: [ROUTES.matchmakerTeam],
  [ROUTES.matchmakerPermissions]: [ROUTES.matchmakerPermissions]
}
