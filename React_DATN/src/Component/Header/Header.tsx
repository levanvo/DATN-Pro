import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"
import { UserOutlined } from "@ant-design/icons"
import { message } from "antd"
interface User {
  username: string;
  // Các thuộc tính khác của người dùng (nếu có)
}
const Header = ({ onSearch }: any) => {
  const [messageApi, contexHolder] = message.useMessage()
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  let user: User | null = null; // Khởi tạo user là null
  const userString = localStorage.getItem("user");
  const VerifyAccount = localStorage.getItem("token");

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

  const handleSearch = (e: any) => {
    e.preventDefault();
    onSearch(searchKeyword);
  };

  return (
    <header>
      {contexHolder}
      <div className="top-link">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-3 col-md-9 d-none d-md-block">
              <div className="site-option">
                <ul>
                  <li className="currency">
                    <a href="#">
                      USD <i className="fa fa-angle-down" />{" "}
                    </a>
                    <ul className="sub-site-option">
                      <li>
                        <a href="#">Eur</a>
                      </li>
                      <li>
                        <a href="#">Usd</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="call-support">
                <p>
                  Liên hệ chúng tôi: <span> (+84) 96 155 6666</span>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 position-relative">
              <div className="flex space-x-3 mt-3">
                {/* Thanh tìm kiếm */}
                {
                  window.location.href == "http://localhost:5173/" ?
                    <div className="account-menu relative">
                      <input type="checkbox" hidden id='search-webSite' />
                      <label htmlFor="search-webSite"><img className='w-7 active:scale-90 cursor-pointer' src="../../../img/search-main-web.png" alt="" /></label>
                      <form className='form-webSite' action="" onSubmit={handleSearch}>
                        <label htmlFor="search-webSite" className=' float-right'><ImCancelCircle className="w-5 h-5 m-1 hover:rotate-90 duration-200 cursor-pointer" /></label>
                        <h1 className='text-center text-2xl mt-3 text-gray-500 font-bold'>Tìm Kiếm</h1>
                        <input type="text" placeholder=' Bạn đang tìm kiếm gì ?' value={searchKeyword}
                          onChange={(e) => setSearchKeyword(e.target.value)} />
                      </form>
                      <label htmlFor="search-webSite" className='display-website-search'></label>
                    </div>
                    :
                    ""
                }
                <div className="cart-img">
                  {VerifyAccount ?
                    <a href="/cart"><img className='active:scale-90' src="img/icon-cart.png" alt="" /></a>
                    :
                    <Link to={`/login`}><img className='active:scale-90' src="img/icon-cart.png" alt="" /></Link>
                  }

                </div>
                {user ?
                  (
                    <div className="account-menu">
                      <Link to={`/admin`}>{user.username}</Link>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )
                  :
                  (
                    <div className="account-menu">
                      <Link to={`/login`}><UserOutlined style={{ fontSize: "24px", color: "black" }} /></Link>
                      
                      {/* <div className="mainmenu-area product-items h-10 ">
                        <div className="mainmenu h-10 ">
                          <nav>
                            <ul>
                              <li>
                                <a href="#" className='h-10 text-xs p-0 bg-white'><UserOutlined style={{ fontSize: "24px", color: "black" }} /></a>
                                <div className="sub-menu pages">
                                  <span>
                                    <a href="/contact">Liên hệ chúng tôi</a>
                                  </span>
                                  <span>
                                    <a href="/blog">Lưu trữ nguồn</a>
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div> */}

                    </div>
                  )
                }


              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainmenu-area product-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="/">
                  <img className='w-36 h-[140px] mx-auto' src="../../../img/Logo DATN.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="mainmenu">
                <nav>
                  <ul>
                    <li>
                      <a href="/">Trang chủ</a>

                    </li>

                    <li>
                      <a href="/products">Sản phẩm</a>
                    </li>

                    <li className="mega-jewellery">
                      <a href="/">Jewellery</a>
                    </li>
                    <li>
                      <a href="/">accessories</a>
                    </li>
                    <li>
                      <a href="#">Khác</a>
                      <div className="sub-menu pages">
                        <span>
                          <a href="/contact">Liên hệ chúng tôi</a>
                        </span>
                        <span>
                          <a href="/blog">Lưu trữ nguồn</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mobile-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="/">Trang chủ</a>

                    </li>

                    <li>
                      <a href="/products">Sản phẩm</a>
                    </li>

                    <li className="mega-jewellery">
                      <a href="/">Jewellery</a>
                    </li>
                    <li>
                      <a href="/">accessories</a>
                    </li>
                    <li>
                      <a href="#">Khác</a>
                      <div className="sub-menu pages">
                        <span>
                          <a href="/contact">Liên hệ chúng tôi</a>
                        </span>
                        <span>
                          <a href="/blog">Lưu trữ nguồn</a>
                        </span>
                      </div>
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