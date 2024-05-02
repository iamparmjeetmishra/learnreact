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
         
         <div className="flex items-center gap-2 mt-4">
            <h2>Count: {count}</h2>
            <Button onClick={handleIncrement}>Increment</Button>
         </div>
         <div className="mt-4 underline text-lg font-medium">All Users</div>
			<div className="mt-6 border p-4">
				<p>Use Ref hook </p>
			</div>
		</main>
	);
}
