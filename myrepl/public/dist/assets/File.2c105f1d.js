import{h as e,ag as O,aj as _,a9 as y,Q as i,V as l,bC as T,a_ as I,ak as h,bZ as P,cg as k,a as b,r as d,ch as x,W as v,af as $,a7 as L,B as m,ab as S,t as A,ac as D,c8 as f,S as g,at as j,a2 as w,cb as V,y as R,ci as C,E as o,G as a,cc as M,cj as z,d as F,b3 as B,K as W,N as H,ad as U}from"./index.c40f852e.js";import{g as X,O as c}from"./icon.081ca6c5.js";import{n as G}from"./index.6261c110.js";import{T as K}from"./Layout.bc7bffba.js";const N=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return y()},boxSize:"$20",get as(){return X(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(T,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>k(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>x(i.obj.name)),{currentObjLink:s}=v();return e(g,{get when(){return n().length},get children(){return e($,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=j();return e(N,{get children(){return[e(w,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},Q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Z=r=>{const{currentObjLink:n}=v(),s=d(()=>f(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(C,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return R()},p:"$1",boxSize:"$7"})]}})},q=r=>()=>e(Z,{scheme:r}),J=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.4ca7ce1a.js"),["assets/html.4ca7ce1a.js","assets/index.c40f852e.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:c.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.9a2bbd33.js"),["assets/aliyun_video.9a2bbd33.js","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/icon.081ca6c5.js","assets/index.c693502e.js","assets/index.6261c110.js","assets/Layout.bc7bffba.js","assets/index.774f0314.js","assets/FolderTree.18fc8ad5.js","assets/video_box.3e31ada2.js","assets/hls.1b34a773.js"]))},{name:"Markdown",type:c.TEXT,component:o(()=>a(()=>import("./markdown.825d8e64.js"),["assets/markdown.825d8e64.js","assets/index.c40f852e.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:c.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.9ea2ba73.js"),["assets/markdown_with_word_wrap.9ea2ba73.js","assets/index.c40f852e.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.f316f05d.js"),["assets/url.f316f05d.js","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/icon.081ca6c5.js","assets/index.c693502e.js","assets/index.6261c110.js","assets/Layout.bc7bffba.js","assets/index.774f0314.js","assets/FolderTree.18fc8ad5.js"]))},{name:"Text Editor",type:c.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.ed7427bc.js"),["assets/text-editor.ed7427bc.js","assets/index.c40f852e.js","assets/index.15d8d646.css"]))},{name:"Image",type:c.IMAGE,component:o(()=>a(()=>import("./image.e101e606.js"),["assets/image.e101e606.js","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/ImageWithError.b01110eb.js"]))},{name:"Video",type:c.VIDEO,component:o(()=>a(()=>import("./video.83a44ce4.js"),["assets/video.83a44ce4.js","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/icon.081ca6c5.js","assets/index.c693502e.js","assets/index.6261c110.js","assets/Layout.bc7bffba.js","assets/index.774f0314.js","assets/FolderTree.18fc8ad5.js","assets/video_box.3e31ada2.js","assets/hls.1b34a773.js"]))},{name:"Audio",type:c.AUDIO,component:o(()=>a(()=>import("./audio.152a5d76.js"),["assets/audio.152a5d76.js","assets/audio.e5b5af14.css","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/icon.081ca6c5.js","assets/index.c693502e.js","assets/index.6261c110.js","assets/Layout.bc7bffba.js","assets/index.774f0314.js","assets/FolderTree.18fc8ad5.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.e54c13b1.js"),["assets/ipa.e54c13b1.js","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/icon.081ca6c5.js","assets/index.c693502e.js","assets/index.6261c110.js","assets/Layout.bc7bffba.js","assets/index.774f0314.js","assets/FolderTree.18fc8ad5.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.04e54cc5.js"),["assets/plist.04e54cc5.js","assets/index.c40f852e.js","assets/index.15d8d646.css","assets/icon.081ca6c5.js","assets/index.c693502e.js","assets/index.6261c110.js","assets/Layout.bc7bffba.js","assets/index.774f0314.js","assets/FolderTree.18fc8ad5.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.e9f52b77.js"),["assets/aliyun_office.e9f52b77.js","assets/index.c40f852e.js","assets/index.15d8d646.css"]))}],Y=r=>{const n=[];return J.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(M(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),z(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>Q),void 0))}),n},ee=()=>{const r=d(()=>Y({...i.obj,provider:i.provider})),[n,s]=F(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(w,{w:"$full",spacing:"$2",get children(){return[e(B,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(W,{get fallback(){return e(H,{})},get children(){return e(U,{get component(){return n().component}})}})]}})}})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{N as F,ae as a};