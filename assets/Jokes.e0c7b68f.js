import{bC as l,a4 as m,bD as f,aY as _,as as h,a_ as k,x as a,ay as p,W as v,X as i,D as t,a1 as g,V as C}from"./index.41869e62.js";import{u as j,e as x}from"./messages.035ab84f.js";const y=l("main",{state:()=>({counter:0,name:"Weishaodaren",isAdmin:!0,jokes:null}),getters:{addCount:e=>e.counter*2},actions:{async fetchRandomJokes(){const{data:e}=await j(x()).get().json();this.jokes=e}}}),J={key:0},A=m({__name:"Jokes",setup(e){const s=y(),{counter:n,isAdmin:c,name:r,addCount:R,jokes:o}=f(s);return s.$patch({counter:n.value+1,name:`${r.value} is cool`,isAdmin:!c.value}),s.fetchRandomJokes(),_(o,(u,d)=>{console.log(u,d)}),h(()=>{console.log(o.value),k(()=>{console.log(o.value)})}),(u,d)=>a(o)?(p(),v("div",J,[i("div",null,t(a(n)),1),i("div",null,t(a(r)),1),g(" "+t(a(c)),1)])):C("",!0)}});export{A as default};