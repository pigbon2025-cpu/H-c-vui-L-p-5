
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import { generateQuiz } from '../services/gemini';
import { QuizData } from '../types';

const Quiz: React.FC = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!subject || !chapter) return;
      try {
        setIsLoading(true);
        const data = await generateQuiz(subject.name, chapter.title);
        setQuizData(data);
      } catch (err) {
        setError('Hic, Gia sư đang bận một chút. Bạn quay lại sau nhé!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [subject, chapter]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-8">
        <div className="relative">
          <div className="w-24 h-24 border-8 border-teal-100 border-t-teal-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-3xl">📝</div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-black text-teal-800 mb-2">Gia sư đang soạn câu hỏi...</h2>
          <p className="text-teal-600 font-bold">Chuẩn bị cho bài: {chapter?.title}</p>
        </div>
      </div>
    );
  }

  if (error || !quizData) {
    return (
      <div className="bg-red-50 p-12 rounded-[2.5rem] border-4 border-red-100 text-center animate-in zoom-in">
        <div className="text-7xl mb-6">🙀</div>
        <h2 className="text-2xl font-black text-red-800 mb-4">{error}</h2>
        <button onClick={() => navigate(`/subject/${subjectId}`)} className="bg-red-500 text-white px-8 py-3 rounded-2xl font-black hover:bg-red-600 transition-colors">Quay lại</button>
      </div>
    );
  }

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = index;
    setAnswers(newAnswers);

    if (currentStep < quizData.questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 400);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const score = answers.reduce((acc, ans, idx) => {
      return ans === quizData.questions[idx].correctAnswer ? acc + 1 : acc;
    }, 0);
    const isGreat = score === quizData.questions.length;

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-500 border-8 border-teal-50">
        <div className={`${isGreat ? 'bg-teal-500' : 'bg-emerald-500'} p-12 text-white text-center relative`}>
          <div className="text-7xl mb-6">{isGreat ? '🏆' : '⭐'}</div>
          <h2 className="text-4xl font-black mb-2">{isGreat ? 'Thật Tuyệt Vời!' : 'Làm Tốt Lắm!'}</h2>
          <p className="text-teal-50 text-xl font-bold">Hoàn thành: {chapter?.title}</p>
        </div>
        <div className="p-10">
          <div className="flex justify-center mb-10">
            <div className="bg-teal-50 px-10 py-6 rounded-3xl text-center border-4 border-teal-100">
              <div className="text-6xl font-black text-teal-600 mb-1">{score} / {quizData.questions.length}</div>
              <div className="text-teal-700 font-black">Điểm số của bạn</div>
            </div>
          </div>
          
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-xl font-black text-teal-800 border-b-4 border-teal-50 pb-2">Xem lại bài làm:</h3>
            {quizData.questions.map((q, i) => (
              <div key={i} className={`p-6 rounded-[2rem] border-2 ${answers[i] === q.correctAnswer ? 'bg-emerald-50 border-emerald-100' : 'bg-orange-50 border-orange-100'}`}>
                <p className="font-black text-gray-800 mb-3">{i + 1}. {q.question}</p>
                <div className="flex flex-col gap-2 text-sm md:text-base">
                  <div className="flex items-center gap-2 font-bold">
                    <span>Lựa chọn:</span>
                    <span className={answers[i] === q.correctAnswer ? 'text-emerald-600' : 'text-orange-600'}>
                      {q.options[answers[i]]} {answers[i] === q.correctAnswer ? '✅' : '❌'}
                    </span>
                  </div>
                  {answers[i] !== q.correctAnswer && (
                    <div className="flex items-center gap-2 font-bold text-emerald-700">
                      <span>Đáp án đúng:</span>
                      <span>{q.options[q.correctAnswer]}</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 p-4 bg-white/60 rounded-2xl text-sm italic text-gray-600 border border-white">
                  📚 <span className="font-bold">Giải thích:</span> {q.explanation}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => window.location.reload()}
              className="flex-1 bg-teal-500 text-white py-4 rounded-2xl font-black hover:bg-teal-600 shadow-xl shadow-teal-200 transition-all active:scale-95"
            >
              Làm lại bài này
            </button>
            <button 
              onClick={() => navigate(`/subject/${subjectId}`)}
              className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-2xl font-black hover:bg-gray-200 transition-all active:scale-95"
            >
              Chọn chương khác
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center gap-4">
        <button 
          onClick={() => navigate(`/subject/${subjectId}`)}
          className="bg-white p-3 rounded-2xl shadow-sm border-2 border-teal-100 text-teal-600 hover:bg-teal-50 transition-all active:scale-90"
          title="Thoát bài tập"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <div className="flex-grow flex justify-between items-center bg-white p-4 px-6 rounded-[1.5rem] shadow-md border-2 border-teal-100">
          <div className="font-black text-teal-800 flex items-center gap-2 truncate">
            <span className="text-2xl">{subject?.icon}</span>
            <span className="truncate">{chapter?.title}</span>
          </div>
          <div className="bg-teal-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-black shadow-lg shadow-teal-100 whitespace-nowrap ml-2">
            Câu {currentStep + 1} / {quizData.questions.length}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl border-4 border-white relative overflow-hidden transition-all">
        <div className="absolute top-0 left-0 h-2 bg-teal-50 w-full">
          <div 
            className="h-full bg-teal-500 transition-all duration-700 ease-out" 
            style={{ width: `${((currentStep + 1) / quizData.questions.length) * 100}%` }}
          ></div>
        </div>

        <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-8 md:mb-10 leading-tight">
          {currentQuestion.question}
        </h3>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-full text-left p-4 md:p-5 rounded-2xl border-2 border-teal-50 hover:border-teal-400 hover:bg-teal-50 transition-all group flex items-center gap-5 shadow-sm hover:shadow-md active:scale-95"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 border-2 border-teal-100 flex items-center justify-center font-black text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="text-base md:text-lg font-bold text-gray-700 group-hover:text-teal-900">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 text-teal-400 font-black animate-pulse">
        <span className="text-2xl">🐢</span>
        <span className="text-sm">Hãy suy nghĩ thật kỹ nhé, đừng vội vàng!</span>
        <span className="text-2xl">🐰</span>
      </div>
    </div>
  );
};

export default Quiz;
