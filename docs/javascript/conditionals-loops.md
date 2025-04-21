# Câu lệnh điều kiện, vòng lặp

## Câu lệnh điều kiện

Câu lệnh điều kiện cho phép thực thi code khác nhau dựa trên các điều kiện khác nhau.

### If, Else if, Else

```javascript
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Chào buổi sáng!");
} else if (hour < 18) {
    console.log("Chào buổi chiều!");
} else {
    console.log("Chào buổi tối!");
}
```

### Switch case

```javascript
let day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Chủ nhật";
        break;
    case 1:
        dayName = "Thứ hai";
        break;
    case 2:
        dayName = "Thứ ba";
        break;
    case 3:
        dayName = "Thứ tư";
        break;
    case 4:
        dayName = "Thứ năm";
        break;
    case 5:
        dayName = "Thứ sáu";
        break;
    case 6:
        dayName = "Thứ bảy";
        break;
    default:
        dayName = "Không xác định";
}

console.log(`Hôm nay là ${dayName}`);
```

### Toán tử ba ngôi

```javascript
// condition ? exprIfTrue : exprIfFalse
let age = 20;
let message = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(message); // "Đủ tuổi"
```

## Vòng lặp

Vòng lặp cho phép thực thi một khối code nhiều lần.

### for loop

```javascript
// Cú pháp: for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
    console.log(`Số: ${i}`);
}
```

### while loop

```javascript
// Kiểm tra điều kiện trước khi thực thi
let i = 0;
while (i < 5) {
    console.log(`Số: ${i}`);
    i++;
}
```

### do...while loop

```javascript
// Thực thi ít nhất một lần, sau đó kiểm tra điều kiện
let i = 0;
do {
    console.log(`Số: ${i}`);
    i++;
} while (i < 5);
```

### for...of loop (cho mảng)

```javascript
// Lặp qua các phần tử trong mảng
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
```

### for...in loop (cho đối tượng)

```javascript
// Lặp qua các thuộc tính của đối tượng
const person = {
    name: "John",
    age: 30,
    job: "Developer",
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

## Break và Continue

-   `break`: Thoát khỏi vòng lặp
-   `continue`: Bỏ qua lần lặp hiện tại và tiếp tục với lần lặp tiếp theo

```javascript
// Break
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // In ra 0, 1, 2, 3, 4
}

// Continue
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i); // In ra 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```

## Code Playground

Hãy thử nghiệm với câu lệnh điều kiện và vòng lặp:

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-polytuts-loops?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Bài tập thực hành

1. Viết chương trình kiểm tra số chẵn/lẻ
2. Tạo một vòng lặp in ra bảng cửu chương
3. Lọc các số chia hết cho 3 trong dãy từ 1-20

<div class="progress-tracker">
<input type="checkbox" id="completed-loops" name="completed-loops">
<label for="completed-loops">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-loops');
  
  if (localStorage.getItem('completed-loops') === 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-loops', checkbox.checked);
  });
});
</script>
