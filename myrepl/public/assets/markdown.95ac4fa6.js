import{j as n,$ as d,o,bY as i}from"./index.aa5c3cc6.js";import{d as s}from"./useUtil.4e55fdda.js";import{M as m}from"./Markdown.ed3209a8.js";import"./api.25b7d67a.js";const b=()=>{const[t]=s(),a=e=>o.obj.name.endsWith(".md")?e:"```"+i(o.obj.name)+`
`+e+"\n```";return n(d,{get loading(){return t.loading},get children(){return n(m,{get children(){var e,r;return a((r=(e=t())==null?void 0:e.content)!=null?r:"")}})}})};export{b as default};