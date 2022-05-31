import blocks from '../images/blocks.png';
import {context} from './index.js'
import {createImage} from './CreateImage'


const platformImage = createImage(blocks)

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





export const platforms = [ new Platform({x: -1 ,y: 510, image: platformImage }), new Platform({x: platformImage.width -1, y: 510, image: platformImage})]