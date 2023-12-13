import React, { useEffect, useState } from 'react'
import {
    useGetAllProductQuery,
    // useUpdateProductMutation,
    useGetOneProductQuery,
    useUpdateProductMutation
} from '../../../Services/Api_Product'
import { Link } from "react-router-dom"
// import Skeleton from '@mui/material/Skeleton';
// import Box from '@mui/material/Box';
import Loading from '../../Loading';
import { useGetAllCategoryQuery } from '../../../Services/Api_Category';
import { ICategory, IProduct } from '../../../Models/interfaces';


const Product = () => {
    const [getId, setId]: any = useState("");
    const { data: productData, isLoading }: any = useGetAllProductQuery();
    // const { data: categoryData, isLoading: loadingCT }: any = useGetAllCategoryQuery();



    const sortedProducts = productData?.slice()
    .sort((a: any, b: any) => (b.sell_quantity || 0) - (a.sell_quantity || 0))
    .filter((product: IProduct) => !product.isDeleted && (product.sell_quantity || 0) > 0).slice(0, 8);

    
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="products-area">
                <div className="container">
                    <div className="products">
                        <div className="row">
                            {/* category */}
                            <div className="col-lg-3">
                                <div className="product-menu">
                                    <div className="menu-title">
                                        <h2>Best seller <strong>Các Mẫu Giày</strong></h2>
                                    </div>
                                    <div className="side-menu">
                                    {/* {Array.isArray(categoryData) ? (
                                        categoryData?.map((category: ICategory) => (
                                        <ul className="nav tab-navigation" role="tablist" key={category._id}>
                                            <li role="presentation">
                                            <Link to={`/`}>{category.name}</Link>
                                            </li>
                                        </ul>
                                        ))
                                    ) : (
                                        <div>No categories available</div>
                                    )} */}
                                        <div>
                                            <img src="img/banner/banner-5.jpg" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center flex-wrap col-lg-9 mt-1">
                                {
                                    isLoading ?
                                        <Loading />
                                        :
                                        sortedProducts?.map((items: any) => {
                                            return (
                                                <div className="w-[220px] h-[280px] mx-2 mb-5 " key={items._id}>
                                                    <div className="imgPr h-[250px] w-[220px] overflow-hidden">
                                                        <Link to={`/product/${items._id}`}><img className='h-[250px] w-[220px] hover:scale-125 duration-200' src={items.imgUrl[0]} alt="" /></Link>
                                                    </div>
                                                    <div className="content">
                                                        <p className='text-center border-y border-gray-200 mt-1 text-orange-400 font-bold'>{items.name}</p>
                                                        <div className="flex justify-between -mt-3">
                                                            <div className="flex space-x-1">
                                                                <span>{items.price?.toLocaleString()}</span>

                                                                <span> VND</span>
                                                            </div>
                                                            {/* <p>Lượt bán: {items.sell_quantity}</p> */}
                                                            <span>Lượt bán: {items.sell_quantity}</span>
                                                            {/* <span>SL: {items.quantityTotal-items.sell_quantity}</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
