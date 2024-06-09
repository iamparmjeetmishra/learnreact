
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Carouselcomponent() {
  return (
     <div className='h-screen w-full bg-zinc-700 grid place-content-center text-white'>
        <Carousel />
    </div>
  )
}


const Carousel = () => {
   return (
      <div className='flex w-full p-5 justify-between items-center gap-5'>
         <Button className='size-[50px] min-w-[50px]' variant={'outline'}>-</Button>
         <CarouselItem />
         <Button className='size-[50px] min-w-[50px]' variant={'outline'}>+</Button>
      </div>
   )
}

const CarouselItem = () => {
   return (
      <div className='w-full max-w-[500px] rounded-lg p-5 bg-white min-h-[500px]'>
         Item
      </div>
   )
}
