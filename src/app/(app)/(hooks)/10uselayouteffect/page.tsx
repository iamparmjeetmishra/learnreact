"use client";
import ModalComponent from './ModalComponent'

interface DemoProps {}


export default function Page({}: DemoProps) {
	

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-semibold mb-4">
         useLayoutEffect Hooks
         </h1>
         <div>
            <ModalComponent />
         </div>
			<div className="mt-6 border p-4">
				<p>
               useLayoutEffect Hook is similar to useEffect but it calculate everything before printing the showing on the frontend. Sort of Blocking the space for calculating the effect.
               
               useEffect Run after the DOM Paint. sort of jumpy effect on the content.
            </p>
			</div>
		</main>
	);
}
