//By Quinn 
//All of the logic is by uinn, except for the "import" keywords, useEffect, Link, and "export defaqult function Page, is by Anderson 
//All else, including the image sources, is by Quinn

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

     <div id="main-museums">
    <h2 className="museum-heading-museums">Art Museums in Boston</h2>
        <div id="frames-museums">
            <div id="MFA-museums">
                <h3 className="museum-heading-museums">Museum of Fine Arts, Boston</h3>
                <a href="https://www.mfa.org/"><Image src={MFA} alt="exterior of the MFA" className="museum-photo-museums"/></a>
                <ul className="museum-details-museums">
                    <li>Address: 465 Huntington Ave, Boston MA 02215</li>
                    <li>Hours: Monday, Wednesday, Saturday, Sunday (10-5pm) Thursday, Friday (10-10pm)</li>
                    <li>Number of works: ~500,000</li>
                    <li>Price: Adults ($30), Children 7-17 ($14)</li>
                </ul>
                <Link href="/events/museums/museums_events" className="event-button-museums">Upcoming Events</Link>
            </div>

            <div id="ISG-museums">
                <h3 className="museum-heading-museums">Isabella Stewart Gardner</h3>
                <a href="https://www.gardnermuseum.org/"><Image src={ISG} alt="interior of the ISG" className="museum-photo-museums"/></a>
                <ul className="museum-details-museums">
                    <li>Address: 25 Evans Way, Boston MA 02215</li>
                    <li>Hours: Monday, Wednesday, Thursday, Friday (11-5pm) Saturday + Sunday (10-5pm)</li>
                    <li>Number of Works: ~18,000</li>
                    <li>Price: Adults ($22), Children {"<"}17 (Free) Students (Free for BU, $15 for other)</li>
                </ul>
                <Link href="/events/museums/museums_events" className="event-button-museums">Upcoming Events</Link>
            </div>

            <div id="HAM-museums">
                <h3 className="museum-heading-museums">Harvard Art Museums</h3><br/>
                <a href="https://harvardartmuseums.org/"><Image src={HAM} alt="Harvard Art Museums interior" className="museum-photo-museums"/></a>
                <ul className="museum-details-museums">
                    <li>Address: 32 Quincy St, Cambridge MA 02138</li>
                    <li>Hours: Tuesday-Sunday (10-5pm) Monday (Closed)</li>
                    <li>Number of Works: ~250,000</li>
                    <li>Price: Free for all!</li>
                </ul>
                <Link href="/events/museums/museums_events" className="event-button-museums">Upcoming Events</Link>
            </div>

            <div id="ICA-museums">
                <h3 className="museum-heading-museums">Institute of Contemporary Art</h3>
                <a href="https://www.icaboston.org/"><Image src={ICA} alt="Exterior of the ICA in Seaport" className="museum-photo-museums"/></a>
                <ul className="museum-details-museums">
                    <li>Address: 25 Harbor Shore Dr, Boston, MA 02210</li>
                    <li>Hours: Monday (Closed) Tuesday, Wednesday, Saturday, Sunday (10-5pm) Thursday, Friday (10-9pm)</li>
                    <li>Number of Works: ~240</li>
                    <li>Price: Adults ($20), {"<"}18 (Free), Students ($15), Thursday Nights Free!</li>
                </ul>
               <Link href="/events/museums/museums_events" className="event-button-museums">Upcoming Events</Link>
            </div>
        </div>

    {/*<!--   CONTAINER ENDS  -->*/}

    {/*<!--slideshow INFO FROM W3SCHOOLS-->*/}
    <div className="slideshow-container-museums">
        <h2 className="museum-heading-museums">Famous Paintings in Boston, and where!</h2>
        {/*<!--images display caption texts and number-->*/}
        <div className="mySlides-museums fade-museums">
            <div className="numbertext-museums">1 / 3</div>
            <Link href="/credits"><Image src={BostonCommon} alt="A dusktime painting of the Boston Common
            by Childe Hassam"/></Link>
            <p className="text-museums">At Dusk (Boston Common at Twilight) by Childe Hassam at the MFA</p>
        </div>

        <div className="mySlides-museums fade-museums">
            <div className="numbertext-museums">2 / 3</div>
             <Link href="/credits"><Image src={eljaleo}
                                                   alt="A painting of a Spanish Flamenco dancer by John Singer Sargent"/></Link>
            <p className="text-museums">El Jaleo by John Singer Sargent at the ISG</p>
        </div>

        <div className="mySlides-museums fade-museums">
            <div className="numbertext-museums">3 / 3</div>
            <Link href="/credits"><Image src={train} alt="A train entering the station at Saint-Lazare"/></Link>
            <p className="text-museums">The Gare Saint-Lazare: Arrival of a Train at the Harvard Art Museum</p>
        </div>

       {/*<!--next&previous buttons-->*/}
        <a className="prev-museums" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next-museums" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
    <br/>

   {/*<!--the dots--> */}
    <div id="dots-museums">
        <span className="dot-museums" onClick={() => currentSlide(1)}></span>
        <span className="dot-museums" onClick={() => currentSlide(2)}></span>
        <span className="dot-museums" onClick={() => currentSlide(3)}></span>
    </div>
    {/*<!--end slideshow-->*/}

    </div>

    )
}
