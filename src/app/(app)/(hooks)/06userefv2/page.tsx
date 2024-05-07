"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

interface DemoProps {}


export default function Page({}: DemoProps) {
	
   const [name, setName] = useState('')
   // const [renderCount, setRenderCount] = useState(0) // Render Infinite loop with useeffect
   const renderCount = useRef(1)

   // This -> Infinite Loop because state in useeffect will change everytime
   // useEffect(() => {
   //    setRenderCount(prev => prev + 1)
   // }, [])

   useEffect(() => {
      renderCount.current = renderCount.current + 1
   }, [])

   // Most Use Cases
   const inputRef : any = useRef()

   function focus() {
      console.log(inputRef.current.focus())
      inputRef.current.focus()
   }

   // 4th Use Case

   const prevName = useRef('')

   useEffect(() => {
      prevName.current = name
   }, [name])

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">
         useRef Hooks V2
         </h1>
         <div>
            <Input
               ref={inputRef}
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <Button onClick={focus}>Focus Btn</Button>
         </div>
         <div>
            <h2>Name is: {name}</h2>
            <h3>Rendered: {renderCount.current} times</h3>
            <h2>4th Example</h2>
            <p>My Name is {name} but my prev Name was { prevName.current}</p>
         </div>
			<div className="mt-6 border p-4">
				<p>
               useRef Hook V2. Similar to useState but persists with every render. 
               Most use case is Input focus
            </p>
			</div>
		</main>
	);
}
