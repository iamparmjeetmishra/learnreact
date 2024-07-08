"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

export default function Carouselcomponent() {
	const items = useRef([
		{ title: "item 1", color: "#E7CC88" },
		{ title: "item 2", color: "#88E7A2" },
		{ title: "item 3", color: "#C888E7" },
		{ title: "item 4", color: "#88D6E7" },
	]);

	const [activeItemIndex, setActiveItemIndex] = useState(0);

	return (
		<div className="h-screen w-full bg-zinc-700 grid place-content-center text-white">
			<Carousel
				items={items.current}
				activeItemIndex={activeItemIndex}
				setActiveItemIndex={setActiveItemIndex}
			/>
		</div>
	);
}

import {
	MdKeyboardArrowRight,
	MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Carousel = ({ items, activeItemIndex, setActiveItemIndex }) => {
	return (
		<div className="flex justify-between items-center gap-5 w-full max-w-[600px]">
			<button
				onClick={() => {
					activeItemIndex === 0
						? setActiveItemIndex(0)
						: setActiveItemIndex((prev) => prev - 1);
				}}
				className="size-[50px] bg-black bg-opacity-50 grid place-items-center text-white rounded-full min-w-[50px]"
			>
				<MdOutlineKeyboardArrowLeft />
			</button>
			<CarouselItems
				items={items}
				activeItemIndex={activeItemIndex}
			/>
			<button
				onClick={() => {
					activeItemIndex === items.length - 1
						? setActiveItemIndex(items.length - 1)
						: setActiveItemIndex((prev) => prev + 1);
				}}
				className="size-[50px] bg-black bg-opacity-50 grid place-items-center text-white rounded-full min-w-[50px]"
			>
				<MdKeyboardArrowRight />
			</button>
		</div>
	);
};

const CarouselItems = ({ items, activeItemIndex }) => {
	return (
		<div className="w-full max-w-[500px] rounded-lg bg-white h-[300px] overflow-hidden">
			<div
				className="h-[300px] grid place-items-center"
				style={{ backgroundColor: items[activeItemIndex].color }}
			>
				{items[activeItemIndex].title}
			</div>
		</div>
	);
};
