import{u as i,d as T,a as y,r as E,w as P,p as f,b as m,o as b,c as L,e as h,f as d,g as _,z as O,h as C,N,i as g,j as S,k as w,l as M,n as R}from"./vendor.4c343100.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};j();const k=Symbol(),A=Symbol(),D=i("theme",!1),I=i("isOnline",!1),V=i("userName","\u7528\u6237\u540D"),H=i("token",null);var l={ToggleThemeMode:k,ThemeMode:A,globalThemeMode:D,globalOnlineStatus:I,globalUserName:V,globalToken:H};const F=T({setup(p){const s=y(),n=E(null);P(()=>{l.globalOnlineStatus.value||s.push("/login"),l.globalThemeMode.value?n.value=g:n.value=null});const r=e=>{l.globalThemeMode.value=e,e?n.value=g:n.value=null};return f(l.ToggleThemeMode,r),f(l.ThemeMode,l.globalThemeMode),(e,o)=>{const t=m("router-view"),c=m("n-message-provider"),u=m("n-global-style");return b(),L(_(N),{locale:_(O),"date-locale":_(C),theme:n.value},{default:h(()=>[d(c,null,{default:h(()=>[d(t)]),_:1}),d(u)]),_:1},8,["locale","date-locale","theme"])}}}),$="modulepreload",v={},x="/BorderCollie/",a=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${x}${r}`,r in v)return;v[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":$,e||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),e)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",u)})})).then(()=>s())},B=[{path:"/",redirect:"/home",component:a(()=>import("./Home.9316794f.js"),["assets/Home.9316794f.js","assets/Home.7a9af003.css","assets/vendor.4c343100.js","assets/plugin-vue_export-helper.5a098b48.js","assets/index.c9a0e872.js","assets/utils.62048447.js"])},{path:"/login",name:"Login",component:()=>a(()=>import("./Login.46dfe83d.js"),["assets/Login.46dfe83d.js","assets/Login.fab01834.css","assets/vendor.4c343100.js","assets/plugin-vue_export-helper.5a098b48.js"])},{path:"/home",name:"Home",children:[{path:"calendar",name:"Calendar",component:()=>a(()=>import("./Calendar.4d021630.js"),["assets/Calendar.4d021630.js","assets/vendor.4c343100.js"])},{path:"news",name:"News",component:()=>a(()=>import("./News.2c656c49.js"),["assets/News.2c656c49.js","assets/News.51f863a5.css","assets/utils.62048447.js","assets/vendor.4c343100.js","assets/index.c9a0e872.js","assets/plugin-vue_export-helper.5a098b48.js"])},{path:"customerService",name:"CustomerService",component:()=>a(()=>import("./CustomerService.c9e658a8.js"),["assets/CustomerService.c9e658a8.js","assets/vendor.4c343100.js","assets/index.c9a0e872.js"])}],component:()=>a(()=>import("./Home.9316794f.js"),["assets/Home.9316794f.js","assets/Home.7a9af003.css","assets/vendor.4c343100.js","assets/plugin-vue_export-helper.5a098b48.js","assets/index.c9a0e872.js","assets/utils.62048447.js"])},{path:"/:pathMath(.*)",name:"PageNotFound",component:()=>a(()=>import("./PageNotFound.f6d17355.js"),["assets/PageNotFound.f6d17355.js","assets/PageNotFound.ded944ce.css","assets/vendor.4c343100.js","assets/plugin-vue_export-helper.5a098b48.js"])}],q=S({history:w(),routes:B});M(F).use(q).use(R).mount("#app");export{l as P};
