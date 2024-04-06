"use client";

import { useUserStore } from "@/stores/user-store";
import Link from "next/link";
import React from "react";

type Props = {};

const HeaderIcon = (props: Props) => {
  const { user } = useUserStore();
  const href = user ? "/app" : "/";
  return (
    <Link href={href}>
      <p className="text-3xl font-bold">ACME</p>
    </Link>
  );
};

export default HeaderIcon;
