import {blocks,Block, blockImage} from './Blocks'
import {player, Player} from './Player'
import { genericObject, GenericObject, backGroundImage, houseImage } from './GenericObject'
import { scrollOffset } from './Animations'
import {platforms,Platform, platformsImage} from './Platforms'


export function init(){
  
    blocks = [ 
    new Block({x: -1 ,y: 510, image: blockImage }),
    new Block({x: blockImage.width -120, y: 510, image: blockImage}),
    new Block({x: blockImage.width *2 + 100, y: 510, image: blockImage}),
    new Block({x: blockImage.width *3 + 300, y: 510, image: blockImage})
  ]


    platforms = [
      new Platform({x:1, y: 200, image: platformsImage}),
    ]

  player = new Player()

  scrollOffset = 0

  genericObject = [new GenericObject({
  x: 0,
  y: 0,
  image: backGroundImage
}), 
new GenericObject({
  x: 300,
  y: 320,
  image: houseImage,
}),
new GenericObject({
  x: 1020,
  y: 320,
  image: houseImage,
})
];

}