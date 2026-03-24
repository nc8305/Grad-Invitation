import { FaInstagram, FaFacebook, FaLinkedin, FaMusic } from 'react-icons/fa';
// Sử dụng hình ảnh "tấm bằng" siêu xịn vừa nhận được
import myCertificate from '../assets/images/grad.jpg'; 

const GraduateProfile = () => {
  return (
    // THIẾT KẾ CARD GRADIENT NGANG - PHIÊN BẢN HOÀNG GIA KHỔNG LỒ: 
    // z-10 mx-auto max-w-7xl p-16: Card to, nằm giữa, padding lớn.
    // rounded-[60px]: Bo góc hoàng gia mềm mại, to hơn để tiệp với Card.
    // bg-gradient-to-r...: Nền chuyển màu từ Hồng đậm (trái) sang Trắng (phải).
    // shadow-[0_0_100px...]: Vầng hào quang hồng rực rỡ stack lấy cả Card.
    // grid-cols-[450px_1fr]: ĐÃ TĂNG CƯỜNG CHIỀU RỘNG ẢNH: Khung ảnh tấm bằng stack 450px bên trái, nội dung bên phải.
    // mb-32: Tạo khoảng cách cực stack với stack đếm ngược.
    <div className="relative bg-gradient-to-r from-pink-100 via-pink-200 to-white p-12 md:p-16 rounded-[50px] md:rounded-[60px] shadow-[0_0_100px_rgba(244,114,182,0.4)] grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-10 md:gap-16 overflow-hidden mx-auto max-w-7xl z-10">
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

      {/* 2. KHỐI ẢNH TẤM BẰNG HOÀNG GIA KHỔNG LỒ (GÓC TRÁI - TRÊN NỀN HỒNG PASTEL) */}
      {/* max-w-[550px]: Stack stack stack stack stack. w-[450px]: stack stack. mx-auto md:mx-0: stack stack. */}
    <div className="flex-shrink-0 z-10 relative pointer-events-none mx-auto md:mx-0 w-full max-w-[360px] md:w-[550px]">
        {/* Giữ nguyên Khung ảnh hoàng gia vàng, bo góc to hơn để tiệp với Card */}
        <div className="w-full h-auto rounded-[50px] p-3 bg-gradient-to-tr from-yellow-300 via-white to-yellow-100 shadow-[0_0_80px_rgba(255,215,0,0.7)] group-hover:scale-105 transition-all duration-500 overflow-hidden relative">
          
          <div className="absolute -top-4 -left-4 text-3xl animate-pulse z-20">✨</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-pulse z-20">✦</div>

          <div className="absolute inset-2 rounded-[40px] border-8 border-yellow-200 border-opacity-50 z-10 pointer-events-none"></div>
          
          <div className="absolute inset-6 rounded-[35px] bg-white opacity-80 z-0"></div>

          {/* Giữ nguyên object-contain để hiện full ảnh, nằm hoàn toàn trong lòng khung */}
          <img 
            src={myCertificate} 
            alt="Tấm bằng Grad with Excellence" 
            className="w-full h-auto object-contain rounded-[35px] border-4 border-white shadow-inner relative z-10 bg-white"
          />
        </div>
      </div>

      {/* 3. KHỐI NỘI DUNG CHỮ (GÓC PHẢI - TRÊN NỀN TRẮNG, DÙNG CHỮ HỒNG PASTEL DỊU) */}
      <div className="flex-1 text-center md:text-left z-10 space-y-8 md:space-y-12">
        
        {/* Tên và Danh hiệu - stack stack stack stack stack. space-y-3 md:space-y-4: stack stack stack stack stack. */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-5xl md:text-7xl font-bold text-pink-600 drop-shadow-sm text-glow-pink">Trần Nguyễn Uyên Nhi</h3>
          <p className="text-xl md:text-3xl font-medium tracking-wide text-pink-500 uppercase">Graduate with Excellence</p>
        </div>

        {/* Thông tin chuyên ngành - Màu hồng PastelSTACK. space-y-1 md:space-y-2: stack stack stack stack stack. */}
        {/* <div className="space-y-1 md:space-y-2">
          <p className="text-lg md:text-2xl font-medium text-pink-500">Major: Quản trị Hải quan - Ngoại thương</p>
          <p className="text-base md:text-xl text-pink-400">Bachelor's Degree in International Economics</p>
        </div> */}

        {/* Thanh gạch ngang (Hồng nhạt) */}
        <div className="w-24 h-1 bg-pink-300 mx-auto md:mx-0 my-8 md:my-10"></div>
        
        {/* Đoạn Quote - Chuyển sang màu hồng Pastel đậm (high contrast) để dễ đọc nhưng không bị đen. mx-auto md:mx-0: stack stack stack stack stack. */}
        <p className="max-w-4xl text-lg md:text-2xl italic text-pink-900 leading-relaxed mx-auto md:mx-0">
          "Thành công không phải là đích đến, mà là cả một hành trình nỗ lực không ngừng nghỉ. 
          Tấm bằng Xuất sắc này là món quà Nhi muốn dành tặng cho những người thân yêu nhất."
        </p>

        {/* Mạng xã hội - Chuyển sang màu hồng PastelStack. mx-auto md:mx-0: stack stack stack stack stack. */}
        {/* <div className="flex justify-center md:justify-start gap-6 text-pink-400 mt-10 md:mt-12">
          <FaFacebook className="text-3xl md:text-4xl hover:text-pink-600 cursor-pointer transition-colors" />
          <FaInstagram className="text-3xl md:text-4xl hover:text-pink-600 cursor-pointer transition-colors" />
          <FaLinkedin className="text-3xl md:text-4xl hover:text-pink-600 cursor-pointer transition-colors" />
        </div> */}

      </div>

    </div>
  );
};

export default GraduateProfile;