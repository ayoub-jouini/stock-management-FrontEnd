"use client";

import { usePathname } from "next/navigation";

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {pathname === "/auth/login" && "Sign in to your account"}
      {pathname === "/auth/registre" && "Create a new account"}
      {pathname === "/auth/forgot_password" &&
        "We'll send you a link to reset your password"}
      {pathname.includes("/auth/new_password") && "Entre a new password"}
    </h2>
  );
}
