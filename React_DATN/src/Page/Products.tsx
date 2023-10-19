import { ICategory, IProduct, ISize } from "../Models/interfaces";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../Services/Api_Product";
import { useGetAllCategoryQuery } from "../Services/Api_Category";
import { useGetAllSizeQuery } from "../Services/Api_Size";

const Products = () => {
  const {
    data: producData,
    isLoading,
    error,
  } = useGetAllProductQuery();

  const {
    data: categoryData,
    isLoading: isLoadingCategory,
    error: errorCategory
  } = useGetAllCategoryQuery();
  const{
    data: sizeData,
    isLoading: isLoadingSize,
    error: errorSize
  } = useGetAllSizeQuery();

  const numberFormat = (value: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);

  if (isLoadingCategory) return <div>Loading...Category</div>;
  if (errorCategory) return <div>Error: Category</div>;

  if (isLoadingSize) return <div>Loading...Size</div>;
  if (errorSize) return <div>Error: Size</div>;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="w-[90vw] mx-auto">
      <div className="product-banner">
        <img src="img/product/banner.jpg" alt="" />
      </div>
      <div className="product-main-items">
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
                    <strong> shop</strong>
                  </li>
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
                  {/*Load dữ liệu Category */}
                  <div className="single-sidebar-content">
                    {categoryData?.map((category: ICategory)=>{
                      return(
                        <ul>
                          <li key={category._id}>
                            <Link to={`/category/${category._id}/products`}>{category.name}</Link>
                          </li>
                        </ul>
                      )
                    })}
                  </div>
                </div>
                <div className="single-sidebar">
                  <div className="single-sidebar-title">
                    <h3>Màu Sắc</h3>
                  </div>
                  <div className="single-sidebar-content">
                    <ul>
                      <li>
                        <a href="#">Đen (2)</a>
                      </li>
                      <li>
                        <a href="#">Xanh (2)</a>
                      </li>
                      <li>
                        <a href="#">Đỏ (4)</a>
                      </li>
                      <li>
                        <a href="#">Trắng (2)</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar">
                  <div className="single-sidebar-title">
                    <h3>Size</h3>
                  </div>
                  <div className="single-sidebar-content">
                  {sizeData?.map((size: ISize)=>{
                      return(
                        <ul>
                          <li key={size._id}>
                            <Link to={`/size/${size._id}/products`}>{size.name}</Link>
                          </li>
                        </ul>
                      )
                    })}
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
                          <input
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Nhập Giá Bạn Muốn"
                          />
                        </div>
                      </div>
                      <button type="submit">
                        {" "}
                        <span>Tìm Kiếm</span>{" "}
                      </button>
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
                    <option value="#" selected>
                      Position
                    </option>
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
                    <option value="#" selected>
                      9
                    </option>
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
                    <div
                      role="tabpanel"
                      className="tab-pane fade home2 active show"
                      id="gird"
                    >
                      <div className="row">
                        {producData?.map((product: IProduct) => {
                          return (

                            <div
                              className="col-lg-4 col-md-6"
                              key={product._id}
                            >
                              <a href={`/product/${product._id}`}>

                                <div className="single-product">
                                  <div className="level-pro-new">
                                    <span>new</span>
                                  </div>
                                  <div className="product-img">
                                    <div>
                                      <img src={product.imgUrl[0]} alt="" className="primary-img h-[300px] w-[250px]" />
                                      <img
                                        src={product.imgUrl[1]}
                                        alt=""
                                        className="secondary-img"
                                      />
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <button
                                      type="submit"
                                      className="cart-btn"
                                      title="Add to cart"
                                    >
                                      add to cart
                                    </button>
                                    <ul className="add-to-link">
                                      <li>
                                        <a
                                          className="modal-view"
                                          data-target="#productModal"
                                          data-bs-toggle="modal"
                                          href="#"
                                        >
                                          {" "}
                                          <i className="fa fa-search"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          {" "}
                                          <i className="fa fa-refresh"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="product-price">
                                    <div className="product-name">
                                      <h1>{product.name}</h1>
                                    </div>
                                    <div className="price-rating">
                                      <span>{numberFormat(product.price)}</span>
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
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="toolbar-bottom">
                    <ul>
                      <li>
                        <span>Pages:</span>
                      </li>
                      <li className="current">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            src="img/product/pager_arrow_right.gif"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
