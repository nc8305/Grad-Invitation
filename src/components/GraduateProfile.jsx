import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
// Nhớ đổi tên file ảnh cho đúng với avatar của Uyên Nhi nhé
import myAvatar from '../assets/images/grad.jpg'; 

const GraduateProfile = () => {
  return (
    // Đổi flex-col thành text-center p-6 flex flex-col items-center
    <div className="text-center text-slate-700 p-6 flex flex-col items-center">
      
      {/* --- PHẦN KHUNG ẢNH BAO TRÙM (MỚI) --- */}
      <div className="relative mb-8 group overflow-hidden">
        {/* 1. Lớp khung ngoài: Một khung trang trí vàng hoàng gia, to đủ để bao trùm hoàn toàn
          w-80 h-80: Kích thước khung to (khoảng 320px). Có thể tăng thêm nếu muốn to hơn.
          rounded-[50px]: Bo góc khung lớn hơn để tạo vẻ mềm mại, sang trọng.
          bg-gradient-to-tr: Gradient vàng sang trọng cho khung.
          shadow-[0_0_60px...]: Vầng hào quang phát sáng vàng rực rỡ hơn.
        */}
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-[50px] p-2 bg-gradient-to-tr from-yellow-300 via-white to-yellow-100 shadow-[0_0_60px_rgba(255,215,0,0.6)] group-hover:scale-105 transition-all duration-500 overflow-hidden relative">
          
          {/* Lớp điểm nhấn bling bling phát sáng của khung */}
          <div className="absolute -top-4 -left-4 text-3xl animate-pulse">✨</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-pulse">✦</div>

          {/* Lớp trang trí viền trong bằng gradient vàng và đá quý giả (mô phỏng) */}
          <div className="absolute inset-2 rounded-[40px] border-8 border-yellow-200 border-opacity-50"></div>
          <div className="absolute inset-6 rounded-[35px] bg-white opacity-20"></div>

          {/* 2. Lớp ảnh bên trong: Bức ảnh tốt nghiệp, nằm hoàn toàn trong lòng khung
            Object-cover và rounded-[35px] để ảnh ăn khớp với khung.
            Sử dụng z-index thấp hơn khung để khung nằm đè lên ảnh.
          */}
          <img 
            src={myAvatar} 
            alt="Trần Nguyễn Uyên Nhi" 
            className="w-full h-full object-cover rounded-[35px] border-4 border-white shadow-inner relative z-0"
          />
        </div>
        
        {/* Huy hiệu: Nền trắng, chữ hồng đậm để hợp với theme Pastel */}
        <div className="flex justify-center mb-4 mt-2">
          <span className="bg-white text-pink-600 border border-pink-200 px-4 py-1 rounded-full text-sm font-bold shadow-md animate-pulse">
            🎓 GRADUATED WITH EXCELLENCE
          </span>
        </div>
      </div>
      {/* --- PHẦN KHUNG ẢNH (KẾT THÚC) --- */}


      {/* Tên: Đổi sang màu hồng đậm, size lớn hơn (text-4xl md:text-5xl) */}
      <h3 className="text-4xl md:text-5xl font-bold mb-2 text-pink-600 drop-shadow-sm">Trần Nguyễn Uyên Nhi</h3>
      
      {/* Chuyên ngành: Màu hồng vừa */}
      <p className="text-xl font-medium text-pink-500 mb-1">
        Chuyên ngành Quản trị Hải quan - Ngoại thương
      </p>
      
      {/* Thanh gạch ngang: Đổi sang màu hồng nhạt */}
      <div className="w-16 h-0.5 bg-pink-300 mx-auto my-4"></div>
      
      {/* Đoạn quote: Màu xám thanh lịch */}
      <p className="max-w-md mx-auto italic text-slate-600 leading-relaxed">
        "Thành công không phải là đích đến, mà là cả một hành trình nỗ lực không ngừng nghỉ. 
        Tấm bằng Xuất sắc này là món quà Nhi muốn dành tặng cho những người thân yêu nhất."
      </p>

      {/* Mạng xã hội (giữ nguyên) */}
      <div className="flex gap-4 mt-6 text-pink-400">
        <FaFacebook className="text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
        <FaInstagram className="text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
        <FaLinkedin className="text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

export default GraduateProfile;