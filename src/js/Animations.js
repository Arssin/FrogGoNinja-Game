import {player,keys} from './Player.js'
import {context,canvas, heightCanvas} from './index.js'
import {blocks} from './Blocks.js'
import {genericObject} from './GenericObject.js'
import {init} from './Initialization'
import {platforms} from './Platforms'
import {highBlocks} from './HighBlocks'
import { levelTwo } from './LevelTwo.js'
import {LEVEL} from './index'

// 4.5 default
export let PLAYER_SPEED = 14.5

// Win condition

export let scrollOffset = 0


// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
	context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)
	genericObject.forEach((genericObject) => {
		genericObject.draw()
	})
	blocks.forEach((blocks) => {
		blocks.draw()
	})
	highBlocks.forEach((highBlock) => {
		highBlock.draw()
	})
	platforms.forEach((platform) => {
		platform.draw()
	})

	player.update()

  if(keys.right.pressed && player.position.x < 400) {
		player.velocity.x = PLAYER_SPEED;
	} else if(keys.left.pressed && player.position.x > 100) {
		player.velocity.x = -PLAYER_SPEED;
	} else {
		// player.velocity.x *= 0.9  ;
		player.velocity.x = 0

		if(keys.right.pressed) {
			scrollOffset += PLAYER_SPEED
			blocks.forEach((blocks)  => {
				blocks.position.x -= PLAYER_SPEED
			})
			genericObject.forEach((genericObject) => {
				genericObject.position.x -= PLAYER_SPEED * 0.66
			})
			platforms.forEach((platform)  => {
				platform.position.x -= PLAYER_SPEED
			})
			highBlocks.forEach((highBlock) => {
				highBlock.position.x -= PLAYER_SPEED
			})
		
		} else if(keys.left.pressed && scrollOffset > 0) {
			scrollOffset -= PLAYER_SPEED
			blocks.forEach((blocks)  => {
				blocks.position.x += PLAYER_SPEED
			})
			genericObject.forEach((genericObject) => {
				genericObject.position.x += PLAYER_SPEED * 0.66
			})
			platforms.forEach((platform)  => {
				platform.position.x += PLAYER_SPEED
			})
			highBlocks.forEach((highBlock) => {
				highBlock.position.x += PLAYER_SPEED
			})
		}
	}



	//Detekcja kolizji

	platforms.forEach((platform)  => {
	if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width - 10>= platform.position.x && player.position.x <= platform.position.x - 20 + platform.width) {
		player.velocity.y = 0
	}
})
// console.log(player.velocity.y)
// console.log(player.velocity.x)
// console.log(player.position.y + player.height)

blocks.forEach((blocks)  => {
	if(player.position.y + player.height <= blocks.position.y && player.position.y + player.height + player.velocity.y >= blocks.position.y && player.position.x + player.width - 10 >= blocks.position.x  && player.position.x  <= blocks.position.x - 10 + blocks.width 
		) {
		player.velocity.y = 0
	} else if (
		//Left side collision
		player.position.y + player.height >= blocks.position.y 
		&& 
		player.position.x + player.width >= blocks.position.x
		&& 
		player.position.x + player.width <= blocks.position.x + blocks.width
	) {
		player.velocity.x = -1
	}  else if (
		//Right side collision
		player.position.y + player.height  >= blocks.position.y 
		&& 
		player.position.x + player.width >= blocks.position.x
		&& 
		player.position.x <= blocks.position.x + blocks.width
	) 
	{
		player.velocity.x = 1
	}

})


highBlocks.forEach((highBlock)  => {
	if(player.position.y + player.height <= highBlock.position.y && player.position.y + player.height + player.velocity.y >= highBlock.position.y && player.position.x + player.width - 10 >= highBlock.position.x  && player.position.x  <= highBlock.position.x - 10 + highBlock.width 
		) {
		player.velocity.y = 0
	} else if (
		//Left side collision
		player.position.y + player.height >= highBlock.position.y 
		&& 
		player.position.x + player.width >= highBlock.position.x
		&& 
		player.position.x + player.width <= highBlock.position.x + highBlock.width
	) {
		player.velocity.x = -1
	}  else if (
		//Right side collision
		player.position.y + player.height  >= highBlock.position.y 
		&& 
		player.position.x + player.width >= highBlock.position.x
		&& 
		player.position.x <= highBlock.position.x + highBlock.width
	) 
	{
		player.velocity.x = 1
	}

})

// console.log(scrollOffset)


 const winModal = document.querySelector('.winModal')

 
//Add win condition
if (scrollOffset >= '13860') {
	localStorage.setItem('LEVEL1_COMPLETE', true)
	PLAYER_SPEED = 0
	winModal.style.display = 'flex'}


// Lose condition
	if(LEVEL <= 1 && player.position.y > heightCanvas ) {
		console.log('you lose')
		init()
	} else if(LEVEL > 1 && player.position.y > heightCanvas) {
		console.log('you loose lvl 2')
		levelTwo()
	}
	}




