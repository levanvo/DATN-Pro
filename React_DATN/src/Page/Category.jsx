import React from 'react'

const Category = () => {
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="product-banner">
                <img src="img/product/banner.jpg" alt="" />
            </div>
            <div className="product-main-items">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="index.html" title="go to homepage">Home<span>/</span></a>  </li>
                                    <li><strong> shop</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Danh mục  */}
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="product-sidebar">
                                <div className="sidebar-title">
                                    <h2>Danh mục sản phẩm</h2>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Sản Phảm</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">ADIDAS (4)</a></li>
                                            <li><a href="#">MLB (6)</a></li>
                                            <li><a href="#">VANS (1)</a></li>
                                            <li><a href="#">NIKE (3)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Màu Sắc</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Đen (2)</a></li>
                                            <li><a href="#">Xanh (2)</a></li>
                                            <li><a href="#">Đỏ (4)</a></li>
                                            <li><a href="#">Trắng (2)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar price">
                                    <div className="single-sidebar-title">
                                        <h3>Giá Tiền</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <div className="price-range">
                                            <div className="price-filter">
                                                <div id="slider-range"></div>
                                                <div className="price-slider-amount">
                                                    <input type="text" id="amount" name="price" placeholder="Nhập Giá Bạn Muốn" />
                                                </div>
                                            </div>
                                            <button type="submit"> <span>Tìm Kiếm</span> </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-left">
                                    <a href="#">
                                        <img src="img/product/banner_left.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="product-bar">
                               
                                <div className="sort-by">
                                    <label>Sort By</label>
                                    <select name="sort">
                                        <option value="#" selected >Position</option>
                                        <option value="#">Name</option>
                                        <option value="#">Price</option>
                                    </select>
                                    <a href="#" title="Set Descending Direction">
                                        <img src="img/product/i_asc_arrow.gif" alt="" />
                                    </a>
                                </div>
                                <div className="limit-product">
                                    <label>Show</label>
                                    <select name="show">
                                        <option value="#" selected>9</option>
                                        <option value="#">12</option>
                                        <option value="#">24</option>
                                        <option value="#">36</option>
                                    </select>
                                    per page
                                </div>
                            </div>
                            {/* Nhập dữ liệu category */}
                            <div className="row">
                                <div className="product-content">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade home2 active show" id="gird">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/25.png" alt="" className="primary-img" />
                                                                <img src="img/product/26.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/23.png" alt="" className="primary-img" />
                                                                <img src="img/product/24.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" alt="" className="primary-img" />
                                                                <img src="img/product/22.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" alt="" className="primary-img" />
                                                                <img src="img/product/20.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/17.png" alt="" className="primary-img" />
                                                                <img src="img/product/18.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/15.png" alt="" className="primary-img" />
                                                                <img src="img/product/16.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/13.png" alt="" className="primary-img" />
                                                                <img src="img/product/14.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/11.png" alt="" className="primary-img" />
                                                                <img src="img/product/12.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/9.png" alt="" className="primary-img" />
                                                                <img src="img/product/10.png" alt="" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-price">
                                                            <div className="product-name">
                                                                <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                            </div>
                                                            <div className="price-rating">
                                                                <span>$170.00</span>
                                                                <div className="ratings">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-half-o"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="toolbar-bottom">
                                        <ul>
                                            <li><span>Pages:</span></li>
                                            <li className="current"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"> <img src="img/product/pager_arrow_right.gif" alt="" /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- product main items area end -->

        <!-- footer top area start --> */}
            <div className="footer-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact">
                                <img src="img/logo-white.png" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                <ul className="address">
                                    <li>
                                        <span className="fa fa-fax"></span>
                                        (800) 123 456 789
                                    </li>
                                    <li>
                                        <span className="fa fa-phone"></span>
                                        (800) 123 456 789
                                    </li>
                                    <li>
                                        <span className="fa fa-envelope-o"></span>
                                        admin@bootexperts.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-tweets">
                                <div className="footer-title">
                                    <h3>Latest tweets</h3>
                                </div>
                                <div className="twitter-feed">
                                    <div className="twitter-article">
                                        <div className="twitter-img">
                                            <a href="#">
                                                <img src="img/twitter/twitter-1.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="twitter-text">
                                            <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                                            <a href="#">https://t.co/iu0OYBwti8</a>
                                            <div className="twitter-time">
                                                <a href="#">16h</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="twitter-article">
                                        <div className="twitter-img">
                                            <a href="#">
                                                <img src="img/twitter/twitter-1.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="twitter-text">
                                            <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                                            <a href="#">https://t.co/iu0OYBwti8</a>
                                            <div className="twitter-time">
                                                <a href="#">16h</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-support">
                                <div className="footer-title">
                                    <h3>Our support</h3>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Your Account</a></li>
                                        <li><a href="#">Advanced Search</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <div className="footer-title">
                                    <h3>Our information</h3>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Orders and Returns</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
