import axios from "axios";
import { SubmiteAuthDataTypes } from "../common/types/types";

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "ca78cc0b-4b4d-4a86-9c5b-ca3e19ff60be" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId: number) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },
  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId: number) {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status`, { status });
  },
};

type MeResponseTypes = {
  data: { id: number; email: string; login: string };
  resultCode: number;
  messages: Array<string>;
};

type LoginType = {
  resultCode: number;
  messages: Array<string>;
  data: { userId: number };
};

type CaptchaType = {
  url: string;
};

export const authAPI = {
  getMe() {
    return instance.get<MeResponseTypes>("auth/me").then((res) => res.data);
  },
  login(data: SubmiteAuthDataTypes) {
    return instance
      .post<LoginType>("auth/login", { ...data })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete("auth/login").then((res) => res.data);
  },
  getCaptchaUrl() {
    return instance
      .get<CaptchaType>("/security/get-captcha-url")
      .then((res) => res.data);
  },
};
