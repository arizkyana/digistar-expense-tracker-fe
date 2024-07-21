import callApi from "@/helpers/network";
import { useState } from "react";
import { setToken } from "@/helpers/auth";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async (payload) => {
    try {
      setLoading(true);
      const response = await callApi.post("/auth/login", payload);
      setToken(response.data.data.token);
      router.refresh();
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
  };
};

export default useLogin;
