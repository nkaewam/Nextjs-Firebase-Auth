import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import AuthNav from "./auth-nav";
import HeaderIcon from "./header-icon";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between px-10 py-8">
      <div className="flex w-max gap-10">
        <HeaderIcon />
        <div className="flex w-max gap-6">
          <Link href="/about">
            <Button variant="link">About</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="link">Pricing</Button>
          </Link>
        </div>
      </div>
      <AuthNav />
    </div>
  );
};

export default Header;
