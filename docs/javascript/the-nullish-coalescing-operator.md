# Giải cứu số 0 và chuỗi rỗng bằng toán tử "??" – Nullish Coalescing

Chào các em,  
Hôm nay Thầy Đạt sẽ chia sẻ với các em một “cứu tinh thầm lặng” trong JavaScript – đó chính là **nullish coalescing operator**, hay còn gọi tắt là `??`. Nghe tên thì hơi lạ tai chút, nhưng đảm bảo sau khi hiểu xong thì các em sẽ thấy đây là một công cụ cực kỳ hữu ích – đặc biệt khi làm việc với dữ liệu không chắc chắn (có thể có hoặc không, có thể là `0`, `null`, `undefined`...).

## Vấn đề khi dùng toán tử OR (`||`) để đặt giá trị mặc định

Trước giờ, để đặt giá trị mặc định cho một biến nếu không tồn tại giá trị gốc, ta thường dùng toán tử OR:

```javascript
const guests = restaurant.numGuests || 10;
```

Nếu `restaurant.numGuests` không tồn tại (ví dụ là `undefined`), thì `guests` sẽ được gán bằng `10`.

### Nghe có vẻ ổn? Nhưng chờ đã!

Nếu `restaurant.numGuests` là `0` (nghĩa là nhà hàng không có khách), thì `0` lại bị xem là một falsy value — và lúc này JavaScript lại bỏ qua số `0` hợp lệ đó và lấy giá trị mặc định `10`.

⚠️ **Kết quả là:** ta vô tình làm sai dữ liệu gốc.

## Giải pháp: Toán tử ?? – Nullish Coalescing

Và đây là lúc `??` xuất hiện như một người hùng!

```javascript
const guestsCorrect = restaurant.numGuests ?? 10;
```

### Cách hoạt động

Toán tử `??` chỉ coi `null` và `undefined` là giá trị nullish.  
Tức là: nó không xem `0` hay chuỗi rỗng `""` là sai như toán tử `||`.

Vì vậy, nếu `restaurant.numGuests` là `0`, thì `0` vẫn được giữ lại. Chỉ khi giá trị là `null` hoặc `undefined` thì giá trị mặc định `10` mới được dùng.

## Minh họa chi tiết

### Trường hợp 1: Giá trị là `undefined`

```javascript
const restaurant = {}; // không có numGuests
const guests = restaurant.numGuests ?? 10;
console.log(guests); // 👉 10
```

### Trường hợp 2: Giá trị là `0` – một giá trị hợp lệ!

```javascript
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 👉 0 (chuẩn bài!)
```

## Khác biệt giữa `||` và `??`
| **Toán tử** | **Kiểm tra giá trị nào?**             | **Khi nào dùng giá trị bên phải?** |
|-------------|---------------------------------------|------------------------------------|
| `||`        | Falsy values (0, "", null, undefined) | Khi giá trị bên trái là falsy      |
| `??`        | Nullish values (chỉ: null, undefined) | Khi giá trị bên trái là nullish    |
## Tóm tắt nhanh

-   `??` là toán tử nullish coalescing – ra đời từ ES2020.
-   Hoạt động gần giống `||`, nhưng chỉ coi `null` và `undefined` là giá trị cần thay thế.
-   Dùng `??` để tránh tình huống “loại oan” các giá trị hợp lệ như `0`, `""`.
-   **Cú pháp:**

```javascript
const value = possiblyNullValue ?? defaultValue;
```

## Bài tập thực hành

### 1. Kiểm tra sách không có thông tin về nội dung trực tuyến

Một số object trong mảng `books` không có thuộc tính `onlineContent`. Lặp qua mảng `books` và in ra tiêu đề sách không có thông tin về nội dung trực tuyến theo định dạng:  
`"${title}" provides no data about its online content.`

#### Ví dụ:

```javascript
const books = [
    { title: "Clean Code", onlineContent: true },
    { title: "JavaScript: The Good Parts" },
    { title: "You Don't Know JS", onlineContent: false },
];
// {...}
```

<details>
<summary>Show example solution</summary>

```javascript
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent ??
        console.log(`"${books[i].title}" provides no data about its online content`);
}
// Output:
// "JavaScript: The Good Parts" provides no data about its online content
```

</details>

Hy vọng các em thấy toán tử `??` này thật sự “ngon lành cành đào” và hữu ích khi làm việc với dữ liệu không chắc chắn. Còn rất nhiều trường hợp thực tế sẽ cần đến nó, và chúng ta sẽ còn gặp lại trong các bài tiếp theo nhé!

**Happy coding các em!** ✨
– **Thầy Đạt ✌️**
