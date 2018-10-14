'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

// const event = require('./auth/Games/events.js')
//  const game = require('./auth/board.js')
$(() => {
  // Authentication events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // Game events
  $('#new-game').on('click', authEvents.onCreateGame)

  $('#main').trigger('reset')
  $(`[data-index=0]`).on('click', authEvents.onUpdategame)
  $(`[data-index=1]`).on('click', authEvents.onUpdategame)
  $(`[data-index=2]`).on('click', authEvents.onUpdategame)
  $(`[data-index=3]`).on('click', authEvents.onUpdategame)
  $(`[data-index=4]`).on('click', authEvents.onUpdategame)
  $(`[data-index=5]`).on('click', authEvents.onUpdategame)
  $(`[data-index=6]`).on('click', authEvents.onUpdategame)
  $(`[data-index=7]`).on('click', authEvents.onUpdategame)
  $(`[data-index=8]`).on('click', authEvents.onUpdategame)
  $(`[data-index=9]`).on('click', authEvents.onUpdategame)
  $('#view-game').on('click', authEvents.onUpdategame)
  $('#view-game').on('click', authEvents.onShowstat)
  // $('#display-message').html(`Total games played is ${data.games.length}`)

  // Sets the signed out view
  $('#main').hide()
  $('#sign-out-button').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#game-show').hide()
  $('#view-game').hide()
  $('#change-password-header').hide()
})
// // Selecting the turn span
// const turn = document.getElementById('turn') // <span id="turn"> Play</span>
//
// // Select all the boxes on the board
// const boxes = document.querySelectorAll('#main div') // <div class ="box" id="box1" data-index = 0></d

// let xoro = 0
// store.count = 0
// store.gameover = false
// const selectWinnerBoxes = function (b1, b2, b3) {
//   b1.classList.add('win')
//   b2.classList.add('win')
//   b3.classList.add('win')
//   turn.innerHTML = b1.innerHTML + ' Won Congrats'
//   // gameover = true
//   // turn.innerHTML = b4.innerHTML + ' tie'
//   turn.style.fontsize = '40px'
//
//   // for (let i = 0; i < boxes.length; i++) {
//   //   boxes[i].onclick = function () {
//   //     if(this.innerHTML === 'X' || this.innerHTML === 'O'){
//   //       turn.innerHTML = 'invalid move'
//   // b2.style.background = 'red'
//   // b3.style.background = 'red'
// }
//
// // turn.innerHTML = 'tie'
//
// // const selecttie = document.getElementById('square')
// // const tie = function (c1, c2, c3) {
// //   square.onClick.classList.remove('win')
// // }
// // store.count = 0
// store.gameover = false
// const getWinner = function () {
//   // } else {
//   // const getWinner = function () {
//   const box1 = document.getElementById('box1')
//   const box2 = document.getElementById('box2')
//   const box3 = document.getElementById('box3')
//   const box4 = document.getElementById('box4')
//   const box5 = document.getElementById('box5')
//   const box6 = document.getElementById('box6')
//   const box7 = document.getElementById('box7')
//   const box8 = document.getElementById('box8')
//   const box9 = document.getElementById('box9')
//
//   if (box1.innerHTML !== '' && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
//   // console.log('win')
//     selectWinnerBoxes(box1, box2, box3)
//     // store.count = 0
//     store.gameover = true
//     turn.innerHTML = 'Invalid Move'
//     // store.gameover = false
//   } else if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
//     selectWinnerBoxes(box4, box5, box6)
//     // console.log('win')
//     // store.count = 0
//     store.gameover = true
//     turn.innerHTML = 'Invalid Move'
//   } else if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
//     selectWinnerBoxes(box7, box8, box9)
//     // console.log('win')
//     // store.count = 0
//     store.gameover = true
//     turn.innerHTML = 'Invalid Move'
//     // store.count = 0
//   } else if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
//     selectWinnerBoxes(box1, box4, box7)
//     // console.log('win')
//     // store.count = 0
//     store.gameover = true
//     turn.innerHTML = 'Invalid Move'
//   } else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
//     selectWinnerBoxes(box2, box5, box8)
//     // console.log('win')
//     //   store.count = 0
//     store.gameover = true
//     turn.innerHTML = 'Invalid Move'
//   } else if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
//     selectWinnerBoxes(box3, box6, box9)
//     // console.log('win')
//     // store.count = 0
//     turn.innerHTML = 'Invalid Move'
//     store.gameover = true
//   } else if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
//     selectWinnerBoxes(box1, box5, box9)
//     // console.log('win')
//     // store.count = 0
//     store.gameover = true
//   } else if (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
//     selectWinnerBoxes(box3, box5, box7)
//     // console.log('win')
//
//     store.gameover = true
//     // store.gameover = false
//   } else if (store.count >= 9) {
//     store.count += 1
//     turn.innerHTML = 'tie'
//     store.gameover = true
//     turn.innerHTML = 'PLAY'
//   }
// }
//
// // store.gameover = false
// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].onclick = function () {
//     if (this.innerHTML === 'X' || this.innerHTML === 'O' || store.gameover === true) {
//       turn.innerHTML = 'Invalid Move'
//       // store.gameover = true
//     } else {
//     //  gameover = false
//       if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
//         // store.count = 0
//         // if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
//         if (xoro % 2 === 0) {
//           // console.log(xoro)
//           this.innerHTML = 'X'
//           turn.innerHTML = 'O Turn Now'
//           getWinner()
//           store.gameover = false
//           xoro += 1
//           // store.count = 0
//           //  tie()
//         } else {
//           this.innerHTML = 'O'
//           // console.log(xoro)
//           turn.innerHTML = 'X Turn Now'
//           getWinner()
//           store.gameover = false
//           xoro += 1
//         // } else {
//         //   turn.innerHTML = 'tie'
//           // store.count = 0
//           // gameover = true
//           // turn.innerHTML
//         }
//       }
//     }
//   }
// }

// turn.style.fontsize = '25px'
