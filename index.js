"use strict";

const dodger = document.getElementById("dodger");
const point = document.getElementById("point");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // dodger går ikke ud over venstre kant
        dodger.style.left = `${left - 1}px`; // 1px til venstre
        playSoundOnMovement();
        checkCollision();
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); 
    const left = parseInt(leftNumbers, 10); 
  
    if (left < 360) { // container = 400px og dodgeren= 40px (dodger går ikke ud over højre kant)
        dodger.style.left = `${left + 1}px`; // 1px til højre
        playSoundOnMovement();
        checkCollision();
    }
}

function moveDodgerUp() { 
    const bottomNumbers = dodger.style.bottom.replace("px", ""); 
    const bottom = parseInt(bottomNumbers, 10); 

    if (bottom < 360) { 
        dodger.style.bottom = `${bottom + 1}px`; // 1px opad
        playSoundOnMovement();
        checkCollision();
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", ""); 
    const bottom = parseInt(bottomNumbers, 10); 
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`; // 1px nedad
      playSoundOnMovement();
      checkCollision();
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

//cirkel placering
function getRandomPosition() {
    const gameArea = document.getElementById("game").getBoundingClientRect();
    const maxX = gameArea.width - 20; // 20px bred
    const maxY = gameArea.height - 20; // 20px høj

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

//Random placering af cirkel
function movePointRandomly() {
    const newPosition = getRandomPosition();
    point.style.left = `${newPosition.x}px`;
    point.style.top = `${newPosition.y}px`;
    point.style.display = "block"; // Synlig
}


function checkCollision() {
    const dodgerRect = dodger.getBoundingClientRect();
    const pointRect = point.getBoundingClientRect();

    if (
        dodgerRect.left < pointRect.right &&
        dodgerRect.right > pointRect.left &&
        dodgerRect.top < pointRect.bottom &&
        dodgerRect.bottom > pointRect.top
    ) {
        point.style.display = "none"; // usynlig
        setTimeout(movePointRandomly, 1000); // Flyt cirklen efter 1 sek
    }
}