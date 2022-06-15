import {blockLevelOne,Block, blockImage} from './Blocks'
import {player, Player} from './Player'
import { genericObjectLevelOne, GenericObject, backGroundImage, houseImage } from './GenericObject'
import { scrollOffset } from './Animations'
import {platformsLevelOne,Platform, platformsImage} from './Platforms'


export function init(){
  
  blockLevelOne = [ 
    new Block({x: -1 ,y: 510, image: blockImage }),
    new Block({x: blockImage.width -120, y: 510, image: blockImage}),
    new Block({x: blockImage.width *2 + 100, y: 510, image: blockImage}),
    new Block({x: blockImage.width *3 + 300, y: 510, image: blockImage}),
    new Block({x: blockImage.width *6 , y: 510, image: blockImage}),
    new Block({x: blockImage.width * 11 , y: 510, image: blockImage})
  ]


  platformsLevelOne = [
    new Platform({x:blockImage.width *5, y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 5 + platformsImage.width , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 3 , y: 250, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 5 , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 8 , y: 440, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 10 , y: 440, image: platformsImage}),
  ]

  player = new Player()

  scrollOffset = 0

  genericObjectLevelOne = [new GenericObject({
  x: 0,
  y: 0,
  image: backGroundImage
}), 
new GenericObject({
  x: 300,
  y: 320,
  image: houseImage,
}),

];

}