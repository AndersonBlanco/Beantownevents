// Jackson 
"use client"; 
import "./contact_us.css"
import Contact_us_logic from "./contact-us"
import { useEffect } from "react"

export default function ContactUs(){
    useEffect(() =>{
        Contact_us_logic(); 
    },[])
    return(
         <div id="wrapper"> 
            <div id="window">
                <div id="popup-bar">
                    <h2 id="popup-title">Contact Us</h2>
                    {/*             <!-- &times; is the HTML entity for the multiplication sign or "x",
                         it is being used as an "X" close button icon. --> */}
                    <button id="close-btn">&times;</button>
                </div>

                <div id="window-content">
                    <p id="popup-subtitle">We will get back to you as soon as possible. Customer satisfaction is our #1
                        priority!</p>

                    <label label="contact-name">Full Name</label>
                    <input type="text" id="contact-name" name="contact-name" placeholder="Enter your name..."/>

                    <p id="contact-method-label">Preferred Contact Method:</p>

                    <div className="contact-radio-group">
                        <input type="radio" id="method-email" name="contact-method" value="email"/>
                        <label label="method-email">Email</label>
                    </div>

                    <div className="contact-radio-group">
                        <input type="radio" id="method-phone" name="contact-method" value="phone"/>
                        <label label="method-phone">Phone</label>
                        {/*  <!-- Inline style display: none used here so JavaScript can togge visiblity
                             Based on which radio button the user selects. The JS reads/sets element.style. display directly. -->*/}
                    </div>

                    <div id="email-field" style = {{display: "none"}}>{/* style="display: none;" */}
                        <label label="contact-email">Email Address:</label>
                        <input type="text" id="contact-email" name="contact-email" placeholder="example@gmail.com"/>
                    </div>

                    <div id="phone-field" style = {{display: "none"}} >{/* style="display: none;" */}
                        <label label="contact-phone">Phone Number:</label>
                        <input type="text" id="contact-phone" name="contact-phone" placeholder="e.g. (123)456-7890"/>
                    </div>

                    <label label="contact-message">Message:</label>
                    <textarea id="contact-message" name="contact-message"
                              placeholder="Enter your message (minimum of 10 words)..."></textarea>

                    <p id="contact-error" style = {{display: "none"}} >{/* style="display: none;" */}Please fill out all the fields correctly.</p>

                    <button id="contact-submit-btn">Submit</button>
                </div>
                
            </div>

           {/*<!-- Success alert some techniques labelm W3Schools -->*/}
           {/*<!-- Loading spinner shown after a valid submission goes through and gives the loading affect label the redirecting message. -->*/}
            <div id="contact-success" style = {{display: "none"}} >{/* style="display: none;" */}
                {/*  <!-- Success alert some techniques from W3Schools -->
            <!-- Loading spinner shown after a valid submission goes through and gives the loading affect for the redirecting message. --> */}
                <h3>Message Sent!</h3>
                <p id="success-message">A member of our team will reach out to you as soon as possible.</p>
                <div id="loading">
                    <p id="redirecting">Redirecting Back To Page</p>
                    <div className="load"></div>
                </div>
            </div>
        </div>

    )
}