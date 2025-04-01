import { IconChartBar, IconChevronCompactLeft, IconChevronCompactRight, IconHome, IconSettings, IconUser } from "@tabler/icons-react"
import { useState } from "react"


export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <IconHome />
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <IconChartBar />
    },
    {
      name: "Users",
      href: "/users",
      icon: <IconUser />
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <IconSettings />
    }
  ]
  return (
    <aside className="border-r border-neutral-100 h-full">
      <nav className="bg-white shadow-md h-full">
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-lg font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close Sidebar": "Open Sidebar"}
          >
            {isOpen ? <IconChevronCompactLeft /> : <IconChevronCompactRight />}
          </button>
        </div>
        <div className="relative">
          {/* Sidebar Content */}
          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </nav>

    </aside>
  )
}
