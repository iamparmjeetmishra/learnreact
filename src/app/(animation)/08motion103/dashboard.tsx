"use client"

import { IconBell } from "@tabler/icons-react"
import { Sidebar } from "./sidebar"

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* header */}
        <Header />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
              <IconBell className="h-6 w-6 text-gray-600" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </header>
  )
}