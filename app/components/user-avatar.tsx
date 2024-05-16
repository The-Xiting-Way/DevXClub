import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";
import { FaUserAlt } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  console.log(user.image);
  return (
    <div className="flex items-center">
      <Avatar {...props}>
        {user.image ? (
          <AvatarImage alt="Picture" src={user.image} />
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user.name}</span>
            <FaUserAlt className="h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>
    </div>
  );
}
