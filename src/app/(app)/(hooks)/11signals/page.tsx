"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signal, effect, batch } from "@preact/signals-react";

import {Counter, count} from './Counter'

interface DemoProps { }

export default function Page({}: DemoProps) {
	//   const [count, setCount] = useState(0)
	console.log("Rendering", Date.now());

	// const count = signal(0);
	const double = signal(1);
	// const setCount = (val) => (count.value += val)
	const setCount = (val) => {
		batch(() => {
			count.value += val;
			double.value = count.value * 2;
		});
	};

	effect(() => console.log(count.value));

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">
				Managing State with Signals
			</h1>
			<div className="text-xl">
				<Counter />
				<p>Count: {count}</p>
				<p>Double: {double}</p>
			</div>
			<div className="flex gap-2 mt-4">
				<Button onClick={() => setCount(1)}>Increment</Button>
				<Button onClick={() => setCount(1)}>Decrement</Button>
			</div>
			<div className="mt-6 border p-4">
				<p>
					Using signals makes react app performant By just rendered
					element once.
				</p>
				<p>
					Signals also has effect similar to useffect but does not
					required dependency
				</p>
				<p>
					Also Provide Batch function that update the elements in
					batch.
				</p>
				<p>
					Signals also not bound to components we can bind it outside
					the component..
				</p>
			</div>
		</main>
	);
}
