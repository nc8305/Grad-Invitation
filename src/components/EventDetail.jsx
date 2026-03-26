import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaCameraRetro, FaMotorcycle, FaCheckCircle } from 'react-icons/fa';

const EventDetail = () => {
  const events = [
    {
      title: "Gặp Mặt & Chụp Ảnh Kỷ Niệm",
      date: "Chủ Nhật, ngày 05/04/2026",
      time: "15:30 - 16:30",
      location: "Hồ Con Rùa",
      address: "Vòng xoay Phạm Ngọc Thạch, Phường 6, Quận 3, TP.HCM",
      note: "Giờ này ánh sáng hoàng hôn để chụp ảnh là đỉnh cao luôn nha! ✨",
      mapLink: "https://maps.app.goo.gl/sNQ9mRfWRMjt4X2k6" // Bạn có thể thay link Google Maps thật của Hồ Con Rùa vào đây
    }
  ];

  const parkingSpots = [
    "Các quán cà phê xung quanh trường trên đường Phạm Ngọc Thạch (Tiện thể làm ly nước nạp năng lượng trước khi chụp ảnh cũng hợp lý 🧋).",
    "Bãi xe xung quanh Hồ Con Rùa.",
    "Bãi xe Nhà Văn hóa Thanh Niên.",
    "Bãi xe Co.opmart Nguyễn Đình Chiểu.",
    "Bãi xe Bộ Giáo dục và Đào tạo - Đại diện các cơ quan phía Nam."
  ];

  return (
    // Bỏ bg-slate-50, dùng nền trong suốt để ăn theo màu bg-pink-100 của App.js
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Lặp lại event (Gặp mặt chụp ảnh) */}
        <div className="flex justify-center mb-10">
          {events.map((event, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-[40px] shadow-xl hover:shadow-2xl transition-all w-full max-w-lg border-t-8 border-pink-400 relative">
              
              <div className="flex justify-center mb-4 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg border border-pink-100">
                <FaCameraRetro className="text-4xl text-pink-500" />
              </div>
              
              <h3 className="text-3xl font-bold text-center text-pink-600 mb-8 mt-6">
                {event.title}
              </h3>
              
              <div className="space-y-5 text-slate-700">
                <div className="flex items-center gap-4 bg-pink-50 p-3 rounded-2xl">
                  <FaCalendarAlt className="text-2xl text-pink-400 flex-shrink-0" />
                  <p className="font-semibold text-lg">{event.date}</p>
                </div>
                
                <div className="flex items-center gap-4 bg-pink-50 p-3 rounded-2xl">
                  <FaClock className="text-2xl text-pink-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">{event.time}</p>
                    <p className="text-sm text-pink-600 italic mt-1">{event.note}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-pink-50 p-3 rounded-2xl">
                  <FaMapMarkerAlt className="text-2xl text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-slate-800">{event.location}</p>
                    <p className="text-sm mt-1 text-slate-600">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href={event.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-105 shadow-lg transition-all flex items-center justify-center gap-2 mx-auto w-fit font-bold tracking-wide"
              >
                <FaMapMarkerAlt /> BẢN ĐỒ ĐẾN ĐIỂM HẸN
              </a>
            </div>
          ))}
        </div>
        
        {/* --- PHẦN BÃI GỬI XE (MỚI) --- */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[40px] shadow-lg border border-pink-100 max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-100 p-3 rounded-full text-pink-500">
              <FaMotorcycle className="text-2xl" />
            </div>
            <h4 className="text-2xl font-bold text-pink-600">
              "Bản đồ" gửi xế yêu
            </h4>
          </div>
          
          <p className="text-slate-600 mb-6 italic">
            Để các bạn không phải lượn lờ tìm chỗ gửi xe mỏi mệt, Uyên Nhi xin gợi ý các bãi giữ xe siêu gần:
          </p>
          
          <ul className="space-y-3">
            {parkingSpots.map((spot, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 bg-pink-50/50 p-3 rounded-xl border border-pink-50">
                <FaCheckCircle className="text-pink-400 mt-1 flex-shrink-0" />
                <span>{spot}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Khung Google Maps nhúng trực tiếp */}
        <div className="bg-white p-3 rounded-[30px] shadow-lg border border-pink-100 max-w-4xl mx-auto">
          <div className="h-80 w-full bg-pink-50 rounded-[20px] overflow-hidden">
            <iframe 
              title="Bản đồ Hồ Con Rùa"
              // Bạn có thể lấy mã nhúng iframe của Hồ Con Rùa trên Google Maps thay vào src này
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4184661852086!2d106.69345247460368!3d10.779230589369288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f37c35e3ca5%3A0xc3fce7cd2766ea9d!2zSOG7kyBDb24gUsO5YQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetail;