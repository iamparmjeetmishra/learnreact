"use client";
import { Button } from "@/components/ui/button";
import { count, error } from "console";
import { useReducer } from "react";

interface DemoProps {}

interface State {
	count: number;
	error: string | null;
}

interface Action {
	type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
	const { type } = action;
   switch (type) {
      case 'increment': {
         const newCount = state.count + 1;
         const hasError = newCount > 5
         return {
            ...state,
            count: hasError ? state.count : newCount,
            error: hasError ? 'Max reached' : null
         }
      }
      case 'decrement': {
         const newCount = state.count - 1;
         const hasError = newCount < 0
         return {
            ...state,
            count: hasError ? state.count : newCount,
            error: hasError ? 'Min reached' : null
         }
      }
		default:
			return state;
	}
}

export default function Page({}: DemoProps) {
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
		error: null,
	});

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">
				UseReducer Hooks
			</h1>

			<div className="flex justify-center gap-2 w-3/4">
				<div className="border p-4 w-1/2 text-center">
					Count: {state.count}
					<div>
						{state.error && (
							<h2 className="mb-2 text-red-500">{state.error}</h2>
						)}
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2 mt-4">
				<Button onClick={() => dispatch({ type: "increment" })}>
					Increment
				</Button>
				<Button onClick={() => dispatch({ type: "decrement" })}>
					Decrement
				</Button>
			</div>
			{/* <div className="mt-4 underline text-lg font-medium">All Users</div> */}
			<div className="mt-6 border p-4">
				<p>
					UseReducer is also for the state like useState but follows
					Redux pattern.
            </p>
            <p>It has both state and action at one place. Also Handle multiple state and action together and Error.</p>
			</div>
		</main>
	);
}
