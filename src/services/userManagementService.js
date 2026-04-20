import { axiosInstance } from "./axiosInstance"

export async function fetchVerifiedUsers({
  page = 1,
  limit = 10,
  search = "",
  status = "",
  religiousLevel = ""
}) {
  const response = await axiosInstance.get("/api/v1/admin/verified-users", {
    params: { page, limit, search, status, religiousLevel }
  })
  return response?.data?.data
}

export async function fetchVerifiedUserDetail(userId) {
  const response = await axiosInstance.get(`/api/v1/admin/verified-users/${userId}`)
  return response?.data?.data?.detail
}

export async function updateVerifiedUser(userId, payload) {
  const response = await axiosInstance.patch(`/api/v1/admin/verified-users/${userId}`, payload)
  return response?.data?.data
}

export async function setVerifiedUserLock(userId, isLocked) {
  const response = await axiosInstance.patch(`/api/v1/admin/verified-users/${userId}/lock`, { isLocked })
  return response?.data?.data
}
