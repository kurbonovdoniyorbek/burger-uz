import React, { useState } from 'react'
import './Navbar.css'
import { BiCategoryAlt } from 'react-icons/bi'


const Navbar = () => {
    const [style, setStyle] = useState('')

    const NavbarFunc = () => {
        if (style === 'none') {
            setStyle('flex')
        }
        else
            setStyle('none')

    }


    return (
        <div className='container'>
            <div className='navbar'>
                <div className="nav-logo">
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/01-09-2020/burgerbun-liberty-demo_Free/1364685867/web/assets/images/burger.png" alt="" />
                    <a href="/"> <h1>Burger Uz</h1></a>
                </div>
                <ul className="nav-items" style={{ display: style }}>
                    <li className="items">Home</li>
                    <li className="items">About</li>
                    <li className="items">Menu</li>
                    <li className="items">Pages</li>
                    <li className="items">Contact</li>
                </ul>

                <BiCategoryAlt onClick={NavbarFunc} />
            </div>
        </div>
    )
}

export default Navbar
