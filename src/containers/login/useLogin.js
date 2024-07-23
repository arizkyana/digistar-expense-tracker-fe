import callApi from "@/helpers/network";

import { setToken } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  const router = useRouter();

  const { mutateAsync: login, isPending: loading } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload) => await callApi.post("/auth/login", payload),
    onError(err) {
      console.log("err > ", err);
    },
    onSuccess(res) {
      const token = res?.data?.data?.token;
      setToken(token);
      router.refresh();
    },
  });

  return {
    login,
    loading,
  };
};

export default useLogin;
