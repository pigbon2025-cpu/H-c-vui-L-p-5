
import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import { Chapter } from '../types';

const SubjectDetailView: React.FC = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const subject = SUBJECTS.find(s => s.id === subjectId);

  // Nhóm các chương theo category
  const groupedChapters = useMemo(() => {
    if (!subject) return {};
    return subject.chapters.reduce((acc, chapter) => {
      const category = chapter.category || 'Chương trình học';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(chapter);
      return acc;
    }, {} as Record<string, Chapter[]>);
  }, [subject]);

  const categories = Object.keys(groupedChapters);

  if (!subject) {
    return <div className="text-center py-20 text-2xl font-black text-teal-800">Không tìm thấy môn học 😿</div>;
  }

  // Helper function to get color based on subject
  const getSubjectColor = (id: string) => {
    switch (id) {
      case 'math': return 'text-purple-600 bg-purple-50 border-purple-100 hover:border-purple-300 bg-purple-500';
      case 'vietnamese': return 'text-emerald-600 bg-emerald-50 border-emerald-100 hover:border-emerald-300 bg-emerald-500';
      case 'science': return 'text-cyan-600 bg-cyan-50 border-cyan-100 hover:border-cyan-300 bg-cyan-500';
      case 'english': return 'text-indigo-600 bg-indigo-50 border-indigo-100 hover:border-indigo-300 bg-indigo-500';
      case 'history_geo': return 'text-orange-600 bg-orange-50 border-orange-100 hover:border-orange-300 bg-orange-500';
      default: return 'text-teal-600 bg-teal-50 border-teal-100 hover:border-teal-300 bg-teal-500';
    }
  };

  const colorClasses = getSubjectColor(subject.id).split(' ');
  const textIconColor = colorClasses[0];
  const bgLight = colorClasses[1];
  const borderLight = colorClasses[2];
  const borderHover = colorClasses[3];
  const bgMain = colorClasses[4];

  // Nếu đã chọn một thư mục, hiển thị bài học trong thư mục đó
  if (selectedCategory) {
    const chapters = groupedChapters[selectedCategory];
    return (
      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[2rem] shadow-lg border-2 border-teal-50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="w-12 h-12 flex items-center justify-center bg-teal-50 text-teal-600 rounded-xl hover:bg-teal-100 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div>
              <h2 className="text-2xl font-black text-gray-800">{selectedCategory}</h2>
              <p className="text-teal-600 font-bold text-sm">Môn {subject.name} • {chapters.length} bài học</p>
            </div>
          </div>
          <div className="hidden md:block text-4xl">{subject.icon}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((chapter) => {
            const globalIndex = subject.chapters.findIndex(c => c.id === chapter.id);
            return (
              <div 
                key={chapter.id}
                onClick={() => navigate(`/quiz/${subject.id}/${chapter.id}`)}
                className="bg-white rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all border-2 border-teal-50 hover:border-teal-200 cursor-pointer group flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-all shrink-0 ${textIconColor} ${bgLight} ${borderLight} group-hover:text-white group-hover:${bgMain} border-2`}>
                  {globalIndex + 1}
                </div>
                <div className="min-w-0 flex-grow">
                  <h3 className="text-lg font-black text-gray-800 mb-1 group-hover:text-teal-700 transition-colors truncate">{chapter.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 font-medium">{chapter.description}</p>
                </div>
                <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity text-teal-400 font-bold text-xl">
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Mặc định hiển thị danh sách các thư mục (Categories)
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div className="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-white">
        <div className="text-6xl md:text-7xl shrink-0 drop-shadow-sm">{subject.icon}</div>
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800">{subject.name}</h1>
          <p className="text-teal-600 font-bold opacity-80">Chọn một thư mục để bắt đầu học nhé!</p>
        </div>
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div 
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="group cursor-pointer perspective"
          >
            <div className={`relative bg-white rounded-[2.5rem] p-8 shadow-lg border-b-8 border-teal-100/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center text-center overflow-hidden`}>
              {/* Folder Icon Styling */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 ${bgLight} rounded-3xl flex items-center justify-center text-5xl shadow-inner group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0`}>
                  📂
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                  {groupedChapters[category].length}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-gray-800 group-hover:text-teal-700 transition-colors px-2 leading-tight">
                {category}
              </h3>
              
              <div className="mt-6 flex items-center gap-2 text-teal-500 font-black text-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Mở thư mục <span>✨</span>
              </div>

              {/* Decorative circle */}
              <div className={`absolute -bottom-10 -right-10 w-24 h-24 ${bgLight} rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-teal-50/50 p-6 rounded-3xl border-2 border-dashed border-teal-100">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-teal-700 font-black hover:translate-x-[-4px] transition-transform bg-white px-6 py-3 rounded-2xl shadow-sm border-2 border-teal-100"
        >
          ← Quay lại trang chủ
        </button>
        <div className="text-teal-600 text-sm font-bold bg-teal-100/50 px-4 py-2 rounded-full">
          🌟 Có {categories.length} phần học đang chờ bạn khám phá
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailView;
