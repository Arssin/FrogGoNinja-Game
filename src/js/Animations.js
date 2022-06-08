import {player,keys} from './Player.js'
import {context,canvas} from './index.js'
import {platforms} from './Platforms.js'
import {genericObject} from './GenericObject.js'


// Win condition
let scrollOffset = 0

// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
	context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)
	genericObject.forEach((genericObject) => {
		genericObject.draw()
	})
	platforms.forEach((platform) => {
		platform.draw()
	})

	player.update()

  if(keys.right.pressed && player.position.x < 400) {
		player.velocity.x = 5;
	} else if(keys.left.pressed && player.position.x > 100) {
		player.velocity.x = -5;
	} else {
		player.velocity.x *= 0.9;

		if(keys.right.pressed) {
			scrollOffset += 5
			platforms.forEach((platform)  => {
				platform.position.x -= 5
			})
		
		} else if(keys.left.pressed) {
			scrollOffset -= 5
			platforms.forEach((platform)  => {
				platform.position.x += 5
			})
		
		}
	}

console.log(scrollOffset)

	//Detekcja kolizji
	platforms.forEach((platform)  => {
	if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
		player.velocity.y = 0
	}
})


//Add win condition
if (scrollOffset > 3000) {
console.log('its a win') }
}
