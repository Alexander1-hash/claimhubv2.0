import React from "react";

import { useScroll } from "./components/useScroll.jsx";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiTrustpilot } from "react-icons//si"
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend, AiFillTrustpilot } from "react-icons/ai";
import { motion } from "framer-motion";
import "./stylesheet/Footer.css"
import { Document, Page } from 'react-pdf';
import { fromUp, fromDown } from "./utils/Animations.js";
import samplePDF from './assets/Key Facts & Terms of Engagement.pdf'
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
                            <h3>CLAIMHUB</h3>
                        </div>
                        <ul>
                            <li><a href="https://drive.google.com/drive/folders/1d5TJGFovYVC3Dh5I-H8fzPsRmxfRiLXi"> Terms of Engagement</a></li>
                        </ul>


                        {/*<ul>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>*/ }

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
                                <a href="/counciltax">Council Tax</a>
                            </li>
                            <li>
                                <a href="/studentloans">Student Loans</a>
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
                                <a href="/contact">Start a claim</a>
                            </li>
                            <li>
                                <a href="/contact">Refer a friend</a>
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
                                <a href="https://www.facebook.com/profile.php?id=100083267440374">
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://instagram.com/claimhub.io?igshid=YmMyMTA2M2Y=">
                                    <AiFillInstagram />
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://www.linkedin.com/company/claimhubhq/">
                                    <AiFillLinkedin />
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://uk.trustpilot.com/review/claimhub.io">
                                    <SiTrustpilot />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="copyright">
                    <div className="copy">
                        <p>Copyright © 2022. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
