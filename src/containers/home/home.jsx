"use client";

import { logout } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { Plus, CreditCard } from "react-feather";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useAuth from "@/hooks/useAuth";

const Home = () => {
  const router = useRouter();

  const { profile, isLoading } = useAuth();

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <>
      <nav className="border fixed top-0 right-0 w-full p-3 border-b h-14">
        <div className="flex justify-end h-full items-center">
          <Menubar className="border-0">
            <MenubarMenu>
              <MenubarTrigger>
                <div className="flex gap-3 justify-center items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="block">
                    {isLoading ? "..." : profile?.username}
                  </span>
                </div>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Profile</MenubarItem>
                <MenubarItem>Setting</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </nav>
      <aside className="border-r w-[16rem] h-screen fixed top-0 bottom-0 bg-white overflow-y-hidden">
        <div className="px-5 flex items-center border-b h-14">
          <h1 className="font-bold text-lg">Expense Tracker</h1>
        </div>
        <div className="h-full">
          <div className="border-b border-dashed max-h-[40%] overflow-y-auto relative">
            <div className="flex justify-between items-center sticky top-0 bg-white px-5 py-3">
              <h3 className="font-bold text-lg">Wallets</h3>
              <button className="border border-dashed rounded-xl flex justify-center items-center p-2 hover:bg-slate-50">
                <Plus className="w-5" />
              </button>
            </div>
            <div className="my-6 px-5">
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Home Wallet</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(100000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-h-[60%] overflow-y-auto relative">
            <div className="flex justify-between items-center sticky top-0 bg-white px-5 py-3">
              <h3 className="font-bold text-lg">Categories</h3>
              <button className="border border-dashed rounded-xl flex justify-center items-center p-2 hover:bg-slate-50">
                <Plus className="w-5" />
              </button>
            </div>
            <div className="my-6 px-5">
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Home Wallet</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(100000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
              <div className="flex gap-5 py-2 cursor-pointer">
                <div className="rounded-xl bg-red-600 text-white p-3">
                  <CreditCard className="w-6" />
                </div>
                <div>
                  <span className="font-bold block">Investment</span>
                  <span className="text-slate-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(800000)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* <Navigation />
      <div>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </div> */}
    </>
  );
};

export default Home;
