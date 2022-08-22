import React from "react";
import tp from "./assets/tp.png"
import "./stylesheet/Testimonials.css"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"
import { TiStar, TiStarHalf } from "react-icons/ti"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { useScroll } from "./components/useScroll"

//swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Testimonials() {

    return (
        <div className="testimonials-container">
            <div className="testimonials-wrapper">
                <div className="testimonial-title-area">
                    <h1>Testimonials</h1>
                    <h2>See what our clients are saying about us</h2>
                </div>
                <div className="reviewer-section">
                    <div className="reviewer-logos">
                        <div className="trustpilot-logo">

                            <img src={tp} alt="trustpilot" />

                            <div className="google-stars">
                                <TiStar color="white" />
                                <TiStar color="white" />
                                <TiStar color="white" />
                                <TiStarHalf color="white" />


                            </div>
                        </div>
                    </div>
                </div>


                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                ><div className="testimonial-cards">

                        <SwiperSlide><div className="testimonial">
                            <div className="testimonial-text">
                                <FaQuoteLeft />
                                The team has been brilliant with my partner and I. They've been quick in responding and proactive in helping us with our claim for a Council Tax refund. Friendly and down to earth. Highly recommended!
                                < FaQuoteRight />
                            </div>
                            <div className="testimonial-name">
                                <h3>Claire Holland

                                </h3>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide> <div className="testimonial">
                            <div className="testimonial-text">
                                <FaQuoteLeft />
                                I was hesitant at first as I hadn’t heard of the company before but I’d use them again. I’m not allowed to disclose what they recovered for me or how much but I wouldn’t of known that I was owed money otherwise. I would very highly recommend claimhub, they really did put a smile on my face. Thank you James I really appreciate everything.
                                < FaQuoteRight />
                            </div>
                            <div className="testimonial-name">
                                <h3>Jay Adewumi</h3>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="testimonial">
                            <div className="testimonial-text">
                                <FaQuoteLeft />

                                A lovely surprise. Got a letter off them that they’d done some checks and have found out that I was owed just under 500 pounds – the money was in my account within three weeks. Not a lifechanging amount but every penny is welcome given the current climate. Lovely genuine people and I’d recommend…especially if I can get a cheeky fee.
                                < FaQuoteRight />
                            </div>
                            <div className="testimonial-name">
                                <h3>
                                    Russell Cole</h3>
                            </div>
                        </div></SwiperSlide>

                        <SwiperSlide><div className="testimonial">
                            <div className="testimonial-text">
                                <FaQuoteLeft />

                                My mum was happy with the service as they got her some money back, thanks.
                                < FaQuoteRight />
                            </div>
                            <div className="testimonial-name">
                                <h3>
                                    Sunita Patel</h3>
                            </div>
                        </div></SwiperSlide>

                        <SwiperSlide> <div className="testimonial">
                            <div className="testimonial-text">
                                <FaQuoteLeft />

                                A help for those who need a hand, especially with the plethora of issues that can arise and the time taken trying to contact the council myself.
                                < FaQuoteRight />
                            </div>
                            <div className="testimonial-name">
                                <h3>
                                    Edith Cooke

                                </h3>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>  <div className="testimonial">
                            <div className="testimonial-text">
                                <FaQuoteLeft />

                                No nonsense. Just straight to the point and extremely efficient too. Really pleased with their service 9/10 as there’s always room for some improvement
                                < FaQuoteRight />
                            </div>
                            <div className="testimonial-name">
                                <h3>
                                    Danny

                                </h3>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial">
                                <div className="testimonial-text">
                                    <FaQuoteLeft />

                                    Thank Lucas for the best service.

                                    < FaQuoteRight />
                                </div>
                                <div className="testimonial-name">
                                    <h3>

                                        Deniz Aydin

                                    </h3>
                                </div>
                            </div></SwiperSlide>



                    </div>
                </Swiper>

            </div>

        </div>
    )
}

export default Testimonials;
