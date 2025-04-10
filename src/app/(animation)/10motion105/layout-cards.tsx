/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

export const LayoutCards = () => {
	const [current, setCurrent] = useState<CardType | null>(null);

	return (
    <div className="py-40 relative bg-gray-100 min-h-screen">
      {current && <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></div>}
      {current && <CurrentCard {...current} />}
			<div className="max-w-lg mx-auto flex flex-col gap-10">
				{cards.map((card, idx) => (
					<button
						onClick={() => setCurrent(card)}
						key={card.title}
						className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
					>
						<div className="flex gap-4 items-center">
							<img
								src={card.src}
								alt={card.title}
								className="h-16 aspect-square rounded-xl"
							/>
							<div className="flex flex-col items-start gap-2">
								<h2 className="font-bold text-lg tracking-tight text-black">
									{card.title}
								</h2>
								<p className="text-xs text-neutral-500">
									{card.description}
								</p>
							</div>
						</div>
						<div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
							{card.ctaText}
						</div>
					</button>
				))}
			</div>
		</div>
	);
};

type CardType = {
	description: string;
	title: string;
	src: string;
	ctaText: string;
	ctaLink: string;
	content: () => React.ReactNode;
};

const cards: CardType[] = [
	{
		description: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://picsum.photos/500",
		ctaText: "Play",
		ctaLink: "/",
		content: () => {
			return (
				<p className="text-xs text-neutral-500">
					Lana Del Rey, an iconic American Singer-songwriter, is
					celebrated for her melancolic and cinematic music style.
					Born Elizabeth Woolridge Grant in New York City, she has
					captivated audiences worldwide with her haunting voice and
					introspective lyrics. <br /> Her songs often explore themes
					of tragic romance, glamour and melancholia, drawing
					inspiration from both contemporary and vintage pop culture.
					With a career that has seen numerous critically acclaimed
					albums, Lana Del rey has established herself as a unique and
					influential figure in the music industry, earning a
					dedicated fan base and numerous accolades.
				</p>
			);
		},
	},
	{
		description: "Metallica",
		title: "For Whom The Bell Tolls",
		src: "https://picsum.photos/500",
		ctaText: "Play",
		ctaLink: "/",
		content: () => {
			return (
				<p className="text-xs text-neutral-500">
					Lana Del Rey, an iconic American Singer-songwriter, is
					celebrated for her melancolic and cinematic music style.
					Born Elizabeth Woolridge Grant in New York City, she has
					captivated audiences worldwide with her haunting voice and
					introspective lyrics. <br /> Her songs often explore themes
					of tragic romance, glamour and melancholia, drawing
					inspiration from both contemporary and vintage pop culture.
					With a career that has seen numerous critically acclaimed
					albums, Lana Del rey has established herself as a unique and
					influential figure in the music industry, earning a
					dedicated fan base and numerous accolades.
				</p>
			);
		},
	},
	{
		description: "Babbu Mann",
		title: "Mitra di chatri te uadd gayi",
		src: "https://picsum.photos/500",
		ctaText: "Play",
		ctaLink: "/",
		content: () => {
			return (
				<p className="text-xs text-neutral-500">
					Lana Del Rey, an iconic American Singer-songwriter, is
					celebrated for her melancolic and cinematic music style.
					Born Elizabeth Woolridge Grant in New York City, she has
					captivated audiences worldwide with her haunting voice and
					introspective lyrics. <br /> Her songs often explore themes
					of tragic romance, glamour and melancholia, drawing
					inspiration from both contemporary and vintage pop culture.
					With a career that has seen numerous critically acclaimed
					albums, Lana Del rey has established herself as a unique and
					influential figure in the music industry, earning a
					dedicated fan base and numerous accolades.
				</p>
			);
		},
	},
	{
		description: "KK",
		title: "Chod aye hum wo galiyan",
		src: "https://picsum.photos/500",
		ctaText: "Play",
		ctaLink: "/",
		content: () => {
			return (
				<p className="text-xs text-neutral-500">
					Lana Del Rey, an iconic American Singer-songwriter, is
					celebrated for her melancolic and cinematic music style.
					Born Elizabeth Woolridge Grant in New York City, she has
					captivated audiences worldwide with her haunting voice and
					introspective lyrics. <br /> Her songs often explore themes
					of tragic romance, glamour and melancholia, drawing
					inspiration from both contemporary and vintage pop culture.
					With a career that has seen numerous critically acclaimed
					albums, Lana Del rey has established herself as a unique and
					influential figure in the music industry, earning a
					dedicated fan base and numerous accolades.
				</p>
			);
		},
	},
];

const CurrentCard = (current: CardType) => {
	return (
		<div className="h-[600px] fixed inset-0 m-auto bg-white z-10 w-80 rounded-2xl border border-neutral-200 shadow-md">
			<img
				src={current.src}
				alt={current.title}
				className=" w-full aspect-square rounded-2xl rounded-b-none"
			/>

			<div className="flex flex-col justify-between items-start p-4 gap-4">
				<div className="flex items-start justify-between w-full gap-2">
					<div className="flex flex-col items-start gap-2">
						<h2 className="font-bold text-lg tracking-tight text-black">
							{current.title}
						</h2>
						<p className="text-xs text-neutral-500">
							{current.description}
						</p>
					</div>
					<Link
						href={current.ctaLink}
						className="px-2 py-1 bg-green-500 rounded-full text-white text-xs "
					>
						{current.ctaText}
					</Link>
        </div>
        <div className="h-40 overflow-auto">
          {current.content()}
        </div>
			</div>
		</div>
	);
};
