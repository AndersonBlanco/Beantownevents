// Jackson //

// FILTER SELECTION SECTION:
// Some code techniques from W3Schools and their Filter Elements.
// Shows/hides cards based on the selected category.
// Resets all buttons to "btn" then sets the clicked one to "btn active"
// .btn.active pattern - from W3Schools

function filterSelection(category) {
    let cards = document.getElementsByClassName("filterDiv");
    let buttons = document.getElementsByClassName("btn");


    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        if (category === "all") {
            cards[i].style.display = "block";
        } else if (cards[i].className.includes(category)) {
            cards[i].style.display = "block";
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "btn";
    }
    if (category === "all") {
        document.getElementById("btn-all").className = "btn active";
    } else if (category === "hip-hop") {
        document.getElementById("btn-hip-hop").className = "btn active";
    } else if (category === "pop") {
        document.getElementById("btn-pop").className = "btn active";
    } else if (category === "country") {
        document.getElementById("btn-country").className = "btn active";
    } else if (category === "rock") {
        document.getElementById("btn-rock").className = "btn active";
    } else if (category === "tdgarden") {
        document.getElementById("btn-tdgarden").className = "btn active";
    } else if (category === "lbp") {
        document.getElementById("btn-lbp").className = "btn active";
    } else if (category === "gillette") {
        document.getElementById("btn-gillette").className = "btn active";
    }
}

// FILTER BUTTON EVENT LISTENERS SECTION
// Each button calls filterSelection() with its category.

document.getElementById("btn-all").addEventListener("click", function () {
    filterSelection("all");
})

document.getElementById("btn-hip-hop").addEventListener("click", function () {
    filterSelection("hip-hop");
})

document.getElementById("btn-pop").addEventListener("click", function () {
    filterSelection("pop");
})

document.getElementById("btn-country").addEventListener("click", function () {
    filterSelection("country");
})

document.getElementById("btn-rock").addEventListener("click", function () {
    filterSelection("rock");
})

document.getElementById("btn-tdgarden").addEventListener("click", function () {
    filterSelection("tdgarden");
})

document.getElementById("btn-lbp").addEventListener("click", function () {
    filterSelection("lbp");
})

document.getElementById("btn-gillette").addEventListener("click", function () {
    filterSelection("gillette");
})

// filterSelection("all") so the page will show all cards as the default

filterSelection("all");

// These variables are shared between multiple spots, so it is declared once at
// the top level so both the collapse all button and the individual buttons can use them.

let expandBtn = document.getElementsByClassName("expand-btn");
let seatingBtn = document.getElementsByClassName("seating-btn");

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
            this.innerHTML = "Show Seating Chart";
        }
    });
}

// EXPAND BUTTON TOGGLE
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

//SEARCH
// keyup, toUpperCase(), indexOf() used from W3Schools Filter List
// keyup activates everytime a key is released in the search input.
// toUpperCase() makes search case-insensitive so you can type either "j. cole" or "J. COLE"
// and it will still show the result.
// indexOf() checks if the artist name contains the searched text.

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

