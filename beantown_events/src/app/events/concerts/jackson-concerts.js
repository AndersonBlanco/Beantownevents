// Jackson //

// addEventLister tag
// It is shown in the slides a little, but I looked into it more on W3Schools as well.
// https://www.w3schools.com/Js/js_htmldom_eventlistener.asp
// addEventListener() adds an event handler to the element that is mentioned.
// this would be used so instead of in the HTML saying <button onClick="showTime">,
// you can say <button id="show-time">, then in the Java code, you specify what the event is
// by saying: document.getElementById("get-time").addEventListener("click", function () {}
// Both do the same thing, just one adds the event in the HTML and the other in the JavaScript.
// This technique is used throughout this code.

// Parallel arrays: BtnIds[i] is the id of the button, btnCategories[i] is the category it filters.
// Same index ties them together, so one loop can wire up all 8 buttons.

const btnIds = ["btn-all", "btn-hip-hop", "btn-pop", "btn-country", "btn-rock", "btn-tdgarden", "btn-lbp", "btn-gillette"];
const btnCategories = ["all", "hip-hop", "pop", "country", "rock", "tdgarden", "lbp", "gillette"];

export function filterSelection(category) {
    let cards = document.getElementsByClassName("filterDiv");
    let buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        if (category === "all") {
            cards[i].style.display = "block";
        } else if (cards[i].className.indexOf(category) !== -1) {
            cards[i].style.display = "block";
        }
    }

    // Reset every button to "btn", then activate the ones whose category matches.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "btn";
    }
    for (let i = 0; i < btnIds.length; i++) {
        if (btnCategories[i] === category) {
            document.getElementById(btnIds[i]).className = "btn active";
        }
    }
}


export function filterButtonListenerSections (){
// Filter Button Event Listeners Section
// One loop wires up all 8 filter buttons, each calling filterSelection()() with its category.
for (let i = 0; i < btnIds.length; i++) {
    document.getElementById(btnIds[i]).addEventListener("click", function() {
        filterSelection(btnCategories[i]);
    });
}

// Show all cards as the default on page load.
filterSelection("all");

// These variables are shared between multiple spots, so it are declared once at
// the top level so both the collapse all button and the individual buttons can use them.
// Declared const because the references themselves never get reassigned.


const expandBtn = document.getElementsByClassName("expand-btn");
const seatingBtn = document.getElementsByClassName("seating-btn");

// COLLAPSE ALL SECTION
// Hides all card-details and seating-chart divs at once.
//Resets all expand and seating button text back to default.

document.getElementById("collapse-all-btn").addEventListener("click", function () {
    let details = document.getElementsByClassName("card-details");
    let seatingCharts = document.getElementsByClassName("seating-chart");

    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    for (let i = 0; i < seatingCharts.length; i++) {
        seatingCharts[i].style.display = "none";
    }
    for (let i = 0; i < expandBtn.length; i++) {
        expandBtn[i].innerHTML = "Expand";
    }
    for (let i = 0; i < seatingBtn.length; i++) {
        seatingBtn[i].innerHTML = "See Seating Chart";
    }
});

// SEATING CHART TOGGLE
// parentElement from W3Schools https://www.w3schools.com/jsref/prop_node_parentelement.asp
// This returns the parent element of the specified element.
// Button is inside card-actions inside card-details.
// parentElement goes to card-actions, parentElement again goes to card-details,
// then finds the seating-chart sibling div.
// Changes button text between "See Seating Chart" and "Hide Seating Chart".

for (let i = 0; i < seatingBtn.length; i++) {
    seatingBtn[i].addEventListener("click", function () {
        let chart = this.parentElement.parentElement.getElementsByClassName("seating-chart")[0];
        if (chart.style.display === "none") {
            chart.style.display = "block";
            this.innerHTML = "Hide Seating Chart";
        } else {
            chart.style.display = "none";
            this.innerHTML = "See Seating Chart";
        }
    });
}

// EXPAND BUTTON TOGGLE
// parentElement - https://www.w3schools.com/jsref/prop_node_parentelement.asp
// Navigated up ParentElement three times from the button to reach card-body,
// then finds card-details and toggles display.
// Changes button text between "Expand" and "Shrink"

for (let i = 0; i < expandBtn.length; i++) {
    expandBtn[i].addEventListener("click", function () {
        let details = this.parentElement.parentElement.parentElement.getElementsByClassName("card-details")[0];
        if (details.style.display === "none") {
            details.style.display = "block";
            this.innerHTML = "Shrink";
        } else {
            details.style.display = "none";
            this.innerHTML = "Expand";
        }
    });
}

//SEARCH - W3Schools some techniques used for the filter
// https://www.w3schools.com/howto/howto_js_filter_lists.asp
// keyup used from W3Schools
// https://www.w3schools.com/jsref/event_onkeyup.asp
// the keyup event fires everytime a key is released on the keyboard while the element has focus.
// this triggers the search filter to function everytime a button is clicked in the search input,
// which allows for live search results.
// toUpperCase() from W3Schools - Source: https://www.w3schools.com/jsref/jsref_touppercase.asp
// converts a string to all uppercase letters and returns the new string, so the search is not case-sensitive.
// indexOf() - https://www.w3schools.com/jsref/jsref_indexof.asp
// Used to return the position of the first occurrence of a specified value in the string.
// returns -1 if the value is not found.
// this allows the searched text to appear as it checks to see of the entered value is in the artists name.
// if indexOf() returns -1, the card is hidden, and otherwise it will be shown.

document.getElementById("search-input").addEventListener("keyup", function () {
    let input = document.getElementById("search-input");
    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName("filterDiv");

    for (let i = 0; i < cards.length; i++) {
        let artistName = cards[i].getElementsByClassName("artist-name")[0].innerHTML.toUpperCase();
        if (artistName.indexOf(filter) !== -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
});

}
