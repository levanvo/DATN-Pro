import { Routes, Route, Navigate } from "react-router-dom";
import Layout_Web from "./Page/Layout/Layout_Web";
import Contact from "./Page/Contact";
import Bill from "./Page/Bill";
import Cart from "./Page/Cart";
import ProductDetail from "./Page/ProductDetail";
import Checkout from "./Page/Checkout";
import Config from "./Page/Layout/Config";
import HomePage from "./Page";
import Blog from "./Page/Blog";
import Login from "./Page/Login";
import Products from "./Page/Products";
import Blog_details from "./Page/Blog_details";
import Register from "./Page/Register";
import AddProduct from "./Page/Admin/Product/AddProduct";
import Layout_Admin from "./Page/Layout/Layout_Admin";
import ProductList from "./Page/Admin/Product/ProductList";
import UpdateProduct from "./Page/Admin/Product/UpdateProduct";
import {useState} from "react"
import AdminLogin from "./Page/Login/AdminLogin";
import SizeList from "./Page/Admin/Size/SizeList";
import AdminSizeAdd from "./Page/Admin/Size/AddSize";
import AdminSizeUpdate from "./Page/Admin/Size/UpdateSize";
import ForgotPassword from "./Page/ForgotPassword";
import VerificationCodes from "./Page/VerificationCodes";
import ChangePassword from "./Page/ChangePassword";
import ProductsSize from "./Page/SizeProduct";
import Dashboard from "./Page/Admin/Dashboard";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  Config();
  return (
    <Routes>
      <Route path="/" element={<Layout_Web />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="bill" element={<Bill />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />}/>
        <Route path="verification-codes" element= {<VerificationCodes />}/>
        <Route path="change-password" element={<ChangePassword />}/>
        <Route path="login" element={<Login />} />
        <Route path="blog-detail" element={<Blog_details />} />
        <Route path="blog" element={<Blog />} />
        <Route path="size/:id/products" element={<ProductsSize />} />
      </Route>

      <Route path="/admin" element={isAdminLoggedIn ? <Layout_Admin /> : <AdminLogin />}>
        <Route index element={<Dashboard />}/>
        <Route path="product/add" element={<AddProduct />} />
        <Route path="product/list" element={<ProductList />} />
        <Route path="product/:id/update" element={<UpdateProduct />} />
        <Route path="size/list" element={<SizeList />} />
        <Route path="size/add" element={<AdminSizeAdd />} />
        <Route path="size/:id/update" element={<AdminSizeUpdate />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return (
    <div className="mt-56 text-center text-xl">
      <h1>Trang không tồn tại</h1>
      <p>
        Xin lỗi, trang bạn tìm kiếm không tồn tại.(<a href="/">Quay lại</a>)
      </p>
    </div>
  );
}

export default App;
