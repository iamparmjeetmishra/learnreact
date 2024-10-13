"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormDataSchema } from "./formSchema";
import { Button } from "@/components/ui/button";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
	{
		id: "Step 1",
		name: "Personal Information",
		fields: ["firstName", "lastName", "email"],
	},
	{
		id: "Step 2",
		name: "Address",
		fields: ["country", "state", "city", "street", "zip"],
	},
	{
		id: "Step 3",
		name: "Complete",
	},
];

export default function Form() {
	const [previousStep, setPreviousStep] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const delta = currentStep - previousStep;

	const {
		register,
		handleSubmit,
		watch,
		reset,
		trigger,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(FormDataSchema),
	});

	const processForm: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		reset();
	};

	type FieldName = keyof Inputs;

	const next = async () => {
		const fields = steps[currentStep].fields;
		const output = await trigger(fields as FieldName[], {
			shouldFocus: true,
		});

		if (!output) return;

		if (currentStep < steps.length - 1) {
			if (currentStep === steps.length - 2) {
				await handleSubmit(processForm)();
			}
			setPreviousStep(currentStep);
			setCurrentStep((step) => step + 1);
		}
	};

	const prev = () => {
		if (currentStep > 0) {
			setPreviousStep(currentStep);
			setCurrentStep((step) => step - 1);
		}
	};

	return (
		<section className="">
			{/* steps */}
			<nav aria-label="Progress">
				<ol
					role="list"
					className="space-y-4 md:flex md:space-x-8 md:space-y-0"
				>
					{steps.map((step, index) => (
						<li key={step.name} className="md:flex-1">
							{currentStep > index ? (
								<div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
									<span className="text-sm font-medium text-sky-600 transition-colors">
										{step.id}
									</span>
									<span className="text-sm font-medium">
										{step.name}
									</span>
								</div>
							) : currentStep === index ? (
								<div
									className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
									aria-current="step"
								>
									<span className="text-sm font-medium text-sky-600">
										{step.id}
									</span>
									<span className="text-sm font-medium">
										{step.name}
									</span>
								</div>
							) : (
								<div className="group flex w-full flex-col border-l-4 borderg-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
									<span className="text-sm font-medium text-gray-500 transition-colors">
										{step.id}
									</span>
									<span className="text-sm font-medium">
										{step.name}
									</span>
								</div>
							)}
						</li>
					))}
				</ol>
			</nav>

			{/* form */}
			<form
				className="mt-12 py-12"
				onSubmit={handleSubmit(processForm)}
			>
				{currentStep === 0 && (
					<motion.div
						initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Personal Information
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Provide your personal details.
						</p>
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<Label htmlFor="firstName">First Name</Label>
								<div className="mt-2">
									<Input
										type="text"
										id="firstName"
										autoComplete="given-name"
										placeholder="John"
										{...register("firstName")}
									/>
									{errors.firstName?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.firstName.message}
										</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<Label htmlFor="lastName">Last Name</Label>
								<div className="mt-2">
									<Input
										type="text"
										id="lastName"
										autoComplete="given-name"
										placeholder="Wick"
										{...register("lastName")}
									/>
									{errors.lastName?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.lastName.message}
										</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<Label htmlFor="email">Email Address</Label>
								<div className="mt-2">
									<Input
										type="email"
										id="email"
										autoComplete="email"
										placeholder="example@email.com"
										{...register("email")}
									/>
									{errors.email?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.email.message}
										</p>
									)}
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{/* Step 2 */}

				{currentStep === 1 && (
					<motion.div
						initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Address
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Address where you can receive mail.
						</p>
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<Label htmlFor="country">Country</Label>
								<div className="mt-2">
									<select
										id="country"
										{...register("country")}
										autoComplete="country-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
									{errors.country?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.country.message}
										</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<Label htmlFor="street">Street address</Label>
								<div className="mt-2">
									<Input
										type="text"
										id="street"
										autoComplete="street-name"
										placeholder="street"
										{...register("street")}
									/>
									{errors.street?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.street.message}
										</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<Label htmlFor="city">City</Label>
								<div className="mt-2">
									<Input
										type="text"
										id="city"
										autoComplete="city"
										placeholder="city"
										{...register("city")}
									/>
									{errors.city?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.city.message}
										</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<Label htmlFor="zip">Zip / Postal Code</Label>
								<div className="mt-2">
									<Input
										type="text"
										id="zip"
										autoComplete="zip"
										placeholder="zip"
										{...register("zip")}
									/>
									{errors.zip?.message && (
										<p className="mt-2 text-sm text-red-400">
											{errors.zip.message}
										</p>
									)}
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{/* Step 3 */}
				{currentStep === 2 && (
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Complete
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Thank you for your submission.
						</p>
					</div>
				)}
			</form>

			{/* Navigation */}
			<div className="mt-8 pt-5">
				<div className="flex justify-between">
					<Button
						type="button"
						onClick={prev}
						disabled={currentStep === 0}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>{" "}
						Prev
					</Button>
					<Button
						type="button"
						onClick={next}
						disabled={currentStep === steps.length - 1}
					>
						{" "}
						Next
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</Button>
				</div>
			</div>
		</section>
	);
}
