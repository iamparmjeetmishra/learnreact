/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";

export const LayoutCards = () => {
  return <div className="py-40 bg-gray-100 min-h-screen">
    <div className="max-w-lg mx-auto flex flex-col gap-10">
      {cards.map((card, idx) => (
        <button
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
              <h2 className="font-bold text-lg tracking-tight text-black">{card.title}</h2>
              <p className="text-xs text-neutral-500">{ card.description }</p>
            </div>
          </div>
          <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">{ card.ctaText}</div>
        </button>
      ))}
    </div>
  </div>
}

type CardType = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

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
          Lana Del Rey, an iconic American Singer-songwriter, is celebrated for her melancolic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics. <br /> Her songs often explore themes of tragic romance, glamour and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del rey has established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      )
    }
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
          Lana Del Rey, an iconic American Singer-songwriter, is celebrated for her melancolic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics. <br /> Her songs often explore themes of tragic romance, glamour and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del rey has established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      )
    }
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
          Lana Del Rey, an iconic American Singer-songwriter, is celebrated for her melancolic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics. <br /> Her songs often explore themes of tragic romance, glamour and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del rey has established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      )
    }
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
          Lana Del Rey, an iconic American Singer-songwriter, is celebrated for her melancolic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics. <br /> Her songs often explore themes of tragic romance, glamour and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous critically acclaimed albums, Lana Del rey has established herself as a unique and influential figure in the music industry, earning a dedicated fan base and numerous accolades.
        </p>
      )
    }
  },
]