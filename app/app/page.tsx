"use client";

import { useUserStore } from "@/stores/user-store";
import React from "react";

const Page = () => {
  const { user } = useUserStore();
  if (!user) return <div>Not authorized</div>;
  return (
    <div className="flex flex-col py-20 items-center">
      <h1 className="text-5xl font-bold">Hello, {user.displayName}!</h1>
    </div>
  );
};

export default Page;
