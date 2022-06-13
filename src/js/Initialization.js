import {platforms, Platform, platformImage} from './Platforms'
import {player, Player} from './Player'
import { genericObject, GenericObject, backGroundImage, houseImage } from './GenericObject'
import { scrollOffset } from './Animations'

export function init(){
  
  platforms = [ new Platform({x: -1 ,y: 510, image: platformImage }), new Platform({x: platformImage.width -1, y: 510, image: platformImage}), new Platform({x: platformImage.width *2 + 100, y: 510, image: platformImage}),
    new Platform({x: platformImage.width *3 + 300, y: 510, image: platformImage})


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