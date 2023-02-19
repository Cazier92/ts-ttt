"use strict";
//* Constants:
//* Variables(state)
let board;
let turn;
let winner;
let tie;
//* Cached Element References
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtnEl = document.querySelector('#reset-button');
//* Event Listeners
resetBtnEl.addEventListener('click', init);
squareEls.forEach(square => square.addEventListener('click', handleClick));
//* Functions
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
init();
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach(function (square, squareIdx) {
        if (square === -1) {
            squareEls[squareIdx].textContent = 'O';
            squareEls[squareIdx].style.color = 'lime';
        }
        if (square === 1) {
            squareEls[squareIdx].textContent = 'X';
            squareEls[squareIdx].style.color = 'rgb(34,193,195)';
        }
        if (square === 0) {
            squareEls[squareIdx].innerText = '';
        }
    });
}
function updateMessage() {
    let person = '';
    if (turn === -1) {
        person = 'Player O';
    }
    if (turn === 1) {
        person = 'Player X';
    }
    winner === false && tie === false ? messageEl.textContent = `It's ${person}'s turn!` :
        winner === false && tie === true ? messageEl.textContent = "It's a tie!" :
            messageEl.textContent = `Congratulations ${person}! You won!`;
}
function handleClick(evt) {
    // console.log(evt.target)
    // let sqrIdx: HTMLElement = 
    // if (typeof evt.target === )
    if (!evt.target || !('id' in evt.target))
        return;
    if (!(typeof evt.target.id === 'string'))
        return;
    const sqrIdx = parseInt(evt.target.id.slice(-1));
    if (board[sqrIdx] !== 0 || winner === true)
        return;
    console.log(sqrIdx);
}
