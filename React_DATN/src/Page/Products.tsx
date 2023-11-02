  import { ICategory, IColor, IProduct, ISize } from "../Models/interfaces";
  import { useGetAllProductQuery } from "../Services/Api_Product";
  import React, { useState } from "react";
  import ReactPaginate from "react-paginate";
  import { useGetAllCategoryQuery } from "../Services/Api_Category";
  import { useGetAllSizeQuery } from "../Services/Api_Size";
  import { useGetColorsQuery } from "../Services/Api_Color";
  import { Button } from "antd";

  const Products = ({ searchKeyword }: { searchKeyword: string }) => {
    const { data: producData, isLoading, error } = useGetAllProductQuery();
    const { data: categoryData, isLoading: isLoadingCategory, error: errorCategory } = useGetAllCategoryQuery();
    const { data: sizeData, isLoading: isLoadingSize, error: errorSize } = useGetAllSizeQuery();
    const { data: colorData, isLoading: isLoadingColor, error: errorColor } = useGetColorsQuery();
  
    //Lọc sản phẩm theo bộ lọc
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
    const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string | undefined>(undefined);
    
    const handlePriceRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      setSelectedPriceRange(selectedValue);
      // Đây là nơi bạn sẽ áp dụng bộ lọc dựa trên khoảng giá
      // Bạn có thể thêm logic lọc vào ở đây
    };

    const isPriceInRange = (price: number, priceRange: string) => {
      if (priceRange === "0-500000") {
        return price < 500000;
      } else if (priceRange === "500000-1000000") {
        return price >= 500000 && price <= 1000000;
      } else if (priceRange === "1000000") {
        return price > 1000000;
      }
      // Thêm các khoảng giá khác ở đây
      return true; // Mặc định hiển thị sản phẩm nếu không có khoảng giá nào được chọn
    };
    
    const filteredProduct = producData?.filter((product: IProduct) => {
      if (
        (!selectedCategory || product.categoryId === selectedCategory) &&
        (!selectedSize || product.size_id === selectedSize) &&
        (!selectedColor || product.color_id === selectedColor) &&
        (!selectedPriceRange || isPriceInRange(product.price, selectedPriceRange))
      ) {
        return true;
      }
      return false;
    });
    

    const productsToDisplay: IProduct[] | undefined = filteredProduct ? filteredProduct : producData;

    
    //--------------------------------///
    const [isApplyClicked, setIsApplyClicked] = useState(false);

    const [sortOption, setSortOption] = useState("ascending");

    let filteredProducts: IProduct[] | undefined;

    if (isApplyClicked || searchKeyword) {
      filteredProducts = producData?.filter((product: IProduct) => {
        const productName = product.name.toLowerCase();
        console.log("productName", productName)
        console.log(productName.includes(searchKeyword.toLowerCase()))
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


    const numberFormat = (value: number) =>
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);

    if (isLoadingCategory) return <div>Loading...Category</div>;
    if (errorCategory) return <div>Error: Category</div>;

    if (isLoadingSize) return <div>Loading...Size</div>;
    if (errorSize) return <div>Error: Size</div>;

    if (isLoadingColor) return <div>Loading...Color</div>;
    if (errorColor) return <div>Error: Color</div>;

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
                      {categoryData?.map((category: ICategory) => {
                        return (
                          <Button
                            className={`hover:bg-red-500 ${selectedCategory === category._id ? "bg-red-500 text-white" : ""
                              }`}
                            key={category._id}
                            onClick={() => {
                              if (selectedCategory === category._id) {
                                setSelectedCategory(undefined);
                              } else {
                                setSelectedCategory(category._id);
                              }
                            }}
                          >
                            {category.name}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="single-sidebar">
                    <div className="single-sidebar-title">
                      <h3>Màu Sắc</h3>
                    </div>
                    <div className="single-sidebar-content">
                      {colorData?.map((color: IColor) => {
                        return (
                          <Button
                          className={`hover:bg-red-500 ${selectedColor === color._id ? "bg-red-500 text-white" : ""}`}
                          key={color._id}
                          onClick={() => {
                            if (selectedColor === color._id) {
                              setSelectedColor(undefined);
                            } else {
                              setSelectedColor(color._id);
                            }
                          }}
                        >
                          {color.name}
                        </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="single-sidebar">
                    <div className="single-sidebar-title">
                      <h3>Size</h3>
                    </div>
                    <div className="single-sidebar-content">
                      {sizeData?.map((size: ISize) => {
                        return (
                          <Button
                            className={`hover:bg-red-500 ${selectedSize === size._id ? "bg-red-500 text-white" : ""
                              }`}
                            key={size._id}
                            onClick={() => {
                              if (selectedSize === size._id) {
                                setSelectedSize(undefined);
                              } else {
                                setSelectedSize(size._id);
                              }
                            }}
                          >
                            {size.name}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="single-sidebar price">
                    <div className="single-sidebar-title">
                      <h3>Khoảng giá</h3>
                    </div>
                    <div className="single-sidebar-content">
                      <select
                        name="priceRange"
                        onChange={handlePriceRangeChange}
                        value={selectedPriceRange}
                      >
                        <option value="">Tất cả</option>
                        <option value="0-500000">Dưới 500k</option>
                        <option value="500000-1000000">500k - 1 triệu</option>
                        <option value="1000000">Trên 1 triệu</option>
                        {/* Thêm các khoảng giá khác tại đây */}
                      </select>
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
                          {productsToDisplay && productsToDisplay.length > 0 ? (
                            productsToDisplay.map((product: IProduct) => {
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
