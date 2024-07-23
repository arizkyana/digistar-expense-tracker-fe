import callApi from "@/helpers/network";
import { useState } from "react";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const register = async (payload) => {
    try {
      setLoading(true);
      await callApi.post("/auth/register", payload);
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
  };
};

export default useRegister;
