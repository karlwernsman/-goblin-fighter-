/* Imports */
import { renderDater } from './toimport.js';
/* Get DOM Elements */
const playerCapacity = document.getElementById('player-emotional-capacity');
const playerImg = document.getElementById('player-img');
const daterList = document.getElementById('dater-list');

/* State */
let player = {
    ec: 20,
    type: 'abigail',
};

let daters = [
    {
        name: 'Emily',
        type: 'emily',
        ec: 10,
    },
    {
        name: 'Harvey',
        type: 'harvey',
        ec: 6,
    },
    {
        name: 'Maru',
        type: 'maru',
        ec: 12,
    },
    {
        name: 'Sebastian',
        type: 'sebastian',
        ec: 2,
    },
];
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

function displayDaters() {
    daterList.innerHTML = '';

    for (const dater of daters) {
        const daterElement = renderDater(dater);
        daterList.append(daterElement);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayDaters();
