!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.812b4687.js","./File-legacy.3c96a2dc.js","./icon-legacy.e94c25fb.js","./index-legacy.ca4a2236.js","./index-legacy.52dda989.js","./Layout-legacy.f7c9a8e7.js","./index-legacy.3c52ce64.js","./FolderTree-legacy.3dbe60f2.js"],(function(e){"use strict";var t,r,o,i,c,u,a,l;return{setters:[function(n){t=n.cQ,r=n.e,o=n.a,i=n.h,c=n.B,u=n.Z,a=n.cR},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=a(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var d=o();return i(u,{get loading(){return e.loading},get children(){return i(l,{get children(){return i(c,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();