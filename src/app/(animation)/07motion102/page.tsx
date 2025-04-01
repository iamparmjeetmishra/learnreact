import { cn } from "@/lib/utils"
import { Card } from "./card"
import { GeistSans } from 'geist/font/sans';


export const Content = () => {
  return (
    <>
      <h2 className="text-center p-2 text-2xl font-semibold">Motion 102</h2>
    <div
      className={
        cn(GeistSans.className,
          "h-screen flex items-center justify-center bg-gray-50"
        )
      }
      >
      <Card />
    </div>
      </>
  )
}

export default Content  