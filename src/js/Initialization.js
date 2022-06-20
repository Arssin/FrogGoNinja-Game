import {blocks,Block, blockImage} from './Blocks'
import {player, Player} from './Player'
import { genericObject, GenericObject, backGroundImage, houseImage } from './GenericObject'
import { scrollOffset } from './Animations'
import {platforms,Platform, platformsImage} from './Platforms'
import {HighBlock, highBlockImage, highBlocks} from './HighBlocks'
import { PLAYER_SPEED } from './Animations'


const winModal = document.querySelector('.winModal')

export function init(){
  PLAYER_SPEED = 7
  winModal.style.display = 'none'
  
  blocks = [ 
    new Block({x: -1 ,y: 510, image: blockImage }),
    new Block({x: blockImage.width - 1 , y: 510, image: blockImage}),
    new Block({x: blockImage.width *2 + 100, y: 510, image: blockImage}),
    new Block({x: blockImage.width *3 + 300, y: 510, image: blockImage}),
    new Block({x: blockImage.width *6 , y: 510, image: blockImage}),
    new Block({x: blockImage.width * 11 , y: 510, image: blockImage}),
    new Block({x: blockImage.width * 18 + 200 , y: 510, image: blockImage}),
    new Block({x: blockImage.width * 19 , y: 460, image: blockImage}),
    new Block({x: blockImage.width * 20 , y: 420, image: blockImage}),
    new Block({x: blockImage.width * 22 - 50 , y: 420, image: blockImage}),
    new Block({x: blockImage.width * 26 - 50 , y: 420, image: blockImage}),
    new Block({x: blockImage.width * 30 - 300 , y: 420, image: blockImage}),
  
  ]

  highBlocks = [
    new HighBlock({x: blockImage.width * 22 + 150 + highBlockImage.width * 4, y: 220, image: highBlockImage}),
    new HighBlock({x: blockImage.width * 27 - 50, y: 320, image: highBlockImage}),
    new HighBlock({x: blockImage.width * 27 - 50 + highBlockImage.width, y: 250, image: highBlockImage}),
    new HighBlock({x: blockImage.width * 27 - 50 + highBlockImage.width * 2 , y: 250, image: highBlockImage}),
    new HighBlock({x: blockImage.width * 27 - 50 + highBlockImage.width * 3, y: 320, image: highBlockImage}),
    new HighBlock({x: blockImage.width * 27 - 50 + highBlockImage.width * 4, y: 420, image: highBlockImage}),
  
  ]


  platforms = [
    new Platform({x:blockImage.width *5, y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 5 + platformsImage.width , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 3 , y: 250, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 5 , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 8 , y: 440, image: platformsImage}),
    new Platform({x:blockImage.width * 7 + platformsImage.width * 10 , y: 440, image: platformsImage}),
    new Platform({x:blockImage.width * 9 + platformsImage.width * 11 , y: 440, image: platformsImage}),
    new Platform({x:blockImage.width * 9 + platformsImage.width * 14 , y: 440, image: platformsImage}),
    new Platform({x:blockImage.width * 9 + platformsImage.width * 17 , y: 440, image: platformsImage}),
    new Platform({x:blockImage.width * 10 + platformsImage.width * 17 , y: 460, image: platformsImage}),
    new Platform({x:blockImage.width * 11 + platformsImage.width * 17 + 40 , y: 360, image: platformsImage}),
    new Platform({x:blockImage.width * 10 + platformsImage.width * 18 + 20 , y: 180, image: platformsImage}),
    new Platform({x:blockImage.width * 10 + platformsImage.width * 19 + 40 , y: 100, image: platformsImage}),new Platform({x:blockImage.width * 10 + platformsImage.width * 20 + 40 , y: 100, image: platformsImage}),
    new Platform({x:blockImage.width * 10 + platformsImage.width * 21 + 40 , y: 100, image: platformsImage}),new Platform({x:blockImage.width * 10 + platformsImage.width * 22 + 40 , y: 100, image: platformsImage}),
    new Platform({x: blockImage.width * 21 + 170 + highBlockImage.width * 4, y: 320, image: platformsImage}),
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

];

}