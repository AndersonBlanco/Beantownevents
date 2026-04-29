// page made by Sara K
"use client" 

export function Logic(){
const popupTea = document.getElementById("popup-tea-usa");
const wrapper = document.getElementById("wrapper-usa");
const popupPaul = document.getElementById("popup-paul-usa");
const popupBattle = document.getElementById("popup-battle-usa");
const popupHarbor = document.getElementById("popup-harbor-usa");

const allPopups = [popupTea, popupPaul, popupBattle, popupHarbor];

function openPopup(activePopup) {
    wrapper.style.display = "flex";
    for (let i = 0; i < allPopups.length; i++) {
        if (allPopups[i] === activePopup) {
            allPopups[i].style.display = "block";
        } else {
            allPopups[i].style.display = "none";
        }
    }
}

function openPopupTea() {
    openPopup(popupTea);
}

function openPopupPaul() {
    openPopup(popupPaul);
}

function openPopupBattle() {
    openPopup(popupBattle);
}

function openPopupHarbor() {
    openPopup(popupHarbor);
}

function closePopup() {
    wrapper.style.display = "none";
}


    /* document.createElement() creates a new HTML element from JS.
       Used here to build a new <style> tag dynamically that will contain the css content found in line 65 
       From W3Schools: https://www.w3schools.com/jsref/met_document_createelement.asp */
    const styleTag = document.createElement("style");
    styleTag.id = "timeline-line-style"; 
    /* document.head.appendChild() attaches a new element as a child of <head>.
       Used here to add the new <style> tag to the document head so its CSS takes effect.
       From W3Schools: https://www.w3schools.com/jsref/met_node_appendchild.asp */
    document.head.appendChild(styleTag); //Im adding an element to the DOM, specifically to the end of the DOM 
     
     //element.textContent sets the plain-text contents of an element. Similar to innerHTML from the slides, but does not parse HTML. Used here to write the CSS rule string into the <style> tag. From W3Schools: https://www.w3schools.com/jsref/prop_node_textcontent.asp 
    styleTag.textContent = "#page-wrapper-usa .timeline-usa::after {height: 141.15% !important; }"; //this is thee css content injected as text, specifying the target styling I want. 

    //the !important keyword is used to specify the priority in styling compnents in the DOM. Because this is a style that is injected after the page loads in and the DOM loads in, then we need to signal to the DOM that this style must be appended to the head of the DOM - this is what this keyword signals 





}

