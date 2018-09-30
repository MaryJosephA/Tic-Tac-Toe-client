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
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
