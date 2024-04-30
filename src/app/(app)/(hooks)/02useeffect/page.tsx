'use client'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks"

interface DemoProps {}

export default function Page({ }: DemoProps) {

  const [count, setCount] = useState(0)
  useEffect(() => {
    // The Code that we want to run
    console.log('The count is:', count)
    // Optional return function
  }, [count])

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
        <p>UseEffect has Optional Return function and dependency array</p>
        <pre>
          <code>
          <CopyBlock
text={
  `useEffect(() => {
    // The Code that we want to run
  console.log('The count is:', count)
  // Optional return function
}, [count])`}
            showLineNumbers
            language={'javascript'}
            theme={dracula}
          />
          </code>
        </pre>
      </div>
    </main>
  )
}
