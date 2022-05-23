/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Animations.js":
/*!***************************!*\
  !*** ./src/Animations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animation": () => (/* binding */ animation)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



// Win condition
let scrollOffset = 0

// Animacja Grawitacji
function animation () {
  requestAnimationFrame(animation)
  _index_js__WEBPACK_IMPORTED_MODULE_1__.context.clearRect(0, 0, _index_js__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _index_js__WEBPACK_IMPORTED_MODULE_1__.canvas.height)
  _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.update()
	_Player_js__WEBPACK_IMPORTED_MODULE_0__.platforms.forEach((platform) => {
		platform.draw()
	})
  
  if(_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.right.pressed && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x < 1200) {
		_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.x = 5;
	} else if(_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x > 250) {
		_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.x = -5;
	} else {
		_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.x *= 0.9;

		if(_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.right.pressed) {
			scrollOffset += 5
			_Player_js__WEBPACK_IMPORTED_MODULE_0__.platforms.forEach((platform)  => {
				platform.position.x -= 5
			})
		
		} else if(_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed) {
			scrollOffset -= 5
			_Player_js__WEBPACK_IMPORTED_MODULE_0__.platforms.forEach((platform)  => {
				platform.position.x += 5
			})
		
		}
	}

console.log(scrollOffset)

	//Detekcja kolizji
	_Player_js__WEBPACK_IMPORTED_MODULE_0__.platforms.forEach((platform)  => {
	if(_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.y + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.height <= platform.position.y && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.y + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.height + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y >= platform.position.y && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.width >= platform.position.x && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x <= platform.position.x + platform.width) {
		_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y = 0
	}
})

//Add win condition
if (scrollOffset > 3000) {
console.log('its a win') }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "platforms": () => (/* binding */ platforms),
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const GRAVITY = 0.2

class Player {
  constructor() {
    this.position = {
      x: 10,
      y: 1200,
  }
  this.velocity = {
    x: 0,
    y: 0,
  }
  this.width = 30;
  this.height = 30;

}

// Rysunek gracza
draw(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context.fillStyle = 'red'
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
//Update pozycji gracza
update(){
  this.draw()
  this.position.y += this.velocity.y
  this.position.x += this.velocity.x
  
  //Grawitacja działa jeżeli jest w oknie canvasa
  if(this.position.y + this.height + this.velocity.y <= _index_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height ){
  this.velocity.y += GRAVITY 
} else { 
  this.velocity.y = 0
  }
 }
}

class Platform {
  constructor({x,y}){
    this.position = {
      x: x,
      y: y,
    }
    this.width = 400
    this.height = 50
  }

  draw(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context.fillStyle = 'blue'
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context.fillRect(this.position.x, this.position.y,this.width,this.height)
  }

}


const player = new Player()
const platforms = [ new Platform({x: 300, y: 1100}), new Platform({x:1000, y: 1000})]


const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
  jumping: {
    pressed: true,
  }
}

function jump(kek) {     
   if(event.repeat) {return} //TODO Player dalej może skakać pomimo bycia w górze Refactor
player.velocity.y -= 20
setTimeout(kek , 1000)

}



//Player Movement

window.addEventListener('keydown', ({key}) => {
  switch(key) {
    case 'ArrowLeft':
    case 'A':
    case 'a': {
      console.log('left')
      keys.left.pressed = true
      break;
    }
    case 'ArrowRight':
    case 'D':
    case 'd': {
      console.log('right')
      keys.right.pressed = true
      break;
    }
    case 'ArrowUp':
    case 'W':
    case 'w' : {
      console.log('up')
      jump()
      break;
    }
  }
})



window.addEventListener('keyup', ({key}) => {
 
  switch(key) {
    case 'ArrowLeft':
    case 'A':
    case 'a': {
      console.log('left')
      keys.left.pressed = false
      break;
    }
    case 'ArrowRight':
    case 'D':
    case 'd': {
      console.log('right')
      keys.right.pressed = false
      break;
    }
    case 'ArrowUp':
    case 'W':
    case 'w' : {
      console.log('up')
      player.velocity.y = 0
      break;
    }
  }
})





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "context": () => (/* binding */ context)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animations.js */ "./src/Animations.js");



const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


const context = canvas.getContext('2d')


;(0,_Animations_js__WEBPACK_IMPORTED_MODULE_1__.animation)()
_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.update()





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map