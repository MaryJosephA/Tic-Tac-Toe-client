const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
// const board = require()
// const apps = require('../app.js')
// const apps = require
const onSignUp = function (events) {
  event.preventDefault()
  const data = getFormFields(events.target)
  // alert('Made it to onSignUp')
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (events) {
  event.preventDefault()

  const data = getFormFields(events.target)
  // alert('Made it to onSignUp')
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (events) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to onSignUp')
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (events) {
  event.preventDefault()
  store.game = {}
  store.game.over = false
  // console.log('Game Created!')
  const data = getFormFields(event.target)
  // console.log(event)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
const onShowstat = function (events) {
  event.preventDefault()
  // ajaxCalls.showStatsAjaxCall()
  const data = getFormFields(event.target)
  // console.log(event)
  api.showStats(data)
    .then(ui.onStatSuccess)
    .catch(ui.onStatFailure)
}
// let winner = null
let turns = 0
const onUpdategame = function (events) {
  if ($(event.target).text() === '') {
    turns += 1

    // console.log('onUpdategame ran!')
    $('#display-message').text('Game successfully updating')
    const index = $(events.target).data('index') // 4
    const player = store.currentPlayer // x
    $('#display-message').text('turn' + store.currentPlayer)
    // add player to board in store
    store.game.cells[index] = player

    // add x or o to board on screen
    $(event.target).text(player)
    // console.log(player)

    /// //////////////////////////////
    // CHECK FOR WINNER
    /// //////////////////////////////
    // top row
    // store.toggleTurn = 0

    if (store.game.over === false) {
      if (store.game.cells[0] !== '' &&
          store.game.cells[0] === store.game.cells[1] &&
          store.game.cells[1] === store.game.cells[2]) {
        $('#display-message').text(`${store.game.cells[0]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true
        // console.log(store.game.cells)
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
        $('#display-message').text(`${store.game.cells[0]} wins`)
        // winner = store.game.cells[0]
      } else if (store.game.cells[3] !== '' &&
                store.game.cells[3] === store.game.cells[4] &&
                store.game.cells[4] === store.game.cells[5]) {
        $('#display-message').text(`${store.game.cells[3]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
      // bottom row
      } else if (store.game.cells[6] !== '' &&
               store.game.cells[6] === store.game.cells[7] &&
               store.game.cells[7] === store.game.cells[8]) {
        $('#display-message').text(`${store.game.cells[3]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true
        // winner = store.game.cells[6]
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
        // $('#main').hide()
        $('#display-message').text(`${store.game.cells[6]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true

      // left col
      } else if (store.game.cells[0] !== '' &&
               store.game.cells[0] === store.game.cells[3] &&
               store.game.cells[3] === store.game.cells[6]) {
        $('#display-message').text(`${store.game.cells[0]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
        // winner = store.game.cells[0]
        // $('#main').hide()

      // right col
      } else if (store.game.cells[1] !== '' &&
               store.game.cells[1] === store.game.cells[4] &&
               store.game.cells[4] === store.game.cells[7]) {
        $('#display-message').text(`${store.game.cells[1]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
        // winner = store.game.cells[1]

        // $('#main').hide()

      // middle col
      } else if (store.game.cells[2] !== '' &&
               store.game.cells[2] === store.game.cells[5] &&
               store.game.cells[5] === store.game.cells[8]) {
        $('#display-message').text(`${store.game.cells[2]} wins`)
        $('#display-message').fadeOut(2000)
        store.game.over = true
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
      // left diag
      } else if (store.game.cells[0] !== '' &&
               store.game.cells[0] === store.game.cells[4] &&
               store.game.cells[4] === store.game.cells[8]) {
        $('#display-message').text(`${store.game.cells[0]} wins`)
        $('#display-message').fadeOut(2000)
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
        // winner = store.game.cells[0]
        store.game.over = true

      //  $('#main').hide()
      // right diag
      } else if (store.game.cells[2] !== '' &&
               store.game.cells[2] === store.game.cells[4] &&
               store.game.cells[4] === store.game.cells[6]) {
        $('#display-message').text(`${store.game.cells[2]} wins`)
        $('#display-message').fadeOut(2000)
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
        // winner = store.game.cells[2]
        store.game.over = true

        //  $('#game-message').text(`${store.game.cells[0]} wins the game`)
      //  $('#main').hide()

      // no winner yet
      } else if (turns === 9) {
        $('#display-message').text('its a tie')
        $('#display-message').fadeOut(2000)
        // winner = 'tie'
        $('#main').hide()
        $('#change-password').hide()
        $('#change-password-header').hide()
      }
      $('display-message').html(store.currentPlayer)
      if (store.currentPlayer === 'X') {
        store.currentPlayer = 'O'
        $('display-message').text('Turn' + store.currentPlayer)
      } else {
        store.currentPlayer = 'X'
        $('display-message').text('Turn' + store.currentPlayer)
      }
      //   $('#display-message').text('its a' + winner)
      const gameData = {
        'game': {
          'cell': {
            'index': index,
            'value': player
          },
          'over': store.game.over
        }
      }
      // console.log(winner)
      // send data to API

      api.update(gameData)
        .then(ui.onUpdateSuccess)
        .catch(ui.onUpdateFailure)
    }
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onUpdategame,
  onCreateGame,
  onShowstat
}
