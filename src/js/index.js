import {animation} from './Animations.js'
import {init} from './Initialization'
import { levelTwo } from './LevelTwo.js'



export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')



canvas.width = 1024 
canvas.height = 576

export const heightCanvas = canvas.height

export let LEVEL = Number

console.log(localStorage.getItem('LEVEL1_COMPLETE'))

if (localStorage.getItem('LEVEL1_COMPLETE') === 'true') {
 window.onload = () => {
  levelTwo()
  animation()
  LEVEL = 2
 }
} else {
  window.onload = () => {
    init()
    animation() 
    LEVEL = 1
  }
}


/// Other Functions

const restart = document.querySelector('.restartBtn')

restart.addEventListener('click', () => {
  localStorage.removeItem('LEVEL1_COMPLETE')
  document.location.reload()
})

const nextLvlBtn = document.getElementById('nextLvlBtn')

nextLvlBtn.addEventListener('click', () => {
  document.location.reload()
  levelTwo()
}
)

