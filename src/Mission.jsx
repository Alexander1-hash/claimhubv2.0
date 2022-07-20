import React from "react";
import "./stylesheet/Mission.css"
import target from "./assets/target.svg"
import { useScroll } from "./components/useScroll"

function Mission() {
    const [element, controls] = useScroll();
    return (
        <div className="mission-container" ref={element}>
            <div class="type-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
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
