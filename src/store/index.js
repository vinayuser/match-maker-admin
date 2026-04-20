import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import dashboardReducer from "./slices/dashboardSlice"
import usersReducer from "./slices/usersSlice"
import matchesReducer from "./slices/matchesSlice"
import systemReducer from "./slices/systemSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    users: usersReducer,
    matches: matchesReducer,
    system: systemReducer
  }
})
