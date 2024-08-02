import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AccountForm = {
   email: string
   password: string
}

type AccountFormProps = AccountForm & {
   updateFields: (fields: Partial<AccountForm>) => void
}

export function AccountForm({email, password, updateFields}: AccountFormProps) {
   return (
      <>
         <Label>Email</Label>
         <Input value={email} onChange={e => updateFields({email: e.target.value})} autoFocus required type="email" placeholder="Email" />
         <Label>Password</Label>
         <Input value={password} onChange={e => updateFields({password: e.target.value})} required type="password" placeholder="Password" />
      </>
   )
}