'use client'
import { Button } from "@/components/ui/button"
import { useEffect } from "react"


interface DemoProps {}

export default function Page({ }: DemoProps) {

  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4">Use Effect Hooks</h1>
      <div className="text-xl">
        Count: 
      </div>
      <div className="flex gap-2 mt-4">
        <Button
          
        >
          Increment
        </Button>
        <Button
          
        >
          Decrement
        </Button>
      </div>
    </main>
  )
}
