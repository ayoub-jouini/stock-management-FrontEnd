"use client";

import Link from "next/link";

import { handleSignIn } from "../actions";

import Input from "@/components/global/input";
import Authsubmit from "@/components/auth/auth_submit";

export default function Login() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={handleSignIn}>
        <Input
          id="email"
          label="Email address"
          name="email"
          type="email"
          required={true}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          type="password"
          required={true}
        />
        <div className="text-sm flex justify-end">
          <Link
            href="/auth/forgot_password"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        </div>
        <div>
          <Authsubmit name="Sign in" />
        </div>
      </form>
    </div>
  );
}
