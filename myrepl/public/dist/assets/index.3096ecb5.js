import{bM as ee,ar as z,bN as B,bO as x,a6 as N,H as T,h as e,Y as G,au as L,D as M,b as A,bI as h,bP as b,o as te,aj as D,bQ as v,bE as ne,bR as oe,bS as re,bT as se,a as ae,r as ie,d as m,bU as le,aP as R,V as ce,bD as P,ag as ue,bC as ge,S as _,I as E,bV as de,a_ as pe,a2 as he,B as O,bb as fe,bc as me,bW as be,am as we,bw as U,n as C,bA as $e}from"./index.c40f852e.js";import{p as _e,c as Ce}from"./index.c693502e.js";import{s as ve,g as xe,a as Se}from"./webauthn-json.browser-ponyfill.1c672167.js";const ye="https://github.com/alist-org/alist";function ke(s){return ee(`${s}-${ye}`)}const Ie=N('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Ge=s=>{const u=z({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Ie.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,a=r.firstChild,i=a.nextSibling;return B(t=>{const l=u.startColor,d=u.endColor;return l!==t._v$&&x(a,"stop-color",t._v$=l),d!==t._v$2&&x(i,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Re=N('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),Pe=s=>{const u=z({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Re.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,a=r.firstChild,i=a.nextSibling;return B(t=>{const l=u.startColor,d=u.endColor;return l!==t._v$&&x(a,"stop-color",t._v$=l),d!==t._v$2&&x(i,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Ee=()=>{const s=T("#a9c6ff","#062b74");return e(G,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(G,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(Pe,{})}}),e(G,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(Ge,{})}})]}})},Oe=()=>{const s=L("sso_login_enabled"),u=M("sso_login_platform"),n=L("sso_compatibility_mode"),{searchParams:c,to:g}=A(),r=c.token;r!=null&&r!=""&&(h(r),g(decodeURIComponent(c.redirect||b||"/"),!0));function a(i){const t=i.data;t.token&&(h(t.token),g(decodeURIComponent(c.redirect||b||"/"),!0))}if(window.addEventListener("message",a),te(()=>{window.removeEventListener("message",a)}),s){const i=()=>{const l=v.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=l;return}window.open(l,"authPopup","width=500,height=600")};let t;switch(u){case"Github":t=se;break;case"Microsoft":t=_e;break;case"Google":t=re;break;case"Dingtalk":t=oe;break;default:t=ne}return e(D,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:i})}},Ue=()=>{const s=M("logo").split(`
`),u=T(s[0],s.pop()),n=ae(),c=ie(()=>`${n("login.login_to")} ${M("site_title")}`);Ce(c);const g=T("white","$neutral1"),[r,a]=m(localStorage.getItem("username")||""),[i,t]=m(localStorage.getItem("password")||""),[l,d]=m(""),[w,F]=m(!1),[$,j]=le("remember-pwd","false"),[V,H]=R(async()=>v.post("/auth/login/hash",{username:r(),password:ke(i()),otp_code:l()})),[,W]=R((o,p,f)=>v.post("/authn/webauthn_finish_login?username="+f,JSON.stringify(p),{headers:{session:o}})),[,J]=R(o=>v.get("/authn/webauthn_begin_login?username="+o)),{searchParams:S,to:y}=A(),K=L("webauthn_login_enabled"),Z=async()=>{F(!w())},k=async()=>{if(w()){if(!ve()){C.error(n("users.webauthn_not_supported"));return}h(),$()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const o=await J(r());$e(o,async p=>{const f=xe(p.options),Q=await Se(f),Y=await W(p.session,Q,r());U(Y,X=>{C.success(n("login.success")),h(X.token),y(decodeURIComponent(S.redirect||b||"/"),!0)})})}else{$()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",i())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await H();U(o,p=>{C.success(n("login.success")),h(p.token),y(decodeURIComponent(S.redirect||b||"/"),!0)},(p,f)=>{!I()&&f===402?q(!0):C.error(p)})}},[I,q]=m(!1);return e(we,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(ce,{get bgColor(){return g()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(P,{alignItems:"center",justifyContent:"space-around",get children(){return[e(ue,{mr:"$2",boxSize:"$12",get src(){return u()}}),e(ge,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(_,{get when(){return!I()},get fallback(){return e(E,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return l()},onInput:o=>d(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&k()}})},get children(){return[e(E,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:o=>a(o.currentTarget.value)}),e(_,{get when(){return!w()},get children(){return e(E,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return i()},onInput:o=>t(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&k()}})}}),e(P,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(de,{get checked(){return $()==="true"},onChange:()=>j($()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(pe,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]}})]}}),e(he,{w:"$full",spacing:"$2",get children(){return[e(_,{get when(){return!w()},get children(){return e(O,{colorScheme:"primary",w:"$full",onClick:()=>{I()?d(""):(a(""),t(""))},get children(){return n("login.clear")}})}}),e(O,{w:"$full",get loading(){return V()},onClick:k,get children(){return n("login.login")}})]}}),e(O,{w:"$full",colorScheme:"accent",onClick:()=>{h(),y(decodeURIComponent(S.redirect||b||"/"),!0)},get children(){return n("login.use_guest")}}),e(P,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(fe,{}),e(me,{}),e(Oe,{}),e(_,{when:K,get children(){return e(D,{cursor:"pointer",boxSize:"$8",as:be,p:"$0_5",onclick:Z})}})]}})]}}),e(Ee,{})]}})};export{Ue as default};