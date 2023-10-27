import { ICategory, IProduct, ISize } from "../Models/interfaces";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../Services/Api_Product";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetAllCategoryQuery } from "../Services/Api_Category";
import { useGetAllSizeQuery } from "../Services/Api_Size";

const Products = ({ searchKeyword }: { searchKeyword: string }) => {
  const { data: producData, isLoading, error } = useGetAllProductQuery();
  const {
    data: categoryData,
    isLoading: isLoadingCategory,
    error: errorCategory
  } = useGetAllCategoryQuery();
  const {
    data: sizeData,
    isLoading: isLoadingSize,
    error: errorSize,
  } = useGetAllSizeQuery();

  const [isApplyClicked, setIsApplyClicked] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortOption, setSortOption] = useState("ascending");

  let filteredProducts: IProduct[] | undefined;

  if (isApplyClicked || searchKeyword) {
    filteredProducts = producData?.filter((product: IProduct) => {
      const productName = product.name.toLowerCase();
      console.log("productName", productName)
      const productPrice = product.price;
      console.log(productName.includes(searchKeyword.toLowerCase()))
      const isNameMatch = productName.includes(searchKeyword.toLowerCase());
      const isPriceMatch =
        (!priceRange.min || productPrice >= parseInt(priceRange.min)) &&
        (!priceRange.max || productPrice <= parseInt(priceRange.max));

      return isNameMatch && isPriceMatch;
    });
  } else {
    filteredProducts = producData;
  }
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };
  if (filteredProducts) {
    const sortedProducts = [...filteredProducts];

    sortedProducts.sort((a: IProduct, b: IProduct) => {
      if (sortOption === "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    filteredProducts = sortedProducts;
  }

  const handleApplyClick = () => {
    setIsApplyClicked(true);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsApplyClicked(false);
    setPriceRange((prevState) => ({
      ...prevState,
      min: event.target.value,
    }));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsApplyClicked(false);
    setPriceRange((prevState) => ({
      ...prevState,
      max: event.target.value,
    }));
  };

  // Phân trang
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);

  const handleProductsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = parseInt(event.target.value);
    setProductsPerPage(selectedValue);
    setCurrentPage(0); // Đặt lại về trang đầu tiên khi thay đổi số lượng sản phẩm trên mỗi trang
  };

  const pageCount = Math.ceil(
    (filteredProducts?.length || 0) / productsPerPage
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts?.slice(
    offset,
    offset + productsPerPage
  );

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
    <div className="w-[90vw] mx-auto mt-44">
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
                    {categoryData?.map((category: ICategory) => {
                      return (
                        <ul key={category._id}>
                          <li>
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
                    {sizeData?.map((size: ISize) => {
                      return (
                        <ul key={size._id}>
                          <li>
                            <Link to={`/size/${size._id}/products`}>{size.name}</Link>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
                <div className="single-sidebar price">
                  <div className="single-sidebar-title">
                    <h3>Khoảng giá</h3>
                  </div>
                  <div className="single-sidebar-content">
                    <div className="price-range">
                      <div className="price-filter d-flex align-items-center">
                        <input
                          type="text"
                          name="priceFrom"
                          placeholder="₫ TỪ"
                          value={priceRange.min}
                          onChange={handleMinPriceChange}
                          maxLength={13}
                        />
                        <div className="price-filter_line"></div>
                        <input
                          type="text"
                          name="priceTo"
                          placeholder="₫ Đến"
                          value={priceRange.max}
                          onChange={handleMaxPriceChange}
                          maxLength={13}
                        />
                      </div>
                      <button type="submit" onClick={handleApplyClick}>
                        <span>Áp dụng</span>
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
                  <label>Sort By Price: </label>
                  <select
                    name="sort"
                    onChange={handleSortChange}
                    value={sortOption}
                  >
                    <option value="ascending" selected>
                      Ascending
                    </option>
                    <option value="decrease">Decrease</option>
                  </select>
                </div>
                <div className="limit-product">
                  <label>Show</label>
                  <select
                    name="show"
                    onChange={handleProductsPerPageChange}
                    value={productsPerPage}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
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
                        {currentProducts && currentProducts.length > 0 ? (
                          currentProducts.map((product: IProduct) => {
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
                                        <img
                                          src={product.imgUrl?.[0]}
                                          alt=""
                                          className="primary-img h-[300px] w-[250px]"
                                        />
                                        <img
                                          src={product.imgUrl?.[1]}
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
                                        <span>
                                          {numberFormat(product.price)}
                                        </span>
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
                          })
                        ) : (
                          <div>Sản phẩm không tồn tại</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={productsPerPage}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
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
