import React from "react";
import google from "./assets/google.png"
import tp from "./assets/tp.png"
import { AiFillStar } from 'react-icons/ai'
import "./stylesheet/Testimonials.css"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useScroll } from "./components/useScroll"

function Testimonials() {
    const [element, controls] = useScroll();
    return (
        <div className="testimonials-container" ref={element}>
            <div className="testimonials-wrapper">
                <div className="testimonial-title-area">
                    <h1>Testimonials</h1>
                    <p>See what our clients are saying about us</p>
                </div>
                <div className="reviewer-section">
                    <div className="reviewer-logos">
                        <div className="trustpilot-logo">
                            <img src={tp} alt="trustpilot" />
                            <div className="google-stars">
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                            </div>
                        </div>

                        <div className="google-logo">
                            <img src={google} alt="googele" />
                            <div className="google-stars">
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                                <AiFillStar color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        // when window width is >= 640px


                        // when window width is >= 768px
                        900: {
                            width: 900,
                            slidesPerView: 3,
                        },
                    }}
                >



                    <div className="testimonial-cards">
                        <SwiperSlide>
                            <div className="testimonial">

                                <div className="testimonial-text">

                                    <FaQuoteLeft />
                                    Gatsby believed in the green light, the orgastic future that year by year recedes before us.
                                    It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
                                    And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>Jon doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial">

                                <div className="testimonial-text">
                                    <FaQuoteLeft />
                                    Gatsby believed in the green light, the orgastic future that year by year recedes before us.
                                    It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
                                    And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>Jon doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial">
                                <div className="testimonial-text">
                                    <FaQuoteLeft />
                                    Gatsby believed in the green light, the orgastic future that year by year recedes before us.
                                    It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
                                    And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>Jon doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial">
                                <div className="testimonial-text">
                                    <FaQuoteLeft />
                                    Gatsby believed in the green light, the orgastic future that year by year recedes before us.
                                    It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
                                    And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>Jon doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial">
                                <div className="testimonial-text">
                                    <FaQuoteLeft />
                                    Gatsby believed in the green light, the orgastic future that year by year recedes before us.
                                    It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
                                    And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>Jon doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial">
                                <div className="testimonial-text">
                                    <FaQuoteLeft />
                                    Gatsby believed in the green light, the orgastic future that year by year recedes before us.
                                    It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
                                    And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>Jon doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>



                </Swiper>

            </div>

        </div>
    )
}

export default Testimonials;
