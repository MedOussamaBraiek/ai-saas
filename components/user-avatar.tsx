import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        <span>{user?.firstName ? user.firstName.charAt(0) : ""}</span>
        <span>{user?.lastName ? user.lastName.charAt(0) : ""}</span>
      </AvatarFallback>
    </Avatar>
  );
};
