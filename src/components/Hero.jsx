import React from "react";
import { AiFillStar } from 'react-icons/ai'
import Dashboard from "../assets/dashboard.png"
import edf from "../assets/edf.png"
import bt from "../assets/bt.png"
import thamewater from "../assets/water.png"
import southwark from "../assets/Southwark.png"
import "../stylesheet/Hero.css"

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <div className="hero-info">
                        <div className="hero-title">
                            <h1>Could you be owed more money ?</h1>
                        </div>
                        <p>ClaimHub is a digital solution that helps you recalim money you could be owed.</p>
                        <div className="hero-btns">
                            <button className="orange-btn"> Refer A Friend</button>
                            <button className="green-btn">Start Claim</button>
                        </div>

                    </div>
                    <div className="hero-image">
                        <img src={Dashboard} alt="#" />
                    </div>
                </div>

                <div className="hero-reviews">
                    <div className="star-reviews">
                        <div className="star-label"><h2>Trusted by you</h2></div>
                        <div className="stars">
                            <div className="star-images"> <AiFillStar /></div>
                            <div className="star-images"> <AiFillStar /></div>
                            <div className="star-images"> <AiFillStar /></div>
                            <div className="star-images"> <AiFillStar /></div>
                            <div className="star-images"> <AiFillStar /></div>
                        </div>

                    </div>
                    <div className="partner-logos">
                        <img src={southwark} alt="" />
                        <img src={edf} alt="" />
                        <img src={bt} alt="" />
                        <img src={thamewater} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
