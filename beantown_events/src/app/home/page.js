'use client';
import { createCheckoutSessionAction } from "../../libs/stripe/stripe";
import Event from "@/app/dataModels/events";
import "../globals.css"
import MapMenuOverlay from "../components/mapMenuOverlay/mapMenuOverlay";

import "./home.css"

export default function Home() {
  return (
    
        <div className = "customMapContainer">
  
      <iframe 
        referrerPolicy="no-referrer-when-downgrade"
          loading = "eager"
      src="https://www.google.com/maps/d/u/0/embed?mid=1onRWuFsgj7AqVnp-s1B3nOeJf_iuZso&ehbc=00000000&noprof=1" autoFocus = {false} width="640" height="480">
        
      </iframe>

     <MapMenuOverlay/>
     
     
      </div>
 

  );
}
