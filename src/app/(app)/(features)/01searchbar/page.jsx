'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function SearchBar() {

	const [input, setInput] = useState('')
	const [results, setResults] = useState([])
	
	const fetchData = (value) => {
		const response = fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				// console.log(json)
				const results = json.filter((user) => {
					return value &&  user && user.name && user.name.toLowerCase().includes(value)
				})
				setResults(results)
		})
	}

	const handleChange = (value) => {
		setInput(value)
		fetchData(value)
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 ">
			<div className="flex gap-2 ">
            <Input
					value={input}
					onChange={(e) => handleChange(e.target.value)}
               placeholder="Type to Search.."
            />
				<Button>Search</Button>
			</div>
			<div>
				<ul>

				{
					results.map((result, id) => (
						<li key={id}>{result.name}</li>
					))
				}
				</ul>
			</div>
		</div>
	);
}
