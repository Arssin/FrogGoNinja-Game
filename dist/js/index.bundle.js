(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})}};function t(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var o=i.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),e.d({},{J:()=>m,D:()=>x});var i=document.querySelector("canvas"),o=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;var n=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:30,y:0},this.velocity={x:0,y:0},this.width=30,this.height=30}var n,r;return n=e,(r=[{key:"draw",value:function(){o.fillStyle="red",o.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=i.height?this.velocity.y+=.2:this.velocity.y=0}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}()),r={right:{pressed:!1},left:{pressed:!1},up:{pressed:!1},jumping:{pressed:!0}};function s(e){var t=new Image;return t.src=e,t}function a(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}window.addEventListener("keydown",(function(e){switch(e.key){case"ArrowLeft":case"A":case"a":console.log("left"),r.left.pressed=!0;break;case"ArrowRight":case"D":case"d":console.log("right"),r.right.pressed=!0;break;case"ArrowUp":case"W":case"w":console.log("up"),event.repeat||(n.velocity.y-=20,setTimeout(undefined,1e3))}})),window.addEventListener("keyup",(function(e){switch(e.key){case"ArrowLeft":case"A":case"a":console.log("left"),r.left.pressed=!1;break;case"ArrowRight":case"D":case"d":console.log("right"),r.right.pressed=!1;break;case"ArrowUp":case"W":case"w":console.log("up"),n.velocity.y=0}}));var c=s(e.p+"/images/587fd84dafb5c9bfc1f58dee319a69f0.png"),h=function(){function e(t){var i=t.x,o=t.y,n=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:i,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,i;return t=e,(i=[{key:"draw",value:function(){x.drawImage(this.image,this.position.x,this.position.y)}}])&&a(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l=[new h({x:-1,y:510,image:c}),new h({x:c.width-1,y:510,image:c})];const p=e.p+"/images/89b39d0c0c5ae380637b28d183d713df.png",f=e.p+"/images/e2ce6df778b71c57060ff47951071056.png";function u(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=s(p),g=s(f),y=function(){function e(t){var i=t.x,o=t.y,n=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:i,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,i;return t=e,(i=[{key:"draw",value:function(){x.drawImage(this.image,this.position.x,this.position.y)}}])&&u(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),w=[new y({x:0,y:0,image:d}),new y({x:300,y:320,image:g}),new y({x:1e3,y:320,image:g})],v=0;function b(){requestAnimationFrame(b),x.fillStyle="white",x.fillRect(0,0,m.width,m.height),w.forEach((function(e){e.draw()})),l.forEach((function(e){e.draw()})),n.update(),r.right.pressed&&n.position.x<400?n.velocity.x=5:r.left.pressed&&n.position.x>100?n.velocity.x=-5:(n.velocity.x*=.9,r.right.pressed?(v+=5,l.forEach((function(e){e.position.x-=5})),w.forEach((function(e){e.position.x-=3}))):r.left.pressed&&(v-=5,l.forEach((function(e){e.position.x+=5})),w.forEach((function(e){e.position.x+=3})))),console.log(v),l.forEach((function(e){n.position.y+n.height<=e.position.y&&n.position.y+n.height+n.velocity.y>=e.position.y&&n.position.x+n.width>=e.position.x&&n.position.x<=e.position.x+e.width&&(n.velocity.y=0)})),v>3e3&&console.log("its a win")}var m=document.querySelector("canvas"),x=m.getContext("2d");m.width=1024,m.height=576,console.log(n),console.log(n.update.toString()),console.log(b.toString()),console.log(n.draw.toString()),window.onload=function(){n.update(),b()}})();
//# sourceMappingURL=index.bundle.js.map