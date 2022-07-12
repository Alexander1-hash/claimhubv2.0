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
                        <h1>Types of Claim</h1>
                    </div>
                    <div className="mission-info">
                        <div className="mission-content">
                            <h2>One stop shop for all of your claims</h2>

                            <p>We manage a number of different claim types for our clients, including the following:</p>
                            <div className="claimtypes-list">
                                <ul>
                                    <li>Council Tax</li>
                                    <li>Business Rates/NNDR</li>
                                    <li>Local Authority Fees</li>
                                    <li>Student Loans</li>
                                    <li>Utilities</li>
                                </ul>
                            </div>


                            <a href="/aboutus"><button className="mission-btn">CLAIMHUB</button></a>
                        </div>
                        <div className="mission-image"><img src={target} alt="business" /></div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Mission;
