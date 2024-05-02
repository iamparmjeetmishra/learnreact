"use client";
import { Button } from "@/components/ui/button";
import { useCallback, useRef, useState } from "react";



interface DemoProps {}

export default function Page({}: DemoProps) {
   
   const [count, setCount] = useState(0)
   const countRef = useRef(0)

   const handleIncrement = () => {
      setCount(count + 1)
      countRef.current++

      console.log('State', count)
      console.log('Ref', countRef.current)
   }
   
   return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">UseRef Hooks</h1>
         
         <div className="flex justify-center gap-2 w-3/4">
            <div className="border p-4 w-1/2 ">
               <h1 className="text-lg font-medium">With State</h1>
               <h2>Count: {count}</h2>
               <h2>Ref: { countRef.current}</h2>
            </div>

         </div>

         <div className="flex items-center gap-2 mt-4">
            <Button onClick={handleIncrement}>Increment</Button>
         </div>
         {/* <div className="mt-4 underline text-lg font-medium">All Users</div> */}
			<div className="mt-6 border p-4">
				<p>Use Ref hook - a value that is not needed for rendering. </p>
			</div>
		</main>
	);
}
