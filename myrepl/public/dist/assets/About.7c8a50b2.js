import{u as a,Q as r,e as t,U as o}from"./index.f8055249.js";import{o as n}from"./index.5e0fbb3d.js";import{M as s}from"./EncodingSelect.c777dc4f.js";import"./useUtil.743dbe14.js";import"./api.e120e9c9.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),l=()=>{a(),n("manage.sidemenu.about");const[e]=r(i);return t(o,{get loading(){return e.loading},get children(){return t(s,{get children(){return e()}})}})};export{l as default};