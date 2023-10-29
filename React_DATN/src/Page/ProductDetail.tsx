import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import {
  useGetOneProductQuery,
  useGetAllProductQuery,
} from "../Services/Api_Product";
import { useGetColorsQuery, useGetOneColorQuery } from "../Services/api_Color";
import { useGetAllSizeQuery, useGetOneSizeQuery } from "../Services/Api_Size";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";



const ProductDetail = () => {
  // state Swiper
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);
  const [getQuantityBuy, setQuantityBuy]: any = useState(1);
  const [getColor, setColor]: any = useState("");
  const [getSize, setSize]: any = useState("");
  const { id } = useParams();
  const { data: allProducts }: any = useGetAllProductQuery();
  const { data: productDataOne, isLoading: isLoadingProduct }: any = useGetOneProductQuery(id || "");
  const { data: colorData, isLoading: loadingColor }: any = useGetColorsQuery();
  const { data: sizeData, isLoading: loadingSize }: any = useGetAllSizeQuery();

  let arrayPR: any = [];
  const arrayRelate = productDataOne?.categoryId.products;
  if (arrayRelate) {
    for (let i = 0; i < arrayRelate.length; i++) {
      allProducts.map((product: any) => {
        if (product._id == arrayRelate[i]) {
          arrayPR.push(product);
        };
      });
    };
  };
  arrayPR = arrayPR.filter((item: any) => item._id != id);

  const ChooseColor = (color: any) => {
    console.log(color);
    setColor(color);
  };
  const ChooseSize = (size: any) => {
    console.log(size);
    setSize(size);
  };

  const Minus = () => {
    getQuantityBuy > 1 && setQuantityBuy(getQuantityBuy - 1)
  };
  const Plus = () => {
    setQuantityBuy(getQuantityBuy + 1)
  };


  return (
    <div className="w-[90vw] mx-auto mt-36 relative">
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
                    <strong>{productDataOne?.name}</strong>
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
                  {productDataOne?.imgUrl.map((itemImg: any, index: any) => (
                    <SwiperSlide key={index}>
                      <img src={productDataOne?.imgUrl[index]} />
                    </SwiperSlide>
                  ))}
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
                  {productDataOne?.imgUrl.map((itemImg: any, index: any) => (
                    <SwiperSlide key={index}>
                      <img src={productDataOne?.imgUrl[index]} />
                    </SwiperSlide>
                  ))}
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
                <p className="product-name">{productDataOne?.name}</p>
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
                    Tình trạng: <span> {productDataOne?.quantity > 0 ? "còn hàng" : "hết hàng"}</span>
                  </p>
                  <p>
                    Số lượng: <span className="text-gray-600"> {productDataOne?.quantity}</span>
                  </p>
                </div>
                <div className="item-price flex space-x-2">
                  <span>{productDataOne?.price.toLocaleString()} (VND)</span>
                  <p className="text-red-500 text-xs">{productDataOne?.original_price > productDataOne?.price && productDataOne?.original_price > 0 ? "Đại hạ giá" : "Sản phẩm đang hot"}</p>
                  {productDataOne?.original_price > 0 && <p className="text-xs"><del>{productDataOne?.original_price.toLocaleString()} (VND)</del></p>}
                </div>
                <div className="single-product-info">
                  <p>{productDataOne?.description}</p>
                  <div className="share">
                    <img src="img/product/share.png" alt="" />
                  </div>
                </div>
                <h3 className="-mt-4">Chọn màu:</h3>
                <div className="flex space-x-2 my-4">
                  {colorData?.map((itemColor: any) => {
                    return (
                      <button
                        onClick={() => ChooseColor(itemColor.unicode)}
                        className={`w-8 h-8 rounded-full  ${getColor == itemColor.unicode ? "border-4 border-gray-200" : ""}`}
                        style={{ background: itemColor.unicode }}
                      ></button>
                    );
                  })}
                </div>
                {/* <div className="action">
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
                </div> */}
                <div className="select-catagory">
                  <div>
                      <h3 className="mt-3">Chọn kích cỡ:</h3>
                    <div className="flex mb-3 space-x-3">
                      {sizeData?.map((itemSize: any) => (
                        <div onClick={() => ChooseSize(itemSize.name)} className={`w-14 h-7 cursor-pointer relative border-[1px] text-center ${getSize == itemSize.name ? "border-green-600" : ""}`}>
                          <p>{itemSize.name}</p>
                          {getSize == itemSize.name && <img className="absolute top-[-7px] right-[-5px] w-3 h-3" src="../../img/icons/correct.png" alt="" />}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 w-0 h-0">
                      <input type="checkbox" id="guide_shoe" hidden />
                      <label htmlFor="guide_shoe"><p className="cursor-pointer hover:text-sky-500 w-96">Bảng Quy Đổi Kích Cỡ</p></label>
                      <div className="w-[800px] h-96 bg-white flex space-x-20 guide-shoes-board">
                        <img className="w-96 h-96 p-4" src="../../img/guide_sizeShoe.png" alt="" />
                        <div className="">
                          <p className="text-center text-xl mt-5 text-gray-500">Bảng đo size giày</p>
                          <img className="w-64 h-64 p-4" src="../../img/guide_size.png" alt="" />
                        </div>
                        <label htmlFor="guide_shoe"><CloseOutlined className="absolute right-0 p-3 scale-150 cursor-pointer hover:rotate-90 duration-200" /></label>
                      </div>
                      <label htmlFor="guide_shoe" className="fixed top-0 left-0 display-guide-shoe -z-10"></label>
                    </div>
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
                        <span style={{ fontSize: "16px" }}>Số lượng: </span>
                        <div className="inp_group">
                          <button>
                            <MinusOutlined className="borderQuantity p-[3px] mt-1 border" onClick={() => Minus()} />
                          </button>
                          <input
                            className="cart-plus-minus-box outline-0 h-10"
                            type="text"
                            name="qtybutton"
                            readOnly
                            id="quanityBuy"
                            value={getQuantityBuy}
                            max={productDataOne?.quantity}
                            min={1}
                          />
                          <button>
                            <PlusOutlined className="borderQuantity p-[3px] mt-1 border" onClick={() => Plus()} />
                          </button>
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
      <div className="container mb-20 productsRelative text-black">
        <h3>Sản phẩm liên quan</h3>
        <div className={`productShow mt-4 flex flex-wrap space-x-5 ${arrayPR.length > 3 ? "justify-center" : ""}`}>
          {arrayPR.length ? arrayPR?.map((items: any) => {
            return (
              <div className="border rounded-2xl w-56 m-2 relative" key={items._id}>

                <Link to={`/product/${items._id}`}><img className="w-56 h-48 rounded-lg hover:scale-110 duration-200" src={items.imgUrl[0]} alt="" /></Link>
                <p className="ml-2  text-gray-500">{items.name} <span className="float-right mr-2 text-gray-400 text-xs mt-2">SL: {items.quantity}</span></p>
                <div className="flex space-x-2">
                  <p className="text-xs ml-2">{items.price.toLocaleString()} (VND)</p>
                  {items.original_price > 0 && <p className="text-xs"><del>{items.original_price.toLocaleString()}</del></p>}
                  {
                    items.original_price > items.price ?
                      <img className=" absolute w-10 top-2" src="../../img/IMAGE_CREATED/sale.png" alt="" />
                      :
                      ""
                  }
                </div>
              </div>
            )
          }) : arrayPR.length > 0 ? "...loading" : <p className="text-center text-red-500">Hiện chưa có sản phẩm cùng loại !</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
