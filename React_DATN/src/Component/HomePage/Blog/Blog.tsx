import React from 'react'



const Blog = () => {
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-heading">
                                <h2>From <strong> The Blog</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-post">
                                <div className="single-blog-post">
                                    <div className="blog-img">
                                        <a href="blog-details.html">
                                            <img src="img/blog/1.jpg" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <a href="blog-details.html" className="blog-title">Lorem ipsum dolor sit amet</a>
                                        <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                        <a href="blog-details.html" className="readmore">read more &gt;</a>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="blog-img">
                                        <a href="blog-details.html">
                                            <img src="img/blog/2.jpg" />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <a href="blog-details.html" className="blog-title">Lorem ipsum dolor sit amet</a>
                                        <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                        <a href="blog-details.html" className="readmore">read more &gt;</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-post">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img className='w-44' src="img/blog/3.jpg" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <a href="blog-details.html" className="blog-title">Lorem ipsum dolor sit amet</a>
                                    <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                    <a href="blog-details.html" className="readmore">read more &gt;</a>
                                </div>
                            </div>
                            <div className="single-blog-post">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img className='w-44' src="img/blog/4.jpg" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <a href="blog-details.html" className="blog-title">Lorem ipsum dolor sit amet</a>
                                    <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                    <a href="blog-details.html" className="readmore">read more &gt;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog