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
                        <ul>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>

                        {/* <p>
                            Join our newsletter to get updated with our Offers & Discounts.
                        </p>
                        <div className="mail">
                            <input type="email" placeholder="Please Enter Your Email" />
                            <button>
                                <AiOutlineSend />
                            </button>
                        </div> */}
                    </motion.div>
                    <motion.div
                        className="quick-links"
                        variants={fromDown}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Claim Types</h3>
                        <ul>
                            <li>
                                <a href="/">Business Rates</a>
                            </li>
                            <li>
                                <a href="/">Council Tax</a>
                            </li>
                            <li>
                                <a href="/">Student Loans</a>
                            </li>
                            <li>
                                <a href="/">Utilities</a>
                            </li>

                        </ul>
                    </motion.div>
                    <motion.div
                        className="industries"
                        variants={fromUp}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Get Started</h3>
                        <ul>
                            <li>
                                <a href="/">Start a claim</a>
                            </li>
                            <li>
                                <a href="/">Refer a friend</a>
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
                                    <a href="/">info@claimhub.io</a>
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
                                    <a href="/"> Studio One, 197 Long Lane, London, SE1 4PD</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="icon-section"
                        variants={fromDown}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
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
                    </motion.div>
                </div>

                <div className="copyright">
                    <div className="copy">
                        <p>Copyright c 2021. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
