import axios from "axios"
import { APP_MESSAGES, STATUS_CODES } from "../constants/appConfig"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
  timeout: 10000
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("kesher_access_token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status
    if (status === STATUS_CODES.unauthorized) {
      localStorage.removeItem("kesher_access_token")
      return Promise.reject(new Error(APP_MESSAGES.common.unauthorized))
    }

    return Promise.reject(
      new Error(error?.response?.data?.message || APP_MESSAGES.common.serverUnavailable)
    )
  }
)
