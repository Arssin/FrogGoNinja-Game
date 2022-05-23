import {context, canvas} from './index.js'

const GRAVITY = 0.2

class Player {
  constructor() {
    this.position = {
      x: 10,
      y: 1200,
  }
  this.velocity = {
    x: 0,
    y: 0,
  }
  this.width = 30;
  this.height = 30;

}

// Rysunek gracza
draw(){
    context.fillStyle = 'red'
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
//Update pozycji gracza
update(){
  this.draw()
  this.position.y += this.velocity.y
  this.position.x += this.velocity.x
  
  //Grawitacja działa jeżeli jest w oknie canvasa
  if(this.position.y + this.height + this.velocity.y <= canvas.height ){
  this.velocity.y += GRAVITY 
} else { 
  this.velocity.y = 0
  }
 }
}

export const player = new Player()


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
  jumping: {
    pressed: true,
  }
}

function jump(kek) {     
   if(event.repeat) {return} //TODO Player dalej może skakać pomimo bycia w górze Refactor
player.velocity.y -= 20
setTimeout(kek , 1000)

}



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
      jump()
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
      player.velocity.y = 0
      break;
    }
  }
})



