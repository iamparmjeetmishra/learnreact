'use client'

import type { RootState } from "@/app/GlobalRedux/store"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "@/app/GlobalRedux/Features/counter/counterSlice"
import { Button } from "@/components/ui/button"


export default function Redux() {
   const count = useSelector((state:RootState) => state.counter.value)
  return (
     <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="font-semibold text-2xl">Redux</h2>
        <p className="text-xl">count: {count}</p>
        <div className="flex gap-1 mt-4">
           <Button>Increment</Button>
           <Button>Decrement</Button>
           <Button>IncrementByAmount</Button>
        </div>
    </div>
  )
}
