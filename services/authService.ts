import {
  ApiResponse,
  AuthResponse,
  LoginData,
  ResgisterData,
} from "@/types/auth.type";
import { api } from "./api";

export const authService = {
  login: async (loginData: LoginData): Promise<ApiResponse<AuthResponse>> => {
    const res = await api.post("/auth/login", loginData);

    return res.data;
  },
  register: async (
    registerData: ResgisterData,
  ): Promise<ApiResponse<AuthResponse>> => {
    const res = await api.post("/auth/register", registerData);
    return res.data;
  },
};
