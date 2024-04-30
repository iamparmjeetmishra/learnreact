'use client'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks"

interface DemoProps {}

export default function Page({ }: DemoProps) {
  
  // console.log('before')
  const [count, setCount] = useState(0)
  useEffect(() => {
    // The Code that we want to run
    console.log('The count is:', count)
    // Optional return function
    return () => {
      console.log('I am cleaned up')
    }
  }, [count])
  // console.log('after')


  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4">Use Effect Hooks</h1>
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
      <div className="mt-4 border p-4">
        <p>UseEffect has Optional Return function and dependency array.</p>
        <p>useEffect first run cleanup function and destroys its prev state. Then run again</p>
      </div>
    </main>
  )
}
