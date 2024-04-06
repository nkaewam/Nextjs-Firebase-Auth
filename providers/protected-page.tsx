"use client";

import { useUserStore } from "@/stores/user-store";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const ProtectedPageProvider = ({ children }: Props) => {
  const { user, isUserLoading } = useUserStore();

  if (!user && !isUserLoading) redirect("/");

  return <>{children}</>;
};

export default ProtectedPageProvider;
