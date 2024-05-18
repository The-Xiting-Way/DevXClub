import Link from "next/link";
import { User } from "next-auth";

import { UserAccountNav } from "./user-account-nav";
import { cn } from "@/utils/cn";
import { buttonVariants } from "@/components/ui/button";

interface UserNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserNav({ user }: UserNavProps) {
  if (user.email === null || user.email === undefined) {
    return (
      <Link
        href="/signIn"
        className={`border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full`}
      >
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </Link>
    );
  }

  return (
    <UserAccountNav
      user={{
        name: user.name,
        image: user.image,
        email: user.email,
      }}
    />
  );
}
