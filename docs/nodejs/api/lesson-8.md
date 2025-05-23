# 🛠️ Hướng dẫn Đăng ký, Đăng nhập với JWT

Chào các em!  
Hôm nay, Thầy sẽ hướng dẫn các em cách xây dựng chức năng **Đăng ký**, **Đăng nhập** với **JWT** (JSON Web Token). Chúng ta sẽ đi theo flow chuẩn: **Model → Controller → Middleware Validate → Router**. Bắt đầu thôi nào!


## 1. Model: Định nghĩa User với Mongoose

Đầu tiên, chúng ta sẽ tạo một model `User` để quản lý dữ liệu người dùng trong MongoDB. Model này sẽ bao gồm các trường như `name`, `email`, `password`, `role`, `phone`, và các thông tin khác.

::: code-group

```javascript [src/models/userModel.js]
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng cung cấp tên"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Vui lòng cung cấp email"],
      unique: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Vui lòng cung cấp địa chỉ email hợp lệ"],
    },
    password: {
      type: String,
      required: [true, "Vui lòng cung cấp mật khẩu"],
      minlength: [6, "Mật khẩu phải có ít nhất 6 ký tự"],
      select: false, // Không trả về password trong query
    },
    passwordChangedAt: Date,
    role: {
      type: String,
      enum: ["customer", "staff", "admin"],
      default: "customer",
    },
    phone: {
      type: String,
      validate: {
        validator: (v) => /^\d{10}$/.test(v),
        message: (props) => `${props.value} không phải là số điện thoại hợp lệ!`,
      },
    },
    addresses: [
      {
        street: String,
        city: String,
        isDefault: {
          type: Boolean,
          default: false,
        },
      },
    ],
    avatar: String,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
    versionKey: false, // Loại bỏ __v
  }
);

export const User = mongoose.model("User", userSchema);
```
:::
> **Giải thích**:  
> - **`name`**: Tên người dùng, bắt buộc và được trim để loại bỏ khoảng trắng thừa.  
> - **`email`**: Email người dùng, bắt buộc, duy nhất, và phải hợp lệ.  
> - **`password`**: Mật khẩu, bắt buộc, tối thiểu 6 ký tự, không trả về trong query.  
> - **`role`**: Vai trò của người dùng, mặc định là `customer`.  
> - **`phone`**: Số điện thoại, phải có đúng 10 chữ số.  
> - **`addresses`**: Danh sách địa chỉ của người dùng, mỗi địa chỉ có `street`, `city`, và `isDefault`.  
> - **`timestamps`**: Tự động thêm `createdAt` và `updatedAt`.


## 2. Các bước cần làm trước khi viết Controller

Trước khi bắt tay vào viết code cho controller, chúng ta cần xác định rõ các bước cần thực hiện để đảm bảo logic được xây dựng đúng và đầy đủ. Dưới đây là các bước cụ thể:

### 2.1. Đăng ký tài khoản (`signup`)

1. **Nhận dữ liệu từ client**:  
   - Các trường cần nhận: `name`, `email`, `password`, `phone`, `role`.
2. **Kiểm tra dữ liệu đầu vào**:  
   - Đảm bảo tất cả các trường bắt buộc đều có giá trị.
   - Kiểm tra định dạng email và số điện thoại.
3. **Mã hóa mật khẩu**:  
   - Sử dụng thư viện `bcrypt` để mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu.
4. **Lưu người dùng vào cơ sở dữ liệu**:  
   - Sử dụng model `User` để lưu thông tin người dùng.
5. **Trả về phản hồi**:  
   - Nếu thành công, trả về thông báo `User registered successfully`.
   - Nếu có lỗi, trả về thông báo lỗi chi tiết.
::: code-group
```javascript [src/controllers/authController.js]
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

export const signup = async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  try {
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Lưu người dùng vào cơ sở dữ liệu
    const user = await User.create({ name, email, password: hashedPassword, phone, role });

    res.status(201).json({ message: "User registered successfully", data: user });
  } catch (err) {
    res.status(400).json({ message: "Error registering user", error: err.message });
  }
};
```
:::

