import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import StarsBackground from './components/StarsBackground';
import GraduateProfile from './components/GraduateProfile';
import Countdown from './components/Countdown';
import EventDetail from './components/EventDetail';
import MusicPlayer from './components/MusicPlayer';
import WishForm from './components/WishForm';


function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showWishForm, setShowWishForm] = useState(false);

  useEffect(() => { 
    AOS.init({ duration: 1000 }); 
  }, []);

  // Hàm xử lý Mở Thiệp + Ép phát nhạc
  const handleOpenInvitation = () => {
    setIsOpened(true);
    const audioElements = document.getElementsByTagName('audio');
    if (audioElements.length > 0) {
      audioElements[0].play().catch(e => console.log("Autoplay bị chặn", e));
    }
  };

  return (
    <div className="relative min-h-screen bg-pink-100 text-slate-700 overflow-x-hidden pb-20">
      
      {/* 1. NỀN SAO & NHẠC */}
      <StarsBackground />
      <div className="fixed bottom-4 right-4 z-50">
        <MusicPlayer />
      </div>

      {/* 2. CHIA KHỐI: MÀN HÌNH CHỜ (INTRO) */}
      {!isOpened ? (
        <div className="h-screen flex flex-col items-center justify-center relative z-40 text-center px-4">
          <h2 className="font-great-vibes text-7xl md:text-8xl text-pink-600 mb-10 drop-shadow-sm animate-pulse">Graduate Invitation</h2>
          <p className="text-slate-600 text-lg md:text-xl mb-10 uppercase tracking-widest font-medium">Bạn có một lời mời từ UNHII</p>
          <button 
            onClick={handleOpenInvitation} 
            className="px-12 py-5 md:px-16 md:py-6 text-xl md:text-2xl bg-pink-500 text-white rounded-full font-bold shadow-xl hover:bg-pink-600 hover:scale-110 transition-all animate-bounce"
          >
            Mở Thiệp ✨
          </button>
        </div>
      ) : (
        /* 3. CHIA KHỐI: MÀN HÌNH CHÍNH */
        <>
          {/* ĐỒ DECOR */}
          {/* <div className="fixed inset-0 pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-32 md:w-56 animate-sway-left opacity-90 transform origin-top-left -translate-y-5 -translate-x-5">
              <img src={balloonsImg} alt="Balloons Left" className="w-full h-auto drop-shadow-xl" />
            </div>
            <div className="absolute top-0 right-0 w-32 md:w-56 animate-sway-right opacity-90 transform origin-top-right -translate-y-5 translate-x-5">
              <img src={balloonsImg} alt="Balloons Right" className="w-full h-auto drop-shadow-xl" />
            </div>
            <div className="absolute -bottom-5 -left-5 md:left-5 w-40 md:w-56 animate-float-slow opacity-90">
              <img src={tulipImg} alt="Pink Tulip" className="w-full h-auto drop-shadow-lg" />
            </div>
            <div className="absolute bottom-10 right-2 md:right-10 w-32 md:w-48 animate-float-delayed">
              <img src={twinkleImg} alt="Twinkle Popmart" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div> */}

          {/* CÁC CHƯƠNG NỘI DUNG (Wrap trong container giới hạn chiều rộng và có khoảng cách đều) */}
          <div className="relative z-30 pt-32 px-4 md:px-8 max-w-6xl mx-auto space-y-20">
            
            {/* HỘP 1: AWAKEN */}
            <section className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-xl p-10 md:p-16 text-center border border-pink-100" data-aos="fade-up">
              <h1 className="font-great-vibes text-[60px] md:text-[100px] text-pink-600 mb-4 drop-shadow-sm leading-tight">Trần Nguyễn Uyên Nhi</h1>
              <p className="text-xl md:text-2xl font-family tracking-[0.3em] uppercase text-pink-400">Tân cử nhân</p>
              <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-slate-600 font-montserrat italic leading-relaxed">Mọi hành trình đều bắt đầu từ một giấc mơ. unhii đã bắt đầu chặng đường của mình bằng sự tò mò và khát vọng vươn ra biển lớn.</p>
            </section>

            {/* HỘP 2: PROFILE (Đã là card thiết kế ngang) */}
            <div data-aos="zoom-in">
              <GraduateProfile />
            </div>

            {/* HỘP 3: EXPLORE */}
            {/* <section className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-xl p-10 md:p-16 text-center border border-pink-100" data-aos="fade-right">
             
              <div className="max-w-2xl mx-auto">
                <p className="text-lg md:text-xl mb-6 font-bold uppercase text-pink-600">Năm thứ {year}: {year === 4 ? "Bứt phá" : "Khám phá"}</p>
                <input type="range" min="1" max="4" value={year} onChange={(e) => setYear(parseInt(e.target.value))} className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500 mb-6" />
                <p className="italic text-slate-600 text-sm md:text-base">"Từ những kiến thức Quản trị Hải quan đến tấm bằng Xuất sắc danh giá..."</p>
              </div>
            </section> */}

            {/* HỘP 4: COUNTDOWN */}
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-xl p-10 md:p-16 border border-pink-100" data-aos="fade-up">
              <Countdown />
            </div>

            {/* HỘP 5: EVENT DETAIL */}
            <div data-aos="fade-up">
              <EventDetail />
            </div>

            {/* HỘP 6: LỜI KẾT */}
            {/* HỘP 6: LỜI KẾT */}
            <section className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-xl p-10 md:p-16 text-center border border-pink-100" data-aos="zoom-out">
              <h2 className="font-great-vibes text-5xl md:text-7xl mb-6 text-pink-600 drop-shadow-sm text-center">Among the stars</h2>
              {/* <p className="text-lg md:text-xl font-time-newroman italic max-w-2xl mx-auto text-slate-600 mb-10">Tấm bằng Xuất sắc này là điểm kết thúc của một hành trình và là khởi đầu cho vô vàn phi vụ mới của unhii.</p> */}
              
              {/* Nếu showWishForm đang là false (chưa click), thì hiện cái nút này */}
              {!showWishForm && (
                <button 
                  onClick={() => setShowWishForm(true)} 
                  className="px-8 py-4 md:px-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-105 transition-all font-bold shadow-lg animate-bounce"
                >
                  GỬI LỜI CHÚC MỪNG 🎓
                </button>
              )}
            </section>

          </div> {/* Đóng thẻ div bọc các hộp nội dung */}

          {/* Nếu showWishForm là true (đã click), thì render Form ra ở đây kèm hiệu ứng hiện ra từ từ */}
          {showWishForm && (
            <div className="relative z-30 px-4 md:px-8 max-w-6xl mx-auto mt-10 animate-fade-in">
              <WishForm />
            </div>
          )}

          {/* FOOTER */}
          <footer className="mt-20 py-10 border-t border-pink-200 text-center text-slate-400 text-xs tracking-[0.2em] uppercase bg-white/50 px-4 relative z-30">
            <p>© 2026 Graduation Ceremony</p>
            <p className="font-great-vibes text-xl md:text-2xl mt-2 text-pink-400 lowercase capitalize">Designed by nc8305</p>
          </footer>
        </>
      )}

    </div>
  );
}

export default App;