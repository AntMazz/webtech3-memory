import { setupBoard } from './board.js';
import { setupTimer, stopTimer } from './timer.js';

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game');
    const imageTypeSelect = document.getElementById('image-type');
    const boardSizeSelect = document.getElementById('board-size');
    const cardBackSymbolSelect = document.getElementById('card-back-symbol');
    const closedCardColorPicker = document.getElementById('closed-card-color');
    const openCardColorPicker = document.getElementById('open-card-color');
    const foundCardColorPicker = document.getElementById('found-card-color');

    function updateColors() {
        document.documentElement.style.setProperty('--closed-card-color', closedCardColorPicker.value);
        document.documentElement.style.setProperty('--open-card-color', openCardColorPicker.value);
        document.documentElement.style.setProperty('--found-card-color', foundCardColorPicker.value);
    }

    closedCardColorPicker.addEventListener('input', updateColors);
    openCardColorPicker.addEventListener('input', updateColors);
    foundCardColorPicker.addEventListener('input', updateColors);

    startButton.addEventListener('click', () => {
        const selectedImageType = imageTypeSelect.value;
        const selectedBoardSize = boardSizeSelect.value;
        const selectedCardBackSymbol = cardBackSymbolSelect.value;

        stopTimer(); // Stop de timer bij een nieuw spel
        setupTimer(); // Start de timer opnieuw
        setupBoard(selectedImageType, selectedBoardSize, selectedCardBackSymbol);
    });
});