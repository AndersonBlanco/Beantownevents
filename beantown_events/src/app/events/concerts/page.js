'use client';
import "./jackson-concerts.css"
import Image from "next/image"
import jcole from "../../src/jcole.jpg"
import tdgarden_chart_jcole from "../../src/tdgarden-chart-jcole.jpg"
import th_fray from "../../src/the-fray.jpg"

import lbp_chart from "../../src/lbp-chart.jpg"
import boone from "../../src/boone.jpg"
import tdgarden_chart_boone from "../../src/tdgarden-chart-boone.jpg"
import zachbryan from "../../src/zachbryan.jpg"
import gillette_chart from "../../src/gillette-chart.jpg"
import { useEffect } from "react"
import {filterSelection, filterButtonListenerSections} from "./jackson-concerts"
import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";
import { usePathname } from "next/navigation";

export default function Page(){
 const uri = "https://beantown-events.vercel.app/"
          const path = usePathname(); 
    

    useEffect(() =>{
        filterButtonListenerSections(); 
    })


    
    return(
        <div className = "main">
            <h2 id="concerts-heading">Upcoming Concerts in Boston</h2>

            <div id="search-area">
                <label label="search-input">Search for an Artist:</label>
                <input id="search-input" type="text" name="search" placeholder="Search for an artist..."/>
            </div>


            {/* FILTER BUTTONS
                id="myBtnContainer", className="btn", className="filterDiv"
                From W3Schools - https://www.w3schools.com/howto/howto_js_filter_elements.asp
                these class and id names are taken from ths website's pattern. The JS
                in jackson.js uses getElementsByClassName("filterDiv") and getElementsByClass("btn")
                to find and filter the cards and highlight the active button. */}
            <div id="myBtnContainer">
                <button className="btn active" id="btn-all">Show All</button>
                <button className="btn" id="btn-hip-hop">Hip-Hop</button>
                <button className="btn" id="btn-pop">Pop</button>
                <button className="btn" id="btn-country">Country</button>
                <button className="btn" id="btn-rock">Rock</button>
                <button className="btn" id="btn-tdgarden">TD Garden</button>
                <button className="btn" id="btn-lbp">Leader Bank Pavilion</button>
                <button className="btn" id="btn-gillette">Gillette Stadium</button>
            </div>

            {/* COLLAPSE ALL BUTTON */}
            <button id="collapse-all-btn">Collapse All</button>

            {/* CARDS FOR CONCERTS */}
            <div className="container">

                <div className="filterDiv hip-hop tdgarden" id="card-jcole">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="card-left">
                                <h3 className="artist-name">J. Cole</h3>
                                <p className="tour-name">The Fall-Off Tour</p>
                                <ul className="concert-details">
                                    <li>Venue: TD Garden, Boston</li>
                                    <li>Date: August 7, 2026</li>
                                    <li>Time: 8:00 PM</li>
                                    <li>Price: $236</li>
                                </ul>
                                <button className="expand-btn">Expand</button>
                            </div>
                            <div className="card-right">
                                <Image src={jcole} alt="J.Cole" className="artist-photo" />
                            </div>
                        </div>
                        {/* inline style display: none is used here instead of external CSS because
                        the JavaScript toggle checks element.style.display to determine visibility state.
                        The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                        <div className="card-details" style = {{display: "none"}}>
                            <p className="concert-description">
                                J.Cole is bringing his long-awaited tour, The Fall-Off Tour to the TD Garden and is
                                as of now said to be his final tour ever. J.Cole is known for his deep lyricism and
                                the energy he brings to the stage, this tour is a must-see for a Hip-Hop fan in Boston.
                            </p>
                            <div className="card-actions">
                             <button className="btn-primary" onClick={() => handleCheckout([{ price: "price_1TP4iDHo5oc8Dhhwr2pQLhOT", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}>Get Tickets</button>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            {/* inline style display: none is used here instead of external CSS because
                            the JavaScript toggle checks element.style.display to determine visibility state.
                            The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                            <div className="seating-chart" style = {{display: "none"}}>
                                <Image src={tdgarden_chart_jcole} alt="Seating Chart for J. Cole" className="seating-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filterDiv rock lbp" id="card-the-fray">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="card-left">
                                <h3 className="artist-name">The Fray</h3>
                                <p className="tour-name">Summer of Light Tour</p>
                                <ul className="concert-details">
                                    <li>Venue: Leader Bank Pavilion, Boston</li>
                                    <li>Date: August 15, 2026</li>
                                    <li>Time: 7:00 PM</li>
                                    <li>Price: $40</li>
                                </ul>
                                <button className="expand-btn">Expand</button>
                            </div>
                            <div className="card-right">
                                <Image src={th_fray} alt="The Fray" className="artist-photo" />
                            </div>
                        </div>
                        {/* inline style display: none is used here instead of external CSS because
                        the JavaScript toggle checks element.style.display to determine visibility state.
                        The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                        <div className="card-details" style = {{display: "none"}}>
                            <p className="concert-description">
                                The Fray is a band that really made it big in the early 2000s. They are back
                                and playing their big hits, like their song "How to Save a Life" which is 11x Platinum.
                                If you are in Boston and looking to hear a rock band that will be in Boston, costing as low as
                                $40
                                then this show is for you!
                            </p>
                            <div className="card-actions">
                             <button className="btn-primary" onClick={() => handleCheckout([{ price: "price_1TP4iTHo5oc8DhhwHK8vlmaG", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}>Get Tickets</button>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            {/* inline style display: none is used here instead of external CSS because
                            the JavaScript toggle checks element.style.display to determine visibility state.
                            The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                            <div className="seating-chart" style = {{display: "none"}}>
                                <Image src={lbp_chart} alt="Seating Chart for The Fray" className="seating-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filterDiv pop tdgarden" id="card-benson-boone">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="card-left">
                                <h3 className="artist-name">Benson Boone</h3>
                                <p className="tour-name">Wanted Man Tour</p>
                                <ul className="concert-details">
                                    <li>Venue: TD Garden, Boston</li>
                                    <li>Date: July 15, 2026</li>
                                    <li>Time: 8:00 PM</li>
                                    <li>Price: $144</li>
                                </ul>
                                <button className="expand-btn">Expand</button>
                            </div>
                            <div className="card-right">
                                <Image src={boone} alt="Benson Boone" className="artist-photo" />
                            </div>
                        </div>
                        {/* inline style display: none is used here instead of external CSS because
                        the JavaScript toggle checks element.style.display to determine visibility state.
                        The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                        <div className="card-details" style = {{display: "none"}}>
                            <p className="concert-description">
                                Benson Boone is a big new artist who hits the stage with a large presence.
                                He is known for his large vocal range, flips on stage, and hit songs such as "Beautiful Things".
                                If you are in Boston around this date and love pop music, this show is the one for you.
                            </p>
                            <div className="card-actions">
                             <button className="btn-primary" onClick={() => handleCheckout([{ price: "price_1TP4ifHo5oc8DhhwKvpLLZan", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}>Get Tickets</button>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            {/* inline style display: none is used here instead of external CSS because
                            the JavaScript toggle checks element.style.display to determine visibility state.
                            The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                            <div className="seating-chart" style = {{display: "none"}}>
                                <Image
                                    src={tdgarden_chart_boone}
                                    alt="Seating Chart for Benson Boone"
                                    className="seating-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filterDiv country gillette" id="card-zachbryan">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="card-left">
                                <h3 className="artist-name">Zach Bryan</h3>
                                <p className="tour-name">With Heaven On Tour</p>
                                <ul className="concert-details">
                                    <li>Venue: Gillette Stadium</li>
                                    <li>Date: October 2, 2026</li>
                                    <li>Time: 7:00 PM</li>
                                    <li>Price: $194</li>
                                </ul>
                                <button className="expand-btn">Expand</button>
                            </div>
                            <div className="card-right">
                                <Image src={zachbryan} alt="Zach Bryan" className="artist-photo" />
                            </div>
                        </div>
                        {/* inline style display: none is used here instead of external CSS because
                        the JavaScript toggle checks element.style.display to determine visibility state.
                        The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                        <div className="card-details" style = {{display: "none"}}>
                            <p className="concert-description">
                                Zach Bryan wraps up the end of the year at Gillette Stadium. His raw, honest, and
                                emotional songwriting delivered with a powerful presence. Zach Bryan has become
                                one of the biggest live musicians in the country, and it's for a reason. This concert is right
                                outside of
                                Boston where you can take the MBTA Commuter Rail right to the Stadium.
                            </p>
                            <div className="card-actions">
                             <button className="btn-primary" onClick={() => handleCheckout([{ price: "price_1TP4ipHo5oc8DhhwMYiJPLFX", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}>Get Tickets</button>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            {/* inline style display: none is used here instead of external CSS because
                            the JavaScript toggle checks element.style.display to determine visibility state.
                            The JS sets display to "block" or "none" directly, which uses inline style for initial state detection. */}
                            <div className="seating-chart" style = {{display: "none"}}>
                                <Image src={gillette_chart} alt="Seating Chart for Zach Bryan" className="seating-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTAINER ENDS */}

            {/* SELLING FAST SECTION */}
            <div id="selling-fast">
                <h2>Selling Fast</h2>
                <div id="selling-fast-choice">
                    <h3>J. Cole - TD Garden</h3>
                    <p>
                        Our fastest selling show this year so far. The Fall-Off Tour is being regarded as
                        one of the most anticipated events this year. If you only go to one concert this year, make sure it's
                        this one.
                    </p>
                    <div className="card-actions">
                         <button 
                         id="selling-fast-btn" onClick={() => handleCheckout([{ price: "price_1TP4iDHo5oc8Dhhwr2pQLhOT", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}>Get Tickets Before They're Gone!</button>

                    </div>
                </div>
            </div>

        </div>
    )
}
