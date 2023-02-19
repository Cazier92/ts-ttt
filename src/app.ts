//* Constants:




//* Variables(state)

let board: number[]
let turn: number
let winner: boolean
let tie: boolean


//* Cached Element References

const squareEls = document.querySelectorAll<HTMLElement>('.sqr')
const messageEl = document.getElementById('message') as HTMLElement
const resetBtnEl = document.querySelector<HTMLButtonElement>('#reset-button')!


//* Event Listeners

resetBtnEl.addEventListener('click', init)

squareEls.forEach(square => square.addEventListener('click', handleClick))


//* Functions

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  winner = false
  tie = false
  render()
}

init()

function render(): void {
  updateBoard()
  updateMessage()
}

function updateBoard(): void {
  board.forEach(function(square, squareIdx): void {
    if(square === -1) {
      squareEls[squareIdx].textContent = 'O'
      squareEls[squareIdx].style.color = 'lime'
    }
    if(square === 1) {
      squareEls[squareIdx].textContent = 'X'
      squareEls[squareIdx].style.color = 'rgb(34,193,195)'
    }
    if (square === 0) {
      squareEls[squareIdx].innerText = ''
    }
  })
}

function updateMessage(): void {
  let person: string = ''
  if (turn === -1) {
    person = 'Player O'
  }
  if (turn === 1) {
    person = 'Player X'
  }
  winner === false && tie === false ? messageEl.textContent = `It's ${person}'s turn!` :
  winner === false && tie === true ? messageEl.textContent = "It's a tie!" :
  messageEl.textContent = `Congratulations ${person}! You won!`
}

function handleClick(evt: MouseEvent): void {
  // console.log(evt.target)
  // let sqrIdx: HTMLElement = 
  // if (typeof evt.target === )
  if (!evt.target || !('id' in evt.target)) return
  if (!(typeof evt.target.id === 'string')) return
  const sqrIdx = parseInt(evt.target.id.slice(-1))
  if(board[sqrIdx] !== 0 || winner === true) return
  console.log(sqrIdx)
}


