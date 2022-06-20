import {blocks,Block, blockImage} from './Blocks'
import {player, Player} from './Player'
import { scrollOffset } from './Animations'
import {PLAYER_SPEED} from './Animations'
import {platforms,Platform, platformsImage} from './Platforms'
import { genericObject,GenericObject,backGroundImage } from './GenericObject'
import {miniBlocks, miniBlockImage, MiniBlock} from './MiniBlock'
import {highBlocks, HighBlock, highBlockImage} from './HighBlocks'

const winModal = document.querySelector('.winModal')

export function levelTwo(){

  PLAYER_SPEED = 7
  winModal.style.display = 'none'
  scrollOffset = 0


  blocks = [ 
    new Block({x: -1 ,y: 510, image: blockImage }),
    new Block({x:blockImage.width * 8 ,y: 450, image: blockImage }),
    new Block({x:blockImage.width * 9 ,y: 450, image: blockImage }),
    new Block({x:blockImage.width * 14 + 270 ,y: 450, image: blockImage }),
    new Block({x:blockImage.width * 16  ,y: 450, image: blockImage }),
    new Block({x:blockImage.width * 25  ,y: 450, image: blockImage }),
    new Block({x:blockImage.width * 28  ,y: 450, image: blockImage }),
    new Block({x:blockImage.width * 29  ,y: 450, image: blockImage }),
    
  ]

  highBlocks = [
    new HighBlock({x:blockImage.width * 26  ,y: 400, image: highBlockImage }),
    new HighBlock({x:blockImage.width * 27 + highBlockImage.width,y: 400, image: highBlockImage }),
  ]

  platforms = [
    new Platform({x:blockImage.width + platformsImage.width * 2, y: 440, image: platformsImage}),
    new Platform({x:blockImage.width + platformsImage.width * 5, y: 240, image: platformsImage}),
    new Platform({x:blockImage.width + platformsImage.width * 8, y: 140, image: platformsImage}),
    new Platform({x:blockImage.width + platformsImage.width * 9, y: 140, image: platformsImage}),
    new Platform({x:blockImage.width * 10 + platformsImage.width * 2 , y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 11 + platformsImage.width * 4, y: 340, image: platformsImage}),
    new Platform({x:blockImage.width * 17 + platformsImage.width * 2 ,y: 540, image: platformsImage }),
    new Platform({x:blockImage.width * 17 + platformsImage.width * 4 ,y: 540, image: platformsImage }),
    new Platform({x:blockImage.width * 17 + platformsImage.width * 6 ,y: 540, image: platformsImage }),
    new Platform({x:blockImage.width * 26 + platformsImage.width * 1.5,y: 400, image: platformsImage }),
    new Platform({x:blockImage.width * 26 + platformsImage.width * 2.5,y: 400, image: platformsImage }),
    new Platform({x:blockImage.width * 26 + platformsImage.width * 3.5,y: 400, image: platformsImage }),
  ]
 
  miniBlocks = [
    new MiniBlock({x:blockImage.width * 5, y: 300, image: miniBlockImage}),
    new MiniBlock({x:blockImage.width * 6, y: 300, image: miniBlockImage}),
    new MiniBlock({x:blockImage.width * 7, y: 300, image: miniBlockImage}),
    new MiniBlock({x:blockImage.width * 11 + 200, y: 260, image: miniBlockImage}),
    new MiniBlock({x:blockImage.width * 13 + 200, y: 260, image: miniBlockImage}),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 8 ,y: 540, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 10 ,y: 540, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 12 ,y: 540, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 14 ,y: 440, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 16 ,y: 340, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 18 ,y: 240, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 20 ,y: 340, image: miniBlockImage }),
    new MiniBlock({x:blockImage.width * 17 + platformsImage.width * 22 ,y: 440, image: miniBlockImage }),
  ]

  genericObject = [new GenericObject({
    x: 0,
    y: 0,
    image: backGroundImage
  })]


  player = new Player()
}