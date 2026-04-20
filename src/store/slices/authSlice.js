import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginAdminAuth } from "../../services/authService"
import { APP_MESSAGES } from "../../constants/appConfig"

const TOKEN_KEY = "kesher_access_token"

const storedToken = localStorage.getItem(TOKEN_KEY)
const storedUser = localStorage.getItem("kesher_user")

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginAdminAuth(credentials)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken || null,
    isAuthenticated: Boolean(storedToken),
    loading: false,
    error: null,
    infoMessage: null
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.error = null
      state.infoMessage = APP_MESSAGES.auth.logoutSuccess
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem("kesher_user")
    },
    clearAuthMessage: (state) => {
      state.error = null
      state.infoMessage = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.infoMessage = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.infoMessage = APP_MESSAGES.auth.loginSuccess
        localStorage.setItem(TOKEN_KEY, action.payload.token)
        localStorage.setItem("kesher_user", JSON.stringify(action.payload.user))
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || APP_MESSAGES.auth.invalidCredentials
      })
  }
})

export const { logout, clearAuthMessage } = authSlice.actions
export default authSlice.reducer
