import { createSlice } from "@reduxjs/toolkit"

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    stats: [
      { id: "users", label: "Total Registered Users", value: "1,482", trend: "+12% vs last month" },
      { id: "approvals", label: "Pending Approvals", value: "24", trend: "Oldest request: 14h ago" },
      { id: "activeMatches", label: "Active Matches", value: "86", trend: "14 scheduled this week" },
      { id: "revenue", label: "Revenue This Month", value: "$42,900", trend: "+8.4% to target" }
    ],
    recentRegistrations: [
      { name: "Abraham Zeligman", date: "Oct 24, 2023", religiousLevel: "Orthodox" },
      { name: "Sarah Shapiro", date: "Oct 24, 2023", religiousLevel: "Conservative" },
      { name: "Mordechai Katz", date: "Oct 23, 2023", religiousLevel: "Modern Orthodox" }
    ]
  },
  reducers: {}
})

export default dashboardSlice.reducer
