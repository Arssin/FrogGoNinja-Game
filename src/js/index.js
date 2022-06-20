import {animation} from './Animations.js'
import {init} from './Initialization'
import { levelTwo } from './LevelTwo.js'



export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')



canvas.width = 1024 
canvas.height = 576

export const heightCanvas = canvas.height

export let LEVEL = Number


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
  localStorage.removeItem('LEVEL2_COMPLETE')
  document.location.reload()
})

const nextLvlBtn = document.getElementById('nextLvlBtn')
const nextLvlBtnTwo = document.getElementById('nextLvlBtnTwo')

nextLvlBtn.addEventListener('click', () => {
window.location.reload()
levelTwo()
}
)

nextLvlBtnTwo.addEventListener('click', () => {
  window.location.reload()
  levelTwo()
  }
  )
  