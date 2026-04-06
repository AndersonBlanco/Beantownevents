"use client"; 
import Link from "next/link";
import {useRouter, usePathname} from "next/navigation"
import "./header.css"
import "../../globals.css"
import MenuIcon from '@mui/icons-material/Menu';

import MapMenuOverlay from "../mapMenuOverlay/mapMenuOverlay";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../src/logo.png"; 


export default function Header(){
    const route = useRouter(); 
const pathName = usePathname(); 




return(
    <div className = "headerContainerDiv">
        <header>
        <div id="logo">
            <Image src = {Logo} alt="Beantown Events Logo" id="site-logo" loading = "eager" />
            <div id="site-title">
                <h1>Beantown Events</h1>
                <p id="slogan">Find Boston Events Near You</p>
            </div>
        </div>
    </header>

    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li className="dropdown" >
                <Link href="/events">Events</Link>
                   <div className="dropdown-content" id= "dropdown-content">
                    <Link href = "/events/concerts">Concerts</Link>
                    <Link href = "/events/boxing">Boxing</Link>
                    <Link href = "/events/celebration_250th">250th Celebration</Link>
                    <Link href = "/events/clubs">Clubs</Link>
                    <Link href = "/events/museums">Museums</Link>
                </div>
            </li>
            <li><Link href="/about_us">About Us</Link></li>
            <li><Link href="/contact_us">Contact Us</Link></li>
        </ul>
    </nav>

  
     
    </div>
)
}

