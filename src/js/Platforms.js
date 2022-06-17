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

// new Platform({x:blockImage.width *5, y: 340, image: platformsImage}),
// new Platform({x:blockImage.width * 5 + platformsImage.width , y: 340, image: platformsImage}),
// new Platform({x:blockImage.width * 7 + platformsImage.width , y: 340, image: platformsImage}),
// new Platform({x:blockImage.width * 7 + platformsImage.width * 3 , y: 250, image: platformsImage}),
// new Platform({x:blockImage.width * 7 + platformsImage.width * 5 , y: 340, image: platformsImage}),
// new Platform({x:blockImage.width * 7 + platformsImage.width * 8 , y: 440, image: platformsImage}),
// new Platform({x:blockImage.width * 7 + platformsImage.width * 10 , y: 440, image: platformsImage}),