# Hàm & Scope

## Hàm trong JavaScript

Hàm là một khối code được thiết kế để thực hiện một nhiệm vụ cụ thể và có thể được tái sử dụng. Hàm chỉ được thực thi khi được gọi.

### Khai báo hàm

```javascript
// Cách 1: Function Declaration
function greet(name) {
    return `Xin chào, ${name}!`;
}

// Cách 2: Function Expression
const sayHello = function (name) {
    return `Xin chào, ${name}!`;
};

// Cách 3: Arrow Function (ES6)
const welcome = (name) => `Xin chào, ${name}!`;

// Gọi hàm
console.log(greet("Alice")); // "Xin chào, Alice!"
console.log(sayHello("Bob")); // "Xin chào, Bob!"
console.log(welcome("Charlie")); // "Xin chào, Charlie!"
```

### Tham số và đối số

```javascript
// name và age là tham số (parameters)
function introduce(name, age) {
    return `Tôi tên là ${name}, ${age} tuổi.`;
}

// "John" và 30 là đối số (arguments)
console.log(introduce("John", 30)); // "Tôi tên là John, 30 tuổi."
```

### Tham số mặc định

```javascript
function greet(name = "Người dùng") {
    return `Xin chào, ${name}!`;
}

console.log(greet()); // "Xin chào, Người dùng!"
console.log(greet("Alice")); // "Xin chào, Alice!"
```

### Rest Parameters

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## Scope trong JavaScript

Scope xác định phạm vi truy cập của biến trong code.

### Global Scope

Biến được khai báo bên ngoài bất kỳ hàm hoặc khối nào có thể được truy cập từ bất kỳ đâu trong code.

```javascript
// Global variable
let globalVar = "Tôi là biến toàn cục";

function testScope() {
    console.log(globalVar); // Có thể truy cập biến toàn cục
}

testScope();
console.log(globalVar); // Cũng có thể truy cập ở đây
```

### Function Scope

Biến được khai báo trong hàm chỉ có thể truy cập được từ bên trong hàm đó.

```javascript
function testScope() {
    // Local variable
    let localVar = "Tôi là biến cục bộ";
    console.log(localVar); // Có thể truy cập
}

testScope();
// console.log(localVar); // Lỗi: localVar is not defined
```

### Block Scope

Biến được khai báo với `let` và `const` trong một khối (nằm giữa `{}`) chỉ có thể truy cập được từ bên trong khối đó.

```javascript
if (true) {
    // Block-scoped variable
    let blockVar = "Tôi là biến trong khối";
    const constVar = "Tôi không thay đổi";
    console.log(blockVar); // Có thể truy cập

    var varVariable = "Tôi không tôn trọng block scope";
}

// console.log(blockVar); // Lỗi: blockVar is not defined
// console.log(constVar); // Lỗi: constVar is not defined
console.log(varVariable); // Hoạt động vì var không tôn trọng block scope
```

### Lexical Scope (Closures)

Một hàm có thể truy cập các biến từ hàm cha của nó.

```javascript
function outer() {
    let outerVar = "Tôi nằm trong hàm outer";

    function inner() {
        console.log(outerVar); // Có thể truy cập biến từ hàm cha
    }

    inner();
}

outer(); // In ra: "Tôi nằm trong hàm outer"
```

## Closure

Closure là sự kết hợp của một hàm và môi trường lexical nơi hàm đó được định nghĩa. Nó cho phép hàm "nhớ" và truy cập các biến từ phạm vi bên ngoài ngay cả khi thực thi bên ngoài phạm vi đó.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

## Code Playground

Thử nghiệm với hàm và scope:

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-polytuts-functions?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Bài tập thực hành

1. Viết hàm tính giai thừa của một số
2. Tạo một closure lưu trữ thông tin người dùng
3. Thử nghiệm với các phạm vi biến khác nhau

<div class="progress-tracker">
<input type="checkbox" id="completed-functions" name="completed-functions">
<label for="completed-functions">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-functions');
  
  if (localStorage.getItem('completed-functions') === 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-functions', checkbox.checked);
    
    // Cập nhật tiến trình tổng thể
    updateOverallProgress();
  });
  
  function updateOverallProgress() {
    // Lấy tất cả các bài học JavaScript
    const jsLessons = [
      'completed-intro',
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
  
  // Chạy khi trang tải để cập nhật UI
  updateOverallProgress();
});
</script>
