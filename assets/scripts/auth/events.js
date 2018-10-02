const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to onSignUp')
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSucess)
    .then(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to onSignUp')
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to onSignUp')
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
// api.schangePassword(data)
//   .then(ui.signInSucess)
//   .then(ui.signInFailure)
const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onCreateGame = function (event) {
  event.preventDefault()
  console.log('Game Created!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

// const onUpdategame = function (event) {
//   event.preventDefault()
//   console.log('onUpdateExample ran!')
//
//   const data = getFormFields(event.target)
//   const games = data.games
//
//   if (games.text === '') {
//     $('#message').html('<p>Text is required</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Text is required!')
//     return false
//   }
//   if (games.id.length !== 0) {
//     api.update(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onUpdateFailure)
//   } else {
//     $('#message').html('<p>Please provide an user id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please provide an user id!')
//   }
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  // onUpdategame,
  onCreateGame
}
