
export enum Subject {
  Math = 'Toán học',
  Vietnamese = 'Tiếng Việt',
  Science = 'Khoa học',
  English = 'Tiếng Anh',
  HistoryGeo = 'Lịch sử & Địa lý'
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizData {
  title: string;
  questions: Question[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  category?: string; // Thuộc tính mới để phân loại "thư mục"
}

export interface SubjectDetail {
  id: string;
  name: Subject;
  icon: string;
  color: string;
  description: string;
  chapters: Chapter[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  subject: string;
}
