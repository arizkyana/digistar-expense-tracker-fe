"use client";

import Link from "next/link";
import useLogin from "./useLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

function Login() {
  const { login, loading } = useLogin();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="max-w-3xl rounded-lg p-3 flex justify-between items-center gap-5 h-[20rem]">
        <div className="rounded-lg flex items-center justify-center w-1/2 h-full">
          <img
            src="/icons/login.png"
            alt="login"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-1/2 rounded-lg h-full">
          <div>
            <h1 className="font-bold text-2xl">Masuk ke Expense Tracker</h1>
            <div>
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="font-bold text-red-600 hover:text-red-700"
              >
                Daftar
              </Link>
            </div>
          </div>
          <form className="my-3 w-full" onSubmit={handleSubmit(login)}>
            {/* email */}
            <label htmlFor="email" className="block w-full mb-3">
              <span className="block text-sm mb-2">Email</span>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Masukkan email anda"
                className="block"
                {...register("email")}
              />
            </label>

            {/* password */}
            <label htmlFor="password" className="block w-full mb-3">
              <span className="block text-sm mb-2">Password</span>

              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Masukkan password anda"
                className="block"
                {...register("password")}
              />
            </label>

            <div className="my-7"></div>

            <button
              disabled={loading}
              type="submit"
              className={cn(
                "bg-red-600 text-white rounded-lg hover:bg-red-700 p-3 w-full",
                {
                  "bg-slate-600 hover:bg-slate-700 text-slate-400": loading,
                }
              )}
            >
              {loading ? "Tunggu..." : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
