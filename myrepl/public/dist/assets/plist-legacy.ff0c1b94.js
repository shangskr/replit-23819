!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,u=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(a){u=!0,c=a}finally{try{o||null==t.return||t.return()}finally{if(u)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.55e1ffdb.js","./File-legacy.2c376d56.js","./useUtil-legacy.bd407c10.js","./api-legacy.bd8b88e9.js","./icon-legacy.f47baf59.js","./index-legacy.4d907fc6.js","./index-legacy.4576e4eb.js","./Layout-legacy.88b8c733.js","./EncodingSelect-legacy.15cea02c.js","./index-legacy.e8710c7e.js","./FolderTree-legacy.9dcb472b.js"],(function(e){"use strict";var t,r,c,i,o,u;return{setters:[function(n){t=n.u,r=n.c,c=n.e,i=n.B,o=n.N},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),a=n(r(!1),2),l=a[0],f=a[1];return c(u,{get children(){return c(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();