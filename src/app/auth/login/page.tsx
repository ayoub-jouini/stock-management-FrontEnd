"use client";

import { handleSignIn } from "../actions";
import { useFormStatus } from "react-dom";

import Button from "@/components/global/button";
import Input from "@/components/global/input";
import Loading from "@/components/global/loading";

const Authsubmit = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button type="submit" name="Sign in" />
      {pending ? <Loading /> : <></>}
    </>
  );
};

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
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
        <div>
          <Authsubmit />
        </div>
      </form>
    </div>
  );
}
