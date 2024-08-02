'use client'
import React, { FormEvent, useState } from 'react'
import { useMultiStepForm} from './useMultiStepForm'
import { Button } from '@/components/ui/button'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { AccountForm } from './AccountForm'

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
}


export default function MultiStepForm() {

  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  const { steps, step, currentStepIndex, isFirstStep, back, next, isLastStep } = useMultiStepForm([
    <UserForm key={1} {...data} updateFields={updateFields} />,
    <AddressForm key={2} {...data} updateFields={updateFields} />,
    <AccountForm key={3} {...data} updateFields={updateFields} />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    // console.log(e)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='font-semibold text-2xl'>Multi Step Form</h2>
      <div className='min-w-60 border rounded p-4 mt-2'>
        <form onSubmit={onSubmit}>
        <p className='w-full flex justify-end'>{currentStepIndex + 1} / {steps.length}</p>
        <p className='border-dotted'>{step}</p>
        <div className='flex justify-between gap-2 mt-2'>
          {!isFirstStep && <Button type='button' onClick={back} >Prev</Button>}
            <Button type='submit'>
              {isLastStep ? 'Finish' : 'Next'}
          </Button>
        </div>
        </form>
      </div>
      <div>
       {}
      </div>
    </div>
  )
}
