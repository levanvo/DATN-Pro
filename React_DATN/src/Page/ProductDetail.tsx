import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../Services/Api_Product";
const ProductDetail = () => {
  // state Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const { data: productData, isLoading } = useGetOneProductQuery(id || "");

  return (
    <div className="w-[90vw] mx-auto">
      <div className="Single-product-location home2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="location">
                <ul>
                  <li>
                    <a href="index.html" title="go to homepage">
                      Home<span>/</span>
                    </a>{" "}
                  </li>
                  <li>
                    <strong>{productData?.name}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-product-img tab-content">
                <Swiper
                  style={
                    {
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    } as React.CSSProperties
                  }
                  spaceBetween={5}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div>
                      <img
                        src={productData?.imgUrl[0]}
                        className="product-img"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productData?.imgUrl[1]} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productData?.imgUrl[2]} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productData?.imgUrl[3]} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productData?.imgUrl[4]} />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="nav product-page-slider">
                <Swiper
                  onSwiper={(swiper) => setThumbsSwiper(swiper as any)}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <img src={productData?.imgUrl[0]} />

                  </SwiperSlide>
                  <SwiperSlide>
                  <img src={productData?.imgUrl[1]} />

                  </SwiperSlide>
                  <SwiperSlide>
                  <img src={productData?.imgUrl[2]} />

                  </SwiperSlide>
                  <SwiperSlide>
                  <img src={productData?.imgUrl[3]} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src={productData?.imgUrl[4]} />
                  </SwiperSlide>
                </Swiper>
                <div className="single-product-slider">
                  <a
                    className="active"
                    href="#pro-large-img-1"
                    data-bs-toggle="tab"
                  >
                    <img src="" alt="" />
                  </a>
                </div>
                <div className="single-product-slider">
                  <a href="#pro-large-img-2" data-bs-toggle="tab">
                    <img src="" alt="" />
                  </a>
                </div>
                <div className="single-product-slider">
                  <a href="#pro-large-img-3" data-bs-toggle="tab">
                    <img src="" alt="" />
                  </a>
                </div>
                <div className="single-product-slider">
                  <a href="#pro-large-img-4" data-bs-toggle="tab">
                    <img src="" alt="" />
                  </a>
                </div>
                <div className="single-product-slider">
                  <a href="#pro-large-img-5" data-bs-toggle="tab">
                    <img src="" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-product-details">
                <p className="product-name">
                  {productData?.name}
                </p>
                <div className="list-product-info">
                  <div className="price-rating">
                    <div className="ratings">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <a href="#" className="review">
                        1 Review(s)
                      </a>
                      <a href="#" className="add-review">
                        Add Your Review
                      </a>
                    </div>
                  </div>
                </div>
                <div className="avalable">
                  <p>
                    Availability:<span> In stock</span>
                  </p>
                </div>
                <div className="item-price">
                  <span>{productData?.price}</span>
                </div>
                <div className="single-product-info">
                  <p>
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                    gravida et mattis vulputate, tristique ut lectus. Sed et
                    lorem nunc. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Aenean eleifend
                    laoreet congue. Vivamus adipiscing nisl ut dolor dignissim
                    semper. Nulla luctus malesuada tincidunt. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Integer enim purus, posuere at ultricies
                    eu, placerat a felis. Suspendisse aliquet urna pretium eros
                    convallis interdum. Quisque in arcu id dui vulputate mollis
                    eget non arcu. Aenean et nulla purus. Mauris vel tellus non
                    nunc mattis lobortis.{" "}
                  </p>
                  <div className="share">
                    <img src="img/product/share.png" alt="" />
                  </div>
                </div>
                <div className="action">
                  <ul className="add-to-links">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-refresh"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="select-catagory">
                  <div>
                    <h3>Chọn màu:</h3>
                    <div>
                      <label
                        htmlFor="color-red"
                        style={{ backgroundColor: "red" }}
                      ></label>
                      <label
                        htmlFor="color-green"
                        style={{ backgroundColor: "green" }}
                      ></label>
                      <label
                        htmlFor="color-blue"
                        style={{ backgroundColor: "blue" }}
                      ></label>
                    </div>
                    <h3>Chọn kích cỡ:</h3>
                    <div>
                      <label htmlFor="size-small">38</label>
                      <label htmlFor="size-medium">39</label>
                      <label htmlFor="size-large">40</label>
                    </div>
                    {/* <!-- input ẩn để lưu trữ giá trị được chọn --> */}
                    <input type="hidden" id="selected-color" />
                    <input type="hidden" id="selected-size" />
                  </div>
                </div>
                <div className="cart-item">
                  <div className="price-box">
                    <span>
                      Price: <span></span>
                    </span>
                  </div>
                  <div className="single-cart d-flex align-items-center">
                    <div className="cart-plus-minus">
                      <div className="d-flex align-items-center">
                        <span style={{ fontSize: "20px" }}>Qty: </span>
                        <div className="inp_group">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                          </button>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            readOnly
                          />
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="cart-btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-tab-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-product-tab">
                <ul
                  className="nav single-product-tab-navigation"
                  role="tablist"
                >
                  <li role="presentation">
                    <a
                      className="active"
                      href="#tab1"
                      aria-controls="tab1"
                      role="tab"
                      data-bs-toggle="tab"
                    >
                      Product Description
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#tab2"
                      aria-controls="tab2"
                      role="tab"
                      data-bs-toggle="tab"
                    >
                      reviews
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#tab3"
                      aria-controls="tab3"
                      role="tab"
                      data-bs-toggle="tab"
                    >
                      product tag
                    </a>
                  </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content single-product-page">
                  <div
                    role="tabpanel"
                    className="tab-pane fade show active"
                    id="tab1"
                  >
                    <div className="single-p-tab-content">
                      <p>
                        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus. Sed et
                        lorem nunc. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia Curae; Aenean
                        eleifend laoreet congue. Vivamus adipiscing nisl ut
                        dolor dignissim semper. Nulla luctus malesuada
                        tincidunt. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Integer enim purus, posuere at ultricies eu, placerat a
                        felis. Suspendisse aliquet urna pretium eros convallis
                        interdum. Quisque in arcu id dui vulputate mollis eget
                        non arcu. Aenean et nulla purus. Mauris vel tellus non
                        nunc mattis lobortis.{" "}
                      </p>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab2">
                    <div className="single-p-tab-content">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="product-review">
                            <p>
                              {" "}
                              <a href="#"> plaza</a> <span>Review by</span>{" "}
                              plaza{" "}
                            </p>
                            <div className="product-rating-info">
                              <p>defaultValue</p>
                              <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </div>
                            </div>
                            <div className="product-rating-info">
                              <p>Quality</p>
                              <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </div>
                            </div>
                            <div className="product-rating-info">
                              <p>Price</p>
                              <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                              </div>
                            </div>
                            <div className="review-date">
                              <p>
                                plaza <em> (Posted on 8/27/2015)</em>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="rate-product hidden-xs">
                            <div className="rate-product-heading">
                              <h3>You&#39;re reviewing: Fusce aliquam</h3>
                              <h3>
                                How do you rate this product? <em>*</em>
                              </h3>
                            </div>
                            <form action="#">
                              <table className="product-review-table">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>1 star</th>
                                    <th>2 star</th>
                                    <th>3 star</th>
                                    <th>4 star</th>
                                    <th>5 star</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th>Price</th>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[1]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[1]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[1]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[1]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[1]"
                                      />{" "}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>defaultValue</th>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[2]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[2]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[2]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[2]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[2]"
                                      />{" "}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Quality</th>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[3]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[3]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[3]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[3]"
                                      />{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="radio"
                                        className="radio"
                                        name="ratings[3]"
                                      />{" "}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <ul className="form-list">
                                <li>
                                  <label>
                                    {" "}
                                    nickname <em>*</em>{" "}
                                  </label>
                                  <input type="text" />
                                </li>
                                <li>
                                  <label>
                                    {" "}
                                    Summary of Your Review <em>*</em>{" "}
                                  </label>
                                  <input type="text" />
                                </li>
                                <li>
                                  <label>
                                    {" "}
                                    Review <em>*</em>{" "}
                                  </label>
                                  <textarea cols={3} rows={5}></textarea>
                                </li>
                              </ul>
                              <button type="submit"> submit review</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab3">
                    <div className="single-p-tab-content">
                      <div className="add-tab-title">
                        <p> add your tag </p>
                      </div>
                      <div className="add-tag">
                        <form action="#">
                          <input type="text" />
                          <button type="submit">add tags</button>
                        </form>
                      </div>
                      <p className="tag-rules">
                        Use spaces to separate tags. Use single quotes (&#39;)
                        for phrases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upsell-product home2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-title">
                <h2>upsell products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/25.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/26.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/23.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/24.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/21.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/22.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/19.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/20.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product"></div>
                  <div className="product-img">
                    <a href="single-product.html">
                      <img
                        src="img/product/17.png"
                        alt=""
                        className="primary-img"
                      />
                      <img
                        src="img/product/18.png"
                        alt=""
                        className="secondary-img"
                      />
                    </a>
                  </div>
                  <div className="list-product-info">
                    <div className="price-rating">
                      <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <a href="#" className="review">
                          1 Review(s)
                        </a>
                        <a href="#" className="add-review">
                          Add Your Review
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-price">
                    <div className="product-name">
                      <a href="single-product.html" title="Fusce aliquam">
                        Fusce aliquam
                      </a>
                    </div>
                    <div className="price-rating">
                      <span>$170.00</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/15.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/16.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/13.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/14.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/11.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/12.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="related-product home2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-title">
                <h2>related products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/25.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/26.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/23.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/24.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/21.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/22.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/19.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/20.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product"></div>
                  <div className="product-img">
                    <a href="single-product.html">
                      <img
                        src="img/product/17.png"
                        alt=""
                        className="primary-img"
                      />
                      <img
                        src="img/product/18.png"
                        alt=""
                        className="secondary-img"
                      />
                    </a>
                  </div>
                  <div className="list-product-info">
                    <div className="price-rating">
                      <div className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <a href="#" className="review">
                          1 Review(s)
                        </a>
                        <a href="#" className="add-review">
                          Add Your Review
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-price">
                    <div className="product-name">
                      <a href="single-product.html" title="Fusce aliquam">
                        Fusce aliquam
                      </a>
                    </div>
                    <div className="price-rating">
                      <span>$170.00</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/15.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/16.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/13.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/14.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="x">
                <div className="col-md-12">
                  <div className="single-product">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img
                          src="img/product/11.png"
                          alt=""
                          className="primary-img"
                        />
                        <img
                          src="img/product/12.png"
                          alt=""
                          className="secondary-img"
                        />
                      </a>
                    </div>
                    <div className="list-product-info">
                      <div className="price-rating">
                        <div className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <a href="#" className="review">
                            1 Review(s)
                          </a>
                          <a href="#" className="add-review">
                            Add Your Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-price">
                      <div className="product-name">
                        <a href="single-product.html" title="Fusce aliquam">
                          Fusce aliquam
                        </a>
                      </div>
                      <div className="price-rating">
                        <span>$170.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
