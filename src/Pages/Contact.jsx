import React, { useRef } from "react";
import mail from "../assets/mail.svg";
import contactimage from "../assets/contact-image.svg"
import "../stylesheet/contact.css"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yk1qj2g', 'template_mfe71rl', form.current, 'iwzs9Pp8GdeiU79qe')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent')
            }, (error) => {
                console.log(error.text);
            }
            );

        e.target.reset();
    };

    return (
        <div className="Contact-container">
            <div className="contact-title">

            </div>

            <div className="contact-form-container">
                <div className="contact-form-image">
                    <img src={contactimage} alt="" />
                </div>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="contact-text">
                        <h2>Get in touch with our team today!</h2>
                    </div>


                    <input className="contact-input contact-name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"

                    />

                    <input className="contact-input contact-email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"

                    />

                    <input className="contact-input my-mobile"
                        type="number"
                        placeholder="Phone Number"
                        name="mobile"
                        id="mobile"

                    />

                    <textarea className="message-area" name="message" id="message" placeholder="Enter message here..."></textarea>

                    <button className="send-btn" type="submit">Send Message</button>


                </form>
            </div>

        </div>
    );
}

export default Contact;
