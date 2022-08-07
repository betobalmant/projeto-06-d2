const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonMinus = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cardForest = document.querySelector('.cardForest')
const cardRain = document.querySelector('.cardRain')
const cardCoffee = document.querySelector('.cardCoffee')
const cardFirePlace = document.querySelector('.cardFirePlace')
const lightModeButton = document.querySelector('.light-mode-button')
const darkModeButton = document.querySelector('.dark-mode-button')
const bodyElement = document.querySelector('body')
const forestSoundInput = document.querySelector('#forest-volume')
const rainSoundInput = document.querySelector('#rain-volume')
const coffeShopSoundInput = document.querySelector('#coffee-shop-volume')
const fireplaceSoundInput = document.querySelector('#fireplace-volume')

let minutes = Number(minutesDisplay.textContent)
export {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  cardForest,
  cardRain,
  cardCoffee,
  cardFirePlace,
  lightModeButton,
  darkModeButton,
  bodyElement,
  forestSoundInput,
  rainSoundInput,
  coffeShopSoundInput,
  fireplaceSoundInput,
  minutes
}
