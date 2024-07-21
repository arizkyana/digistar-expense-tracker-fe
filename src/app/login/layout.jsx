import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token?.value) {
    redirect("/home");
  }

  return <>{children}</>;
};

export default Layout;
