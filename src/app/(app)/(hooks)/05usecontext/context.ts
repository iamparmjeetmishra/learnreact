import { createContext, useContext } from "react";
import { User } from "./page";
import { error } from "console";

export const DashboardContext = createContext<User | undefined>(undefined)

export function useUserContext() {
   const user = useContext(DashboardContext)

   if (user === undefined) {
      throw new Error('useUserContext must be wraped with Dashboard context')
   }
   return user;
}