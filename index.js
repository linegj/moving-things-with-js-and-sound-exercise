"use strict";

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // dodger går ikke ud over venstre kant
        dodger.style.left = `${left - 1}px`; // 1px til venstre
        playSoundOnMovement();
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); 
    const left = parseInt(leftNumbers, 10); 
  
    if (left < 360) { // container = 400px og dodgeren= 40px (dodger går ikke ud over højre kant)
        dodger.style.left = `${left + 1}px`; // 1px til højre
        playSoundOnMovement();
    }
}

function moveDodgerUp() { 
    const bottomNumbers = dodger.style.bottom.replace("px", ""); 
    const bottom = parseInt(bottomNumbers, 10); 

    if (bottom < 360) { 
        dodger.style.bottom = `${bottom + 1}px`; // 1px opad
        playSoundOnMovement();
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", ""); 
    const bottom = parseInt(bottomNumbers, 10); 
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`; // 1px nedad
      playSoundOnMovement();
    }
}
  

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { // Venstre
        moveDodgerLeft();
    }
  
    if (e.key === "ArrowRight") { // Højre
        moveDodgerRight(); 
    }

    if (e.key === "ArrowUp") { // Op
        moveDodgerUp(); 
    } 

    if (e.key === "ArrowDown") { // ned
        moveDodgerDown(); 
    } 
});

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
    movementSound.currentTime = 0; // starter forfra
    movementSound.play(); 
}
