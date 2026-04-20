import { axiosInstance } from "./axiosInstance"

export async function fetchAdminDashboard() {
  const response = await axiosInstance.get("/api/v1/admin/dashboard")
  return response?.data?.data?.dashboard
}
