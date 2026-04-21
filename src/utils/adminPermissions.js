export function isSuperAdmin(user) {
  return user?.role === "super_admin"
}

export function hasPermission(user, permission) {
  if (!permission) return true
  if (isSuperAdmin(user)) return true
  const list = Array.isArray(user?.permissions) ? user.permissions : []
  return list.includes(permission)
}
