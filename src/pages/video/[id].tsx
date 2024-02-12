import { AppBar } from "@/components/AppBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";

export default function VideoPage() {
    return (
        <div className="p-1">
            <AppBar />
            <div className="grid gap-4 grid-cols-12 pt-5">
                <div className="col-span-12 md:col-span-9 sm:col-span-8">
                    <iframe 
                        width="100%" 
                        height="720px" 
                        src="https://www.youtube.com/embed/w8C156-2W8c?rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className="text-2xl">
                        Aditya Rikhari - Tinka (Official Music Video) ft. Mugdha Agarwal
                    </div>
                </div>
                <div className="col-span-12 md:col-span-3 sm:col-span-4">
                    {VIDEOS.map(x => <VideoCardHorizontal video={x} />)}
                </div>
            </div>
        </div>
    );
}
