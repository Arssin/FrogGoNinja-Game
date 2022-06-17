import platfroms from '../images/platforms.png';
import {context} from './index.js'
import {createImage} from './CreateImage'
import{blockImage} from './Blocks'

export let platformsImage = createImage(platfroms)

export class Platform {
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


export const platforms = []

