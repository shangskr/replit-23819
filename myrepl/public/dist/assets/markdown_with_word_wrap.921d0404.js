import{j as o,$ as s,o as n,bY as d}from"./index.37222350.js";import{d as i}from"./useUtil.925cc291.js";import{M as m}from"./Markdown.670bd1c8.js";import"./api.55422af1.js";const l=()=>{const[r]=i(),a=e=>n.obj.name.endsWith(".md")?e:"```"+d(n.obj.name)+`
`+e+"\n```";return o(s,{get loading(){return r.loading},get children(){return o(m,{class:"word-wrap",get children(){var e,t;return a((t=(e=r())==null?void 0:e.content)!=null?t:"")}})}})};export{l as default};