"use client"; 
import "../index.css"
import "./clubs.css"
import  "./clubslogic"
import clubs_pages_logic from "./clubpages"
import checkAge from "./clubslogic"
import { useEffect } from "react"
import Link from "next/link";
import "./clubs.css"
import "./clubpages.css"
export default function Page(){

    useEffect(() =>{
        clubs_pages_logic()
    })

    return(
         <div id="main-clubs">
            <h2 id="clubs-heading-clubs">Boston Nightlife</h2>

            <div id="age-gate-clubs">
                <h3>Enter Your Age to Check Eligibility to View Events</h3>
                <p id="age-gate-text-clubs">Some Boston nightlife events are restricted by age. Enter your age below to see which pages you can access.</p>

                <label label="age">Age:</label>
                <input type="text" id="age-clubs" placeholder="Enter your age"/>
                <button id="check-btn-clubs" onClick={checkAge}>Submit</button>
                <p id="output-clubs"></p>

                <div id="page-links-clubs">
                    <Link id="link-18-clubs" href="/events/clubs/clubs18">View 18+ Events</Link>
                    <Link id="link-21-clubs" href="/events/clubs/clubs21">View 21+ Events</Link>
                </div>
            </div>
        </div>
    )
}
