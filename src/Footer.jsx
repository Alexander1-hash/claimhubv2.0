import React from "react";

import { useScroll } from "./components/useScroll.jsx";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "./stylesheet/Footer.css"
import { fromUp, fromDown } from "./utils/Animations.js";

function Footer() {
    const [element, controls] = useScroll();

    return (
        <div className="footer-container" ref={element}>
            <div className="f-container">
                <div className="footermain-container">
                    <motion.div
                        className="news-letter"
                        variants={fromUp}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="footer-logo">
                            CLAIMHUB
                        </div>
                        <p>
                            Join our newsletter to get updated with our Offers & Discounts.
                        </p>
                        <div className="mail">
                            <input type="email" placeholder="Please Enter Your Email" />
                            <button>
                                <AiOutlineSend />
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        className="quick-links"
                        variants={fromDown}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Testimonial</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                            <li>
                                <a href="/">Portfolio</a>
                            </li>
                            <li>
                                <a href="/">Career</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="industries"
                        variants={fromUp}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Industires</h3>
                        <ul>
                            <li>
                                <a href="/">Energy Provider</a>
                            </li>
                            <li>
                                <a href="/">Thames Water</a>
                            </li>
                            <li>
                                <a href="/">Council Tax</a>
                            </li>
                            <li>
                                <a href="/">Business Rates</a>
                            </li>
                            <li>
                                <a href="/">Tenant deposit</a>
                            </li>


                        </ul>
                    </motion.div>
                    <motion.div
                        className="touch"
                        variants={fromDown}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Get in Touch</h3>
                        <div className="touch-section">
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <div className="detail">
                                <div className="detail-name">Email</div>
                                <div className="detail-content">
                                    <a href="/">contact@claimhub.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="touch-section">
                            <div className="icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="detail">
                                <div className="detail-name">Phone</div>
                                <div className="detail-content">
                                    <a href="/">+44 7551231231</a>
                                </div>
                            </div>
                        </div>

                        <div className="touch-section">
                            <div className="icon">
                                <ImLocation />
                            </div>
                            <div className="detail">
                                <div className="detail-name">Location</div>
                                <div className="detail-content">
                                    <a href="/"> 32 StreetOne Boards, GJ 560123</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="copyright">
                    <div className="copy">
                        <p>Copyright c 2021. All Rights Reserved.</p>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <a href="/">
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="/">
                                <AiFillInstagram />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="/">
                                <AiFillLinkedin />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="/">
                                {" "}
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
