// Your code here

"use strict";


const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          const leftNumbers = dodger.style.left.replace("px", "");
          const left = parseInt(leftNumbers, 10);
      
          dodger.style.left = `${left - 1}px`;
        }
});

function moveDodgerLeft() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
      
        if (left > 0) {
          dodger.style.left = `${left - 1}px`; // 1px til venstre
        }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); 
    const left = parseInt(leftNumbers, 10); 
  
    if (left < 360) { // container = 400px og dodgeren= 40px 
      dodger.style.left = `${left + 1}px`; // 1px til højre
    }
  }
  

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { // Venstre
      moveDodgerLeft();
    }
  
    if (e.key === "ArrowRight") { // Højre
      moveDodgerRight(); 
    }
  });
  