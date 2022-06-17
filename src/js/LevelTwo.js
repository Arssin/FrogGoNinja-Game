import {blocks,Block, blockImage} from './Blocks'
import {player, Player} from './Player'
import { scrollOffset } from './Animations'
import {PLAYER_SPEED} from './Animations'

const winModal = document.querySelector('.winModal')

export function levelTwo(){

  PLAYER_SPEED = 4.5
  winModal.style.display = 'none'
  scrollOffset = 0
  
  blocks = [ 
    new Block({x: -1 ,y: 410, image: blockImage }),
    new Block({x: 700 ,y: 310, image: blockImage }),
  ]

  player = new Player()


}