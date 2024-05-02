import { User } from "@/app/(app)/(hooks)/05usecontext/page";

interface SidebarProps {
   user: User;
}

interface ProfileProps {
   user: User
}

export function SideBar({ user }: SidebarProps) {
   return (
      <div>
         <div>{user.name}</div>
         <div>Subscription Status: {user.isSubscribed}</div>
      </div>
   )
}


export function Profile({ user }: ProfileProps) {
   return <div>{user.name}</div>
}