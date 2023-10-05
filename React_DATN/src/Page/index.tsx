import React from 'react'
import Slider from '../Component/HomePage/Slider/Slider'
import Banner from '../Component/HomePage/Banner/Banner'
import Product from '../Component/HomePage/Products/Product'
import Featured_products from '../Component/HomePage/Featured_products/Featured_products'
import Another_banner from '../Component/HomePage/Another_Banner/Another_banner'
import New_products from '../Component/HomePage/New_products/New_products'
import Testimonial from '../Component/HomePage/Testimonial/Testimonial'
import Blog from '../Component/HomePage/Blog/Blog'
import Newsleter from '../Component/HomePage/Newsleter/Newsleter'
const HomePage = () => {
    return (
        <>
            <Slider />
            <Banner />
            <Product />
            <Featured_products />
            <Another_banner />
            <New_products />
            <Testimonial />
            <Blog />
            <Newsleter />


        </>
    )
}
export default HomePage

