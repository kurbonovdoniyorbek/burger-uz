import React from 'react'
import './Footer.css'
import { BiSearchAlt } from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer">
                <div className="footer_text">
                    <p>Easy way to use mobile app</p>
                    <h3>Download our mobile apps today</h3>
                    <p>Suspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum molestie vel id neque. Donec sed tempus enim, a congue risus. euismod massa a quam interdum.</p>
                    <h4>Enter your email to get download link</h4>
                    <div className="email_input">
                        <input type="email" placeholder='Email' />
                        <div className="footer_icon">
                            <BiSearchAlt />
                        </div>
                    </div>
                </div>

                <div className="footer_image">
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/mobile.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
