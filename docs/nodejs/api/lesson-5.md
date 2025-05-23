# Xây dựng CRUD API sản phẩm

## Mục tiêu

-   Thực hành xây dựng API CRUD sản phẩm đầy đủ với MongoDB và Mongoose.
-   Hiểu cách tổ chức code với models, controllers, và routers.
-   Làm quen với cách xử lý lỗi và phản hồi trạng thái HTTP.

## Yêu cầu

1. **Tạo cấu trúc thư mục**

    - Tạo các thư mục `models`, `controllers`, và `routers` trong thư mục `src`.
    - Tạo file `Product.js` trong thư mục `models` để định nghĩa schema và model cho sản phẩm.
    - Tạo file `productController.js` trong thư mục `controllers` để xử lý logic CRUD.
    - Tạo file `products.js` trong thư mục `routers` để định nghĩa các endpoint API.

2. **Định nghĩa schema và model cho sản phẩm**

    - Các trường cần có:
        - `name` (String, bắt buộc, tối đa 200 ký tự).
        - `slug` (String, duy nhất, viết thường).
        - `description` (String, bắt buộc).
        - `price` (Number, bắt buộc, không âm).
        - `discountPrice` (Number, không âm).
        - `images` (Array of Strings).
        - `stock` (Number, bắt buộc, không âm, mặc định là 0).
        - `sku` (String, bắt buộc, duy nhất).
        - `status` (Enum: `draft`, `published`, `archived`, mặc định là `draft`).
        - `featured` (Boolean, mặc định là `false`).
        - `ratings` (Number, từ 0 đến 5, làm tròn đến 1 chữ số thập phân).
    - Sử dụng Mongoose để tạo model từ schema.

3. **Tách logic xử lý CRUD vào controller**

    - Tạo các hàm xử lý trong controller:
        - Lấy danh sách sản phẩm (`GET /api/products`).
        - Lấy chi tiết sản phẩm theo `id` (`GET /api/products/:id`).
        - Thêm sản phẩm mới (`POST /api/products`).
        - Cập nhật sản phẩm theo `id` (`PUT /api/products/:id`).
        - Xóa sản phẩm theo `id` (`DELETE /api/products/:id`).

4. **Tạo router cho sản phẩm**

    - Định nghĩa các endpoint CRUD trong file router.
    - Sử dụng các hàm từ controller để xử lý logic.

5. **Tích hợp router vào ứng dụng chính**

    - Import router từ `src/routers/products.js` vào `src/routers/index.js`.
    - Gắn router vào đường dẫn `/products`.

6. **Kiểm tra API**
    - Sử dụng Postman hoặc công cụ tương tự để kiểm tra các endpoint CRUD.

## Hướng dẫn

### Thiết lập cấu trúc thư mục

```
src/
├── models/
│   └── Product.js          # Định nghĩa schema và model cho sản phẩm
├── controllers/
│   └── productController.js # Xử lý logic CRUD cho sản phẩm
├── routers/
│   └── products.js         # Định nghĩa các endpoint API cho sản phẩm
└── app.js                  # Tệp chính khởi chạy ứng dụng
```

### Định nghĩa Schema và Model

**src/models/Product.js**

```javascript
// filepath: FPL-WEB503/src/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Tên sản phẩm là bắt buộc"],
            trim: true,
            maxlength: [200, "Tên sản phẩm không được vượt quá 200 ký tự"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: [true, "Mô tả sản phẩm là bắt buộc"],
        },
        price: {
            type: Number,
            required: [true, "Giá sản phẩm là bắt buộc"],
            min: [0, "Giá sản phẩm không được âm"],
        },
        discountPrice: {
            type: Number,
            min: [0, "Giá khuyến mãi không được âm"],
        },
        images: [String],
        stock: {
            type: Number,
            required: [true, "Số lượng tồn kho là bắt buộc"],
            min: [0, "Số lượng tồn kho không được âm"],
            default: 0,
        },
        sku: {
            type: String,
            required: [true, "SKU sản phẩm là bắt buộc"],
            unique: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["draft", "published", "archived"],
            default: "draft",
        },
        featured: {
            type: Boolean,
            default: false,
        },
        ratings: {
            type: Number,
            default: 0,
            min: [0, "Đánh giá thấp nhất là 0"],
            max: [5, "Đánh giá cao nhất là 5"],
            set: (val) => Math.round(val * 10) / 10, // Làm tròn đến 1 chữ số thập phân
        },
    },
    { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
```

### Tách Controller để quản lý logic

## 3. Các bước cần làm trước khi viết Controller

