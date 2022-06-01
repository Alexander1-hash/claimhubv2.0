import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiMinutemailer } from "react-icons/si"
import { BsFileEarmarkCheck } from "react-icons/bs"
import { useScroll } from "./components/useScroll"
import Circle from "./components/Circle";

import "./stylesheet/Steps.css"

function Steps() {
    const [element, controls] = useScroll();
    return (
        <div className="steps-container" ref={element}>
            <div className="steps-wrapper">
                <div className="steps-content">
                    <div className="steps-title">
                        <h1>How it works</h1>
                        <p>you can start a claim in just a few easy steps</p>
                    </div>
                    < div className="steps-list">
                        <div className="step-box step-1">
                            <Circle number={1} />
                            <div className="step-text">
                                <h3>Register</h3>
                                <p>Simply register for free by completing our application form</p>
                            </div>
                        </div>
                        <div className="step-box step-2">
                            <Circle number={2} />
                            <div className="step-text">
                                <h3>Claim</h3>
                                <p>We submit the claim on your behalf to identify any monies owed</p>
                            </div>
                        </div>
                        <div className="step-box step-3">
                            <Circle number={3} />

                            <div className="step-text">
                                <h3>Get Paid</h3>
                                <p>Once we have established money is being<br /> held on your account,we will recover the money and pay you!</p>
                            </div>
                        </div>
                    </div>
                    <div className="step-claim-btn"><button>START YOUR CLAIM</button></div>
                </div>
            </div>
        </div>
    )
}

export default Steps;
