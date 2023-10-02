import { Routes, Route, Navigate } from "react-router-dom";
import Layout_Web from './Page/Layout/Layout_Web';
import Contact from "./Page/Contact";
import Bill from "./Page/Bill";
import Cart from "./Page/Cart";
import ProductDetail from "./Page/ProductDetail";
import Checkout from "./Page/Checkout";
import Config from "./Page/Layout/Config";
import HomePage from "./Page";
import Blog from "./Page/Blog";
import Login from "./Page/Login";
import Category from "./Page/Category";
import Blog_details from "./Page/Blog_details";
import Register from "./Page/Register";

function App() {
  Config();
  return (
    <Routes>
      <Route path='/' element={<Layout_Web />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<Category />} />
        <Route path="bill" element={<Bill />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="blog-detail" element={<Blog_details />} />
        <Route path="blog" element={<Blog />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function NotFound() {
  return (
    <div className="mt-56 text-center text-xl">
      <h1>Trang không tồn tại</h1>
      <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.(<a href="/">Quay lại</a>)</p>
    </div>
  );
}

export default App;
