import {player} from './Player.js'
import {animation} from './Animations.js'
import {init} from './Initialization'

export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')



canvas.width = 1024 
canvas.height = 576

export const heightCanvas = canvas.height





window.onload = () => {
  init()
// player.update()
animation()
}



