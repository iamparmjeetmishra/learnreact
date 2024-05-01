import { memo } from 'react';
import { Input } from '@/components/ui/input';

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log('Search rendered!');

  return (
     <Input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);