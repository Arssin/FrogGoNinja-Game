
import {context} from './index.js'

const image = new Image()
image.src = './images/blocks.png'
console.log(image)

class Platform {
  constructor({x,y, image}){
    this.position = {
      x: x,
      y: y,

    },
    this.image = image
    this.width = 1000
    this.height = 500
  }

  draw(){
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}


export const platforms = [ new Platform({x: 300, y: 1100, image: image}), new Platform({x:1000, y: 1000, image: image})]