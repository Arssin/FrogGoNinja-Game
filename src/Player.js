import {context, canvas} from './index.js'


const GRAVITY = 0.2

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
  }
  this.velocity = {
    x: 0,
    y: 1,
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
  
  //Grawitacja działa jeżeli jest w oknie canvasa
  if(this.position.y + this.height + this.velocity.y <= canvas.height ){
  this.velocity.y += GRAVITY 
} else { 
  this.velocity.y = 0
}
}
}


export const player = new Player()



//Player Movement

window.addEventListener('keydown', () => {
  console.log('keyDown')
})
