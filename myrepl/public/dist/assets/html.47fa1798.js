import{j as e,$ as i,e as s,bY as a,r as l,c2 as d}from"./index.7da23b7b.js";import{e as u,c as g}from"./useUtil.5fb3437a.js";import{E as h}from"./EncodingSelect.d96821d4.js";import"./api.6d4ccc5d.js";function m(n){const[t,r]=s("utf-8"),{isString:o,text:c}=g(n.children);return e(d,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(a.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return c(t())}}),e(l,{when:!o,get children(){return e(h,{get encoding(){return t()},setEncoding:r})}})]}})}const x=()=>{const[n]=u();return e(i,{get loading(){return n.loading},get children(){return e(m,{get children(){var t;return(t=n())==null?void 0:t.content}})}})};export{x as default};