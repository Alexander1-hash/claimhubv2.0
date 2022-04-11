import React from 'react'
import "../stylesheet/Navbar.css"

function Navbar() {

    return (
        <header className="header">
            <div className="dropdown-wrapper">
                <div className="header-main">
                    <div className="logo">
                        <a href="/">ClaimHub</a>
                    </div>
                    <div className="open-nav-menu">
                        <span></span>
                    </div>
                    <div className="menu-overlay">
                    </div>

                    <nav className="nav-menu">
                        <div className="close-nav-menu">
                            <img src="" alt="close" />
                        </div>
                        <ul className="menu">
                            <li className="menu-item menu-item-has-children">
                                <a href="#about" data-toggle="sub-menu">Who are ClaimHub <i className="plus"></i></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="aboutus">About us</a></li>
                                    <li className="menu-item"><a href="/fees">Our Fees</a></li>

                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="#services">Services</a>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#" data-toggle="sub-menu">Types of Claims <i className="plus"></i></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/energyprovider">Energy Provider</a></li>
                                    <li className="menu-item"><a href="/thameswater">Thames Water</a></li>
                                    <li className="menu-item"><a href="/counciltax">Council Tax</a></li>
                                    <li className="menu-item"><a href="/businessrates">Business Rates</a></li>
                                    <li className="menu-item"><a href="/tenantdeposits">Tenant Deposits</a></li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="#blog">Blog</a>
                            </li>
                            <li className="menu-item">
                                <a href="/login">login</a>
                            </li>

                            <li className="menu-item">
                                <a href='/form'><button className='menu-green-btn'>Start Claim</button></a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar