import axios from "axios";
import { toast } from "sonner";

const API_BASE_URL = "https://pet-rescue-api-0uhx.onrender.com/api/v1";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      toast.error(
        error?.response?.data?.message || "Unauthorized. Please log in again.",
      );

      localStorage.removeItem("token");
      // window.location.href = "account/signin";
    }

    if (status === 400) {
      toast.error(
        error?.response?.data?.message ||
          "Bad request. Please check your input.",
      );
    }

    if (status === 403) {
      toast.error(
        error?.response?.data?.message ||
          "Forbidden. You don't have permission to access this resource.",
      );
    }

    return Promise.reject(error);
  },
);
