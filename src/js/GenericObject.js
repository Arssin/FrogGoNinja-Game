import background from '../images/background.png';
import {context} from './index.js'
import {createImage} from './CreateImage'

const backGroundImage = createImage(background)

class GenericObject {
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

export const genericObject = [new GenericObject({
  x: 0,
  y: 0,
  image: backGroundImage
})];