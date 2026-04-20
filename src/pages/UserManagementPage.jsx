import { useEffect, useMemo, useState } from "react"
import {
  fetchVerifiedUserDetail,
  fetchVerifiedUsers,
  setVerifiedUserLock,
  updateVerifiedUser
} from "../services/userManagementService"
import { UserProfileDetailModal } from "../components/modals/UserProfileDetailModal"

const PAGE_SIZE = 10

export function UserManagementPage() {
  const [rows, setRows] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [actionLoadingId, setActionLoadingId] = useState(null)
  const [searchInput, setSearchInput] = useState("")
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    religiousLevel: ""
  })
  const [modalType, setModalType] = useState(null)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [selectedDetail, setSelectedDetail] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [editSaving, setEditSaving] = useState(false)
  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    country: "",
    religiousLevel: "",
    profileStatus: "active"
  })

  const loadUsers = async (next = {}) => {
    const params = {
      page: next.page ?? pagination.page,
      limit: PAGE_SIZE,
      search: next.search ?? filters.search,
      status: next.status ?? filters.status,
      religiousLevel: next.religiousLevel ?? filters.religiousLevel
    }
    try {
      setLoading(true)
      setError("")
      const data = await fetchVerifiedUsers(params)
      setRows(data?.users || [])
      setPagination(data?.pagination || { page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
      setFilters({
        search: data?.filters?.search ?? params.search,
        status: data?.filters?.status ?? params.status,
        religiousLevel: data?.filters?.religiousLevel ?? params.religiousLevel
      })
    } catch (err) {
      setError(err.message || "Failed to load verified users.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers({ page: 1 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const applySearch = () => loadUsers({ page: 1, search: searchInput.trim() })
  const handleStatus = (value) => loadUsers({ page: 1, status: value })
  const handleReligious = (value) => loadUsers({ page: 1, religiousLevel: value })

  const openModal = async (userId, type) => {
    try {
      setSelectedUserId(userId)
      setModalType(type)
      setDetailLoading(true)
      setError("")
      const detail = await fetchVerifiedUserDetail(userId)
      setSelectedDetail(detail)
      if (type === "edit") {
        const p = detail?.profile || {}
        setEditForm({
          firstName: p.firstName || "",
          lastName: p.lastName || "",
          phone: p.phone || "",
          city: p.city || "",
          country: p.country || "",
          religiousLevel: p.religiousLevel || "",
          profileStatus: p.profileStatus || "active"
        })
      }
    } catch (err) {
      setError(err.message || "Failed to load user details.")
      setModalType(null)
      setSelectedUserId(null)
      setSelectedDetail(null)
    } finally {
      setDetailLoading(false)
    }
  }

  const closeModal = () => {
    setModalType(null)
    setSelectedUserId(null)
    setSelectedDetail(null)
    setDetailLoading(false)
  }

  const handleToggleLock = async (row) => {
    try {
      setActionLoadingId(row.userId)
      const nextLocked = !row.isLocked
      await setVerifiedUserLock(row.userId, nextLocked)
      setRows((prev) =>
        prev.map((item) =>
          item.userId === row.userId
            ? {
                ...item,
                isLocked: nextLocked,
                profileStatus: nextLocked
                  ? item.profileStatus === "active"
                    ? "paused"
                    : item.profileStatus
                  : item.profileStatus === "paused"
                    ? "active"
                    : item.profileStatus
              }
            : item
        )
      )
    } catch (err) {
      setError(err.message || "Failed to update lock state.")
    } finally {
      setActionLoadingId(null)
    }
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault()
    if (!selectedUserId) return
    try {
      setEditSaving(true)
      await updateVerifiedUser(selectedUserId, editForm)
      await loadUsers({ page: pagination.page })
      closeModal()
    } catch (err) {
      setError(err.message || "Failed to update user profile.")
    } finally {
      setEditSaving(false)
    }
  }

  const showingText = useMemo(() => {
    if (pagination.total === 0) return "Showing 0 users"
    const start = (pagination.page - 1) * pagination.limit + 1
    const end = Math.min(pagination.page * pagination.limit, pagination.total)
    return `Showing ${start}-${end} of ${pagination.total} verified members`
  }, [pagination])

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      <div className="p-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">User Management</h1>
            <p className="text-on-surface-variant text-sm mt-1">
              Review and manage verified premium member credentials.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-surface-container hover:bg-surface-container-high text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors border border-outline-variant/10">
              Export Directory
            </button>
            <button className="px-5 py-2.5 metallic-gradient text-on-primary text-xs font-bold uppercase tracking-widest rounded-sm">
              Add New Member
            </button>
          </div>
        </div>

        {error ? (
          <div className="mb-4 border border-error/30 bg-error/10 text-error rounded-lg px-4 py-3 text-sm">{error}</div>
        ) : null}

        <div className="bg-surface border border-outline-variant/10 rounded-sm p-4 mb-6 flex flex-wrap items-center gap-6 shadow-xl">
          <div className="flex-1 min-w-[300px] relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input
              className="w-full bg-surface-container-lowest border-none text-sm py-2.5 pl-10 pr-4 text-white placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary-container rounded-sm"
              placeholder="Search by name or email..."
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") applySearch()
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Status</label>
              <select
                value={filters.status}
                onChange={(e) => handleStatus(e.target.value)}
                className="bg-surface-container-lowest border-none text-xs text-white py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary-container rounded-sm appearance-none cursor-pointer min-w-[120px]"
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="in_match">In Match</option>
                <option value="closed">Closed</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Religious Level</label>
              <input
                value={filters.religiousLevel}
                onChange={(e) => handleReligious(e.target.value)}
                className="bg-surface-container-lowest border-none text-xs text-white py-2 pl-3 pr-3 focus:ring-1 focus:ring-primary-container rounded-sm min-w-[140px]"
                placeholder="Any level"
              />
            </div>
            <button
              onClick={applySearch}
              className="mt-4 flex items-center gap-2 text-on-surface-variant hover:text-white text-xs font-bold transition-colors uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm">tune</span>
              Apply
            </button>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-sm overflow-hidden border border-outline-variant/10 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/10">
              <tr>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Profile</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Contact Details</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Religious Level</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Status</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Verification</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-on-surface-variant">
                    Loading verified users...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-on-surface-variant">
                    No verified users found for current filters.
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.userId} className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-sm bg-surface-container-high flex items-center justify-center text-primary-container font-bold text-xs">
                          {`${row.firstName?.[0] || ""}${row.lastName?.[0] || ""}`.toUpperCase() || "U"}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{row.fullName || "Unnamed User"}</div>
                          <div className="text-[10px] text-on-surface-variant">ID: #KSH-{row.userId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs text-white">{row.maskedEmail || row.email || "-"}</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">{row.phone || "N/A"}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-primary-container/10 text-primary-container text-[10px] font-bold uppercase tracking-wider border border-primary-container/20">
                        {row.religiousLevel || "Not Set"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            row.isLocked
                              ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"
                              : row.profileStatus === "paused"
                                ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                                : "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                          }`}
                        />
                        <span className="text-xs text-white capitalize">
                          {row.isLocked ? "locked" : row.profileStatus || "active"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-primary-fixed-dim">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                          verified
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => openModal(row.userId, "view")}
                          className="p-2 text-on-surface-variant hover:text-white hover:bg-surface-container-highest rounded-sm transition-all"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                        <button
                          onClick={() => openModal(row.userId, "edit")}
                          className="p-2 text-on-surface-variant hover:text-white hover:bg-surface-container-highest rounded-sm transition-all"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button
                          disabled={actionLoadingId === row.userId}
                          onClick={() => handleToggleLock(row)}
                          className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-sm transition-all disabled:opacity-50"
                        >
                          <span className="material-symbols-outlined text-lg">{row.isLocked ? "lock_open" : "lock"}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-surface-container-low flex justify-between items-center">
            <span className="text-xs text-on-surface-variant font-medium">{showingText}</span>
            <div className="flex gap-2">
              <button
                onClick={() => loadUsers({ page: Math.max(1, pagination.page - 1) })}
                disabled={loading || pagination.page <= 1}
                className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-sm text-xs hover:text-white transition-colors border border-outline-variant/10 disabled:opacity-50"
              >
                Previous
              </button>
              <button className="px-3 py-1 bg-primary-container/10 text-primary-container rounded-sm text-xs font-bold border border-primary-container/20">
                {pagination.page}
              </button>
              <button
                onClick={() => loadUsers({ page: Math.min(pagination.totalPages, pagination.page + 1) })}
                disabled={loading || pagination.page >= pagination.totalPages}
                className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-sm text-xs hover:text-white transition-colors border border-outline-variant/10 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <UserProfileDetailModal
        open={modalType === "view"}
        detail={selectedDetail}
        loading={detailLoading}
        onClose={closeModal}
        title="User Profile Details"
        subtitle="Review complete profile information"
      />

      {modalType === "edit" ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-4xl bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">
              <div>
                <h3 className="text-xl font-bold text-white">Edit User Profile</h3>
                <p className="text-xs text-on-surface-variant">Update user profile fields</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-on-surface-variant hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 overflow-y-auto hide-scrollbar max-h-[65vh]">
              {detailLoading ? (
                <p className="text-on-surface-variant">Loading user details...</p>
              ) : !selectedDetail ? (
                <p className="text-on-surface-variant">No details found.</p>
              ) : (
                <form className="space-y-4" onSubmit={handleEditSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      value={editForm.firstName}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, firstName: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                      placeholder="First Name"
                    />
                    <input
                      value={editForm.lastName}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, lastName: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                      placeholder="Last Name"
                    />
                    <input
                      value={editForm.phone}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                      placeholder="Phone"
                    />
                    <input
                      value={editForm.religiousLevel}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, religiousLevel: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                      placeholder="Religious Level"
                    />
                    <input
                      value={editForm.city}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, city: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                      placeholder="City"
                    />
                    <input
                      value={editForm.country}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, country: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                      placeholder="Country"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Profile Status</label>
                    <select
                      value={editForm.profileStatus}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, profileStatus: e.target.value }))}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-2.5 px-3 text-sm text-white"
                    >
                      <option value="draft">Draft</option>
                      <option value="pending_review">Pending Review</option>
                      <option value="active">Active</option>
                      <option value="paused">Paused</option>
                      <option value="in_match">In Match</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={editSaving}
                      className="px-4 py-2 metallic-gradient text-on-primary rounded-lg text-sm font-semibold disabled:opacity-60"
                    >
                      {editSaving ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
