"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthFooter() {
  const pathname = usePathname();

  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {pathname === "/auth/login"
        ? "you are not registered ?"
        : "already have an account?"}
      <Link
        href={pathname === "/auth/login" ? "/auth/registre" : "/auth/login"}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        {pathname === "/auth/login" ? "Create an account" : "Sign in"}
      </Link>
    </p>
  );
}
