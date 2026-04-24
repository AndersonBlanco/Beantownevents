'use client'; 
import Image from "next/image"
import OutsideFacadeMFA from "../../src/museums/MFA.jpg"
import ISG from "./src/ISGFrame.jpg"
import HAM from "./src/HAMFrame.jpg"
import ICA from "./src/ICAFrame.jpg"
import BostonCommon from "../../src/museums/BostonCommon.jpg"
import eljaleo from "../../src/museums/eljaleo.jpg"
import MFA from "./src/MFAFrame.png"
import train from "../../src/museums/train.jpg"
import { useEffect, useState } from "react";
//import  "../index.css"
import {Museums_logic, plusSlides, showSlides, currentSlide, } from "./museums-quinn";
import "./museums.css"
import Link from "next/link";



export default function Page(){
    // Quinn //

    useEffect(() =>{
        Museums_logic(); 
    })
    return(

     <div className="main">
    <h2 className="museum-heading">Art Museums in Boston</h2>
        <div id="frames">
            <div id="MFA">
                <h3 className="museum-heading">Museum of Fine Arts, Boston</h3>
                <a href="https://www.mfa.org/"><Image src={MFA} alt="exterior of the MFA" className="museum-photo"/></a>
                <ul className="museum-details">
                    <li>Address: 465 Huntington Ave, Boston MA 02215</li>
                    <li>Hours: Monday, Wednesday, Saturday, Sunday (10-5pm) Thursday, Friday (10-10pm)</li>
                    <li>Number of works: ~500,000</li>
                    <li>Price: Adults ($30), Children 7-17 ($14)</li>
                </ul>
                <Link href="/events/museums/museums_events" className="event-button">Upcoming Events</Link>
            </div>

            <div id="ISG">
                <h3 className="museum-heading">Isabella Stewart Gardner</h3>
                <a href="https://www.gardnermuseum.org/"><Image src={ISG} alt="interior of the ISG" className="museum-photo"/></a>
                <ul className="museum-details">
                    <li>Address: 25 Evans Way, Boston MA 02215</li>
                    <li>Hours: Monday, Wednesday, Thursday, Friday (11-5pm) Saturday + Sunday (10-5pm)</li>
                    <li>Number of Works: ~18,000</li>
                    <li>Price: Adults ($22), Children {"<"}17 (Free) Students (Free for BU, $15 for other)</li>
                </ul>
                <Link href="/events/museums/museums_events" className="event-button">Upcoming Events</Link>
            </div>

            <div id="HAM">
                <h3 className="museum-heading">Harvard Art Museums</h3><br/>
                <a href="https://harvardartmuseums.org/"><Image src={HAM} alt="Harvard Art Museums interior" className="museum-photo"/></a>
                <ul className="museum-details">
                    <li>Address: 32 Quincy St, Cambridge MA 02138</li>
                    <li>Hours: Tuesday-Sunday (10-5pm) Monday (Closed)</li>
                    <li>Number of Works: ~250,000</li>
                    <li>Price: Free for all!</li>
                </ul>
                <Link href="/events/museums/museums_events" className="event-button">Upcoming Events</Link>
            </div>

            <div id="ICA">
                <h3 className="museum-heading">Institute of Contemporary Art</h3>
                <a href="https://www.icaboston.org/"><Image src={ICA} alt="Exterior of the ICA in Seaport" className="museum-photo"/></a>
                <ul className="museum-details">
                    <li>Address: 25 Harbor Shore Dr, Boston, MA 02210</li>
                    <li>Hours: Monday (Closed) Tuesday, Wednesday, Saturday, Sunday (10-5pm) Thursday, Friday (10-9pm)</li>
                    <li>Number of Works: ~240</li>
                    <li>Price: Adults ($20), {"<"}18 (Free), Students ($15), Thursday Nights Free!</li>
                </ul>
               <Link href="/events/museums/museums_events" className="event-button">Upcoming Events</Link>
            </div>
        </div>

    {/*<!--   CONTAINER ENDS  -->*/}

    {/*<!--slideshow INFO FROM W3SCHOOLS-->*/}
    <div className="slideshow-container">
        <h2 className="museum-heading-slideshow">Famous Paintings in Boston, and where!</h2>
        {/*<!--images display caption texts and number-->*/}
        <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <Link href="/credits" className = "slideshow-image-link"><Image className = "slideshow-image" src={BostonCommon} alt="A dusktime painting of the Boston Common
            by Childe Hassam"/></Link>
            <p className="text">At Dusk (Boston Common at Twilight) by Childe Hassam at the MFA</p>
        </div>

        <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
             <Link href="/credits"><Image className = "slideshow-image" src={eljaleo}
                                                   alt="A painting of a Spanish Flamenco dancer by John Singer Sargent"/></Link>
            <p className="text">El Jaleo by John Singer Sargent at the ISG</p>
        </div>

        <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <Link href="/credits"><Image className = "slideshow-image" src={train} alt="A train entering the station at Saint-Lazare"/></Link>
            <p className="text">The Gare Saint-Lazare: Arrival of a Train at the Harvard Art Museum</p>
        </div>

       {/*<!--next&previous buttons-->*/}
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
    <br/>

   {/*<!--the dots--> */}
    <div id="dots">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
    </div>
    {/*<!--end slideshow-->*/}

    </div>

    )
}