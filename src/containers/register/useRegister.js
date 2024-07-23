import callApi from "@/helpers/network";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useRegister = () => {
  const router = useRouter();

  const { mutateAsync: register, isPending: loading } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (payload) =>
      await callApi.post("/auth/register", payload),
    onError(err) {
      console.log("err register > ", err);
    },
    onSuccess() {
      router.replace("/login");
    },
  });

  return {
    register,
    loading,
  };
};

export default useRegister;
