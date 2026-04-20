import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
  name: "users",
  initialState: {
    directory: [
      { id: "U-1041", name: "Rachel Weissman", tier: "Premium", city: "Jerusalem", status: "Active" },
      { id: "U-1042", name: "Yosef Klein", tier: "Gold", city: "Tel Aviv", status: "Review" },
      { id: "U-1043", name: "David Stein", tier: "Standard", city: "New York", status: "Active" }
    ],
    management: [
      { role: "Super Admin", members: 2, permissions: "Full Platform Control" },
      { role: "Matchmaker", members: 15, permissions: "Case + Communication" },
      { role: "Reviewer", members: 8, permissions: "Approvals + Compliance" }
    ],
    approvalQueue: [
      { applicant: "Rachel Weissman", pendingHours: 32, step: "Profile Check" },
      { applicant: "Yosef Klein", pendingHours: 28, step: "Identity Doc" },
      { applicant: "David Stein", pendingHours: 26, step: "Reference Check" }
    ]
  },
  reducers: {}
})

export default usersSlice.reducer
