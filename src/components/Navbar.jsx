import React, { useState } from 'react'
import "../stylesheet/Navbar.css"
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarAnimation } from "../utils/Animations";
import BurgerBar from './BurgerBar';
import BrandName from './BrandName';

function Navbar() {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const navbarToggler = () => {
        setToggleNavbar(!toggleNavbar);
    };

    return (
        <motion.div
            className={`navbar ${toggleNavbar === true ? "active" : ""}`}
            variants={navbarAnimation}
            transition={{ delay: 0.1 }}
        >
            <header className="header">

                <div className="header-main">
                    <div className="logo">
                        {toggleNavbar ? "" : <a href="/"><BrandName /></a>}

                    </div>
                    <div className="open-nav-menu">

                        {!toggleNavbar ? (
                            <GiHamburgerMenu onClick={navbarToggler} />
                        ) : (
                            <MdClose onClick={navbarToggler} />
                        )}
                        {toggleNavbar ? <BurgerBar /> : ""}
                    </div>

                    <nav className="nav">
                        <ul className="menu">
                            <div className="menu item nav-left">
                                <li className="menu-item menu-item-has-children">
                                    <a href="#about" data-toggle="sub-menu">Who are ClaimHub <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="aboutus">About us</a></li>
                                        <li className="menu-item"><a href="/fees">Our Fees</a></li>

                                    </ul>
                                </li>

                                <li className="menu-item menu-item-has-children">
                                    <a href="#" data-toggle="sub-menu">Types of Claims <i className="plus"></i></a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/businessrates">Business Rates</a></li>
                                        <li className="menu-item"><a href="/counciltax">Council Tax</a></li>
                                        <li className="menu-item"><a href="/businessrates">Student Loans</a></li>
                                        <li className="menu-item"><a href="/thameswater">Utilities</a></li>

                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="#blog">Blog</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#services">Contact</a>
                                </li>
                            </div>
                            <li className="menu-item">
                                <a className='referal' href="#">Refer A Friend</a>
                            </li>

                            <li className="menu-item">
                                <a href='/form'><button className='menu-green-btn'>START YOUR CLAIM</button></a>
                            </li>

                        </ul>

                    </nav>

                </div>

            </header>
        </motion.div>
    )
}

export default Navbar