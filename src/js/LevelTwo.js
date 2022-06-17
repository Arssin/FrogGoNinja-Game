import {blocks,Block, blockImage} from './Blocks'
import {player, Player} from './Player'
import { scrollOffset } from './Animations'
import {PLAYER_SPEED} from './Animations'
import {platforms,Platform, platformsImage} from './Platforms'
import { genericObject,GenericObject,backGroundImage } from './GenericObject'

const winModal = document.querySelector('.winModal')

export function levelTwo(){

  PLAYER_SPEED = 4.5
  winModal.style.display = 'none'
  scrollOffset = 0


  blocks = [ 
    new Block({x: -1 ,y: 510, image: blockImage }),
  ]

  platforms = [
    new Platform({x:blockImage.width + platformsImage.width * 2, y: 440, image: platformsImage}),
    new Platform({x:blockImage.width + platformsImage.width * 5, y: 240, image: platformsImage}),
    new Platform({x:blockImage.width + platformsImage.width * 8, y: 140, image: platformsImage}),
    new Platform({x:blockImage.width + platformsImage.width * 9, y: 140, image: platformsImage}),
  ]
 

  genericObject = [new GenericObject({
    x: 0,
    y: 0,
    image: backGroundImage
  })]


  player = new Player()
}