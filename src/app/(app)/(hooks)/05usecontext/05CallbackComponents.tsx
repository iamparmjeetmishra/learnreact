import { User } from "./page";

interface SidebarProps {
   // user: User;
}

interface ProfileProps {
   // user: User
}

export function SideBar({ }: SidebarProps) {
   return (
      <div>
         <div className="font-medium">Username: {user.name}</div>
         <div>Subscription Status: {user.isSubscribed}</div>
      </div>
   )
}


export function Profile({ }: ProfileProps) {
   return <div>{user.name}</div>
}