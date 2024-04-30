'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function Page() {

  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4">Use State Hooks</h1>
      <div className="text-xl">
        Count: {count}
      </div>
      <div className="flex gap-2 mt-4">
        <Button
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </div>
    </main>
  )
}
