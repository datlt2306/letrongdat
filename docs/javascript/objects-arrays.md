# Object & Array

## Objects trong JavaScript

Objects là cấu trúc dữ liệu cho phép lưu trữ các cặp key-value. Chúng là nền tảng của hầu hết các ứng dụng JavaScript phức tạp.

### Khởi tạo Object

```javascript
// Object literal syntax
const person = {
    firstName: "Nguyen",
    lastName: "Van A",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Đường ABC",
        city: "Hà Nội",
        country: "Việt Nam",
    },
    hobbies: ["đọc sách", "chơi game", "du lịch"],
    greet: function () {
        return `Xin chào, tôi là ${this.firstName} ${this.lastName}`;
    },
};

// Truy cập thuộc tính
console.log(person.firstName); // "Nguyen"
console.log(person["lastName"]); // "Van A"
console.log(person.address.city); // "Hà Nội"
console.log(person.hobbies[0]); // "đọc sách"
console.log(person.greet()); // "Xin chào, tôi là Nguyen Van A"
```

### Constructor Functions và Classes

```javascript
// Sử dụng constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

const person1 = new Person("Tran", "Thi B", 25);
console.log(person1.fullName()); // "Tran Thi B"

// Sử dụng class (ES6)
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} đã đăng nhập`);
    }

    logout() {
        console.log(`${this.name} đã đăng xuất`);
    }
}

const user1 = new User("Le Van C", "levanc@example.com");
user1.login(); // "Le Van C đã đăng nhập"
```

## Arrays trong JavaScript

Arrays là cấu trúc dữ liệu cho phép lưu trữ và quản lý một tập hợp các giá trị theo thứ tự.

### Khởi tạo và truy cập Array

```javascript
// Khởi tạo array
const fruits = ["Táo", "Chuối", "Cam", "Xoài"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "Hello", true, null, { name: "John" }, [1, 2]];

// Truy cập phần tử
console.log(fruits[0]); // "Táo"
console.log(numbers[2]); // 3
console.log(mixed[4].name); // "John"

// Độ dài của array
console.log(fruits.length); // 4
```

### Các phương thức Array phổ biến

```javascript
// Thêm/xóa phần tử
const colors = ["red", "green"];
colors.push("blue"); // Thêm vào cuối: ["red", "green", "blue"]
colors.unshift("yellow"); // Thêm vào đầu: ["yellow", "red", "green", "blue"]
colors.pop(); // Xóa phần tử cuối: ["yellow", "red", "green"]
colors.shift(); // Xóa phần tử đầu: ["red", "green"]

// Tìm kiếm
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30)); // 2
console.log(numbers.includes(60)); // false

// Chuyển đổi
console.log(numbers.toString()); // "10,20,30,40,50"
console.log(numbers.join(" | ")); // "10 | 20 | 30 | 40 | 50"

// Cắt và nối
const sliced = numbers.slice(1, 3); // [20, 30]
const combined = numbers.concat([60, 70]); // [10, 20, 30, 40, 50, 60, 70]
```

### Array methods nâng cao (ES6+)

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: tạo mảng mới bằng cách áp dụng hàm cho mỗi phần tử
const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]

// filter: tạo mảng mới với các phần tử thỏa điều kiện
const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]

// reduce: gộp các phần tử thành một giá trị
const sum = numbers.reduce((total, num) => total + num, 0); // 15

// find: trả về phần tử đầu tiên thỏa điều kiện
const found = numbers.find((num) => num > 3); // 4

// every: kiểm tra tất cả phần tử có thỏa điều kiện
const allPositive = numbers.every((num) => num > 0); // true

// some: kiểm tra có ít nhất một phần tử thỏa điều kiện
const hasEven = numbers.some((num) => num % 2 === 0); // true

// Destructuring arrays
const [first, second, ...rest] = numbers; // first=1, second=2, rest=[3,4,5]
```

## Object và Array methods trong thực tế

### Làm việc với danh sách đối tượng

```javascript
const students = [
    { id: 1, name: "Nguyen Van A", score: 85, passed: true },
    { id: 2, name: "Tran Thi B", score: 65, passed: true },
    { id: 3, name: "Le Van C", score: 45, passed: false },
    { id: 4, name: "Pham Thi D", score: 90, passed: true },
];

// Lọc sinh viên có điểm lớn hơn 70
const highScorers = students.filter((student) => student.score > 70);

// Chuyển đổi sang mảng tên
const names = students.map((student) => student.name);

// Tính điểm trung bình
const averageScore =
    students.reduce((total, student) => total + student.score, 0) / students.length;

// Kiểm tra tất cả sinh viên có qua môn không
const allPassed = students.every((student) => student.passed);

// Tìm sinh viên có điểm cao nhất
const topStudent = students.reduce(
    (highest, student) => (student.score > highest.score ? student : highest),
    students[0]
);
```

## Code Playground

Hãy thử nghiệm với Objects và Arrays:

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-polytuts-objects-arrays?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Bài tập thực hành

1. Tạo một đối tượng mô tả thông tin cá nhân của bạn với các thuộc tính và phương thức
2. Tạo một mảng sản phẩm, mỗi sản phẩm là một đối tượng, và thực hiện các thao tác lọc và tính toán
3. Sử dụng map, filter, và reduce để xử lý một mảng số

<div class="progress-tracker">
<input type="checkbox" id="completed-objects-arrays" name="completed-objects-arrays">
<label for="completed-objects-arrays">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-objects-arrays');
  
  if (localStorage.getItem('completed-objects-arrays') === 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-objects-arrays', checkbox.checked);
    updateOverallProgress();
  });
  
  function updateOverallProgress() {
    const jsLessons = [
      'completed-intro',
      'completed-setup',
      'completed-variables',
      'completed-loops',
      'completed-functions',
      'completed-objects-arrays'
    ];
    
    const completedCount = jsLessons.filter(
      lesson => localStorage.getItem(lesson) === 'true'
    ).length;
    
    const percentage = Math.round((completedCount / jsLessons.length) * 100);
    
    localStorage.setItem('overallProgress', percentage);
    
    const progressBar = document.querySelector('progress');
    if (progressBar) {
      progressBar.value = percentage;
      progressBar.nextElementSibling.textContent = `${percentage}% Hoàn thành`;
    }
  }
});
</script>
