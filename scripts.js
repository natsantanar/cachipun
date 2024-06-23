const choices = ['piedra', 'papel', 'tijera'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function play() {
    const playerChoice = prompt('Elige piedra, papel o tijera:').toLowerCase();
    if (!choices.includes(playerChoice)) {
        alert('Por favor, elige una opción válida.');
        return;
    }

    const computerChoice = computerPlay();

    document.getElementById('playerChoice').src = `images/${playerChoice}.png`;
    document.getElementById('computerChoice').src = `images/${computerChoice}.png`;

    let result;
    if (playerChoice === computerChoice) {
        result = '¡Empate!';
    } else if ((playerChoice === 'piedra' && computerChoice === 'tijera') ||
               (playerChoice === 'papel' && computerChoice === 'piedra') ||
               (playerChoice === 'tijera' && computerChoice === 'papel')) {
        result = '¡Ganaste!';
    } else {
        result = '¡Perdiste!';
    }

    document.getElementById('result').textContent = result;
}
