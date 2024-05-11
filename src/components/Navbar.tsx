
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Navbar() {
  return (
     <nav>
        <Button>
           <Link
            href={'/'}>Home</Link>
        </Button>
    </nav>
  )
}
