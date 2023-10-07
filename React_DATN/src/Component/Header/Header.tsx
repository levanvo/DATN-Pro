import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import "../../App.scss"
import { CiUser } from "react-icons/Ci";
import {ImCancelCircle} from "react-icons/im"
import { getLocalStorage, setLocalStorage } from '../../Handle/Oauth-Services/LocalStorage';

const Header = () => {
    const [getUser, setUser] = useState({});
    const [isSearchVisible, setSearchVisible] = useState(false);

    
    // window.addEventListener('scroll', function () {
    //     let headerScroll:any = document.querySelector('.scroll_header');
    //     let header_shell:any = document.querySelector('.mainmenu-area');
    //     let imageBanner:any = document.querySelector('.image-banner');
    //     if (window.scrollY >= 200) {
    //         headerScroll.style.marginTop = '-5px';
    //         imageBanner.style.height = '123px';
    //         imageBanner.style.marginTop = '12px';
    //         header_shell.style.marginTop = "-10px"
    //     } else {
    //         headerScroll.style.marginTop = '0px';
    //         imageBanner.style.height = '134px';
    //         imageBanner.style.marginTop = '2px';
    //         header_shell.style.height = "81px"
    //         header_shell.style.marginTop = "0px"
    //     }
    // });
    useEffect(() => {
        const dataUser = getLocalStorage("shoes.dataUser");
        if (dataUser != undefined) {
            setUser(dataUser);
        } else {
            console.log("Võ-Lê: Đã có lỗi gì đó xảy ra trong localStorage !!!");
        };
        console.log("Position: ", getUser.role ? getUser.role : "khách lạ !");
    }, [])
    function CheckRoleUser() {
        return (
            <div className="relative ">
                <img className='user-selector cursor-pointer' src={getUser.imgUrl} alt="" />
                <div className='slelector-user'>
                    <Link to={`/admin`}><p>Quản lí</p></Link>
                    <Link to={`/admin`}><p>Cài đặt</p></Link>
                    <p onClick={() => LogOut()} className='cursor-pointer'>Đăng xuất</p>
                </div>
            </div>
        )
    };
    function LogOut() {
        setLocalStorage("shoes.dataUser", "");
        window.location.reload();
        alert("Bạn đã đăng xuất.");
    };
    return (
        <div className="">
            <div className='_header-web'>
                <div className="mainmenu-area product-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className=" py-5 logo w-[90px] h-[50px]">
                                    <a href="/">
                                        <img className=" image-banner" src="../../../img/Logo DATN.png" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className='flex'>
                                    <div className="mainmenu container">
                                        <nav>
                                            <ul>
                                                <li><a href="/">Trang Chủ</a></li>
                                                <li ><a href="products">Sản Phẩm</a></li>
                                                <li><a href="blog">Tin Tức</a></li>
                                                <li><a href="contact">Liên Hệ</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* Thanh tìm kiếm */}
                                    <div className="account-menu py-4 relative">
                                        <input type="checkbox" hidden id='search-webSite'/>
                                        <label htmlFor="search-webSite"><img className='w-10 mt-2 active:scale-90 cursor-pointer' src="../../../img/search-main-web.png" alt="" /></label>
                                        <form className='form-webSite' action="">
                                            <label htmlFor="search-webSite" className=' float-right'><ImCancelCircle className="w-5 h-5 m-1 hover:rotate-90 duration-200 cursor-pointer"/></label>
                                            <h1 className='text-center text-2xl mt-3 text-gray-500 font-bold'>Tìm Kiếm</h1>
                                            <input type="text" placeholder=' Bạn đang tìm kiếm gì ?'/>
                                        </form>
                                        <label htmlFor="search-webSite" className='display-website-search'></label>
                                    </div>
                                    <div className="col-lg-2 col-md-3 py-3">
                                        <div className="dashboard">
                                            <div className="cart-menu">
                                                <ul>
                                                    <li className=""><a className='cursor-pointer'><img className="ml-4 mt-3" src="img/icon-cart.png" /> <span>2</span></a>
                                                        <div className="cart-info">
                                                            <ul>
                                                                <li>
                                                                    <div className="cart-img">
                                                                        <img src="img/cart/1.png" />
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
                                                                        <img src="img/cart/2.png" />
                                                                    </div>
                                                                    <div className="cart-details">
                                                                        <a href="#">Fusce aliquam</a>
                                                                        <p>1 x $777.00</p>
                                                                    </div>
                                                                    <div className="btn-edit" />
                                                                    <div className="btn-remove" />
                                                                </li>
                                                            </ul>
                                                            <h3>Subtotal: <span> $951.00</span></h3>
                                                            <a href="checkout.html" className="checkout">checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="account-menu">
                                                {!getUser.role ? <ul><Link title='Login !' to={`/login`}><li className='cursor-pointer'><p className='scale-[2] ml-6 mt-[19px]'><CiUser /></p></li></Link></ul> : CheckRoleUser()}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-32"></div>
        </div>
    )
}

export default Header
