"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthFooter() {
  const pathname = usePathname();

  const getLink = (): string => {
    if (pathname === "/auth/login") {
      return "/auth/registre";
    } else if (pathname === "/auth/registre") {
      return "/auth/login";
    } else {
      return "/contact";
    }
  };

  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {pathname === "/auth/login" && "You are not registered ?"}
      {pathname === "/auth/registre" && "Already have an account?"}
      {pathname === "/auth/forgot_password" && "Still have a problem?"}

      <Link
        href={getLink()}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        {pathname === "/auth/login" && "Create an account"}
        {pathname === "/auth/registre" && "Sign in"}
        {pathname === "/auth/forgot_password" && "Contact us"}
      </Link>
    </p>
  );
}
