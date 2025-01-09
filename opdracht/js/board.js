let openedCards = [];
let foundPairs = 0;
let totalPairs = 18; // Aantal paren in het spel
let timerInterval;
let elapsedTime = 0; // Houd de verstreken tijd bij
let remainingTime = 60; // Starttijd van 60 seconden
let gameEnded = false; // Vlag om te controleren of het spel is afgelopen

export async function setupBoard(imageType, boardSize, cardBackSymbol) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    const [rows, cols] = boardSize.split('x').map(Number);
    const totalCards = rows * cols;

    gameBoard.style.gridTemplateColumns = `repeat(${cols}, 100px)`;

    // Haal de afbeeldingen op of genereer symbolen
    const cardsContent = await fetchImages(imageType, totalCards / 2);
    const shuffledCards = shuffle([...cardsContent, ...cardsContent]);

    foundPairs = 0;
    openedCards = [];

    shuffledCards.forEach((content) => {
        const card = document.createElement('div');
        card.classList.add('card', 'closed');
        card.textContent = cardBackSymbol; // Symbool op de achterkant
        card.setAttribute('data-content', content); // De echte inhoud van de kaart

        card.addEventListener('click', () => handleCardClick(card));

        gameBoard.appendChild(card);
    });

    setupTimer(); // Start de timer wanneer het bord wordt ingesteld
}

function handleCardClick(card) {
    if (openedCards.length >= 2 || card.classList.contains('found') || card.classList.contains('open') || gameEnded) {
        return;
    }

    // Draai de kaart om
    card.classList.remove('closed');
    card.classList.add('open');
    const content = card.getAttribute('data-content');

    if (content.startsWith('url(')) {
        card.style.backgroundImage = content; // Zet afbeelding op de kaart
    } else {
        card.textContent = ''; // Verwijder het symbool van de achterkant als er een afbeelding is
    }

    openedCards.push(card);

    // Als er twee kaarten open zijn, controleer of ze overeenkomen
    if (openedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [firstCard, secondCard] = openedCards;

    // Vergelijk de data-content van de twee kaarten
    if (firstCard.getAttribute('data-content') === secondCard.getAttribute('data-content')) {
        // Als ze overeenkomen, markeer ze als gevonden
        firstCard.classList.add('found');
        secondCard.classList.add('found');
        foundPairs++;

        // Controleer of alle paren zijn gevonden
        if (foundPairs === totalPairs) {
            endGame(); // Als alle paren zijn gevonden, beëindig het spel
        }
    } else {
        // Als ze niet overeenkomen, draai de kaarten terug na een korte vertraging
        setTimeout(() => {
            firstCard.classList.remove('open');
            secondCard.classList.remove('open');
            firstCard.classList.add('closed');
            secondCard.classList.add('closed');

            // Zet het symbool weer op de achterkant van de kaarten
            firstCard.textContent = '@';
            secondCard.textContent = '@';

            // Verwijder de achtergrondafbeelding
            firstCard.style.backgroundImage = '';
            secondCard.style.backgroundImage = '';
        }, 1000);
    }

    openedCards = []; // Reset de geopende kaarten
}

function endGame() {
    if (!gameEnded) {
        gameEnded = true;
        // Stop de timer
        clearInterval(timerInterval);

        // Toon het succesbericht en de tijd
        alert(`Gefeliciteerd! Je hebt het spel voltooid in ${elapsedTime} seconden.`);
    }
}

async function fetchImages(type, count) {
    if (type === 'dog') {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
        const data = await response.json();
        return data.message.map((url) => `url(${url})`);
    } else if (type === 'cat') {
        return Array.from({ length: count }, (_, i) => `url(https://cataas.com/cat?unique=${i})`);
    } else if (type === 'picsum') {
        return Array.from({ length: count }, (_, i) => `url(https://picsum.photos/100?random=${i})`);
    }
    return [];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Timer functies
function setupTimer() {
    const elapsedTimeElement = document.getElementById('elapsed-time');
    const remainingTimeElement = document.getElementById('remaining-time');

    // Update de tijd elke seconde
    timerInterval = setInterval(() => {
        if (gameEnded) return; // Stop de timer als het spel is afgelopen

        elapsedTime++;
        remainingTime--;

        elapsedTimeElement.textContent = `${elapsedTime}s`;
        remainingTimeElement.textContent = `${remainingTime}s`;

        // Als de tijd op is, stop de timer en toon een bericht
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("Tijd is om!"); // Als de tijd op is stop het spel
        }
    }, 1000);
}

