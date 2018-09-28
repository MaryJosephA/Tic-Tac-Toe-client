'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
// const game = require('./auth/board.js')
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // $('create-example-form').on('submit', exampleevents.onCrea
})
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
  } else if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
    console.log('win')
  } else if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
    console.log('win')
  } else if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
    console.log('win')
  } else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    console.log('win')
  } else if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
    console.log('win')
  } else if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
    console.log('win')
  } else if (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
  }
}

const boxes = document.querySelectorAll('#main div')
let xoro = 0
for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
      if (xoro % 2 === 0) {
        this.innerHTML = 'X'
        document.innerHTML('its Os turn')
        console.log(xoro)
        getWinner()
        xoro += 1
      } else {
        this.innerHTML = 'O'
        getWinner()
        xoro += 1
      }
    }
  }
}
