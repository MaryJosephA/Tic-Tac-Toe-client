const store = require('../store.js')

const signUpSucess = function () {
  $('#display-message').html('sign up successful')
  $('#display-message').css('color', 'green')
  $('#main').show()
  $('#click').show()
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('display-message').html('Something went wrong please try again')
  $('display-message').css('color', 'green')
  $('sign-in-form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#display-message').html('sign in successful' + 'ID:' + response.user.id)
  // $('#main').show()
  // $('span').html('play')
  // $('#box1').html('').removeClass('win')
  // $('#box2').html('').removeClass('win')
  // $('#box3').html('').removeClass('win')
  // $('#box4').html('').removeClass('win')
  // $('#box5').html('').removeClass('win')
  // $('#box6').html('').removeClass('win')
  // $('#box7').html('').removeClass('win')
  // $('#box8').html('').removeClass('win')
  // $('#box9').html('').removeClass('win')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  // $('#click1').show()
  // $('#click').show()
  $('#sign-out-button').show()
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out-button').addClass('hidden')
  // console.log($('#change-password'))
}
const signInFailure = function () {
  $('#display-message').html('oops please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}
const signOutSuccess = function () {
  // $('#box1').html('').removeClass('win')
  // $('#box2').html('').removeClass('win')
  // $('#box3').html('').removeClass('win')
  // $('#box4').html('').removeClass('win')
  // $('#box5').html('').removeClass('win')
  // $('#box6').html('').removeClass('win')
  // $('#box7').html('').removeClass('win')
  // $('#box8').html('').removeClass('win')
  // $('#box9').html('').removeClass('win')
  $('#display-message').html('Sign Out successful')
  // $('span').html('PLAY')
  // $('#box1').html('')
  // $('#box2').html('')
  // $('#box3').html('')
  // $('#box4').html('')
  // $('#box5').html('')
  // $('#box6').html('')
  // $('#box7').html('')
  // $('#box8').html('')
  // $('#box9').html('')
  $('#display-message').css('color', 'green')
  $('#main').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
}
const changePasswordSuccess = function (response) {
  $('#display-message').html('Success change password')
  $('#display-message').css('color', 'green')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  $('display-message').html('please try again')
  $('display-message').css('color', 'green')
  $('change-password').trigger('reset')
}
const onCreateSuccess = function (data) {
  store.game = data.game
  $('#main').show()
  // $('#main').show()
  $('#turn').html('PLAY')
  $('#box1').html('').removeClass('win')
  $('#box2').html('').removeClass('win')
  $('#box3').html('').removeClass('win')
  $('#box4').html('').removeClass('win')
  $('#box5').html('').removeClass('win')
  $('#box6').html('').removeClass('win')
  $('#box7').html('').removeClass('win')
  $('#box8').html('').removeClass('win')
  $('#box9').html('').removeClass('win')
  $('#main').trigger('reset')
  $('#message').html('New Game successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}
//
// const onCreateFailure = function (error) {
//   $('#message').text('Error on creating example')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('onCreateFailure ran. Error is :', error)
// }
// const onUpdateSuccess = function () {
//   $('#message').text('Game successfully updated')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('Example successfully updated')
// }
// const onUpdateFailure = function (error) {
//   $('#message').text('Error on updating example')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('onUpdateFailure ran. Error is :', error)
// }

module.exports = {
  signUpSucess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onCreateSuccess
  // onCreateFailure,
  // onUpdateSuccess,
  // onUpdateFailure
}
