'use client'
import { useState } from "react"


export default function Page() {

  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Use State Hooks</h1>
      <div>
        Count: {count}
      </div>
    </main>
  )
}
