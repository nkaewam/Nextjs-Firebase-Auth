"use client";

import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { signIn, signOut } from "@/lib/firebase";
import { useUserStore } from "@/stores/user-store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ExternalLink, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthNav = () => {
  const { user, isUserLoading } = useUserStore();
  const router = useRouter();

  if (isUserLoading) return <Skeleton className="size-10 rounded-full" />;

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="size-10">
            <AvatarImage src={user.photoURL ?? undefined} />
            <AvatarFallback>{user.displayName?.[0]}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              router.push("/home");
            }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View home page
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      variant="outline"
      className="rounded-full border-2"
      onClick={() => {
        signIn({ method: "GOOGLE" });
      }}
    >
      Log in
    </Button>
  );
};

export default AuthNav;
