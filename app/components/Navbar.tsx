import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { getCurrentUser } from "../lib/session";
import { UserNav } from "./user-nav";
export async function Navbar() {
  const user = await getCurrentUser();
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <FloatingNav
        user={{
          name: user?.name,
          image: user?.image,
          email: user?.email,
        }}
        navItems={navItems}
      />
      <div className="fixed top-7 right-5 flex justify-end items-end">
        <UserNav
          user={{
            name: user?.name,
            image: user?.image,
            email: user?.email,
          }}
        />
      </div>
    </>
  );
}
