# Gọn hơn, sạch hơn với Logical Assignment Operators trong JavaScript

Chào các em!  
Hôm nay, Thầy Đạt sẽ chia sẻ với các em một chủ đề cực kỳ thú vị và mới mẻ trong JavaScript – đó là **Logical Assignment Operators**. Đây là một tính năng được giới thiệu từ ES2021, giúp code của mình ngắn gọn, dễ đọc mà vẫn làm được y chang những gì ta hay viết dài dòng trước đây.


## Logical Assignment Operators là gì?

Có 3 "nhân vật chính" mình sẽ nói tới hôm nay:

- `||=` (OR assignment)
- `??=` (Nullish assignment)
- `&&=` (AND assignment)

Chúng giúp mình viết các biểu thức gán giá trị một cách ngắn gọn hơn dựa trên điều kiện **truthy/falsy/nullish** của giá trị hiện tại.


## Tạo dữ liệu ví dụ để thao tác

Đầu tiên, mình sẽ tạo hai đối tượng `restaurant` đơn giản:

```javascript
const restaurant1 = {
  name: 'Capri',
  numGuests: 20,
};

const restaurant2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
```


## Gán mặc định với `||=` – OR Assignment

Giả sử `restaurant2` không có `numGuests`, mình muốn gán mặc định là `10`. Trước đây, mình làm thế này:

```javascript
restaurant2.numGuests = restaurant2.numGuests || 10;
```

Giờ có thể rút gọn lại như sau:

```javascript
restaurant2.numGuests ||= 10;
```

✨ **Hiệu quả y chang, mà ngắn gọn hơn hẳn!**

### ⚠️ Lưu ý quan trọng:

Nếu giá trị hiện tại là `0` (tức là mình muốn cố tình đặt `numGuests = 0`), thì `||=` sẽ bỏ qua giá trị này vì `0` là falsy.

```javascript
restaurant2.numGuests = 0;
restaurant2.numGuests ||= 10;
console.log(restaurant2.numGuests); // 👉 10 😱 => không đúng mong muốn
```


## Giữ đúng giá trị với `??=` – Nullish Assignment

Để tránh hiểu nhầm `0` là falsy, mình dùng `??=`:

```javascript
restaurant2.numGuests ??= 10;
```

### 💡 Cách hoạt động:

Operator này chỉ gán khi giá trị hiện tại là `null` hoặc `undefined` – chứ không đụng đến `0` hay chuỗi rỗng.

### Khi nào dùng `??=`?

- Khi giá trị `0`, `''`, `false` là hợp lệ.
- Khi chỉ muốn gán khi thật sự không có giá trị (`null`/`undefined`).


## Ẩn thông tin với `&&=` – AND Assignment

Giờ mình muốn ẩn tên chủ quán, nếu có, bằng cách thay `"Giovanni Rossi"` thành `"ANONYMOUS"`.

### Cách cũ:

```javascript
if (restaurant2.owner) {
  restaurant2.owner = 'ANONYMOUS';
}
```

### Viết gọn:

```javascript
restaurant2.owner &&= 'ANONYMOUS';
```

### Kết quả:

- Nếu `owner` có giá trị (truthy) → sẽ được thay bằng `'ANONYMOUS'`.
- Nếu không có (`falsy`, `undefined`) → không làm gì cả.

#### Ví dụ:

```javascript
restaurant1.owner &&= 'ANONYMOUS';
// Không có tác dụng vì restaurant1 không có owner

restaurant2.owner &&= 'ANONYMOUS';
// Kết quả: owner = 'ANONYMOUS'
```

✅ Đây là cách an toàn để cập nhật giá trị chỉ khi nó đang tồn tại.


## Tóm tắt nhanh

| **Operator** | **Điều kiện gán**               | **Khi nào dùng?**                                   |
|--------------|----------------------------------|----------------------------------------------------|
| `||=`        | Gán nếu falsy                   | Khi muốn gán giá trị mặc định                     |
| `??=`        | Gán nếu nullish                 | Khi chỉ muốn gán nếu giá trị là `null` hoặc `undefined` |
| `&&=`        | Gán nếu truthy                  | Khi chỉ muốn ghi đè nếu giá trị đang tồn tại       |


## Bài tập thực hành

### 1. Gán giá trị mặc định cho thuộc tính thiếu

Một số object trong mảng `books` không có thuộc tính `edition`. Lặp qua mảng `books` và gán thuộc tính này với giá trị `1` nếu nó chưa tồn tại.

#### Ví dụ:

```javascript
const books = [
  { title: 'Clean Code', edition: 2 },
  { title: 'JavaScript: The Good Parts' },
  { title: 'You Don’t Know JS', edition: 3 },
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
console.log(books);
// Output:
// [
//   { title: 'Clean Code', edition: 2 },
//   { title: 'JavaScript: The Good Parts', edition: 1 },
//   { title: 'You Don’t Know JS', edition: 3 },
// ]
```
</details>


### 2. Cập nhật giá trị dựa trên điều kiện

Một số object trong mảng `books` có thuộc tính `highlighted`, mặc định là `true`. Lặp qua mảng `books` và nếu `thirdParty.goodreads.rating` nhỏ hơn `4.2`, gán `highlighted` thành `false`.

#### Ví dụ:

```javascript
const books = [
  { title: 'Clean Code', highlighted: true, thirdParty: { goodreads: { rating: 4.5 } } },
  { title: 'JavaScript: The Good Parts', highlighted: true, thirdParty: { goodreads: { rating: 4.1 } } },
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
console.log(books);
// Output:
// [
//   { title: 'Clean Code', highlighted: true, thirdParty: { goodreads: { rating: 4.5 } } },
//   { title: 'JavaScript: The Good Parts', highlighted: false, thirdParty: { goodreads: { rating: 4.1 } } },
// ]
```
</details>


Hy vọng các em thấy các toán tử `||=`, `??=`, và `&&=` thật sự hữu ích và giúp code của mình gọn gàng hơn. Hãy áp dụng ngay vào project của mình nhé!

**Happy coding các em!** ✨  
— **Thầy Đạt 🧡**
