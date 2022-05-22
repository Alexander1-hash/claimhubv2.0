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
        window.open("https://londonnewsonline.co.uk/lewisham-council-holding-8-7million-in-overpaid-council-tax/");
    };

    return (


        <div className="blog-container" id="blog">

            <div className="blog-wrapper">
                <div className="blog-title-section">

                    <div className="blog-title">
                        <h1>Articles</h1>
                    </div>

                    {/* <div className="blog-paragraph">
                        <p>Have a read yourself on some of the articles and insights</p>
                    </div> */}
                </div>

                <div className="blog-card-area">
                    <div className="blog-cards">
                        <div className="blog-card">
                            <div className="blog-image">
                                <img src={img1} alt="aeroplane" />
                            </div>
                            <div className="blog-heading"><h2>Flight delays</h2></div>
                            <div className="blog-description">Brits have Millions in unclaimed money from flight delays say myles mcmillan</div>
                            <div className="blog-btn"><button onClick={handleClick1}>Read More</button></div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-image"><img src={img2} alt="aeroplane" /></div>
                            <div className="blog-heading"><h2>Flight delays</h2></div>
                            <div className="blog-description">Brits have Millions in unclaimed money from flight delays say myles mcmillan</div>                                                    <div className="blog-btn"><button onClick={handleClick2}>Read More</button></div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-image"><img src={img3} alt="aeroplane" /></div>
                            <div className="blog-heading"><h2>Flight delays</h2></div>
                            <div className="blog-description">Brits have Millions in unclaimed money from flight delays say myles mcmillan</div>
                            <div className="blog-btn"><button onClick={handleClick3}>Read More</button></div>
                        </div>

                    </div>

                    <div className="read-more-btn">
                        <button>Blog</button>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Blog;
