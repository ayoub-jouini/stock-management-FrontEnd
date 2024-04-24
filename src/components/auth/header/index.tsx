"use client";

import { usePathname } from "next/navigation";

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {pathname === "/auth/login"
        ? "Sign in to your account"
        : "Create a new account"}
    </h2>
  );
}
