import React from "react";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaFlagCheckered, FaRegHandshake, FaRegComments } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si"
import { BsFileEarmarkCheck } from "react-icons/bs"
import { BiFileFind } from "react-icons/bi"
import { useScroll } from "./components/useScroll"

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
                            <div className="step-icon">
                                <FaFlagCheckered size={42} />
                            </div>
                            <div className="step-text">
                                <p>Select claim type</p>
                            </div>
                        </div>
                        <div className="step-box step-2">
                            <div className="step-icon">
                                <SiMinutemailer size={42} />
                            </div>
                            <div className="step-text">
                                <p>Submit requested info</p>
                            </div>
                        </div>
                        <div className="step-box step-3">
                            <div className="step-icon">
                                <BsFileEarmarkCheck size={42} />
                            </div>
                            <div className="step-text">
                                <p>Review submitted info</p>
                            </div>
                        </div>
                        <div className="step-box step-4">
                            <div className="step-icon">
                                <FaRegHandshake size={42} />
                            </div>
                            <div className="step-text">
                                <p>Submit claim on your behalf</p>
                            </div>
                        </div><div className="step-box step-5">
                            <div className="step-icon">
                                <FaRegComments size={42} />
                            </div>
                            <div className="step-text">
                                <p>Ongoing communication</p>
                            </div>
                        </div>
                        <div className="step-box step-6">
                            <div className="step-icon">
                                <BiFileFind size={42} />
                            </div>
                            <div className="step-text">
                                <p>Credit identified</p>
                            </div>
                        </div>
                        <div className="step-box step-7">
                            <div className="step-icon">
                                <RiMoneyPoundCircleFill size={42} />
                            </div>
                            <div className="step-text">
                                <p>Pay you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;
