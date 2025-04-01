import { IconChartBar, IconChevronLeft, IconChevronRight, IconHome, IconSettings, IconUser } from "@tabler/icons-react"
import { useState } from "react"
import { motion } from "motion/react"

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
    <div className="border-r border-neutral-100 h-full">
      <motion.nav
        initial={{
          width: "4.5rem"
        }}
        animate={{
          width: isOpen ? "16rem" : "4.5rem"
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut" 
        }}

        className="bg-white shadow-md h-full">
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-lg font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none "
            aria-label={isOpen ? "Close Sidebar": "Open Sidebar"}
          >
            {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
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
                    className="flex rounded items-center p-2 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.nav>

    </div>
  )
}
