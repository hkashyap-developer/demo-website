/*  */

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const HeroHomeSlickSlide = (props:any) => {




  return (
    <div>

      <div className="bg-center max-h-[580px] sm:min-h-[90vh] flex flex-col align-middle justify-center text-center">
        <div className="
        z-50 bg-[rgba(10,26,36,0.4)] min-h-[90vh] flex flex-col align-middle justify-center gap-8
        ">
            <h2
            className="px-8 text-white font-semibold text-4xl xl:text-5xl text-center z-50"
            >
                {props.title}
            </h2>
            <p className="px-8 text-white text-2xl z-50">{props.subTitle}</p>
            <Link href={props.cardLink} className="z-50">
              <Button className="max-w-min mx-auto font-normal text-2xl bg-transparent hover:bg-transparent border-2 border-white text-white p-6 rounded-full">Explore</Button>
            </Link>
        </div>

        <Image 
        src={props.bgImage} 
        width="2000" 
        height="2000" 
        alt="Slider Background"
        className="absolute top-0 left-0 z-0 h-full object-cover w-full"
        />

      </div>


    </div>
  )
}

export default HeroHomeSlickSlide