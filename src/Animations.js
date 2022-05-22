import {player,keys} from './Player.js'
import {context, canvas} from './index.js'


// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
  //Clear całego canvasa dzieki temu nie zostaje pozycja gracza
  context.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
  
  if(keys.right.pressed) {
		player.velocity.x = 5;
	} else if(keys.left.pressed) {
		player.velocity.x = -5;
	} else {
		player.velocity.x *= 0.9;
	}
}