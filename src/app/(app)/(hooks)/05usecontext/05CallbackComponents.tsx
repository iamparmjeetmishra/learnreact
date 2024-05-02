// import { User } from "./page";

import { useContext } from "react"
import { DashboardContext, useUserContext } from "./context"

interface SidebarProps {
   // user: User;
}

interface ProfileProps {
   // user: User
}

export function SideBar({ }: SidebarProps) {

   // const user = useContext(DashboardContext)
   const user = useUserContext()
   
   return (
      <div>
         <div className="font-medium">Username: {user.name}</div>
         <div>Subscription Status: {user.isSubscribed}</div>
      </div>
   )
}


export function Profile({ }: ProfileProps) {
   // const user = useContext(DashboardContext)
   const user = useUserContext()
   return <div>{user.name}</div>
}