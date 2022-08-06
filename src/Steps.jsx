import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiMinutemailer } from "react-icons/si"
import { BsFileEarmarkCheck } from "react-icons/bs"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
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
                        <h1>How it works in a few simple steps:</h1>
                    </div>
                    < div className="steps-list">
                        <div className=" step-box step-1">
                            <div className="step-text">
                                <h3>Register</h3>
                                <p> <IoMdCheckmarkCircleOutline /> Via our online application form</p>
                            </div>
                        </div>
                        <div className=" step-box step-2">
                            <div className="step-text">
                                <h3>Claim</h3>

                                <p><IoMdCheckmarkCircleOutline /> We submit the claim on your behalf.</p>
                            </div>
                        </div>
                        <div className="step-box step-3">
                            <div className="step-text">
                                <h3>Get Paid</h3>

                                <p> <IoMdCheckmarkCircleOutline /> Money transferred to your account</p>
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
