import background from '../images/background.png';
import {context} from './index.js'
import {createImage} from './CreateImage'
import houses from '../images/house.png';

export let backGroundImage = createImage(background)
export let houseImage = createImage(houses)

export class GenericObject {
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

// export let genericObject = [new GenericObject({
//   x: 0,
//   y: 0,
//   image: backGroundImage
// }), 
// new GenericObject({
//   x: 300,
//   y: 320,
//   image: houseImage,
// }),
// new GenericObject({
//   x: 1200,
//   y: 320,
//   image: houseImage,
// })
// ];

