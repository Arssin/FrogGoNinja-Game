import {player} from './Player.js'
import {animation} from './Animations.js'

export const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


export const context = canvas.getContext('2d')


animation()
player.update()



