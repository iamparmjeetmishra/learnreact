"use client";
import { Button } from "@/components/ui/button";

import { useRef } from "react";
import Counter, { CoutnerRef } from "./Counter";

interface DemoProps {}




export default function Page({}: DemoProps) {
	
   const counterRef = useRef<CoutnerRef>(null)

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">
         useImperativeHandle Hooks
			</h1>
         <Counter ref={counterRef} />
         <Button onClick={() => counterRef.current?.reset()}>Reset</Button>
			<div className="mt-6 border p-4">
				<p>
					UseImperative Hook allows to use functionality from the parent.
            </p>
			</div>
		</main>
	);
}
