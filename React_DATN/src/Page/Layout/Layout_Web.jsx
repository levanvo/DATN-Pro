import { Outlet } from "react-router-dom"

const Layout_Web = () => {
  // const Time_now=document.write(new Date().getFullYear());
  return (
    <div>
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              <a className="navbar-brand logo_h" href="index-2.html"><img src="../img/logo.png" alt /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="index-2.html">Home</a></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="category.html">Shop Category</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-product.html">Product Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
                      <li className="nav-item"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
                      <li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                      <li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item"><a href="#" className="cart"><span className="ti-bag"></span></a></li>
                  <li className="nav-item">
                    <button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form class="d-flex justify-content-between">
              <input type="text" class="form-control" id="search_input" placeholder="Search Here" fdprocessedid="besg2" />
              <button type="submit" class="btn"></button>
              <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form>
            {/* <form className="d-flex justify-content-between">
              <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
              <button type="submit" className="btn"></button>
              <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form> */}
          </div>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  dolore
                  magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div id="mc_embed_signup">
                  <form target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get" className="form-inline">
                    <div className="d-flex flex-row">
                      <input className="form-control" name="EMAIL" placeholder="Enter Email" required type="email" />
                      <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    </div>
                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Instragram Feed</h6>
                <ul className="instafeed d-flex flex-wrap">
                  <li><img src="img/i1.jpg" alt /></li>
                  <li><img src="img/i2.jpg" alt /></li>
                  <li><img src="img/i3.jpg" alt /></li>
                  <li><img src="img/i4.jpg" alt /></li>
                  <li><img src="img/i5.jpg" alt /></li>
                  <li><img src="img/i6.jpg" alt /></li>
                  <li><img src="img/i7.jpg" alt /></li>
                  <li><img src="img/i8.jpg" alt /></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
            <p className="footer-text m-0">
              Copyright &copy; 2023
              All rights reserved | This template is made with <i
                className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/"
                  target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Layout_Web