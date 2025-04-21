---
title: Cấu trúc HTML5 Hiện Đại | Khóa học HTML/CSS
description: Tìm hiểu cấu trúc HTML5 hiện đại và các thẻ ngữ nghĩa cho việc phát triển web
---

# Cấu trúc HTML5 Hiện Đại

HTML5 giới thiệu nhiều cải tiến so với các phiên bản trước, bao gồm các thẻ ngữ nghĩa (semantic tags) giúp cấu trúc trang web rõ ràng hơn, dễ đọc hơn cho cả con người và máy tìm kiếm.

## Cấu trúc cơ bản của một trang HTML5

```html
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mô tả trang web của bạn" />
        <title>Tiêu đề trang web</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <header>
            <!-- Phần đầu trang -->
        </header>

        <nav>
            <!-- Điều hướng chính -->
        </nav>

        <main>
            <!-- Nội dung chính -->
            <article>
                <section>
                    <!-- Phần nội dung -->
                </section>
            </article>

            <aside>
                <!-- Thông tin phụ -->
            </aside>
        </main>

        <footer>
            <!-- Phần chân trang -->
        </footer>

        <script src="script.js"></script>
    </body>
</html>
```

## Các thẻ ngữ nghĩa quan trọng trong HTML5

HTML5 giới thiệu nhiều thẻ ngữ nghĩa giúp mô tả rõ ràng nội dung và cấu trúc trang web:

### 1. `<header>`

Dùng để xác định phần đầu của trang web hoặc một phần nội dung. Thường chứa logo, tiêu đề, menu chính.

```html
<header>
    <h1>Tên Website</h1>
    <p>Slogan của website</p>
</header>
```

### 2. `<nav>`

Dùng để định nghĩa phần điều hướng chính của trang web.

```html
<nav>
    <ul>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/gioi-thieu">Giới thiệu</a></li>
        <li><a href="/dich-vu">Dịch vụ</a></li>
        <li><a href="/lien-he">Liên hệ</a></li>
    </ul>
</nav>
```

### 3. `<main>`

Xác định nội dung chính của trang web. Mỗi trang chỉ nên có một thẻ `<main>`.

```html
<main>
    <h2>Tiêu đề nội dung chính</h2>
    <p>Nội dung chính của trang web...</p>
</main>
```

### 4. `<article>`

Đại diện cho một nội dung độc lập, tự chứa, có thể phân phối hoặc tái sử dụng độc lập (như bài báo, bài đăng blog).

```html
<article>
    <h2>Tiêu đề bài viết</h2>
    <p>Nội dung bài viết...</p>
    <footer>
        <p>Đăng bởi: Tác giả - Ngày: 15/05/2023</p>
    </footer>
</article>
```

### 5. `<section>`

Đại diện cho một phần nội dung trong một tài liệu, thường có tiêu đề riêng.

```html
<section>
    <h2>Phần 1: Giới thiệu</h2>
    <p>Nội dung giới thiệu...</p>
</section>
```

### 6. `<aside>`

Đại diện cho nội dung liên quan đến nội dung xung quanh nhưng có thể tách riêng (như sidebar).

```html
<aside>
    <h3>Bài viết liên quan</h3>
    <ul>
        <li><a href="#">Bài viết 1</a></li>
        <li><a href="#">Bài viết 2</a></li>
    </ul>
</aside>
```

### 7. `<footer>`

Xác định phần chân của trang web hoặc một phần nội dung.

```html
<footer>
    <p>&copy; 2023 Tên Website. All rights reserved.</p>
    <nav>
        <a href="/chinh-sach">Chính sách</a>
        <a href="/dieu-khoan">Điều khoản</a>
    </nav>
</footer>
```

### 8. `<figure>` và `<figcaption>`

Dùng để đóng gói nội dung truyền thông như hình ảnh, biểu đồ với chú thích.

```html
<figure>
    <img src="anh.jpg" alt="Mô tả hình ảnh" />
    <figcaption>Chú thích cho hình ảnh</figcaption>
</figure>
```

## Khi nào nên sử dụng `<div>` và `<span>`?

Mặc dù HTML5 cung cấp nhiều thẻ ngữ nghĩa, `<div>` và `<span>` vẫn rất hữu ích:

-   Sử dụng `<div>` khi cần một container không ngữ nghĩa cho mục đích styling hoặc JavaScript
-   Sử dụng `<span>` khi cần áp dụng style hoặc JavaScript cho một phần văn bản nhỏ

```html
<div class="container">
    <p>Đây là một <span class="highlight">văn bản</span> mẫu.</p>
</div>
```

## Cấu trúc HTML tối ưu cho SEO

```html
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tiêu đề trang web tối ưu cho SEO</title>
        <meta name="description" content="Mô tả hấp dẫn khoảng 150-160 ký tự" />
        <meta name="keywords" content="từ khóa1, từ khóa2, từ khóa3" />
        <link rel="canonical" href="https://example.com/duong-dan-chinh-thuc" />

        <!-- Open Graph tags cho social media -->
        <meta property="og:title" content="Tiêu đề khi chia sẻ trên mạng xã hội" />
        <meta property="og:description" content="Mô tả khi chia sẻ trên mạng xã hội" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/duong-dan" />
    </head>
    <body>
        <header>
            <h1>Tiêu đề chính của trang (H1)</h1>
        </header>

        <main>
            <article>
                <h2>Tiêu đề phụ (H2)</h2>
                <section>
                    <h3>Tiêu đề phần (H3)</h3>
                    <p>Nội dung với <strong>từ khóa quan trọng</strong>...</p>
                </section>
            </article>
        </main>
    </body>
</html>
```

## Các lỗi thường gặp và cách tránh

1. **Lồng thẻ ngữ nghĩa không đúng cách**

    ```html
    <!-- SAI -->
    <header>
        <header>Nested header</header>
    </header>

    <!-- ĐÚNG -->
    <header>
        <div class="sub-header">Sub header content</div>
    </header>
    ```

2. **Sử dụng nhiều thẻ `<main>` trong một trang**

    ```html
    <!-- SAI -->
    <main>Nội dung 1</main>
    <main>Nội dung 2</main>

    <!-- ĐÚNG -->
    <main>
        <section>Nội dung 1</section>
        <section>Nội dung 2</section>
    </main>
    ```

3. **Bỏ qua thuộc tính alt cho hình ảnh**

    ```html
    <!-- SAI -->
    <img src="image.jpg" />

    <!-- ĐÚNG -->
    <img src="image.jpg" alt="Mô tả hình ảnh" />
    ```

## Công cụ kiểm tra HTML

Một số công cụ hữu ích để kiểm tra cấu trúc HTML của bạn:

1. [HTML Validator của W3C](https://validator.w3.org/)
2. [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)
3. [Wave (Web Accessibility Evaluation Tool)](https://wave.webaim.org/)

## Bài tập thực hành

1. Xây dựng một trang blog đơn giản sử dụng các thẻ ngữ nghĩa HTML5
2. Tạo một layout trang tin tức với các phần header, nav, main (có article và section), aside và footer
3. Chuyển đổi một trang HTML4 cũ (chủ yếu sử dụng div) sang HTML5 với các thẻ ngữ nghĩa

## Bài học tiếp theo

Tiếp theo, chúng ta sẽ tìm hiểu sâu hơn về [Semantic HTML và khi nào nên sử dụng](/html-css/semantic-html) để cải thiện tính ngữ nghĩa và accessibility cho trang web của bạn.

## Tài liệu tham khảo

-   [HTML5 Semantic Elements - W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
-   [HTML Living Standard - WHATWG](https://html.spec.whatwg.org/)
-   [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
