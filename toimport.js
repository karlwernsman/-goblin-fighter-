export function renderDater(dater) {
    const listItem = document.createElement('li');
    listItem.classList.add('dater-card');

    const ec = document.createElement('p');
    ec.classList.add('e-capacity');
    ec.textContent = dater.ec;

    const img = document.createElement('img');
    if (dater.ec < 1) {
        img.src = 'assets/exhausted.png';
    } else {
        img.src = `assets/${dater.type}.png`;
    }

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = dater.name;

    listItem.append(ec, img, name);
    return listItem;
}

export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}
