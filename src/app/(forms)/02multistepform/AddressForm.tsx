import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AddressForm = {
   street: string
   city: string
   state: string
   zip: string
}

type AddressFormProps = AddressForm & {
   updateFields: (fields: Partial<AddressForm>) => void
}

export function AddressForm({street, city, state, zip, updateFields}: AddressFormProps) {
   return (
      <>
         <Label>Street</Label>
         <Input value={street} onChange={e => updateFields({street: e.target.value})} autoFocus required placeholder="Street" />
         <Label>City</Label>
         <Input value={city} onChange={e => updateFields({city: e.target.value})} required placeholder="City" />
         <Label>State</Label>
         <Input value={state} onChange={e => updateFields({state: e.target.value})} required placeholder="State" />
         <Label>Zip</Label>
         <Input value={zip} onChange={e => updateFields({zip: e.target.value})} required placeholder="Zip" />
      </>
   )
}