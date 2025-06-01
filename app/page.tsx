'use client';
import { useEffect, useRef } from "react";
import Mainwedding from "@/components/Mainwedding";
import Infor from "@/components/Infor";
import Letter from "@/components/Letter";
import Album from "@/components/Album";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => console.log("Audio is playing"))
          .catch((error) => {
            console.log("Autoplay was prevented. User interaction required.", error);
          });
      }
    };

    // Tự động phát khi trang được tải
    playAudio();

    // Thêm sự kiện khi người dùng tương tác với trang
    const handleInteraction = () => {
      playAudio();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        autoPlay
        loop
      />
      <div className="flex flex-col overflow-hidden">
        <Mainwedding />
        <Infor />
        <Letter />
        <Album />
      </div>
    </div>
  );
}
