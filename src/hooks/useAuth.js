import callApi from "@/helpers/network";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-profile"],
    queryFn: async () =>
      await callApi({
        url: "/auth/me",
        method: "GET",
      }),
  });

  const profile = useMemo(() => {
    return data?.data?.data;
  }, [data]);

  return {
    profile,
    isLoading,
  };
};

export default useAuth;
