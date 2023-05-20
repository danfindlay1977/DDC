
import Image from "next/image"
import type { ReactNode } from "react"
import spiderman from "../../../public/images/spiderman.jpg"
import Link from "next/link";

type videoProfile = {
  id: number;
  title: string;
  thumbnailUrl: string;
  likes:   ReactNode;
}; 
type videoList = {
    video : [videoProfile]
}
    


const VideoGrid = (props: videoList) => {
    console.log(props);
    return (
        <section className="grid  gap-6 justify-center items-center   grid-cols-3 ">
            {props.video?.map((el: videoProfile, index) => {
                return (
                  <Link key={index} href="/player/1">
                    <section className="flex  flex-col border-slate-300 shadow-xl">
                      <Image
                        src={spiderman}
                        width={300}
                        height={300}
                        alt="image"
                      />
                      <section className="flex flex-col text-white">
                        <label>{el.likes}</label>
                        <label>{el.title}</label>
                      </section>
                    </section>
                  </Link>
                );
            })}
            
        </section>
    )
}

export default VideoGrid