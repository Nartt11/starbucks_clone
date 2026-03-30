import { authService } from "@/services/authService";
import { LoginData } from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await authService.login(data);
      return res.data;
    },

    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      toast.success("Sign in successful!");
      router.push("/");
    },
  });

  return {
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
  };
};
