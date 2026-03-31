"use client";
import { authService } from "@/services/authService";
import { LoginData, RegisterData, User } from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await authService.login(data);
      return res.data;
    },

    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Sign in successful!");
      router.push("/");
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterData) => {
      const res = await authService.register(data);
      console.log("register res", res);

      return res.data;
    },

    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Create account successful!");
      router.push("/");
    },
  });

  return {
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoginLoading: loginMutation.isPending,

    register: registerMutation.mutateAsync,
    registerAsync: registerMutation.mutateAsync,
    isRegisterLoading: registerMutation.isPending,
    user,
  };
};
