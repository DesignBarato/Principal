import y from"./DBThNqmy.js";import{_ as x,U as v,G as k,K as j,k as o,o as d,c as p,a,b,F as N,l as O,n as q,t as w,q as B}from"./CPOyUOu7.js";const L={key:0},R={class:"page-align","aria-label":"hyperscripts-pagination"},V={class:"pagination"},$={class:"page-link","aria-label":"Previous"},F=["onClick"],I={class:"page-link","aria-label":"Next"},S={__name:"Pagination",props:{pages:{type:Object,default:{},required:!0},currentPage:{type:Number,default:1,required:!0}},emits:["onCurrentPage"],setup(f,{emit:C}){const h=C,n=f,r=v(n.currentPage),P=k(()=>n.currentPage),i=k(()=>Object.keys(n.pages)),s={start:0,end:8},u=j(structuredClone(s)),e=v(u),g=c=>{r.value=c,h("onCurrentPage",c)},_=c=>{if(!(i.value.length<2)){switch(c){case"next":e.value.start+=s.end,e.value.end+=s.end,e.value.end>Object.keys(n.pages).length&&(e.value.start=+Object.keys(n.pages).length-s.end,e.value.end=+Object.keys(n.pages).length),r.value=e.value.end;break;case"back":e.value.start-=u.end,e.value.end-=u.end,e.value.start<0&&(e.value.start=s.start,e.value.end=s.end),r.value=e.value.start+1;break}g(r.value)}};return(c,l)=>{const m=y;return o(i).length>1?(d(),p("div",L,[a("nav",R,[a("ul",V,[a("li",{onClick:l[0]||(l[0]=t=>_("back")),class:"page-item"},[a("a",$,[b(m,{name:"ic:round-arrow-left"})])]),(d(!0),p(N,null,O(o(i).slice(o(e).start,o(e).end),t=>(d(),p("li",{onClick:z=>g(t),key:t,class:"page-item"},[a("a",{class:q([{active:o(r)===+t||o(P)===+t},"page-link"])},w(t),3)],8,F))),128)),a("li",{onClick:l[1]||(l[1]=t=>_("next")),class:"page-item"},[a("a",I,[b(m,{name:"ic:round-arrow-right"})])])])])])):B("",!0)}}},G=x(S,[["__scopeId","data-v-977cab05"]]);export{G as _};