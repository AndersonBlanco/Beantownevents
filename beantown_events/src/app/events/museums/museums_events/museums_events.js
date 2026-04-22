// Quinn //
    let slideIndex = 1;

export function Museums_logic(){

//expand/collapse button: from w3schools collapsible tutorial. EventListener waits for a click to execute the function.
//all classname elements are put in coll and given the variable i (used in loops to count).


let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
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

    //showSlides(slideIndex);


}
