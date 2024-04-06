"use client";

import { auth } from "@/lib/firebase";
import { useUserStore } from "@/stores/user-store";
import { usePathname, useRouter } from "next/navigation";
import React, { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren<{}>;

const AuthProvider = ({ children }: Props) => {
  const [isPageVisible, setIsPageVisible] = useState(false);
  const { setIsUserLoading, setUser } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        if (pathname === "/") {
          router.replace("/app");
        }

        setIsUserLoading(true);
        // slight delay to avoid flickering
        setTimeout(() => {
          setIsPageVisible(true);
        }, 250);
        setUser(user);
        // mock fetch user data
        setTimeout(() => {
          setIsUserLoading(false);
        }, 1000);
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
