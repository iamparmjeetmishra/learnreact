'use server'

import * as v from 'valibot'
import { delay } from '@/lib/utils'
import { LoginSchema } from './schemas'
import { redirect } from 'next/navigation'
import { object } from 'zod'

export async function LoginServerAction(state: any, formData: FormData) {
   const data = Object.fromEntries(formData.entries())
   const result = v.safeParse(LoginSchema, data)

   await delay(1000)

   if (result.success) {
      // TODO: Log the user in
      redirect('/dashboard')
   } else {
      const issues = v.flatten<typeof LoginSchema>(result.issues)
      const error = {
         email: issues.nested?.email,
         password: issues.nested?.password
      }
      return error
   }
}