---
title: Flexbox Layout Toàn Tập | Khóa học HTML/CSS
description: Học cách sử dụng CSS Flexbox để tạo layout linh hoạt, responsive cho website hiện đại
---

# Flexbox Layout Toàn Tập

CSS Flexbox (Flexible Box Module) là một phương pháp layout một chiều mạnh mẽ được thiết kế để tạo ra các bố cục linh hoạt và có khả năng phản ứng trên các thiết bị và kích thước màn hình khác nhau.

## Tại sao nên sử dụng Flexbox?

-   **Đơn giản hóa việc căn chỉnh**: Dễ dàng căn giữa, căn trái, phải, trên, dưới
-   **Thứ tự linh hoạt**: Thay đổi thứ tự các phần tử không cần thay đổi HTML
-   **Phân phối không gian**: Phân chia không gian một cách thông minh
-   **Hỗ trợ tốt**: Được hỗ trợ trên hầu hết các trình duyệt hiện đại

## Khái niệm cơ bản của Flexbox

Flexbox hoạt động dựa trên mô hình parent-child:

-   **Flex container**: Phần tử cha được thiết lập `display: flex` hoặc `display: inline-flex`
-   **Flex items**: Các phần tử con trực tiếp của flex container

## Cách sử dụng Flexbox

### 1. Thiết lập Flex Container

```css
.container {
    display: flex; /* hoặc inline-flex */
}
```

### 2. Định hướng (Flex Direction)

Xác định trục chính (main axis) của container:

```css
.container {
    display: flex;
    flex-direction: row; /* mặc định: từ trái sang phải */
    /* Các giá trị khác:
    row-reverse: từ phải sang trái
    column: từ trên xuống dưới
    column-reverse: từ dưới lên trên
  */
}
```

### 3. Flex Wrap

Xác định cách các flex items sẽ xuống dòng khi không đủ không gian:

```css
.container {
    display: flex;
    flex-wrap: nowrap; /* mặc định: không xuống dòng */
    /* Các giá trị khác:
    wrap: xuống dòng, từ trên xuống dưới
    wrap-reverse: xuống dòng, từ dưới lên trên
  */
}
```

### 4. Justify Content

Căn chỉnh các flex items theo trục chính:

```css
.container {
    display: flex;
    justify-content: flex-start; /* mặc định: căn trái/đầu */
    /* Các giá trị khác:
    flex-end: căn phải/cuối
    center: căn giữa
    space-between: căn đều, items đầu và cuối sát mép
    space-around: căn đều, khoảng cách xung quanh mỗi item bằng nhau
    space-evenly: căn đều, khoảng cách giữa các items và mép container bằng nhau
  */
}
```

### 5. Align Items

Căn chỉnh các flex items theo trục chéo (cross axis):

```css
.container {
    display: flex;
    align-items: stretch; /* mặc định: kéo dài để lấp đầy container */
    /* Các giá trị khác:
    flex-start: căn trên/đầu
    flex-end: căn dưới/cuối
    center: căn giữa
    baseline: căn theo baseline của text
  */
}
```

### 6. Align Content

Căn chỉnh các dòng flex items khi có nhiều dòng:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch; /* mặc định: kéo dài để lấp đầy container */
    /* Các giá trị khác:
    flex-start: căn trên
    flex-end: căn dưới
    center: căn giữa
    space-between: căn đều, dòng đầu và cuối sát mép
    space-around: căn đều, khoảng cách xung quanh mỗi dòng bằng nhau
  */
}
```

## Thuộc tính cho Flex Items

### 1. Order

Thay đổi thứ tự hiển thị của flex items:

```css
.item {
    order: 0; /* mặc định: 0, có thể âm */
}
```

### 2. Flex Grow

Xác định khả năng mở rộng của item khi còn dư không gian:

```css
.item {
    flex-grow: 0; /* mặc định: 0, không mở rộng */
    /* Số càng lớn, tỷ lệ mở rộng càng nhiều */
}
```

### 3. Flex Shrink

Xác định khả năng co lại của item khi không đủ không gian:

```css
.item {
    flex-shrink: 1; /* mặc định: 1, co lại bình thường */
    /* 0: không co lại
     Số càng lớn, co lại càng nhiều
  */
}
```

### 4. Flex Basis

Xác định kích thước mặc định của item trước khi được phân phối không gian:

```css
.item {
    flex-basis: auto; /* mặc định: auto */
    /* Có thể dùng giá trị cụ thể: px, em, %, ... */
}
```

### 5. Flex Shorthand

Kết hợp flex-grow, flex-shrink, và flex-basis:

```css
.item {
    flex: 0 1 auto; /* mặc định: 0 1 auto */
    /* flex: grow shrink basis */

    /* Các giá trị khác thường dùng:
     flex: 1; (tương đương 1 1 0%)
     flex: auto; (tương đương 1 1 auto)
     flex: none; (tương đương 0 0 auto)
  */
}
```

### 6. Align Self

Ghi đè align-items cho item cụ thể:

```css
.item {
    align-self: auto; /* mặc định: auto (kế thừa từ align-items) */
    /* Các giá trị khác:
     flex-start, flex-end, center, stretch, baseline
  */
}
```

## Ví dụ thực tế

### 1. Navbar đơn giản với Flexbox

```html
<nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="menu">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Sản phẩm</a></li>
        <li><a href="#">Dịch vụ</a></li>
        <li><a href="#">Liên hệ</a></li>
    </ul>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
}

