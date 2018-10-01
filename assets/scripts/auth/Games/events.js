// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onGetGames = function (event) {
// nPrevent default reload
  event.preventDefault()
  console.log('Sync: before ajax call')
  // Make API call
  api.getGames()
  // Handle success
    .then(ui.successAll)
    // Handle Failure
    .catch(ui.error)
  console.log('Sync: outside .then')
}
module.exports = {
  onGetGames
  // onGetBook,
  // deleteBook,
  // onUpdateBook,
  // onCreateBook

}
