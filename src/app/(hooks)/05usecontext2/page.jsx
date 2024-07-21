'use client'
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import CountContextProvider, { CountContext } from "./contexts/count-context"


export default function App() {
   return (
      <main className="flex flex-col justify-center items-center h-screen">
         <CountContextProvider>
            <Component1 />
            <Component2 />
         </CountContextProvider>
      </main>
   )
}

export function Component1() {
   const { count, setCount } = useContext(CountContext)
   console.log('from 1')
   return (
      <>
         <div>Example Component 1</div>
         <Button onClick={() => setCount(count + 1)}>Click me 1: {count}</Button>
      </>
   )
}

export function Component2() {
   console.log('from 2')
   return <div>Example Component 2</div>
}