"use client";

import { logout } from "@/helpers/auth";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <div>
      Home Container
      <div>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Home;
