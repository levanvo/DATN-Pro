import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery, useGetAllProductQuery } from "../Services/Api_Product";
import { useGetColorsQuery, useGetOneColorQuery } from "../Services/api_Color";
import { useGetAllSizeQuery, useGetOneSizeQuery } from "../Services/Api_Size";
import {
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons"

const ProductDetail = () => {
  // state Swiper
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);
  const [getColor, setColor]: any = useState([]);
  const [getSize, setSize]: any = useState([]);
  const { id } = useParams();
  const { data: productData, isLoading: isLoadingProduct }: any = useGetOneProductQuery(id || "");
  const { data: colorData, isLoading: loadingColor }: any = useGetColorsQuery();
  const { data: sizeData, isLoading: loadingSize }: any = useGetAllSizeQuery();

  // const {data} = useGetOneColorQuery(productData?.color_id);
  // console.log("getColor: ", productData?.color_id?.unicode);
  console.log("getColor===========: ", productData);


  const ChooseColor = (color: any) => {
    console.log(color);

  }
  const ChooseSize = (size: any) => {
    console.log(size);

  }

  const Minus = () => {
    const valueQuantity = document.getElementById("quanityBuy");

  }
  const Plus = () => {
    const valueQuantity = document.getElementById("quanityBuy");
  }
  return (
    <div className="w-[90vw] mx-auto mt-36">
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
      {/* detail */}
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
                  {productData?.imgUrl.map((itemImg: any, index: any) => <SwiperSlide key={index}><img src={productData?.imgUrl[index]} /></SwiperSlide>)}
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
                  {productData?.imgUrl.map((itemImg: any, index: any) => <SwiperSlide key={index}><img src={productData?.imgUrl[index]} /></SwiperSlide>)}
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
                  <span>{productData?.original_price.toLocaleString()} (VND)</span>
                </div>
                <div className="single-product-info">
                  <p>{productData?.description}</p>
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
                    <div className="flex space-x-2 my-4">
                      {colorData?.map((itemColor: any) => {
                        return (
                          <button onClick={() => ChooseColor(itemColor.unicode)} className="w-8 h-8 rounded-full" style={{ background: itemColor.unicode }}></button>
                        )
                      })}
                    </div>
                    <h3>Chọn kích cỡ:</h3>
                    <div className="flex space-x-5">
                      {sizeData?.map((itemSize: any) => {
                        return (
                          <label className="cursor-pointer p-2" onClick={() => ChooseSize(itemSize.name)}>
                            <input type="radio" name="a" />
                            <p>{itemSize.name}</p>
                          </label>
                        )
                      })}
                    </div>

                    {/* <!-- input ẩn để lưu trữ giá trị được chọn --> */}
                    <input type="hidden" id="selected-color" />
                    <input type="hidden" id="selected-size" />
                  </div>
                </div>
                <div className="cart-item">
                  <div className="price-box">
                    {/* <span>
                      Price: <span></span>
                    </span> */}
                  </div>
                  <div className="single-cart d-flex align-items-center">
                    <div className="cart-plus-minus">
                      <div className="d-flex align-items-center">
                        <span style={{ fontSize: "20px" }}>Qty: </span>
                        <div className="inp_group">
                          <button><MinusOutlined onChange={() => Minus()} /></button>
                          <input className="cart-plus-minus-box outline-0" type="text"
                            name="qtybutton" readOnly id="quanityBuy" value={1} max={productData?.quantity} min={1}
                          />
                          <button><PlusOutlined onChange={() => Plus()} /></button>
                        </div>
                      </div>
                    </div>
                    <button className="cart-btn">Thêm vào giỏ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mô tả + đánh giá + comment */}
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
      {/* ============================================ khu SP liên quan */}
      <div className="container productsRelative">
        <h3>Sản phẩm liên quan</h3>
        <div className="productShow mt-4 flex flex-wrap ">

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
