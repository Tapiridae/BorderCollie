import{d as p,m as i,r as _,C as m,b as v,o as f,c as D,e as b,D as x,A as C,t as n}from"./vendor.9a3199be.js";const $=p({setup(g){const d=i(),o=_(m(Date.now(),1)),l=(s,{year:a,month:t,date:e})=>d.success(`${a}-${t}-${e}`),r=s=>x(s);return(s,a)=>{const t=v("n-calendar");return f(),D(t,{"onUpdate:value":[l,a[0]||(a[0]=e=>o.value=e)],value:o.value,"is-date-disabled":r},{default:b(({year:e,month:c,date:u})=>[C(n(e)+"-"+n(c)+"-"+n(u),1)]),_:1},8,["value"])}}});export{$ as default};
