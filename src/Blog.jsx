import React from "react";
import img1 from "./assets/energybiils.jpeg"
import img2 from "./assets/credit.jpeg"
import img3 from "./assets/taximage.jpeg"
import "./stylesheet/Blog.css"


function Blog() {
    const handleClick1 = () => {
        window.open("https://londonnewsonline.co.uk/lewisham-council-holding-8-7million-in-overpaid-council-tax/");
    };
    const handleClick2 = () => {
        window.open("https://www.manchestereveningnews.co.uk/news/uk-news/millions-brits-warned-energy-bills-20493095");
    };
    const handleClick3 = () => {
        window.open("https://www.theguardian.com/money/2021/may/05/student-loans-company-holds-overpayments");
    };

    return (


        <div className="blog-container" id="blog">

            <div className="blog-wrapper">
                <div className="blog-title-section">

                    <div className="blog-title">
                        <h1>Blog</h1>
                    </div>

                    {/* <div className="blog-paragraph">
                        <p>Have a read yourself on some of the articles and insights</p>
                    </div> */}
                </div>

                <div className="blog-card-area">
                    <div className="blog-cards">
                        <div className="blog-card">

                            {/*<div className="blog-image"><img className="first-image" src={img1} alt="aeroplane" />*/}

                            <div className="blog-heading"><h3>Lewisham council holding £8.7million in overpaid council tax</h3></div>
                            <div className="blog-description">London News Online</div>
                            <div className="blog-btn"><button onClick={handleClick1}>Read More</button></div>
                        </div>
                        <div className="blog-card">
                            {/*<div className="blog-image"><img className="second-image" src={img2} alt="aeroplane" /></div>*/}
                            <div className="blog-heading"><h3>Its been estimated that some of the UK's largest energy suppliers are sat on an excess of £1.8billion worth of consumer credit</h3></div>
                            <div className="blog-description"><p>Manchester Evening News</p></div>
                            <div className="blog-btn"><button onClick={handleClick2}>Read More</button></div>
                        </div>
                        <div className="blog-card">
                            {/*<div className="blog-image"><img className="third-image" src={img3} alt="aeroplane" /></div>*/}
                            <div className="blog-heading"><h3>Student  Loans Company holds £18.3million in overpayments made since 2015</h3></div>
                            <div className="blog-description">The Guardian</div>
                            <div className="blog-btn"><button className="btn-btn" onClick={handleClick3}>Read More</button></div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default Blog;
