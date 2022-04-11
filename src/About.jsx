import React from "react";
import business from "./assets/business.png"
import "./stylesheet/About.css"

function About() {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                <section className="about-section">
                    <div className="about-title">
                        <h1>About us</h1>
                    </div>
                    <div className="about-info">
                        <div className="about-content">
                            <p>ClaimHub Alliance (CHA) is a digital B2C / B2B platform which identifies unclaimed funds, and reclaims it on behalf of both consumers and businesses. In simple terms, we are a service which assists in putting money back in your pocket.</p>
                            <button className="about-btn">Learn More</button>
                        </div>
                        <div className="about-image"><img src={business} alt="business" /></div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default About;
