/* Imports */

/* Get DOM Elements */
const playerCapacity = document.getElementById('player-emotional-capacity');
const playerImg = document.getElementById('player-img');

/* State */
let player = {
    ec: 20,
    type: 'abigail',
};

/* Events */

/* Display Functions */
function displayPlayer() {
    playerCapacity.textContent = Math.max(0, player.ec);
    if (player.ec < 1) {
        playerImg.src = 'assets/exhausted.png';
    } else {
        playerImg.src = `assets/${player.type}.png`;
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
