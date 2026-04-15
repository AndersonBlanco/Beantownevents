"use client"; 
export default function Celebration250Logic(){
    let sliderInput = document.getElementById("slider");
    let output = document.getElementById("sliderOutput");

    sliderInput.oninput = function(e){
        output.innerText = e.target.value; 
    }
}