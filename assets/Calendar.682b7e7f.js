import{u as F,a as S}from"./messages.ab33a87b.js";import{_ as T}from"./plugin-vue_export-helper.5a098b48.js";import{d as Y,Y as h,r as M,ab as N,a1 as V,ac as Z,b as m,o as k,c as I,e as p,ad as U,f as r,Z as _,$ as o,_ as A}from"./vendor.b223e561.js";const H={class:"title"},O={class:"suit-text"},q={class:"avoid-text"},z=Y({setup(G){const y=h(),f=M(N(Date.now(),1)),v=V({data:[]}),g=new Date(f.value),$=String(g.getFullYear())+String(g.getMonth()+1),{data:b}=F(S($)).get().json();Z(b,()=>{const{data:u}=b.value;v.data=u});const s=(u,d,n)=>{var i,a;return(a=v.data)==null?void 0:a[(i=v.data)==null?void 0:i.findIndex(({date:e})=>e===`${u}-${d}-${String(n).length>1?n:"0"+String(n)}`)]},B=(u,{year:d,month:n,date:i})=>{var e;const a=(e=s==null?void 0:s(d,n,i))==null?void 0:e.dayOfYear;a&&y.info(`\u8FD9\u662F\u4ECA\u5E74\u7684\u7B2C${a}\u5929`)},E=u=>U(u);return(u,d)=>{const n=m("n-space"),i=m("n-calendar");return k(),I(i,{"onUpdate:value":[B,d[0]||(d[0]=a=>f.value=a)],value:f.value,"is-date-disabled":E},{default:p(({year:a,month:e,date:t})=>[r(n,{vertical:""},{default:p(()=>{var x,C;return[r(n,{justify:"space-between"},{default:p(()=>{var l,c;return[_("span",H,o((l=s(a,e,t))==null?void 0:l.lunarCalendar),1),_("span",null,o((c=s(a,e,t))==null?void 0:c.typeDes),1)]}),_:2},1024),r(n,{justify:"space-between"},{default:p(()=>{var l,c;return[_("span",null,o((l=s(a,e,t))==null?void 0:l.date),1),_("span",null,o((c=s(a,e,t))==null?void 0:c.solarTerms),1)]}),_:2},1024),_("span",O,o((x=s(a,e,t))==null?void 0:x.suit),1),_("span",q,o((C=s(a,e,t))==null?void 0:C.avoid),1),r(n,{justify:"space-between"},{default:p(()=>{var l,c,j,w,D;return[A(o(((l=s(a,e,t))==null?void 0:l.yearTips)?((c=s(a,e,t))==null?void 0:c.yearTips)+"\u5E74":null)+" "+o(((j=s(a,e,t))==null?void 0:j.chineseZodiac)?"\u5C5E"+((w=s(a,e,t))==null?void 0:w.chineseZodiac):null)+" "+o((D=s(a,e,t))==null?void 0:D.constellation),1)]}),_:2},1024)]}),_:2},1024)]),_:1},8,["value"])}}});var P=T(z,[["__scopeId","data-v-0f76e24b"]]);export{P as default};
