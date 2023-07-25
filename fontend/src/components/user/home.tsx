import React from 'react';
import NavMenu from './nav';
import Blog from './blog';
import Footer from './footer';

const HomeProduct = () => {
    return (
        <div className="super_container">
            <NavMenu/>
            <div className="main_slider" style={{ backgroundImage: 'url(images/slider_1.jpg)' }} >
                <div className="container fill_height">
                    <div className="row align-items-center fill_height">
                        <div className="col">
                            <div className="main_slider_content">
                                <h6>Spring / Summer Collection 2017</h6>
                                <h1>Get up to 30% Off New Arrivals</h1>
                                <div className="red_button shop_now_button"><a href="#">shop now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="banner_item align-items-center" style={{ backgroundImage: 'url(images/banner_1.jpg)' }}>
                                <div className="banner_category">
                                    <a href="categories.html">women's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center" style={{ backgroundImage: 'url(images/banner_2.jpg)' }}>
                                <div className="banner_category">
                                    <a href="categories.html">accessories's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center" style={{ backgroundImage: 'url(images/banner_3.jpg)' }}>
                                <div className="banner_category">
                                    <a href="categories.html">men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title new_arrivals_title">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col text-center">
                            <div className="new_arrivals_sorting">
                                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>


                                <div className="product-item men">
                                    <div className="product discount product_filter">
                                        <div className="product_image">
                                            <img src="images/product_1.png" alt="" />
                                        </div>
                                        <div className="favorite favorite_left"></div>
                                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                        <div className="product_info">
                                            <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                                            <div className="product_price">$520.00<span>$590.00</span></div>
                                        </div>
                                    </div>
                                    <div className="w-100 invisible opacity-0 my-transition"><a href="#">add to cart</a></div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="deal_ofthe_week">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="deal_ofthe_week_img">
                                <img src="images/deal_ofthe_week.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-right deal_ofthe_week_col">
                            <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                                <div className="section_title">
                                    <h2>Deal Of The Week</h2>
                                </div>
                                <ul className="timer">
                                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                        <div id="day" className="timer_num">03</div>
                                        <div className="timer_unit">Day</div>
                                    </li>
                                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                        <div id="hour" className="timer_num">15</div>
                                        <div className="timer_unit">Hours</div>
                                    </li>

                                </ul>
                                <div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="best_sellers">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title new_arrivals_title">
                                <h2>Best Sellers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="product_slider_container">
                                <div className="owl-carousel owl-theme product_slider">


                                    <div className="owl-item product_slider_item">
                                        <div className="product-item">
                                            <div className="product discount">
                                                <div className="product_image">
                                                    <img src="images/product_1.png" alt="" />
                                                </div>
                                                <div className="favorite favorite_left"></div>
                                                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                                <div className="product_info">
                                                    <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                                                    <div className="product_price">$520.00<span>$590.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </div>
                                    <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="benefit">
                    <div className="container">
                        <div className="row benefit_row">
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
                                    <div className="benefit_content">
                                        <h6>free shipping</h6>
                                        <p>Suffered Alteration in Some Form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i></div>
                                    <div className="benefit_content">
                                        <h6>cach on delivery</h6>
                                        <p>The Internet Tend To Repeat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
                                    <div className="benefit_content">
                                        <h6>45 days return</h6>
                                        <p>Making it Look Like Readable</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                                    <div className="benefit_content">
                                        <h6>opening all week</h6>
                                        <p>8AM - 09PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Blog/>
                <Footer/>
            </div>
        </div>


    )
}

export default HomeProduct