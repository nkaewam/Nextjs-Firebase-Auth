"use client";

import { auth } from "@/lib/firebase";
import React, { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren<{}>;

const AuthHoc = ({ children }: Props) => {
  const [isPageVisible, setIsPageVisible] = useState(false);
  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in");
      }
      setIsPageVisible(true);
    });

    return () => {
      authListener();
    };
  }, []);

  if (!isPageVisible) return <></>;

  return <>{children}</>;
};

export default AuthHoc;