.menu {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
}
```

### 2. Card layout với Flexbox

```html
<div class="card-container">
    <div class="card">
        <img src="image1.jpg" alt="Card 1" />
        <div class="card-content">
            <h3>Tiêu đề 1</h3>
            <p>Mô tả ngắn về nội dung.</p>
        </div>
    </div>
    <!-- Thêm nhiều card khác -->
</div>
```

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    display: flex;
    flex-direction: column;
    flex: 1 1 300px; /* grow shrink basis */
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1rem;
    flex-grow: 1; /* Để content chiếm hết không gian còn lại */
}
```

### 3. Holy Grail Layout

```html
<div class="holy-grail">
    <header>Header</header>
    <div class="holy-grail-body">
        <nav class="holy-grail-nav">Nav</nav>
        <main class="holy-grail-main">Main</main>
        <aside class="holy-grail-aside">Aside</aside>
    </div>
    <footer>Footer</footer>
</div>
```

```css
.holy-grail {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header,
footer {
    padding: 1rem;
    background-color: #f8f9fa;
}

.holy-grail-body {
    display: flex;
    flex: 1;
}

.holy-grail-nav {
    flex: 0 0 200px;
    background-color: #e9ecef;
    padding: 1rem;
}

.holy-grail-main {
    flex: 1;
    padding: 1rem;
}

.holy-grail-aside {
    flex: 0 0 200px;
    background-color: #e9ecef;
    padding: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
    .holy-grail-body {
        flex-direction: column;
    }

    .holy-grail-nav,
    .holy-grail-aside {
        flex: 0 0 auto;
    }
}
```

## Các mẹo và thủ thuật

1. **Căn giữa hoàn toàn với Flexbox**:

    ```css
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Để container chiếm toàn màn hình */
    }
    ```

2. **Tạo khoảng cách đều giữa các items**:

    ```css
    .container {
        display: flex;
        gap: 1rem; /* CSS gap được hỗ trợ rộng rãi */
    }

    /* Hoặc cách truyền thống */
    .container {
        display: flex;
    }

    .container > * + * {
        margin-left: 1rem;
    }
    ```

3. **Thay đổi thứ tự hiển thị trên mobile**:

    ```css
    .container {
        display: flex;
    }

    .item1 {
        order: 1;
    }
    .item2 {
        order: 2;
    }

    @media (max-width: 768px) {
        .item1 {
            order: 2;
        }
        .item2 {
            order: 1;
        }
    }
    ```

## Bài tập thực hành

1. Tạo một navbar responsive sử dụng Flexbox
2. Xây dựng grid layout cho gallery hình ảnh với các item kích thước không đồng đều
3. Tạo form đăng nhập căn giữa màn hình với Flexbox
4. Xây dựng layout 3 cột có thể co giãn và chuyển đổi sang layout 1 cột trên mobile

## Các lỗi thường gặp và cách khắc phục

1. **Flex items không co lại khi có nội dung lớn**:

    ```css
    .item {
        min-width: 0; /* Đảm bảo items có thể co lại dưới kích thước nội dung */
    }
    ```

2. **Các items không xuống dòng khi màn hình nhỏ**:

    ```css
    .container {
        display: flex;
        flex-wrap: wrap; /* Cho phép items xuống dòng */
    }
    ```

3. **Căn giữa không hoạt động với flex-direction: column**:
    ```css
    .container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Căn giữa theo chiều ngang */
        justify-content: center; /* Căn giữa theo chiều dọc */
    }
    ```

## Bài học tiếp theo

Tiếp theo, hãy học cách sử dụng [CSS Grid Layout](/html-css/css-grid) để tạo các layout hai chiều phức tạp hơn.

## Tài liệu tham khảo

-   [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
-   [Flexbox Froggy - Game học Flexbox](https://flexboxfroggy.com/)
-   [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
