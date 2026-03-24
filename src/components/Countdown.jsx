import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    'Ngày': 0,
    'Giờ': 0,
    'Phút': 0,
    'Giây': 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const graduationDate = new Date('2026-04-05T16:30:00');
      const now = new Date();
      const difference = graduationDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ 'Ngày': days, 'Giờ': hours, 'Phút': minutes, 'Giây': seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    // Nền hồng pastel (bg-pink-50) và chữ màu tối để dễ đọc
    <section className="py-16 px-4 bg-pink-50 text-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-great-vibes text-5xl mb-12 text-pink-600">Đếm Ngược Đến Buổi Lễ</h2>
        
        <div className="flex justify-center gap-3 md:gap-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            // Hộp trắng mờ, bo góc tròn trịa và có viền hồng nhạt
            <div key={unit} className="bg-white/80 rounded-2xl p-4 w-20 md:w-28 backdrop-blur-md shadow-sm border border-pink-100">
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-1">{value}</div>
              <div className="text-xs md:text-sm uppercase font-semibold text-slate-500">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;