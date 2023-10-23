import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"
import { UserOutlined } from "@ant-design/icons"
import { message } from "antd"
interface User {
  username: string;
  // Các thuộc tính khác của người dùng (nếu có)
}
const Header = ({ onSearch }) => {
  const [messageApi, contexHolder] = message.useMessage()
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  let user: User | null = null; // Khởi tạo user là null
  const userString = localStorage.getItem("user");

  if (userString) {
    user = JSON.parse(userString);
  }

  const handleLogout = () => {
    setIsLoggingOut(true);

    messageApi.open({
      type: "success",
      content: "Đăng xuất tài khoản thành công"
    })
    setTimeout(() => {
      // Xóa token và user khỏi localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggingOut(false); // Tắt loading sau khi hoàn thành logout
    }, 1500);
  };
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searchKeyword", searchKeyword)
    onSearch(searchKeyword);
  };

  return (
    <header>
      {contexHolder}
      <div className="mainmenu-area product-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="index.html">
                  <Link to={`/`}><img src="../../../img/Logo_DATN.png" alt="" /></Link >
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mainmenu">
                <nav>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/products">Sản phẩm</a>
                    </li>
                    <li >
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 dashboard">
              {/* Thanh tìm kiếm */}
              <div className="searchBar">
                <input type="checkbox" hidden id='search-webSite' />
                <label htmlFor="search-webSite"><img className='w-8 active:scale-90 cursor-pointer' src="../../../img/search-main-web.png" alt="" /></label>
                <form className='form-webSite' action="" onSubmit={handleSearch}>
                  <label htmlFor="search-webSite" className=' float-right'><ImCancelCircle className="w-5 h-5 m-1 hover:rotate-90 duration-200 cursor-pointer" /></label>
                  <h1 className='text-center text-2xl mt-3 text-gray-500 font-bold'>Tìm Kiếm</h1>
                  <input type="text" placeholder=' Bạn đang tìm kiếm gì ?' value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)} />
                </form>
                <label htmlFor="search-webSite" className='display-website-search'></label>
              </div>
              {user ? (<div className="account-menu">
                <span>{user.username}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>) : (
                <div className="account-menu">
                  <Link to={`/login`}><UserOutlined style={{ fontSize: "30px", color: "#232323" }} /></Link>
                </div>
              )
              }

              <div className="cart-menu">
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <img src="img/icon-cart.png" style={{ width: "23px" }} alt="" /> <span>2</span>{" "}
                    </a>
                    <div className="cart-info">
                      <ul>
                        <li>
                          <div className="cart-img">
                            <img src="img/cart/1.png" alt="" />
                          </div>
                          <div className="cart-details">
                            <a href="#">Fusce aliquam</a>
                            <p>1 x $174.00</p>
                          </div>
                          <div className="btn-edit" />
                          <div className="btn-remove" />
                        </li>
                        <li>
                          <div className="cart-img">
                            <img src="img/cart/2.png" alt="" />
                          </div>
                          <div className="cart-details">
                            <a href="#">Fusce aliquam</a>
                            <p>1 x $777.00</p>
                          </div>
                          <div className="btn-edit" />
                          <div className="btn-remove" />
                        </li>
                      </ul>
                      <h3>
                        Subtotal: <span> $951.00</span>
                      </h3>
                      <a href="checkout.html" className="checkout">
                        checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mobile-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Women</a>
                      <ul>
                        <li>
                          <a href="#">Dresses</a>
                          <ul>
                            <li>
                              <a href="#">Coctail</a>
                            </li>
                            <li>
                              <a href="#">day</a>
                            </li>
                            <li>
                              <a href="#">evening</a>
                            </li>
                            <li>
                              <a href="#">sports</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">shoes</a>
                          <ul>
                            <li>
                              <a href="#">Sports</a>
                            </li>
                            <li>
                              <a href="#">run</a>
                            </li>
                            <li>
                              <a href="#">sandals</a>
                            </li>
                            <li>
                              <a href="#">boots</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">handbags</a>
                          <ul>
                            <li>
                              <a href="#">Blazers</a>
                            </li>
                            <li>
                              <a href="#">table</a>
                            </li>
                            <li>
                              <a href="#">coats</a>
                            </li>
                            <li>
                              <a href="#">kids</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">clothing</a>
                          <ul>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">coats</a>
                            </li>
                            <li>
                              <a href="#">Jackets</a>
                            </li>
                            <li>
                              <a href="#">jeans</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Men</a>
                      <ul>
                        <li>
                          <a href="#">Bags</a>
                          <ul>
                            <li>
                              <a href="#">Bootees bag</a>
                            </li>
                            <li>
                              <a href="#">Blazers</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">clothing</a>
                          <ul>
                            <li>
                              <a href="#">coats</a>
                            </li>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Lingerie</a>
                          <ul>
                            <li>
                              <a href="#">Bands</a>
                            </li>
                            <li>
                              <a href="#">Furniture</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Foorwear</a>
                      <ul>
                        <li>
                          <a href="#">footwear men</a>
                          <ul>
                            <li>
                              <a href="#">gifts</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">footwear women</a>
                          <ul>
                            <li>
                              <a href="#">boots</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Jewellery</a>
                      <ul>
                        <li>
                          <a href="#">Rings</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about-us.html">About us</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="my-account.html">My account</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop list</a>
                        </li>
                        <li>
                          <a href="single-product.html">Single Shop</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="login.html">login page</a>
                        </li>
                        <li>
                          <a href="register.html">register page</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header