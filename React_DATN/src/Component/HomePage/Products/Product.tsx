import React from 'react'
import { useGetAllProductQuery } from '../../../Services/Api_Product'



const Product = () => {
    const {data: productData, isLoading} = useGetAllProductQuery()
    
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="products-area">
                <div className="container">
                    <div className="products">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="product-menu">
                                    <div className="menu-title">
                                        <h2>Best seller <strong>Các Mẫu Giày</strong></h2>
                                    </div>
                                    <div className="side-menu">
                                        {/* Nav tabs */}
                                        <ul className="nav tab-navigation" role="tablist">
                                            <li role="presentation">
                                                <a href="#tab5" aria-controls="tab5" role="tab" data-bs-toggle="tab">NIKE</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab6" aria-controls="tab6" role="tab" data-bs-toggle="tab">MLB</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab7" aria-controls="tab7" role="tab" data-bs-toggle="tab">ADIDAS</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#tab8" aria-controls="tab8" role="tab" data-bs-toggle="tab">VANS</a>
                                            </li>
                                            <li><img src="img/banner/banner-5.jpg" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    {/* Tab panes */}
                                    <div className="tab-content container">
                                        <div role="tabpanel" className="tab-pane fade show active" id="tab1">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/1.png" className="primary-img" />
                                                                <img src="img/product/2.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/1.png" className="primary-img" />
                                                                <img src="img/product/2.png" className="secondary-img" />
                                                            </div>                                       
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/4.png" className="secondary-img" />

                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/9.png" className="primary-img" />
                                                                <img src="img/product/10.png" className="secondary-img" />

                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/5.png" className="primary-img" />
                                                                <img src="img/product/6.png" className="secondary-img" />

                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />

                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                           <div>
                                                                 <img src="img/product/21.png"  className="primary-img" />
                                                                <img src="img/product/22.png"  className="secondary-img" />
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/3.png"  className="primary-img" />
                                                                <img src="img/product/16.png"  className="secondary-img" />

                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/19.png"  className="primary-img" />
                                                                <img src="img/product/20.png"  className="secondary-img" />

                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/13.png"  className="primary-img" />
                                                                <img src="img/product/14.png"  className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/25.png"  className="primary-img" />
                                                                <img src="img/product/26.png"  className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/18.png"  className="primary-img" />
                                                                <img src="img/product/2.png"  className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                               <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/15.png"  className="primary-img" />
                                                                <img src="img/product/16.png"  className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/17.png"  className="primary-img" />
                                                                <img src="img/product/18.png"  className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab2">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/5.png" className="primary-img" />
                                                                <img src="img/product/6.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/22.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/15.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/20.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/13.png" className="primary-img" />
                                                                <img src="img/product/14.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/25.png" className="primary-img" />
                                                                <img src="img/product/26.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/18.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/15.png" className="primary-img" />
                                                                <img src="img/product/9.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/17.png" className="primary-img" />
                                                                <img src="img/product/18.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/25.png" className="primary-img" />
                                                                <img src="img/product/26.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/18.png" className="primary-img" />
                                                                <img src="img/product/2.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab3">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/25.png" className="primary-img" />
                                                                <img src="img/product/26.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/23.png" className="primary-img" />
                                                                <img src="img/product/24.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce1</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/22.png" className="primary-img" />
                                                                <img src="img/product/21.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <div>
                                                                <img src="img/product/18.png" className="primary-img" />
                                                                <img src="img/product/19.png" className="secondary-img" />
                                                            </div>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/17.png" className="primary-img" />
                                                                <img src="img/product/18.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/15.png" className="primary-img" />
                                                                <img src="img/product/16.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/13.png" className="primary-img" />
                                                                <img src="img/product/14.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/9.png" className="primary-img" />
                                                                <img src="img/product/10.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/7.png" className="primary-img" />
                                                                <img src="img/product/8.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/5.png" className="primary-img" />
                                                                <img src="img/product/6.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab4">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/4.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/2.png" className="primary-img" />
                                                                <img src="img/product/1.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/5.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/10.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/1.png" className="primary-img" />
                                                                <img src="img/product/8.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/25.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/23.png" className="primary-img" />
                                                                <img src="img/product/13.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/11.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/9.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab5">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/17.png" className="primary-img" />
                                                                <img src="img/product/8.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/15.png" className="primary-img" />
                                                                <img src="img/product/7.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/13.png" className="primary-img" />
                                                                <img src="img/product/2.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/12.png" className="primary-img" />
                                                                <img src="img/product/22.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/20.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/14.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/23.png" className="primary-img" />
                                                                <img src="img/product/16.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/14.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/19.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab6">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/12.png" className="primary-img" />
                                                                <img src="img/product/6.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/18.png" className="primary-img" />
                                                                <img src="img/product/21.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/13.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/23.png" className="primary-img" />
                                                                <img src="img/product/25.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/25.png" className="primary-img" />
                                                                <img src="img/product/20.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/10.png" className="primary-img" />
                                                                <img src="img/product/13.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/20.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/7.png" className="primary-img" />
                                                                <img src="img/product/15.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab7">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/5.png" className="primary-img" />
                                                                <img src="img/product/6.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/22.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/15.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/20.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/13.png" className="primary-img" />
                                                                <img src="img/product/14.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/22.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/15.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/20.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/13.png" className="primary-img" />
                                                                <img src="img/product/14.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="tab8">
                                            <div className="product-slider carousel-margin">
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/11.png" className="primary-img" />
                                                                <img src="img/product/12.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/22.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/15.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/19.png" className="primary-img" />
                                                                <img src="img/product/20.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/13.png" className="primary-img" />
                                                                <img src="img/product/14.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/21.png" className="primary-img" />
                                                                <img src="img/product/22.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$170.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="single-product">
                                                        <div className="level-pro-sale">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img src="img/product/3.png" className="primary-img" />
                                                                <img src="img/product/15.png" className="secondary-img" />
                                                            </a>
                                                        </div>
                                                        <div className="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div className="price-rating">
                                                            <span className="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div className="ratings">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star-half-o" />
                                                            </div>
                                                        </div>
                                                        <div className="actions">
                                                            <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                            <ul className="add-to-link">
                                                                <li><a className="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
