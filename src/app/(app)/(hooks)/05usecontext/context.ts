import { createContext } from "react";
import { User } from "./page";

export const DashboardContext = createContext<User | undefined>(undefined)