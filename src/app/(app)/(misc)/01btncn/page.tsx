'use client'

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";


export default function ButtonCN() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center">
			<h2 className="text-3xl font-bold">
				Button with Cn and Clsx utility
			</h2>
			<div className="mt-4">
				<CnBtn className='bg-green-400 p-5' />
         </div>
         <div className="border border-black p-4 mt-4">
            <ul>
               <li>Issue1: if color conflict then the color in Alphabet increment win the race.</li>
               <li>Solution = is Tailwind merge utility</li>
					<li>Issue2: Conditional classes </li>
					<li>Solution - Cannot use Conditional class with TwMerge so we use clsx utility for that.</li>
            </ul>
         </div>
		</div>
	);
}


type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

function CnBtn({ className, ...props }: BtnProps) {
   
   const [pending, setPending] = useState(true)

	return (
      <button
			className={cn(
				'bg-yellow-500 py-2 px-4 rounded border', className,
				{
					'bg-gray-500' : pending
				}
			)}
			{...props}
      >
			Submit
		</button>
	);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}


// 2nd Way with TwMerge

// function CnBtn({ className }: BtnProps) {

// 	return (
//       <button
//          className={twMerge('bg-yellow-500 text-white py-2 px-4 rounded border', className)}
//       >
// 			Submit
// 		</button>
// 	);
// }


// 1st Normal Way


// function CnBtn({className}: BtnProps) {
// 	return (
//       <button
//          className={` ${className} bg-yellow-500 text-white py-2 px-4 rounded border`}
//       >
// 			Submit
// 		</button>
// 	);
// }