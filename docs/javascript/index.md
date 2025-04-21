# Giới thiệu về JavaScript

## JavaScript là gì?

JavaScript là ngôn ngữ lập trình phổ biến nhất của web. Nó được tạo ra vào năm 1995 bởi Brendan Eich trong khi làm việc tại Netscape. JavaScript cho phép trang web của bạn trở nên tương tác, phản hồi người dùng, và cập nhật nội dung động.

## Lịch sử và phát triển

JavaScript được phát triển chỉ trong vòng 10 ngày bởi Brendan Eich tại Netscape, ban đầu với tên gọi "Mocha", sau đó đổi tên thành "LiveScript" và cuối cùng là "JavaScript". Dù có cái tên tương tự, nhưng JavaScript không liên quan đến ngôn ngữ Java.

Lịch sử phát triển của JavaScript:

-   **1995**: Phiên bản đầu tiên ra đời
-   **1997**: ECMAScript 1 được chuẩn hóa (ECMA-262)
-   **2009**: ECMAScript 5 (ES5) với nhiều cải tiến quan trọng
-   **2015**: ECMAScript 2015 (ES6) - cải tiến lớn nhất với class, arrow functions, promises...
-   **2016 đến nay**: ECMAScript cập nhật hàng năm với các tính năng mới

## Tại sao học JavaScript?

-   **Phổ biến**: Sử dụng trong hầu hết các trang web hiện đại
-   **Đa nền tảng**: Chạy trên trình duyệt, máy chủ (Node.js), và các ứng dụng di động
-   **Dễ bắt đầu**: Cú pháp đơn giản, không cần cài đặt phức tạp để bắt đầu
-   **Cộng đồng lớn**: Có nhiều tài nguyên, thư viện và frameworks
-   **Linh hoạt**: Có thể sử dụng cho cả front-end và back-end (full-stack)
-   **Thị trường việc làm rộng**: Rất nhiều cơ hội việc làm cho lập trình viên JavaScript

## Vai trò của JavaScript trong phát triển web

JavaScript là một trong ba công nghệ cốt lõi của web:

-   **HTML**: Tạo cấu trúc nội dung
-   **CSS**: Định dạng giao diện và kiểu dáng
-   **JavaScript**: Xử lý tương tác và động

### Các trường hợp sử dụng phổ biến

1. **Front-end web development**:

    - Tạo giao diện người dùng tương tác
    - Xác thực form và dữ liệu
    - Tạo hiệu ứng và animations
    - Single Page Applications (SPAs)

2. **Back-end development** (với Node.js):

    - Xây dựng server và API
    - Xử lý dữ liệu và database operations
    - Real-time applications (chat, games)

3. **Mobile development**:

    - React Native
    - Ionic
    - NativeScript

4. **Desktop applications**:
    - Electron.js

## Cấu trúc khóa học

Khóa học JavaScript của chúng tôi được chia thành 4 chương chính:

### Chapter 1: Giới thiệu JavaScript

-   Giới thiệu và lịch sử
-   Cài đặt môi trường phát triển

### Chapter 2: Nền tảng JavaScript

-   Biến, kiểu dữ liệu, toán tử
-   Câu lệnh điều kiện, vòng lặp
-   Hàm và Scope

### Chapter 3: JavaScript Nâng cao

-   Object và Array
-   Bất đồng bộ trong JavaScript
-   ES6+ Features

### Chapter 4: DOM & Browser APIs

-   DOM Manipulation
-   Events & Event Handling
-   Fetch API & AJAX

## Code Playground

Hãy thử viết đoạn code JavaScript đầu tiên của bạn:

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-polytuts?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Tiếp theo

Trong bài tiếp theo, chúng ta sẽ học cách cài đặt và thiết lập môi trường phát triển JavaScript hiệu quả.

<div class="progress-tracker">
<input type="checkbox" id="completed-intro" name="completed-intro">
<label for="completed-intro">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
// Lưu tiến trình học tập
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-intro');
  
  // Lấy trạng thái đã lưu (nếu có)
  if (localStorage.getItem('completed-intro') === 'true') {
    checkbox.checked = true;
  }
  
  // Lưu trạng thái khi thay đổi
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-intro', checkbox.checked);
    updateOverallProgress();
  });
  
  function updateOverallProgress() {
    // Lấy tất cả các bài học JavaScript hiện tại
    const jsLessons = [
      'completed-intro',
      'completed-setup',
      'completed-variables',
      'completed-loops',
      'completed-functions',
      'completed-objects-arrays'
    ];
    
    // Đếm số bài học đã hoàn thành
    const completedCount = jsLessons.filter(
      lesson => localStorage.getItem(lesson) === 'true'
    ).length;
    
    // Tính phần trăm hoàn thành
    const percentage = Math.round((completedCount / jsLessons.length) * 100);
    
    // Cập nhật thanh tiến trình trên trang chủ
    localStorage.setItem('overallProgress', percentage);
    
    const progressBar = document.querySelector('progress');
    if (progressBar) {
      progressBar.value = percentage;
      progressBar.nextElementSibling.textContent = `${percentage}% Hoàn thành`;
    }
  }
});
</script>
