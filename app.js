
const gameWord = "Coding Dojo"
gameWordLower = gameWord.toLowerCase();
let lives = 3;
let livesCount = parseInt(document.getElementById('lives-count').innerText)

function drawAlphabet() {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var output = ''
  for (let i = 0; i < letters.length; i++) {
    var upperCaseLetter = letters[i].toUpperCase()
    output += `<div class="letter unguessed-letter">${upperCaseLetter}</div>`
  }
  document.getElementById('alphabet').innerHTML = output;
}

function drawSpaces(word) {
  var gameOutput = ''

  for (let j = 0; j < word.length; j++) {
    if (word.charAt(j) === ' ') {
      gameOutput += `<div class="letter-space-space"></div>`
    } else {
      gameOutput += `<div class="letter-space letter-space-blank"></div>`
    }
    
  }
  document.getElementById('game').innerHTML = gameOutput;
}



function replaceLetter(letter) {
  letterSpaces = document.getElementById('game').children
  for (var i = 0; i < gameWord.length; i++) {
    
    if (gameWordLower.charAt(i) === letter) {
      letterSpaces[i].classList.remove('letter-space-blank')
      letterSpaces[i].innerText = letter
      letterSpaces[i].classList.add('letter-space-guessed')
    }
  }
}

function checkLetter(letter) {
  
  if (gameWordLower.includes(letter)) {
    replaceLetter(letter)
    let letterSquares = document.querySelectorAll('.letter')
    letterSquares.forEach(element => {
      if(element.innerText.toLowerCase() === letter) {
        element.classList.add('used-letter')
        element.classList.remove('unguessed-letter')
      }
    });


  } else {
    livesCount--
    document.getElementById('lives-count').innerText = livesCount
    let letterSquares = document.querySelectorAll('.letter')
    letterSquares.forEach(element => {
      if(element.innerText.toLowerCase() === letter) {
        element.classList.add('used-letter')
        element.classList.remove('unguessed-letter')
      }
    });
  }
}



drawAlphabet()
drawSpaces(gameWord)

document.querySelectorAll('.letter').forEach(item => {
  item.addEventListener('click', event => {
    if (livesCount > 1) {
      checkLetter(item.innerText.toLowerCase());
    } else {
      document.getElementById('game-over').classList.remove('hidden')
    }
    
    
  })
})