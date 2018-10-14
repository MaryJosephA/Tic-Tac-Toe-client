'use strict'
const config = require('../config.js')
const store = require('../store.js')
// const board = require('./../../../lib/board.js')
// const gameData = require('./auth/Games/board.js')
// Users/maryabraham/wdi/projects/Tic-Tac-Toe-client/assets/scripts/auth/Games

const signUp = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: gameData
  })
}
const signIn = function (gameData) {
  // const gameId = gameData.games.id
  // const email = gameData.games.email
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: gameData
  })
}
const changePassword = function (passwordData) {
  console.log('change password ', passwordData)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: passwordData
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function (gameData) {
  // console.log('data: ', gameData)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    gameData

    // data: data
  })
}
const update = function (gameData) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: gameData
  })
}
const showStats = function (gameData) { /// ///////////////////////////////////////////////////////
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//       'game': {
//         'cell': {
//           'index': event.target.data,
//           'value': $(event.target).this.innerHTML
//         },
//         'over': store.gameover
//       }
//     }
//   })
// }

//     gameData
//     // data: data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  update,
  create,
  showStats
}
