import { axiosInstance } from "./axiosInstance"

export async function fetchApprovalQueue({ page = 1, limit = 8 }) {
  const response = await axiosInstance.get("/api/v1/admin/approval-queue", {
    params: { page, limit }
  })
  return response?.data?.data
}

export async function reviewApprovalProfile({ userId, decision, note }) {
  const response = await axiosInstance.patch(`/api/v1/admin/approval-queue/${userId}/review`, {
    decision,
    note
  })
  return response?.data?.data
}

export async function fetchApprovalProfileDetail(userId) {
  const response = await axiosInstance.get(`/api/v1/admin/approval-queue/${userId}`)
  return response?.data?.data?.detail
}
