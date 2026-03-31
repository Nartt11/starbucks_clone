import {
  ApiResponse,
  AuthResponse,
  LoginData,
  RegisterData,
} from "@/types/auth.type";
import { api } from "./api";

export const authService = {
  login: async (loginData: LoginData): Promise<ApiResponse<AuthResponse>> => {
    try {
      const res = await api.post("/auth/login", loginData);

      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Login failed");
    }
  },
  register: async (
    registerData: RegisterData,
  ): Promise<ApiResponse<AuthResponse>> => {
    try {
      const res = await api.post("/auth/register", registerData);
      return res.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Register failed");
    }
  },
};
