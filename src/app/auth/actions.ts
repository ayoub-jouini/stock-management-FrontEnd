"use server";

export const handleSignIn = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
};

export const handleRegistre = async (formData: FormData) => {};
