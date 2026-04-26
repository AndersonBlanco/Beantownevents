//CONTACT US

// addEventLister tag
// It is shown in the slides a little, but I looked into it more on W3Schools as well.
// https://www.w3schools.com/Js/js_htmldom_eventlistener.asp
// addEventListener() adds an event handler to the element that is mentioned.
// this would be used so instead of in the HTML saying <button onClick="showTime">,
// you can say <button id="show-time">, then in the Java code, you specify what the event is
// by saying: document.getElementById("get-time").addEventListener("click", function () {}
// Both do the same thing, just one adds the event in the HTML and the other in the JavaScript.
// This technique is used throughout this code.

// CLOSE BUTTON
// history.back() from W3Schools https://www.w3schools.com/jsref/met_his_back.asp
// navigates the users back to the page they came from so clicking the buttons to close
// this will bring them to the page they were on. This makes it so no matter which page
// on our site you were on, you can access this and return to where you were.


"use client"; 


export default function Contact_us_logic(){

document.getElementById("close-btn").addEventListener("click", function() {
    history.back();
});


//RADIO BUTTOn CHANGE LISTENERS
// "change" event fires when the value of an input element has been changed and the element loses focus
// (or immediately for radio/checkbox inputs). It is being used here to detect when a user selects a radio
// button for their preferred contact method, then shows the matching input field and hides the other.
// https://www.w3schools.com/jsref/event_onchange.asp
document.getElementById("method-email").addEventListener("change", function () {
    document.getElementById("email-field").style.display = "block";
    document.getElementById("phone-field").style.display = "none";
});

document.getElementById("method-phone").addEventListener("change", function () {
    document.getElementById("phone-field").style.display = "block";
    document.getElementById("email-field").style.display = "none";
});

// indexOf() used from W3Schools filter
// Used to check that email contains @ and .
// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// .checked is used, and it returns true if a checkbox or radio input is currently selected, and
// false if it is not. It checks whether the email or phone radio button is selected
// to determine which contact field needs to appear.
document.getElementById("contact-submit-btn").addEventListener("click", function(e) {
    e.preventDefault()

    let name = document.getElementById("contact-name").value;
    let message = document.getElementById("contact-message").value;
    let emailSelected = document.getElementById("method-email").checked;
    let phoneSelected = document.getElementById("method-phone").checked;
    let email = document.getElementById("contact-email").value;
    let phone = document.getElementById("contact-phone").value;
    let valid = true;

    // Name must hav at lest 2 characters
    if (name.length < 2) {
        valid = false;
    }

    // Must be at least 10 letters
    if (message.length < 10) {
        valid = false;
    }

    // Must contain a contact method
    if (emailSelected === false && phoneSelected === false) {
        valid = false;
    }

    // Email must contain @ and . and must have at least 6 characters
    if (emailSelected === true) {
        if (email.length < 6 || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            valid = false;
        }
    }

    //Phone number must be at least 10 digits
    if (phoneSelected === true) {
        if (phone.length < 10) {
            valid = false;
        }
    }



    if (valid !== true) {
        document.getElementById("contact-error").style.display = "block";
    } else {
        document.getElementById("contact-error").style.display = "none";
        // history.back() from W3Schools history back technique
        // navigates the users back to the page they came from so clicking the buttons to close
        // this will bring them to the page they were on. This makes it so no matter which page
        // on our site you were on, you can access this and return to where you were.

        // setTimeout - technique from W3Schools setTimeout() shows the success alert for 2 second then
        // goes back automatically to the last page. This delay allows the time for the popup box saying
        // that their message has sent has time to show before redirecting.
        document.getElementById("contact-success").style.display = "block";
        setTimeout(function () {
            //history.back(); //depircated 


            window.history.back()

        }, 2000);
    }
});

return;

}
