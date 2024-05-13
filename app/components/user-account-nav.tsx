"use client";

import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md";

import { dashboardLinks } from "@/config/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserAvatar } from "./user-avatar";
import { Icon } from "lucide-react";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <div className="z-10">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar
            user={{
              name: user.name || null,
              image: user.image || null,
            }}
            className="h-8 w-8"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="flex items-center justify-start gap-2 p-2 mt-2">
            <div className="flex flex-col space-y-1 leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  {user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenuSeparator />
          {dashboardLinks.data.map((item, index) => {
            return (
              item.href && (
                <DropdownMenuItem
                  key={index}
                  className="cursor-pointer"
                  asChild
                >
                  <Link href={item.href}>
                    <span>{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              )
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/signIn`,
              });
            }}
          >
            <MdOutlineLogout className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
