import * as v from 'valibot'

export const LoginSchema = v.object({
   email: v.pipe(
      v.string('Your Email must be a string.'),
      v.nonEmpty('Please Enter your email'),
      v.email('The email is badly formatted.')
   ),
   password: v.pipe(
      v.string('Your Password must be a string.'),
      v.nonEmpty('Please Enter your password'),
      v.minLength(8, 'Your Password must have 8 characters or more.')
   )
})