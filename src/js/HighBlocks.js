import highBlock from '../images/highBlock.png';
import {context} from './index.js'
import {createImage} from './CreateImage'


export let highBlockImage = createImage(highBlock)

export class HighBlock {
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

//Level 1
export const highBlocks = []

