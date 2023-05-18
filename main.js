let homeCount = 0;
let changeCount = document.getElementById("home-score");


function plusOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}
function plusTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}
function plusThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}



// Guest status 
let guestCount = 0;
let guestCountChange = document.getElementById("guest-score");

function guestPlusOne() {
    guestCount += 1;
    guestCountChange.textContent = guestCount;
}
function guestPlusTwo() {
    guestCount += 2;
    guestCountChange.textContent = guestCount;
}
function guestPlusThree() {
    guestCount += 3;
    guestCountChange.textContent = guestCount;
}


let saveEl = document.getElementById("save-el")

function saveCounts(){
    let countStr = homeCount + " - " + guestCount + " - " 
    saveEl.textContent += countStr
      
    homeCount = 0
    guestCount = 0
    changeCount.textContent = homeCount
    guestCountChange.textContent = guestCount
      
}