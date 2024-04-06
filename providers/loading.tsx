"use client";

import { useGlobalLoading } from "@/hooks/use-global-loading";
import { Loader2 } from "lucide-react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const LoadingProvider = ({ children }: Props) => {
  const { isGlobalLoading } = useGlobalLoading();

  if (!isGlobalLoading) return <>{children}</>;

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      <Loader2 className="animate-spin size-10" />
      <p>Fetching data</p>
    </div>
  );
};

export default LoadingProvider;
