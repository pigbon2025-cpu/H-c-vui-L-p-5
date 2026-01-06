
import { GoogleGenAI, Type } from "@google/genai";
import { Subject, QuizData } from "../types";

export const generateQuiz = async (subject: Subject, topic: string): Promise<QuizData> => {
  // Khởi tạo instance mới ngay trước khi gọi để đảm bảo lấy đúng API Key hiện tại
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Hãy tạo một bộ câu hỏi trắc nghiệm gồm ĐÚNG 20 câu hỏi cho học sinh lớp 5 về môn ${subject}, chủ đề: ${topic}. 
    Yêu cầu:
    1. Câu hỏi phải bám sát chương trình học lớp 5.
    2. Độ khó phân hóa (Dễ, Trung bình, Khó).
    3. Ngôn ngữ vui nhộn, gần gũi với trẻ em.
    4. Giải thích đáp án rõ ràng, dễ hiểu.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                correctAnswer: { type: Type.INTEGER, description: "Index of the correct option (0-3)" },
                explanation: { type: Type.STRING }
              },
              required: ["question", "options", "correctAnswer", "explanation"]
            }
          }
        },
        required: ["title", "questions"]
      }
    }
  });

  const text = response.text;
  return JSON.parse(text?.trim() || '{}');
};

export const chatWithTutor = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: history,
    config: {
      systemInstruction: "Bạn là 'Gia sư Học Vui' - một giáo viên tiểu học vui vẻ, kiên nhẫn và thông thái dành cho học sinh lớp 5 tại Việt Nam. Hãy giải thích mọi thứ đơn giản, dùng ví dụ thực tế và luôn khuyến khích học sinh. Nếu học sinh hỏi bài tập, hãy gợi ý cách làm thay vì cho ngay đáp án.",
    }
  });

  const result = await chat.sendMessage({ message: message });
  return result.text || '';
};
