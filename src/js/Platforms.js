import blocks from '../images/blocks.png';
import {context} from './index.js'

// const image = new Image()
// image.src = './images/blocks.png'
// console.log(image)

const image = new Image()
image.src = blocks

class Platform {
  constructor({x,y, image}){
    this.position = {
      x: x,
      y: y,

    },
    this.image = image
    this.width = 600
    this.height = 200
  }

  draw(){
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}


export const platforms = [ new Platform({x: 400, y: 500, image: image}), new Platform({x:1000, y: 200, image: image})]