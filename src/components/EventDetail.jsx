import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const EventDetail = () => {
  const events = [
    {
      title: "Graduation Ceremony",
      date: "Chủ Nhật, 05 tháng 04, 2026", // Đã tra lịch, ngày này là Chủ Nhật
      time: "16:30",
      location: "Đại học Kinh tế TP.HCM (UEH) - Cơ sở A",
      address: "59C Nguyễn Đình Chiểu, Phường 6, Quận 3, TP.HCM",
      mapLink: "https://maps.app.goo.gl/PzB6JkHqM9Z8F3nU8" // Link thật của UEH
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-great-vibes text-5xl text-center text-slate-800 mb-12">
          Thông Tin Buổi Lễ
        </h2>
        
        {/* Đổi sang flex căn giữa vì chỉ có 1 event */}
        <div className="flex justify-center">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-md border-t-4 border-slate-800">
              
              <div className="flex justify-center mb-4">
                <FaGraduationCap className="text-5xl text-slate-700" />
              </div>
              
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">
                {event.title}
              </h3>
              
              <div className="space-y-4 text-slate-600">
                <div className="flex items-center gap-4">
                  <FaCalendarAlt className="text-xl text-slate-400 flex-shrink-0" />
                  <p className="font-medium text-lg">{event.date}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaClock className="text-xl text-slate-400 flex-shrink-0" />
                  <p className="font-medium text-lg">{event.time}</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-xl text-slate-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800">{event.location}</p>
                    <p className="text-sm mt-1">{event.address}</p>
                  </div>
                </div>
              </div>
              
              {/* Nút bấm mở Google Maps trên tab mới */}
              <a 
                href={event.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all flex items-center justify-center gap-2 mx-auto w-fit font-medium"
              >
                <FaMapMarkerAlt /> Xem Bản Đồ
              </a>
            </div>
          ))}
        </div>
        
        {/* Khung Google Maps nhúng trực tiếp */}
        <div className="mt-12 bg-white p-3 rounded-2xl shadow-md">
          <div className="h-80 w-full bg-gray-200 rounded-xl overflow-hidden">
            <iframe 
              title="Bản đồ UEH Cơ sở A"
              src="https://maps.google.com/maps?q=UEH%20C%C6%A1%20s%E1%BB%9F%20A%2059c%20nguy%E1%BB%85n%20%C4%91%C3%ACnh%20chi%E1%BB%83u&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;