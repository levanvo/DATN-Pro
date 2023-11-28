import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery, useGetAllProductQuery } from "../Services/Api_Product";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAddToCartMutation, useGetCartQuery } from "../Services/Api_cart";
import { Modal, message } from "antd"
import Loading from "../Component/Loading";
import { useCreateCommentMutation, useDeleteCommentByAdminMutation, useDeleteCommentByIdUserMutation, useGetCommentsByProductIdQuery, useUpdateCommentByIdMutation } from "../Services/Api_Comment";
import { useGetUserOrdersQuery } from "../Services/Api_Order";
import { FaTools } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AnyAction } from "redux";


const ProductDetail = () => {
  // state Swiper
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);
  const [getQuantityBuy, setQuantityBuy]: any = useState(1);
  const [getColor, setColor]: any = useState("");
  const [getSize, setSize]: any = useState("");
  const { id } = useParams();
  const { data: allProducts }: any = useGetAllProductQuery();
  const { data: productDataOne, isLoading: isLoadingProduct }: any = useGetOneProductQuery(id || "");
  const [addToCart] = useAddToCartMutation()
  const { data: cartData, error } = useGetCartQuery()


  let arrayPR: any = [];
  const arrayRelate = productDataOne?.categoryId.products;
  if (arrayRelate) {
    for (let i = 0; i < arrayRelate.length; i++) {
      allProducts?.map((product: any) => {
        if (product._id == arrayRelate[i]) {
          arrayPR.push(product);
        };
      });
    };
  };
  arrayPR = arrayPR.filter((item: any) => item._id != id);

  const ChooseColor = (color: any) => {
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


  const handleAddToCart = () => {
    if (!productDataOne || getQuantityBuy < 1 || !getColor || !getSize) {
      message.error("Vui lòng chọn đầy đủ thông tin sản phẩm");
      return;
    }

    const isAuthenticated = localStorage.getItem("token");

    if (isAuthenticated) {
      if (cartData === undefined || cartData?.products.length === 0) {
        addToCart({
          productId: productDataOne._id,
          color: getColor,
          size: getSize,
          quantity: getQuantityBuy,
        })
        message.success("Đã thêm sản phẩm vào giỏ hàng")
      } else {
        const productItemIndex = cartData.products.findIndex((product: any) => product.productId._id == productDataOne._id && product.color == getColor && product.size == getSize);
        console.log(productItemIndex);

        const productItem = cartData.products[productItemIndex];
        if (productItemIndex !== -1) {
          const updatedProductItem = { ...productItem }; // Tạo bản sao của productItem
          addToCart({
            productId: updatedProductItem.productId._id,
            color: updatedProductItem.color,
            size: updatedProductItem.size,
            quantity: getQuantityBuy
          });
          message.success("Đã thêm sản phẩm vào giỏ hàng")
        } else {
          addToCart({
            productId: productDataOne._id,
            color: getColor,
            size: getSize,
            quantity: getQuantityBuy,
          })
          message.success("Đã thêm sản phẩm vào giỏ hàng")
        }
      }
    } else {
      // Xử lý khi chưa đăng nhập, tương tự như trước
      const existingCartJSON = localStorage.getItem('cart');
      const existingCart = existingCartJSON ? JSON.parse(existingCartJSON) : [];
      console.log(existingCart);


      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingProductIndex = existingCart.findIndex(
        (item: any) =>
          item.productId === productDataOne._id &&
          item.color === getColor &&
          item.size === getSize
      );

      const maxId = existingCart.reduce((max: any, item: any) => (item.id > max ? item.id : max), 0);
      const newId = maxId + 1;

      if (existingProductIndex !== -1) {
        // Sản phẩm đã tồn tại trong giỏ hàng với cùng productId, color và size
        // Chỉ cập nhật giá trị quantity cho sản phẩm này
        existingCart[existingProductIndex].quantity += getQuantityBuy;
      } else {
        // Nếu sản phẩm không tồn tại trong giỏ hàng, tạo sản phẩm mới và thêm vào mảng giỏ hàng
        existingCart.unshift({
          id: newId,
          productId: productDataOne._id,
          name: productDataOne.name,
          imgUrl: productDataOne.imgUrl[0],
          quantity: getQuantityBuy,
          color: getColor,
          size: getSize,
          price: productDataOne.price,
        });
      }

      // Cập nhật localStorage với giỏ hàng mới
      localStorage.setItem('cart', JSON.stringify(existingCart));
      message.success("Sản phẩm đã được thêm vào giỏ hàng của bạn (chưa đăng nhập).");
    }
  };



  // comment
  console.log("productId", id);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      const userObj = JSON.parse(storedUser);

      setCurrentUser(userObj)
    }
  }, []);

  console.log("currentUser", currentUser);





  const [content, setContent] = useState("");
  const [createComment] = useCreateCommentMutation();
  const [messagecm, setMessagecm] = useState('');
  const [isLoadingcm, setIsLoadingcm] = useState(false);
  const { data: comments, refetch } = useGetCommentsByProductIdQuery(id);
  const [deleteCommentById] = useDeleteCommentByAdminMutation(); //delete của admin

  console.log("comments", comments)

  const { data: order } = useGetUserOrdersQuery();
  console.log("data_", order);



  const hasPurchased = order?.orders.some((order: any) => {
    return (
      order.userId === currentUser?._id &&
      order.products.some((product: any) => product.productId?._id === id)
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (hasPurchased) {
      const purchasedOrder = order?.orders.find((order: any) => {
        return (
          order.userId === currentUser?._id &&
          order.products.some((product: any) => product.productId?._id === id)
        );
      });

      if (purchasedOrder) {
        // setMessagecm('Người dùng đã đặt mua sản phẩm này');
        const orderId = purchasedOrder._id;
        // setMessagecm(`OrderId của đơn hàng đã mua: ${orderId}`);

        // Gửi yêu cầu tạo bình luận với orderId
        createComment({ userId: currentUser?._id, productId: id, orderId, content })
          .unwrap()
          .then((response) => {
            // Xử lý phản hồi thành công
            console.log('Bình luận đã được tạo:', response);
            // Cập nhật danh sách bình luận hiển thị
            refetch();
          })
          .catch((error) => {
            // Xử lý lỗi
            console.error('Đã xảy ra lỗi khi tạo bình luận:', error);
            setMessagecm(error.data.message)
          });
      } else {
        setMessagecm('Không tìm thấy thông tin đơn hàng đã mua');
      }
    } else {
      setMessagecm('Bạn chưa mua sản phẩm này. Hãy mua sản phẩm để có thể bình luận!');
    }

    // Đặt lại nội dung bình luận
    setContent('');
  };

  // xóa comment cho admin 
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deletingCommentId, setDeletingCommentId] = useState(null);
  const handleDeleteComment = (commentId: any) => {
    setDeletingCommentId(commentId);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      deleteCommentById(deletingCommentId)
        .unwrap()
        .then(() => {
          message.success("Xóa thành công")
          // Cập nhật danh sách bình luận hiển thị
          refetch();
        })
        .catch((error) => {
          console.error('Lỗi khi xóa bình luận:', error);
        });
    }

    setIsDeleteModalVisible(false);
  };

  // cập nhật + xóa bình luận cho user
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isDeleteCommentUserModalVisible, setIsDeleteCommentUserModalVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const [updateCommentByIdMutation] = useUpdateCommentByIdMutation();
  const [deleteCommentByIdUserMutation] = useDeleteCommentByIdUserMutation();

  const handleDeleteCommentUser = (commentId: any) => {
    setSelectedComment(commentId);
    setIsDeleteCommentUserModalVisible(true);
  };

  const handleUpdateComment = (comment: any) => {
    setSelectedComment(comment);
    setIsUpdateModalVisible(true);
  };

  const handleUpdateConfirmation = (commentId: any, content: string) => {
    console.log("content", content);

    updateCommentByIdMutation({ id: commentId, content, userId: currentUser?._id })
      .unwrap()
      .then(() => {
        setIsUpdateModalVisible(false);
        message.success("Cập nhật bình luận thành công");
        refetch();
      })
      .catch((error) => {
        console.error('Failed to update comment:', error);
      });
  };

  const handleDeleteCommentUserConfirmation = (confirmDelete: any) => {
    if (confirmDelete) {
      deleteCommentByIdUserMutation(selectedComment)
        .unwrap()
        .then(() => {
          setIsDeleteCommentUserModalVisible(false);
          message.success("Xóa bình luận thành công");
          refetch();
        })
        .catch((error) => {
          console.error('Failed to delete comment:', error);
        });
    } else {
      setIsDeleteCommentUserModalVisible(false);
    }
  };

  const [updatedContent, setUpdatedContent] = useState('');
  return (
    <div>
      {isLoadingProduct ? <Loading /> : <div className="w-[90vw] mx-auto mt-36 relative">
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
                      <SwiperSlide key={index} >
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
                          <p>Số lượt truy cập: {productDataOne?.views}</p>
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
                    {productDataOne?.color_id?.map((itemColor: any) => {
                      return (
                        <button
                          onClick={() => ChooseColor(itemColor.unicode)}
                          className={`w-8 h-8 rounded-full  ${getColor == itemColor.unicode ? "border-4 border-gray-200" : ""}`}
                          style={{ background: itemColor.unicode }}
                        ></button>
                      );
                    })}
                  </div>
                  <div className="select-catagory">
                    <div>
                      <h3 className="mt-3">Chọn kích cỡ:</h3>
                      <div className="flex mb-3 space-x-3">
                        {productDataOne?.size_id?.map((itemSize: any) => (
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
                      <button className="cart-btn" onClick={handleAddToCart}>Thêm vào giỏ</button>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-product-tab-area cm">
          <h2 className="cm_title">Comments</h2>

          <div className="comments">
            {comments.map((comment: any) => (
              <div className="comment_detail" key={comment._id}>
                <div className="comment_detail_header">
                  <div className="user_cm">
                    <img className="user_cm_avt" src={comment.userId.imgUrl} alt="" />
                    <div className="user_cm_inf">
                      <p className="user_cm_name">@ {comment.userId.username}</p>
                      <p className="date_created">{comment.createdAt}</p>
                    </div>
                  </div>
                  {currentUser && currentUser?.role == 'admin' ? (
                    <div className="favorites">
                      <p onClick={() => handleDeleteComment(comment._id)}><MdDeleteForever /> <span>Delete</span></p>
                    </div>
                  ) : (
                    currentUser && currentUser?._id === comment.userId._id && (
                      <div>
                        <div className="favorites">
                          <p style={{ border: 'none' }} onClick={() => handleUpdateComment(comment)}><FaTools style={{ color: '#18a3f4' }} /> <span style={{ color: '#18a3f4' }}>Sửa</span></p>
                        </div>

                        <div className="favorites">
                          <p style={{ border: 'none' }} onClick={() => handleDeleteCommentUser(comment._id)}><MdDeleteForever /> <span>Xóa</span></p>
                        </div>

                        <Modal
                          title="Xác nhận xóa"
                          visible={isDeleteCommentUserModalVisible}
                          onOk={() => handleDeleteCommentUserConfirmation(true)}
                          onCancel={() => handleDeleteCommentUserConfirmation(false)}
                          okText="Xóa"
                          cancelText="Hủy"
                          okButtonProps={{ style: { backgroundColor: 'red' } }}
                        >
                          Bạn có chắc chắn muốn xóa không?
                        </Modal>

                        <Modal
                          title="Cập nhật bình luận"
                          visible={isUpdateModalVisible}
                          onOk={() => handleUpdateConfirmation(comment._id, updatedContent)}
                          onCancel={() => setIsUpdateModalVisible(false)}
                          okText="Cập nhật"
                          cancelText="Hủy"
                          style={{ marginTop: '140px' }}
                        >
                          <textarea
                            style={{ padding: '10px 20px', outline: 'auto', width: '100%' }}
                            value={updatedContent || comment?.content}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                          />
                        </Modal>

                      </div>
                    )
                  )}
                  <Modal
                    title="Xác nhận xóa"
                    visible={isDeleteModalVisible}
                    onOk={() => handleDeleteConfirmation(true)}
                    onCancel={() => handleDeleteConfirmation(false)}
                    okText="Xóa"
                    cancelText="Hủy"
                    okButtonProps={{ style: { backgroundColor: "red" } }}
                  >
                    Chắc chắn muốn xóa comment của user này không?
                  </Modal>

                </div>
                <div className="comment_content">
                  <p>{comment.content}</p>
                </div>
              </div>
            ))}

            <div className="comment_form">
              {currentUser?._id ?
                (<form onSubmit={handleSubmit}>
                  <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your comment" maxLength={200} cols={110} rows={2} />
                  <button type="submit" disabled={isLoadingcm}>Send</button>
                  {messagecm && <p>{messagecm}</p>}
                </form>) : (<p>Vui lòng đăng nhập để bình luận.</p>)}


            </div>
          </div>

        </div>
        {/* ============================================ khu SP liên quan */}
        <div className="container mb-20 productsRelative text-black">
          <h3 style={{ marginTop: '300px' }}>Sản phẩm liên quan</h3>
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
      </div>}
    </div >

  );
};

export default ProductDetail;
