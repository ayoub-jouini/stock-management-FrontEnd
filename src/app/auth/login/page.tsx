"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/input";
import { handleSignIn } from "../actions";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={handleSignIn} method="POST">
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
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
        <div>
          <Button type="submit" name="Sign in" />
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        you are not registered ?
        <Link
          href="/auth/registre"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
