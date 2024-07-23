"use client";

import { Navigation } from "@/components/navigation/navigation";
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
      <Navigation />
      <div>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Home;
