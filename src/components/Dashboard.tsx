
import { User } from "@/app/(app)/(hooks)/05usecontext/page"

import {SideBar, Profile} from '@/lib/utils/05CallbackComponents'

interface DashboardProps {
   user: User
}


export default function Dashboard({ user }: DashboardProps) {
   return (
      <div>
         <SideBar user={user} />
         <Profile user={user} />
      </div>
   )
}