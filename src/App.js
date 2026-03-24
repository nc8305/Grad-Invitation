import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Countdown from './components/Countdown';
import EventDetail from './components/EventDetail';
import GraduateProfile from './components/GraduateProfile';
import MusicPlayer from './components/MusicPlayer';
const StarsBackground = () => {
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => {
      // 50% sao 4 cánh lớn, 50% chấm tròn
      const isSparkle = Math.random() > 0.5;
      
      return {
        id: i,
        type: isSparkle ? 'star-sparkle' : 'star-circle',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        // Kích thước bling bling cực lớn: Sao 4 cánh (25px-45px), chấm tròn (4px-7px)
        size: isSparkle ? `${Math.random() * 20 + 25}px` : `${Math.random() * 3 + 4}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 2}s`
      };
    });
  }, []);

  return (
    // SỬ DỤNG MÃ MÀU #fb6f92 CỦA BẠN Ở ĐÂY
    // Mình phối graixeddient từ #fb6f92 xuống #e05479 (đậm hơn 1 tone) để tạo chiều sâu
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden bg-[#ffb3c6]">

      {stars.map((star) => (
        <div
          key={star.id}
          className={star.type}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};
// Banner được "độ" lại cho lung linh
const HeroSection = () => (
  <div 
    className="h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
  >
    {/* Lớp phủ mờ */}
    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

    <div className="relative z-10 text-center p-4 w-full" data-aos="zoom-in">
      <p className="text-xl md:text-2xl text-slate-500 font-semibold mb-6 tracking-[0.3em] uppercase">
        Save the Date
      </p>
      <h1 className="font-great-vibes text-7xl md:text-9xl text-pink-500 mb-4 drop-shadow-sm">
        Lễ Tốt Nghiệp
      </h1>
      <h2 className="font-great-vibes text-6xl md:text-8xl text-pink-400 mb-8">
        Trần Nguyễn Uyên Nhi
      </h2>
      <p className="text-xl md:text-2xl text-slate-700 font-medium mb-2">
        Trân trọng kính mời
      </p>
      <p className="text-lg md:text-xl text-slate-600">
        Tân cử nhân - UEH 2026
      </p>
      <div className="w-24 h-1 bg-pink-300 mt-10 rounded-full mx-auto"></div>
    </div>
  </div>
);

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  if (!isOpened) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-pink-100 relative overflow-hidden">
        {/* Vẫn có bầu trời sao ở màn hình chào */}
        <StarsBackground /> 
        
        <div className="absolute inset-4 border-2 border-pink-200/50 rounded-2xl"></div>
        <div className="z-10 text-center" data-aos="fade-up">
          <h2 className="font-great-vibes text-9xl text-pink-700 mb-8 drop-shadow-sm">Graduate Invitation</h2>
          <p className="text-slate-600 text-xl mb-10 z-10 uppercase tracking-widest font-medium">Bạn có một lời mời từ Uyên Nhi</p>
          <button
                onClick={() => setIsOpened(true)}
                className="px-10 py-4 text-3xl bg-pink-600 text-white rounded-full font-bold shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:bg-pink-700 hover:scale-125 transition-all animate-bounce"
              >
                 Mở Thiệp
</button>
        </div>
      </div>
    );
  }

  return (
    // Bổ sung bg-pink-100 làm nền để sao trắng nổi lên
    <div className="App font-sans overflow-x-hidden relative   min-h-screen">
      
      {/* 1. Bầu trời sao lấp lánh nằm cố định ở Background */}
      <StarsBackground />
      
      {/* 2. Trình phát nhạc */}
      <MusicPlayer />
      
      {/* 3. Nội dung thiệp */}
      <div className="invitation-content relative z-10">
        <HeroSection />

        <div data-aos="fade-up" data-aos-delay="200" className="bg-white/95 rounded-2xl my-6 mx-4 p-2 shadow-sm">
          <Countdown />
        </div>

        <div data-aos="fade-up" className="bg-white/95 rounded-2xl my-6 mx-4 p-2 shadow-sm">
          <GraduateProfile />
        </div>

        <div data-aos="fade-up" className="bg-white/95 rounded-2xl my-6 mx-4 p-2 shadow-sm">
          <EventDetail />
        </div>
      </div>

      <footer className="py-8 text-center bg-white text-slate-400 text-sm border-t border-pink-100 relative z-10">
        <p>Thư mời tốt nghiệp của Uyên Nhi - 2026</p>
      </footer>
    </div>
  );
}

export default App;