import React from "react";
import { AiFillStar } from 'react-icons/ai'
import Dashboard from "../assets/data.svg"
import edf from "../assets/edf.png"
import bt from "../assets/bt.png"
import thamewater from "../assets/water.png"
import southwark from "../assets/Southwark.png"
import "../stylesheet/Hero.css"

function Hero() {

    return (
        <div className="hero-container">

            <div className="hero-content">
                <div className="hero-info">
                    <div className="hero-title">
                        <h1>Could you be owed money.<br /> Need help with claims?</h1>
                    </div>
                    <p>ClaimHub is a digital solution that helps you recalim money you could be owed. Fast and reliable service, tailored to you.</p>
                    <div className="hero-btns">
                        <button className="green-btn">START YOUR CLAIM</button>
                    </div>

                </div>
                <div className="hero-image">
                    <img src={Dashboard} alt="#" />
                </div>
            </div>

            <div className="hero-reviews">
                <div className="star-reviews">
                    <div className="star-label"><h2>Trusted By You</h2></div>
                </div>
                <div className="stars">
                    <div className="company1">British Gas</div>
                    <div className="company2">SSE</div>
                    <div className="company3">Student Loan Company</div>
                    <div className="company4">London Borough of lewisham</div>
                    <div className="company5">Royal Borough of Greenwhich</div>
                    <div className="company5">Birmingham City Council</div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
