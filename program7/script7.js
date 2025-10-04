let seconds = 0;       // Total time in seconds 
let intervalId = null; 
function updateDisplay() { 
const mins = String(Math.floor(seconds / 60)).padStart(2, '0'); 
const secs = String(seconds % 60).padStart(2, '0'); 
document.getElementById("display").textContent = `${mins}:${secs}`; 
} 
// Start function 
function start() { 
if (!intervalId) { // Only start if not already running 
intervalId = setInterval(() => {  
seconds++; 
updateDisplay(); 
}, 1000); 
} 
} 
// Stop function 
function stop() { 
clearInterval(intervalId); 
intervalId = null; 
} 
// Reset function 
function reset() { 
stop();         // Stop the timer 
seconds = 0;    // Reset the counter 
updateDisplay(); // Refresh display 
} 