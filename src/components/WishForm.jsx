import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Đảm bảo đường dẫn import đúng

const WishForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate cơ bản
    if (!name.trim() || !message.trim()) {
      alert("Bạn nhớ nhập đủ tên và lời chúc nha!");
      return;
    }

    setIsSubmitting(true);

    try {
      // Gọi API insert vào bảng 'wishes' của Supabase
      const { error } = await supabase
        .from('Congratulation') // Tên bảng trong Supabase
        .insert([
          { Name: name.trim(), Congratulations: message.trim() }
        ]);

      if (error) throw error;

      // Xử lý thành công
      setIsSuccess(true);
      setName('');
      setMessage('');
      
    } catch (error) {
      console.error('Lỗi khi gửi lời chúc:', error.message);
      alert("Có lỗi xảy ra, bạn thử lại sau nhé!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* 🌟 THAY ĐỔI Ở ĐÂY:
          Sửa 'border border-pink-100' thành 'border-2 border-pink-200' 
          để viền hồng hiện rõ ở cả 4 cạnh. */}
      <div className="bg-white/80 backdrop-blur-md rounded-[30px] p-8 md:p-12 shadow-xl border-8 border-pink-400 relative overflow-hidden">
        
        {/* 🌟 ĐÃ XÓA LỚP MỜ TRANG TRÍ CHỈ NẰM Ở TRÊN CẠNH ĐỈNH */}
        {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300"></div> */}

        <h3 className="font-great-vibes text-3xl md:text-4xl text-pink-600 font-bold mb-2 text-center">Gửi Lời Chúc</h3>
        <p className="text-slate-500 text-center mb-8 italic">Hãy để lại vài dòng yêu thương cho hành trình mới của unhii nhé!</p>

        {isSuccess ? (
          <div className="bg-pink-50 border border-pink-200 text-pink-700 px-6 py-8 rounded-2xl text-center animate-fade-in">
            <p className="text-2xl mb-2">✨</p>
            <p className="font-semibold text-lg">Cảm ơn bạn rất nhiều!</p>
            <p className="text-sm mt-1">Lời chúc đã được gửi đến unhii.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-pink-800 mb-1 ml-1">unhii có thể gọi bạn là ....</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Nguyễn Văn A"
                className="w-full px-5 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/50 transition-all text-slate-700 placeholder-slate-400"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-pink-800 mb-1 ml-1">lời chúc iu thưn</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                placeholder="Chúc Uyên Nhi bay cao bay xa..."
                className="w-full px-5 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/50 transition-all text-slate-700 placeholder-slate-400 resize-none"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all ${
                isSubmitting 
                  ? 'bg-pink-300 cursor-not-allowed' 
                  : 'bg-pink-500 hover:bg-pink-600 hover:shadow-pink-300/50 hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? 'Đang gửi bay đi...' : 'Gửi Lời Chúc 💌'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WishForm;