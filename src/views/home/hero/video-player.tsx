"use client";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";

const VIDEO_ID = "K-Q4r37XgVw";

export default function VideoPlayerSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<YouTubePlayer | null>(null);

    const handlePlayPause = () => {
        if (!playerRef.current) return;

        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }
        setIsPlaying(!isPlaying);
    };

    const youtubeOptions = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,              // Don't show related videos from other channels
            iv_load_policy: 3,   // Disable video annotations
            disablekb: 1,        // Disable keyboard controls
            fs: 0,               // Disable fullscreen button
            playsinline: 1,      // Play inline on mobile
        },
    };

    const onReady = (event: any) => {
        playerRef.current = event.target;
    };

    return (
        <div className="relative z-10 rounded-xl border border-primary bg-primary backdrop-blur-lg shadow-2xl">
            <div className="relative rounded-xl overflow-hidden bg-black/30 group aspect-video shadow-primary-glow transition-shadow duration-300">
                <YouTube
                    videoId={VIDEO_ID}
                    opts={youtubeOptions}
                    onReady={onReady}
                    className="w-full h-full rounded-xl"
                />

                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity 
            ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                    <button
                        onClick={handlePlayPause}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl hover:scale-110 transition-all shadow-2xl hover:shadow-primary-glow">
                            <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} ml-1`}></i>
                            {isPlaying ? <Pause /> : <Play />
                            }
                        </div>
                    </button>
                </div>
            </div>
        </div>

    );
}
