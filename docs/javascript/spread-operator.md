# Spread Operator trong JavaScript

> Mở Rộng Mảng, Sao Chép Dữ Liệu và Gọi Hàm Thần Thánh

Chào các em, hôm nay thầy sẽ cùng các em tìm hiểu về một tính năng rất hay của JavaScript: **Spread Operator**. Đây là một cú pháp cực kỳ tiện lợi giúp chúng ta làm việc với mảng và đối tượng trở nên dễ dàng, nhanh chóng hơn rất nhiều so với cách viết truyền thống.

## Spread Operator là gì?

Spread operator được ký hiệu bằng ba dấu chấm `...`. Nhiệm vụ chính của nó là “bóc tách” (unpack) tất cả các phần tử của một mảng ra thành các giá trị riêng biệt.  
Nói dễ hiểu thì nó giống như khi chúng ta có một cái hộp đựng nhiều thứ, nhưng cần lấy từng món ra từng cái một, thay vì mang nguyên cả hộp.

## Ví dụ đơn giản: Thêm phần tử vào đầu mảng

Giả sử ta có mảng sau:

```javascript
const arr = [7, 8, 9];
```

Nếu muốn tạo một mảng mới, nhưng thêm vào đầu nó 2 số `1` và `2`, theo cách truyền thống:

```javascript
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
```

Nhưng với spread operator, chúng ta chỉ cần:

```javascript
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray); // [1, 2, 7, 8, 9]
```

> **Mẹo nhỏ**: Nếu không dùng spread operator, mảng sẽ chứa một mảng con:

```javascript
const badArray = [1, 2, arr];
console.log(badArray); // [1, 2, [7, 8, 9]]
```

## Khi nào dùng spread operator?

-   Khi bạn muốn tạo một mảng mới dựa trên mảng cũ, nhưng thêm bớt phần tử.
-   Khi bạn muốn truyền nhiều phần tử trong mảng làm đối số cho hàm.

Ví dụ:

```javascript
const newArray = [1, 2, ...arr];
console.log(...newArray); // 1 2 7 8 9
```

## Ví dụ thực tế với menu nhà hàng

Giả sử ta có một đối tượng `restaurant` với menu chính như sau:

```javascript
restaurant.mainMenu = ["Pizza", "Pasta", "Risotto"];
```

Nếu muốn tạo một menu mới có thêm món `Gnocci`, ta viết:

```javascript
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
```

Điều này giúp ta không làm thay đổi mảng gốc mà tạo ra bản sao mới, rất an toàn khi làm việc với dữ liệu.

## So sánh spread operator và destructuring

-   **Spread operator**: Giúp “bóc tách” phần tử nhưng không tạo biến mới, chỉ giúp viết gọn khi cần nhiều giá trị riêng biệt.
-   **Destructuring**: Tạo biến mới từ các phần tử hoặc thuộc tính.

## Sao chép mảng và hợp nhất mảng

### Tạo bản sao mảng:

```javascript
const mainMenuCopy = [...restaurant.mainMenu];
```

### Gộp 2 mảng:

```javascript
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
```

## Spread operator không chỉ dùng với mảng!

Spread cũng hoạt động với các iterable khác như string, maps, sets, nhưng không áp dụng với object (trước ES2018).

### Ví dụ với string:

```javascript
const str = "Jonas";
const letters = [...str, "", "S"];
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S']
```

## Cách sử dụng spread operator với hàm

Giả sử có hàm gọi món pasta với đúng 3 nguyên liệu. Thay vì truyền từng nguyên liệu riêng biệt, ta dùng spread operator:

```javascript
const orderPasta = function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
};

// Mảng nguyên liệu
const ingredients = [
    prompt("Pasta Ingredient 1?"),
    prompt("Pasta Ingredient 2?"),
    prompt("Pasta Ingredient 3?"),
];

// Gọi hàm với spread operator
orderPasta(...ingredients);
```

## Spread operator trên đối tượng (ES2018 trở lên)

### Sao chép hoặc mở rộng object:

```javascript
const newRestaurant = {
    ...restaurant,
    founder: "Giuseppe",
    foundedIn: 1998,
};
console.log(newRestaurant);
```

### Sao chép object:

```javascript
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";

console.log(restaurant.name); // Vẫn là 'Classico Italiano'
console.log(restaurantCopy.name); // 'Ristorante Roma'
```

## Tổng kết nhanh

-   Spread operator (`...`) giúp mở rộng phần tử của mảng hoặc iterable thành các giá trị riêng biệt.
-   Dùng để tạo mảng mới, gộp mảng, sao chép mảng và truyền nhiều tham số vào hàm dễ dàng.
-   Spread cũng dùng được với string, maps, sets, và object (từ ES2018).
-   Là công cụ cực kỳ hữu ích giúp code sạch sẽ, dễ đọc và ngắn gọn hơn rất nhiều so với cách làm thủ công.

## Bài tập thực hành

### 1. Tạo mảng `bookAuthors` từ các tác giả của hai sách đầu tiên

Mỗi object trong mảng `books` có thuộc tính `author`, chứa một mảng tên tác giả hoặc một chuỗi nếu chỉ có một tác giả. Tạo mảng `bookAuthors` chứa tất cả tác giả của hai sách đầu tiên.

```javascript
const books = [
    { title: "Book 1", author: ["Author A", "Author B"] },
    { title: "Book 2", author: "Author C" },
    // ...other books
];
// {...}
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors); // ['Author A', 'Author B', 'Author C']
```

</details>

### 2. Viết hàm `spellWord`

Hàm `spellWord` nhận một chuỗi làm tham số và in ra từng chữ cái cách nhau bởi dấu cách.

#### Ví dụ:

```javascript
spellWord("JavaScript");
// Expected output: "J a v a S c r i p t"
```

<details>
<summary>Hiển thị lời giải mẫu</summary>

```javascript
function spellWord(word) {
    console.log(...word);
}
```

</details>

Các em hãy nhớ áp dụng ngay vào project của mình để cảm nhận sức mạnh của spread operator nhé! Nếu có thắc mắc hay muốn thầy giải thích thêm phần nào, cứ hỏi thầy nha!

**Happy coding các em!** ✨

— **Thầy Đạt 🧡**
