// By Jackson - the drop down menu functionality was created by the Jackson

// COLLAPSIBLE SECTIONS - coding techniques from W3Schools Collapsible
// https://www.w3schools.com/howto/howto_js_collapsible.asp
// parentElement - from W3Schools https://www.w3schools.com/jsref/prop_node_parentelement.asp
// Loops through all collapsible buttons. When clicked, finds the
// credits-content div below it using parentElement and getElementsByClassName,
// then toggles the display between none and block. Checks for both "none" and ""
// because display is set initially in CSS (not inline), so the first click reads as ""

// addEventLister tag
// It is shown in the slides a little, but I looked into it more on W3Schools as well.
// https://www.w3schools.com/Js/js_htmldom_eventlistener.asp
// addEventListener() adds an event handler to the element that is mentioned.
// this would be used so instead of in the HTML saying <button onClick="showTime">,
// you can say <button id="show-time">, then in the Java code, you specify what the event is
// by saying: document.getElementById("get-time").addEventListener("click", function () {}
// Both do the same thing, just one adds the event in the HTML and the other in the JavaScript.
// This technique is used in this code.


export default function credits_logic(){ //Anderson wrapped in curly brakcets to execute in the page.js 

let collapsibleBtns=document.getElementsByClassName("collapsible-btn-credits");
for (let i = 0; i < collapsibleBtns.length; i++) {
    collapsibleBtns[i].addEventListener("click", function() {
        let content=this.parentElement.getElementsByClassName("credits-content-credits")[0];
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
}





} 