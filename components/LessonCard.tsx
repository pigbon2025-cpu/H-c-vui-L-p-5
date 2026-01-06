
import React from 'react';
import { Lesson } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  lesson: Lesson;
}

const LessonCard: React.FC<Props> = ({ lesson }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-teal-100/50 hover:shadow-2xl transition-all border-4 border-transparent hover:border-teal-300 cursor-pointer group relative overflow-hidden"
         onClick={() => navigate(`/quiz/${lesson.id}`)}>
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-6xl">{lesson.icon}</span>
      </div>
      <div className="text-5xl mb-6 group-hover:scale-125 transition-transform origin-left">{lesson.icon}</div>
      <div className="text-xs font-black text-teal-500 uppercase tracking-widest mb-2">{lesson.subject}</div>
      <h3 className="text-xl font-black text-gray-800 mb-3 group-hover:text-teal-700 transition-colors">{lesson.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">{lesson.description}</p>
      <div className="flex items-center text-teal-600 font-black text-sm group-hover:translate-x-2 transition-transform">
        Thử thách ngay <span className="ml-2">→</span>
      </div>
    </div>
  );
};

export default LessonCard;
