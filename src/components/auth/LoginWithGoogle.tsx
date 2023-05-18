"use client";
import { useAuthActions } from "@/context/AuthContext";
import React from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import GoogleIcon from "../icons/GoogleIcon";

export const LoginWithGoogle = () => {
  const router = useRouter();
  const { signInWithGoogle } = useAuthActions();

  return (
    <>
      <Button
        className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg bg-gray-50 hover:bg-gray-100 duration-150 active:bg-gray-100 text-neutral-700"
        onClick={signInWithGoogle}
      >
        <GoogleIcon />
        Continue with Google
      </Button>
    </>
  );
};

export default LoginWithGoogle;