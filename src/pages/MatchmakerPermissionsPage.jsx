import { useEffect, useMemo, useState } from "react"
import {
  createAdminRole,
  deleteAdminRole,
  fetchAdminPermissions,
  fetchAdminRoles,
  updateAdminRole
} from "../services/roleManagementService"
import { useSelector } from "react-redux"
import { hasPermission } from "../utils/adminPermissions"

const initialForm = {
  id: null,
  name: "",
  slug: "",
  description: "",
  isActive: true,
  permissionKeys: []
}

export function MatchmakerPermissionsPage() {
  const { user } = useSelector((state) => state.auth)
  const canViewRoles = hasPermission(user, "roles:view")
  const canEditRoles = hasPermission(user, "roles:create")

  const [roles, setRoles] = useState([])
  const [permissions, setPermissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState(initialForm)

  const groupedPermissions = useMemo(() => {
    const groups = {}
    for (const permission of permissions) {
      const key = permission.module || "general"
      if (!groups[key]) groups[key] = []
      groups[key].push(permission)
    }
    return groups
  }, [permissions])

  const loadData = async () => {
    try {
      setLoading(true)
      setError("")
      const [nextRoles, nextPermissions] = await Promise.all([fetchAdminRoles(), fetchAdminPermissions()])
      setRoles(nextRoles)
      setPermissions(nextPermissions)
    } catch (err) {
      setError(err.message || "Failed to load role management data.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (canViewRoles) {
      loadData()
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canViewRoles])

  const submitForm = async (event) => {
    event.preventDefault()
    if (!canEditRoles) return
    try {
      setSaving(true)
      setError("")
      const payload = {
        name: form.name,
        slug: form.slug,
        description: form.description,
        isActive: form.isActive,
        permissionKeys: form.permissionKeys
      }
      if (form.id) {
        await updateAdminRole(form.id, payload)
      } else {
        await createAdminRole(payload)
      }
      setForm(initialForm)
      await loadData()
    } catch (err) {
      setError(err.message || "Failed to save role.")
    } finally {
      setSaving(false)
    }
  }

  const editRole = (role) => {
    setForm({
      id: role.id,
      name: role.name,
      slug: role.slug,
      description: role.description || "",
      isActive: role.isActive,
      permissionKeys: (role.permissions || []).map((permission) => permission.key)
    })
  }

  const removeRole = async (roleId) => {
    if (!canEditRoles) return
    const ok = window.confirm("Delete this role? This cannot be undone.")
    if (!ok) return
    try {
      setError("")
      await deleteAdminRole(roleId)
      await loadData()
      if (form.id === roleId) setForm(initialForm)
    } catch (err) {
      setError(err.message || "Failed to delete role.")
    }
  }

  if (!canViewRoles) {
    return (
      <div className="h-full overflow-y-auto px-4 pb-4">
        <div className="max-w-5xl mx-auto mt-10 bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3 text-sm">
          You do not have permission to view role management.
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      <div className="p-8 max-w-6xl mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight leading-none mb-2">Role Management</h1>
            <p className="text-on-surface-variant text-sm">
              Create and manage matchmaker roles with granular permissions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setForm(initialForm)}
            className="px-4 py-2 border border-outline-variant/30 text-on-surface text-xs font-bold uppercase tracking-widest"
          >
            New Role
          </button>
        </div>

        {error ? (
          <div className="mb-4 border border-error/30 bg-error/10 text-error rounded-lg px-4 py-3 text-sm">{error}</div>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <form
            onSubmit={submitForm}
            className="lg:col-span-2 bg-surface-container rounded-xl p-6 border-l-4 border-primary-container"
          >
            <h2 className="text-lg font-bold text-white mb-4">{form.id ? "Update Role" : "Create Role"}</h2>
            <div className="space-y-3">
              <input
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface"
                placeholder="Role name"
                disabled={!canEditRoles}
                required
              />
              <input
                value={form.slug}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface"
                placeholder="role_slug (optional)"
                disabled={!canEditRoles}
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface min-h-24"
                placeholder="Description"
                disabled={!canEditRoles}
              />
              <label className="flex items-center gap-2 text-xs text-on-surface-variant">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => setForm((prev) => ({ ...prev, isActive: e.target.checked }))}
                  disabled={!canEditRoles}
                />
                Role is active
              </label>
            </div>

            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Permissions</p>
              <div className="max-h-64 overflow-y-auto hide-scrollbar space-y-3 pr-1">
                {Object.entries(groupedPermissions).map(([moduleName, items]) => (
                  <div key={moduleName} className="bg-surface-container-low rounded-lg p-3">
                    <p className="text-[10px] uppercase tracking-widest text-primary-container mb-2">{moduleName}</p>
                    <div className="space-y-2">
                      {items.map((permission) => {
                        const checked = form.permissionKeys.includes(permission.key)
                        return (
                          <label key={permission.id} className="flex items-center gap-2 text-xs text-white">
                            <input
                              type="checkbox"
                              checked={checked}
                              disabled={!canEditRoles}
                              onChange={(e) =>
                                setForm((prev) => ({
                                  ...prev,
                                  permissionKeys: e.target.checked
                                    ? [...prev.permissionKeys, permission.key]
                                    : prev.permissionKeys.filter((key) => key !== permission.key)
                                }))
                              }
                            />
                            {permission.name}
                          </label>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                type="submit"
                disabled={!canEditRoles || saving}
                className="px-4 py-2 bg-gradient-to-br from-primary-fixed-dim to-primary-container text-on-primary rounded text-xs font-bold uppercase tracking-widest disabled:opacity-60"
              >
                {saving ? "Saving..." : form.id ? "Update Role" : "Create Role"}
              </button>
              <button
                type="button"
                onClick={() => setForm(initialForm)}
                className="px-4 py-2 border border-outline-variant/30 text-on-surface rounded text-xs font-bold uppercase tracking-widest"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="lg:col-span-3 bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant/20">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Available Roles</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-4 py-3 text-[10px] text-on-surface-variant uppercase tracking-widest text-left">Role</th>
                    <th className="px-4 py-3 text-[10px] text-on-surface-variant uppercase tracking-widest text-center">Users</th>
                    <th className="px-4 py-3 text-[10px] text-on-surface-variant uppercase tracking-widest text-center">Permissions</th>
                    <th className="px-4 py-3 text-[10px] text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-sm text-on-surface-variant">
                        Loading roles...
                      </td>
                    </tr>
                  ) : roles.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-sm text-on-surface-variant">
                        No roles found.
                      </td>
                    </tr>
                  ) : (
                    roles.map((role) => (
                      <tr key={role.id} className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3">
                          <p className="text-sm font-semibold text-white">{role.name}</p>
                          <p className="text-[10px] text-on-surface-variant">{role.slug}</p>
                        </td>
                        <td className="px-4 py-3 text-center text-xs text-white">{role.assignedUsers}</td>
                        <td className="px-4 py-3 text-center text-xs text-primary-container">{role.permissions?.length || 0}</td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => editRole(role)}
                              className="p-2 text-on-surface-variant hover:text-white"
                            >
                              <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button
                              type="button"
                              disabled={!canEditRoles || role.isSystem}
                              onClick={() => removeRole(role.id)}
                              className="p-2 text-on-surface-variant hover:text-error disabled:opacity-40"
                            >
                              <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
