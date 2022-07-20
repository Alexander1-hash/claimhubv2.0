import React from 'react'
import '../stylesheet/Aboutus.css'
import about from '../assets/team.svg'


function AboutUs() {
    return (
        <div className="aboutus-container">
            <div className="aboutus-info">
                <div className="aboutus-section1">
                    <div className="aboutus-img">
                        <img src={about} alt="" />
                    </div>
                    <div className="left-aboutus">
                        <div className="aboutus-title">
                            <h1>How we work</h1>
                        </div>
                        <div className="aboutus-text">
                            <p>
                                Across both the Public and Private sectors, there are billions of £'s which remain unreturned by organisation's in receipt of credits, and unclaimed by those due refunds. Despite a responsibility to inform and refund overpayments to customers, organisation's don't always do so, and when they do, it isn't always in a timely manner, in some cases even imposing restrictions on refunds past statutory limitations. Customers are often left in the dark and it is only when they are informed that there may be a credit on account would they ask for a refund..</p>


                        </div>

                    </div>
                    <div class="wavey">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className="aboutus-section2">

                    <h2>In simple terms, ClaimHub are a service which identifies overpayments and unclaimed funds from these organisation's. We then assist you in processing the claim(s), taking the headache away from you, and ultimately putting money back into your pocket.</h2>
                    <div className="box-section">
                        <div className=" box-info box-section1">
                            <h2>Transparency</h2>
                            <p>We use plain English to explain the process and keep you updated along the way whilst we process your claim.</p>
                        </div>
                        <div className=" box-info box-section1">
                            <h2>Data</h2>
                            <p>Our team of experts have and continue to use the latest technology and processes available to identify money which could be owed to you.</p>
                        </div>
                        <div className=" box-info box-section1">
                            <h2>Time-Saving</h2>
                            <p>We take the time and headache away from you by processing the claim(s) on your behalf.

                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutUs
