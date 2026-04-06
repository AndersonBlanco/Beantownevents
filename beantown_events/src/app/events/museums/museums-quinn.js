import { useEffect } from "react";
// Quinn //


//expand/collapse button: from w3schools collapsible tutorial. EventListener waits for a click to execute the function.
//all classname elements are put in coll and given the variable i (used in loops to count).

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
//for creates a loop. the variable i changes

//var content checks the next element sibling. if it's displayed as block, then its changed to none.
//if it's not displayed as block (none) it's displayed then as block.


//slideshow (from w3schools)
    let slideIndex = 1;
    ShowSlides(slideIndex);

    // advances a slide forwards or backwards based on the current slide it's on (n)
    function plusSlides(n) {
        ShowSlides(slideIndex += n);
    }

    // displays the current slide
    function currentSlide(n) {
        ShowSlides(slideIndex = n);
    }

    //makes sure that when one slide shows, others do not. (active/display or none)
    function ShowSlides(n) {
        useEffect(() => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    },[]); 
}