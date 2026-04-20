import { useEffect, useState } from "react"
import {
  fetchApprovalProfileDetail,
  fetchApprovalQueue,
  reviewApprovalProfile
} from "../services/approvalQueueService"
import { UserProfileDetailModal } from "../components/modals/UserProfileDetailModal"

const PAGE_SIZE = 8

export function ProfileApprovalsPage() {
  const [profiles, setProfiles] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [actionLoadingId, setActionLoadingId] = useState(null)
  const [selectedProfileId, setSelectedProfileId] = useState(null)
  const [selectedProfileDetail, setSelectedProfileDetail] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)

  const loadQueue = async (page = 1) => {
    try {
      setLoading(true)
      setError("")
      const data = await fetchApprovalQueue({ page, limit: PAGE_SIZE })
      setProfiles(data?.profiles || [])
      setPagination(data?.pagination || { page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
    } catch (err) {
      setError(err.message || "Failed to load approval queue.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadQueue(1)
  }, [])

  const handleReview = async (userId, decision) => {
    try {
      setActionLoadingId(userId)
      await reviewApprovalProfile({ userId, decision })

      // Optimistic, smooth removal from current view to avoid jarring full-list redraw.
      let nextPage = pagination.page
      setProfiles((prev) => {
        const next = prev.filter((profile) => profile.userId !== userId)
        if (next.length === 0 && pagination.page > 1) {
          nextPage = pagination.page - 1
        }
        return next
      })

      setPagination((prev) => {
        const nextTotal = Math.max(0, prev.total - 1)
        const nextTotalPages = Math.max(1, Math.ceil(nextTotal / prev.limit))
        const safePage = Math.min(nextPage, nextTotalPages)
        return {
          ...prev,
          total: nextTotal,
          totalPages: nextTotalPages,
          page: safePage
        }
      })

      // Re-sync quietly from API for consistency.
      await loadQueue(nextPage)
    } catch (err) {
      setError(err.message || "Failed to review profile.")
    } finally {
      setActionLoadingId(null)
    }
  }

  const openDetailModal = async (userId) => {
    try {
      setSelectedProfileId(userId)
      setDetailLoading(true)
      setError("")
      const detail = await fetchApprovalProfileDetail(userId)
      setSelectedProfileDetail(detail)
    } catch (err) {
      setError(err.message || "Failed to load profile detail.")
    } finally {
      setDetailLoading(false)
    }
  }

  const closeDetailModal = () => {
    setSelectedProfileId(null)
    setSelectedProfileDetail(null)
    setDetailLoading(false)
  }

  const formatSubmittedAgo = (value) => {
    if (!value) return "Unknown submission time"
    const date = new Date(value)
    const diffMs = Date.now() - date.getTime()
    const mins = Math.max(1, Math.floor(diffMs / 60000))
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    return `${days}d ago`
  }

  const getInitials = (profile) => {
    const first = profile?.firstName?.[0] || ""
    const last = profile?.lastName?.[0] || ""
    return `${first}${last}`.toUpperCase() || "NA"
  }

  return (
    <div className="h-full overflow-y-auto hide-scrollbar px-4 pb-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Profile Approvals Queue</h2>
            <p className="text-on-surface-variant mt-1">Review all newly submitted registrations before activation.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
              Pending: {pagination.total}
            </span>
            <span className="px-3 py-1 bg-surface-container rounded text-xs font-bold uppercase tracking-wider text-[#A3A3A3]">
              Page {pagination.page}/{pagination.totalPages}
            </span>
          </div>
        </div>

        {error ? (
          <div className="mb-4 border border-error/30 bg-error/10 text-error rounded-lg px-4 py-3 text-sm">{error}</div>
        ) : null}

        <div className="space-y-5">
          {loading ? (
            <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-10 text-center text-on-surface-variant">
              Loading approval queue...
            </div>
          ) : profiles.length === 0 ? (
            <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-10 text-center text-on-surface-variant">
              No pending profiles found.
            </div>
          ) : (
            profiles.map((profile) => (
              <article
                key={profile.userId}
                className="bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all hover:translate-y-[-2px] border border-outline-variant/10"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative h-56 lg:h-auto bg-gradient-to-br from-surface-container-high to-surface-container-low flex items-end">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,180,26,0.20),transparent_40%)]" />
                    <div className="relative p-6 w-full">
                      <div className="w-14 h-14 rounded-xl bg-primary-container text-on-primary font-black text-xl flex items-center justify-center mb-4">
                        {getInitials(profile)}
                      </div>
                      <p className="text-primary font-bold text-xl">{profile.fullName || "Unnamed Profile"}</p>
                      <div className="flex items-center text-on-surface-variant text-xs mt-1">
                        <span className="material-symbols-outlined text-xs mr-1">schedule</span>
                        Submitted {formatSubmittedAgo(profile.onboardingCompletedAt)}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 p-7 flex flex-col">
                    <div className="flex flex-wrap justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{profile.fullName || "Unnamed"}</h3>
                        <p className="text-on-surface-variant font-medium">{profile.email || "-"}</p>
                        <p className="text-on-surface-variant text-sm mt-1">
                          {[profile.city, profile.country].filter(Boolean).join(", ") || "Location not provided"}
                        </p>
                      </div>
                      <div className="px-4 py-1.5 bg-primary-container/10 border border-primary/30 rounded-full flex items-center h-fit">
                        <span className="material-symbols-outlined text-primary text-sm mr-2">workspace_premium</span>
                        <span className="text-primary font-bold text-xs uppercase tracking-widest">
                          {profile.religiousLevel || "Not Set"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-7">
                      <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Gender</p>
                        <p className="text-white font-semibold mt-1">{profile.gender || "-"}</p>
                      </div>
                      <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Profile Status</p>
                        <p className="text-white font-semibold mt-1">{profile.profileStatus || "-"}</p>
                      </div>
                      <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Verification</p>
                        <p className="text-white font-semibold mt-1">{profile.verificationStatus || "-"}</p>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 border-t border-[#504533]/10">
                      <button
                        type="button"
                        onClick={() => openDetailModal(profile.userId)}
                        className="px-6 py-3 border border-outline/30 text-on-surface rounded-lg font-bold text-sm hover:bg-white/5 transition-all"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        onClick={() => handleReview(profile.userId, "approve")}
                        disabled={actionLoadingId === profile.userId}
                        className="flex-1 metallic-gradient text-on-primary py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all disabled:opacity-60"
                      >
                        {actionLoadingId === profile.userId ? "Processing..." : "Approve Profile"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleReview(profile.userId, "reject")}
                        disabled={actionLoadingId === profile.userId}
                        className="px-6 py-3 border border-error/30 text-error rounded-lg font-bold text-sm hover:bg-error/5 transition-all disabled:opacity-60"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-on-surface-variant">
            Page {pagination.page} of {pagination.totalPages} - Total pending: {pagination.total}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => loadQueue(Math.max(1, pagination.page - 1))}
              disabled={pagination.page <= 1 || loading}
              className="px-3 py-2 rounded border border-outline-variant/30 text-on-surface-variant text-xs font-semibold disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => loadQueue(Math.min(pagination.totalPages, pagination.page + 1))}
              disabled={pagination.page >= pagination.totalPages || loading}
              className="px-3 py-2 rounded border border-outline-variant/30 text-on-surface-variant text-xs font-semibold disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <UserProfileDetailModal
        open={Boolean(selectedProfileId)}
        detail={selectedProfileDetail}
        loading={detailLoading}
        onClose={closeDetailModal}
        actions={
          selectedProfileId ? (
            <>
              <button
                type="button"
                disabled={actionLoadingId === selectedProfileId}
                onClick={async () => {
                  await handleReview(selectedProfileId, "reject")
                  closeDetailModal()
                }}
                className="px-4 py-2 border border-error/40 text-error rounded-lg text-sm font-semibold disabled:opacity-60"
              >
                Reject
              </button>
              <button
                type="button"
                disabled={actionLoadingId === selectedProfileId}
                onClick={async () => {
                  await handleReview(selectedProfileId, "approve")
                  closeDetailModal()
                }}
                className="px-4 py-2 metallic-gradient text-on-primary rounded-lg text-sm font-semibold disabled:opacity-60"
              >
                Approve
              </button>
            </>
          ) : null
        }
      />
    </div>
  )
}
