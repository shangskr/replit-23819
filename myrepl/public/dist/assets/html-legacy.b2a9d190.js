!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,u,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(c){l=!0,u=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw u}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}System.register(["./index-legacy.70e799ed.js","./useUtil-legacy.e94aa58c.js","./EncodingSelect-legacy.f4cfee66.js","./api-legacy.b2e5225e.js"],(function(r){"use strict";var t,n,u,i,o,l,c,a,f;return{setters:[function(e){t=e.j,n=e.$,u=e.e,i=e.bY,o=e.r,l=e.c2},function(e){c=e.e,a=e.c},function(e){f=e.E},function(){}],execute:function(){function d(r){var n=e(u("utf-8"),2),c=n[0],d=n[1],s=a(r.children),g=s.isString,y=s.text;return t(l,{w:"$full",h:"70vh",pos:"relative",get children(){return[t(i.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return y(c())}}),t(o,{when:!g,get children(){return t(f,{get encoding(){return c()},setEncoding:d})}})]}})}r("default",(function(){var r=e(c(),1)[0];return t(n,{get loading(){return r.loading},get children(){return t(d,{get children(){var e;return null===(e=r())||void 0===e?void 0:e.content}})}})}))}}}))}();