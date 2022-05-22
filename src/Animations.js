import {player,keys, platform} from './Player.js'
import {context, canvas} from './index.js'


// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
  //Clear całego canvasa dzieki temu nie zostaje pozycja gracza
  context.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
	platform.draw()
  
  if(keys.right.pressed) {
		player.velocity.x = 5;
	} else if(keys.left.pressed) {
		player.velocity.x = -5;
	} else {
		player.velocity.x *= 0.9;
	}

	if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x ) {
		player.velocity.y = 0
	}
}
