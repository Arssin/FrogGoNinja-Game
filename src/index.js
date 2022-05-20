import {player} from './Player.js'

const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


export const context = canvas.getContext('2d')

console.log(context)

player.draw()
