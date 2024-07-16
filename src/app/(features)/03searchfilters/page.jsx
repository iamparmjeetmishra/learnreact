'use client'
import { useState } from 'react'
import Select from 'react-select'

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: "vanilla", label: 'Vanilla' },
   { value: "strawberry", label: 'Strawberry' }
]


export default function SearchFilters() {
   return (
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
         <h2 className='text-3xl font-bold'>Search Filters</h2>
         <SearchFilter />
      </div>
   )
}


function SearchFilter() {
   const [isSearchable, setIsSearchable] = useState('')
   const [optionPicked, setOptionPicked] = useState('')
   return (
      <div className="min-w-96 border p-4">
         <Select
            id='Select'
            options={options}
            onChange={(option) => setOptionPicked(option)}
         />
         <h2>Option: {optionPicked.label}</h2>
      </div>
   )
}