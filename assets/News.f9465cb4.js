import{u as v,b as M,c as A,d as F}from"./messages.035ab84f.js";import{r as H}from"./utils.c6445c74.js";import{a4 as S,r as U,k as u,a_ as $,as as G,aG as c,ay as r,W as w,a2 as n,b1 as t,X as d,I as g,aE as h,U as f,V as P,a1 as N,D as p}from"./index.41869e62.js";import{_ as W}from"./_plugin-vue_export-helper.cdc0426e.js";const X={class:"masonry"},q=["src"],z={class:"news-bottom"},J=["onClick"],K=["innerHTML"],O=S({__name:"News",setup(Q){const L=v(M()).get().json(),s=U({newsTypes:[],newsList:[],details:{}}),m=u(""),C=u(""),T=u(1),x=u(""),y=u(!1);$(()=>{const{data:a}=L;if(!a.value)return;const{data:o}=a.value;s.newsTypes=o});const I=async a=>{C.value=a;const{execute:o,data:i}=v(A(a,T.value),{immediate:!1}).get().json();await o();const{data:l}=i.value;s.newsList=l},B=async a=>{x.value=a;const{execute:o,data:i}=v(F(a),{immediate:!1}).get().json();await o();const{data:l}=i.value;s.details=l,y.value=!0};return G(()=>{m.value=H()}),(a,o)=>{const i=c("n-button"),l=c("n-space"),D=c("n-card"),k=c("n-image"),b=c("n-tag"),E=c("n-image-group"),V=c("n-drawer-content"),j=c("n-drawer");return r(),w("div",null,[n(l,null,{default:t(()=>[(r(!0),w(g,null,h(s.newsTypes,e=>(r(),f(i,{key:e.typeId,type:m.value,onClick:_=>I(e.typeId)},{default:t(()=>[N(p(e.typeName),1)]),_:2},1032,["type","onClick"]))),128))]),_:1}),d("div",X,[(r(!0),w(g,null,h(s.newsList,e=>(r(),f(D,{key:e.newsId,title:e.title,embedded:"",class:"item"},{cover:t(()=>[d("img",{src:Array.isArray(e.imgList)&&e.imgList.length>0?e.imgList[0]:""},null,8,q)]),footer:t(()=>[d("div",z,[d("span",null,p(e.source),1),d("span",null,p(e.postTime),1)])]),action:t(()=>[d("div",{class:"preview",onClick:_=>B(e.newsId)},"\u67E5\u770B\u8BE6\u60C5",8,J)]),_:2},1032,["title"]))),128))]),s.details?(r(),f(j,{key:0,show:y.value,"onUpdate:show":o[0]||(o[0]=e=>y.value=e),width:502,placement:"right","mask-closable":!1},{default:t(()=>[n(V,{title:s.details.title,style:{overflow:"hidden"},closable:"","native-scrollbar":!1},{default:t(()=>{var e;return[n(l,null,{default:t(()=>[n(k,{width:"500",src:s.details.cover},null,8,["src"])]),_:1}),n(l,{justify:"space-between"},{default:t(()=>[n(b,{type:m.value},{default:t(()=>[N(p(s.details.source),1)]),_:1},8,["type"]),n(b,{type:m.value},{default:t(()=>[N(p(s.details.ptime),1)]),_:1},8,["type"])]),_:1}),d("div",{innerHTML:(e=s.details)==null?void 0:e.content},null,8,K),n(E,null,{default:t(()=>[n(l,null,{default:t(()=>[(r(!0),w(g,null,h(s.details.images,_=>(r(),f(k,{width:"100",src:_==null?void 0:_.imgSrc},null,8,["src"]))),256))]),_:1})]),_:1})]}),_:1},8,["title"])]),_:1},8,["show"])):P("",!0)])}}});const te=W(O,[["__scopeId","data-v-8c6f0172"]]);export{te as default};