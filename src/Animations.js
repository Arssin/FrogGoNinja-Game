import {player,keys, platforms} from './Player.js'
import {context, canvas} from './index.js'


// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
  context.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
	platforms.forEach((platform) => {
		platform.draw()
	})
  
  if(keys.right.pressed && player.position.x < 1200) {
		player.velocity.x = 5;
	} else if(keys.left.pressed && player.position.x > 250) {
		player.velocity.x = -5;
	} else {
		player.velocity.x *= 0.9;

		if(keys.right.pressed) {
			platforms.forEach((platform)  => {
				platform.position.x -= 5
			})
		
		} else if(keys.left.pressed) {
			platforms.forEach((platform)  => {
				platform.position.x += 5
			})
		
		}
	}

	//Detekcja kolizji
	platforms.forEach((platform)  => {
	if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
		player.velocity.y = 0
	}
})
}
