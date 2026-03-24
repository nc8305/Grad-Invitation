import React, { useState, useEffect} from 'react';
import AOS from 'aos';
import StarsBackground from './components/StarsBackground';
import GraduateProfile from './components/GraduateProfile';
import EventDetail from './components/EventDetail';
import MusicPlayer from './components/MusicPlayer';
import balloonsImg from './assets/images/balloons.png';
import tulipImg from './assets/images/tulip.png';
import twinkleImg from './assets/images/twinkle.png';

// Component Nền sao lấp lánh

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [year, setYear] = useState(4); 

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);
  

  // --- MÀN HÌNH CHỜ (INTRO) ---
  if (!isOpened) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-pink-100 relative overflow-hidden z-10 text-center px-4">
        
        <StarsBackground />
        <h2 className="font-great-vibes text-7xl md:text-8xl text-pink-600 mb-10 z-10 drop-shadow-sm text-center px-4">Graduate Invitation</h2>
        <p className="text-slate-600 text-lg md:text-xl mb-10 z-10 uppercase tracking-widest font-medium text-center">Bạn có một lời mời từ Uyên Nhi</p>
        <button onClick={() => setIsOpened(true)} className="z-10 px-12 py-5 md:px-16 md:py-6 text-xl md:text-2xl bg-pink-500 text-white rounded-full font-bold shadow-xl hover:bg-pink-600 hover:scale-110 transition-all animate-bounce">
          Mở Thiệp ✨
        </button>
        <MusicPlayer />
      </div>

    );
  }

  // --- MÀN HÌNH CHÍNH (KHI ĐÃ MỞ THIỆP) ---
  return (
    <div className="relative min-h-screen bg-pink-100 text-slate-700 overflow-hidden z-10">
      
      {/* 1. Nền sao & Máy phát nhạc */}
      <StarsBackground />
      <MusicPlayer />

      {/* 2. KHỐI ĐỒ DECOR */}
      <div className="fixed inset-0 pointer-events-auto z-20">
        {/* Chùm bóng góc trên TRÁI */}
        <div className="absolute top-0 left-0 w-32 md:w-56 animate-sway-left opacity-90 transform origin-top-left -translate-y-5 -translate-x-5">
          <img src={balloonsImg} alt="Balloons Left" className="w-full h-auto drop-shadow-xl" />
        </div>
        
        {/* Chùm bóng góc trên PHẢI */}
        <div className="absolute top-0 right-0 w-32 md:w-56 animate-sway-right opacity-90 transform origin-top-right -translate-y-5 translate-x-5">
          <img src={balloonsImg} alt="Balloons Right" className="w-full h-auto drop-shadow-xl" />
        </div>

        {/* Hoa Tulip góc dưới TRÁI */}
        <div className="absolute -bottom-5 -left-5 md:left-5 w-40 md:w-56 animate-float-slow opacity-90">
          <img src={tulipImg} alt="Pink Tulip" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Twinkle góc dưới PHẢI */}
        <div className="absolute bottom-10 right-2 md:right-10 w-32 md:w-48 animate-float-delayed">
          <img src={twinkleImg} alt="Twinkle Popmart" className="w-full h-auto drop-shadow-2xl" />
        </div>
      </div>


      {/* 3. CÁC CHƯƠNG NỘI DUNG */}
      <div className="relative z-30 pt-10">
        
        {/* Chương 1 */}
        <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center px-4" data-aos="fade-up">
          <h1 className="font-great-vibes text-[80px] md:text-[120px] text-pink-600 mb-4 drop-shadow-sm leading-tight text-glow-pink">Trần Nguyễn Uyên Nhi</h1>
          <p className="text-xl md:text-2xl font-medium tracking-[0.3em] uppercase text-pink-400">Chương 1: Awaken</p>
          <p className="max-w-2xl mt-6 text-base md:text-lg text-slate-600 px-4">Mọi hành trình đều bắt đầu từ một giấc mơ. Uyên Nhi đã bắt đầu chặng đường Ngoại thương của mình bằng sự tò mò và khát vọng vươn ra biển lớn.</p>
        </section>

        {/* Chương 2: Profile */}
        <section className="py-20 relative px-4" data-aos="zoom-in">
          <GraduateProfile />
        </section>

        {/* Chương 3: Explore */}
        <section className="py-20 px-6 text-center" data-aos="fade-right">
          <h2 className="font-great-vibes text-5xl md:text-6xl mb-10 text-pink-500 drop-shadow-sm text-center">Chương 3: Explore</h2>
          <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white shadow-sm">
            <p className="text-lg md:text-xl mb-6 font-bold uppercase text-pink-600">Năm thứ {year}: {year === 4 ? "Bứt phá" : "Khám phá"}</p>
            <input type="range" min="1" max="4" value={year} onChange={(e) => setYear(parseInt(e.target.value))} className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500 mb-6" />
            <p className="italic text-slate-600 text-sm md:text-base">"Từ những kiến thức Quản trị Hải quan đến tấm bằng Xuất sắc danh giá..."</p>
          </div>
        </section>

        {/* Chương 4: Event */}
        <section className="py-10" data-aos="fade-up">
          <EventDetail />
        </section>

        {/* Lời kết */}
        <section className="py-24 md:py-32 text-center px-4" data-aos="zoom-out">
          <h2 className="font-great-vibes text-6xl md:text-8xl mb-6 text-pink-600 drop-shadow-sm text-center">Among The Stars</h2>
          <p className="text-lg md:text-xl px-4 max-w-2xl mx-auto text-slate-600">Tấm bằng Xuất sắc này là điểm kết thúc của một hành trình và là khởi đầu cho vô vàn phi vụ mới giữa các vì sao.</p>
          <button className="mt-10 px-8 py-4 md:px-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-105 transition-all font-bold shadow-lg">
            GỬI LỜI CHÚC MỪNG 🎓
          </button>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-pink-200 text-center text-slate-400 text-xs tracking-[0.2em] uppercase bg-white/30 pb-20 md:pb-10 px-4">
          <p>© 2026 Graduation Ceremony</p>
          <p className="font-great-vibes text-xl md:text-2xl mt-2 text-pink-400 lowercase capitalize">Designed with Celestial Light</p>
        </footer>
      </div>

    </div>
  );
}

export default App;