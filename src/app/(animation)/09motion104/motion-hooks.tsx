"use client";

import { IconRocket } from "@tabler/icons-react";
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function MotionHooksExample() {

  const containerRef = useRef<HTMLDivElement>(null);
  const backgrounds = ["#343434", "#00193b", "#05291c"]

  const [background, setBackground] = useState(backgrounds[0])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // element = start, viewport = end
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length)
    setBackground(backgrounds[finalValue])
  }) 
	return (
    <motion.div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-neutral-900"
      animate={{
        background
      }}
      transition={{
        duration: 0.500,
        ease: "easeInOut"
      }}
    >
			<div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
				{features.map((feature, idx) => (
					<Card key={feature.title} feature={feature} />
				))}
			</div>
		</motion.div>
	);
}

const Card = ({ feature }: { feature: FeaturesType }) => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // element = start, viewport = end
  })

  const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [250, -250]), {
    stiffness: 100,
    damping: 20,
    mass: 1,
  })
  const opacityTranform = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const blurTransform = useTransform(scrollYProgress, [0.5, 1], [0, 10])
  const scaleTransform = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("change", latest);
  // })

 

	return (
    <div
      ref={ref}
			key={feature.title}
			className="grid grid-cols-2 items-center gap-20 py-40"
		>
      <motion.div
        style={{
          // filter: `blur(${blurTransform}px)`, // Won't work
          filter: useMotionTemplate`blur(${blurTransform}px)`,
          scale: scaleTransform,
        }}
        className="flex flex-col gap-5">
				{feature.icon}
				<h2 className="text-4xl font-semibold text-white">
					{feature.title}
				</h2>
				<p className="text-lg text-neutral-400">
					{feature.description}
				</p>
			</motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityTranform,
        }}
      >
        {feature.content}
      </motion.div>
		</div>
	);
};

type FeaturesType = {
	icon: React.ReactNode;
	title: string;
	description: string;
	content: React.ReactNode;
};

const features: FeaturesType[] = [
	{
		icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
		title: "Generate Ultra Realistic images in seconds",
		description:
			"With our state of the art AI, you can generate ultra realistic images in no time at all.",
		content: (
			<Image
				src="https://picsum.photos/500"
				alt="car"
				width={500}
				height={500}
				className="rounded-lg"
			/>
		),
	},
	{
		icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
		title: "Replicate great Art",
		description:
			"Generate the painting of renowned artists, like Van Gogh or Monet or Majnu bhai.",
		content: (
			<Image
				src="https://picsum.photos/500"
				alt="art"
				width={500}
				height={500}
				className="rounded-lg"
			/>
		),
	},
	{
		icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
		title: "Batch Generate images with a single click.",
		description:
			"With our state of the art AI, you can generate a batch of images within 10 seconds with absolutely no effort.",
		content: (
			<div className="relative">
				<div className="-rotate-[10deg]">
					<Image
						src="https://picsum.photos/500"
						alt="car"
						width={500}
						height={500}
						className="rounded-lg"
					/>
				</div>
				<div className="absolute inset-0 rotate-[10deg] transform">
					<Image
						src="https://picsum.photos/500"
						alt="car 2"
						width={500}
						height={500}
						className="rounded-lg"
					/>
				</div>
			</div>
		),
	},
];
