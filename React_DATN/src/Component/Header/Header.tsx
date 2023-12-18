import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"
import { UserOutlined } from "@ant-design/icons"
import { message, Modal } from "antd"
import useSearch from '../UseSearch'
import Loading from "../Loading"
import { useGetCartQuery } from '../../Services/Api_cart'
import { IProduct } from '../../Models/interfaces'

interface User {
  username: string
}
const Header = () => {
  const [messageApi, contexHolder] = message.useMessage()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)
  let user: User | any = null
  const userString = localStorage.getItem("user")
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const [cartStatus,setCartStatus]:any=useState(false);
  const { data: getCartById, isLoading, isError } = useGetCartQuery();
  const [cartQuantity,setCartQuantity] = useState<number | null>(null)
  const [cartLocal,setCartLocal] = useState(null)
  const localCartData = localStorage.getItem('cart');

  
  useEffect(() => {
    if ( getCartById) {
      const totalCartLength = getCartById.products.length;
      setCartQuantity(totalCartLength);          
    }
    if (localCartData) {
    setCartLocal(JSON.parse(localCartData).length);
    }
  },[localCartData,getCartById])

  
  if (userString) {
    user = JSON.parse(userString)
  }
  const showLogoutConfirmationModal = () => {
    setIsLogoutModalVisible(true)
  }

  const handleLogout = () => {
    setIsLoggingOut(true) // Show loading animation
    // Xóa token và user khỏi localStorage
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLoggingOut(false) // Hide loading animation
    messageApi.open({
      type: "success",
      content: "Đăng xuất tài khoản thành công",
    })

    setTimeout(() => {
      navigate("/")
      window.location.reload()
    }, 2000)
  }
  const handleLogoutConfirmation = (confirmed: any) => {
    if (confirmed) {
      handleLogout()
    }
    setIsLogoutModalVisible(false)
  }

  const { searchInputRef, handleKeyDown } = useSearch();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedUser = localStorage.getItem('user');
    const cartST:any=localStorage.getItem("orderGuests");
    if (storedUser) {
      // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      const userObj = JSON.parse(storedUser);

      // Lấy _id từ đối tượng user
      const { _id } = userObj;

      // Đặt giá trị _id vào state
      setUserId(_id);
    }
    if(cartST){
      setCartStatus(true)
    }else{
      setCartStatus(false)
    }
  }, []);

  const hasDataGuests=()=>{
    // cartStatus ?
    window.location.href="/order/view/guest"
    // :
    // message.warning("Bạn chưa có đơn hàng nào, hãy mua sản phẩm hoặc đăng kí 1 tài khoản !")
  }

  return (
    <header className="_header-web">
      {contexHolder}
      {isLoggingOut && <Loading />}
      <div className="top-link">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-9 d-none d-md-block">
              <div className="site-option"></div>
              <div className="call-support">
                <p>
                  Liên hệ chúng tôi: <span> (+84) 96 155 6666</span>
                </p>
              </div>
            </div >
            <div className="col-lg-3 col-md-3 position-relative">
              <div className="flex space-x-3 mt-3">
                {/* Thanh tìm kiếm */}
                {

                  <div className="account-menu relative">
                    <input type="checkbox" hidden id='search-webSite' />
                    <label htmlFor="search-webSite"><img className='w-7 active:scale-90 cursor-pointer' src="../../../img/search-main-web.png" alt="" /></label>
                    <form className='form-webSite' action="" >
                      <label htmlFor="search-webSite" className=' float-right'><ImCancelCircle className="w-5 h-5 m-1 hover:rotate-90 duration-200 cursor-pointer" /></label>
                      <h1 className='text-center text-2xl mt-3 text-gray-500 font-bold'>Tìm Kiếm</h1>
                      <input type="text" placeholder=' Bạn đang tìm kiếm gì ?'
                        onKeyDown={handleKeyDown}
                        ref={searchInputRef}
                      />
                    </form>
                    <label htmlFor="search-webSite" className='display-website-search'></label>
                  </div>

                }
                <div className="cart-img">
                  <Link to={"/cart"}>
                      <img
                          className="active:scale-90"
                          src="../../../img/icon-cart.png"
                          alt=""
                        />
                        <span>{token ? cartQuantity : cartLocal}</span>
                  </Link>
                </div>
                {user ? (
                  <div className="account-menu">
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        {user.role == "admin" || user.role == "staff" ? (
                          <div className="relative">
                            <Link
                              className="w-10 h-10 imgUserSelector"
                              to={`/admin`}
                            >
                              <img
                                className="w-10 h-10 rounded-full -mt-2 cursor-pointer imgUserSelector"
                                src={user.imgUrl}
                                alt=""
                              />
                            </Link>
                            <ul className="formSelectUser">
                              <Link to={`/admin`}>
                                <li style={{ cursor: "pointer" }}>Quản trị</li>
                              </Link>
                              <Link to={`/user/${userId}`}>
                                <li style={{ cursor: "pointer" }}>Tài khoản của tôi</li>
                              </Link>
                              <li
                                style={{ cursor: "pointer" }}
                                onClick={showLogoutConfirmationModal}
                              >
                                Đăng xuất
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <div className="relative">
                            <Link
                              className="w-10 h-10 imgUserSelector"
                              to={`/user/${userId}`}
                            >
                              <img
                                className="w-10 h-10 rounded-full -mt-2 cursor-pointer imgUserSelector"
                                src={user.imgUrl}
                                alt=""
                              />
                            </Link>
                            <ul className="formSelectUser">
                              <Link to={`/user/${userId}`}>
                                <li style={{ cursor: "pointer" }}>
                                  Tài khoản của tôi
                                </li>
                              </Link>
                              <li
                                style={{ cursor: "pointer" }}
                                onClick={showLogoutConfirmationModal}
                              >
                                Đăng xuất
                              </li>
                            </ul>
                          </div>
                        )}
                        <li className="text-green-500"></li>
                      </div>
                      <p style={{fontWeight: '600', color: '#232323'}}>{user.username}</p>
                    </div>
                  </div>
                ) : (
                  <div className={`account-menu relative dataGuestsShell`}>
                    <Link to={`/login`}>
                      <UserOutlined
                        style={{ fontSize: "24px", color: "black" }}
                      />
                    </Link>
                    
                    <div className='dataGuests'>
                      <a href="/register" className='text-gray-300 hover:text-gray-100'><p className='text-center mt-[11px] mb-[2px] hover:text-gray-100'>Đăng kí</p></a>
                      <a href="/login" className='text-gray-300 hover:text-gray-100'><p className='text-center mb-[3px] hover:text-gray-100'>Đăng nhập</p></a>
                      <p onClick={()=>hasDataGuests()} className='text-center cursor-pointer hover:text-gray-100'>Đơn hàng đã đặt</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div >
        </div >
      </div >
      <div className="mainmenu-area product-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="/">
                  <img style={{width: 280}}
                    src="../../../img/logo.png"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="mainmenu">
                <nav>
                  <ul style={{marginLeft: '10%'}}>
                    <li>
                      <a href="/">Trang chủ</a>
                    </li>

                    <li>
                      <a href="/products">Sản phẩm</a>
                    </li>

                    <li>
                      <a href="/blog">Blogs</a>
                    </li>

                    <li>
                      <a href="/contact">Liên hệ</a>
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
      <Modal
        title="Xác nhận đăng xuất"
        open={isLogoutModalVisible}
        onOk={() => handleLogoutConfirmation(true)}
        onCancel={() => handleLogoutConfirmation(false)}
        okText={<span className='-ml-[6px]'>Đăng xuất</span>}
        cancelText="Hủy"
        okButtonProps={{ style: { backgroundColor: "red" } }}
      >
        Bạn có chắc chắn muốn đăng xuất không?
      </Modal>
    </header >
  )
}

export default Header