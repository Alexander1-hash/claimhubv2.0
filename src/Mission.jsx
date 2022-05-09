import React from "react";
import "./stylesheet/Mission.css"
import target from "./assets/target.svg"
import { useScroll } from "./components/useScroll"

function Mission() {
    const [element, controls] = useScroll();
    return (
        <div className="mission-container" ref={element}>
            <div className="mission-wrapper">
                <section className="mission-section">
                    <div className="mission-title">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="mission-info">
                        <div className="mission-content">
                            <p>ClaimHub digital is a B2C / B2B platform which identifies unclaimed funds, and reclaims it on behalf of both consumers and businesses. In simple terms, we are a service which assists in putting money back in your pocket.</p>
                            <button className="mission-btn">Learn More</button>
                        </div>
                        <div className="mission-image"><img src={target} alt="business" /></div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Mission;
