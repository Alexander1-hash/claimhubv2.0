import React from "react";
import fly from "./assets/fly.jpeg"
import "./stylesheet/Blog.css"

function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-wrapper">
                <div className="blog-title-section">
                    <div className="blog-title">
                        <h1>Articles</h1>
                    </div>
                    <div className="blog-paragraph">
                        <p>Have a read yourself on some of the articles and insights</p>
                    </div>
                </div>

                <div className="blog-card-area">
                    <div className="blog-cards">
                        <div className="blog-card">
                            <div className="blog-image">
                                <img src={fly} alt="aeroplane" />
                            </div>
                            <div className="blog-heading"><h2>Flight delays</h2></div>
                            <div className="blog-description">Brits have Millions in unclaimed money from flight delays say myles mcmillan</div>
                            <div className="blog-btn"><button>Read More</button></div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-image"><img src={fly} alt="aeroplane" /></div>
                            <div className="blog-heading"><h2>Flight delays</h2></div>
                            <div className="blog-description">Brits have Millions in unclaimed money from flight delays say myles mcmillan</div>                                                    <div className="blog-btn"><button>Read More</button></div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-image"><img src={fly} alt="aeroplane" /></div>
                            <div className="blog-heading"><h2>Flight delays</h2></div>
                            <div className="blog-description">Brits have Millions in unclaimed money from flight delays say myles mcmillan</div>
                            <div className="blog-btn"><button>Read More</button></div>
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
