import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {
  return (
    <div>
      <Navbar />
      Home Page
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 className="text-semibold text-2xl">Hooks</h2>
          <Button><Link href={''}></Link></Button>
        </div>
        <div>
          <h2 className="text-semibold text-2xl">UIs</h2>
        </div>
        <div>
          <h2 className="text-semibold text-2xl">Forms</h2>
        </div>
        <div>
          <h2 className="text-semibold text-2xl">State Management</h2>
        </div>
        <div>
          <h2 className="text-semibold text-2xl">Misc</h2>
        </div>
      </div>
    </div>
  )
}