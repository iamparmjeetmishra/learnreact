import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserData = {
   firstName: string
   lastName: string
   age: string
}

type UserFormProps = UserData & {
   updateFields: (fields: Partial<UserData> ) => void
}

export function UserForm({firstName, lastName, age, updateFields}: UserFormProps) {
   return (
      <>
         <Label>First Name</Label>
         <Input value={firstName} onChange={e => updateFields({firstName: e.target.value})} autoFocus required placeholder="First Name" />
         <Label>Last Name</Label>
         <Input value={lastName} onChange={e => updateFields({lastName: e.target.value})} required placeholder="Last Name" />
         <Label>Age</Label>
         <Input value={age} onChange={e => updateFields({age: e.target.value})} required min={1} type="number" placeholder="Age" />
      </>
   )
}