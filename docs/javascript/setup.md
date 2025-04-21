# Cài đặt môi trường

Để bắt đầu lập trình JavaScript, bạn cần chuẩn bị một số công cụ cơ bản. Phần này sẽ hướng dẫn bạn cài đặt và thiết lập môi trường phát triển JavaScript.

## Trình duyệt web

JavaScript chạy trên tất cả các trình duyệt web hiện đại. Tuy nhiên, để phát triển hiệu quả, bạn nên sử dụng một trong các trình duyệt sau với công cụ dành cho nhà phát triển (Developer Tools):

-   [Google Chrome](https://www.google.com/chrome/)
-   [Mozilla Firefox](https://www.mozilla.org/firefox/)
-   [Microsoft Edge](https://www.microsoft.com/edge)

### Sử dụng Developer Tools

1. Mở trình duyệt
2. Nhấn F12 hoặc chuột phải vào trang web và chọn "Inspect" (Kiểm tra)
3. Chuyển đến tab "Console" để chạy code JavaScript trực tiếp

## Code Editor

Bạn cần một trình soạn thảo code để viết và chỉnh sửa file JavaScript. Một số lựa chọn phổ biến:

### Visual Studio Code (Khuyến nghị)

[Visual Studio Code](https://code.visualstudio.com/) là một trình soạn thảo code miễn phí, mã nguồn mở với nhiều tính năng hữu ích cho JavaScript.

#### Cài đặt Visual Studio Code

1. Tải và cài đặt VS Code từ [trang chủ](https://code.visualstudio.com/)
2. Cài đặt các extension hỗ trợ JavaScript:
    - ESLint: Phát hiện và sửa lỗi code
    - Prettier: Định dạng code tự động
    - JavaScript (ES6) code snippets: Mẫu code nhanh

### Các trình soạn thảo khác

-   [Sublime Text](https://www.sublimetext.com/)
-   [Atom](https://atom.io/)
-   [WebStorm](https://www.jetbrains.com/webstorm/) (Có phí)

## Node.js (Tùy chọn)

Nếu bạn muốn chạy JavaScript bên ngoài trình duyệt hoặc phát triển ứng dụng server-side, bạn cần cài đặt Node.js:

1. Tải và cài đặt Node.js từ [trang chủ](https://nodejs.org/)
2. Kiểm tra cài đặt bằng cách mở terminal/command prompt và gõ:
    ```bash
    node -v
    npm -v
    ```

## Tạo dự án JavaScript đầu tiên

1. Tạo một thư mục mới cho dự án của bạn
2. Trong thư mục đó, tạo file `index.html` với nội dung sau:

```html
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dự án JavaScript đầu tiên</title>
    </head>
    <body>
        <h1>Xin chào JavaScript!</h1>

        <!-- Liên kết file JavaScript -->
        <script src="script.js"></script>
    </body>
</html>
```

3. Tạo file `script.js` trong cùng thư mục:

```javascript
// File JavaScript đầu tiên
console.log("Xin chào từ JavaScript!");

// Hiển thị thông báo khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
    alert("Trang web đã được tải hoàn tất!");
});
```

4. Mở file `index.html` trong trình duyệt và kiểm tra console để xem kết quả

## Code Playground

Bạn cũng có thể sử dụng các nền tảng code trực tuyến để thực hành mà không cần cài đặt bất cứ thứ gì:

-   [CodePen](https://codepen.io/)
-   [JSFiddle](https://jsfiddle.net/)
-   [CodeSandbox](https://codesandbox.io/)

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-setup?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Tiếp theo

Sau khi đã thiết lập môi trường, bạn đã sẵn sàng để học về biến, kiểu dữ liệu và các toán tử trong JavaScript.

<div class="progress-tracker">
<input type="checkbox" id="completed-setup" name="completed-setup">
<label for="completed-setup">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-setup');
  
  if (localStorage.getItem('completed-setup') === 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-setup', checkbox.checked);
    updateOverallProgress();
  });
  
  function updateOverallProgress() {
    // Lấy tất cả các bài học JavaScript
    const jsLessons = [
      'completed-intro',
      'completed-setup',
      'completed-variables',
      'completed-loops',
      'completed-functions'
    ];
    
    // Đếm số bài học đã hoàn thành
    const completedCount = jsLessons.filter(
      lesson => localStorage.getItem(lesson) === 'true'
    ).length;
    
    // Tính phần trăm hoàn thành
    const percentage = Math.round((completedCount / jsLessons.length) * 100);
    
    // Lưu và cập nhật UI (nếu đang ở trang chủ)
    localStorage.setItem('overallProgress', percentage);
    
    const progressBar = document.querySelector('progress');
    if (progressBar) {
      progressBar.value = percentage;
      progressBar.nextElementSibling.textContent = `${percentage}% Hoàn thành`;
    }
  }
});
</script>
