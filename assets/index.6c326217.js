import{u,d as b,a as y,r as T,w as E,p as _,b as d,o as L,c as P,e as h,f as m,g as f,z as C,h as O,N,i as g,j as S,k as M,l as R,n as j}from"./vendor.8a092d10.js";const A=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};A();const k=Symbol(),w=Symbol(),D=u("theme",!1),I=u("isOnline",!1),V=u("userName","\u8D75\u5609\u4F1F");var a={ToggleThemeMode:k,ThemeMode:w,globalThemeMode:D,globalOnlineStatus:I,globalUserName:V};const F=b({setup(p){const s=y(),n=T(null);E(()=>{a.globalOnlineStatus.value||s.push("/login"),a.globalThemeMode.value?n.value=g:n.value=null});const r=e=>{a.globalThemeMode.value=e,e?n.value=g:n.value=null};return _(a.ToggleThemeMode,r),_(a.ThemeMode,a.globalThemeMode),(e,o)=>{const t=d("router-view"),i=d("n-message-provider"),c=d("n-global-style");return L(),P(f(N),{locale:f(C),"date-locale":f(O),theme:n.value},{default:h(()=>[m(i,null,{default:h(()=>[m(t)]),_:1}),m(c)]),_:1},8,["locale","date-locale","theme"])}}}),H="modulepreload",v={},$="/BorderCollie/",l=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${$}${r}`,r in v)return;v[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":H,e||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),e)return new Promise((i,c)=>{t.addEventListener("load",i),t.addEventListener("error",c)})})).then(()=>s())},x=[{path:"/",component:l(()=>import("./Login.a35d84fc.js"),["assets/Login.a35d84fc.js","assets/Login.18069ffa.css","assets/vendor.8a092d10.js","assets/plugin-vue_export-helper.5a098b48.js"])},{path:"/login",name:"Login",component:()=>l(()=>import("./Login.a35d84fc.js"),["assets/Login.a35d84fc.js","assets/Login.18069ffa.css","assets/vendor.8a092d10.js","assets/plugin-vue_export-helper.5a098b48.js"])},{path:"/home",name:"Home",children:[{path:"calendar",name:"Calendar",component:()=>l(()=>import("./Calendar.b93627c1.js"),["assets/Calendar.b93627c1.js","assets/vendor.8a092d10.js"])},{path:"customerService",name:"CustomerService",component:()=>l(()=>import("./CustomerService.aa897a8b.js"),["assets/CustomerService.aa897a8b.js","assets/CustomerService.d8a46568.css","assets/vendor.8a092d10.js","assets/plugin-vue_export-helper.5a098b48.js"])}],component:()=>l(()=>import("./Home.3035283e.js"),["assets/Home.3035283e.js","assets/Home.88418791.css","assets/vendor.8a092d10.js","assets/plugin-vue_export-helper.5a098b48.js"])},{path:"/:pathMath(.*)",name:"PageNotFound",component:()=>l(()=>import("./PageNotFound.cc9d1ebd.js"),["assets/PageNotFound.cc9d1ebd.js","assets/PageNotFound.ded944ce.css","assets/vendor.8a092d10.js","assets/plugin-vue_export-helper.5a098b48.js"])}],B=S({history:M(),routes:x});R(F).use(B).use(j).mount("#app");export{a as P};
