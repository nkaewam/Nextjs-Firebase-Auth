import ProtectedPageProvider from "@/providers/protected-page";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return <ProtectedPageProvider>{children}</ProtectedPageProvider>;
};

export default Layout;
