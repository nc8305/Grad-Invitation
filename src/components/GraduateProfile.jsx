import { FaMusic } from 'react-icons/fa';
// Nhớ đổi tên file ảnh cho đúng với avatar của Uyên Nhi nhé (đang để là grad.jpg)
import myCertificate from '../assets/images/grad.jpg'; 

const GraduateProfile = () => {
  return (
    // THIẾT KẾ CARD GRADIENT DỌC - PHIÊN BẢN HOÀNG GIA KHỔNG LỒ (CANH GIỮA): 
    // mx-auto max-w-7xl p-16: Card to, nằm giữa, padding lớn.
    // rounded-[60px]: Bo góc hoàng gia mềm mại, to hơn để tiệp với Card.
    // bg-gradient-to-b...: Nền chuyển màu từ Hồng nhạt (trên) sang Trắng (dưới).
    // shadow-[0_0_100px...]: Vầng hào quang hồng rực rỡ stack lấy cả Card.
    // md:flex md:flex-col md:items-center: ĐÃ ĐỔI SANG BỐ CỤC DỌC VÀ CANH GIỮA 100% TRÊN PC.
    // mb-32: Tạo khoảng cách cực stack với stack đếm ngược.
    <div className="relative bg-gradient-to-b from-pink-100 via-pink-200 to-white p-12 md:p-16 rounded-[50px] md:rounded-[60px] shadow-[0_0_100px_rgba(236,72,153,0.4)] flex flex-col md:items-center gap-10 md:gap-16 overflow-hidden mx-auto max-w-7xl mb-32 z-10 text-center">
      
      {/* 1. KHỐI DECOR NỘI KHU (Nằm trong card) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* Vô số ngôi sao lấp lánh (bling bling) */}
        <div className="absolute top-10 left-20 star-sparkle w-10 h-10 animate-glow-sparkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-20 star-sparkle w-8 h-8 animate-glow-sparkle" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 star-sparkle w-6 h-6 animate-glow-sparkle" style={{animationDelay: '2s'}}></div>
        
        {/* Nốt nhạc lơ lửng - chuyển stack màu hồng pastel nhẹ */}
        <FaMusic className="absolute top-20 right-1/4 text-5xl text-pink-Stack300 animate-float-slow" />
        <FaMusic className="absolute bottom-20 left-1/4 text-4xl text-pink-300 animate-float-delayed" />
      </div>
 <div className="flex-shrink-0 z-10 relative pointer-events-none mx-auto w-full max-w-[360px] md:max-w-[800px] mb-2">
        {/* Giữ nguyên Khung ảnh hoàng gia vàng khổng lồ bao trùm lấy tấm bằng, to đủ để stack stack stack. */}
        <div className="w-full h-auto rounded-[50px] p-3 bg-gradient-to-tr from-yellow-300 via-white to-yellow-100 shadow-[0_0_80px_rgba(255,215,0,0.7)] group-hover:scale-105 transition-all duration-500 overflow-hidden relative">
          
          <div className="absolute -top-4 -left-4 text-3xl animate-pulse z-20">✨</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-pulse z-20">✦</div>

          <div className="absolute inset-2 rounded-[40px] border-8 border-yellow-200 border-opacity-50 z-10 pointer-events-none"></div>
          
          <div className="absolute inset-6 rounded-[35px] bg-white opacity-80 z-0"></div>

          {/* object-contain stack. rounded-[35px]: stack. border-4 border-white: stack. shadow-inner: stack. relative z-10: stack. bg-white: stack. h-auto: stack. mx-auto: stack stack. */}
          <img 
            src={myCertificate} 
            alt="Tấm bằng Grad with Excellence" 
            className="w-full h-auto object-contain rounded-[35px] border-4 border-white shadow-inner relative z-10 bg-white mx-auto"
          />
        

        </div>
       <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 flex justify-center w-full">
          <span className="bg-white text-pink-600  border border-pink-200 px-5 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-md animate-pulse whitespace-nowrap tracking-wide">
            🎓 GRADUATED WITH EXCELLENCE
          </span>
        </div>
      </div>
      
      {/* 2. KHỐI TÊN VÀ DANH HIỆU (Ở TRÊN CÙNG) */}
      <div className="space-y-4 md:space-y-6 z-10 w-full -mt-10 md:-mt-16">
        {/* text-5xl md:text-[80px]: Giữ nguyên stack to lả lướt. mx-auto: stack stack. */}
        {/* <h3 className="text-9xl md:text-[90px] font-fzbonestay text-pink-600 text-glow-pink mx-auto">Trần Nguyễn Uyên Nhi</h3> */}
        
        {/* text-lg md:text-3xl: Tăng kích thước danh hiệu trên PC. font-serif: stack. tracking-[0.2em]: stack. uppercase: stack stack. mx-auto: stack stack. */}
      
      </div>

      {/* 3. KHỐI ẢNH TẤM BẰNG HOÀNG GIA KHỔNG LỒ (CHÍNH GIỮA) */}
      {/* max-w-[360px]: Mobile stack. md:max-w-[800px]: PC: ĐÃ TĂNG CƯỜNG CHIỀU RỘNG ẢNH LÊN 800px. */}
     

      {/* 4. KHỐI QUOTE VÀ DIVIDER (Ở DƯỚI CÙNG) */}
      <div className="w-full space-y-10 z-10 -mt-8">
       
        
        {/* Đoạn Quote - Chuyển sang màu hồng Pastel đậm (high contrast) để dễ đọc nhưng không bị đen. max-w-4xl mx-auto: stack stack stack stack stack. */}
        <p className="max-w-5xl text-lg font-montserrat md:text-lg italic leading-relaxed mx-auto">
          "Thành công không phải là đích đến, mà là cả một hành trình nỗ lực không ngừng nghỉ. 
          Tấm bằng xuất sắc này là món quà unhii muốn dành tặng cho những người thân yêu nhất."
        </p>
      </div>

    </div>
  );
};

export default GraduateProfile;