import{j as e,af as O,ai as _,a8 as T,o as i,X as l,bs as y,aP as I,aj as h,bN as P,b$ as x,d as b,w as d,c0 as $,ae as k,a6 as L,B as m,aa as S,x as A,ab as D,c1 as f,r as g,a1 as v,bY as j,C as V,c2 as R,J as o,K as a,bZ as C,c3 as M,e as z,aS as F,Q as B,R as W,ac as X}from"./index.f521dfe5.js";import{a as w,b as H}from"./useUtil.3268a891.js";import{g as U,O as u}from"./icon.345a2ba8.js";import{n as G}from"./index.b7c26dc1.js";import{T as J}from"./Layout.33c575d0.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return U(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>x(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>$(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(k,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=H();return e(K,{get children(){return[e(v,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Q=r=>{const{currentObjLink:n}=w(),s=d(()=>f(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:J,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},Y=r=>()=>e(Q,{scheme:r}),Z=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.d6abcde7.js"),["assets/html.d6abcde7.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/EncodingSelect.3ab42533.js"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.d7937bb8.js"),["assets/aliyun_video.d7937bb8.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/icon.345a2ba8.js","assets/index.9b9430d9.js","assets/index.b7c26dc1.js","assets/Layout.33c575d0.js","assets/EncodingSelect.3ab42533.js","assets/index.6d2d5242.js","assets/FolderTree.7fef13b3.js","assets/video_box.91ba5e07.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.c9e8469f.js"),["assets/markdown.c9e8469f.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/EncodingSelect.3ab42533.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.1a9f1195.js"),["assets/markdown_with_word_wrap.1a9f1195.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/EncodingSelect.3ab42533.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.c990e83d.js"),["assets/url.c990e83d.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/icon.345a2ba8.js","assets/index.9b9430d9.js","assets/index.b7c26dc1.js","assets/Layout.33c575d0.js","assets/EncodingSelect.3ab42533.js","assets/index.6d2d5242.js","assets/FolderTree.7fef13b3.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.4d16949b.js"),["assets/text-editor.4d16949b.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/EncodingSelect.3ab42533.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.0c73e925.js"),["assets/image.0c73e925.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/ImageWithError.f15728d0.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.73564caf.js"),["assets/video.73564caf.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/icon.345a2ba8.js","assets/index.9b9430d9.js","assets/index.b7c26dc1.js","assets/Layout.33c575d0.js","assets/EncodingSelect.3ab42533.js","assets/index.6d2d5242.js","assets/FolderTree.7fef13b3.js","assets/video_box.91ba5e07.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.9d1a4404.js"),["assets/audio.9d1a4404.js","assets/audio.e5b5af14.css","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/icon.345a2ba8.js","assets/index.9b9430d9.js","assets/index.b7c26dc1.js","assets/Layout.33c575d0.js","assets/EncodingSelect.3ab42533.js","assets/index.6d2d5242.js","assets/FolderTree.7fef13b3.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.2536fdad.js"),["assets/ipa.2536fdad.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/icon.345a2ba8.js","assets/index.9b9430d9.js","assets/index.b7c26dc1.js","assets/Layout.33c575d0.js","assets/EncodingSelect.3ab42533.js","assets/index.6d2d5242.js","assets/FolderTree.7fef13b3.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.e03bccd4.js"),["assets/plist.e03bccd4.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css","assets/useUtil.3268a891.js","assets/api.eba774b7.js","assets/icon.345a2ba8.js","assets/index.9b9430d9.js","assets/index.b7c26dc1.js","assets/Layout.33c575d0.js","assets/EncodingSelect.3ab42533.js","assets/index.6d2d5242.js","assets/FolderTree.7fef13b3.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.8e387f3b.js"),["assets/aliyun_office.8e387f3b.js","assets/index.f521dfe5.js","assets/index.d81a3e4b.css"]))}],q=r=>{const n=[];return Z.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:Y(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>N),void 0))}),n},ee=()=>{const r=d(()=>q({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(v,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{K as F,ie as a};