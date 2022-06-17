import block from '../images/blocks.png';
import {context} from './index.js'
import {createImage} from './CreateImage'

export let blockImage = createImage(block)

export class Block {
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

export const blocks =  []




