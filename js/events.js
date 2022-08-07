import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonMinus,
  minutesDisplay,
  cardForest,
  cardRain,
  cardCoffee,
  cardFirePlace,
  lightModeButton,
  darkModeButton,
  forestSoundInput,
  rainSoundInput,
  coffeShopSoundInput,
  fireplaceSoundInput,
  bodyElement
} from './elements.js'

const soundForest = new Audio('/sounds/Floresta.wav')
const soundRain = new Audio('/sounds/Chuva.wav')
const soundCoffee = new Audio('/sounds/Cafeteria.wav')
const soundFirePlace = new Audio('/sounds/Lareira.wav')

export default function ({ timer }) {
  // o que o 'addEventListener' faz? Ele é uma funcionalidade que faz com que quando se der um 'click' no botão play serão executados os comandos que estão dentro da função, ou seja, adiciona a classe 'hide' ao botão play, sumindo ele e tira a classe 'hide' do botão pause, fazendo que ele apareça.
  buttonPlay.addEventListener('click', function () {
    timer.countdow() // esta função está na pasta 'timer', ela é reconhecida aqui pela variável 'timer' que recebeu os valores de importação daquela pasta.
  })

  buttonStop.addEventListener('click', function () {
    timer.hold()
  })

  buttonMore.addEventListener('click', function () {
    timer.updateDisplay(Number(minutesDisplay.textContent) + 5, 0)
  })

  buttonMinus.addEventListener('click', function () {
    if (Number(minutesDisplay.textContent) - 5 < 0) {
      timer.updateDisplay(0, 0)
    } else {
      timer.updateDisplay(Number(minutesDisplay.textContent) - 5, 0)
    }
  })

  cardForest.addEventListener('click', function () {
    if (cardForest.className == 'cardForest') {
      cardForest.classList.add('cardOn')
      soundForest.play()
      soundForest.loop = true
      soundForest.volume = forestSoundInput.value
    } else {
      cardForest.classList.remove('cardOn')
      soundForest.pause()
    }
  })

  cardRain.addEventListener('click', function () {
    if (cardRain.className == 'cardRain') {
      cardRain.classList.add('cardOn')
      soundRain.play()
      soundRain.loop = true
      soundRain.volume = rainSoundInput.value
    } else {
      cardRain.classList.remove('cardOn')
      soundRain.pause()
    }
  })

  cardCoffee.addEventListener('click', function () {
    if (cardCoffee.className == 'cardCoffee') {
      cardCoffee.classList.add('cardOn')
      soundCoffee.play()
      soundCoffee.loop = true
      soundCoffee.volume = coffeShopSoundInput.value
    } else {
      cardCoffee.classList.remove('cardOn')
      soundCoffee.pause()
    }
  })

  cardFirePlace.addEventListener('click', function () {
    if (cardFirePlace.className == 'cardFirePlace') {
      cardFirePlace.classList.add('cardOn')
      soundFirePlace.play()
      soundFirePlace.loop = true
      soundFirePlace.volume = fireplaceSoundInput.value
    } else {
      cardFirePlace.classList.remove('cardOn')
      soundFirePlace.pause()
    }
  })

  lightModeButton.addEventListener('click', function () {
    lightModeButton.classList.add('hide')
    darkModeButton.classList.remove('hide')
    bodyElement.classList.add('dark-mode')
  })

  darkModeButton.addEventListener('click', function () {
    darkModeButton.classList.add('hide')
    lightModeButton.classList.remove('hide')
    bodyElement.classList.remove('dark-mode')
  })
}
