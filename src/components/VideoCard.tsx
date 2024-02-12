import { useRouter } from "next/router"
import type { Video } from "../videos"
import { Line } from "./Line"

export const VideoCard = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden">
            <div>
                <img src={video.image}/>
                <Line progress={10} />
            </div>
        </div>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2">
                <img src="/thumb.jpg" className="rounded-full w-20 h-15"></img>
            </div>
            <div className="col-span-10 pl-3">
                <div className={"text-white-800 text-2xl font-medium"}>
                {video.title}
                </div>
                <div className={"text-gray-400 text-xl font-normal		"}>
                {video.author}
                </div>
                <div className="flex">
            <div className={"text-gray-400 text-xl font-normal	pr-2	"}>
                {video.views} 
            </div>
            <div className={"text-gray-400 text-xl font-normal		"}>
            • {video.timestamp}
            </div>
        </div>
            </div>
        
        
        
        </div>
    </div>
}