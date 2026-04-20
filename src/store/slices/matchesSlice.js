import { createSlice } from "@reduxjs/toolkit"

const matchesSlice = createSlice({
  name: "matches",
  initialState: {
    matchmakerDashboard: [
      { name: "Miriam Lefkovits", activeCases: 12, successRate: "74%", completed: 312 },
      { name: "Rabbi Goldberg", activeCases: 18, successRate: "62%", completed: 456 }
    ],
    matchmakerTeam: [
      { member: "Miriam Lefkovits", region: "Jerusalem", workload: "12 active cases" },
      { member: "Rabbi Goldberg", region: "Tel Aviv", workload: "18 active cases" },
      { member: "Hannah Levi", region: "London", workload: "9 active cases" }
    ],
    permissions: [
      { role: "Lead Matchmaker", access: "Full Case Lifecycle", updatedBy: "Super Admin" },
      { role: "Assistant Matchmaker", access: "Limited Candidate View", updatedBy: "Ops Manager" }
    ],
    pipeline: [
      { stage: "Intake", count: 42, sla: "4h average" },
      { stage: "Vetting", count: 19, sla: "12h average" },
      { stage: "Date Scheduling", count: 25, sla: "6h average" }
    ],
    management: [
      { caseId: "C-2234", pair: "Rachel / Yosef", owner: "Miriam", state: "In Discussion" },
      { caseId: "C-2235", pair: "Tamar / Eli", owner: "Hannah", state: "Date Planned" }
    ],
    caseFileDetail: [
      { field: "Case ID", value: "C-2234" },
      { field: "Primary Matchmaker", value: "Miriam Lefkovits" },
      { field: "Next Follow Up", value: "Tomorrow 10:30 AM" }
    ],
    completedMatches: [
      { pair: "Leah + Yair", completedOn: "Mar 02, 2026", matchmaker: "Rabbi Goldberg" },
      { pair: "Noa + Daniel", completedOn: "Mar 07, 2026", matchmaker: "Miriam Lefkovits" }
    ],
    completedCyclesRevenue: [
      { cycle: "March 2026", matches: 21, revenue: "$42,900", margin: "31%" },
      { cycle: "February 2026", matches: 18, revenue: "$39,100", margin: "29%" }
    ]
  },
  reducers: {}
})

export default matchesSlice.reducer
