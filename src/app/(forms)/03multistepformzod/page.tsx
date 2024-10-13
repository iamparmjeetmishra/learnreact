import React from "react";
import Form from "./form";

export default function MultiStepFormZod() {
	return (
		<div className="flex container flex-col min-h-screen items-center">
         <h2 className="font-semibold text-2xl py-4 underline underline-offset-4">MultiStepFormZod</h2>
         <div className=" container md:max-w-[60%] border rounded p-4 mt-4">
            <Form />
         </div>
		</div>
	);
}
