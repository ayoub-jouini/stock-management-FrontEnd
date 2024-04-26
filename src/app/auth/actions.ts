"use server";

import { revalidatePath } from "next/cache";

export const handleSignIn = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
};

export const handleRegistre = async (formData: FormData) => {};

export const handleForgotPassword = async (formData: FormData) => {};

export const handleResetPassword = async (formData: FormData) => {};
