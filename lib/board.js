'use strict'
const store = require('./store.js')

let gameover = false
const turn = document.getElementById('turn')
const boxes = document.querySelectorAll('#main div')
let xoro = 0
store.count = 0
const selectWinnerBoxes = function (b1, b2, b3) {
  b1.classList.add('win')
  b2.classList.add('win')
  b3.classList.add('win')
  turn.innerHTML = b1.innerHTML + ' Won Congrats'
  // gameover = true
  // turn.innerHTML = b4.innerHTML + ' tie'
  turn.style.fontsize = '40px'

  // for (let i = 0; i < boxes.length; i++) {
  //   boxes[i].onclick = function () {
  //     if(this.innerHTML === 'X' || this.innerHTML === 'O'){
  //       turn.innerHTML = 'invalid move'
  // b2.style.background = 'red'
  // b3.style.background = 'red'
}

// const selecttie = document.getElementById('square')
// const tie = function (c1, c2, c3) {
//   square.onClick.classList.remove('win')
// }
// store.count = 0
const getWinner = function () {
  // } else {
  // const getWinner = function () {
  const box1 = document.getElementById('box1')
  const box2 = document.getElementById('box2')
  const box3 = document.getElementById('box3')
  const box4 = document.getElementById('box4')
  const box5 = document.getElementById('box5')
  const box6 = document.getElementById('box6')
  const box7 = document.getElementById('box7')
  const box8 = document.getElementById('box8')
  const box9 = document.getElementById('box9')

  // if (store.count >= 9) {
  //   store.count += 1
  //   turn.innerHTML = 'tie'
  // gameover = false
  // turn.innerHTML = 'PLAY'

  //   // turn.innerHTML = 'PLAY'
  //  } else {
  if (box1.innerHTML !== '' && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
    console.log('win')
    selectWinnerBoxes(box1, box2, box3)
    // store.count = 0
    store.gameover = true
    turn.innerHTML = 'Invalid Move'
  } else if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
    selectWinnerBoxes(box4, box5, box6)
    console.log('win')
    // store.count = 0
    gameover = true
    turn.innerHTML = 'Invalid Move'
  } else if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box7, box8, box9)
    console.log('win')
    // store.count = 0
    gameover = true
    turn.innerHTML = 'Invalid Move'
  // store.count = 0
  } else if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box1, box4, box7)
    console.log('win')
    // store.count = 0
    gameover = true
    turn.innerHTML = 'Invalid Move'
  } else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    selectWinnerBoxes(box2, box5, box8)
    console.log('win')
    //   store.count = 0
    gameover = true
    turn.innerHTML = 'Invalid Move'
  } else if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box3, box6, box9)
    console.log('win')
    // store.count = 0
    turn.innerHTML = 'Invalid Move'
    gameover = true
  } else if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box1, box5, box9)
    console.log('win')
    // store.count = 0
    gameover = true
  } else if (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box3, box5, box7)
    console.log('win')
    //   store.count = 0
    gameover = true
  } else if (store.count >= 9) {
    store.count += 1
    turn.innerHTML = 'tie'
    gameover = false
    // turn.innerHTML = 'PLAY'
  }
}
// } else {
//   if (box1.innerHTML !== '' || box1.innerHTM !== box2.innerHTML || box1.innerHTML !== box3.innerHTML) {
//  turn.innerHTML = 'draw'
// console.log('draw')
//   // draw()
// }

// const draw = function () {
//   if (box1.innerHTML !== '' && box1.innerHTM !== box2.innerHTML && box1.innerHTML !== box3.innerHTML) {
//  // console.log('tie')
//   draw = true
// }

// } else if (box1.innerHTML == '' && box1.innerHTM !== box2.innerHTML && box1.innerHTML !== box3.innerHTML) {
// console.log('tie')
// } else {
//   this.innerHTML = 'Game Over'

// const boxes = document.querySelectorAll('#main div')
// let xoro = 0

// gameover = false
for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    gameover = false
    if (this.innerHTML === 'X' || this.innerHTML === 'O' || gameover === true) {
      turn.innerHTML = 'Invalid Move'
      gameover = true
    } else {
      // gameover = false
      if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
        // store.count = 0
        // if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
        if (xoro % 2 === 0) {
          console.log(xoro)
          store.this.innerHTML = 'X'
          store.turn.innerHTML = 'O Turn Now'
          // gameover = true
          getWinner()
          xoro += 1
          // store.count = 0
          //  tie()
        } else {
          store.this.innerHTML = 'O'
          console.log(xoro)
          turn.innerHTML = 'X Turn Now'
          // gameover = true
          getWinner()
          xoro += 1
          // store.count = 0
          gameover = true
          // turn.innerHTML
        }
      }
    }
  }
// }

// const gameover = document.querySelectorAll('#main div')
// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].onclick.removeClass('main')
// }

// const replay = function () {
//   // const boxes = document.querySelectorAll('#main div')
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].classList.remove('win')
//     // boxes[i].onClick('invalid move')
//     boxes[i].innerHTML = ''
//
//     turn.innerHTML = 'Play'
//     turn.style.fontsize = '25px'
}
module.exports = {
  getWinner
}
