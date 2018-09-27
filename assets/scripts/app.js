'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// $(() => {
// })
const getWinner = function () {
  const a = 1
  const b = 2
  const c = 3
  const d = 4
  const e = 5
  const f = 6
  const g = 7
  const h = 8
  const k = 9
  if (a !== '' && a === b && a === c) {
    console.log('win')
  } else if (d !== '' && d === e && e === f) {
    console.log('win')
  } else if (f !== '' && f === h && f === k) {
    console.log('win')
  } else if (a !== '' && a === d && a === g) {
    console.log('win')
  } else if (b !== '' && b === e && b === f) {
    console.log('win')
  } else if (c !== '' && b === e && b === h) {
    console.log('win')
  } else if (a !== '' && a === e && a === k) {
    console.log('win')
  } else if (c !== '' && c === e && c === g) {
  }
}

// 1.  Start with a game board of 9 empty spaces
// const board = ['', '', '', '', '', '', '', '', '']
//
// // 2.  Start the current player as x
// const currentPlayer = 'x'
//
// // 3.  Add player x to a position on the board, position 5
// board[5] = currentPlayer

// set event onclick
// boxes => all boxes
// X_or_o => to set x or 0 into the box
// const board = ['', '', '', '', '', '', '', '', '']
//
// // 2.  Start the current player as x
// let currentPlayer = 'x'
//
// // 3.  Add player x to a position on the board, position 5
// board[5] = currentPlayer
// getWinner()
// console.log(currentPlayer)
// // 4.  Switch player to o
// currentPlayer = 'o'
// board[7] = currentPlayer
// console.log(currentPlayer)
// 5.  Add player o to position on the board, position 7
const player1 = 'x'
const player2 = 'O'
const board = ['', '', '', '', '', '', '', '', '']
// const currentPlayer = 'X'
// board[5] = currentPlayer
// const count = 0
for (let i = 1; i <= board.length; i++) {
  if (board[i] !== 'x' && board[i] !== 'O') {
    if (board[i] % 2 === 0) {
      board[i] += 1
      console.log(player1)
    } else {
      console.log(player2)
    }
  }
}
