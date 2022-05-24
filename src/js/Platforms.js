import blocks from '../images/blocks.png';
import {context} from './index.js'

const image = new Image()
image.src = blocks

class Platform {
  constructor({x,y, image}){
    this.position = {
      x: x,
      y: y,

    },
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw(){
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}


export const platforms = [ new Platform({x: -1, y: 520, image: image}), new Platform({x:image.width - 2, y: 520, image: image})]