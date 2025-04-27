import Image from "next/image"

import img1 from "@/public/images/pic1.jpg"
import img2 from "@/public/images/pic2.jpg"
import img3 from "@/public/images/pic3.jpg"
import img4 from "@/public/images/pic4.jpg"
import img5 from "@/public/images/pic5.jpg"
import img6 from "@/public/images/pic6.jpg"

import {dynamicImages} from "@/lib/data"
import getbase64 from "@/components/getbase64"

const images = [img1, img2, img3, img4, img5, img6]

export default function NextImage() {
  return (
    <div className="flex flex-col items-center justify-start p-4 bg-black/80 text-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Next Image component</h1>
      <p>Static Import images</p>
        {/* <div className="container grid grid-cols-3 gap-4 w-full">
          {
            images.map((img,index) => (
              <div key={index} className="w-full h-[400px] relative">
                <Image
                  src={img}
                  alt="Img"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  // blurDataURL={img}
                  quality={50}
                />
              </div>
            ))
        }
      </div> */}
      <p>Dynamic Images</p>
      <div className="container grid grid-cols-3 gap-4 w-full">
          {
          dynamicImages.map(async (img, index) => {
              const blurData = await getbase64(img)
              return (
                < div key = { index } className = "w-full h-[400px] relative" >
                <Image
                  src={img}
                  alt="Img"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurData}
                  quality={50}
                />
                </div>
              )
})
        }
        </div>
      </div>
  )
}