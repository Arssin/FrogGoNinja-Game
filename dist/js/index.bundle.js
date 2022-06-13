(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var o=i.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),e.d({},{JQ:()=>j,Do:()=>k,Nx:()=>E});var t={};e.r(t),e.d(t,{t:()=>f,P:()=>p});var i={};function o(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.r(i),e.d(i,{dM:()=>v,p3:()=>g,SE:()=>w});var n=document.querySelector("canvas"),r=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:30,y:0},this.velocity={x:0,y:0},this.width=30,this.height=30}var t,i;return t=e,(i=[{key:"draw",value:function(){r.fillStyle="red",r.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=n.height&&(this.velocity.y+=.2)}}])&&o(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s=new a,c={right:{pressed:!1},left:{pressed:!1},up:{pressed:!1},jumping:{pressed:!0}};function h(e){var t=new Image;return t.src=e,t}function l(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}window.addEventListener("keydown",(function(e){switch(e.key){case"ArrowLeft":case"A":case"a":console.log("left"),c.left.pressed=!0;break;case"ArrowRight":case"D":case"d":console.log("right"),c.right.pressed=!0;break;case"ArrowUp":case"W":case"w":console.log("up"),event.repeat||(s.velocity.y-=10,setTimeout(undefined,1e3))}})),window.addEventListener("keyup",(function(e){switch(e.key){case"ArrowLeft":case"A":case"a":console.log("left"),c.left.pressed=!1;break;case"ArrowRight":case"D":case"d":console.log("right"),c.right.pressed=!1;break;case"ArrowUp":case"W":case"w":console.log("up"),s.velocity.y=0}}));var p=h(e.p+"/images/587fd84dafb5c9bfc1f58dee319a69f0.png"),f=function(){function e(t){var i=t.x,o=t.y,n=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:i,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,i;return t=e,(i=[{key:"draw",value:function(){k.drawImage(this.image,this.position.x,this.position.y)}}])&&l(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();const d=e.p+"/images/89b39d0c0c5ae380637b28d183d713df.png",u=e.p+"/images/e2ce6df778b71c57060ff47951071056.png";function y(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=h(d),w=h(u),v=function(){function e(t){var i=t.x,o=t.y,n=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:i,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,i;return t=e,(i=[{key:"draw",value:function(){k.drawImage(this.image,this.position.x,this.position.y)}}])&&y(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(){t.platforms=[new f({x:-1,y:510,image:p}),new f({x:p.width-1,y:510,image:p}),new f({x:2*p.width+100,y:510,image:p}),new f({x:3*p.width+300,y:510,image:p})],s=new a,m=0,i.genericObject=[new v({x:0,y:0,image:g}),new v({x:300,y:320,image:w}),new v({x:1020,y:320,image:w})]}var m=0;function x(){requestAnimationFrame(x),k.fillStyle="white",k.fillRect(0,0,j.width,j.height),i.genericObject.forEach((function(e){e.draw()})),t.platforms.forEach((function(e){e.draw()})),console.log(m),s.update(),c.right.pressed&&s.position.x<400?s.velocity.x=5:c.left.pressed&&s.position.x>100?s.velocity.x=-5:(s.velocity.x*=.9,c.right.pressed?(m+=5,t.platforms.forEach((function(e){e.position.x-=5})),i.genericObject.forEach((function(e){e.position.x-=5*.66}))):c.left.pressed&&m>0&&(m-=5,t.platforms.forEach((function(e){e.position.x+=5})),i.genericObject.forEach((function(e){e.position.x+=5*.66})))),t.platforms.forEach((function(e){s.position.y+s.height<=e.position.y&&s.position.y+s.height+s.velocity.y>=e.position.y&&s.position.x+s.width>=e.position.x&&s.position.x<=e.position.x+e.width&&(s.velocity.y=0)})),m>3e3&&console.log("its a win"),s.position.y>E&&(console.log("you lose"),b())}var j=document.querySelector("canvas"),k=j.getContext("2d");j.width=1024,j.height=576;var E=j.height;window.onload=function(){b(),x()}})();
//# sourceMappingURL=index.bundle.js.map