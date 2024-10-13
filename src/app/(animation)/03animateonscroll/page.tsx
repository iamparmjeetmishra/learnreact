'use client'

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function AnimateOnScrollPage() {
  return (
    <div className="bg-gray-100 m-auto my-4 space-y-8 flex flex-col items-center justify-center rounded border-2 border-gray-200 p-4 shadow-md max-w-3xl max-h-[90vh] overflow-hidden overflow-y-scroll">
      {Array.from({ length: 100 }).map((_, i) => (
        <FadeUp key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a aperiam nulla illo vitae at fugiat exercitationem accusamus dolores. Laudantium?
        </FadeUp>
      ))}
    </div>
  )
}

type FadeUpProps = {
  children: React.ReactNode
  delay?: number,
  duration?: number,
}

function FadeUp({children, delay = 0.2, duration}: FadeUpProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView && !isVisible) { 
      setIsVisible(true)
    }
  }, [inView, isVisible])
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay, duration, ease: "easeInOut" }}

    >
      {children}
    </motion.div>
  )
}