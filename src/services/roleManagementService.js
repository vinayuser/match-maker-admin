import { axiosInstance } from "./axiosInstance"

export async function fetchAdminPermissions() {
  const response = await axiosInstance.get("/api/v1/admin/permissions")
  return response?.data?.data?.permissions || []
}

export async function fetchAdminRoles() {
  const response = await axiosInstance.get("/api/v1/admin/roles")
  return response?.data?.data?.roles || []
}

export async function createAdminRole(payload) {
  const response = await axiosInstance.post("/api/v1/admin/roles", payload)
  return response?.data?.data?.role
}

export async function updateAdminRole(roleId, payload) {
  const response = await axiosInstance.patch(`/api/v1/admin/roles/${roleId}`, payload)
  return response?.data?.data?.role
}

export async function deleteAdminRole(roleId) {
  const response = await axiosInstance.delete(`/api/v1/admin/roles/${roleId}`)
  return response?.data?.data
}
