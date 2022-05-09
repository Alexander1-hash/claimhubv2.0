import React from 'react'
import '../stylesheet/fees.css'
import table from '../assets/Examples Table.png'

function Fees() {
    return (
        <div className="fees-container">
            <div className="fees-info">
                <div className="fees-section1">
                    <div className="fees-title">
                        <h1>Our Fees </h1>
                    </div>

                    <div className="fees-text">
                        <p>When it comes to fees, we like to keep things simple. We charge 25% on any money we get back for you and we don't charge VAT.
                            You don’t have to pay us anything unless we're successful in getting your money back.</p>
                        <p> Below are examples for refunds you will receive</p>

                    </div>
                    <div className="fees-img">
                        <img src={table} alt="work" />
                    </div>
                </div>

                <div className="fees-section2">
                    <div className="fees-title">
                        <h1>Fee section 2</h1>
                    </div>
                    <div className="fees-img">
                        <img src={table} alt="work" />
                    </div>
                    <div className="fees-text">
                        <p>When it comes to fees, we like to keep things simple. We charge 25% on any money we get back for you and we don't charge VAT.
                            You don’t have to pay us anything unless we're successful in getting your money back.</p>
                        <p> Below are examples for refunds you will receive</p>

                    </div>
                </div>

                <div className="fees-section3">
                    <div className="fees-title">
                        <h1>Fee section 3</h1>
                    </div>
                    <div className="fees-img">
                        <img src={table} alt="work" />
                    </div>
                    <div className="fees-text">
                        <p>When it comes to fees, we like to keep things simple. We charge 25% on any money we get back for you and we don't charge VAT.
                            You don’t have to pay us anything unless we're successful in getting your money back.</p>
                        <p> Below are examples for refunds you will receive</p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Fees
