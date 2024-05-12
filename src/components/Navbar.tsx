
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
        <Button>
           <Link
            href={'/hooks'}>Hooks</Link>
        </Button>
        <Button>
           <Link
            href={'/UIs'}>UI Elements</Link>
        </Button>
        <Button>
           <Link
            href={'/Forms'}>Forms</Link>
      </Button>
    </nav>
  )
}
