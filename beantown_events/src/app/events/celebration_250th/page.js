"use client"; 
import Celebration250Logic from "./logic";
import "../index.css"
import "./celebration_250th.css"
import { useEffect } from "react";
export default function Page(){
 
    const Slider = (
        <div className = "slider-container">
        <input id = "slider" type ="range" min = "1990" max = "2026" className = "slider" />
        <h2 id = "sliderOutput">1990</h2>
        </div>
        
    )

       useEffect(() =>{
        Celebration250Logic(); 
    }, []);

    return(
       <div className="celeb_container">

       {Slider}

        
    </div>
    )
}