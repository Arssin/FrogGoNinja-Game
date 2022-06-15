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

//Level 1
export const blockLevelOne = [ 
  new Block({x: -1 ,y: 510, image: blockImage }),
  new Block({x: blockImage.width -120, y: 510, image: blockImage}),
  new Block({x: blockImage.width *2 + 100, y: 510, image: blockImage}),
  new Block({x: blockImage.width *3 + 300, y: 510, image: blockImage}),
  new Block({x: blockImage.width *6 , y: 510, image: blockImage}),
  new Block({x: blockImage.width * 11 , y: 510, image: blockImage})
]


