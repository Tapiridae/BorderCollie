import{d as U,a2 as A,r as p,a1 as F,ah as v,b as a,o as d,a3 as b,f as o,e as l,a4 as h,a5 as J,c as V,g as _,$ as k,ai as x,aj as g,ak as W}from"./vendor.00604513.js";import{W as C}from"./index.c9a0e872.js";import{P as z}from"./index.1e25cc27.js";const P=k("\u53D1\u9001"),R=k("\u79BB\u5F00"),$=U({setup(E){const{data:S,send:f,close:T}=A(C.CHAT_ROOM+C.UUID),M=z.globalToken.value,B={action:"auth",token:M};f(JSON.stringify(B));const s=p(""),c=p(!1),u=p(!1),r=F([]),D=x(()=>{if(!s.value)return;const e={action:"sendMessage",text:s.value};f(JSON.stringify(e)),c.value=!0,setTimeout(()=>{c.value=!1,s.value=""},200)},300),w=x(()=>{T(),u.value=!0},300);return v(S,e=>{if(!e)return;const{text:t,createTimestamp:i}=JSON.parse(e);if(!i||!t)return;const m={type:"success",title:"Ta",content:t,time:g(W(i),"yyyy-MM-dd hh:mm:ss")};r.push(m)}),v(c,e=>{if(!e)return;const t={type:"info",title:"\u6211",content:s.value,time:g(Date.now(),"yyyy-MM-dd hh:mm:ss")};r.push(t)}),(e,t)=>{const i=a("n-timeline-item"),m=a("n-timeline"),N=a("n-scrollbar"),O=a("n-input"),y=a("n-button"),j=a("n-space");return d(),b(h,null,[o(N,{style:{"max-height":"400px"}},{default:l(()=>[o(m,null,{default:l(()=>[(d(!0),b(h,null,J(_(r),n=>(d(),V(i,{key:n.time,type:n.type,title:n.title,content:n.content,time:n.time},null,8,["type","title","content","time"]))),128))]),_:1})]),_:1}),o(j,{style:{"margin-top":"30px"}},{default:l(()=>[o(O,{style:{width:"500px"},type:"textarea",size:"large",round:"",autosize:{minRows:3},value:s.value,"onUpdate:value":t[0]||(t[0]=n=>s.value=n),placeholder:"\u8BD5\u7740\u804A\u804A\u5929"},null,8,["value"]),o(y,{type:"primary",onClick:_(D),disabled:u.value},{default:l(()=>[P]),_:1},8,["onClick","disabled"]),o(y,{type:"primary",onClick:_(w),disabled:u.value},{default:l(()=>[R]),_:1},8,["onClick","disabled"])]),_:1})],64)}}});export{$ as default};
