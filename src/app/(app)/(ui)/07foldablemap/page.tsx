import React from 'react'

export default function FoldableMapDiv() {
  return (
     <>
      <FoldableMap />
    </>
  )
}

const FoldableMap = () => {
   return (
      <div className='mx-auto grid aspect-video max-h-[80vh] p-8'>
         <div className='aspect-video grid grid-cols-3 h-full w-full bg-[rgba(255,255,25,.3)]'>
            <div className='bg-red-500' />
            <div className='bg-blue-500' />
            <div className='bg-green-500' />
         </div>
      </div>
   )
}