import { useEffect, useRef } from "react";
import videojs from "video.js";

const VideoPlayer = ({ options, linkVideo }) => {
    const videoRef = useRef(linkVideo);
    const playerRef = useRef(null);

    useEffect(() => {
        const player = playerRef.current
        if(!player){
            const videoElement = videoRef.current
            if(!videoElement) return

            playerRef.current = videojs(videoElement, options)
        }

        return () => {
            if(player){
                playerRef.current = null
            }
        }
    },[options, videoRef, playerRef]);
    return (
        <div data-vjs-player>
            <video ref={videoRef} className='video-js vjs-big-play-centered' />
        </div>
    );
};

export default VideoPlayer;
