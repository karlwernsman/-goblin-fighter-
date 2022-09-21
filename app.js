/* Imports */
import { renderDater } from './toimport.js';
import { getRandomItem } from './toimport.js';

/* Get DOM Elements */
const playerCapacity = document.getElementById('player-emotional-capacity');
const playerImg = document.getElementById('player-img');
const daterList = document.getElementById('dater-list');
const messageDisplay = document.getElementById('message-display');
const addDaterForm = document.getElementById('add-dater');
const scoreboard = document.getElementById('scoreboard');
const removeButton = document.getElementById('remove-button');

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

const emily = {
    type: 'emily',
    ec: 10,
};
const harvey = {
    type: 'harvey',
    ec: 6,
};
const maru = {
    type: 'maru',
    ec: 12,
};
const sebastian = {
    type: 'sebastian',
    ec: 2,
};

const playerChats = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
const daterChats = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
const daterTypes = [emily, emily, maru, harvey, harvey, sebastian, sebastian, sebastian];

let exhausted = 0;
let message = '';

/* Events */
addDaterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(addDaterForm);
    const daterType = getRandomItem(daterTypes);

    const dater = {
        name: form.get('name'),
        type: daterType.type,
        ec: daterType.ec,
    };
    daters.push(dater);

    message = `${dater.name} has joined the speed dating event!`;

    displayDaters();
    displayMessage();

    addDaterForm.reset();
});

removeButton.addEventListener('click', () => {
    const energizedDaters = [];

    for (const dater of daters) {
        if (dater.ec > 0) {
            energizedDaters.push(dater);
        }
    }
    daters = energizedDaters;
    displayDaters();
});

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

        daterElement.addEventListener('click', () => {
            if (dater.ec < 1) {
                message = 'They are emotionally exhausted. Do not talk to them.';
                displayMessage();
                return;
            }

            const playerChat = getRandomItem(playerChats);
            const daterChat = getRandomItem(daterChats);
            player.ec = Math.max(0, player.ec - daterChat);
            dater.ec = Math.max(0, dater.ec - playerChat);

            message = '';
            if (playerChat === 0) {
                message += 'You are not interested in them. You did not chat back. ';
            } else {
                message += `You chatted with ${dater.name} and it took ${playerChat} tick(s) off their emotional capacity. You sure are wearing them down. `;
            }

            if (daterChat === 0) {
                message += 'They do not seem to be interested in you. They did not chat back. ';
            } else {
                message += `${dater.name} chatted with you. It took ${daterChat} tick(s) off of your emotional capacity. `;
            }

            if (dater.ec < 1) {
                exhausted++;
                displayScoreboard();
            }

            displayPlayer();
            displayDaters();
            displayMessage();
        });
    }
}

function displayMessage() {
    messageDisplay.textContent = message;
}

function displayScoreboard() {
    scoreboard.textContent = `You have exhausted ${exhausted} dater(s).`;
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayDaters();
