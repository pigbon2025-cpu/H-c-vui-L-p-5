
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [hasKey, setHasKey] = useState<boolean>(true);

  useEffect(() => {
    // Kiểm tra xem người dùng đã chọn API Key chưa
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const isSelected = await window.aistudio.hasSelectedApiKey();
        setHasKey(isSelected);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      // Sau khi gọi mở dialog, ta giả định người dùng sẽ thao tác thành công
      setHasKey(true);
    } else {
      alert("Tính năng quản lý API Key hiện không khả dụng trong trình duyệt này.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-teal-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 group-hover:scale-110 transition-transform overflow-hidden border-2 border-teal-200">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mt-1">
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
            <span className="text-xl font-bold text-gray-800">Học vui <span className="text-teal-500">lớp 5</span></span>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-6">
            <nav className="hidden md:flex gap-4">
              <Link to="/" className={`font-bold px-4 py-2 rounded-full transition-colors ${location.pathname === '/' ? 'bg-teal-100 text-teal-800' : 'text-gray-500 hover:text-teal-600'}`}>Trang chủ</Link>
              <Link to="/tutor" className={`font-bold px-4 py-2 rounded-full transition-colors ${location.pathname === '/tutor' ? 'bg-teal-100 text-teal-800' : 'text-gray-500 hover:text-teal-600'}`}>Gia sư AI</Link>
            </nav>

            {/* API Key Selector Button */}
            <button 
              onClick={handleSelectKey}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all border-2 ${hasKey ? 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100' : 'bg-red-50 text-red-600 border-red-200 animate-pulse hover:bg-red-100'}`}
              title="Cấu hình API Key cá nhân"
            >
              <span className="text-lg">🔑</span>
              <span className="hidden sm:inline">{hasKey ? 'Cấu hình API' : 'Thiếu API Key'}</span>
            </button>
          </div>
        </div>
      </header>

      {!hasKey && (
        <div className="bg-red-500 text-white text-center py-2 px-4 text-sm font-bold animate-in slide-in-from-top duration-500">
          ⚠️ Bạn chưa chọn API Key cá nhân. Hãy nhấn vào nút chìa khóa 🔑 phía trên để tiếp tục học nhé!
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline ml-2">Tìm hiểu thêm</a>
        </div>
      )}

      <main className="flex-grow max-w-5xl mx-auto w-full p-4">
        {children}
      </main>

      <footer className="bg-teal-100/50 py-8 text-center text-teal-800 text-sm border-t border-teal-200">
        <p className="font-bold">✨ Học tập thật vui - Tiến bộ mỗi ngày ✨</p>
        <p className="opacity-60 mt-2">© 2024 Học vui lớp 5 - Chăm chỉ là chìa khóa thành công</p>
      </footer>
    </div>
  );
};

export default Layout;
