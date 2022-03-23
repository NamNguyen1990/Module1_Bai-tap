function upArrowPressed() {
    let element = document.getElementById("a");
    if (parseInt(img.style.top) > 20) {
        element.style.top = parseInt(element.style.top) - 20 + 'px';
    }
}

function downArrowPressed() {
    let element = document.getElementById("a");
    if (parseInt(img.style.top) < 850) {
        element.style.top = parseInt(element.style.top) + 20 + 'px';
    }
}
function  leftArrowPressed() {
    let element = document.getElementById("a");
    if (parseInt(img.style.left) > 20) {
        element.style.left = parseInt(element.style.left) - 20 + 'px';
    }
}
function  rightArrowPressed () {
    let element = document.getElementById("a");
    if (parseInt(img.style.left) < 1080) {
        element.style.left = parseInt(element.style.left) + 20 + 'px';
    }
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37 :
            leftArrowPressed()
            break;
        case 39 :
            rightArrowPressed()
            break;
        case 38 :
            upArrowPressed()
            break;
        case 40 :
            downArrowPressed()
            break;
    }
}
window.addEventListener('keydown',moveSelection);