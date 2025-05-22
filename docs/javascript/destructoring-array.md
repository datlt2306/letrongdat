# Bắt đầu với Array Destructuring: Một chiếc bùa lợi hại trong JavaScript!

Chào các em!

Bài này Thầy chia sẻ một chút kinh nghiệm về **destructuring** trong JavaScript, một tính năng siêu hay giúp code ngắn gọn và dễ hiểu hơn rất nhiều. Trong phần này, ta sẽ luyện tập với một ứng dụng giao đồ ăn giả định - nhưng không UI nhé, chỉ lo JavaScript thôi!

## Giới thiệu: Tại sao lại là destructuring?

Trong JavaScript hiện đại (ES6 trở lên), destructuring giúp ta "mở" một array hoặc object thành nhiều biến để dễ làm việc hơn.

## Bài tập đầu tiên: Tách array

### Cách cũ (hơi dài dòng)

```javascript
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

### Dùng destructuring nè!

```javascript
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
```

> **Mẹo nhỏ**: Nhớ dùng `const` khi khai báo, vì destructuring là một kiểu gán giá trị.

## Tách một số phần tử trong array

Giả sử thầy chỉ muốn lấy phần tử 1 và 3:

```javascript
const categories = restaurant.categories;
const [main, , secondary] = categories;
console.log(main, secondary); // Italian Vegetarian
```

> **Lưu ý**: Dấu phẩy để bỏ qua một giá trị, không cần lưu vào biến.

## Hoán đổi giá trị của 2 biến

### Cách cũ

```javascript
let main = "Italian";
let secondary = "Vegetarian";
let temp = main;
main = secondary;
secondary = temp;
```

### Dùng destructuring cho ngầu lênh

```javascript
[main, secondary] = [secondary, main];
```

> **Mẹo**: Cái này thầy dùng suốt, để hoán đổi biến mà không cần biến trung gian.

## Dùng destructuring với hàm trả về array

Giả sử ta có hàm đặt món ăn:

```javascript
restaurant.order = function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
};
```

Gọi hàm và tách luôn:

```javascript
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza
```

## Nested destructuring (Tách array lồng nhau)

Với array lồng array:

```javascript
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6
```

## Gán giá trị mặc định khi destructuring

Trong trường hợp array ngắn hơn mong đợi:

```javascript
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
```

> **Dữ phòng** khi API không trả về đủ số phần tử!

## Bài tập thực hành

### 1. Tách hai phần tử đầu tiên trong array

Destructure array `books` thành hai biến `firstBook` và `secondBook`.

```javascript
const books = ["Book 1", "Book 2", "Book 3", "Book 4"];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook); // Book 1 Book 2
```

</details>

### 2. Bỏ qua phần tử và lấy phần tử thứ ba

Destructure array `books` thành một biến `thirdBook`, bỏ qua hai phần tử đầu tiên.

```javascript
const books = ["Book 1", "Book 2", "Book 3", "Book 4"];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const [, , thirdBook] = books;
console.log(thirdBook); // Book 3
```

</details>

### 3. Tách array lồng nhau

Dưới đây là array `ratings` chứa hai array con. Destructure array này thành hai biến `rating` và `ratingsCount`. Biến `rating` sẽ lưu giá trị `4.19`, còn `ratingsCount` sẽ lưu giá trị `144584`.

```javascript
const ratings = [
    ["rating", 4.19],
    ["ratingsCount", 144584],
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount); // 4.19 144584
```

</details>

### 4. Gán giá trị mặc định khi destructuring

Dưới đây là array `ratingStars`. Destructure array này thành ba biến `fiveStarRatings`, `oneStarRatings`, và `threeStarRatings`. Gán giá trị mặc định `0` cho biến `threeStarRatings`.

```javascript
const ratingStars = [63405, 1808];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings); // 63405 1808 0
```

</details>

## Tóm tắt nhanh

-   Dùng destructuring để tách array/object thành biến.
-   Có thể bỏ qua phần tử, hoán đổi giá trị, hay gán mặc định.
-   Dùng destructuring cho hàm trả array rất gọn.
-   Xử lý nested array bằng destructuring lòng nhau.

Thế là một phần quan trọng trong ES6 mà các em nên rành tay luyện tập để sau này viết code dọn dàng và đẹp hơn nhé!

**Happy coding các em!** ✨

— **Thầy Đạt 🧡**
