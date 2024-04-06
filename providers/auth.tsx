"use client";

import { useGlobalLoading } from "@/hooks/use-global-loading";
import { auth } from "@/lib/firebase";
import React, { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren<{}>;

const AuthProvider = ({ children }: Props) => {
  const [isPageVisible, setIsPageVisible] = useState(false);
  const { setIsGlobalLoading } = useGlobalLoading();
  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        // mock fetch user data
        setIsPageVisible(true);
        setIsGlobalLoading(true);
        setTimeout(() => {
          setIsGlobalLoading(false);
        }, 2000);
      } else {
        setIsPageVisible(true);
      }
    });

    return () => {
      authListener();
    };
  }, []);

  if (!isPageVisible) return <></>;

  return <>{children}</>;
};

export default AuthProvider;
