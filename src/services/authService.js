import { axiosInstance } from "./axiosInstance"
import { APP_MESSAGES, STATUS_CODES } from "../constants/appConfig"

export const loginAdminAuth = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/auth/login", payload)
    const apiData = response?.data?.data

    if (!apiData?.token || !apiData?.admin) {
      throw new Error(APP_MESSAGES.auth.invalidCredentials)
    }

    return {
      status: STATUS_CODES.ok,
      message: APP_MESSAGES.auth.loginSuccess,
      data: {
        token: apiData.token,
        user: {
          id: apiData.admin.id,
          name: apiData.admin.name,
          role: apiData.admin.role,
          email: apiData.admin.email,
          permissions: apiData.admin.permissions || []
        }
      }
    }
  } catch (error) {
    throw new Error(error.message || APP_MESSAGES.auth.invalidCredentials)
  }
}
