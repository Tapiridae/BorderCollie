import{d as j,a2 as A,r as d,a1 as F,af as v,b as a,o as p,a3 as b,f as o,e as l,a4 as h,a5 as J,c as V,g as _,_ as g,ag as k,ah as x,ai as W}from"./vendor.57dbeffe.js";import{W as C}from"./websocket.e8e64d46.js";import{P as z}from"./index.f8cfb495.js";const P=g("\u53D1\u9001"),R=g("\u79BB\u5F00"),q=j({setup(E){const{data:S,send:f,close:T}=A(C.CHAT_ROOM+C.UUID),M=z.globalToken.value,w={action:"auth",token:M};f(JSON.stringify(w));const s=d(""),u=d(!1),c=d(!1),r=F([]),B=k(()=>{if(!s.value)return;const e={action:"sendMessage",text:s.value};f(JSON.stringify(e)),u.value=!0,setTimeout(()=>{u.value=!1,s.value=""},200)},300),D=k(()=>{T(),c.value=!0},300);return v(S,e=>{if(!e)return;const{text:t,createTimestamp:i}=JSON.parse(e);if(!i||!t)return;const m={type:"success",title:"Ta",content:t,time:x(W(i),"yyyy-MM-dd hh:mm:ss")};r.push(m)}),v(u,e=>{if(!e)return;const t={type:"info",title:"\u6211",content:s.value,time:x(Date.now(),"yyyy-MM-dd hh:mm:ss")};r.push(t)}),(e,t)=>{const i=a("n-timeline-item"),m=a("n-timeline"),N=a("n-scrollbar"),O=a("n-input"),y=a("n-button"),U=a("n-space");return p(),b(h,null,[o(N,{style:{"max-height":"400px"}},{default:l(()=>[o(m,null,{default:l(()=>[(p(!0),b(h,null,J(_(r),n=>(p(),V(i,{key:n.time,type:n.type,title:n.title,content:n.content,time:n.time},null,8,["type","title","content","time"]))),128))]),_:1})]),_:1}),o(U,{style:{"margin-top":"30px"}},{default:l(()=>[o(O,{style:{width:"500px"},type:"textarea",size:"large",round:"",autosize:{minRows:3},value:s.value,"onUpdate:value":t[0]||(t[0]=n=>s.value=n),placeholder:"\u8BD5\u7740\u804A\u804A\u5929"},null,8,["value"]),o(y,{type:"primary",onClick:_(B),disabled:c.value},{default:l(()=>[P]),_:1},8,["onClick","disabled"]),o(y,{type:"primary",onClick:_(D),disabled:c.value},{default:l(()=>[R]),_:1},8,["onClick","disabled"])]),_:1})],64)}}});export{q as default};
