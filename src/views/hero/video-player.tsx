"use client"
import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const VIDEO_ID = "K-Q4r37XgVw";
const VIDEO_URL = `https://youtu.be/${VIDEO_ID}`;

export default function VideoPlayerSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const playerRef = useRef<any>(null);

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
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,
        },
    };

    const onReady = (event: any) => {
        playerRef.current = event.target;
    };

    return (
        <div className="">
            <div className="relative z-10 glass-card p-6">
                <div className="relative rounded-xl overflow-hidden bg-black/30 group aspect-video">
                    <YouTube
                        videoId={VIDEO_ID}
                        opts={youtubeOptions}
                        onReady={onReady}
                        className="w-full h-full rounded-xl"
                    />

                    {/* Controls Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>

                        <button
                            onClick={handlePlayPause}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl hover:scale-110 transition-all shadow-2xl hover:shadow-primary-glow">
                                <i className="fas fa-play ml-2"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}