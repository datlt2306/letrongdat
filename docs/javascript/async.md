# Bất đồng bộ trong JavaScript

## Giới thiệu về lập trình bất đồng bộ

JavaScript là ngôn ngữ chạy đơn luồng (single-threaded), nhưng có khả năng xử lý bất đồng bộ nhờ Event Loop. Lập trình bất đồng bộ cho phép thực hiện các tác vụ mất nhiều thời gian (như network requests, đọc file, truy vấn database) mà không chặn luồng chính.

## Callbacks

Callbacks là phương pháp truyền thống để xử lý bất đồng bộ trong JavaScript.

```javascript
console.log("Bắt đầu");

setTimeout(function () {
    console.log("Đã hoàn thành sau 2 giây");
}, 2000);

console.log("Đang xử lý...");

// Output:
// Bắt đầu
// Đang xử lý...
// Đã hoàn thành sau 2 giây
```

### Callback Hell

Khi cần thực hiện nhiều tác vụ bất đồng bộ tuần tự, code có thể trở nên phức tạp và khó đọc, được gọi là "callback hell" hay "pyramid of doom":

```javascript
getUser(userId, function (user) {
    getProfile(user.id, function (profile) {
        getPermissions(profile.id, function (permissions) {
            getSettings(permissions.id, function (settings) {
                // Xử lý dữ liệu
                console.log(settings);

                // Callback hell - code lồng nhau nhiều tầng
            });
        });
    });
});
```

## Promises

Promises được giới thiệu trong ES6 để giải quyết vấn đề callback hell. Một Promise đại diện cho một giá trị có thể chưa sẵn sàng ngay lập tức nhưng sẽ có trong tương lai.

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Thực hiện tác vụ bất đồng bộ
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Thành công!"); // Hoàn thành với kết quả
        } else {
            reject("Đã xảy ra lỗi!"); // Hoàn thành với lỗi
        }
    }, 2000);
});

myPromise
    .then((result) => {
        console.log(result); // "Thành công!"
        return "Bước tiếp theo";
    })
    .then((nextResult) => {
        console.log(nextResult); // "Bước tiếp theo"
    })
    .catch((error) => {
        console.error(error); // Xử lý lỗi
    })
    .finally(() => {
        console.log("Hoàn thành bất kể thành công hay thất bại");
    });
```

### Promise chaining

Thay vì callback hell, chúng ta có thể sử dụng Promise chaining:

```javascript
getUser(userId)
    .then((user) => getProfile(user.id))
    .then((profile) => getPermissions(profile.id))
    .then((permissions) => getSettings(permissions.id))
    .then((settings) => {
        console.log(settings);
    })
    .catch((error) => {
        console.error("Đã xảy ra lỗi:", error);
    });
```

### Promise.all và Promise.race

```javascript
// Promise.all: chờ tất cả các promise hoàn thành
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(([user, posts, comments]) => {
        // user, posts, comments đều đã có sẵn
        console.log(user, posts, comments);
    })
    .catch((error) => {
        // Nếu bất kỳ promise nào bị reject
        console.error(error);
    });

// Promise.race: hoàn thành khi promise đầu tiên hoàn thành
Promise.race([fetchData(), timeout(5000)])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Timeout hoặc lỗi:", error);
    });
```

## Async/Await

Async/await được giới thiệu trong ES2017, giúp code bất đồng bộ trông giống như code đồng bộ, dễ đọc và dễ debug hơn.

```javascript
async function getUserData() {
    try {
        const user = await getUser(userId);
        const profile = await getProfile(user.id);
        const permissions = await getPermissions(profile.id);
        const settings = await getSettings(permissions.id);

        console.log(settings);
        return settings;
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    }
}

// Gọi hàm async
getUserData().then((settings) => {
    console.log("Hoàn thành với:", settings);
});
```

### Xử lý đồng thời với async/await

```javascript
async function fetchAllData() {
    try {
        // Bắt đầu tất cả các request cùng lúc
        const userPromise = fetchUser();
        const postsPromise = fetchPosts();
        const commentsPromise = fetchComments();

        // Đợi tất cả hoàn thành
        const user = await userPromise;
        const posts = await postsPromise;
        const comments = await commentsPromise;

        return { user, posts, comments };
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}

// Hoặc sử dụng với Promise.all
async function fetchAllDataConcurrently() {
    try {
        const [user, posts, comments] = await Promise.all([
            fetchUser(),
            fetchPosts(),
            fetchComments(),
        ]);

        return { user, posts, comments };
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}
```

## Ví dụ thực tế: Fetch API

Fetch API là một interface hiện đại để thực hiện HTTP requests:

```javascript
// Sử dụng Promises
fetch("https://api.example.com/data")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });

// Sử dụng async/await
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
```

## Code Playground

Hãy thử nghiệm với các phương pháp xử lý bất đồng bộ:

<div class="code-playground">
<iframe src="https://stackblitz.com/edit/js-playground-polytuts-async?embed=1&file=index.js&hideNavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>
</div>

## Bài tập thực hành

1. Viết một hàm sử dụng Promise để mô phỏng việc lấy dữ liệu từ server
2. Chuyển đổi một chuỗi callback thành Promise chain
3. Implement một function sử dụng async/await để lấy dữ liệu từ nhiều API

<div class="progress-tracker">
<input type="checkbox" id="completed-async" name="completed-async">
<label for="completed-async">Đánh dấu bài học này là đã hoàn thành</label>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('completed-async');
  
  if (localStorage.getItem('completed-async') === 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    localStorage.setItem('completed-async', checkbox.checked);
    updateOverallProgress();
  });
  
  function updateOverallProgress() {
    const jsLessons = [
      'completed-intro',
      'completed-setup',
      'completed-variables',
      'completed-loops',
      'completed-functions',
      'completed-objects-arrays',
      'completed-async'
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
