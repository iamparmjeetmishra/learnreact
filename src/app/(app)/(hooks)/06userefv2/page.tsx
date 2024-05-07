"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

interface DemoProps {}


export default function Page({}: DemoProps) {
	
   const [name, setName] = useState(''

   )
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">
         useRef Hooks V2
         </h1>
         <div>
            <Input
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div>
            <h2>Name is: { name }</h2>
         </div>
			<div className="mt-6 border p-4">
				<p>
               useRef Hook V2.
            </p>
			</div>
		</main>
	);
}
