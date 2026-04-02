"use client"; 
import Link from "next/link";
import {useRouter, usePathname} from "next/navigation"
import "./index.css"
import "../globals.css"
import MenuIcon from '@mui/icons-material/Menu';

import MapMenuOverlay from "./mapMenuOverlay/mapMenuOverlay";
export default function Header(){
    const route = useRouter(); 
const pathName = usePathname(); 


     return(
        <header>
            {/*LOGO*/
            <div className = "logoPlaceholder"/>
            }
        <ul>
            <li><h1 onClick = {()=>{
                route.push("/")


            }}>Home</h1></li>
            <li><h1 onClick = {async() => {
                route.push("/events")


            }}>Events</h1></li>
            <li><h1 onClick = {() =>{
                route.push("/aboutUs")

            }}>AboutUs</h1></li>

        </ul>

        {/*iframe of custom google myMap
        *render only when current page is home
        */

     pathName == "/"?
      <div className = "customMapContainer">
        
      <iframe 
        referrerPolicy="no-referrer-when-downgrade"
          loading = "lazy"
      src="https://www.google.com/maps/d/u/0/embed?mid=1onRWuFsgj7AqVnp-s1B3nOeJf_iuZso&ehbc=00000000&noprof=1" autoFocus = {false} width="640" height="480">
        
      </iframe>

     <MapMenuOverlay/>
     
     
      </div>
        :
        null 
        }
   
        </header>

     )
}