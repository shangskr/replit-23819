!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(l){u=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.44170494.js","./useUtil-legacy.28bc62a0.js","./File-legacy.57a5d60e.js","./api-legacy.0d93e767.js","./icon-legacy.b7e7870f.js","./index-legacy.3921dc35.js","./index-legacy.ecbb1a98.js","./Layout-legacy.915dc401.js","./EncodingSelect-legacy.763f6b33.js","./index-legacy.84e80ecd.js","./FolderTree-legacy.0618b8d4.js"],(function(e){"use strict";var t,r,i,o,c,u,l,a;return{setters:[function(n){t=n.f,r=n.d,i=n.j,o=n.B,c=n.$},function(n){u=n.e,l=n.c},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(u(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=l(t).text;t&&window.open(r(),"_blank")}t((function(){f()}));var d=r();return i(c,{get loading(){return e.loading},get children(){return i(a,{get children(){return i(o,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();