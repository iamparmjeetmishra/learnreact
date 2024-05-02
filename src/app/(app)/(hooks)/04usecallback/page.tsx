"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Search from '@/lib/Search'
import Shuffle from "@/lib/Shuffle";

const allUsers = [
   'john',
   'alex',
   'george',
   'simon',
   'james'
]




interface DemoProps {}

export default function Page({}: DemoProps) {
   
   const [users, setUsers] = useState(allUsers)
   

   const handleSearch = (text: string) => {
      const filteredUsers = allUsers.filter((user) =>
         user.includes(text)
      )
      setUsers(filteredUsers)
   }
 
   
   return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">UseCallback Hooks</h1>
         
         <div className="flex gap-2 mt-4">
				<Button onClick={() => setUsers(Shuffle(allUsers))}>Suffle</Button>
            <Search onChange={handleSearch} />
         </div>
         <div className="mt-4 underline text-lg font-medium">All Users</div>
         <ul>
            {users.map((user) => (
               <li key={user}>{user}</li>
            ))}
         </ul>
			<div className="mt-6 border p-4">
				<p>Use Callback hook with Search Example</p>
			</div>
		</main>
	);
}
