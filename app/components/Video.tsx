"use client";

import { Pause, Play, Volume, VolumeX } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const videos = ["assets/video-one.mp4", "assets/video.mp4"];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleEnded = () => {
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center lg:items-start relative cursor-none  w-screen lg:px-4  ">
      <video
        ref={videoRef}
        src={videos[currentVideo]}
        autoPlay
        controls={false}
        muted={isMuted}
        onEnded={handleEnded}
        className=" w-full lg:w-1/2 h-auto max-h-[450px] lg:max-h-[800px] lg:rounded-md aspect-[97/125]  object-cover z-0 cursor-none">
        Your browser does not support the video tag.
      </video>
      <div className="mt-4 flex lg:left-[220px] space-x-40 top-52 absolute">
        <button
          onClick={toggleMute}
          className="px-4 py-2 bg-gray-400/10 text-white rounded-lg justify-self-center  outline-none border-none ">
          {isMuted ? (
            <Volume strokeWidth={"0.75px"} size={30} />
          ) : (
            <VolumeX strokeWidth={"0.75px"} size={30} />
          )}
        </button>
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-slate-400/10 text-white rounded-lg outline-none border-none">
          {isPlaying ? (
            <Play size={30} strokeWidth={"0.75px"} />
          ) : (
            <Pause size={30} strokeWidth={"0.75px"} />
          )}
        </button>
      </div>
      <div className="absolute bottom-6 lg:bottom-52 lg:left-80 ">
        <button className="cursor-pointer bg-white/30 outline-none border-none hover:scale-125 hover:animate-pulse hover:transition-all hover:delay-200 text-white rounded-full p-6 text-wrap w-[100px]">
          <Link href={"/explore"}>Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
