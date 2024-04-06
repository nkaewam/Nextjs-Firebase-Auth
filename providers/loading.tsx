"use client";

import { PUBLIC_ROUTES } from "@/constants/routes";
import { useUserStore } from "@/stores/user-store";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const LoadingProvider = ({ children }: Props) => {
  const { isUserLoading } = useUserStore();
  const pathname = usePathname();

  if (!isUserLoading || PUBLIC_ROUTES.includes(pathname))
    return <>{children}</>;

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      <Loader2 className="animate-spin size-10" />
      <p>Fetching data</p>
    </div>
  );
};

export default LoadingProvider;
