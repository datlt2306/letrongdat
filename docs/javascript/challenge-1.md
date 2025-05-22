# Lập Trình Ứng Dụng Cá Cược Bóng Đá – Bài Thực Hành Đầu Tiên Với Destructuring, Spread & Rest!

Chào các em!  
Sau khi học qua lý thuyết về **array destructuring**, **spread operator** và **rest parameters**, giờ là lúc mình cùng thực hành để “nạp đạn” kiến thức bằng một mini project nhỏ: **Ứng dụng cá cược bóng đá**!

Thầy sẽ hướng dẫn các em thực hiện từng bước cụ thể như trong một bài lab thực tế. Chuẩn bị VS Code và não bộ nhé, bắt đầu nào!


## Dữ liệu đầu vào

Giả sử chúng ta có một object `game` lấy từ API (hoặc hard-code cũng được), có dạng như sau:

```javascript
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
```


## ✅ Nhiệm vụ 1: Tách cầu thủ 2 đội

### 🎯 Mục tiêu:

Tạo 2 mảng `players1` và `players2`, mỗi mảng chứa danh sách cầu thủ của từng đội.

<details>
<summary>Show example solution</summary>

```javascript
const [players1, players2] = game.players;
```
</details>



## ✅ Nhiệm vụ 2: Phân loại thủ môn và cầu thủ đá chính

### 🎯 Mục tiêu:

Trong `players1`, phần tử đầu là thủ môn, phần còn lại là cầu thủ sân.

<details>
<summary>Show example solution</summary>

```javascript
const [gk, ...fieldPlayers] = players1;
```
</details>

- `gk` sẽ là `'Neuer'`.
- `fieldPlayers` là mảng 10 cầu thủ còn lại.



## ✅ Nhiệm vụ 3: Gộp toàn bộ cầu thủ 2 đội

### 🎯 Mục tiêu:

Tạo mảng `allPlayers` chứa đầy đủ 22 cầu thủ.

<details>
<summary>Show example solution</summary>

```javascript
const allPlayers = [...players1, ...players2];
```
</details>



## ✅ Nhiệm vụ 4: Thêm cầu thủ dự bị vào đội 1

### 🎯 Mục tiêu:

Tạo mảng mới `players1Final` chứa toàn bộ cầu thủ đội 1 + 3 cầu thủ dự bị.

<details>
<summary>Show example solution</summary>

```javascript
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
```
</details>



## ✅ Nhiệm vụ 5: Lấy tỉ lệ cá cược từ object `odds`

### 🎯 Mục tiêu:

Tạo 3 biến `team1`, `draw`, `team2` tương ứng với tỉ lệ cá cược.

<details>
<summary>Show example solution</summary>

```javascript
const {
  odds: { team1, x: draw, team2 }
} = game;
```
</details>

- Gán `x` thành `draw` để dễ đọc và sử dụng.



## ✅ Nhiệm vụ 6: Viết hàm `printGoals`

### 🎯 Yêu cầu:

- Nhận vào số lượng tùy ý tên cầu thủ đã ghi bàn.
- In ra tên từng cầu thủ và tổng số bàn thắng.

<details>
<summary>Show example solution</summary>

```javascript
function printGoals(...players) {
  for (const player of players) {
    console.log(player);
  }
  console.log(`${players.length} goals were scored`);
}

// Gọi thử hàm:
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
```
</details>



## ✅ Nhiệm vụ 7: Xác định đội thắng mà không dùng `if/else` hay `?:`

### 🎯 Logic:

Đội có tỉ lệ cược thấp hơn thì khả năng thắng cao hơn.

<details>
<summary>Show example solution</summary>

```javascript
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
```
</details>



Hy vọng các em hoàn thành tốt bài thực hành này và hiểu rõ hơn về cách sử dụng **destructuring**, **spread operator**, và **rest parameters**. Nếu có thắc mắc, đừng ngần ngại hỏi Thầy nhé!

**Happy coding các em!** ✨  
— **Thầy Đạt 🧡**