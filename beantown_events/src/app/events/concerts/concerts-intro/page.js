"use client"; 

import { useEffect } from "react"
import "./concert-intro.css"
import Logic from "./concert-intro"
import Link from "next/link";
export default function Page(){
    useEffect(() =>{
       Logic() //javascript is externally loaded in via useEffect in order to handle how the DOM loads in the content. However, the javascript logic is still laoded in externally 

    })

    
    return(
        <>
            {/*<!-- CONCERT CROWD BACKGROUND (bottom layer) -->*/}
            <div id="background"></div>
            <div id="background-next"></div>

            {/*<!-- CINCHED CURTAINS (Back layer - visible on sides) -->*/}
            <div id="cinched-left"></div>
            <div id="cinched-right"></div>

           {/*<!-- FRONT CURTAINS (slide apart on scroll) -->*/}
            <div id="curtain-wrapper">

                <div className="curtain" id="curtain-left"></div>

                <div className="curtain" id="curtain-right"></div>

                <div id="spotlight"></div>

                {/*<!-- CLICK PROMPT (visible before scroll) -->*/}
                <div id="scroll-prompt">
                    <span className="big-text">Beantown Events</span>
                    <p>Scroll to enter</p>
                </div>

            </div>

            <div id="spotlight-after"></div>
            <div id="stage-content">
                <h1>Beantown Events</h1>
                <p className="subtitle">Find Boston Events Near You</p>
                <Link href="/events/concerts" id="enter-btn">View All Concerts</Link>
            </div>

           {/*<!-- VALANCE (the drape on the top) -->*/}
            <div id="valance"></div>


        </>
    )
}