"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { initialItems } from "@/lib/utils";


interface DemoProps {}

export default function Page({}: DemoProps) {
   
   const [count, setCount] = useState(0)
   const [items] = useState(299999)

   const selectedItem = items.find((item) => items.isSelected);
   
   return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">Use Memo Hooks</h1>
			<div className="text-xl">Count: {count}</div>
         <div>Selected Item: {selectedItem?.id}</div>
         <div className="flex gap-2 mt-4">
				<Button onClick={() => setCount(count + 1)}>Increment</Button>
				<Button onClick={() => setCount(count - 1)}>Decrement</Button>
			</div>
			<div className="mt-4 border p-4">
				<p>UseMemo</p>
			</div>
		</main>
	);
}
