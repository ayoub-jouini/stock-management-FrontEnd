"use client";

import { handleRegistre } from "../actions";
import { useFormStatus } from "react-dom";

import Button from "@/components/global/button";
import Input from "@/components/global/input";
import Loading from "@/components/global/loading";

const Authsubmit = () => {
  const { pending } = useFormStatus();

  return (
    <div className="mt-9">
      <Button type="submit" name="Registre" />
      {pending ? <Loading /> : <></>}
    </div>
  );
};

export default function Registre() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={handleRegistre} method="POST">
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
          <Authsubmit />
        </div>
      </form>
    </div>
  );
}
