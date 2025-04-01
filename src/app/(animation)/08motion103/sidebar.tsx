import { IconChartBar, IconChevronLeft, IconChevronRight, IconHome, IconSettings, IconUser } from "@tabler/icons-react"
import { useState } from "react"
import { motion } from "motion/react"
import { delay } from "framer-motion"

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

  const sidebarVariant = {
    open: {
      width: "16rem"
    },
    closed: {
      width: "4.5rem" 
    }
  }

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: -1,
      }
    }
  }

  const childVariant = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: -10
    }
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed" 
      transition={{
        duration: 0.3,
      }}
      className="border-r border-neutral-100 h-full"
    >
      <motion.nav
        variants={sidebarVariant}
        className="bg-white shadow-md h-full"
      >
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
            <motion.ul variants={parentVariant} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariant} key={link.name}>
                  <a
                    href={link.href}
                    className="flex rounded items-center gap-1 p-2 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>

    </motion.div>
  )
}
