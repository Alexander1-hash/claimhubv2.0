import React from 'react'
import '../stylesheet/Water.css'
import work from '../assets/mission.png'

function Water() {
    return (
        <div className="water-container">
            <div className="water-info">
                <div className="water-section1">
                    <div className="water-title">
                        <h1>Utilities</h1>
                    </div>

                    <div className="water-text">

                        <p>If you've ever switched energy firms and were in credit, you should've been given that money back. Yet for years, many energy firms pocketed the cash, operating a "don't ask, don't get" policy.
                        </p>
                        <p>There are various reasons as to why unclaimed credit may have been left on an account, such as after a customer has passed away, or if a direct debit wasn't cancelled in time, meaning they kept on taking payments after you'd moved.
                            Despite suppliers now making much more of an effort to return cash taken from customers who'd made overpayments, there is still £100's millions sitting unclaimed on their accounts.</p>
                        <p>If you have ever paid for a utility bill and believe that you could be owed a refund, even if you still live in the property today, then follow the 'start my claim' button below and register with us, so we can manage the process on your behalf.</p>
                    </div>
                    <div className="water-img">
                        <img src={work} alt="work" />
                    </div>
                </div>

                {/* <div className="water-section2">
                    <div className="water-title">
                        <h1>Utilities (i.e. gas, electric, water)</h1>
                    </div>

                    <div className="water-text">
                        <p>

                            If you've ever switched energy firms and were in credit, you should've been given that money back. Yet for years, many energy firms pocketed the cash, operating a "don't ask, don't get" policy.

                            There are various reasons as to why unclaimed credit may have been left on an account, such as after a customer has passed away, or if a direct debit wasn't cancelled in time, meaning they kept on taking payments after you'd moved.
                            Despite suppliers now making much more of an effort to return cash taken from customers who'd made overpayments, there is still £100's millions sitting unclaimed on their accounts.

                            If you have ever paid for a utility bill and believe that you could be owed a refund, even if you still live in the property today, then follow the 'start my claim' button below and register with us, so we can manage the process on your behalf.  </p>
                    </div>
                    <div className="water-img">
                        <img src={work} alt="work" />
                    </div>
                </div>

                <div className="water-section3">
                    <div className="water-title">
                        <h1>Utilities (i.e. gas, electric, water)</h1>
                    </div>

                    <div className="water-text">
                        <p>

                            If you've ever switched energy firms and were in credit, you should've been given that money back. Yet for years, many energy firms pocketed the cash, operating a "don't ask, don't get" policy.

                            There are various reasons as to why unclaimed credit may have been left on an account, such as after a customer has passed away, or if a direct debit wasn't cancelled in time, meaning they kept on taking payments after you'd moved.
                            Despite suppliers now making much more of an effort to return cash taken from customers who'd made overpayments, there is still £100's millions sitting unclaimed on their accounts.

                            If you have ever paid for a utility bill and believe that you could be owed a refund, even if you still live in the property today, then follow the 'start my claim' button below and register with us, so we can manage the process on your behalf.  </p>
                    </div>
                    <div className="water-img">
                        <img src={work} alt="work" />
                    </div>
                </div> */}

            </div>

        </div>
    )
}

export default Water