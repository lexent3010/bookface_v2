import * as axios from "axios"

const request = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "ca78cc0b-4b4d-4a86-9c5b-ca3e19ff60be"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return request.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return request.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unfollow(userId) {
        return request.delete(`follow/${userId}`)
            .then(response => response.data)
    }
};

export const profileAPI = {
  getProfile(userId) {
      return request.get(`profile/${userId}`)
          .then(response => response.data)
  },
  getStatus(userId) {
      return request.get(`/profile/status/${userId}`)
          .then(response => response.data)
  },
    updateStatus(status) {
      return request.put(`/profile/status`, {status})
    }
};

export const authAPI = {
  getMe() {
      return request.get("auth/me")
          .then(response => response.data)
  }
};