import{e,U as i,c as s,bY as a,S as l,c2 as d}from"./index.ea07b3d4.js";import{e as u,c as g}from"./useUtil.f5984ee2.js";import{E as h}from"./EncodingSelect.fd11e312.js";import"./api.57c73bba.js";function m(n){const[t,r]=s("utf-8"),{isString:o,text:c}=g(n.children);return e(d,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(a.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return c(t())}}),e(l,{when:!o,get children(){return e(h,{get encoding(){return t()},setEncoding:r})}})]}})}const x=()=>{const[n]=u();return e(i,{get loading(){return n.loading},get children(){return e(m,{get children(){var t;return(t=n())==null?void 0:t.content}})}})};export{x as default};