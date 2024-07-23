"use client";

import Link from "next/link";
import useRegister from "./useRegister";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validation";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

function Register() {
  const { register: submitRegister, loading } = useRegister();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="max-w-3xl rounded-lg p-3 flex justify-between items-center gap-5 min-h-[20rem]">
        <div className="rounded-lg flex items-center justify-center w-1/2 h-full">
          <img
            src="/icons/signup.png"
            alt="login"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-1/2 rounded-lg h-full">
          <div>
            <h1 className="font-bold text-2xl">Buat akun baru</h1>
            <div>
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="font-bold text-red-600 hover:text-red-700"
              >
                Login
              </Link>
            </div>
          </div>

          <form
            className="my-3 w-full"
            onSubmit={handleSubmit(submitRegister)}
            noValidate
          >
            {/* fullname */}
            <label htmlFor="fullName" className="block w-full mb-3">
              <span className="block text-sm mb-2">Nama Lengkap</span>
              <Input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Masukkan nama lengkap anda"
                className="block"
                {...register("fullName")}
              />
            </label>

            {/* username */}
            <label htmlFor="username" className="block w-full mb-3">
              <span className="block text-sm mb-2">Username</span>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Masukkan username anda"
                className="block"
                {...register("username")}
              />
            </label>

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

            <label htmlFor="confirmPassword" className="block w-full mb-3">
              <span className="block text-sm mb-2">Konfirmasi Password</span>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Ulangi password"
                className="block"
                {...register("confirmPassword")}
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
              {loading ? "Tunggu..." : "Daftar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {};

export default Register;
