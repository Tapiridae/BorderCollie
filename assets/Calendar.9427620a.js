import{d as p,K as i,r as _,Q as v,b as m,o as f,c as x,e as D,S as b,x as g,I as n}from"./vendor.8524c068.js";const $=p({setup(y){const d=i(),o=_(v(Date.now(),1)),l=(s,{year:a,month:t,date:e})=>d.success(`${a}-${t}-${e}`),r=s=>b(s);return(s,a)=>{const t=m("n-calendar");return f(),x(t,{"onUpdate:value":[l,a[0]||(a[0]=e=>o.value=e)],value:o.value,"is-date-disabled":r},{default:D(({year:e,month:c,date:u})=>[g(n(e)+"-"+n(c)+"-"+n(u),1)]),_:1},8,["value"])}}});export{$ as default};
