
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Carouselcomponent() {
  return (
     <div className='h-screen w-full bg-zinc-800 grid place-content-center text-white'>
        <Carousel />
    </div>
  )
}


const Carousel = () => {
   return (
      <div>
         <Button>-</Button>
         <CarouselItem />
      </div>
   )
}

const CarouselItem = () => {
   return (
      <div>
         Item
      </div>
   )
}
