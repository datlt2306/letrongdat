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

## 3. Kết luận

-   Buổi thực hành này giúp bạn hiểu rõ cách xây dựng API CRUD đầy đủ với MongoDB và Mongoose.
-   Việc tổ chức code theo pattern models, controllers, và routers giúp dự án dễ bảo trì và mở rộng.
-   Hãy kiểm tra API bằng Postman để đảm bảo mọi chức năng hoạt động đúng.

Chúc các em học tốt! 🚀
