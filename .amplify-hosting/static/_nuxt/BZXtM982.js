import{_ as p}from"./ZAP2WejQ.js";import{_ as u}from"./ZZtQuO6o.js";import{f as _,r as l,o as f,c as x,a as o,b as r,i as a,N as b,w as g,q as h,F as w,d as y,s as v}from"./Bt_NbFr3.js";import{e as V}from"./NWjtNAEJ.js";import"./BfOmg0nA.js";import"./DOsE6IPw.js";import"./DzVHD3c6.js";import"./CnZK799a.js";import"./BQkc-AXV.js";import"./Bt7Qu0f8.js";import"./DvDH6DOc.js";const B=o("p",{class:"leading-relaxed mb-2"}," Welcome to practice exams. Enter the content below, and get a personalized exam. You can copy paste lecture notes, articles, anything! ",-1),C=o("p",{class:"leading-relaxed mb-2"}," Once you complete the exam, you'll receive grades and an explanation telling you where you went wrong. ",-1),A=_({__name:"new",setup(E){const e=l(!1),t=l("");async function i(){e.value=!0;const n=await $fetch("/api/exams",{method:"POST",body:{additionalContent:t.value}});e.value=!1,V.emit("refresh.exams"),await v(`/exams/${n.id}`)}return(n,s)=>{const m=p,c=u;return f(),x(w,null,[B,C,o("form",{onSubmit:h(i,["prevent"]),class:"flex flex-col items-end"},[r(m,{modelValue:a(t),"onUpdate:modelValue":s[0]||(s[0]=d=>b(t)?t.value=d:null),autoresize:"",placeholder:"Exam content...",maxrows:20,disabled:a(e),class:"w-full mb-2",ref:"textAreaRef"},null,8,["modelValue","disabled"]),r(c,{type:"submit",disabled:a(e),loading:a(e)},{default:g(()=>[y("Generate")]),_:1},8,["disabled","loading"])],32)],64)}}});export{A as default};
