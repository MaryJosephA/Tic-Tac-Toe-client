
const config = require('../config.js')
const getGames = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'GET'
  })
}
module.exports = {
  getGames
  // getBook,
  // deleteBook,
// updateBook
}
