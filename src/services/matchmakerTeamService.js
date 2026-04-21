import { axiosInstance } from "./axiosInstance"

export async function fetchMatchmakerTeam({ page = 1, limit = 10, search = "", status = "" }) {
  const response = await axiosInstance.get("/api/v1/admin/matchmakers", {
    params: { page, limit, search, status }
  })
  return response?.data?.data
}

export async function createMatchmaker(payload) {
  const response = await axiosInstance.post("/api/v1/admin/matchmakers", payload)
  return response?.data?.data?.matchmaker
}

export async function uploadMatchmakerAvatar(file) {
  const formData = new FormData()
  formData.append("photo", file)
  const response = await axiosInstance.post("/api/v1/admin/matchmakers/avatar-upload", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  })
  return response?.data?.data?.url
}

export async function updateMatchmaker(matchmakerId, payload) {
  const response = await axiosInstance.patch(`/api/v1/admin/matchmakers/${matchmakerId}`, payload)
  return response?.data?.data?.matchmaker
}

export async function lockMatchmaker(matchmakerId, isLocked) {
  const response = await axiosInstance.patch(`/api/v1/admin/matchmakers/${matchmakerId}/lock`, { isLocked })
  return response?.data?.data
}

export async function deleteMatchmaker(matchmakerId) {
  const response = await axiosInstance.delete(`/api/v1/admin/matchmakers/${matchmakerId}`)
  return response?.data?.data
}
