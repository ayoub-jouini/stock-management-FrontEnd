"use client";

import { handleForgotPassword } from "../actions";

import Authsubmit from "@/components/auth/auth_submit";
import Input from "@/components/global/input";

export default function ForgotPassword() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={handleForgotPassword}>
        <Input
          id="email"
          label="Email address"
          name="email"
          type="email"
          required={true}
        />
        <div>
          <Authsubmit name="Send Link" />
        </div>
      </form>
    </div>
  );
}