Trước khi bắt tay vào viết code cho controller, chúng ta cần xác định rõ các bước cần thực hiện để đảm bảo logic được xây dựng đúng và đầy đủ. Dưới đây là các bước cụ thể:

### 3.1. Lấy danh sách sản phẩm (`GET /api/products`)

1. **Kết nối cơ sở dữ liệu**:  
   - Sử dụng model `Product` để truy vấn danh sách sản phẩm.
2. **Xử lý kết quả**:  
   - Nếu có sản phẩm, trả về danh sách sản phẩm.
   - Nếu xảy ra lỗi, trả về lỗi server.

---

### 3.2. Lấy chi tiết sản phẩm (`GET /api/products/:id`)

1. **Nhận `id` từ URL**:  
   - Lấy `id` từ `req.params`.
2. **Tìm sản phẩm trong cơ sở dữ liệu**:  
   - Sử dụng `Product.findById` để tìm sản phẩm theo `id`.
3. **Xử lý kết quả**:  
   - Nếu tìm thấy sản phẩm, trả về thông tin sản phẩm.
   - Nếu không tìm thấy, trả về lỗi `404 Not Found`.
   - Nếu xảy ra lỗi, trả về lỗi server.

---

### 3.3. Thêm sản phẩm mới (`POST /api/products`)

1. **Nhận dữ liệu từ client**:  
   - Các trường cần nhận: `name`, `slug`, `description`, `price`, `discountPrice`, `images`, `stock`, `sku`, `status`, `featured`, `ratings`.
2. **Kiểm tra dữ liệu đầu vào**:  
   - Đảm bảo các trường bắt buộc đều có giá trị.
   - Kiểm tra các ràng buộc như `price >= 0`, `stock >= 0`, `ratings` từ 0 đến 5.
3. **Lưu sản phẩm vào cơ sở dữ liệu**:  
   - Sử dụng model `Product` để lưu thông tin sản phẩm.
4. **Trả về phản hồi**:  
   - Nếu thành công, trả về thông tin sản phẩm vừa thêm.
   - Nếu có lỗi, trả về thông báo lỗi chi tiết.

---

### 3.4. Cập nhật sản phẩm (`PUT /api/products/:id`)

1. **Nhận `id` từ URL và dữ liệu từ client**:  
   - Lấy `id` từ `req.params` và dữ liệu cập nhật từ `req.body`.
2. **Tìm và cập nhật sản phẩm trong cơ sở dữ liệu**:  
   - Sử dụng `Product.findByIdAndUpdate` để cập nhật sản phẩm theo `id`.
   - Đảm bảo chạy các validator khi cập nhật.
3. **Xử lý kết quả**:  
   - Nếu cập nhật thành công, trả về thông tin sản phẩm đã cập nhật.
   - Nếu không tìm thấy sản phẩm, trả về lỗi `404 Not Found`.
   - Nếu xảy ra lỗi, trả về thông báo lỗi chi tiết.

---

### 3.5. Xóa sản phẩm (`DELETE /api/products/:id`)

1. **Nhận `id` từ URL**:  
   - Lấy `id` từ `req.params`.
2. **Tìm và xóa sản phẩm trong cơ sở dữ liệu**:  
   - Sử dụng `Product.findByIdAndDelete` để xóa sản phẩm theo `id`.
3. **Xử lý kết quả**:  
   - Nếu xóa thành công, trả về thông báo thành công.
   - Nếu không tìm thấy sản phẩm, trả về lỗi `404 Not Found`.
   - Nếu xảy ra lỗi, trả về lỗi server.

---

## 4. Tách Controller để quản lý logic

Sau khi xác định rõ các bước cần làm, chúng ta sẽ viết code cho các chức năng trong file controller.

**src/controllers/productController.js**

```javascript
// filepath: FPL-WEB503/src/controllers/productController.js
import Product from "../models/Product";

// Lấy danh sách sản phẩm
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};

// Lấy chi tiết sản phẩm
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};

// Thêm sản phẩm mới
export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: "Lỗi khi thêm sản phẩm", message: err.message });
    }
};

// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: "Lỗi khi cập nhật sản phẩm", message: err.message });
    }
};

// Xóa sản phẩm
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};
```

### Sử dụng Controller trong Router

**src/routers/products.js**

```javascript
// filepath: FPL-WEB503/src/routers/products.js
import { Router } from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController";

const routeProduct = Router();

// Lấy danh sách sản phẩm
routeProduct.get("/", getProducts);

// Lấy chi tiết sản phẩm
routeProduct.get("/:id", getProductById);

// Thêm sản phẩm mới
routeProduct.post("/", createProduct);

// Cập nhật sản phẩm
routeProduct.put("/:id", updateProduct);

// Xóa sản phẩm
routeProduct.delete("/:id", deleteProduct);

export default routeProduct;
```

