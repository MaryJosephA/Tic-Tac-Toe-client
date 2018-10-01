const successAll = function (response) {
  console.log('Async: inside .then')
  console.log(response)
  // empty content elemen
  $('#content').html('')

  // loop through API response data
  response.games.forEach(games => {
    // build HTML element with data
    const GameHTML = (`

    <p>ID: ${games.id}</p>
    <br />
    `)
    $('#content').append(GameHTML)
  })
}
const error = function (error) {
  console.error(error)
}
module.exports = {
  // successOne,
  successAll,
  // successDelete,
  // onCreateSuccess,
  error
}
