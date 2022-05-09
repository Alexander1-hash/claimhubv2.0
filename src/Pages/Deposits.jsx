import React from 'react'
import '../stylesheet/Deposits.css'
import work from '../assets/mission.png'

function Deposits() {
    return (
        <div className="deposits-container">
            <div className="deposits-info">
                <div className="deposits-section1">
                    <div className="deposits-title">
                        <h1>Who we are</h1>
                    </div>
                    <div className="deposits-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="deposits-text">
                        <p>deposits Page details</p>
                    </div>
                </div>

                <div className="deposits-section2">
                    <div className="deposits-title">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="deposits-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="deposits-text">
                        <p>deposits Page details</p>
                    </div>
                </div>

                <div className="deposits-section3">
                    <div className="deposits-title">
                        <h1>How We Work</h1>
                    </div>
                    <div className="deposits-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="deposits-text">
                        <p>deposits Page details</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Deposits
