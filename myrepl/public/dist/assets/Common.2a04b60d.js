import{d as v,u as $,a as l,bo as o,bL as C,c5 as w,e as I,j as t,c6 as L,aq as R,bq as r,n as u,a1 as T,B as p,X as _}from"./index.fc57db4e.js";import{o as q}from"./index.288eef4d.js";import{I as x}from"./SettingItem.f49296ab.js";import{R as B}from"./ResponsiveGrid.bd7eadbf.js";import"./index.6824e723.js";import"./index.7f596840.js";import"./item_type.be442da4.js";const X=d=>{const s=v(),{pathname:m}=$();q(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>o.get(`/admin/setting/list?group=${d.group}`)),[c,i]=C([]),a=async()=>{const e=await f();r(e,i)};a();const[S,k]=l(()=>o.post("/admin/setting/save",w(c))),[y,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(B,{get children(){return t(L,{each:c,children:(e,j)=>t(x,R(e,{onChange:n=>{i(b=>e().key===b.key,"value",n)},onDelete:async()=>{g(!0);const n=await o.post(`/admin/setting/delete?key=${e().key}`);g(!1),r(n,()=>{u.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(p,{colorScheme:"accent",onClick:a,get loading(){return h()||y()},get children(){return s("global.refresh")}}),t(p,{get loading(){return S()},onClick:async()=>{const e=await k();r(e,()=>u.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{X as default};