### 2.2. Đăng nhập (`login`)

1. **Nhận dữ liệu từ client**:  
   - Các trường cần nhận: `email`, `password`.
2. **Tìm người dùng trong cơ sở dữ liệu**:  
   - Sử dụng email để tìm người dùng.
   - Nếu không tìm thấy, trả về lỗi `Invalid credentials`.
3. **Kiểm tra mật khẩu**:  
   - Sử dụng `bcrypt.compare` để so sánh mật khẩu người dùng nhập với mật khẩu đã mã hóa trong cơ sở dữ liệu.
   - Nếu mật khẩu không khớp, trả về lỗi `Invalid credentials`.
4. **Tạo JWT**:  
   - Sử dụng `jsonwebtoken` để tạo token chứa thông tin người dùng (`email`, `role`).
   - Đặt thời gian hết hạn cho token (ví dụ: 1 giờ).
5. **Trả về phản hồi**:  
   - Nếu thành công, trả về token JWT.
   - Nếu có lỗi, trả về thông báo lỗi chi tiết.
::: code-group
```javascript [src/controllers/authController.js]
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tìm người dùng
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

    // Tạo JWT
    const token = jwt.sign({ email: user.email, role: user.role }, "yourSecretKey", { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "Error logging in", error: err.message });
  }
};
```

:::
### 2.3. Lấy thông tin người dùng hiện tại (`getMe`)

1. **Nhận thông tin từ middleware**:  
   - Middleware `verifyJWT` sẽ gắn thông tin người dùng vào `req.user`.
2. **Trả về thông tin người dùng**:  
   - Trả về các thông tin như `email`, `role`, và các trường khác nếu cần.

#### Function cho phần `getMe`
::: code-group
```javascript [src/controllers/authController.js]
export const getMe = async (req, res) => {
  try {
    // Lấy user từ middleware auth
    const user = req.user;

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ message: "Error fetching user info", error: err.message });
  }
};
```

:::

## 4. Router: Định nghĩa các route cho Auth

Dưới đây là file router để định nghĩa các route liên quan đến Auth như `signup`, `login`, và `getMe`.

::: code-group
```javascript [src/routers/auth.js]
import express from "express";
import { signup, login, getMe } from "../controllers/authController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route đăng ký
router.post("/signup", signup);

// Route đăng nhập
router.post("/login", login);

// Route lấy thông tin người dùng hiện tại
router.get("/me", verifyJWT, getMe);

export default router;
```
:::
## 3. Tổng hợp Code
::: code-group
```javascript [controllers/auth.js]
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

// Đăng ký tài khoản
export const signup = async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, phone, role });
    res.status(201).json({ message: "User registered successfully", data: user });
  } catch (err) {
    res.status(400).json({ message: "Error registering user", error: err.message });
  }
};

// Đăng nhập
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email, role: user.role }, "yourSecretKey", { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "Error logging in", error: err.message });
  }
};

// Lấy thông tin người dùng hiện tại
export const getMe = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ message: "Error fetching user info", error: err.message });
  }
};
```
```javascript [routers/auth.js]
import express from "express";
import { signup, login, getMe } from "../controllers/authController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route đăng ký
router.post("/signup", signup);

// Route đăng nhập
router.post("/login", login);

// Route lấy thông tin người dùng hiện tại
router.get("/me", verifyJWT, getMe);

export default router;
```
:::
## 5. Kết luận

Qua bài học này, các em đã được hướng dẫn cách xây dựng chức năng **Đăng ký**, **Đăng nhập**, và **Lấy thông tin người dùng hiện tại** với **JWT**. Chúng ta đã đi qua các bước từ định nghĩa **Model**, viết **Controller**, đến thiết lập **Router**. Đây là một quy trình chuẩn để xây dựng các API bảo mật và hiệu quả.

Hãy áp dụng những kiến thức này vào các dự án thực tế của mình. Nếu có bất kỳ thắc mắc nào, đừng ngần ngại đặt câu hỏi nhé!

**Chúc các em học tốt!** ✨  
— **Thầy Đạt 🧡**
