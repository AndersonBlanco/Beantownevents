'use client'; 
import Image from "next/image"; 
import OutsideFacadeMFA from "../../src/museums/MFA.jpg"
import ISG from "../../src/museums/ISG.jpg"
import HAM from "../../src/museums/HAM.jpg"
import ICA from "../../src/museums/ICA.jpg"
import BostonCommon from "../../src/museums/BostonCommon.jpg"
import eljaleo from "../../src/museums/eljaleo.jpg"
import train from "../../src/museums/train.jpg"
import { useEffect, useState } from "react";
import "../index.css"


export default function Page(){

    // Quinn //
    

//expand/collapse button: from w3schools collapsible tutorial. EventListener waits for a click to execute the function.
//all classname elements are put in coll and given the variable i (used in loops to count).
useEffect(() =>{ 

var coll = document.getElementsByClassName("collapsible")
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

}, [])
//for creates a loop. the variable i changes

//var content checks the next element sibling. if it's displayed as block, then its changed to none.
//if it's not displayed as block (none) it's displayed then as block.


//slideshow (from w3schools)
    let [slideIndex, set_slideIndex] = useState(1); 
    let [nth, set_n] = useState(0); 

    let slides = [ 
        <>
                    <a href="../credits/credits.html"><Image height = {50} width = {50} src={BostonCommon} alt="A dusktime painting of the Boston Common
            by Childe Hassam"/></a>
            <div className="text">At Dusk (Boston Common at Twilight) by Childe Hassam at the MFA</div>
            </>,
<>
  <a href="../credits/credits.html"><Image src={eljaleo} height = {50} width = {50}
            alt="A painting of a Spanish Flamenco dancer by John Singer Sargent"/></a>
            <div className="text">El Jaleo by John Singer Sargent at the ISG</div>
</>,
<>
<a href="../credits/credits.html"><Image  height = {50} width = {50} src={train} alt="A train entering the station at Saint-Lazare"/></a>
            <div className="text">The Gare Saint-Lazare: Arrival of a Train at the Harvard Art Museum</div>
            </>
            
    ]
   // ShowSlides(slideIndex);

    // advances a slide forwards or backwards based on the current slide it's on (n)
    function plusSlides(n) {
        //ShowSlides(slideIndex += n);
        let new_nth = nth + n 
        if (0 > new_nth) {
            set_n(slides.length-1)
        }else if(new_nth > slides.length -1){
           set_n(0)
        }else{ 
            set_n(new_nth)
        }

       // alert(nth)
    }

    // displays the current slide
    function currentSlide(n) {
        //ShowSlides(slideIndex = n);
        set_n(nth); 
    }

    //makes sure that when one slide shows, others do not. (active/display or none)

        useEffect(() => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (nth > slides.length) {set_slideIndex(1)}
        if (nth < 1) {set_slideIndex(slides.length)}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    },[]); 



    
    return(
    <>

     {/*Meusms section*/} 
    <h2 className="museum-heading">Art Museums in Boston</h2>

        <div className="container" id = "museumsContainer">
            <div className="allcards" id="card-MFA">
                <div className="card-body">
                    <div className="card-inside">
                        <div className="card-left">
                            <h3 className="museum-name">Museum of Fine Arts, Boston</h3>
                            <ul className="museum-details">
                                <li>Address: 465 Huntington Ave, Boston MA 02215</li>
                                <li>Hours: Monday, Wednesday, Saturday, Sunday (10-5pm) Thursday, Friday (10-10pm)</li>
                                <li>Number of works: ~500,000</li>
                                <li>Price: Adults ($30), Children 7-17 ($14)</li>
                            </ul>
                        </div>
                        <div className="card-right">
                            <a href="../credits/credits.html"><Image src ={OutsideFacadeMFA} width = {50} height = {50} alt="The outside facade of the MFA" className="museum-photo"/></a>
                        </div>
                    </div>
                    <button type="button" className="collapsible" id = "collapsible">Expand</button>
                    <div className="collapsible-content">
                        <p>
                            The MFA is the 20th-largest art museum in the world. It gets 1.2 million visitors a year
                            and was founded in 1870. It used to be in Copley Square, before it moved to its new Fenway
                            location in 1909.
                        </p>
                    </div>
                </div>
            </div>

            <div className="allcards" id="ISG">
                <div className="card-body">
                    <div className="card-inside">
                        <div className="card-left">
                            <h3 className="museum-name">Isabella Stewart Gardner Museum</h3>
                            <ul className="museum-details">
                                <li>Address: 25 Evans Way, Boston MA 02215</li>
                                <li>Hours: Monday, Wednesday, Thursday, Friday (11-5pm) Saturday + Sunday (10-5pm)</li>
                                <li>Number of Works: ~18,000</li>
                                <li>Price: Adults ($22), Children {"<"} 17 (Free) Students (Free for BU, $15 for other)</li>
                            </ul>
                        </div>
                        <div className="card-right">
                            <a href="../credits/credits.html"><Image src={ISG} height={50} width = {50} alt="Picture of the ISG's main courtyard and garden" className="museum-photo"/></a>
                        </div>
                    </div>
                    <button type="button" className="collapsible" id = "collapsible">Expand</button>
                    <div className="collapsible-content">
                        <p>
                            The Isabella Stewart Gardner Museum is founded by Isabella Stewart Gardner herself in 1903. The ISG is well known for the art heist that happened in 1990, where 13 works were stolen,
                            valued at $500 million (the pieces have not been recovered). Gardner built the museum from 1898-1901, curating all the works in
                            a careful way to bring the viewer intimately close with the art.
                        </p>
                    </div>
                </div>
            </div>

            <div className="allcards" id="HAM">
                <div className="card-body">
                    <div className="card-inside">
                        <div className="card-left">
                            <h3 className="museum-name">Harvard Art Museums</h3>
                            <ul className="museum-details">
                                <li>Address: 32 Quincy St, Cambridge MA 02138</li>
                                <li>Hours: Tuesday-Sunday (10-5pm) Monday (Closed)</li>
                                <li>Number of Works: ~250,000</li>
                                <li>Price: Free for all!</li>
                            </ul>
                        </div>
                        <div className="card-right">
                            <a href="../credits/credits.html"><Image src={HAM} height = {50} width = {50} alt="Visitors in the 19th-century European art gallery" className="museum-photo"/></a>
                        </div>
                    </div>
                    <button type="button" className="collapsible" id = "collapsible">Expand</button>
                    <div className="collapsible-content">
                        <p>
                            The Harvard Art Museum(s) are technically three: the Fogg Museum, the Busch-Reisinger Museum,
                            and the Arthur M. Sackler Museum as well as four research centers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="allcards" id="card-ICA">
                <div className="card-body">
                    <div className="card-inside">
                        <div className="card-left">
                            <h3 className="museum-name">Institute of Contemporary Art</h3>
                            <ul className="museum-details">
                                <li>Address: 25 Harbor Shore Dr, Boston, MA 02210</li>
                                <li>Hours: Monday (Closed) Tuesday, Wednesday, Saturday, Sunday (10-5pm) Thursday, Friday (10-9pm)</li>
                                <li>Number of Works: ~240</li>
                                <li>Price: Adults ($20) {"<"} 18 (Free) Students ($15) Thursday Nights Free!</li>
                            </ul>
                        </div>
                        <div className="card-right">
                            <a href="../credits/credits.html"><Image src={ICA} height = {50} width = {50} alt="The exterior of the ICA Boston at daytime" className="museum-photo"/></a>
                        </div>
                    </div>
                    <button type="button" className="collapsible" id = "collapsible">Expand</button>
                    <div className="collapsible-content">
                        <p>
                            The ICA Boston was founded in 1936 as the Boston Museum of Modern Art; its current building was built
                            in 2006 in Seaport. The building has a beautiful glass-window view out into the Boston Harbor.
                            In 1937 it gained its first independent gallery space on 14 Newbury St, with a 25c admission fee. :
                        </p>
                    </div>
                </div>
            </div>
        </div>



     {/*Famous paintings in Boston section*/}
    <div className="slideshow-container">
        <h2 className="museum-heading">Famous Paintings in Boston, and where!</h2>

        <div className="mySlides fade">
            <div className="numbertext">{nth + 1}/ 3</div>
           {
            slides[nth]
           }
        </div>


        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>



    <div id="dots">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
    </div>

        </>
    )
}