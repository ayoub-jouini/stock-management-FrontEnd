"use client";

import { useFormStatus } from "react-dom";

import Button from "@/components/global/button";
import Loading from "@/components/global/loading";

interface Props {
  name: string;
}

export default function Authsubmit(props: Props) {
  const { name } = props;

  const { pending } = useFormStatus();

  return (
    <>
      <Button type="submit" name={name} />
      {pending ? <Loading /> : <></>}
    </>
  );
}
