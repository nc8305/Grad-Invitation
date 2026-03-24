import React, { useState, useRef, useEffect } from 'react';
import { FaMusic, FaPlay } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* File nhạc đặt ở thư mục public */}
      <audio ref={audioRef} loop src="/music.mp3" autoPlay />
      
      <button
        onClick={togglePlay}
        className={`w-14 h-14 bg-pink-500/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] border-2 border-white/50 transition-all ${
          isPlaying ? 'animate-[spin_4s_linear_infinite]' : 'hover:scale-110'
        }`}
      >
        {isPlaying ? <FaMusic className="text-xl" /> : <FaPlay className="text-xl ml-1" />}
      </button>
    </div>
  );
};

export default MusicPlayer;