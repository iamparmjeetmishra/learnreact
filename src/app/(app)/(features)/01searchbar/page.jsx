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
					return value && user && user.name && user.name.toLowerCase().includes(value)
				})
				setResults(results)
				console.log(results)
			})
	}

	const handleChange = (value) => {
		setInput(value)
		fetchData(value)
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="w-1/3 space-y-4">
				<div className="flex gap-4 ">
					<Input
						className="border-2"
						value={input}
						onChange={(e) => handleChange(e.target.value)}
						placeholder="Type to Search.."
					/>
					<Button>Search</Button>
				</div>
				{
					results?.length > 0
						? <div className="shadow-md border rounded p-4">
							<ul>
								{
									results?.length > 0
										? results.map((result, id) => (
											// <li key={id}>{result.name}</li>
											<li key={id}>{result?.length > 0
												? 'No result'
												: result.name
											}</li>
										))
										: "No Result"
								}
							</ul>
						</div>
						: ''
				}
			</div>
		</div>
	);
}
