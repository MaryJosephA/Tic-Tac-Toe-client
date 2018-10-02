'use strict'
const config = require('../config.js')
const store = require('../store.js')

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
  console.log('data: ', gameData)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    gameData

    // data: data
  })
}

// const update = function (gameData) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + gameData.games.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     gameData
//     // data: data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  // update,
  create
}
