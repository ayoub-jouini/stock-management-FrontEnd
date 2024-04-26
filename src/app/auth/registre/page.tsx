"use client";

import { handleRegistre } from "../actions";

import Authsubmit from "@/components/auth/auth_submit";
import Input from "@/components/global/input";

export default function Registre() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={handleRegistre}>
        <div className="md:flex justify-between items-center space-y-6 md:space-y-0">
          <Input
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            required={true}
          />
          <Input
            id="lastName"
            label="Last Name"
            name="lastName"
            type="text"
            required={true}
          />
        </div>
        <Input
          id="email"
          label="Email address"
          name="email"
          type="email"
          required={true}
        />
        <Input
          id="phone"
          label="Phone Number"
          name="phone"
          type="number"
          required={true}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          type="password"
          required={true}
        />
        <div>
          <Authsubmit name="Registre" />
        </div>
      </form>
    </div>
  );
}
