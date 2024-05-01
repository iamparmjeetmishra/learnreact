"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { initialItems } from "@/lib/utils";


interface DemoProps {}

export default function Page({}: DemoProps) {
   
   const [count, setCount] = useState(0)
   const [items] = useState(initialItems)
	console.log('Log', count)
	// This SelectedItems has performance issue
   // const selectedItem = items.find((item) => item.isSelected);
   
	// const selectedItem = useMemo(
	// 	() => items.find((item) => item.isSelected),
	// 	[items]
	// );

	const selectedItem = useMemo(
		() => items.find((item) => item.id === count),
		[items, count]
	);
   
   return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">Use Memo Hooks</h1>
			<div className="text-xl">Count: {count}</div>
         <div>Selected Item: {selectedItem?.id}</div>
         <div className="flex gap-2 mt-4">
				<Button onClick={() => setCount(count + 1)}>Increment</Button>
				<Button onClick={() => setCount(count - 1)}>Decrement</Button>
			</div>
			<div className="mt-6 border p-4">
				<p>In This below example without setting this large value in Memo- this method re-render everytime and find this large number. or unnecessary computation  </p>
				<pre>
					<code className="bg-gray-300">
						`const selectedItem = items.find((item) {'=>'} item.isSelected);`
					</code>
				</pre>
				<p>If the item is not changing then value should not re-compute. It render only once and when the item is changed.</p>
			</div>
		</main>
	);
}
