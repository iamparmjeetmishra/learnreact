"use client"

export const LayoutCards = () => {
  return <div className="py-40 bg-gray-100 min-h-screen">
    
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