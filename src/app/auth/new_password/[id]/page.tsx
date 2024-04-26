"use client";

import { handleResetPassword } from "../../actions";

import Input from "@/components/global/input";
import Authsubmit from "@/components/auth/auth_submit";

export default function NewPassword() {
  //todo: check if token is ok

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={handleResetPassword}>
        <Input
          id="password"
          label="New password"
          name="password"
          type="password"
          required={true}
        />
        <Input
          id="cpassword"
          label="Confirm new password"
          name="cpassword"
          type="password"
          required={true}
        />
        <div>
          <Authsubmit name="Reset Password" />
        </div>
      </form>
    </div>
  );
}
