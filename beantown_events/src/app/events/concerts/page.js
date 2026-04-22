'use client';
import "./concerts.css"
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
import { handleCheckout } from "../page";
export default function Page(){




    
    return(
        <>
              <div id="main">
            <h2 id="concerts-heading">Upcoming Concerts in Boston</h2>

            <div id="search-area">
                <label for="search-input">Search for an Artist:</label>
                <input id="search-input" type="text" name="search" placeholder="Search for an artist..."/>
            </div>


           {/* <!-- FILTER BUTTONS
                    id="myBtnContainer", class="btn", class="filterDiv"
                    From the webside you gave us: W3Schools
                    These class and id names are taken from this websites pattern.
                    the JS in jackson-concerts.js uses getElementByClassName("filterDiv")
                    and getElementByClassName("btn") to find and filter the cards
                    and highlight the active button. -->*/}
            <div id="myBtnContainer">
                <button class="btn active" id="btn-all">Show All</button>
                <button class="btn" id="btn-hip-hop">Hip-Hop</button>
                <button class="btn" id="btn-pop">Pop</button>
                <button class="btn" id="btn-country">Country</button>
                <button class="btn" id="btn-rock">Rock</button>
                <button class="btn" id="btn-tdgarden">TD Garden</button>
                <button class="btn" id="btn-lbp">Leader Bank Pavilion</button>
                <button class="btn" id="btn-gillette">Gillette Stadium</button>
            </div>

            {/*<!--    COLLAPSE ALL BUTTON    --> */}
            <button id="collapse-all-btn">Collapse All</button>

            {/*<!--    CARDS FOR CONCERTS     -->*/}
            <div class="container">

                <div class="filterDiv hip-hop tdgarden" id="card-jcole">
                    <div class="card-body">
                        <div class="card-top">
                            <div class="card-left">
                                <h3 class="artist-name">J. Cole</h3>
                                <p class="tour-name">The Fall-Off Tour</p>
                                <ul class="concert-details">
                                    <li>Venue: TD Garden, Boston</li>
                                    <li>Date: August 7, 2026</li>
                                    <li>Time: 8:00 PM</li>
                                    <li>Price: $236</li>
                                </ul>
                                <button class="expand-btn">Expand</button>
                            </div>
                            <div class="card-right">
                                <img src="src/jcole.jpg" alt="J.Cole" class="artist-photo"/>
                            </div>
                        </div>
                        <div class="card-details" style="display: none;">
                            <p class="concert-description">
                                J.Cole is bringing his long-awaited tour, The Fall-Off Tour to the TD Garden and is
                                as of now said to be his final tour ever. J.Cole is known for his deep lyricism and
                                the energy he brings to the stage, this tour is a must-see for a Hip-Hop fan in Boston.
                            </p>
                            <div class="card-actions">
                                <a href="">Get Tickets</a>
                                <button class="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div class="seating-chart" style="display: none;">
                                <img src="src/tdgarden-chart-jcole.jpg" alt="Seating Chart for J. Cole" class="seating-img"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="filterDiv pop lbp" id="card-the-fray">
                    <div class="card-body">
                        <div class="card-top">
                            <div class="card-left">
                                <h3 class="artist-name">The Fray</h3>
                                <p class="tour-name">Summer of Light Tour</p>
                                <ul class="concert-details">
                                    <li>Venue: Leader Bank Pavilion, Boston</li>
                                    <li>Date: August 15, 2026</li>
                                    <li>Time: 7:00 PM</li>
                                    <li>Price: $40</li>
                                </ul>
                                <button class="expand-btn">Expand</button>
                            </div>
                            <div class="card-right">
                                <img src="src/the-fray.jpg" alt="The Fray" class="artist-photo"/>
                            </div>
                        </div>
                        <div class="card-details" style="display: none;">
                            <p class="concert-description">
                                The Fray is a band that really made it big in the early 2000s. They are back
                                and playing their big hits, like their song "How to Save a Life" which is 11x Platinum.
                                If you are in Boston and looking to hear a rock band that will be in Boston, costing as low as
                                $40
                                then this show is for you!
                            </p>
                            <div class="card-actions">
                                <a href="">Get Tickets</a>
                                <button class="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div class="seating-chart" style="display: none;">
                                <img src="src/lbp-chart.jpg" alt="Seating Chart for The Fray" class="seating-img"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="filterDiv rock tdgarden" id="card-benson-boone">
                    <div class="card-body">
                        <div class="card-top">
                            <div class="card-left">
                                <h3 class="artist-name">Benson Boone</h3>
                                <p class="tour-name">Wanted Man Tour</p>
                                <ul class="concert-details">
                                    <li>Venue: TD Garden, Boston</li>
                                    <li>Date: July 15, 2026</li>
                                    <li>Time: 8:00 PM</li>
                                    <li>Price: $144</li>
                                </ul>
                                <button class="expand-btn">Expand</button>
                            </div>
                            <div class="card-right">
                                <img src="src/boone.jpg" alt="Benson Boone" class="artist-photo"/>
                            </div>
                        </div>
                        <div class="card-details" style="display: none;">
                            <p class="concert-description">
                                Benson Boone is a big new artist who hits the stage with a large presence.
                                He is known for his large vocal range, flips on stage, and hit songs such as "Beautiful Things".
                                If you are in Boston around this date and love pop music, this show is the one for you.
                            </p>
                            <div class="card-actions">
                                <a href="">Get Tickets</a>
                                <button class="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div class="seating-chart" style="display: none;">
                                <img src="src/tdgarden-chart-boone.jpg" alt="Seating Chart for Benson Boone"
                                     class="seating-img"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="filterDiv country gillette" id="card-zachbryan">
                    <div class="card-body">
                        <div class="card-top">
                            <div class="card-left">
                                <h3 class="artist-name">Zach Bryan</h3>
                                <p class="tour-name">With Heaven On Tour</p>
                                <ul class="concert-details">
                                    <li>Venue: Gillette Stadium</li>
                                    <li>Date: October 2, 2026</li>
                                    <li>Time: 7:00 PM</li>
                                    <li>Price: $194</li>
                                </ul>
                                <button class="expand-btn">Expand</button>
                            </div>
                            <div class="card-right">
                                <img src="src/zachbryan.jpg" alt="Zach Bryan" class="artist-photo"/>
                            </div>
                        </div>
                        <div class="card-details" style="display: none;">
                            <p class="concert-description">
                                Zach Bryan wraps up the end of the year at Gillette Stadium. His raw, honest, and
                                emotional songwriting delivered with a powerful presence. Zach Bryan has become
                                one of te biggest live musicians in the country, and it's for a reason. This concert is right
                                outside of
                                Boston where you can take the MBTA Commuter Rail right to the Stadium.
                            </p>
                            <div class="card-actions">
                                <a href="">Get Tickets</a>
                                <button class="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div class="seating-chart" style="display: none;">
                                <img src="src/gillette-chart.jpg" alt="Seating Chart for Zach Bryan" class="seating-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* <!--   CONTAINER ENDS  --> */
}
            {/*<!--   SELLING FAST SECTION   -->*/}
            <div id="selling-fast">
                <h2>Selling Fast</h2>
                <div id="selling-fast-choice">
                    <h3>J. Cole - TD Garden</h3>
                    <p>
                        Our fastest selling show this year so far. The Fall-Off Tour is being regarded as
                        one of the most anticipated events this year. If you only go to one concert this year, make sure it's
                        this one.
                    </p>
                    <div class="card-actions">
                        <a href="">Get Tickets Before Their Gone!</a>
                    </div>
                </div>
            </div>
        </div>
      
        </>
    )
}