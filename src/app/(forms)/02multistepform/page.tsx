'use client'
import React from 'react'
import { useMultiStepForm} from './useMultiStepForm'


export default function MultiStepForm() {

  const { steps, currentStepIndex } = useMultiStepForm([
    <div key={1}>One</div>,
    <div key={2}>Two</div>
  ])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='font-semibold text-2xl'>Multi Step Form</h2>
      <div className='min-w-60 border rounded p-4 mt-2'>
        <p className='w-full flex justify-end'>{currentStepIndex} / {steps.length}</p>
        <p>{ steps }</p>
      </div>
    </div>
  )
}
