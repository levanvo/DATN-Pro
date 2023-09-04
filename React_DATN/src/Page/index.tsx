import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <>

            <div>
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-start">
                            <div className="col-lg-12">
                                <div className="active-banner-slider owl-carousel">

                                    <div className="row single-slide align-items-center d-flex">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="banner-content">
                                                <h1>Nike New <br />Collection!</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                <div className="add-bag d-flex align-items-center">
                                                    <a className="add-btn" ><span className="lnr lnr-cross"></span></a>
                                                    <span className="add-text text-uppercase">Add to Bag</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="banner-img">
                                                <img className="img-fluid" src="img/banner/banner-img.png" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row single-slide">
                                        <div className="col-lg-5">
                                            <div className="banner-content">
                                                <h1>Nike New <br />Collection!</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                <div className="add-bag d-flex align-items-center">
                                                    <a className="add-btn" ><span className="lnr lnr-cross"></span></a>
                                                    <span className="add-text text-uppercase">Add to Bag</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="banner-img">
                                                <img className="img-fluid" src="img/banner/banner-img.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="features-area section_gap">
                    <div className="container">
                        <div className="row features-inner">

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src="img/features/f-icon1.png" />
                                    </div>
                                    <h6>Free Delivery</h6>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src="img/features/f-icon2.png" />
                                    </div>
                                    <h6>Return Policy</h6>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src="img/features/f-icon3.png" />
                                    </div>
                                    <h6>24/7 Support</h6>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-features">
                                    <div className="f-icon">
                                        <img src="img/features/f-icon4.png" />
                                    </div>
                                    <h6>Secure Payment</h6>
                                    <p>Free Shipping on all order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="category-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="img/category/c1.jpg" />
                                            <a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Sneaker for Sports</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="img/category/c2.jpg" />
                                            <a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Sneaker for Sports</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="img/category/c3.jpg" />
                                            <a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Product for Couple</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src="img/category/c4.jpg" />
                                            <a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">Sneaker for Sports</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100" src="img/category/c5.jpg" />
                                    <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                        <div className="deal-details">
                                            <h6 className="deal-title">Sneaker for Sports</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="owl-carousel active-product-area section_gap">

                    <div className="single-product-slider">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <div className="section-title">
                                        <h1>Latest Products</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore
                                            magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p1.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p2.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p3.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p4.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p5.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p6.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p7.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="single-product-slider">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <div className="section-title">
                                        <h1>Coming Products</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore
                                            magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p6.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p8.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p3.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p5.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a href="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p1.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a href="#" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p4.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a href="#" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p1.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a href="#" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a href="#" className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src="img/product/p8.jpg" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-sync"></span>
                                                    <p className="hover-text">compare</p>
                                                </a>
                                                <a className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="exclusive-deal-area">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 no-padding exclusive-left">
                                <div className="row clock_sec clockdiv" id="clockdiv">
                                    <div className="col-lg-12">
                                        <h1>Exclusive Hot Deal Ends Soon!</h1>
                                        <p>Who are in extremely love with eco friendly system.</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row clock-wrap">
                                            <div className="col clockinner1 clockinner">
                                                <h1 className="days">150</h1>
                                                <span className="smalltext">Days</span>
                                            </div>
                                            <div className="col clockinner clockinner1">
                                                <h1 className="hours">23</h1>
                                                <span className="smalltext">Hours</span>
                                            </div>
                                            <div className="col clockinner clockinner1">
                                                <h1 className="minutes">47</h1>
                                                <span className="smalltext">Mins</span>
                                            </div>
                                            <div className="col clockinner clockinner1">
                                                <h1 className="seconds">59</h1>
                                                <span className="smalltext">Secs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="primary-btn">Shop Now</a>
                            </div>
                            <div className="col-lg-6 no-padding exclusive-right">
                                <div className="active-exclusive-product-slider">

                                    <div className="single-exclusive-slider">
                                        <img className="img-fluid" src="img/product/e-p1.png" />
                                        <div className="product-details">
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <h4>addidas New Hammer sole
                                                for Sports person</h4>
                                            <div className="add-bag d-flex align-items-center justify-content-center">
                                                <a className="add-btn" ><span className="ti-bag"></span></a>
                                                <span className="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-exclusive-slider">
                                        <img className="img-fluid" src="img/product/e-p1.png" />
                                        <div className="product-details">
                                            <div className="price">
                                                <h6>$150.0</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <h4>addidas New Hammer sole
                                                for Sports person</h4>
                                            <div className="add-bag d-flex align-items-center justify-content-center">
                                                <a className="add-btn" ><span className="ti-bag"></span></a>
                                                <span className="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="brand-area section_gap">
                    <div className="container">
                        <div className="row">
                            <a className="col single-img" href="#">
                                <img className="img-fluid d-block mx-auto" src="img/brand/1.png" />
                            </a>
                            <a className="col single-img" href="#">
                                <img className="img-fluid d-block mx-auto" src="img/brand/2.png" />
                            </a>
                            <a className="col single-img" href="#">
                                <img className="img-fluid d-block mx-auto" src="img/brand/3.png" />
                            </a>
                            <a className="col single-img" href="#">
                                <img className="img-fluid d-block mx-auto" src="img/brand/4.png" />
                            </a>
                            <a className="col single-img" href="#">
                                <img className="img-fluid d-block mx-auto" src="img/brand/5.png" />
                            </a>
                        </div>
                    </div>
                </section>


                <section className="related-product-area section_gap_bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>Deals of the Week</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r1.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r2.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r3.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r5.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r6.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r7.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r9.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r10.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="single-related-product d-flex">
                                            <a href="#"><img src="img/r11.jpg" /></a>
                                            <div className="desc">
                                                <a href="#" className="title">Black lace Heels</a>
                                                <div className="price">
                                                    <h6>$189.00</h6>
                                                    <h6 className="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ctg-right">
                                    <a href="#" target="_blank">
                                        <img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>

    )
}

export default HomePage