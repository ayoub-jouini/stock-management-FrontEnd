"use client";

import { usePathname } from "next/navigation";

import { H2 } from "@/components/global/heading";

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <H2 style="mt-10 text-center leading-9 tracking-tight">
      {pathname === "/auth/login" && "Sign in to your account"}
      {pathname === "/auth/registre" && "Create a new account"}
      {pathname === "/auth/forgot_password" &&
        "We'll send you a link to reset your password"}
      {pathname.includes("/auth/new_password") && "Entre a new password"}
    </H2>
  );
}
