"use client"; 
//import Celebration250Logic from "./logic";

import "./groupproject.css"
import "../index.css"
import "./timeline.css"
//import "./celebration_250th.css"
import { useEffect, useState } from "react";
import{
    GroupProject,
    GroupProject2,
    GroupProject3,
    GroupProject4,
    GroupProject5
} from "./internals";

import {openPopupBattle, openPopupHarbor, openPopupPaul, openPopupTea, closePopup, setVariables} from "./popup"
import Link from "next/link";



export default function Page(){ 

    const [content, setContent] = useState(GroupProject); //Anderson | used as a variable that re-renders and updates the DOM (what stae variables do) to display the new state (ie the new content)

    useEffect(() =>{
        setVariables()
    })
 
    const Slider = (
        <div className = "slider-container">
        <input id = "slider" type ="range" min = "1990" max = "2026" className = "slider" />
        <h2 id = "sliderOutput">1990</h2>
        </div>
        
    )



    return(
       <div className="celeb_container">
<nav className="nav">
      <ul>
                <li><a onClick = {() => setContent(GroupProject)}>Homepage</a></li>
                <li><Link href = "/credits">Credits</Link> </li>
                <li><a onClick = {() => setContent(GroupProject2)}>Paul Revere’s Ride Reenactment</a></li>
                <li><a onClick = {() => setContent(GroupProject3)}>Boston Tea Party Tea Blending Activations</a></li>
                <li><a onClick = {() => setContent(GroupProject4)}>Boston Lighthouse Cruises and the 250th Anniversary of Siege of Boston</a></li>
                <li><a onClick = {() => setContent(GroupProject5)}>251st Anniversary of the Battle of Lexington Patriots’ Day Brunch</a></li>
            </ul>
    </nav>

    <div className = "rest-of-content">
            {content}
            </div>


        
    </div>
    )
}