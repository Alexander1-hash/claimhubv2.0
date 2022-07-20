

import React from 'react'
import '../stylesheet/Loans.css'
import student from '../assets/student.svg'

function Loans() {
    return (
        <div className="loans-container">
            <div className="loans-info">
                <div className="loans-title">
                    <h1>Student Loans</h1>
                </div>
                <div className="loans-section1">


                    <div className="loans-text">
                        <p>

                            Many people have their student loan repayments automatically deducted from their wages each month, and it's easy not to notice and assume all is well. Yet 100,000's of people accidentally overpay their student loans each year – and if you have, you can reclaim the money.</p>

                        <p> Figures obtained through research undertaken in 2021 show that the Student Loans Company had £18.3m in overpayments awaiting refund, to nearly 60,000 former students from 2015-20, whilst more recent data shows this figure to be circa £32m dating back to the 2011/12 financial year.</p>

                        <p>There are a number of reasons that you might have overpaid your student loan, including:
                            You shouldn't start repaying your loan until the April AFTER you've finished your studies.
                            You shouldn't start repaying your student loan until you earn above a specific threshold.
                            You've paid off your loan but they've continued to take repayments.
                            You're recorded as being on the wrong repayment plan, meaning you've been repaying too much.</p>

                        <p>If you have ever repaid a student loan and believe that you could be owed a refund, follow the 'start my claim' button below and register with us, so we can manage the process on your behalf.</p>
                    </div>
                    <div className="loans-img">
                        <img src={student} alt="work" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Loans
