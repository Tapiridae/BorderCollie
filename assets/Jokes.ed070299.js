import{ag as l,d as m,ah as f,ad as h,af as g,w as p,g as a,o as k,a3 as v,_ as i,a0 as t,$ as _,a6 as j}from"./vendor.81587e52.js";import{u as w,e as C}from"./messages.b34a4d94.js";const R=l("main",{state:()=>({counter:0,name:"Weishaodaren",isAdmin:!0,jokes:null}),getters:{addCount:e=>e.counter*2},actions:{async fetchRandomJokes(){const{data:e}=await w(C()).get().json();this.jokes=e}}}),x={key:0},J=m({setup(e){const s=R(),{counter:n,isAdmin:c,name:r,addCount:y,jokes:o}=f(s);return s.$patch({counter:n.value+1,name:`${r.value} is cool`,isAdmin:!c.value}),s.fetchRandomJokes(),h(o,(d,u)=>{console.log(d,u)}),g(()=>{console.log(o.value),p(()=>{console.log(o.value)})}),(d,u)=>a(o)?(k(),v("div",x,[i("div",null,t(a(n)),1),i("div",null,t(a(r)),1),_(" "+t(a(c)),1)])):j("",!0)}});export{J as default};
