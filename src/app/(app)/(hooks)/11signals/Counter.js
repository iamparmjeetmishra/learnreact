import { signal } from "@preact/signals-react";

export const count = signal(0)

export const Counter = () => {
   return (
      <div className="border p-2">
         <h2>Counter component: {count}</h2>
      </div>
   )
}