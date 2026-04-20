import { useMemo } from "react"

export function UserProfileDetailModal({
  open,
  detail,
  loading,
  onClose,
  title = "Submitted Profile Details",
  subtitle = "Review complete profile before taking action",
  actions = null
}) {
  const detailFacts = useMemo(() => {
    if (!detail?.profile) return []
    const p = detail.profile
    return [
      { label: "Name", value: [p.firstName, p.lastName].filter(Boolean).join(" ") || "-" },
      { label: "Email", value: detail.email || "-" },
      { label: "Gender", value: p.gender || "-" },
      { label: "Religious Level", value: p.religiousLevel || "-" },
      { label: "City", value: p.city || "-" },
      { label: "Country", value: p.country || "-" },
      { label: "Marital Status", value: p.maritalStatus || "-" },
      { label: "Occupation", value: p.occupation || "-" },
      { label: "Education", value: p.educationLevel || "-" },
      { label: "Onboarding Step", value: p.lastOnboardingStep || "-" },
      { label: "Profile Status", value: p.profileStatus || "-" },
      { label: "Verification", value: p.verificationStatus || "-" }
    ]
  }, [detail])

  const profileAllFields = useMemo(() => {
    const profile = detail?.profile
    if (!profile) return []
    return Object.entries(profile)
      .filter(([, value]) => value !== null && value !== undefined && value !== "")
      .map(([key, value]) => {
        let parsedValue = value
        if (Array.isArray(value)) parsedValue = value.join(", ")
        else if (typeof value === "object") parsedValue = JSON.stringify(value)
        else if (typeof value === "boolean") parsedValue = value ? "Yes" : "No"

        const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim()
        return { key, label, value: String(parsedValue) }
      })
  }, [detail])

  const photos = useMemo(() => detail?.photos || [], [detail])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-xs text-on-surface-variant">{subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-on-surface-variant hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto hide-scrollbar max-h-[65vh]">
          {loading ? (
            <p className="text-on-surface-variant">Loading profile details...</p>
          ) : !detail ? (
            <p className="text-on-surface-variant">No details found.</p>
          ) : (
            <div className="space-y-6">
              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">User Account</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">User ID</p>
                    <p className="text-sm text-white mt-1">{detail.userId}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">Email</p>
                    <p className="text-sm text-white mt-1">{detail.email || "-"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">Created At</p>
                    <p className="text-sm text-white mt-1">
                      {detail.createdAt ? new Date(detail.createdAt).toLocaleString() : "-"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {detailFacts.map((fact) => (
                  <div key={fact.label} className="bg-surface-container-low rounded-lg p-3 border border-outline-variant/20">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">{fact.label}</p>
                    <p className="text-sm text-white font-medium mt-1 break-words">{fact.value || "-"}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20">
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-2">About Me</p>
                  <p className="text-sm text-white leading-relaxed">
                    {detail.profile?.aboutMe || "No description submitted."}
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20">
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-2">Relationship Intent</p>
                  <p className="text-sm text-white leading-relaxed">
                    {detail.profile?.lookingForRelationship || "No relationship intent submitted."}
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">
                  Submitted Photos ({photos.length})
                </p>
                {photos.length === 0 ? (
                  <p className="text-sm text-on-surface-variant">No photos submitted.</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {photos
                      .slice()
                      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
                      .map((photo) => (
                        <div key={photo.id} className="rounded-lg overflow-hidden border border-outline-variant/20 bg-surface-container">
                          <div className="aspect-square bg-black/30">
                            <img src={photo.imageUrl} alt={`Submitted ${photo.id}`} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-2 space-y-1">
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">
                              Sort: {photo.sortOrder ?? 0}
                            </p>
                            <p className="text-[10px] text-white uppercase tracking-wide">
                              {photo.moderationStatus || "pending"}
                              {photo.isPrimary ? " - Primary" : ""}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">
                  Full Profile Submission ({profileAllFields.length} fields)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {profileAllFields.map((item) => (
                    <div key={item.key} className="bg-surface-container rounded-lg p-3 border border-outline-variant/20">
                      <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">{item.label}</p>
                      <p className="text-sm text-white mt-1 break-words">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-outline-variant/20 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-outline-variant/30 rounded-lg text-sm text-on-surface-variant"
          >
            Close
          </button>
          {actions}
        </div>
      </div>
    </div>
  )
}
