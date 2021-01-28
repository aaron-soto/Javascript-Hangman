
function drawAlphabet() {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var output = ''
  for (let i = 0; i < letters.length; i++) {
    var upperCaseLetter = letters[i].toUpperCase()
    output += `<div class="letter">${upperCaseLetter}</div>`
  }
  document.getElementById('alphabet').innerHTML = output;
}

function drawSpaces(word) {
  var gameOutput = ''

  for (let j = 0; j < word.length; j++) {
    gameOutput += `<div class="letter-space"></div>`
  }
  document.getElementById('game').innerHTML = gameOutput;
}




drawAlphabet()
drawSpaces("Coding Dojo")