
function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/Bandeiras dos países/icon=${player1}.svg" alt="${player1}'s flag.">
            <strong>${hour}</strong>
            <img src="./assets/Bandeiras dos países/icon=${player2}.svg" alt="${player2}'s flag">
        </li>
    `;
}

let delay = -0.3;
function createCard(date, day, games) {
    delay += 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `;
}


document.querySelector('#cards').innerHTML =

    createCard('20/11', 'monday',
        createGame('switzerland', '15:00', 'portugal')) +
    createCard('24/11', 'thursday',
        createGame('brazil', '16:00', 'serbia') +
        createGame('spain', '18:00', 'colombia') +
        createGame('united states', '21:00', 'mexico')
    ) +
    createCard('27/11', 'sunday',
        createGame('brazil', '16:00', 'serbia') +
        createGame('argentina', '18:00', 'brazil') +
        createGame('barbados', '21:00', 'germany')
    )
    ;