import axiosClient from "@/api/axiosClient";
import { API_LOGIN } from "@/configs/paths/API_PATH";

export const authService = {
  login: async (payload) => {
    const response = await axiosClient.post(API_LOGIN, payload);

    return response;
  }
}