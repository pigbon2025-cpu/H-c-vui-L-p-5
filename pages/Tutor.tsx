
import React, { useState, useRef, useEffect } from 'react';
import { chatWithTutor } from '../services/gemini';
import { ChatMessage } from '../types';

const Tutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào bạn nhỏ! Mình là Gia sư Học Vui. Hôm nay chúng mình cùng khám phá điều gì mới nào? Bạn cứ hỏi, mình sẽ giải đáp tận tình!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await chatWithTutor(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Hic, mình đang bị "đứng máy" một chút. Bạn nhắc lại câu hỏi giúp mình nhé!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-180px)] flex flex-col bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-teal-500 p-6 text-white flex items-center gap-4">
        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner">🤖</div>
        <div>
          <h2 className="font-black text-xl">Gia sư Học Vui AI</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></span>
            <p className="text-xs text-teal-100 font-bold">Đang sẵn sàng trợ giúp</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-teal-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-3xl shadow-sm ${
              m.role === 'user' 
                ? 'bg-teal-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border-2 border-teal-100 rounded-tl-none font-medium'
            }`}>
              <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border-2 border-teal-100 p-5 rounded-3xl rounded-tl-none flex gap-2 items-center">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-teal-100 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Bạn muốn hỏi gì nào..."
          className="flex-grow border-2 border-teal-100 rounded-[1.5rem] px-6 py-4 outline-none focus:ring-4 focus:ring-teal-400/20 focus:border-teal-400 text-gray-700 font-bold transition-all"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-teal-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-teal-600 active:scale-90 disabled:opacity-50 shadow-lg shadow-teal-200 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Tutor;