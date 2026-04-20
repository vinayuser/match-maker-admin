import { createSlice } from "@reduxjs/toolkit"

const systemSlice = createSlice({
  name: "system",
  initialState: {
    configuration: [
      { key: "Environment", value: "Staging" },
      { key: "Region", value: "eu-west-1" },
      { key: "Audit Mode", value: "Enabled" }
    ],
    statusCards: [
      { label: "API Health", value: "Healthy" },
      { label: "Queue Processor", value: "Running" },
      { label: "Notification Service", value: "Degraded" }
    ]
  },
  reducers: {}
})

export default systemSlice.reducer
