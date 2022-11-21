"use strict";

//functions
function reviewClickPlace(actualClickPlace) {
    switch (actualClickPlace) {
    case fillHead:
        fillBigBox.classList.remove('collapsed');
        fillArrowUp.classList.add('collapsed');
        fillArrowDown.classList.remove('collapsed');
        break;
    case shareHead:
        shareBigBox.classList.remove('collapsed');
        shareArrowUp.classList.add('collapsed');
        shareArrowDown.classList.remove('collapsed');
        break;
    case designHead: //to avoid possible error if something changes
        designBigBox.classList.remove('collapsed');
        designArrowUp.classList.add('collapsed');
        designArrowDown.classList.remove('collapsed');
    }
}

function addClass() {
    //Boxes
    designBigBox.classList.add('collapsed');
    fillBigBox.classList.add('collapsed');
    shareBigBox.classList.add('collapsed');
    // arrows
    designArrowUp.classList.remove('collapsed');
    designArrowDown.classList.add('collapsed');
    fillArrowUp.classList.remove('collapsed');
    fillArrowDown.classList.add('collapsed');
    shareArrowUp.classList.remove('collapsed');
    shareArrowDown.classList.add('collapsed');
}

function handleClick(event) {
    event.preventDefault();
    addClass();
    reviewClickPlace(event.currentTarget); //because we have here the listener
}

for (let selector of allHead) {
    selector.addEventListener('click', handleClick);
}
