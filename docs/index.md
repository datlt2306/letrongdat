---
layout: home

hero:
    name: Polytuts
    text: Học lập trình từ cơ bản đến nâng cao
    tagline: Nền tảng học tập tương tác cho các nhà phát triển web
    actions:
        - theme: brand
          text: Bắt đầu ngay
          link: /javascript/
        - theme: alt
          text: Xem GitHub
          link: https://github.com/yourusername/polytuts-4

features:
    - icon: 🚀
      title: JavaScript
      details: Nền tảng cơ bản cho mọi nhà phát triển web
      link: /javascript/
    - icon: ⚛️
      title: React
      details: Thư viện UI phổ biến nhất cho ứng dụng web hiện đại
      link: /react/
    - icon: 📡
      title: Node.js
      details: Phát triển ứng dụng phía máy chủ với JavaScript
      link: /nodejs/
    - icon: 🗄️
      title: MongoDB
      details: Cơ sở dữ liệu NoSQL cho ứng dụng của bạn
      link: /mongodb/
---

<div class="chapter-overview">

## Cấu trúc khóa học theo chương

Mỗi khóa học được tổ chức thành các chương (chapters) với các bài học chi tiết và bài tập thực hành.

### JavaScript

-   **Chapter 1**: Giới thiệu JavaScript
-   **Chapter 2**: Nền tảng JavaScript
-   **Chapter 3**: JavaScript Nâng cao
-   **Chapter 4**: DOM & Browser APIs

### React

-   **Chapter 1**: React Fundamentals
-   **Chapter 2**: React State & Props

### Node.js

-   **Chapter 1**: Node.js Basics
-   **Chapter 2**: Building APIs with Node.js

### MongoDB

-   **Chapter 1**: MongoDB Basics
-   **Chapter 2**: Advanced MongoDB

</div>

<div class="learning-progress">

## Tiến trình học tập

Theo dõi quá trình học tập của bạn với hệ thống đánh dấu tiến trình.

<progress value="0" max="100"></progress>

0% Hoàn thành

</div>

<div class="how-to-use">

## Cách sử dụng nền tảng này

1. **Chọn khóa học**: Bắt đầu với JavaScript nếu bạn là người mới
2. **Học theo chương**: Mỗi chương xây dựng trên kiến thức từ chương trước
3. **Làm bài tập**: Hoàn thành các bài tập thực hành để củng cố kiến thức
4. **Đánh dấu tiến trình**: Đánh dấu các bài học đã hoàn thành để dễ dàng theo dõi
5. **Thực hành**: Sử dụng Code Playground để thử nghiệm code trực tiếp

</div>

<div class="learning-path">

## Lộ trình học tập đề xuất

Chúng tôi đề xuất bạn nên học theo thứ tự sau để có kiến thức vững chắc:

1. **JavaScript cơ bản** - Hiểu về biến, hàm, điều kiện, vòng lặp
2. **JavaScript nâng cao** - Object, Array, Bất đồng bộ, ES6+
3. **DOM & Browser APIs** - Tương tác với giao diện web
4. **React** - Xây dựng giao diện người dùng hiện đại
5. **Node.js** - Phát triển server-side với JavaScript
6. **MongoDB** - Lưu trữ và quản lý dữ liệu

Bạn cũng có thể tùy chỉnh lộ trình học tập dựa trên nhu cầu cá nhân.

</div>

<div class="references">

## Tài liệu tham khảo

-   [Mozilla Developer Network (MDN)](https://developer.mozilla.org)
-   [JavaScript.info](https://javascript.info)
-   [React Documentation](https://reactjs.org/docs)
-   [Node.js Documentation](https://nodejs.org/en/docs/)
-   [MongoDB Documentation](https://docs.mongodb.com/)

</div>

<style>
.chapter-overview, .learning-progress, .how-to-use, .learning-path, .references {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.chapter-overview {
  background-color: var(--vp-c-bg-mute);
}

progress {
  width: 100%;
  height: 20px;
  border-radius: 10px;
}

.lesson-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.lesson-checkbox {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
  color: var(--vp-c-green);
}
</style>

<script>
// Khởi tạo/cập nhật thanh tiến trình
document.addEventListener('DOMContentLoaded', () => {
  // Chuyển đổi danh sách bài học thành checkbox có thể đánh dấu
  const lessonLists = document.querySelectorAll('.chapter-overview ul');
  let totalLessons = 0;
  
  lessonLists.forEach(list => {
    const lessons = list.querySelectorAll('li');
    totalLessons += lessons.length;
    
    lessons.forEach((lesson, index) => {
      const lessonKey = `lesson-${lesson.textContent.trim().replace(/\s+/g, '-').toLowerCase()}`;
      const isCompleted = localStorage.getItem(lessonKey) === 'true';
      
      const lessonItem = document.createElement('div');
      lessonItem.className = 'lesson-item';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'lesson-checkbox';
      checkbox.checked = isCompleted;
      checkbox.dataset.key = lessonKey;
      
      const lessonText = document.createElement('span');
      lessonText.textContent = lesson.textContent;
      if (isCompleted) {
        lessonText.className = 'completed';
      }
      
      lessonItem.appendChild(checkbox);
      lessonItem.appendChild(lessonText);
      
      lesson.innerHTML = '';
      lesson.appendChild(lessonItem);
    });
  });
  
  // Xử lý sự kiện check/uncheck
  document.addEventListener('change', (event) => {
    if (event.target.classList.contains('lesson-checkbox')) {
      const key = event.target.dataset.key;
      const completed = event.target.checked;
      const lessonText = event.target.nextElementSibling;
      
      localStorage.setItem(key, completed);
      
      if (completed) {
        lessonText.classList.add('completed');
      } else {
        lessonText.classList.remove('completed');
      }
      
      // Cập nhật tiến trình
      updateProgress(totalLessons);
    }
  });
  
  // Cập nhật tiến trình ban đầu
  updateProgress(totalLessons);
});

// Hàm cập nhật tiến trình
function updateProgress(totalLessons) {
  const completedLessons = document.querySelectorAll('.lesson-checkbox:checked').length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  
  const progressBar = document.querySelector('progress');
  const progressText = progressBar.nextElementSibling;
  
  progressBar.value = progressPercent;
  progressText.textContent = `${progressPercent}% Hoàn thành`;
  
  // Lưu tiến trình tổng thể
  localStorage.setItem('overallProgress', progressPercent);
}
</script>
