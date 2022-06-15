import {player,keys} from './Player.js'
import {context,canvas, heightCanvas} from './index.js'
import {blockLevelOne} from './Blocks.js'
import {genericObjectLevelOne} from './GenericObject.js'
import {init} from './Initialization'
import {platformsLevelOne} from './Platforms'

// 4.5 default
let PLAYER_SPEED = 4.5

// Win condition
 export let scrollOffset = 0

// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
	context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)
	genericObjectLevelOne.forEach((genericObject) => {
		genericObject.draw()
	})
	blockLevelOne.forEach((blocks) => {
		blocks.draw()
	})
	platformsLevelOne.forEach((platform) => {
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
			blockLevelOne.forEach((blocks)  => {
				blocks.position.x -= PLAYER_SPEED
			})
			genericObjectLevelOne.forEach((genericObject) => {
				genericObject.position.x -= PLAYER_SPEED * 0.66
			})
			platformsLevelOne.forEach((platform)  => {
				platform.position.x -= PLAYER_SPEED
			})
		
		} else if(keys.left.pressed && scrollOffset > 0) {
			scrollOffset -= PLAYER_SPEED
			blockLevelOne.forEach((blocks)  => {
				blocks.position.x += PLAYER_SPEED
			})
			genericObjectLevelOne.forEach((genericObject) => {
				genericObject.position.x += PLAYER_SPEED * 0.66
			})
			platformsLevelOne.forEach((platform)  => {
				platform.position.x += PLAYER_SPEED
			})
		}
	}



	//Detekcja kolizji

platformsLevelOne.forEach((platform)  => {
	if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width - 10>= platform.position.x && player.position.x <= platform.position.x - 20 + platform.width) {
		player.velocity.y = 0
	}
})

console.log(player.position.y + player.height)

	blockLevelOne.forEach((blocks)  => {
	if(player.position.y + player.height <= blocks.position.y && player.position.y + player.height + player.velocity.y >= blocks.position.y && player.position.x + player.width - 10 >= blocks.position.x  && player.position.x  <= blocks.position.x - 10 + blocks.width 
		) {
		player.velocity.y = 0
	} else if (
		player.position.y + player.height >= blocks.position.y 
		&& 
		player.position.x + player.width >= blocks.position.x
		&& 
		player.position.x + player.width <= blocks.position.x + blocks.width
	) {
		player.velocity.x = -1
	} 

})






//Add win condition
if (scrollOffset > 13000) {
console.log('its a win') }


// Lose condition
if(player.position.y > heightCanvas ) {
	console.log('you lose')
	init()
}
}



