import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <div>
      <Navbar />
      Home Page
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 className="text-semibold text-2xl">Hooks</h2>
        </div>
        <div>
          <h2 className="text-semibold text-2xl">UIs</h2>
        </div>
      </div>
    </div>
  )
}
