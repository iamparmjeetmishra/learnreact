"use client"
import Link from "next/link"
import { useState } from "react"
import {motion} from "motion/react"

export const Navbar = () => {

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Login",
      link: "/login",
    }
  ]

  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="py-10">
      <nav className="max-w-4xl mx-auto bg-gray-100 rounded-full px-4 py-1 flex">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={item.title}
            href={item.link}
            className="w-full relative group text-center text-md text-neutral-500 py-3"
          >
            <span className="relative group-hover:text-neutral-200 transition-colors text-neutral-600 z-10">{item.title}</span>
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full w-full h-full bg-black"></motion.div>
            )}
          </Link>
          ))}
      </nav>
    </div>
  )
}