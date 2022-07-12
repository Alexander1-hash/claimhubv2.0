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

                    <div className="about-info">
                        <div className="about-content">
                            <div className="about-title">
                                <h1>CLAIMHUB</h1>
                            </div>
                            <p>In simple terms, ClaimHub are a service which identifies overpayments and unclaimed funds from Corporations and Public Bodies. We then assist you in processing the claim(s), taking the headache away from you, and ultimately putting money back into your pocket.</p>

                            <p>Now more than ever, given the current economic climate, we are dedicated to helping individuals and businesses, especially when those bodies who are duly bound to refund overpayments and unclaimed funds don't always do so.</p>

                            <a href='/aboutus'><button className="about-btn">About Us</button></a>
                        </div>
                        <div className="about-image"><img src={team} alt="business" /></div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default About;
