import React from 'react'

const Contact = () => {
    return (
        <div className='w-[90vw] mx-auto mt-36'>
            <div className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="index.html" title="go to homepage">Home<span>/</span></a>  </li>
                                    <li><strong> contact</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="product-sidebar">
                                <div className="sidebar-title">
                                    <h2>Shopping Options</h2>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Dresses (4)</a></li>
                                            <li><a href="#">shoes (6)</a></li>
                                            <li><a href="#">Handbags (1)</a></li>
                                            <li><a href="#">Clothing (3)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Color</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Black (2)</a></li>
                                            <li><a href="#">Blue (2)</a></li>
                                            <li><a href="#">Green (4)</a></li>
                                            <li><a href="#">Grey (2)</a></li>
                                            <li><a href="#">Red (2)</a></li>
                                            <li><a href="#">White (2)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Manufacturer</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Calvin Klein (2)</a></li>
                                            <li><a href="#">Diesel (2)</a></li>
                                            <li><a href="#">option value (1)</a></li>
                                            <li><a href="#">Polo (2)</a></li>
                                            <li><a href="#">store view (4)</a></li>
                                            <li><a href="#">Tommy Hilfiger (2)</a></li>
                                            <li><a href="#">will be used (1)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="contact-info">
                                <div id="googleMap"></div>
                                <div className="contact-details">
                                    <div className="contact-title">
                                        <h3>contact us</h3>
                                    </div>
                                    <div className="contact-form">
                                        <div className="form-title">
                                            <h4>contact information</h4>
                                        </div>
                                        <div className="form-content">
                                            <ul>
                                                <li>
                                                    <div className="form-box">
                                                        <div className="form-name">
                                                            <label>Name <em>*</em> </label>
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="form-box">
                                                        <div className="form-name">
                                                            <label>Email <em>*</em> </label>
                                                            <input type="email" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-box">
                                                        <div className="form-name">
                                                            <label>telephone </label>
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-box">
                                                        <div className="form-name">
                                                            <label>Comment <em>*</em> </label>
                                                            <textarea cols="5" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="buttons-set">
                                        <p> <em>*</em> Required Fields</p>
                                        <button type="submit">submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
