# Làm Chủ Destructuring Object trong JavaScript – Học Là Phải Dùng Được!

Hello các em,

Hôm nay thầy sẽ chia sẻ một chủ đề rất hay và thực tế trong JavaScript: **Destructuring với Object**.  
Nếu em đã quen với destructuring mảng thì phần này sẽ cực kỳ hợp lý. Còn nếu chưa, không sao, đi từng bước cùng thầy nha!

## Destructuring Object – Cú pháp và cách dùng cơ bản

Trong JavaScript, destructuring cho phép “mở hộp” một object và lấy ra các thuộc tính cụ thể mà mình cần. Để làm điều này, mình dùng dấu ngoặc nhọn `{}`:

```javascript
const { name, openingHours, categories } = restaurant;
```

Ở đây, thầy đang tạo 3 biến mới: `name`, `openingHours`, `categories` – tất cả đều lấy giá trị tương ứng từ object `restaurant`.

> 💡 **Lưu ý nhỏ**: Khác với mảng (có thứ tự), object không quan tâm thứ tự các phần tử – nên em chỉ cần ghi đúng tên thuộc tính, là được.

## Đổi tên biến khi destructuring

Giả sử thầy không muốn dùng đúng tên thuộc tính mà muốn đổi tên biến cho dễ nhớ hơn. Hoàn toàn được nhé:

```javascript
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
```

Giờ mình có 3 biến: `restaurantName`, `hours`, `tags` – cực kỳ tiện khi xử lý dữ liệu từ bên ngoài như API.

## Gán giá trị mặc định khi thuộc tính không tồn tại

Khi destructuring, nếu thuộc tính không tồn tại thì giá trị sẽ là `undefined`. Để tránh lỗi, mình có thể gán giá trị mặc định như sau:

```javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
```

Ở đây:

-   `menu` không có trong object → sẽ là `[]`.
-   `starterMenu` có → sẽ lấy giá trị thực tế.

## Gán lại giá trị cho biến đã tồn tại

Giả sử em có sẵn hai biến `a`, `b` và muốn cập nhật lại chúng bằng giá trị từ một object khác:

```javascript
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Cú pháp cần bọc trong ngoặc tròn:
({ a, b } = obj);
```

> 💡 **Lưu ý**: Nếu không có dấu ngoặc `()` ở ngoài, JavaScript sẽ hiểu `{ a, b }` là một block code → báo lỗi!

## Destructuring object lồng nhau (nested)

Với object lồng object như `openingHours`, em vẫn destructuring được dễ dàng:

```javascript
const {
    fri: { open, close },
} = openingHours;
```

Bây giờ mình có hai biến `open` và `close` lấy từ `openingHours.fri`.

> 💡 Em cũng có thể đặt tên khác luôn nếu muốn:

```javascript
const {
    fri: { open: o, close: c },
} = openingHours;
```

## Ứng dụng thực tế – destructuring trong tham số hàm

Trong lập trình thực tế, hàm thường có nhiều tham số. Nếu không nhớ thứ tự, rất dễ nhầm. Giải pháp là: truyền object vào làm tham số, sau đó destructure ngay trong tham số hàm.

### Ví dụ:

```javascript
restaurant.orderDelivery({
    time: "23:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
});
```

Và hàm định nghĩa thế này:

```javascript
orderDelivery: function ({
  starterIndex = 1,
  mainIndex = 0,
  time = '20:00',
  address
}) {
  console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
}
```

### Lợi ích:

-   Dễ đọc, dễ viết, không cần nhớ đúng thứ tự tham số.
-   Có thể đặt giá trị mặc định ngay khi destructure.

## Bài tập thực hành

### 1. Tách thuộc tính từ object đầu tiên trong mảng

Destructure object đầu tiên từ mảng `books` thành các biến `title`, `author` và `ISBN`.

```javascript
const books = [
    { title: "Algorithms", author: "Robert Sedgewick", ISBN: "978-0321573513" },
    // ...other books
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN); // Algorithms Robert Sedgewick 978-0321573513
```

</details>

### 2. Lấy thuộc tính `keywords` và đổi tên thành `tags`

Destructure object đầu tiên từ mảng `books` để lấy thuộc tính `keywords` và gán vào biến `tags`.

```javascript
const books = [
    { title: "Algorithms", keywords: ["data structures", "algorithms"] },
    // ...other books
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const { keywords: tags } = books[0];
console.log(tags); // ['data structures', 'algorithms']
```

</details>

### 3. Gán giá trị mặc định khi thuộc tính không tồn tại

Object thứ bảy trong mảng `books` không có thuộc tính `programmingLanguage`. Destructure object này thành các biến `language` và `programmingLanguage`, với giá trị mặc định cho `programmingLanguage` là `'unknown'`.

```javascript
const books = [
    // ...other books
    { language: "English" }, // books[6]
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const { language, programmingLanguage = "unknown" } = books[6];
console.log(language, programmingLanguage); // English unknown
```

</details>

### 4. Gán lại giá trị cho biến đã tồn tại

Dưới đây là hai biến `bookTitle` và `bookAuthor`. Gán lại giá trị của chúng bằng các thuộc tính `title` và `author` từ object đầu tiên trong mảng `books`.

```javascript
let bookTitle = "unknown";
let bookAuthor = "unknown";
const books = [
    { title: "Algorithms", author: "Robert Sedgewick" },
    // ...other books
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor); // Algorithms Robert Sedgewick
```

</details>

### 5. Tách thuộc tính lồng nhau

Object đầu tiên trong mảng `books` có thuộc tính lồng nhau `thirdParty.goodreads.rating`. Destructure object này để lấy giá trị `rating` và gán vào biến `bookRating`.

```javascript
const books = [
    {
        title: "Algorithms",
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
            },
        },
    },
    // ...other books
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const {
    thirdParty: {
        goodreads: { rating: bookRating },
    },
} = books[0];
console.log(bookRating); // 4.41
```

</details>

### 6. Viết hàm `printBookInfo`

Viết hàm `printBookInfo` với ba tham số `title`, `author` và `year`. Hàm này nhận một object làm tham số và in ra thông tin sách theo định dạng:  
`"${title} by ${author}, ${year}"`.  
Nếu `year` không được truyền vào, gán giá trị mặc định là `'year unknown'`.

#### Ví dụ:

```javascript
printBookInfo({ title: "Algorithms", author: "Robert Sedgewick", year: "2011" });
// Expected output: "Algorithms by Robert Sedgewick, 2011"
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
function printBookInfo({ title, author, year = "year unknown" }) {
    console.log(`${title} by ${author}, ${year}`);
}
```

</details>

## Tóm tắt nhanh

| **Kỹ thuật**                | **Cách dùng**                          | **Ghi chú**                  |
| --------------------------- | -------------------------------------- | ---------------------------- |
| **Destructuring object**    | `const { name } = obj;`                | Lấy giá trị từ thuộc tính    |
| **Đổi tên biến**            | `const { name: newName } = obj;`       | Gọn gàng, dễ hiểu            |
| **Giá trị mặc định**        | `const { prop = defaultValue } = obj;` | Tránh lỗi khi thiếu dữ liệu  |
| **Destructuring lồng nhau** | `const { nested: { prop } } = obj;`    | Áp dụng khi dữ liệu phức tạp |
| **Gán lại biến đã có**      | `({ a, b } = obj);`                    | Phải có dấu ngoặc            |
| **Dùng trong hàm**          | `function({ prop }) {}`                | Dễ đọc, linh hoạt            |

**Happy coding các em!** ✨

— **Thầy Đạt 🧡**
