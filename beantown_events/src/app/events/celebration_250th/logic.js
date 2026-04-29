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

/* setTimeout() is a built-in JS function that runs the given code after a delay (in ms).
   Used here to wait 300ms after page load before injecting the timeline line height,
   which lets the CSS transition animate the line growing into place.
   From W3Schools: https://www.w3schools.com/jsref/met_win_settimeout.asp */
setTimeout(function () {
    /* document.createElement() creates a new HTML element from JS.
       Used here to build a new <style> tag dynamically.
       From W3Schools: https://www.w3schools.com/jsref/met_document_createelement.asp */
    const styleTag = document.createElement("style");
    styleTag.id = "timeline-line-style";
    /* document.head.appendChild() attaches a new element as a child of <head>.
       Used here to add the new <style> tag to the document head so its CSS takes effect.
       From W3Schools: https://www.w3schools.com/jsref/met_node_appendchild.asp */
    document.head.appendChild(styleTag);
    /* element.textContent sets the plain-text contents of an element.
       Similar to innerHTML from the slides, but does not parse HTML.
       Used here to write the CSS rule string into the <style> tag.
       From W3Schools: https://www.w3schools.com/jsref/prop_node_textcontent.asp */
    styleTag.textContent = "#page-wrapper-usa .timeline-usa::after {height: 141.15% !important; }";
}, 300);

}
