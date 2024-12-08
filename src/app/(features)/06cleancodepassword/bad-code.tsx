"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BadCodeExamplePage() {
	const [password, setPassword] = useState("");
	return (
		<div className="p-8 space-y-4">
			<h1 className="font-semibold">
				Password Strength Checker - bad code type
			</h1>
			<div className="">
				<Input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border-2"
				/>
				{
					<div className="h-2 w-full rounded bg-gray-200 mt-4">
						<div
							className={`h-full rounded transition-all duration-300 ${
								password.length > 8 &&
								/[A-Z]/.test(password) &&
								/[a-z]/.test(password) &&
								/[!@#$%^&*(),.?";{}|<>"]/.test(password) &&
								/\d/.test(password)
									? "w-full bg-green-500"
									: password.length > 8 &&
									  (/[A-Z]/.test(password) ||
											/[a-z]/.test(password) ||
											/\d/.test(password))
									? "w-2/3 bg-yellow-500"
									: "w/1/3 bg-red-500"
							}`}
						></div>
					</div>
				}
			</div>
			<div>
				<div className="">
					<p className={`h-full rounded transition-all duration-300`}>
						{password.length >= 8 &&
						/[A-Z]/.test(password) &&
						/[a-z]/.test(password) &&
						/[!@#$%^&*(),.?";{}|<>"]/.test(password) &&
						/\d/.test(password)
							? "Strong"
							: password.length >= 8 &&
							  (/[A-Z]/.test(password) ||
									/[a-z]/.test(password) ||
									/\d/.test(password))
							? "Medium"
							: "Week"}{" "}
						password
					</p>
				</div>
      </div>
      <ul className="space-y-2">
        <li
          className={`flex items-center gap-2 text-sm ${
          password.length >= 8 ? 'text-green-600' : 'text-gray-500'}`}
        >{password.length >= 8 ? '✅' : "o"} At least 8 characters</li>
        <li className={`flex items-center gap-2 text-sm ${
          /\d/.test(password) ? 'text-green-600' : 'text-gray-500'}`}>  
          {/\d/.test(password) ? '✅' : "o"} Contains numbers
        </li>
        <li className={`flex items-center gap-2 text-sm ${
          /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : 'text-gray-500'}`}>  
          {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? '✅' : "o"} Contains special characters
        </li>
        <li className={`flex items-center gap-2 text-sm ${
          /[a-z]/.test(password) && /[A-Z]/.test(password) ? 'text-green-600' : 'text-gray-500'}`}>  
          {/[a-z]/.test(password) && /[A-Z]/.test(password) ? '✅' : "o"} Contains uppercase and lowercase letters
        </li>
      </ul>
		</div>
	);
}
