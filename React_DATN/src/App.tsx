import { Routes, Route } from "react-router-dom"
import Layout_Web from "./Page/Layout/Layout_Web"
import Contact from "./Page/Contact"
import Bill from "./Page/Bill"
import Cart from "./Page/Cart"
import ProductDetail from "./Page/ProductDetail"
import Checkout from "./Page/Checkout"
import Config from "./Page/Layout/Config"
import HomePage from "./Page"
import Blog from "./Page/Blog"
import Login from "./Page/Login"
import Products from "./Page/Products"
import Blog_details from "./Page/Blog_details"
import Register from "./Page/Register"
import AddProduct from "./Page/Admin/Product/AddProduct"
import Layout_Admin from "./Page/Layout/Layout_Admin"
import ProductList from "./Page/Admin/Product/ProductList"
import UpdateProduct from "./Page/Admin/Product/UpdateProduct"
import UserList from "./Page/Admin/User/UserList"
import AddUser from "./Page/Admin/User/AddUser"
import UpdateUser from "./Page/Admin/User/UpdateUser"
import SizeList from "./Page/Admin/Size/SizeList"
import AdminSizeAdd from "./Page/Admin/Size/AddSize"
import AdminSizeUpdate from "./Page/Admin/Size/UpdateSize"
import ForgotPassword from "./Page/ForgotPassword"
import VerificationCodes from "./Page/VerificationCodes"
import ChangePassword from "./Page/ChangePassword"
import ProductsCategory from "./Page/CategoryProducts"
import CategoryList from "./Page/Admin/Category/CategoryList"
import AddCategory from "./Page/Admin/Category/CategoryAdd"
import UpdateCategory from "./Page/Admin/Category/CategoryUpdate"

import ProductsSize from "./Page/SizeProduct"
import ListColor from "./Page/Admin/colorProduct/listColor"
import CreateColor from "./Page/Admin/colorProduct/createColor"
import UpdateColor from "./Page/Admin/colorProduct/updateColor"
import Dashboard from "./Page/Admin/Dashboard"
import GetAllDeletedProducts from "./Page/Admin/Product/getAllDeletedProducts"
import PrivateRouter from "./Component/PrivateRouter"
import SlideList from "./Page/Admin/Slide/SlideList"
import AddSlide from "./Page/Admin/Slide/AddSlide"
import AddBlog from "./Page/Admin/Blog/AddBlog"
import BlogList from "./Page/Admin/Blog/BlogList"
import UpdateBlog from "./Page/Admin/Blog/UpdateBlog"
import ListNewSletter from "./Page/Admin/NewSletter/listNewSletter"
import EmailSendingForm from "./Page/Admin/NewSletter/EmailSendingForm"
import ListDiscount from "./Page/Admin/Discount/listDiscount"
import CreateDiscount from "./Page/Admin/Discount/createDiscount"
import UpdateDiscount from "./Page/Admin/Discount/updateDiscount"

function App() {
  !window.location.href.includes("checkout") &&
    localStorage.removeItem("infoOrder.shoe")
  !window.location.href.includes("checkout") &&
    localStorage.removeItem("totalPrice.shoe")

  Config()
  return (
    <Routes>
      <Route path="/" element={<Layout_Web />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="bill" element={<Bill />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="checkout/:id" element={<Checkout />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verification-codes" element={<VerificationCodes />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="blog-detail" element={<Blog_details />} /> */}
        <Route path="blog/:id/detail" element={<Blog_details />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog" element={<Blog />} />
        <Route path="category/:id/products" element={<ProductsCategory />} />
        <Route path="size/:id/products" element={<ProductsSize />} />
      </Route>

      <Route
        path="/admin"
        element={
          <PrivateRouter>
            <Layout_Admin />
          </PrivateRouter>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="product/add" element={<AddProduct />} />
        <Route path="product/list" element={<ProductList />} />
        <Route path="product/:id/update" element={<UpdateProduct />} />
        <Route path="category/list" element={<CategoryList />} />
        <Route path="category/add" element={<AddCategory />} />
        <Route path="category/:id/update" element={<UpdateCategory />} />
        <Route path="color/list" element={<ListColor />} />
        <Route path="color/create" element={<CreateColor />} />
        <Route path="color/:id/update" element={<UpdateColor />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verification-codes" element={<VerificationCodes />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="user/list" element={<UserList />} />
        <Route path="user/add" element={<AddUser />} />
        <Route path="user/update/:id" element={<UpdateUser />} />
        <Route path="size/list" element={<SizeList />} />
        <Route path="size/add" element={<AdminSizeAdd />} />
        <Route path="size/:id/update" element={<AdminSizeUpdate />} />
        <Route path="slide/list" element={<SlideList />} />
        <Route path="slide/add" element={<AddSlide />} />
        <Route
          path="restore-product-data"
          element={<GetAllDeletedProducts />}
        />
        <Route path="blog/add" element={<AddBlog />} />
        <Route path="blog/list" element={<BlogList />} />
        <Route path="blog/:id/update" element={<UpdateBlog />} />
        <Route path="new-sletter/list" element={<ListNewSletter />} />
        <Route path="new-sletter/:id/send" element={<EmailSendingForm />} />
        <Route path="discount/list" element={<ListDiscount />} />
        <Route path="discount/create" element={<CreateDiscount />} />
        <Route path="discount/:id/update" element={<UpdateDiscount />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function NotFound() {
  return (
    <div className="mt-56 text-center text-xl">
      <h1>Trang không tồn tại</h1>
      <p>
        Xin lỗi, trang bạn tìm kiếm không tồn tại.(<a href="/">Quay lại</a>)
      </p>
    </div>
  )
}

export default App
