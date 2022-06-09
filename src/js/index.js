import {player} from './Player.js'
import {animation} from './Animations.js'

export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')



canvas.width = 1024 
canvas.height = 576

export const heightCanvas = canvas.height





// console.log(player.update.toString())
// console.log(animation.toString())
// console.log(player.draw.toString())


window.onload = () => {
player.update()
animation()
}



