import{d as x,k as o,l as C,a as h,b as a,m as s,I as u,o as b}from"./index-a9848946.js";const U={class:"h-[80vh] p-[20px] flex justify-center items-center"},k={class:"w-[400px] shadow-lg border border-gray-200 rounded-xl grid grid-cols-2 p-5 gap-5"},B=a("div",{class:"text-sm leading-6 font-bold"},"限定：纯数字",-1),w=a("div",{class:"text-sm leading-6 font-bold"},"限定：非负整数",-1),y=a("div",{class:"text-sm leading-6 font-bold"},"限定：非负数(包含小数)",-1),N=a("div",{class:"text-sm leading-6 font-bold"},"限定：整数(包含负数)",-1),V=a("div",{class:"text-sm leading-6 font-bold"},"限定：数字(包含负数、小数)",-1),E=x({__name:"index",setup(j){const v=o(""),_=t=>{const e=t.target;v.value=u(e.value,!1,!1,!0)},d=o(""),c=t=>{const e=t.target;d.value=u(e.value,!1,!1)},i=o(""),p=t=>{const e=t.target;i.value=u(e.value,!1)},r=o(""),f=t=>{const e=t.target;r.value=u(e.value,!0,!1)},g=o(""),m=t=>{const e=t.target;g.value=u(e.value)};return(t,e)=>{const n=C("a-input");return b(),h("div",U,[a("div",k,[a("div",null,[B,s(n,{value:v.value,"onUpdate:value":e[0]||(e[0]=l=>v.value=l),onChange:_},null,8,["value"])]),a("div",null,[w,s(n,{value:d.value,"onUpdate:value":e[1]||(e[1]=l=>d.value=l),onChange:c},null,8,["value"])]),a("div",null,[y,s(n,{value:i.value,"onUpdate:value":e[2]||(e[2]=l=>i.value=l),onChange:p},null,8,["value"])]),a("div",null,[N,s(n,{value:r.value,"onUpdate:value":e[3]||(e[3]=l=>r.value=l),onChange:f},null,8,["value"])]),a("div",null,[V,s(n,{value:g.value,"onUpdate:value":e[4]||(e[4]=l=>g.value=l),onChange:m},null,8,["value"])])])])}}});export{E as default};