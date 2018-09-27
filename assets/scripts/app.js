'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
})
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

// set event onclick
// boxes => all boxes
// X_or_o => to set x or 0 into the box
const board = 0
for(let i = 0; i <= board.length; i++) {
  board[i] = function(X_orO_)
  if (X_ or O_ % 2 === 0){
  board = 'X'
  gameWinner()
  X_orO_ += 1;
} else {
  board = 'O'
  gameWinner()
  X_or_O += 1
}
}
