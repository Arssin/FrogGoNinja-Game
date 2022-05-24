/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animations.js":
/*!******************************!*\
  !*** ./src/js/Animations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animation": () => (/* binding */ animation)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
/* harmony import */ var _Platforms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platforms.js */ "./src/js/Platforms.js");


 // Win condition

var scrollOffset = 0; // Animacja Grawitacji

function animation() {
  requestAnimationFrame(animation);
  _index_js__WEBPACK_IMPORTED_MODULE_1__.context.clearRect(0, 0, _index_js__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _index_js__WEBPACK_IMPORTED_MODULE_1__.canvas.height);
  _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.update();
  _Platforms_js__WEBPACK_IMPORTED_MODULE_2__.platforms.forEach(function (platform) {
    platform.draw();
  });

  if (_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.right.pressed && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x < 1200) {
    _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.x = 5;
  } else if (_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x > 250) {
    _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.x = -5;
  } else {
    _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.x *= 0.9;

    if (_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.right.pressed) {
      scrollOffset += 5;
      _Platforms_js__WEBPACK_IMPORTED_MODULE_2__.platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
    } else if (_Player_js__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed) {
      scrollOffset -= 5;
      _Platforms_js__WEBPACK_IMPORTED_MODULE_2__.platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
    }
  }

  console.log(scrollOffset); //Detekcja kolizji

  _Platforms_js__WEBPACK_IMPORTED_MODULE_2__.platforms.forEach(function (platform) {
    if (_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.y + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.height <= platform.position.y && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.y + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.height + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y >= platform.position.y && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x + _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.width >= platform.position.x && _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.position.x <= platform.position.x + platform.width) {
      _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y = 0;
    }
  }); //Add win condition

  if (scrollOffset > 3000) {
    console.log('its a win');
  }
}

/***/ }),

/***/ "./src/js/Platforms.js":
/*!*****************************!*\
  !*** ./src/js/Platforms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "platforms": () => (/* binding */ platforms)
/* harmony export */ });
/* harmony import */ var _images_blocks_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/blocks.png */ "./src/images/blocks.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


 // const image = new Image()
// image.src = './images/blocks.png'
// console.log(image)

var image = new Image();
image.src = _images_blocks_png__WEBPACK_IMPORTED_MODULE_0__["default"];

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    }, this.image = image;
    this.width = 600;
    this.height = 200;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      _index_js__WEBPACK_IMPORTED_MODULE_1__.context.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var platforms = [new Platform({
  x: 400,
  y: 500,
  image: image
}), new Platform({
  x: 1000,
  y: 200,
  image: image
})];

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var canv = document.querySelector('canvas');
var c = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
var GRAVITY = 0.2;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 10,
      y: 200
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  } // Rysunek gracza


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    } //Update pozycji gracza

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; //Grawitacja działa jeżeli jest w oknie canvasa

      if (this.position.y + this.height + this.velocity.y <= canv.height) {
        this.velocity.y += GRAVITY;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();
var player = new Player();
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  },
  jumping: {
    pressed: true
  }
};

function jump(kek) {
  if (event.repeat) {
    return;
  } //TODO Player dalej może skakać pomimo bycia w górze Refactor


  player.velocity.y -= 20;
  setTimeout(kek, 1000);
} //Player Movement


window.addEventListener('keydown', function (_ref) {
  var key = _ref.key;

  switch (key) {
    case 'ArrowLeft':
    case 'A':
    case 'a':
      {
        console.log('left');
        keys.left.pressed = true;
        break;
      }

    case 'ArrowRight':
    case 'D':
    case 'd':
      {
        console.log('right');
        keys.right.pressed = true;
        break;
      }

    case 'ArrowUp':
    case 'W':
    case 'w':
      {
        console.log('up');
        jump();
        break;
      }
  }
});
window.addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;

  switch (key) {
    case 'ArrowLeft':
    case 'A':
    case 'a':
      {
        console.log('left');
        keys.left.pressed = false;
        break;
      }

    case 'ArrowRight':
    case 'D':
    case 'd':
      {
        console.log('right');
        keys.right.pressed = false;
        break;
      }

    case 'ArrowUp':
    case 'W':
    case 'w':
      {
        console.log('up');
        player.velocity.y = 0;
        break;
      }
  }
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "context": () => (/* binding */ context)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var _Animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animations.js */ "./src/js/Animations.js");


var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(_Player_js__WEBPACK_IMPORTED_MODULE_0__.player);
console.log(_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.update.toString());
console.log(_Animations_js__WEBPACK_IMPORTED_MODULE_1__.animation.toString());
console.log(_Player_js__WEBPACK_IMPORTED_MODULE_0__.player.draw.toString());

window.onload = function () {
  _Player_js__WEBPACK_IMPORTED_MODULE_0__.player.update();
  (0,_Animations_js__WEBPACK_IMPORTED_MODULE_1__.animation)();
};

/***/ }),

/***/ "./src/images/blocks.png":
/*!*******************************!*\
  !*** ./src/images/blocks.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/images/85f43c80c38dee3079f42ddeced37558.png");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map