# Hiểu Rõ Rest Pattern & Rest Parameters trong JavaScript

Chào các em, hôm nay thầy chia sẻ một phần rất hay ho trong JavaScript – đó là **Rest Pattern** và **Rest Parameters**. Nhìn thì giống Spread Operator nhưng “bản chất thì ngược đời” 😄

## Rest và Spread có gì giống – khác?

Các em còn nhớ Spread Operator (`...`) chứ?

-   Dùng để tách mảng thành từng phần tử riêng lẻ.
-   Hay truyền nhiều giá trị vào hàm cùng lúc.

Ví dụ:

```javascript
const arr = [1, 2, 3];
console.log(...arr); // => 1 2 3
```

Nhưng giờ đến lượt **Rest Pattern** (`...`) xuất hiện – cũng ba chấm, nhưng làm điều ngược lại: **gom các phần tử lại thành mảng!**

-   **Spread**: Tách ra.
-   **Rest**: Gom lại.

## Rest Pattern trong Destructuring

### Trường hợp mảng

Giả sử mình có mảng sau:

```javascript
const arr = [2, 3, 4, 5];
```

Thầy muốn lấy hai phần tử đầu ra riêng, phần còn lại gom vào một biến:

```javascript
const [a, b, ...others] = arr;

console.log(a); // 2
console.log(b); // 3
console.log(others); // [4, 5]
```

📌 **Lưu ý**:

-   Rest Pattern chỉ dùng được ở cuối khi destructuring!
-   Không thể viết `[...rest, last] = arr` nhé, vì JS sẽ không biết “gom tới đâu” ❌.
-   Chỉ được 1 rest trong mỗi destructuring.

### Destructuring mảng thực tế hơn tí

Ví dụ với một menu:

```javascript
const menu = ["Pizza", "Pasta", "Risotto", "Burger", "Salad"];

const [pizza, , risotto, ...otherFood] = menu;

console.log(pizza); // Pizza
console.log(risotto); // Risotto
console.log(otherFood); // ['Burger', 'Salad']
```

📌 **Lưu ý tiếp**:

-   Phần tử bị bỏ qua (ở đây là `'Pasta'`) không nằm trong mảng rest.
-   Rest pattern sẽ gom từ phần tử sau cùng có tên biến trở đi.

### Với Object cũng tương tự

```javascript
const openingHours = {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
};

const { sat, ...weekdays } = openingHours;

console.log(sat);
// { open: 0, close: 24 }

console.log(weekdays);
// { thu: {...}, fri: {...} }
```

Ở đây, `sat` được lấy riêng, còn `weekdays` gom phần còn lại vào object mới.

## Rest Parameters trong hàm

Chuyển qua phần hàm – khi các em muốn viết một hàm nhận số lượng đối số tùy ý, thì dùng rest parameters là lựa chọn cực hợp lý.

### Ví dụ hàm cộng:

```javascript
function add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

add(2, 3); // 5
add(5, 3, 7, 2); // 17
```

📌 `numbers` trong ví dụ trên là một mảng chứa tất cả đối số được truyền vào.

### Kết hợp với Spread

```javascript
const x = [23, 5, 7];
add(...x); // cũng ra 35
```

Ở đây:

-   `...x` (spread) giúp “bung” mảng thành từng giá trị rời.
-   Sau đó, `...numbers` (rest) gom lại thành mảng trong hàm.

🔥 Một ví dụ điển hình cho thấy Spread và Rest làm việc “trái dấu” với nhau.

### Hàm thực tế: Order Pizza

Thầy viết một hàm order pizza có 1 nguyên liệu chính, còn lại là topping tùy thích:

```javascript
const orderPizza = function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
};

orderPizza("Mushrooms", "Onion", "Olives", "Spinach");
```

Kết quả:

```
Mushrooms
['Onion', 'Olives', 'Spinach']
```

Nếu chỉ truyền 1 nguyên liệu:

```javascript
orderPizza("Mushrooms");
```

Thì `otherIngredients` sẽ là một mảng rỗng `[]`.

## Tóm tắt nhanh

-   **Rest Pattern** (`...`) dùng để gom phần còn lại:
    -   Dùng trong destructuring (array hoặc object).
    -   Chỉ được dùng ở cuối, chỉ có một lần duy nhất.
-   **Rest Parameters**:
    -   Dùng trong định nghĩa hàm.
    -   Gom tất cả các tham số còn lại thành mảng.
-   **Spread**: Tách giá trị ra.
-   **Rest**: Gom giá trị lại.
-   Chúng giống nhau về cú pháp (`...`), nhưng ngược nhau về công dụng.

## Bài tập thực hành

### 1. Destructure `keywords` từ sách đầu tiên

Destructure thuộc tính `keywords` (mảng) của sách đầu tiên từ mảng `books` thành các biến `mainKeyword` và `rest`.

-   `mainKeyword` sẽ chứa từ khóa đầu tiên.
-   `rest` sẽ chứa các từ khóa còn lại (mảng).

```javascript
const books = [
    { title: "Book 1", keywords: ["JavaScript", "Programming", "Web"] },
    // ...other books
];
// {...}
```

<details>
<summary>Show example solution</summary>

```javascript
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword); // JavaScript
console.log(rest); // ['Programming', 'Web']
```

</details>

### 2. Destructure sách thứ hai

Destructure sách thứ hai từ mảng `books` thành biến `bookPublisher`.

-   `bookPublisher` sẽ chứa giá trị của thuộc tính `publisher`.
-   Các thuộc tính còn lại sẽ được gán vào biến `restOfTheBook`.

```javascript
const books = [
    // ...other books
    { title: "Book 2", publisher: "O'Reilly", year: 2020 },
];
// {...}
```

<details>
<summary>Show example solution</summary>

```javascript
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher); // O'Reilly
console.log(restOfTheBook); // { title: 'Book 2', year: 2020 }
```

</details>

### 3. Viết hàm `printBookAuthorsCount`

Viết hàm `printBookAuthorsCount` với hai tham số `title` và `authors`.

-   `authors` nhận số lượng đối số tùy ý.
-   Hàm in ra chuỗi theo định dạng:  
    `"The book "${title}" has ${authors.length} authors"`

#### Ví dụ:

```javascript
printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
// Expected output: "The book "Algorithms" has 2 authors"
```

<details>
<summary>Show example solution</summary>

```javascript
function printBookAuthorsCount(title, ...authors) {
    console.log(`The book "${title}" has ${authors.length} authors`);
}
```

</details>

Các em hãy luyện tập để hiểu rõ hơn về Rest Pattern và Rest Parameters nhé! Nếu có thắc mắc, cứ hỏi thầy nha!

**Happy coding các em!** ✨

— **Thầy Đạt 🧡**
