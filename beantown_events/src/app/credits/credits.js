// COLLAPSIBLE SECTIONS - coding techniques from W3Schools Collapsible
// Loops through all collapsible buttons. When clicked, finds the
// credits-content div below it using parentElement and getElementByClassname,
// then toggles the display between none and block. Checks for both "none" and ""
// because display is set in CSS.

import { useEffect } from "react";
export default function credits_logic(){

let collapsibleBtns=document.getElementsByClassName("collapsible-btn");
for (let i = 0; i < collapsibleBtns.length; i++) {
    collapsibleBtns[i].addEventListener("click", function() {
        let content=this.parentElement.getElementsByClassName("credits-content")[0];
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
}





} 