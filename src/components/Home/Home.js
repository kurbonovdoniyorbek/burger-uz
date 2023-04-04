import React from 'react'
import './Home.css'
import { FaHamburger, FaMotorcycle } from 'react-icons/fa'
import { GiFrenchFries } from 'react-icons/gi'
import { MdFastfood } from 'react-icons/md'
import { BiLeaf } from 'react-icons/bi'
import { BsBasketFill } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import { AiFillDislike } from 'react-icons/ai'

const Home = () => {
    return (
        <div className="">
            <div className='page_first_banner'>
                <div className="container">
                    <div className="page_first">
                        <div className="first_page_texts">
                            <h3>Delight yours</h3>
                            <h2>Steak Burger</h2>
                            <p>We are dedicated to the safety of our guests and employees and <br />
                                have updated our safety measures. Lorem ipsum dolor sit amet <br />
                                elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit,<br />
                                ac cursus quis, leo.</p>
                            <div className="first_page_btn">
                                <button className='see_menu'>See menu</button>
                                <button className='book_table'>Book a table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container">
                    <div className="second_page">
                        <div className="second_page_video">
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/about.jpg" alt="" />
                        </div>
                        <div className="second_page_text">
                            <p>Our story</p>
                            <p className='second_page_second_text'>Burgers! You won't Find Anywhere Else <br /> with Best Quality Ingredients</p>
                            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, consequatur voluptatem ad.</p>
                            <button className='btn_second_page'>Read me</button>
                        </div>
                    </div>
                </div>
                <div className="third_page">
                    <div className="container">
                        <div className="third_page_c">
                            <div className="box">
                                <FaHamburger />
                                <h2>Snacks</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi, excepturi accusantium nam quaerat explicabo rerum architecto autem, non pariatur facilis odit magni culpa eaque, in eveniet exercitationem doloribus porro!</p>
                                <h2>View all</h2>
                            </div>
                            <div className="box">
                                <GiFrenchFries />
                                <h2>Burgers</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi, excepturi accusantium nam quaerat explicabo rerum architecto autem, non pariatur facilis odit magni culpa eaque, in eveniet exercitationem doloribus porro!</p>
                                <h2>View all</h2>
                            </div>
                            <div className="box">
                                <MdFastfood />
                                <h2>Beverages</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi, excepturi accusantium nam quaerat explicabo rerum architecto autem, non pariatur facilis odit magni culpa eaque, in eveniet exercitationem doloribus porro!</p>
                                <h2>View all</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="fourth_page">
                        <div className="first_line">
                            <div className="four_box">
                                <div className="box_icon">
                                    <BiLeaf />
                                </div>
                                <div className="four_box_text">
                                    <h2>Natural Ingredient</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem tempora ea, nam facere consequatur.
                                    </p>
                                </div>
                            </div>
                            <div className="four_box">
                                <div className="box_icon">
                                    <BsBasketFill />
                                </div>
                                <div className="four_box_text">
                                    <h2>Fresh vegetables & Meet</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem tempora ea, nam facere consequatur.
                                    </p>
                                </div>
                            </div>
                            <div className="four_box">
                                <div className="box_icon">
                                    <ImUsers />
                                </div>
                                <div className="four_box_text">
                                    <h2>World’s best Chef</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem tempora ea, nam facere consequatur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="second_line">
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/burger1.png" alt="" />
                        </div>
                        <div className="third_line">
                            <div className="four_box">
                                <div className="box_icon">
                                    <FiSettings />
                                </div>
                                <div className="four_box_text">
                                    <h2>Best quality products</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem tempora ea, nam facere consequatur.
                                    </p>
                                </div>
                            </div>
                            <div className="four_box">
                                <div className="box_icon">
                                    <FaMotorcycle />
                                </div>
                                <div className="four_box_text">
                                    <h2>Fastest door delivery</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem tempora ea, nam facere consequatur.
                                    </p>
                                </div>
                            </div>
                            <div className="four_box">
                                <div className="box_icon">
                                    <AiFillDislike />
                                </div>
                                <div className="four_box_text">
                                    <h2>Ground beef & Low fat</h2>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem tempora ea, nam facere consequatur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fiveth_page_banner">
                    <div className="">
                        <div className="fiveth_page">
                            <p>The Right Ingredients for the Right Food. Eat Healthy,<br /> Delicious and Perfect Burgers From Our Hotel</p>
                            <p>Call us to order: <span>+1 123 456 789</span></p>
                            <div className="first_page_btn">
                                <button className='see_menu'>Contact us</button>
                                <button className='book_table'>Book a table</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="next_page">
                        <p>Food Galery</p>
                        <h3>Our Burger Gallery</h3>
                        <div className="pictures_container">
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />

                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                            <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/g1.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