### Import router vào file `routers/index.js`

Để sử dụng các router đã tạo, bạn cần import chúng vào file `routers/index.js` và cấu hình như sau:

**src/routers/index.js**

```javascript
// filepath: FPL-WEB503/src/routers/index.js
import { Router } from "express";
import routePost from "./posts";
import routeProduct from "./products";

const router = Router();

// Sử dụng router cho bài viết
router.use("/posts", routePost);

// Sử dụng router cho sản phẩm
router.use("/products", routeProduct);

export default router;
```

---

## 4. Test API với Postman và Dữ liệu Fake

### 4.1. Dữ liệu Fake

Dưới đây là một số dữ liệu mẫu để kiểm tra API:

#### Thêm sản phẩm mới (`POST /api/products`)

- **Body** (JSON):

```json
{
  "name": "Laptop Dell XPS 13",
  "slug": "laptop-dell-xps-13",
  "description": "Laptop cao cấp với thiết kế mỏng nhẹ.",
  "price": 35000,
  "discountPrice": 32000,
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  "stock": 10,
  "sku": "DELL-XPS-13",
  "status": "published",
  "featured": true,
  "ratings": 4.5
}
```

- **Kết quả**:

```json
{
  "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
  "name": "Laptop Dell XPS 13",
  "slug": "laptop-dell-xps-13",
  "description": "Laptop cao cấp với thiết kế mỏng nhẹ.",
  "price": 35000,
  "discountPrice": 32000,
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  "stock": 10,
  "sku": "DELL-XPS-13",
  "status": "published",
  "featured": true,
  "ratings": 4.5,
  "createdAt": "2023-09-01T12:00:00.000Z",
  "updatedAt": "2023-09-01T12:00:00.000Z"
}
```

---

#### Lấy danh sách sản phẩm (`GET /api/products`)

- **Kết quả**:

```json
[
  {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "name": "Laptop Dell XPS 13",
    "slug": "laptop-dell-xps-13",
    "price": 35000,
    "stock": 10,
    "status": "published",
    "ratings": 4.5
  },
  {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j2",
    "name": "iPhone 14 Pro Max",
    "slug": "iphone-14-pro-max",
    "price": 45000,
    "stock": 5,
    "status": "published",
    "ratings": 4.8
  }
]
```

---

#### Lấy chi tiết sản phẩm (`GET /api/products/:id`)

- **URL**: `http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1`

- **Kết quả**:

```json
{
  "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
  "name": "Laptop Dell XPS 13",
  "slug": "laptop-dell-xps-13",
  "description": "Laptop cao cấp với thiết kế mỏng nhẹ.",
  "price": 35000,
  "discountPrice": 32000,
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  "stock": 10,
  "sku": "DELL-XPS-13",
  "status": "published",
  "featured": true,
  "ratings": 4.5,
  "createdAt": "2023-09-01T12:00:00.000Z",
  "updatedAt": "2023-09-01T12:00:00.000Z"
}
```

---

#### Cập nhật sản phẩm (`PUT /api/products/:id`)

- **URL**: `http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1`

- **Body** (JSON):

```json
{
  "price": 34000,
  "stock": 15
}
```

- **Kết quả**:

```json
{
  "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
  "name": "Laptop Dell XPS 13",
  "slug": "laptop-dell-xps-13",
  "description": "Laptop cao cấp với thiết kế mỏng nhẹ.",
  "price": 34000,
  "discountPrice": 32000,
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  "stock": 15,
  "sku": "DELL-XPS-13",
  "status": "published",
  "featured": true,
  "ratings": 4.5,
  "createdAt": "2023-09-01T12:00:00.000Z",
  "updatedAt": "2023-09-01T12:30:00.000Z"
}
```

---

#### Xóa sản phẩm (`DELETE /api/products/:id`)

- **URL**: `http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1`

- **Kết quả**:

```json
{
  "success": true
}
```

---

## 5. Tóm tắt

- **Dữ liệu Fake**: Sử dụng các mẫu JSON để kiểm tra các endpoint CRUD.
- **Test Postman**: Kiểm tra các endpoint `/api/products` với các phương thức `GET`, `POST`, `PUT`, và `DELETE`.
- **Kết quả**: Đảm bảo API hoạt động đúng với các yêu cầu CRUD.

Chúc các em học tốt! 🚀  
— **Thầy Đạt 🧡**
