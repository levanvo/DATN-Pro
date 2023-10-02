import React from 'react'
const Slider = () => {
    return (
        <div>
            <div className="slider-area home1 -mt-32">
                <div className="bend niceties preview-2">
                    <div id="nivoslider" className="slides mt-44">
                        <img src="img/slider/slider-1.jpg" alt="" title="#slider-direction-1" />
                        <img src="img/slider/slider-2.jpg" alt="" title="#slider-direction-2" />
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
                    <div id="slider-direction-2" className="slider-direction">
                        <div className="slider-progress" />
                        <div className="slider-content t-lfl s-tb slider-2">
                            <div className="title-container s-tb-c">
                                <h1 className="title1">Sale products</h1>
                                <h2 className="title2">GET UP TO 50% SALE</h2>
                                <h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
                                <a href="#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slider