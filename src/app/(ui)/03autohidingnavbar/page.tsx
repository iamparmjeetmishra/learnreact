'use client'
import {
  useMotionValueEvent,
  motion,
  useScroll,
  Variants
} from 'framer-motion'
import { useState, useRef } from 'react'


export default function AutoHideNavbar() {
  return (
    <div className="min-h-[300vh] bg-gradient-to-b from-[#4e43479f] to-[#060606]">
      <Nav />
    </div>
  )
}


const Nav = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0)
      lastYRef.current = y
    }
  })

  return (
    <motion.div
      animate={hidden ? 'hidden' : 'visible'}
      initial='visible'
      whileHover={hidden ? 'peeking' : 'visible'}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={
        {
          visible: { y: '0%' },
          hidden: { y: '-90%' },
          peeking: {y: '0%', cursor: 'pointer'}
        } as Variants
      }
      transition={{ duration: 0.2 }}
      className='fixed top-0 z-10 flex w-full justify-center pt-3'
    >
      <nav className="flex justify-between gap-3 rounded-3xl bg-white p-5 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <a href="#" className="bg-gray-200">
          Logo
          <span className="sr-only">Home</span>
        </a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </motion.div>
  )
}