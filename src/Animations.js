import {player} from './Player.js'
import {context, canvas} from './index.js'


// Animacja Grawitacji
export function animation () {
  requestAnimationFrame(animation)
  //Clear całego canvasa dzieki temu nie zostaje pozycja gracza
  context.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
}