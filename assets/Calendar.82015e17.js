import{d as p,Y as i,r as _,ac as f,b as v,o as m,c as D,e as b,ad as x,_ as $,$ as n}from"./vendor.57dbeffe.js";const C=p({setup(g){const d=i(),o=_(f(Date.now(),1)),l=(s,{year:a,month:t,date:e})=>d.success(`${a}-${t}-${e}`),r=s=>x(s);return(s,a)=>{const t=v("n-calendar");return m(),D(t,{"onUpdate:value":[l,a[0]||(a[0]=e=>o.value=e)],value:o.value,"is-date-disabled":r},{default:b(({year:e,month:c,date:u})=>[$(n(e)+"-"+n(c)+"-"+n(u),1)]),_:1},8,["value"])}}});export{C as default};