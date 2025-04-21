"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {motion} from "motion/react"

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
	}, [callback])
	return ref
}


export const LayoutCards = () => {
  const [current, setCurrent] = useState<CardType | null>(null);


	return (
    <div className="py-40 relative bg-gray-100 min-h-screen">
      {current && <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></div>}
			{current && <Modal current={current} onClose={() => setCurrent(null)} />}

      <div className="max-w-lg mx-auto flex flex-col gap-10">
				{cards.map((card, idx) => (
					<motion.button
						layoutId={`card-${card.title}`}
						onClick={() => setCurrent(card)}
						key={card.title}
						className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
					>
						<div className="flex gap-4 i tems-center">
							<motion.img
				layoutId={`card-image-${card.title}`}
								
								src={card.src}
								alt={card.title}
								width={100}
								height={100}
								className="h-16 aspect-square rounded-xl"
							/>
							<div className="flex flex-col items-start gap-2">
								<motion.h2
									layoutId={`card-title-${card.title}`}
									className="font-bold text-lg tracking-tight text-black">
									{card.title}
								</motion.h2>
								<motion.p layoutId={`card-${card.description}`} className="text-xs text-neutral-500">
									{card.description}
								</motion.p>
							</div>
						</div>
						<motion.div layoutId={`card-${card.ctaLink}`}>
							<Link href={card.ctaLink} className="px-2 py-1 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">{card.ctaText}</Link>
						</motion.div>
					</motion.button>
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


type ModalProps = {
  current: CardType;
  onClose: () => void;
};

export const Modal = ({ current, onClose }: ModalProps) => {
  const ref = useOutsideClick(onClose);

  return (
		<motion.div
			layoutId={`card-${current.title}`}
        ref={ref}
        className="fixed inset-0 m-auto h-[600px] w-80 bg-white rounded-md z-20 shadow-md p-2"
      >
			<motion.img
				layoutId={`card-image-${current.title}`}
					src={current.src}
					alt={current.title}
					width={320}
					height={320}
					className="w-full aspect-square rounded-md"
				/>
        <div className="flex flex-col gap-4 p-2 mt-2">
          <div className="flex justify-between">
            <div>
              <motion.h2 layoutId={`card-title-${current.title}`}  className="text-lg font-bold">{current.title}</motion.h2>
              <motion.p layoutId={`card-${current.description}`}  className="text-xs text-neutral-500">{current.description}</motion.p>
            </div>
            <motion.div layoutId={`card-${current.ctaLink}`}>
							<Link href={current.ctaLink} className="px-2 py-1 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">{current.ctaText}</Link>
						</motion.div>
          </div>
				<motion.div
					initial={{
						filter: "blur(10px)",
						opacity: 0,
					}}
					animate={{
						filter: "blur(0px)",
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
					}}
					className="h-40 overflow-auto pb-10 [mask-image:linear-gradient(to_top,transparent,black_40%)]"
				>
					{current.content()}
				</motion.div>
        </div>
      </motion.div>
  );
};
