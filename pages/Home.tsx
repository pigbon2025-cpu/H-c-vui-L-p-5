
import React from 'react';
import { SUBJECTS } from '../constants';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Hàm helper để lấy màu sắc theo subject ID theo yêu cầu cụ thể
  const getSubjectColors = (id: string) => {
    switch (id) {
      case 'math':
        return {
          bg: 'bg-purple-100', // Tím nhạt
          border: 'border-purple-200',
          shadow: 'shadow-purple-200/50',
          hover: 'hover:border-purple-400',
          badge: 'bg-purple-200 text-purple-700'
        };
      case 'vietnamese':
        return {
          bg: 'bg-yellow-200', // Vàng
          border: 'border-yellow-300',
          shadow: 'shadow-yellow-300/50',
          hover: 'hover:border-yellow-500',
          badge: 'bg-yellow-300 text-yellow-800'
        };
      case 'science':
        return {
          bg: 'bg-pink-100', // Hồng
          border: 'border-pink-200',
          shadow: 'shadow-pink-200/50',
          hover: 'hover:border-pink-400',
          badge: 'bg-pink-200 text-pink-700'
        };
      case 'english':
        return {
          bg: 'bg-blue-100', // Xanh dương
          border: 'border-blue-200',
          shadow: 'shadow-blue-200/50',
          hover: 'hover:border-blue-400',
          badge: 'bg-blue-200 text-blue-700'
        };
      case 'history_geo':
        return {
          bg: 'bg-red-100', // Đỏ
          border: 'border-red-200',
          shadow: 'shadow-red-200/50',
          hover: 'hover:border-red-400',
          badge: 'bg-red-200 text-red-700'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-transparent',
          shadow: 'shadow-teal-100/50',
          hover: 'hover:border-teal-300',
          badge: 'bg-teal-50 text-teal-600'
        };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <section className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border-4 border-teal-100 text-teal-900 shadow-xl shadow-teal-200/30 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
        <div className="relative z-10 flex-grow text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-red-600 drop-shadow-sm">Chào mừng bạn nhỏ khám phá thế giới học tập! 🌟</h1>
          <p className="text-teal-700 text-xl mb-8 font-bold">Cùng Gia sư Học Vui chinh phục kiến thức lớp 5 thật dễ dàng và vui vẻ nhé!</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={() => navigate('/tutor')}
              className="bg-teal-500 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-teal-200"
            >
              Hỏi Gia sư AI ngay
            </button>
          </div>
        </div>
        
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 chibi-bounce">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <circle cx="100" cy="80" r="50" fill="#FFE0BD" />
            <path d="M50 75 Q100 20 150 75" fill="#4A2C2C" />
            <circle cx="80" cy="85" r="4" fill="#333" />
            <circle cx="120" cy="85" r="4" fill="#333" />
            <path d="M90 105 Q100 115 110 105" fill="none" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
            <rect x="70" y="130" width="60" height="50" rx="20" fill="#2DD4BF" />
            <rect x="65" y="140" width="70" height="45" rx="4" fill="#FFF" stroke="#2DD4BF" strokeWidth="2" />
            <path d="M100 140 L100 185" stroke="#2DD4BF" strokeWidth="1" />
            <circle cx="65" cy="160" r="10" fill="#FFE0BD" />
            <circle cx="135" cy="160" r="10" fill="#FFE0BD" />
          </svg>
        </div>
        <div className="absolute right-[-30px] top-[-30px] text-9xl opacity-10 rotate-12 text-teal-200">📚</div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-black text-teal-900">Các môn học của bé</h2>
            <p className="text-teal-700 font-medium">Chọn một môn học để khám phá các chương nhé!</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBJECTS.map((subject) => {
            const colors = getSubjectColors(subject.id);
            return (
              <div 
                key={subject.id}
                onClick={() => navigate(`/subject/${subject.id}`)}
                className={`${colors.bg} ${colors.border} ${colors.shadow} rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all border-4 ${colors.hover} cursor-pointer group relative overflow-hidden text-center`}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">{subject.icon}</div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed min-h-[40px]">{subject.description}</p>
                <div className={`inline-block px-6 py-2 rounded-full font-black text-sm group-hover:bg-teal-500 group-hover:text-white transition-colors ${colors.badge}`}>
                  Xem chi tiết
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-teal-50 border-4 border-dashed border-teal-200 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left transition-transform hover:scale-[1.01]">
        <div className="text-6xl filter drop-shadow-md">💡</div>
        <div>
          <h3 className="text-2xl font-black text-teal-900 mb-2">Bí quyết học giỏi</h3>
          <p className="text-teal-800 text-lg">Mỗi ngày chinh phục một chương mới sẽ giúp bạn nhỏ đứng đầu lớp đấy! Cố gắng lên nào!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;