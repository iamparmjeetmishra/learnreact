'use client'
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { title } from "process";

interface TabButtonProps  {}

const TabButton = ({ onClick, ...rest }: TabButtonProps) => {
	const [isPending, startTransition] = useTransition();

	const handleClick = () => {
		startTransition(() => {
			onClick?.();
		});
	};

	if (isPending) {
		return <p>Loading...</p>;
	}

	return <Button className="" {...rest} title={title} onClick={handleClick} />;
};

export default TabButton;