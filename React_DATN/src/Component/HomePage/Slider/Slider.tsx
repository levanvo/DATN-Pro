import React from 'react'
import { useGetAllSlideQuery } from '../../../Services/Api_Slide'
import Config from "../../../Page/Layout/Config.js"

const Slider = () => {
    const { data: getAllSlide }: any = useGetAllSlideQuery();
    let araySlide: any = [];
    if (getAllSlide?.slider.length) {
        araySlide = getAllSlide.slider
    };
    Config();
    // console.log("-----", araySlide[0]);

    return (
        <div>
            <div className="slider-area mt-44">

                <div className="bend niceties preview-2">
                    <div id="nivoslider" className="slides">
                        {araySlide?.map((itemSlide: any, index: any) => {
                            return (
                                <div className="bend niceties preview-2">
                                    <div id="nivoslider" className="slides">
                                        <img src={itemSlide?.imgSlider} alt="" title={`#slider-direction-${index + 1}`} />
                                    </div>
                                    <div id="slider-direction-1" className="t-cn slider-direction">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content t-lfl s-tb slider-1">
                                            <div className="title-container s-tb-c title-compress">
                                                <h1 className="title1">Sale products</h1>
                                                <h2 className="title2">nike Ari max 2015</h2>
                                                <h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
                                                <a href="#"><span>read more</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* <div className="bend niceties preview-2">
                    <div id="nivoslider" className="slides">
                        <img src={araySlide[0]?.imgSlider} alt="" />
                        <img src="https://res.cloudinary.com/dtgfqi0ek/image/upload/v1699101361/jslc9tyjqhkk5akzuy0e.jpg" alt="" title="#slider-direction-1" />
                        <img src="https://res.cloudinary.com/dtgfqi0ek/image/upload/v1699078109/bgu3ssx9xrx4dpvga1yq.jpg" alt="" title="#slider-direction-2" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Slider