'use client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { LoginServerAction } from './actions'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export default function ValibotForm() {
  return (
    <div className='py-24'>
      <div className='container flex items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}


export function LoginForm () {
  const [state, formAction] = useFormState(LoginServerAction, null)

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>

      <form action={formAction}>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='me@example.com'
            />
            {
              state?.email && (
                <p className='text-xs text-red-500'>{ state.email[0]}</p>
              )
            }
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              name='password'
            />
            {state?.password && (
              <p className='text-xs text-red-500'>{state.password[0]}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  )
}

export function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button type='submit' className='w-full' disabled={pending}>
      {pending ? 'Hang in there...' : 'Login'}
    </Button>
  )
}