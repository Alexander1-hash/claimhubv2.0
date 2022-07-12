import React from "react";
import mail from "../assets/mail.svg"
import "../stylesheet/contact.css"

function Contact() {
    return (
        <div className="Contact-container">
            <div className="contact-title">
                <h1> Contact Us</h1>
            </div>

            <div className="contact-form-container">
                <div className="contact-text">
                    <h2>Get in touch</h2>
                    <div className="contact-business-info">
                        <p>Email: info@claimhub.com</p>
                        <p>Phone:xxxxxxxx</p>
                    </div>


                    <p>Thank you for you message we aim to contact you within 24 hours</p>
                </div>
                <form className="contact-form">



                    <input className=" contact-name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"

                    />

                    <input className=" contact-email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"

                    />

                    <textarea className="message-area" id="message" placeholder="Enter message here..."></textarea>

                    <button className="send-btn" type="submit">Send</button>
                </form>
            </div>

        </div>
    );
}

export default Contact;
