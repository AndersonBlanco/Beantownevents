export default function MainLogic(){
let curtainLeft=document.getElementById("curtain-left");
let curtainRight=document.getElementById("curtain-right");
let curtainWrapper=document.getElementById("curtain-wrapper");
let stageContent=document.getElementById("stage-content");
let scrollPrompt=document.getElementById("scroll-prompt");
let spotLight=document.getElementById("spotlight");
let spotLightAfter=document.getElementById("spotlight-after");
let background=document.getElementById("background");
let backgroundNext=document.getElementById("background-next");

let scrollPercent= 0;
let lightShow= false;
let lightInterval= null;
let currentLight= 0;

// CONCERT LIGHT SHOW IMAGES
// Multiple concert crowd images with different lighting effects.
// These cycle after the curtains fully open to create a live concert light show.
const lightImages= [
    "../src/concert-crowd-1.jpg",
    "../src/concert-crowd-2.jpg",
    "../src/concert-crowd-3.jpg",
    "../src/concert-crowd-4.jpg",
];

// startLightShow() begins cycling through the concert light images.
// It uses setInterval to swap images every 2.5 seconds and cross-fades
// between the two background layers by toggling their opacity.
function startLightShow() {
    if (lightShow) return;
    lightShow = true;
    currentLight = 0;

    // setInterval() - from W3Schools
    // https://www.w3schools.com/jsref/met_win_setinterval.asp
    // it calls a function at a set time interval (in milliseconds).
    // Here it rotates through the light images every 1000ms or 1 second.
    lightInterval=setInterval(function() {
        currentLight = (currentLight + 1) % lightImages.length;

        //crossfade: on odd steps, the next layer fades in over the base.
        // On even steps, the base layer updates and the next layer fades out.
        // This is used to create a smooth dissolve between each concert lighting state.
        if (currentLight % 2 === 1) {
            backgroundNext.style.backgroundImage = `url("${lightImages[currentLight]}")`;
            backgroundNext.style.opacity = "1";
        } else {
            background.style.backgroundImage = `url("${lightImages[currentLight]}")`;
            backgroundNext.style.opacity = "0";
        }
    }, 1000);
}

// stopLightShow() stops the image cycling and resets back to the
// original concert image when the user scrolls the curtains back.
// "!" inverts a boolean value. !true is false, !false is true.
// Used here as a guard class, so if the light show is not currently
// running, exit the function early.
function stopLightShow() {
    if (!lightShow) return;
    lightShow = false;

    //clearInterval() - from W3Schools
    // https://www.w3schools.com/jsref/met_win_clearinterval.asp
    // Stops a repeating timer that was started with setInterval().
    clearInterval(lightInterval);
    lightInterval = null;
    currentLight = 0;

    // Reset back to the original first image
    background.style.backgroundImage = `url("${lightImages[0]}")`;
    backgroundNext.style.opacity = "0";
}

// event "wheel" is from W3Schools, and it fires whenever the user scrolls using a mouse wheel or trackpad.
// it is used in the page to detect the users scroll input to control the curtains opening and calculate
// how far the curtains should translate based on the amount of scroll distance.
// https://www.w3schools.com/jsref/event_onwheel.asp

 
    window.addEventListener("wheel", function(e) {

    // e.deltaY is from W3Schools and returns the vertical scroll amount from the wheel event.
    // Positive values mean scroll down and negative values means scroll up.
    // https://www.w3schools.com/jsref/event_wheel_deltay.asp
    scrollPercent += e.deltaY * .05;

    // if conditional - keeps the scrollPercent between 0 and 100
    if (scrollPercent < 0) {
        scrollPercent = 0;
    }
    if (scrollPercent > 100) {
        scrollPercent = 100;
    }

    // element.style.transform; - from W3Schools and it sets
    // the CSS transform on each curtain panel based on scroll position
    // https://www.w3schools.com/jsref/prop_style_transform.asp
    curtainLeft.style.transform = `translateX(-${scrollPercent}%)`;
    curtainRight.style.transform = `translateX(${scrollPercent}%)`;

    // show or hide the scroll prompt based on scroll position
    if (scrollPercent > 10) {
        scrollPrompt.style.opacity = "0";
        spotLight.style.opacity = "0";
    } else {
        scrollPrompt.style.opacity = "1";
        spotLight.style.opacity = ".9";
    }

    // reveal stage content once curtains are fully open
    // when the wheel value is below 80 there is nothing that will appear behind the curtains.
    // when the value gets to equal to or above 80 then the spotlight appears.
    // when it gets to 100%, the text and link button will then appear.
    if (scrollPercent === 100) {
        spotLightAfter.style.opacity = ".9";
        stageContent.style.opacity = "1";
        stageContent.style.visibility = "visible";
        curtainWrapper.style.opacity = "0";
        startLightShow();
    } else if (scrollPercent >= 80) {
        spotLightAfter.style.opacity = ".9";
        stopLightShow();
    } else {
        spotLightAfter.style.opacity = "0";
        stageContent.style.opacity = "0";
        stageContent.style.visibility = "hidden";
        curtainWrapper.style.opacity = "1";
        stopLightShow();
    }
});


}
