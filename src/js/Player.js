import spriteStandRight from '../images/frogoWait.png'
import {createImage} from './CreateImage'

const canv = document.querySelector('canvas')
const context = canv.getContext('2d')
canv.width = window.innerWidth
canv.height = window.innerHeight

//default 0.2
const GRAVITY = 0.2
let count = 0
let frameIndex = 0

export const spriteImageStandRight = createImage(spriteStandRight) 

export class Player {
  constructor() {
    this.position = {
      x: 30,
      y: 0,
  }
  this.velocity = {
    x: 0,
    y: 0,
  }
  this.width = 64;
  this.height = 64;
  this.image = spriteImageStandRight 
  this.frameWidth = 32
  this.frameHeight = 32
  this.jump = false

}

// Rysunek gracza
draw(){
  context.drawImage(
    this.image,
    frameIndex * this.frameWidth,
    0,
    this.frameWidth,
    this.frameHeight,
    this.position.x,
    this.position.y,
    this.width, 
    this.height
    )
    // c.fillStyle = 'blue'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
//Update pozycji gracza
update(){
  count ++
  if(count > 8) {
    frameIndex ++;
    count = 0
  }
  if (frameIndex > 10) {
    frameIndex = 0
  }

  this.draw()
  this.position.y += this.velocity.y
  this.position.x += this.velocity.x
  
  
  //Grawitacja działa jeżeli jest w oknie canvasa
  if(this.position.y + this.height + this.velocity.y <= canv.height ){
  this.velocity.y += GRAVITY 
} 
 }
}

export let player = new Player()


export const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
}




//Key D = 68 Arrow Right = 39
//Key A = 65 Arrow Left = 37
// Key W = 87 Arrow Up = 38


//Player Movement

window.addEventListener('keydown', ({key}) => {
  switch(key) {
    case 'ArrowLeft':
    case 'A':
    case 'a': {
      console.log('left')
      keys.left.pressed = true
      break;
    }
    case 'ArrowRight':
    case 'D':
    case 'd': {
      console.log('right')
      keys.right.pressed = true
      break;
    }
    case 'ArrowUp':
    case 'W':
    case 'w' : {
      console.log('up')
      if(keys.up.pressed === false && player.jump === false && player.velocity.y === 0){
        player.jump = true
        player.velocity.y -= 10
        console.log(player.jump)
      }
      break;
    }
  }
})



window.addEventListener('keyup', ({key}) => {
 
  switch(key) {
    case 'ArrowLeft':
    case 'A':
    case 'a': {
      console.log('left')
      keys.left.pressed = false
      break;
    }
    case 'ArrowRight':
    case 'D':
    case 'd': {
      console.log('right')
      keys.right.pressed = false
      break;
    }
    case 'ArrowUp':
    case 'W':
    case 'w' : {
      console.log('up')
      player.jump = false
      break;
    }
  }
})



