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
  return $.ajax({

    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: gameData
  })
}
const changePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
