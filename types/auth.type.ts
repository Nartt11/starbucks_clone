import { loginSchema, registerSchema } from "@/lib/schemas/auth-schema";
import z from "zod";

export type RegisterData = z.infer<typeof registerSchema>;
export type LoginData = z.infer<typeof loginSchema>;

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  status: number;
  timestamp: string;
  correlationId: string;
}

export type AuthResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
};
export type User = {
  userId: string;
  username: string;
  email: string;
  fullname: string;
  createdAt: string;
  emailVerified: boolean;
  roles: string[];
  status: string;
  updatedAt: string;
};
