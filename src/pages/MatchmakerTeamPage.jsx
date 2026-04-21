import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import {
  createMatchmaker,
  deleteMatchmaker,
  fetchMatchmakerTeam,
  lockMatchmaker,
  uploadMatchmakerAvatar,
  updateMatchmaker
} from "../services/matchmakerTeamService"
import { fetchAdminRoles } from "../services/roleManagementService"
import { hasPermission } from "../utils/adminPermissions"

const PAGE_SIZE = 10

const initialForm = {
  id: null,
  name: "",
  email: "",
  password: "",
  avatarUrl: "",
  roleIds: []
}

export function MatchmakerTeamPage() {
  const { user } = useSelector((state) => state.auth)
  const canViewTeam = hasPermission(user, "team:view")
  const canManageTeam = user?.role === "super_admin"

  const [rows, setRows] = useState([])
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [status, setStatus] = useState("")
  const [pagination, setPagination] = useState({ page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
  const [form, setForm] = useState(initialForm)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false)

  const loadTeam = async (params = {}) => {
    try {
      setLoading(true)
      setError("")
      const data = await fetchMatchmakerTeam({
        page: params.page ?? pagination.page,
        limit: PAGE_SIZE,
        search: params.search ?? searchInput,
        status: params.status ?? status
      })
      setRows(data?.rows || [])
      setPagination(data?.pagination || { page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
    } catch (err) {
      setError(err.message || "Failed to load matchmaker team.")
    } finally {
      setLoading(false)
    }
  }

  const loadRoles = async () => {
    try {
      const nextRoles = await fetchAdminRoles()
      setRoles(nextRoles.filter((item) => item.isActive))
    } catch (err) {
      setError(err.message || "Failed to load roles.")
    }
  }

  useEffect(() => {
    if (canViewTeam) {
      loadTeam({ page: 1 })
      if (canManageTeam) {
        loadRoles()
      }
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canViewTeam, canManageTeam])

  const stats = useMemo(() => {
    const total = rows.length
    const active = rows.filter((row) => row.isActive).length
    const locked = rows.filter((row) => row.isLocked).length
    const avgSuccess = total > 0 ? Math.round(rows.reduce((sum, row) => sum + (row.successRate || 0), 0) / total) : 0
    return { total, active, locked, avgSuccess }
  }, [rows])

  const selectedRoles = useMemo(
    () => roles.filter((role) => form.roleIds.includes(role.id)),
    [roles, form.roleIds]
  )

  const submitForm = async (event) => {
    event.preventDefault()
    if (!canManageTeam) return
    try {
      setSaving(true)
      setError("")
      if (form.id) {
        await updateMatchmaker(form.id, {
          name: form.name,
          email: form.email,
          password: form.password || undefined,
          avatarUrl: form.avatarUrl || undefined,
          roleIds: form.roleIds
        })
      } else {
        await createMatchmaker({
          name: form.name,
          email: form.email,
          password: form.password,
          avatarUrl: form.avatarUrl || undefined,
          roleIds: form.roleIds
        })
      }
      setForm(initialForm)
      setIsModalOpen(false)
      await loadTeam({ page: 1 })
    } catch (err) {
      setError(err.message || "Failed to save matchmaker.")
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (row) => {
    setForm({
      id: row.id,
      name: row.name,
      email: row.email,
      password: "",
      avatarUrl: row.avatarUrl || "",
      roleIds: (row.roles || []).map((role) => role.id)
    })
    setRoleDropdownOpen(false)
    setIsModalOpen(true)
  }

  const handleDelete = async (rowId) => {
    if (!canManageTeam) return
    if (!window.confirm("Delete this matchmaker account?")) return
    try {
      setError("")
      await deleteMatchmaker(rowId)
      await loadTeam()
    } catch (err) {
      setError(err.message || "Failed to delete matchmaker.")
    }
  }

  const handleLockToggle = async (row) => {
    if (!canManageTeam) return
    try {
      setError("")
      await lockMatchmaker(row.id, !row.isLocked)
      await loadTeam()
    } catch (err) {
      setError(err.message || "Failed to update lock state.")
    }
  }

  const handleOpenCreateModal = () => {
    setForm(initialForm)
    setRoleDropdownOpen(false)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    if (saving || uploadingAvatar) return
    setIsModalOpen(false)
    setRoleDropdownOpen(false)
    setForm(initialForm)
  }

  const toggleRole = (roleId) => {
    setForm((prev) => {
      const exists = prev.roleIds.includes(roleId)
      return {
        ...prev,
        roleIds: exists ? prev.roleIds.filter((id) => id !== roleId) : [...prev.roleIds, roleId]
      }
    })
  }

  const handleAvatarFile = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      setUploadingAvatar(true)
      setError("")
      const url = await uploadMatchmakerAvatar(file)
      setForm((prev) => ({ ...prev, avatarUrl: url || "" }))
    } catch (err) {
      setError(err.message || "Failed to upload image.")
    } finally {
      setUploadingAvatar(false)
      event.target.value = ""
    }
  }

  if (!canViewTeam) {
    return (
      <div className="h-full overflow-y-auto px-4 pb-4">
        <div className="max-w-5xl mx-auto mt-10 bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3 text-sm">
          You do not have permission to view team management.
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Matchmaker Team Management</h2>
            <p className="text-on-surface-variant text-sm mt-1">
              Super admin can add, update, delete, and lock matchmaker accounts.
            </p>
          </div>
          <button
            type="button"
            onClick={handleOpenCreateModal}
            className="bg-primary-container text-on-primary font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest"
          >
            Add Matchmaker
          </button>
        </div>

        {error ? (
          <div className="mb-4 border border-error/30 bg-error/10 text-error rounded-lg px-4 py-3 text-sm">{error}</div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
            <p className="text-outline text-[10px] font-bold uppercase tracking-widest mb-1">Listed</p>
            <p className="text-2xl font-black text-white">{stats.total}</p>
          </div>
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
            <p className="text-outline text-[10px] font-bold uppercase tracking-widest mb-1">Active</p>
            <p className="text-2xl font-black text-primary-container">{stats.active}</p>
          </div>
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
            <p className="text-outline text-[10px] font-bold uppercase tracking-widest mb-1">Locked</p>
            <p className="text-2xl font-black text-error">{stats.locked}</p>
          </div>
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
            <p className="text-outline text-[10px] font-bold uppercase tracking-widest mb-1">Average Success</p>
            <p className="text-2xl font-black text-white">{stats.avgSuccess}%</p>
          </div>
        </div>

        <div className="bg-surface-container rounded-xl border border-outline-variant/10 p-4">
            <div className="flex flex-wrap gap-3 mb-4">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by name/email"
                className="flex-1 min-w-[220px] bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface"
              />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="locked">Locked</option>
              </select>
              <button
                type="button"
                onClick={() => loadTeam({ page: 1, search: searchInput, status })}
                className="px-4 py-2 border border-outline-variant/30 rounded text-xs font-bold uppercase tracking-widest text-on-surface"
              >
                Apply
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-container-low border-b border-outline-variant/20">
                  <tr>
                    <th className="py-3 px-4 text-[10px] text-outline uppercase tracking-widest text-left">Name</th>
                    <th className="py-3 px-4 text-[10px] text-outline uppercase tracking-widest text-left">Cases</th>
                    <th className="py-3 px-4 text-[10px] text-outline uppercase tracking-widest text-left">Roles</th>
                    <th className="py-3 px-4 text-[10px] text-outline uppercase tracking-widest text-left">Status</th>
                    <th className="py-3 px-4 text-[10px] text-outline uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="py-6 px-4 text-sm text-on-surface-variant text-center">
                        Loading team...
                      </td>
                    </tr>
                  ) : rows.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-6 px-4 text-sm text-on-surface-variant text-center">
                        No matchmakers found.
                      </td>
                    </tr>
                  ) : (
                    rows.map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.02]">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            {row.avatarUrl ? (
                              <img src={row.avatarUrl} alt={row.name} className="w-9 h-9 rounded-full object-cover border border-outline-variant/30" />
                            ) : (
                              <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary-container">
                                {(row.name || "NA")
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((item) => item[0] || "")
                                  .join("")
                                  .toUpperCase()}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-semibold text-white">{row.name}</p>
                              <p className="text-[10px] text-on-surface-variant">{row.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <p className="text-xs text-white">{row.activeCases} active</p>
                          <p className="text-[10px] text-on-surface-variant">{row.successRate}% success</p>
                        </td>
                        <td className="py-3 px-4">
                          <p className="text-xs text-white">
                            {(row.roles || []).map((role) => role.name).join(", ") || "No role"}
                          </p>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                              row.isLocked ? "bg-error/20 text-error" : "bg-primary-container/10 text-primary-container"
                            }`}
                          >
                            {row.isLocked ? "Locked" : "Active"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => handleEdit(row)} className="p-1.5 text-outline hover:text-white">
                              <span className="material-symbols-outlined text-base">edit</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleLockToggle(row)}
                              disabled={!canManageTeam}
                              className="p-1.5 text-outline hover:text-error disabled:opacity-40"
                            >
                              <span className="material-symbols-outlined text-base">{row.isLocked ? "lock_open" : "lock"}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(row.id)}
                              disabled={!canManageTeam}
                              className="p-1.5 text-outline hover:text-error disabled:opacity-40"
                            >
                              <span className="material-symbols-outlined text-base">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">
                Page {pagination.page} of {pagination.totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => loadTeam({ page: Math.max(1, pagination.page - 1), search: searchInput, status })}
                  disabled={pagination.page <= 1}
                  className="px-3 py-1 border border-outline-variant/30 rounded text-xs text-outline disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    loadTeam({ page: Math.min(pagination.totalPages, pagination.page + 1), search: searchInput, status })
                  }
                  disabled={pagination.page >= pagination.totalPages}
                  className="px-3 py-1 border border-outline-variant/30 rounded text-xs text-outline disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
        </div>

        {isModalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-3xl bg-surface border border-outline-variant/20 rounded-2xl shadow-2xl max-h-[92vh] overflow-hidden">
              <div className="px-6 py-4 border-b border-outline-variant/20 bg-gradient-to-r from-primary-container/10 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{form.id ? "Update Matchmaker Account" : "Create Matchmaker Account"}</h3>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Add credentials, upload optional profile image, and assign role permissions.
                    </p>
                  </div>
                  <button type="button" onClick={handleCloseModal} className="text-on-surface-variant hover:text-white">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>

              <form onSubmit={submitForm} className="p-6 overflow-y-auto hide-scrollbar max-h-[74vh] space-y-5">
                <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/20">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3 font-bold">Profile Image</p>
                  <div className="flex items-center gap-4">
                    {form.avatarUrl ? (
                      <img src={form.avatarUrl} alt="Avatar preview" className="w-16 h-16 rounded-full object-cover border border-outline-variant/30" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-lg font-bold text-primary-container">
                        {(form.name || "NA")
                          .split(" ")
                          .slice(0, 2)
                          .map((item) => item[0] || "")
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <label className="px-3 py-2 border border-outline-variant/30 rounded text-xs font-bold uppercase tracking-widest cursor-pointer hover:border-primary-container/60">
                        {uploadingAvatar ? "Uploading..." : "Upload Image"}
                        <input type="file" accept="image/*" className="hidden" onChange={handleAvatarFile} disabled={uploadingAvatar || saving} />
                      </label>
                      {form.avatarUrl ? (
                        <button
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, avatarUrl: "" }))}
                          className="px-3 py-2 border border-error/40 text-error rounded text-xs font-bold uppercase tracking-widest"
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-container rounded-xl p-4 border border-outline-variant/20">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-1 w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface focus:border-primary-container/60"
                      placeholder="Full name"
                      disabled={!canManageTeam}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-1 w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface focus:border-primary-container/60"
                      placeholder="Email"
                      disabled={!canManageTeam}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      {form.id ? "New Password (Optional)" : "Password"}
                    </label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                      className="mt-1 w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface focus:border-primary-container/60"
                      placeholder={form.id ? "Leave blank to keep existing password" : "Password"}
                      disabled={!canManageTeam}
                      required={!form.id}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Avatar URL (Optional)</label>
                    <input
                      type="url"
                      value={form.avatarUrl}
                      onChange={(e) => setForm((prev) => ({ ...prev, avatarUrl: e.target.value }))}
                      className="mt-1 w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-sm text-on-surface focus:border-primary-container/60"
                      placeholder="https://..."
                      disabled={!canManageTeam}
                    />
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/20">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Assign Roles</label>
                  <div className="relative mt-2">
                    <button
                      type="button"
                      disabled={!canManageTeam}
                      onClick={() => setRoleDropdownOpen((prev) => !prev)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded py-2.5 px-3 text-left text-sm text-on-surface flex items-center justify-between hover:border-primary-container/60 disabled:opacity-60"
                    >
                      <span>{selectedRoles.length ? `${selectedRoles.length} role(s) selected` : "Select one or more roles"}</span>
                      <span className="material-symbols-outlined text-base text-on-surface-variant">
                        {roleDropdownOpen ? "expand_less" : "expand_more"}
                      </span>
                    </button>
                    {roleDropdownOpen ? (
                      <div className="absolute z-20 mt-2 w-full bg-surface-container border border-outline-variant/20 rounded-lg shadow-xl max-h-56 overflow-y-auto hide-scrollbar">
                        {roles.length === 0 ? (
                          <p className="px-3 py-3 text-xs text-on-surface-variant">No active roles available.</p>
                        ) : (
                          roles.map((role) => {
                            const checked = form.roleIds.includes(role.id)
                            return (
                              <label key={role.id} className="flex items-center gap-3 px-3 py-2.5 hover:bg-surface-container-high cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleRole(role.id)}
                                  className="w-4 h-4 accent-primary-container"
                                />
                                <div className="min-w-0">
                                  <p className="text-sm text-white truncate">{role.name}</p>
                                  <p className="text-[10px] text-on-surface-variant truncate">{role.description || role.slug}</p>
                                </div>
                              </label>
                            )
                          })
                        )}
                      </div>
                    ) : null}
                  </div>
                  {selectedRoles.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedRoles.map((role) => (
                        <span key={role.id} className="px-2.5 py-1 rounded-full bg-primary-container/15 border border-primary-container/30 text-primary-container text-[10px] font-bold uppercase tracking-wide">
                          {role.name}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-outline-variant/20">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 border border-outline-variant/30 text-on-surface rounded text-xs font-bold uppercase tracking-widest"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!canManageTeam || saving || uploadingAvatar}
                    className="px-5 py-2 metallic-gradient text-on-primary rounded text-xs font-bold uppercase tracking-widest disabled:opacity-60"
                  >
                    {saving ? "Saving..." : form.id ? "Update Account" : "Create Account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
