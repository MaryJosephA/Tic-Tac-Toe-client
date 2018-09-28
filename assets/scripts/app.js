'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// $(() => {
// })
// const turn = document.getElementByid('turn')
//  boxes = document.querySelectorAll("#main div"), XorO = 0
//  const selectWinnerBoxes = function(b1, b2, b3) {
//    b1.classList.add('win')
//    b2.classList.add('win')
//    b3.classList.add('win')
//  }

const getWinner = function () {
  const box1 = document.getElementById('box1')
  const box2 = document.getElementById('box2')
  const box3 = document.getElementById('box3')
  const box4 = document.getElementById('box4')
  const box5 = document.getElementById('box5')
  const box6 = document.getElementById('box6')
  const box7 = document.getElementById('box7')
  const box8 = document.getElementById('box8')
  const box9 = document.getElementById('box9')

  if (box1.innerHTML !== '' && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
    console.log('win')
  } else if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerhtml) {
    console.log('win')
  } else if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerhtml) {
    console.log('win')
  } else if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerhtml) {
    console.log('win')
  } else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerhtml) {
    console.log('win')
  } else if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerhtml) {
    console.log('win')
  } else if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerhtml) {
    console.log('win')
  } else if (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerhtml) {
  }
}

const boxes = document.querySelectorAll('#main div')
const xor0 = 0
for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
      if (xor0 % 2 === 0) {
        this.innerHTML = 'X'
        getWinner()
        i++
      } else {
        console.log(i)
        this.innerHTML = 'O'
        getWinner()
        // XorO += 1
      }
    }
  }
}

// const player1 = 'x'
// const player2 = 'O'
// const board = ['', '', '', '', '', '', '', '', '']
// // const currentPlayer = 'X'
// // board[5] = currentPlayer
// // const count = 0
// for (let i = 0; i <= board.length; i++) {
//   if (i !== 'x' && i !== 'O') {
//     if (i % 2 === 0) {
//       // getWinner()
//       // board[i] += 1
//       console.log(player1)
//     } else {
//       console.log(player2)
//     }
//   }
// }
//
