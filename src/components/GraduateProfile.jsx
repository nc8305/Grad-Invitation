import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import myAvatar from '../assets/images/grad.jpg'; // Tên file ảnh của bạn

const GraduateProfile = () => {
  return (
    <div className="text-center text-slate-700 p-6 flex flex-col items-center">
      
      {/* KHUNG ẢNH VÀNG HOÀNG GIA */}
      <div className="relative mb-8 group overflow-hidden">
        <div className="w-80 h-[420px] md:w-96 md:h-[500px] p-2 bg-gradient-to-tr from-yellow-300 via-white to-yellow-100 shadow-[0_0_60px_rgba(255,215,0,0.6)] group-hover:scale-105 transition-all duration-500 overflow-hidden relative">
          
          <div className="absolute -top-4 -left-4 text-3xl animate-pulse">✨</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-pulse">✦</div>

          <div className="absolute inset-2 rounded-[40px] border-8 border-yellow-200 border-opacity-50"></div>
          <div className="absolute inset-6 rounded-[35px] bg-white opacity-20"></div>

          <img 
            src={myAvatar} 
            alt="Trần Nguyễn Uyên Nhi" 
            className="w-full h-full object-cover rounded-[35px] border-4 border-white shadow-inner relative z-0"
          />
        </div>
        
        <div className="flex justify-center mb-4 mt-2">
          <span className="bg-white text-pink-600 border border-pink-200 px-4 py-1 rounded-full text-sm font-bold shadow-md animate-pulse">
            🎓 GRADUATED WITH EXCELLENCE
          </span>
        </div>
      </div>

      <h3 className="text-4xl md:text-5xl font-bold mb-2 text-pink-600 drop-shadow-sm">Trần Nguyễn Uyên Nhi</h3>
      <p className="text-xl font-medium text-pink-500 mb-1">
        Chuyên ngành Quản trị Hải quan - Ngoại thương
      </p>
      
      <div className="w-16 h-0.5 bg-pink-300 mx-auto my-4"></div>
      
      <p className="max-w-md mx-auto italic text-slate-600 leading-relaxed">
        "Thành công không phải là đích đến, mà là cả một hành trình nỗ lực không ngừng nghỉ. 
        Tấm bằng Xuất sắc này là món quà Nhi muốn dành tặng cho những người thân yêu nhất."
      </p>

      <div className="flex justify-center gap-4 mt-6 text-pink-400">
        <FaFacebook className="text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
        <FaInstagram className="text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
        <FaLinkedin className="text-2xl hover:text-pink-600 cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

export default GraduateProfile;