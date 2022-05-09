import React from 'react'
import '../stylesheet/Tax.css'
import Tax1 from '../assets/Council Tax.png'
import Tax2 from '../assets/CT2.png'

function Tax() {
    return (
        <div className="tax-container">
            <div className="tax-info">
                <div className="tax-section1">
                    <div className="tax-title">
                        <h1>Council Tax</h1>
                    </div>

                    <div className="tax-text">

                        <p>Data gathered in 2019 from over 280 Councils showed that across England, Scotland and Wales more than £230 million was sitting unclaimed in over 1.7 million Council Tax accounts, that were either closed or inactive, whilst more recent data suggests that this figure has risen since.</p>
                        <p>In simple terms, a Council Tax account will be in credit if you've paid more than you owe at any point. Normally, this isn't a problem, but when an account is closed while in credit, it can be an issue. Commons reasons for overpayments include:</p>
                        <p>You've paid for your Council Tax in advance, and the account has been closed prematurely.
                            Forgetting to cancel a payment.
                            Retrospective discounts.</p>
                        <p>If you have ever paid Council Tax and believe that you could be owed a refund, follow the 'start my claim' button below and register with us, so we can manage the process on your behalf. You're most likely to have a claim if you've moved out of a Council or Local Authority area since 1993, and weren't paying by direct debit.</p>








                    </div>
                    <div className="tax-img">
                        <img src={Tax1} alt="work" />
                    </div>
                </div>

                <div className="tax-section2">
                    <div className="tax-title">
                        <h1>Council Tax</h1>
                    </div>

                    <div className="tax-text">
                        <p>Data gathered in 2019 from over 280 Councils showed that across England, Scotland and Wales more than £230 million was sitting unclaimed in over 1.7 million Council Tax accounts, that were either closed or inactive, whilst more recent data suggests that this figure has risen since.</p>
                        <p>In simple terms, a Council Tax account will be in credit if you've paid more than you owe at any point. Normally, this isn't a problem, but when an account is closed while in credit, it can be an issue. Commons reasons for overpayments include:</p>
                        <p>You've paid for your Council Tax in advance, and the account has been closed prematurely.
                            Forgetting to cancel a payment.
                            Retrospective discounts.</p>
                        <p>If you have ever paid Council Tax and believe that you could be owed a refund, follow the 'start my claim' button below and register with us, so we can manage the process on your behalf. You're most likely to have a claim if you've moved out of a Council or Local Authority area since 1993, and weren't paying by direct debit.</p>
                    </div>
                    <div className="tax-img">
                        <img src={Tax2} alt="work" />
                    </div>
                </div>

                <div className="tax-section3">
                    <div className="tax-title">
                        <h1>Council Tax</h1>
                    </div>

                    <div className="tax-text">
                        <p>Data gathered in 2019 from over 280 Councils showed that across England, Scotland and Wales more than £230 million was sitting unclaimed in over 1.7 million Council Tax accounts, that were either closed or inactive, whilst more recent data suggests that this figure has risen since.</p>
                        <p>In simple terms, a Council Tax account will be in credit if you've paid more than you owe at any point. Normally, this isn't a problem, but when an account is closed while in credit, it can be an issue. Commons reasons for overpayments include:</p>
                        <p>You've paid for your Council Tax in advance, and the account has been closed prematurely.
                            Forgetting to cancel a payment.
                            Retrospective discounts.</p>
                        <p>If you have ever paid Council Tax and believe that you could be owed a refund, follow the 'start my claim' button below and register with us, so we can manage the process on your behalf. You're most likely to have a claim if you've moved out of a Council or Local Authority area since 1993, and weren't paying by direct debit.</p>
                    </div>
                    <div className="tax-img">
                        <img src={Tax1} alt="work" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tax