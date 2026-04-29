'use client';
import { useEffect } from "react";

 
export function setVariables(){
let popupTea=document.getElementById("popup-tea-usa"); //<!--finds HTML element with the same id-->
let wrapper=document.getElementById("wrapper-usa"); //<!--finds HTML element with the same id-->
let popupPaul=document.getElementById("popup-paul-usa"); //<!--finds HTML element with the same id-->
let popupBattle=document.getElementById("popup-battle-usa"); //<!--finds HTML element with the same id-->
let popupHarbor=document.getElementById("popup-harbor-usa"); //<!--finds HTML element with the same id-->
}

export function openPopupTea() { //<!--this defines a function named and only runs when called (by the onclick button)-->
let popupTea=document.getElementById("popup-tea-usa"); //<!--finds HTML element with the same id-->
let wrapper=document.getElementById("wrapper-usa"); //<!--finds HTML element with the same id-->
let popupPaul=document.getElementById("popup-paul-usa"); //<!--finds HTML element with the same id-->
let popupBattle=document.getElementById("popup-battle-usa"); //<!--finds HTML element with the same id-->
let popupHarbor=document.getElementById("popup-harbor-usa"); //<!--finds HTML element with the same id-->

    wrapper.style.display="flex"; //<!--this makes the wrapper visible. the style controls the CSS display and the flex means that the wrapper becomes visible and uses the flexbox layout-->
    popupTea.style.display="block"; //<!--this shows the tea popup and makes the element visible as a block level element-->
    popupPaul.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupBattle.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupHarbor.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
}

export function openPopupPaul() {// <!--this defines a function named and only runs when called (by the onclick button)-->
let popupTea=document.getElementById("popup-tea-usa"); //<!--finds HTML element with the same id-->
let wrapper=document.getElementById("wrapper-usa"); //<!--finds HTML element with the same id-->
let popupPaul=document.getElementById("popup-paul-usa"); //<!--finds HTML element with the same id-->
let popupBattle=document.getElementById("popup-battle-usa"); //<!--finds HTML element with the same id-->
let popupHarbor=document.getElementById("popup-harbor-usa"); //<!--finds HTML element with the same id-->
   
    wrapper.style.display="flex"; //<!--this makes the wrapper visible. the style controls the CSS display and the flex means that the wrapper becomes visible and uses the flexbox layout-->
    popupPaul.style.display="block"; //<!--this shows the paul popup and makes the element visible as a block level element-->
    popupTea.style.display="none";// <!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupHarbor.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupBattle.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
}

export function openPopupBattle() {// <!--this defines a function named and only runs when called (by the onclick button)-->
let popupTea=document.getElementById("popup-tea-usa"); //<!--finds HTML element with the same id-->
let wrapper=document.getElementById("wrapper-usa"); //<!--finds HTML element with the same id-->
let popupPaul=document.getElementById("popup-paul-usa"); //<!--finds HTML element with the same id-->
let popupBattle=document.getElementById("popup-battle-usa"); //<!--finds HTML element with the same id-->
let popupHarbor=document.getElementById("popup-harbor-usa"); //<!--finds HTML element with the same id-->
   
    wrapper.style.display="flex"; //<!--this makes the wrapper visible. the style controls the CSS display and the flex means that the wrapper becomes visible and uses the flexbox layout-->
    popupBattle.style.display="block"; //<!--this shows the battle popup and makes the element visible as a block level element-->
    popupTea.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupPaul.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupHarbor.style.display="none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
}

export function openPopupHarbor() { //<!--this defines a function named and only runs when called (by the onclick button)-->
let popupTea=document.getElementById("popup-tea-usa"); //<!--finds HTML element with the same id-->
let wrapper=document.getElementById("wrapper-usa"); //<!--finds HTML element with the same id-->
let popupPaul=document.getElementById("popup-paul-usa"); //<!--finds HTML element with the same id-->
let popupBattle=document.getElementById("popup-battle-usa"); //<!--finds HTML element with the same id-->
let popupHarbor=document.getElementById("popup-harbor-usa"); //<!--finds HTML element with the same id-->
    
    wrapper.style.display = "flex";// <!--this makes the wrapper visible. the style controls the CSS display and the flex means that the wrapper becomes visible and uses the flexbox layout-->
    popupHarbor.style.display = "block"; //<!--this shows the harbor popup and makes the element visible as a block level element-->
    popupTea.style.display = "none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupBattle.style.display = "none"; //<!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
    popupPaul.style.display = "none";// <!--this hides all other popups when they are not called and removes them from the display. it makes it so only one popup shows at a time-->
}

export function closePopup() {
let popupTea=document.getElementById("popup-tea-usa"); //<!--finds HTML element with the same id-->
let wrapper=document.getElementById("wrapper-usa"); //<!--finds HTML element with the same id-->
let popupPaul=document.getElementById("popup-paul-usa"); //<!--finds HTML element with the same id-->
let popupBattle=document.getElementById("popup-battle-usa"); //<!--finds HTML element with the same id-->
let popupHarbor=document.getElementById("popup-harbor-usa"); //<!--finds HTML element with the same id-->
    
    wrapper.style.display="none"; //<!--hides the entire wrapper overlay. this will remove the background overlay and all visible popups inside it. this is the "exit" function-->
}




