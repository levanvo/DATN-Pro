import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import "../../App.scss"
import { CiUser } from "react-icons/Ci";
import { getLocalStorage, setLocalStorage } from '../../Handle/Oauth-Services/LocalStorage';

const Header = () => {
    const [getUser, setUser] = useState({});
    window.addEventListener('scroll', function () {
        let headerScroll = document.querySelector('.scroll_header');
        let header_shell = document.querySelector('.mainmenu-area');
        let imageBanner = document.querySelector('.image-banner');
        if (window.scrollY >= 200) {
            headerScroll.style.marginTop = '-5px';
            imageBanner.style.height = '123px';
            imageBanner.style.marginTop = '12px';
            header_shell.style.marginTop = "-10px"
        } else {
            headerScroll.style.marginTop = '0px';
            imageBanner.style.height = '134px';
            imageBanner.style.marginTop = '2px';
            header_shell.style.height = "81px"
            header_shell.style.marginTop = "0px"
        }
    });
    useEffect(() => {
        const dataUser = getLocalStorage("shoes.dataUser");
        if (dataUser != undefined) {
            setUser(dataUser);
        } else {
            console.log("Võ-Lê: Đã có lỗi gì đó xảy ra trong localStorage !!!");
        };
        console.log("Position: ", getUser.role ? getUser.role : "khách lạ !");
    },[])
    function CheckRoleUser() {
        return (
            <div className="relative ">
                <img className='user-selector' src={getUser.imgUrl} alt="" />
                <div className='slelector-user'>
                    <Link to={`/admin`}><p>Quản lí</p></Link>
                    <Link to={`/admin`}><p>Cài đặt</p></Link>
                    <p onClick={()=>LogOut()} className='cursor-pointer'>Đăng xuất</p>
                </div>
            </div>
        )
    };
    function LogOut(){
        setLocalStorage("shoes.dataUser","");
        window.location.reload();
        alert("Bạn đã đăng xuất.");
    };
    // {checkRoleUser == "user" ? <ul><Link to={`/login`}><li className='cursor-pointer'>User</li></Link></ul> : ""}
    // {checkRoleUser == "staff" ? <ul><Link to={`/login`}><li className='cursor-pointer'>Staff</li></Link></ul> : ""}
    // {checkRoleUser == "admin" ? <ul><Link to={`/login`}><li className='cursor-pointer'>Admin</li></Link></ul> : ""}
    return (
        <div className="">
            <div className='_header-web'>
                <div className="top-link">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 offset-lg-3 col-md-9 d-none d-md-block flex scroll_header">
                                <div className="site-option mr-10">
                                    <ul>
                                        <li className="language">
                                            <a href="#">English <i className="fa fa-angle-down" /> </a>
                                            <ul className="sub-site-option">
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">VietNam</a></li>
                                            </ul>
                                        </li>
                                        <li> <span className='ml-10'>Call support free:</span> <span className='text-orange-500'> (800) 123 456 789</span></li>
                                    </ul>
                                </div>
                                <div className="mt-[10px]">
                                    <form action="#" className=''>
                                        <input className='w-[350px]  outline-0 p-[5px] border ' type="text" />
                                        <button className="bg-gray-300">
                                            <i className="fa fa-search p-[10px] px-3 " />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 ">
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
                <div className="mainmenu-area product-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="logo">
                                    <a href="/">
                                        <img className="w-[300px] image-banner" src="img/logo.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="mainmenu container">
                                    <nav>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li className="mega-women"><a href="shop.html">Women</a>
                                                <div className="mega-menu women">
                                                    <div className="part-1">
                                                        <span>
                                                            <a href="#">Dresses</a>
                                                            <a href="#">Cocktail</a>
                                                            <a href="#">Day</a>
                                                            <a href="#">Evening</a>
                                                            <a href="#">Sports</a>
                                                        </span>
                                                        <span>
                                                            <a href="#">shoes</a>
                                                            <a href="#">Sports</a>
                                                            <a href="#">run</a>
                                                            <a href="#">sandals</a>
                                                            <a href="#">Books</a>
                                                        </span>
                                                        <span>
                                                            <a href="#">Handbags</a>
                                                            <a href="#">Blazers</a>
                                                            <a href="#">table</a>
                                                            <a href="#">coats</a>
                                                            <a href="#">kids</a>
                                                        </span>
                                                        <span>
                                                            <a href="#">Clothing</a>
                                                            <a href="#">T-shirts</a>
                                                            <a href="#">coats</a>
                                                            <a href="#">Jackets</a>
                                                            <a href="#">jeans</a>
                                                        </span>
                                                    </div>
                                                    <div className="part-2">
                                                        <a href="#">
                                                            <img src="img/banner/menu-banner.png" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mega-men"><a href="shop.html">Men</a>
                                                <div className="mega-menu men">
                                                    <span>
                                                        <a href="#">Bags</a>
                                                        <a href="#">Bootees  Bags</a>
                                                        <a href="#">Blazers</a>
                                                    </span>
                                                    <span>
                                                        <a href="#">Clothing</a>
                                                        <a href="#">coats</a>
                                                        <a href="#">T-shirts</a>
                                                    </span>
                                                    <span>
                                                        <a href="#">Lingerie</a>
                                                        <a href="#">Bands</a>
                                                        <a href="#">Furniture</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="mega-footwear"><a href="shop.html">Footwear</a>
                                                <div className="mega-menu footwear">
                                                    <span>
                                                        <a href="#">Footwear Man</a>
                                                        <a href="#">gifts</a>
                                                    </span>
                                                    <span>
                                                        <a href="#">Footwear Womens</a>
                                                        <a href="#">boots</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="mega-jewellery"><a href="shop.html">Jewellery</a>
                                                <div className="mega-menu jewellery">
                                                    <span>
                                                        <a href="#">Rings</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li><a href="shop.html">accessories</a></li>
                                            <li><a href="#">Pages</a>
                                                <div className="sub-menu pages">
                                                    <span>
                                                        <a href="about-us.html">About us</a>
                                                    </span>
                                                    <span>
                                                        <a href="blog.html">Blog</a>
                                                    </span>
                                                    <span>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </span>
                                                    <span>
                                                        <a href="cart.html">Cart</a>
                                                    </span>
                                                    <span>
                                                        <a href="checkout.html">Checkout</a>
                                                    </span>
                                                    <span>
                                                        <a href="contact.html">Contact</a>
                                                    </span>
                                                    <span>
                                                        <a href="my-account.html">My account</a>
                                                    </span>
                                                    <span>
                                                        <a href="shop.html">Shop</a>
                                                    </span>
                                                    <span>
                                                        <a href="shop-list.html">Shop list</a>
                                                    </span>
                                                    <span>
                                                        <a href="single-product.html">Single Shop</a>
                                                    </span>
                                                    <span>
                                                        <a href="login.html">Login page</a>
                                                    </span>
                                                    <span>
                                                        <a href="register.html">Ragister page</a>
                                                    </span>
                                                    <span>
                                                        <a href="wishlist.html">Wishlist</a>
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
                                            <li><a href="/">Home</a>
                                            </li>
                                            <li><a href="shop.html">Women</a>
                                                <ul>
                                                    <li><a href="#">Dresses</a>
                                                        <ul>
                                                            <li><a href="#">Coctail</a></li>
                                                            <li><a href="#">day</a></li>
                                                            <li><a href="#">evening</a></li>
                                                            <li><a href="#">sports</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">shoes</a>
                                                        <ul>
                                                            <li><a href="#">Sports</a></li>
                                                            <li><a href="#">run</a></li>
                                                            <li><a href="#">sandals</a></li>
                                                            <li><a href="#">boots</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">handbags</a>
                                                        <ul>
                                                            <li><a href="#">Blazers</a></li>
                                                            <li><a href="#">table</a></li>
                                                            <li><a href="#">coats</a></li>
                                                            <li><a href="#">kids</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">clothing</a>
                                                        <ul>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">jeans</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <div className="part-2">
                                                    <a href="#">
                                                        <img src="img/banner/menu-banner.png" />
                                                    </a>
                                                </div>
                                            </li>
                                            <li><a href="shop.html">Men</a>
                                                <ul>
                                                    <li><a href="#">Bags</a>
                                                        <ul>
                                                            <li><a href="#">Bootees bag</a></li>
                                                            <li><a href="#">Blazers</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">clothing</a>
                                                        <ul>
                                                            <li><a href="#">coats</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Lingerie</a>
                                                        <ul>
                                                            <li><a href="#">Bands</a></li>
                                                            <li><a href="#">Furniture</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">Foorwear</a>
                                                <ul>
                                                    <li><a href="#">footwear men</a>
                                                        <ul>
                                                            <li><a href="#">gifts</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">footwear women</a>
                                                        <ul>
                                                            <li><a href="#">boots</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">Jewellery</a>
                                                <ul>
                                                    <li><a href="#">Rings</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">Accessories</a></li>
                                            <li><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="about-us.html">About us</a></li>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="my-account.html">My account</a></li>
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-list.html">Shop list</a></li>
                                                    <li><a href="single-product.html">Single Shop</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="login.html">login page</a></li>
                                                    <li><a href="register.html">register page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
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