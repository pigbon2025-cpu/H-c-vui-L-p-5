
import { Subject, SubjectDetail } from './types';

export const SUBJECTS: SubjectDetail[] = [
  {
    id: 'math',
    name: Subject.Math,
    icon: '🔢',
    color: 'purple',
    description: 'Chinh phục các con số và hình học thú vị theo chương trình mới.',
    chapters: [
      // Chủ đề 1
      { id: 'm1', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 1. Ôn tập số tự nhiên', description: 'Hệ thống lại kiến thức về số tự nhiên và cách đọc, viết.' },
      { id: 'm2', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 2. Ôn tập các phép tính với số tự nhiên', description: 'Củng cố phép cộng, trừ, nhân, chia số tự nhiên.' },
      { id: 'm3', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 3. Ôn tập phân số', description: 'Khái niệm, tính chất cơ bản và so sánh phân số.' },
      { id: 'm4', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 4. Phân số thập phân', description: 'Nhận biết và cách viết các phân số có mẫu là 10, 100, 1000...' },
      { id: 'm5', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 5. Ôn tập các phép tính với phân số', description: 'Cộng, trừ, nhân, chia các phân số đã học.' },
      { id: 'm6', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 6. Cộng, trừ hai phân số khác mẫu số', description: 'Quy đồng mẫu số và thực hiện phép tính.' },
      { id: 'm7', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 7. Hỗn số', description: 'Khái niệm hỗn số và cách chuyển đổi với phân số.' },
      { id: 'm8', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 8. Ôn tập hình học và đo lường', description: 'Điểm, đoạn thẳng, góc và các đơn vị đo cơ bản.' },
      { id: 'm9', category: 'Chủ đề 1: Ôn tập và bổ sung', title: 'Bài 9. Luyện tập chung', description: 'Tổng hợp kiến thức chương ôn tập và bổ sung.' },
      // Chủ đề 2
      { id: 'm10', category: 'Chủ đề 2: Số thập phân', title: 'Bài 10. Khái niệm số thập phân', description: 'Học cách đọc, viết và cấu tạo của số thập phân.' },
      { id: 'm11', category: 'Chủ đề 2: Số thập phân', title: 'Bài 11. So sánh các số thập phân', description: 'Quy tắc so sánh phần nguyên và phần thập phân.' },
      { id: 'm12', category: 'Chủ đề 2: Số thập phân', title: 'Bài 12. Viết số đo đại lượng dưới dạng số thập phân', description: 'Ứng dụng số thập phân vào đo lường độ dài, khối lượng.' },
      { id: 'm13', category: 'Chủ đề 2: Số thập phân', title: 'Bài 13. Làm tròn số thập phân', description: 'Các quy tắc làm tròn số thập phân đơn giản.' },
      { id: 'm14', category: 'Chủ đề 2: Số thập phân', title: 'Bài 14. Luyện tập chung', description: 'Củng cố kiến thức về số thập phân.' },
      // Chủ đề 3
      { id: 'm15', category: 'Chủ đề 3: Một số đơn vị đo diện tích', title: 'Bài 15. Ki-lô-mét vuông. Héc-ta', description: 'Các đơn vị đo diện tích diện tích lớn.' },
      { id: 'm16', category: 'Chủ đề 3: Một số đơn vị đo diện tích', title: 'Bài 16. Các đơn vị đo diện tích', description: 'Bảng đơn vị đo diện tích và cách chuyển đổi.' },
      { id: 'm17', category: 'Chủ đề 3: Một số đơn vị đo diện tích', title: 'Bài 17. Thực hành và trải nghiệm với đơn vị đo', description: 'Ứng dụng đo đạc thực tế diện tích.' },
      { id: 'm18', category: 'Chủ đề 3: Một số đơn vị đo diện tích', title: 'Bài 18. Luyện tập chung', description: 'Ôn tập về các đơn vị đo diện tích.' },
      // Chủ đề 4
      { id: 'm19', category: 'Chủ đề 4: Các phép tính với số thập phân', title: 'Bài 19. Phép cộng số thập phân', description: 'Cách đặt tính và tính tổng các số thập phân.' },
      { id: 'm20', category: 'Chủ đề 4: Các phép tính với số thập phân', title: 'Bài 20. Phép trừ số thập phân', description: 'Thực hiện phép trừ số thập phân chính xác.' },
      { id: 'm21', category: 'Chủ đề 4: Các phép tính với số thập phân', title: 'Bài 21. Phép nhân số thập phân', description: 'Nhân số thập phân với số tự nhiên và số thập phân.' },
      { id: 'm22', category: 'Chủ đề 4: Các phép tính với số thập phân', title: 'Bài 22. Phép chia số thập phân', description: 'Chia số thập phân cho số tự nhiên và số thập phân.' },
      { id: 'm23', category: 'Chủ đề 4: Các phép tính with số thập phân', title: 'Bài 23. Nhân, chia nhẩm với 10, 100, 0.1, 0.01...', description: 'Mẹo tính nhanh bằng cách dịch chuyển dấu phẩy.' },
      { id: 'm24', category: 'Chủ đề 4: Các phép tính với số thập phân', title: 'Bài 24. Luyện tập chung', description: 'Ôn tập 4 phép tính với số thập phân.' },
      // Chủ đề 5
      { id: 'm25', category: 'Chủ đề 5: Hình phẳng, chu vi và diện tích', title: 'Bài 25. Hình tam giác. Diện tích hình tam giác', description: 'Cấu tạo tam giác và công thức tính diện tích.' },
      { id: 'm26', category: 'Chủ đề 5: Hình phẳng, chu vi và diện tích', title: 'Bài 26. Hình thang. Diện tích hình thang', description: 'Đặc điểm hình thang và cách tính diện tích.' },
      { id: 'm27', category: 'Chủ đề 5: Hình phẳng, chu vi và diện tích', title: 'Bài 27. Đường tròn. Chu vi và diện tích hình tròn', description: 'Khái niệm tâm, bán kính, đường kính và công thức tính.' },
      { id: 'm28', category: 'Chủ đề 5: Hình phẳng, chu vi và diện tích', title: 'Bài 28. Thực hành đo, vẽ, lắp ghép, tạo hình', description: 'Sử dụng dụng cụ học tập để tạo hình học.' },
      { id: 'm29', category: 'Chủ đề 5: Hình phẳng, chu vi và diện tích', title: 'Bài 29. Luyện tập chung', description: 'Ôn tập về hình phẳng, chu vi và diện tích.' },
      // Chủ đề 6
      { id: 'm30', category: 'Chủ đề 6: Ôn tập học kì 1', title: 'Bài 30. Ôn tập số thập phân', description: 'Ôn tập tổng hợp về số thập phân học kì 1.' },
      { id: 'm31', category: 'Chủ đề 6: Ôn tập học kì 1', title: 'Bài 31. Ôn tập các phép tính với số thập phân', description: 'Luyện tập tính toán hỗn hợp số thập phân.' },
      { id: 'm32', category: 'Chủ đề 6: Ôn tập học kì 1', title: 'Bài 32. Ôn tập một số hình phẳng', description: 'Củng cố nhận diện các hình đã học.' },
      { id: 'm33', category: 'Chủ đề 6: Ôn tập học kì 1', title: 'Bài 33. Ôn tập diện tích, chu vi một số hình phẳng', description: 'Giải toán có lời văn về diện tích, chu vi.' },
      { id: 'm34', category: 'Chủ đề 6: Ôn tập học kì 1', title: 'Bài 34. Ôn tập đo lường', description: 'Ôn tập đơn vị đo độ dài, khối lượng, diện tích.' },
      { id: 'm35', category: 'Chủ đề 6: Ôn tập học kì 1', title: 'Bài 35. Ôn tập chung', description: 'Tổng ôn tập để chuẩn bị cho kỳ thi học kì 1.' }
    ]
  },
  {
    id: 'vietnamese',
    name: Subject.Vietnamese,
    icon: '📖',
    color: 'emerald',
    description: 'Chinh phục tiếng mẹ đẻ qua các bài học bổ ích.',
    chapters: [
      // Thư mục Luyện từ và câu
      { id: 'v1', category: 'Luyện từ và câu', title: 'Bài 1. Luyện tập về danh từ, động từ, tính từ', description: 'Ôn tập và mở rộng kiến thức về các loại từ cơ bản.' },
      { id: 'v3', category: 'Luyện từ và câu', title: 'Bài 3. Đại từ', description: 'Tìm hiểu về từ dùng để xưng hô hoặc thay thế.' },
      { id: 'v5', category: 'Luyện từ và câu', title: 'Bài 5. Luyện tập về đại từ', description: 'Thực hành sử dụng đại từ trong câu và văn bản.' },
      { id: 'v7', category: 'Luyện từ và câu', title: 'Bài 7. Luyện tập về đại từ (tiếp theo)', description: 'Củng cố kỹ năng sử dụng đại từ nâng cao.' },
      { id: 'v9', category: 'Luyện từ và câu', title: 'Bài 9. Từ đồng nghĩa', description: 'Nhận biết và sử dụng các từ có nghĩa giống hoặc gần giống nhau.' },
      { id: 'v11', category: 'Luyện từ và câu', title: 'Bài 11. Luyện tập về từ đồng nghĩa', description: 'Phân biệt sắc thái nghĩa và chọn từ phù hợp.' },
      { id: 'v13', category: 'Luyện từ và câu', title: 'Bài 13. Từ đa nghĩa', description: 'Khám phá từ có một nghĩa gốc và một hay một số nghĩa chuyển.' },
      { id: 'v15', category: 'Luyện từ và câu', title: 'Bài 15. Luyện tập về từ đa nghĩa', description: 'Thực hành xác định nghĩa gốc và nghĩa chuyển của từ.' },
      { id: 'v17', category: 'Luyện từ và câu', title: 'Bài 17. Sử dụng từ điển', description: 'Kỹ năng tra cứu và khai thác thông tin từ từ điển.' },
      { id: 'v19', category: 'Luyện từ và câu', title: 'Bài 19. Luyện tập sử dụng từ điển', description: 'Rèn luyện kỹ năng tra từ nhanh và chính xác.' },
      { id: 'v21', category: 'Luyện từ và câu', title: 'Bài 21. Dấu gạch ngang', description: 'Các công dụng của dấu gạch ngang trong văn bản.' },
      { id: 'v23', category: 'Luyện từ và câu', title: 'Bài 23. Luyện tập về dấu gạch ngang', description: 'Thực hành đặt câu và sử dụng dấu gạch ngang đúng cách.' },
      
      // Thư mục Tập làm văn
      { id: 'v_tlv1', category: 'Tập làm văn', title: 'Văn tả cảnh', description: 'Cách quan sát và lựa chọn hình ảnh tiêu biểu để tả cảnh.' },
      { id: 'v_tlv2', category: 'Tập làm văn', title: 'Văn tả người', description: 'Luyện tập tả ngoại hình và hoạt động của nhân vật.' },
      
      // Thư mục Chính tả và Đọc hiểu
      { id: 'v_ct1', category: 'Chính tả & Đọc hiểu', title: 'Quy tắc viết hoa', description: 'Ôn tập cách viết hoa tên người, tên địa lý Việt Nam và nước ngoài.' },
      { id: 'v_ct2', category: 'Chính tả & Đọc hiểu', title: 'Kỹ năng đọc hiểu văn bản', description: 'Cách xác định nội dung chính và trả lời câu hỏi tìm hiểu bài.' }
    ]
  },
  {
    id: 'science',
    name: Subject.Science,
    icon: '🧪',
    color: 'cyan',
    description: 'Khám phá bí ẩn của thế giới tự nhiên.',
    chapters: [
      { id: 's1', title: 'Sự biến đổi của chất', description: 'Hỗn hợp, dung dịch và sự biến đổi hóa học.' },
      { id: 's2', title: 'Năng lượng', description: 'Sử dụng năng lượng mặt trời, gió và điện.' },
      { id: 's3', title: 'Môi trường & Tài nguyên', description: 'Bảo vệ môi trường và tài nguyên thiên nhiên.' }
    ]
  },
  {
    id: 'english',
    name: Subject.English,
    icon: '🌍',
    color: 'indigo',
    description: 'Tự tin giao tiếp tiếng Anh với bạn bè quốc tế.',
    chapters: [
      { id: 'e1', title: 'Daily Activities', description: 'Talk about your daily routine and frequency.' },
      { id: 'e2', title: 'My Future Job', description: 'Learn about different occupations and dreams.' },
      { id: 'e3', title: 'Free Time Fun', description: 'Hobbies, sports and weekend activities.' }
    ]
  },
  {
    id: 'history_geo',
    name: Subject.HistoryGeo,
    icon: '🗺️',
    color: 'orange',
    description: 'Ngược dòng thời gian và khám phá các vùng đất mới.',
    chapters: [
      { id: 'hg1', title: 'Lịch sử Việt Nam (1858 - 1945)', description: 'Tìm hiểu về các cuộc khởi nghĩa và phong trào yêu nước chống thực dân Pháp.' },
      { id: 'hg2', title: 'Địa lý Việt Nam', description: 'Khám phá địa hình, khí hậu, sông ngòi và các vùng kinh tế nước ta.' },
      { id: 'hg3', title: 'Các châu lục trên thế giới', description: 'Hành trình khám phá đặc điểm tự nhiên và dân cư của các châu lục.' }
    ]
  }
];
