"use client";
import { Button } from "@/components/ui/button";

import { Ref, forwardRef, useImperativeHandle, useState } from "react";

interface CounterProps { }

export type CoutnerRef = {
   reset: () => void
}

function Counter(props: CounterProps, ref: Ref<CoutnerRef> ) {
	
   const [count, setCount] = useState(0)

   const increment = () => {
      setCount(count + 1)
   }

   const decrement = () => {
      setCount(count - 1)
   }

   const reset = () => {
      setCount(0)
   }

   useImperativeHandle(ref, () => ({
      reset
   }))

	return (
		
		<>
				<div className="border p-4 w-1/2 text-center">
					Count: {count}
				</div>
			<div className="flex items-center gap-2 mt-4 mb-2">
				<Button onClick={increment}>
					Increment
				</Button>
				<Button onClick={decrement}>
					Decrement
				</Button>
			</div>
      </>
			
	);
}

export default forwardRef(Counter)