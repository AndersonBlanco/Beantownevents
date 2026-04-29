// Yana //
//All content is by Yana, except for the curly bracets (export defualt function checkAge(){...}
//  where .. is Yana's code) that warpps around Yana's general logic.

"use client"; 

export default function checkAge() {
    let age = document.getElementById("age-clubs").value;
    age = Number(age);

    let output = document.getElementById("output-clubs");
    let pageLinks = document.getElementById("page-links-clubs");
    let link18 = document.getElementById("link-18-clubs");
    let link21 = document.getElementById("link-21-clubs");

    output.innerHTML = "";
    pageLinks.style.display = "none";
    link18.style.display = "none";
    link21.style.display = "none";

    if (isNaN(age)) {
        output.innerHTML = "You did not enter a number."
    }
    else if (age <= 0) {
        output.innerHTML = "You did not enter a valid age."
    }
    else if (age < 18) {
        output.innerHTML = "You must be at least 18 to view club event pages."
    }
    else if (age >= 21) {
        output.innerHTML = "You can view both 18+ and 21+ club events."
        pageLinks.style.display = "block";
        link18.style.display = "inline-block";
        link21.style.display = "inline-block";
    }
    else {
        output.innerHTML = "You can view 18+ events."
        pageLinks.style.display = "block";
        link18.style.display = "inline-block";
    }
}