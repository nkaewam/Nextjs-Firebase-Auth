"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "@/lib/firebase";
import { useUserStore } from "@/stores/user-store";
import Link from "next/link";

const LandingLogIn = () => {
  const { user } = useUserStore();
  if (user)
    return (
      <Link href="/app">
        <Button className="mt-10 px-10 py-6">Go to app</Button>
      </Link>
    );
  return (
    <Button
      className="mt-10 px-10 py-6"
      onClick={() => {
        signIn({ method: "GOOGLE" });
      }}
    >
      Get started
    </Button>
  );
};

export default LandingLogIn;
