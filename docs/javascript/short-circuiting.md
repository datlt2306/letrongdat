# Bí kíp dùng AND và OR trong JavaScript như một cao thủ!

Chào các em!  
Hôm nay Thầy sẽ chia sẻ với các em một mẹo cực hay về cách dùng toán tử **AND (&&)** và **OR (||)** trong JavaScript – không chỉ để so sánh `true` hay `false`, mà còn để viết code gọn hơn, thông minh hơn. Đây là phần mà nhiều bạn hay bỏ qua hoặc chưa hiểu sâu, nên càng phải học kỹ nha!

## Từ Boolean tới “short-circuit”

Đầu tiên, các em cần nhớ: toán tử `&&` và `||` không chỉ làm việc với `true`/`false`.  
Chúng ta hoàn toàn có thể dùng với bất kỳ kiểu dữ liệu nào. Và đây là lúc khái niệm **short-circuiting** (đánh giá ngắn mạch) xuất hiện.

## Toán tử || – trả về giá trị truthy đầu tiên

### Ví dụ đơn giản:

```javascript
console.log(3 || "Jonas"); // 👉 3
```

**Giải thích**:  
Vì `3` là giá trị truthy, nên JavaScript sẽ không thèm xem cái `'Jonas'` nữa, trả luôn kết quả là `3`.

### Vài ví dụ khác:

```javascript
console.log("" || "Jonas"); // 👉 Jonas ('' là falsy)
console.log(true || 0); // 👉 true (truthy)
console.log(undefined || null); // 👉 null (cả 2 đều falsy)
console.log(undefined || 0 || "" || "hello" || 23 || null); // 👉 'hello'
```

Ở đây, `'hello'` là giá trị truthy đầu tiên, nên được trả về. Các giá trị trước đó (`undefined`, `0`, `''`) đều là falsy.

## Ứng dụng thực tế: Gán giá trị mặc định

Khi không chắc một biến có tồn tại hay không, ta có thể dùng `||` để gán giá trị mặc định:

```javascript
const guests1 = restaurant.numGuests || 10;
console.log(guests1); // 👉 10 nếu numGuests không tồn tại
```

**Nhưng cẩn thận với số 0!**

```javascript
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 👉 10 ❌ Sai mục đích!
```

Mặc dù `0` là số khách thật, nhưng vì `0` là falsy, nên JavaScript lại gán `10`.  
(Cách giải quyết cái này – Thầy sẽ chia sẻ ở bài sau!)

## Toán tử && – trả về giá trị falsy đầu tiên

Ngược lại với `||`, toán tử `&&` sẽ trả về giá trị falsy đầu tiên. Nếu tất cả đều truthy, thì trả về giá trị cuối cùng.

### Ví dụ:

```javascript
console.log(0 && "Jonas"); // 👉 0 (falsy)
console.log(7 && "Jonas"); // 👉 'Jonas' (vì 7 là truthy)
console.log("Hello" && 23 && null && "Jonas"); // 👉 null
```

**Giải thích**:

-   `'Hello'` → truthy → tiếp tục
-   `23` → truthy → tiếp tục
-   `null` → falsy → dừng và trả về luôn `null`

## Ứng dụng thực tế: Gọi hàm nếu tồn tại

Khi không chắc một method có tồn tại không, thay vì viết `if`, ta có thể dùng `&&`:

### Cách dài:

```javascript
if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach");
}
```

### Viết gọn:

```javascript
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
```

Nếu `restaurant.orderPizza` là `undefined` → falsy → hàm sẽ không được gọi.  
Nếu tồn tại → truthy → tiếp tục gọi hàm.

## Lưu ý nhỏ

Thầy không khuyến khích các em lạm dụng `&&` hay `||` để thay hết `if` hay `?:` vì dễ khiến code khó đọc.  
Tuy nhiên, dùng đúng chỗ, nó là công cụ cực kỳ mạnh!


## 📝 Tóm tắt nhanh

| **Toán tử** | **Trả về khi nào**                                         | **Ứng dụng**               |
|-------------|------------------------------------------------------------|----------------------------|
| `a || b`    | Giá trị truthy đầu tiên hoặc giá trị cuối nếu tất cả falsy  | Gán giá trị mặc định       |
| `a && b`    | Giá trị falsy đầu tiên hoặc giá trị cuối nếu tất cả truthy  | Kiểm tra rồi thực thi lệnh |


## Bài tập thực hành

### 1. Kiểm tra sách có ví dụ bằng Java không

Viết hàm `hasExamplesInJava` nhận một object sách từ mảng `books`.  
Hàm trả về `true` nếu sách sử dụng Java, hoặc `'no data available'` nếu không có thông tin.

#### Ví dụ:

```javascript
const books = [
    { title: "Algorithms", programmingLanguage: "Java" },
    { title: "JavaScript: The Good Parts", programmingLanguage: "JavaScript" },
    // ...other books
];
// {...}
```

<details>
<summary>Show example solution</summary>

```javascript
function hasExamplesInJava(book) {
    return book.programmingLanguage === "Java" || "no data available";
}
console.log(hasExamplesInJava(books[0])); // true
console.log(hasExamplesInJava(books[1])); // 'no data available'
```

</details>

### 2. Kiểm tra sách có nội dung trực tuyến không

Một số sách có thuộc tính `onlineContent` (true/false). Lặp qua mảng `books` và in ra tiêu đề sách có nội dung trực tuyến.

#### Ví dụ:

```javascript
const books = [
    { title: "Operating System Concepts", onlineContent: false },
    { title: "Clean Code", onlineContent: true },
    // ...other books
];
// {...}
```

<details>
<summary>Show example solution</summary>

```javascript
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
}
// Output: "Clean Code" provides online content
```

</details>

**Happy coding các em!** ✨

— **Thầy Đạt 🧡**
