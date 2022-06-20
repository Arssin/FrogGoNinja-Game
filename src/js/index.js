import {animation} from './Animations.js'
import {init} from './Initialization'
import { levelTwo } from './LevelTwo.js'



export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')



canvas.width = 1024 
canvas.height = 576

export const heightCanvas = canvas.height

export let LEVEL = Number

console.log(localStorage.getItem('LEVEL1_COMPLETE'))


function animation () {
  window.requestAnimationFrame(animation)
	context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)
	// genericObject.forEach((genericObject) => {
	// 	genericObject.draw()
	// })
	blocks.forEach((blocks) => {
		blocks.draw()
	})
	highBlocks.forEach((highBlock) => {
		highBlock.draw()
	})
	platforms.forEach((platform) => {
		platform.draw()
	})
	miniBlocks.forEach((miniBlock) => {
		miniBlock.draw()
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
			miniBlocks.forEach((miniBlock) => {
				miniBlock.position.x -= PLAYER_SPEED
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
			miniBlocks.forEach((miniBlock) => {
				miniBlock.position.x += PLAYER_SPEED
			})
		}
	}



	//Detekcja kolizji

	platforms.forEach((platform)  => {
	if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width - 10>= platform.position.x && player.position.x <= platform.position.x - 20 + platform.width) {
		player.velocity.y = 0
	}
})


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


miniBlocks.forEach((miniBlock) => {
	if(player.position.y + player.height <= miniBlock.position.y && player.position.y + player.height + player.velocity.y >= miniBlock.position.y && player.position.x + player.width - 10 >= miniBlock.position.x  && player.position.x  <= miniBlock.position.x - 10 + miniBlock.width 
		) {
		player.velocity.y = 0
	} else if (
		//Left side collision
		player.position.y + player.height >= miniBlock.position.y 
		&& 
		player.position.x + player.width >= miniBlock.position.x
		&& 
		player.position.x + player.width <= miniBlock.position.x + miniBlock.width
	) {
		player.velocity.x = -1
	}  else if (
		//Right side collision
		player.position.y + player.height  >= miniBlock.position.y 
		&& 
		player.position.x + player.width >= miniBlock.position.x
		&& 
		player.position.x <= miniBlock.position.x + miniBlock.width
	) 
	{
		player.velocity.x = 1
	}

})



 const winModal = document.querySelector('.winModal')
 const levelTwoModal = document.querySelector('.levelTwoEnd')

//Add win condition
if ( LEVEL <= 1 && scrollOffset >= '13860') {
	localStorage.setItem('LEVEL1_COMPLETE', true)
	PLAYER_SPEED = 0
	winModal.style.display = 'flex'}

	if ( LEVEL > 1 && scrollOffset >= '13860') {
		localStorage.setItem('LEVEL2_COMPLETE', true)
		PLAYER_SPEED = 0
		levelTwoModal.style.display = 'flex'}


// Lose condition
	if(LEVEL <= 1 && player.position.y > heightCanvas ) {
		console.log('you lose')
		init()
	} else if(LEVEL > 1 && player.position.y > heightCanvas) {
		console.log('you loose lvl 2')
		levelTwo()
	}
	}
  animation()
init()

// if (localStorage.getItem('LEVEL1_COMPLETE') === 'true') {




//  window.onload = () => {
//   levelTwo()
//   animation()
//   LEVEL = 2

//  }
// } else {
//   window.onload = () => {
//     init()
//     animation() 
//     LEVEL = 1
//   }
 
// }


/// Other Functions

const restart = document.querySelector('.restartBtn')

restart.addEventListener('click', () => {
  localStorage.removeItem('LEVEL1_COMPLETE')
  localStorage.removeItem('LEVEL2_COMPLETE')
  document.location.reload()
})

const nextLvlBtn = document.getElementById('nextLvlBtn')
const nextLvlBtnTwo = document.getElementById('nextLvlBtnTwo')

nextLvlBtn.addEventListener('click', () => {
window.location.reload()
levelTwo()
}
)

nextLvlBtnTwo.addEventListener('click', () => {
  window.location.reload()
  levelTwo()
  }
  )
  