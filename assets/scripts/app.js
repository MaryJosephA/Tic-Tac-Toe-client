'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
// const event = require('./auth/Games/events.js')
//  const game = require('./auth/board.js')
$(() => {
  // $('#sign-up-form').show()
  $('#main').hide()
  $('#click1').show()
  $('.square').click(function () {
    $('#main').show()
  })
  $('#sign-out-button').click(function () {
    $('#sign-up-form').show()
    //  $('#sign-in-form').show()
    // $('#sign-out-button').show()
    // $('button').hide()
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
//  $('#sign-in-form').on('submit', event.onGetGames)
  // $('create-example-form').on('submit', exampleevents.onCrea
})

const turn = document.getElementById('turn')
const boxes = document.querySelectorAll('#main div')
let xoro = 0
const selectWinnerBoxes = function (b1, b2, b3) {
  b1.classList.add('win')
  b2.classList.add('win')
  b3.classList.add('win')
  turn.innerHTML = b1.innerHTML + ' Won Congrats'
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
    selectWinnerBoxes(box1, box2, box3)
  } else if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
    selectWinnerBoxes(box4, box5, box6)
  } else if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box7, box8, box9)
  } else if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box1, box4, box7)
  } else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    selectWinnerBoxes(box2, box5, box8)
  } else if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box3, box6, box9)
  } else if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box1, box5, box9)
  } else if (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box3, box5, box7)
  // } else {
  //   this.innerHTML = 'tie'
  }
}
// } else if (box1.innerHTML !== '' && box1.innerHTM !== box2.innerHTML && box1.innerHTML !== box3.innerHTML) {
// console.log('tie')
// } else {
//   this.innerHTML = 'Game Over'

// const boxes = document.querySelectorAll('#main div')
// let xoro = 0

for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    }
    if (xoro % 2 === 0) {
      this.innerHTML = 'X'
      // document.innerHTML('its Os turn')
      // console.log(xoro)
      turn.innerHTML = 'O Turn Now'
      getWinner()
      //  tie()
      xoro += 1
    } else {
      this.innerHTML = 'O'
      turn.innerHTML = 'X Turn Now'
      getWinner()
      xoro += 1
    }
  }
}

// const gameover = document.querySelectorAll('#main div')
// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].onclick.removeClass('main')
// }

const replay = function () {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onClick('invalid move')
    boxes[i].classList.remove('win')
    boxes[i].innerHTML = ''

    turn.innerHTML = 'Play'
    turn.style.fontsize = '25px'
  }
  return replay
}
// }
