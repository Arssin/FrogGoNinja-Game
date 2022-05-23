import blocks from './images/blocks.png'
import {context} from './index.js'

console.log(blocks)

class Platform {
  constructor({x,y, image}){
    this.position = {
      x: x,
      y: y,
    }
    this.width = 1000
    this.height = 500
    this.image = image
  }

  draw(){
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}

const image = new Image()
image.src = blocks

console.log(image)

export const platforms = [ new Platform({x: 300, y: 1100, image: image}), new Platform({x:1000, y: 1000, image: image})]