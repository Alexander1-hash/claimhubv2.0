import React from "react";
import team from "./assets/team.svg"
import "./stylesheet/About.css"
import { useScroll } from "./components/useScroll"

function About() {
    const [element, controls] = useScroll();
    return (
        <div className="about-container" ref={element}>
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
                        <div className="about-image"><img src={team} alt="business" /></div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default About;
