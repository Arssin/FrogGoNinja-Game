import blocks from '../images/blocks.png';
import {context} from './index.js'
import {createImage} from './CreateImage'



export let platformImage = createImage(blocks)

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





export let platforms = [ new Platform({x: -1 ,y: 510, image: platformImage }), new Platform({x: platformImage.width -1, y: 510, image: platformImage}), new Platform({x: platformImage.width *2 + 100, y: 510, image: platformImage})
]