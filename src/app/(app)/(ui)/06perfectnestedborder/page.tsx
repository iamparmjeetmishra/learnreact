import React from 'react'

export default function PerfectNestedBorder() {
  return (
   <div className="w-full h-screen flex flex-col items-center justify-center bg-blue-950">
   <div className="size-40 [--gap:16px] [--radius:30px] p-[--gap] rounded-[--radius] border-2 border-blue-600">
     <div className="h-full rounded-[calc(var(--radius)-var(--gap))] border-2 border-yellow-500"></div>
   </div>
 </div>
  )
}
