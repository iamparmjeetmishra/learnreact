
// import { User } from "@/app/(app)/(hooks)/05usecontext/page"

import {SideBar, Profile} from './05CallbackComponents'

interface DashboardProps {}


export default function Dashboard({ }: DashboardProps) {
   return (
      <div>
         {/* <SideBar user={user} />
         <Profile user={user} /> */}
         <SideBar />
         <Profile />
      </div>
   )
}