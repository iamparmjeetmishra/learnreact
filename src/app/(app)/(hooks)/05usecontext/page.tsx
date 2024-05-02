"use client";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

export interface User {
   isSubscribed: boolean;
   name: string;
}


interface DemoProps {}

export default function Page({}: DemoProps) {
   
   const [user] = useState<User>({
      isSubscribed: true,
      name: 'john'
   })
   

   return (
      <DashboardContext.Provider value={user}>
         <main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">UseContext Hooks</h1>
         
         <div className="flex gap-2 mt-4 border p-4">
				<Dashboard />
         </div>
         <div className="mt-4 underline text-lg font-medium">All Users</div>
			<div className="mt-6 border p-4">
				<p>Use Context hook with Search Example</p>
			</div>
		</main>
      </DashboardContext.Provider>
	);
}
