# Biến, kiểu dữ liệu, toán tử

## Biến trong JavaScript

Biến là các "container" để lưu trữ dữ liệu. Trong JavaScript, bạn có thể khai báo biến bằng ba cách:

-   `var`: Cách khai báo truyền thống (phạm vi function)
-   `let`: Khai báo biến có thể thay đổi giá trị (phạm vi block)
-   `const`: Khai báo hằng số không thể gán lại (phạm vi block)

### Cú pháp

```javascript
// Sử dụng let cho biến có thể thay đổi
let age = 25;
age = 26; // Có thể thay đổi giá trị

// Sử dụng const cho hằng số
const PI = 3.14159;
// PI = 3.14; // Lỗi: không thể gán lại giá trị cho const

// Sử dụng var (cách cũ)
var name = "John";
```

## Kiểu dữ liệu

JavaScript có các kiểu dữ liệu cơ bản sau:

1. **Primitive Types** (Kiểu nguyên thủy):

    - **Number**: Số nguyên và số thực (1, 2.5, -10)
    - **String**: Chuỗi ký tự ("Hello", 'World')
    - **Boolean**: true hoặc false
    - **null**: Biểu thị giá trị "không có gì"
    - **undefined**: Biến đã được khai báo nhưng chưa gán giá trị
    - **Symbol**: Loại dữ liệu mới trong ES6, tạo ra giá trị duy nhất

2. **Reference Types** (Kiểu tham chiếu):
    - **Object**: Tập hợp các cặp key-value
    - **Array**: Danh sách có thứ tự các giá trị
    - **Function**: Đoạn code có thể tái sử dụng
    - **Date**: Đối tượng ngày tháng

### Ví dụ các kiểu dữ liệu

```javascript
// Kiểu nguyên thủy
let num = 42; // Number
let text = "Hello"; // String
let isActive = true; // Boolean
let emptyValue = null; // null
let notDefined; // undefined

// Kiểu tham chiếu
let person = {
    // Object
    name: "Alice",
    age: 30,
};

let colors = ["Red", "Green", "Blue"]; // Array

function greet() {
    // Function
    return "Hello!";
}
```

## Toán tử

JavaScript hỗ trợ nhiều loại toán tử:

### 1. Toán tử số học

```javascript
let a = 10;
let b = 5;

let sum = a + b; // 15 (cộng)
let difference = a - b; // 5 (trừ)
let product = a * b; // 50 (nhân)
let quotient = a / b; // 2 (chia)
let remainder = a % b; // 0 (chia lấy dư)
let power = a ** b; // 100000 (lũy thừa)

// Tăng/giảm
let x = 5;
x++; // x = 6 (tăng sau)
++x; // x = 7 (tăng trước)
x--; // x = 6 (giảm sau)
--x; // x = 5 (giảm trước)
```

### 2. Toán tử gán

```javascript
let x = 10;
x += 5; // x = 15 (tương đương với x = x + 5)
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 4; // x = 2
```

### 3. Toán tử so sánh

```javascript
let a = 5,
    b = 10,
    c = "5";

a == c; // true (so sánh giá trị, tự chuyển đổi kiểu)
a === c; // false (so sánh nghiêm ngặt cả giá trị và kiểu)
a != b; // true (khác giá trị)
a !== c; // true (khác giá trị hoặc kiểu)
a < b; // true (nhỏ hơn)
a > b; // false (lớn hơn)
a <= b; // true (nhỏ hơn hoặc bằng)
a >= b; // false (lớn hơn hoặc bằng)
```

### 4. Toán tử logic

```javascript
let x = true,
    y = false;

x && y; // false (AND logic)
x || y; // true (OR logic)
!x; // false (NOT logic)
```

## Code Playground

Hãy thử nghiệm với biến và kiểu dữ liệu:

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-polytuts-variables?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Bài tập thực hành

1. Tạo các biến để lưu thông tin cá nhân (tên, tuổi, địa chỉ)
2. Thực hiện các phép tính cơ bản và in kết quả
3. So sánh các giá trị và kiểm tra kết quả

<div class="progress-tracker">
<input type="checkbox" id="completed-variables" name="completed-variables">
<label for="completed-variables">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-variables');
  
  if (localStorage.getItem('completed-variables') === 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-variables', checkbox.checked);
  });
});
</script>
