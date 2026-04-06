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
export default function Page(){

    // Jackson //

// FILTER SELECTION SECTION:
// Some code techniques from W3Schools and their Filter Elements.
// Shows/hides cards based on the selected category.
// Resets all buttons to "btn" then sets the clicked one to "btn active"
// .btn.active pattern - from W3Schools
useEffect(() =>{ 
function filterSelection(category) {
    let cards = document.getElementsByClassName("filterDiv");
    let buttons = document.getElementsByClassName("btn");


    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        if (category === "all") {
            cards[i].style.display = "block";
        } else if (cards[i].className.includes(category)) {
            cards[i].style.display = "block";
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "btn";
    }
    if (category === "all") {
        document.getElementById("btn-all").className = "btn active";
    } else if (category === "hip-hop") {
        document.getElementById("btn-hip-hop").className = "btn active";
    } else if (category === "pop") {
        document.getElementById("btn-pop").className = "btn active";
    } else if (category === "country") {
        document.getElementById("btn-country").className = "btn active";
    } else if (category === "rock") {
        document.getElementById("btn-rock").className = "btn active";
    } else if (category === "tdgarden") {
        document.getElementById("btn-tdgarden").className = "btn active";
    } else if (category === "lbp") {
        document.getElementById("btn-lbp").className = "btn active";
    } else if (category === "gillette") {
        document.getElementById("btn-gillette").className = "btn active";
    }
}

// FILTER BUTTON EVENT LISTENERS SECTION
// Each button calls filterSelection() with its category.

document.getElementById("btn-all").addEventListener("click", function () {
    filterSelection("all");
})

document.getElementById("btn-hip-hop").addEventListener("click", function () {
    filterSelection("hip-hop");
})

document.getElementById("btn-pop").addEventListener("click", function () {
    filterSelection("pop");
})

document.getElementById("btn-country").addEventListener("click", function () {
    filterSelection("country");
})

document.getElementById("btn-rock").addEventListener("click", function () {
    filterSelection("rock");
})

document.getElementById("btn-tdgarden").addEventListener("click", function () {
    filterSelection("tdgarden");
})

document.getElementById("btn-lbp").addEventListener("click", function () {
    filterSelection("lbp");
})

document.getElementById("btn-gillette").addEventListener("click", function () {
    filterSelection("gillette");
})

// filterSelection("all") so the page will show all cards as the default

filterSelection("all");

// These variables are shared between multiple spots, so it is declared once at
// the top level so both the collapse all button and the individual buttons can use them.

let expandBtn = document.getElementsByClassName("expand-btn");
let seatingBtn = document.getElementsByClassName("seating-btn");

// COLLAPSE ALL SECTION
// Hides all card-details and seating-chart divs at once.
//Resets all expand and seating button text back to default.

document.getElementById("collapse-all-btn").addEventListener("click", function () {
    let details = document.getElementsByClassName("card-details");
    let seatingCharts = document.getElementsByClassName("seating-chart");

    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    for (let i = 0; i < seatingCharts.length; i++) {
        seatingCharts[i].style.display = "none";
    }
    for (let i = 0; i < expandBtn.length; i++) {
        expandBtn[i].innerHTML = "Expand";
    }
    for (let i = 0; i < seatingBtn.length; i++) {
        seatingBtn[i].innerHTML = "See Seating Chart";
    }
});

// SEATING CHART TOGGLE
// Button is inside card-actions inside card-details.
// parentElement goes to card-actions, parentElement again goes to card-details,
// then finds the seating-chart sibling div.
// Changes button text between "See Seating Chart" and "Hide Seating Chart".

for (let i = 0; i < seatingBtn.length; i++) {
    seatingBtn[i].addEventListener("click", function () {
        let chart = this.parentElement.parentElement.getElementsByClassName("seating-chart")[0];
        if (chart.style.display === "none") {
            chart.style.display = "block";
            this.innerHTML = "Hide Seating Chart";
        } else {
            chart.style.display = "none";
            this.innerHTML = "Show Seating Chart";
        }
    });
}

// EXPAND BUTTON TOGGLE
// Navigated up ParentElement three times from the button to reach card-body,
// then finds card-details and toggles display.
// Changes button text between "Expand" and "Shrink"

for (let i = 0; i < expandBtn.length; i++) {
    expandBtn[i].addEventListener("click", function () {
        let details = this.parentElement.parentElement.parentElement.getElementsByClassName("card-details")[0];
        if (details.style.display === "none") {
            details.style.display = "block";
            this.innerHTML = "Shrink";
        } else {
            details.style.display = "none";
            this.innerHTML = "Expand";
        }
    });
}

//SEARCH
// keyup, toUpperCase(), indexOf() used from W3Schools Filter List
// keyup activates everytime a key is released in the search input.
// toUpperCase() makes search case-insensitive so you can type either "j. cole" or "J. COLE"
// and it will still show the result.
// indexOf() checks if the artist name contains the searched text.


document.getElementById("search-input").addEventListener("keyup", function () {
    let input = document.getElementById("search-input");
    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName("filterDiv");

    for (let i = 0; i < cards.length; i++) {
        let artistName = cards[i].getElementsByClassName("artist-name")[0].innerHTML.toUpperCase();
        if (artistName.indexOf(filter) !== -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
});

}, [])
    
    return(
        <>
             <div id="main">
            <h2 id="concerts-heading">Upcoming Concerts in Boston</h2>

            <div id="search-area">
                <label title="search-input">Search for an Artist:</label>
                <input id="search-input" type="text" name="search" placeholder="Search for an artist..."/>
            </div>


        {/*
            <!-- FILTER BUTTONS
                    id="myBtnContainer", className="btn", className="filterDiv"
                    From the webside you gave us: W3Schools
                    These class and id names are taken from this websites pattern.
                    the JS in jackson-concerts.js uses getElementByClassName("filterDiv")
                    and getElementByClassName("btn") to find and filter the cards
                    and highlight the active button. -->
                    */} 

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

           {/* <!--    COLLAPSE ALL BUTTON    -->*/}
            <button id="collapse-all-btn">Collapse All</button>

           {/* <!--    CARDS FOR CONCERTS     --> */}
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
                                <Image loading = "eager"src={jcole} alt="J.Cole" className="artist-photo"/>
                            </div>
                        </div>
                        <div >
                            <p className="concert-description">
                                J.Cole is bringing his long-awaited tour, The Fall-Off Tour to the TD Garden and is
                                as of now said to be his final tour ever. J.Cole is known for his deep lyricism and
                                the energy he brings to the stage, this tour is a must-see for a Hip-Hop fan in Boston.
                            </p>
                            <div className="card-actions">
                                <a href="">Get Tickets</a>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div >
                                <Image loading = "eager"src={tdgarden_chart_jcole} alt="Seating Chart for J. Cole" className="seating-Image"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filterDiv pop lbp" id="card-the-fray">
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
                                <Image loading = "eager"src={th_fray} alt="The Fray" className="artist-photo"/>
                            </div>
                        </div>
                        <div >
                            <p className="concert-description">
                                The Fray is a band that really made it big in the early 2000s. They are back
                                and playing their big hits, like their song "How to Save a Life" which is 11x Platinum.
                                If you are in Boston and looking to hear a rock band that will be in Boston, costing as low as
                                $40
                                then this show is for you!
                            </p>
                            <div className="card-actions">
                                <a href="">Get Tickets</a>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div >
                                <Image loading = "eager"src={lbp_chart} alt="Seating Chart for The Fray" className="seating-Image"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="filterDiv rock tdgarden" id="card-benson-boone">
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
                                <Image loading = "eager"src={boone}alt="Benson Boone" className="artist-photo"/>
                            </div>
                        </div>
                        <div >
                            <p className="concert-description">
                                Benson Boone is a big new artist who hits the stage with a large presence.
                                He is known for his large vocal range, flips on stage, and hit songs such as "Beautiful Things".
                                If you are in Boston around this date and love pop music, this show is the one for you.
                            </p>
                            <div className="card-actions">
                                <a href="">Get Tickets</a>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div>
                            <div >
                                <Image loading = "eager"src={tdgarden_chart_boone} alt="Seating Chart for Benson Boone"
                                     className="seating-Image"/>
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
                                <Image loading = "eager"src={zachbryan} alt="Zach Bryan" className="artist-photo"/>
                            </div>
                        </div>
                        <div >
                            <p className="concert-description">
                                Zach Bryan wraps up the end of the year at Gillette Stadium. His raw, honest, and
                                emotional songwriting delivered with a powerful presence. Zach Bryan has become
                                one of te biggest live musicians in the country, and it's for a reason. This concert is right
                                outside of
                                Boston where you can take the MBTA Commuter Rail right to the Stadium.
                            </p>
                            <div className="card-actions">
                                <a href="">Get Tickets</a>
                                <button className="btn-secondary seating-btn"> See Seating Chart</button>
                            </div> 
                            <div >
                                <Image loading = "eager"src={gillette_chart} alt="Seating Chart for Zach Bryan" className="seating-Image"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            {/*<!--   CONTAINER ENDS  -->*/}

           {/* <!--   SELLING FAST SECTION   -->*/}
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
                        <a href="">Get Tickets Before Their Gone!</a>
                    </div>
                </div>
            </div>
        </div>
      
        </>
    )
}