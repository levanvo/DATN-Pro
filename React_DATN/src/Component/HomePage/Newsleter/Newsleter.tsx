import React from 'react'



const Newsleter = () => {
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="newsleter-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="newsleter">
                                <h3>newsletter</h3>
                                <p>Subscribe to the james mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                                <div className="Subscribe">
                                    <form action="#">
                                        <input type="text" title="Sign up" />
                                        <button type="submit" title="Subscribe">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="follow">
                                <h3>follow</h3>
                                <p>Subscribe to the james mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                                <ul className="follow-link">
                                    <li><a href="#"> <i className="fa fa-facebook" /> </a></li>
                                    <li><a href="#"> <i className="fa fa-rss" /> </a></li>
                                    <li><a href="#"> <i className="fa fa-twitter" /> </a></li>
                                    <li><a href="#"> <i className="fa fa-google-plus" /> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsleter