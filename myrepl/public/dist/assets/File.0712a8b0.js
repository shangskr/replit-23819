import{j as e,af as O,ai as _,a8 as T,o as i,X as l,bs as y,aP as I,aj as h,bN as P,b$ as x,d as b,w as d,c0 as $,ae as k,a6 as L,B as m,aa as S,x as A,ab as D,c1 as f,r as g,a1 as v,bY as j,C as V,c2 as R,J as o,K as a,bZ as C,c3 as M,e as z,aS as F,Q as B,R as W,ac as X}from"./index.a5e68bb9.js";import{a as w,b as H}from"./useUtil.891057ca.js";import{g as U,O as u}from"./icon.99c8694f.js";import{n as G}from"./index.83e59728.js";import{T as J}from"./Layout.39fba6ff.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return U(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>x(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>$(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(k,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=H();return e(K,{get children(){return[e(v,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Q=r=>{const{currentObjLink:n}=w(),s=d(()=>f(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:J,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},Y=r=>()=>e(Q,{scheme:r}),Z=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.e69c5966.js"),["assets/html.e69c5966.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/EncodingSelect.f4e42b39.js"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.c9289f11.js"),["assets/aliyun_video.c9289f11.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/icon.99c8694f.js","assets/index.33d7f5da.js","assets/index.83e59728.js","assets/Layout.39fba6ff.js","assets/EncodingSelect.f4e42b39.js","assets/index.5b6a3da7.js","assets/FolderTree.2d6a85c8.js","assets/video_box.338c8495.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.5e286275.js"),["assets/markdown.5e286275.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/EncodingSelect.f4e42b39.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.a4121f62.js"),["assets/markdown_with_word_wrap.a4121f62.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/EncodingSelect.f4e42b39.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.a1fc8ec8.js"),["assets/url.a1fc8ec8.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/icon.99c8694f.js","assets/index.33d7f5da.js","assets/index.83e59728.js","assets/Layout.39fba6ff.js","assets/EncodingSelect.f4e42b39.js","assets/index.5b6a3da7.js","assets/FolderTree.2d6a85c8.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.07ac17b8.js"),["assets/text-editor.07ac17b8.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/EncodingSelect.f4e42b39.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.a719f72f.js"),["assets/image.a719f72f.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/ImageWithError.40984f67.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.dba00a85.js"),["assets/video.dba00a85.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/icon.99c8694f.js","assets/index.33d7f5da.js","assets/index.83e59728.js","assets/Layout.39fba6ff.js","assets/EncodingSelect.f4e42b39.js","assets/index.5b6a3da7.js","assets/FolderTree.2d6a85c8.js","assets/video_box.338c8495.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.c04611a8.js"),["assets/audio.c04611a8.js","assets/audio.e5b5af14.css","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/icon.99c8694f.js","assets/index.33d7f5da.js","assets/index.83e59728.js","assets/Layout.39fba6ff.js","assets/EncodingSelect.f4e42b39.js","assets/index.5b6a3da7.js","assets/FolderTree.2d6a85c8.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.f18deecd.js"),["assets/ipa.f18deecd.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/icon.99c8694f.js","assets/index.33d7f5da.js","assets/index.83e59728.js","assets/Layout.39fba6ff.js","assets/EncodingSelect.f4e42b39.js","assets/index.5b6a3da7.js","assets/FolderTree.2d6a85c8.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.0016dff6.js"),["assets/plist.0016dff6.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css","assets/useUtil.891057ca.js","assets/api.52b8f055.js","assets/icon.99c8694f.js","assets/index.33d7f5da.js","assets/index.83e59728.js","assets/Layout.39fba6ff.js","assets/EncodingSelect.f4e42b39.js","assets/index.5b6a3da7.js","assets/FolderTree.2d6a85c8.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.698f86e0.js"),["assets/aliyun_office.698f86e0.js","assets/index.a5e68bb9.js","assets/index.d81a3e4b.css"]))}],q=r=>{const n=[];return Z.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:Y(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>N),void 0))}),n},ee=()=>{const r=d(()=>q({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(v,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{K as F,ie as a};