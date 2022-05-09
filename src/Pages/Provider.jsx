import React from 'react'
import '../stylesheet/Provider.css'
import work from '../assets/mission.png'
function Provider() {
    return (
        <div className="provider-container">
            <div className="provider-info">
                <div className="provider-section1">
                    <div className="provider-title">
                        <h1>Who we are</h1>
                    </div>
                    <div className="provider-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="provider-text">
                        <p>provider Page details</p>
                    </div>
                </div>

                <div className="provider-section2">
                    <div className="provider-title">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="provider-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="provider-text">
                        <p>provider Page details</p>
                    </div>
                </div>

                <div className="provider-section3">
                    <div className="provider-title">
                        <h1>How We Work</h1>
                    </div>
                    <div className="provider-img">
                        <img src={work} alt="work" />
                    </div>
                    <div className="provider-text">
                        <p>provider Page details</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Provider