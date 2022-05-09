import React from 'react'
import work from '../assets/mission.png'

function Energy() {
    return (
        <div className="energy-container">
            <div className="energy-info">
                <div className="energy-section1">
                    <div className="energy-title">
                        <h1>Who we are</h1>
                    </div>
                    <div className="energy-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="energy-text">
                        <p>energy Page details</p>
                    </div>
                </div>

                <div className="energy-section2">
                    <div className="energy-title">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="energy-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="energy-text">
                        <p>energy Page details</p>
                    </div>
                </div>

                <div className="energy-section3">
                    <div className="energy-title">
                        <h1>How We Work</h1>
                    </div>
                    <div className="energy-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="energy-text">
                        <p>energy Page details</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Energy
