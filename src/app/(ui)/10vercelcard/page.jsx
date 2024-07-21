'use client'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'

import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function VercelCardAnimation() {
  return (
     <div className='h-screen w-full flex flex-col items-center justify-center text-white bg-gray-700'>
        <h1 className='text-2xl font-bold'>VercelCardAnimation</h1>

        <div>
           <Canvas camera={{position: [0,0,13], fov: 25}}>
              
           </Canvas>
        </div>
     </div>
  )
}
