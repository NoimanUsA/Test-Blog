"use strict";(self["webpackChunkspa_blog"]=self["webpackChunkspa_blog"]||[]).push([[572],{8572:(e,l,t)=>{t.r(l),t.d(l,{default:()=>U});var o=t(3673),a=t(8880);const u=(0,o._)("h1",{class:"text-h4"},"Создание новой записи",-1),s=(0,o.Uk)(" Заголовок "),n=(0,o.Uk)(" Краткое описание "),c=(0,o.Uk)(" Текст записи "),r={class:"row col-12"},d=(0,o.Uk)("Сохранить");function i(e,l,t,i,m,b){const p=(0,o.up)("q-input"),h=(0,o.up)("q-btn"),g=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)("div",null,[u,(0,o.Wm)(g,{class:"q-mt-md row q-gutter-md",onSubmit:(0,a.iM)(i.updateNotes,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"col-md-8 col-11",dense:"",modelValue:i.title,"onUpdate:modelValue":l[0]||(l[0]=e=>i.title=e),name:"title",color:"light-blue-10","bg-color":"grey-1",label:"",outlined:"",clearable:""},{label:(0,o.w5)((()=>[s])),_:1},8,["modelValue"]),(0,o.Wm)(p,{class:"col-md-8 col-11",dense:"",modelValue:i.shortDesc,"onUpdate:modelValue":l[1]||(l[1]=e=>i.shortDesc=e),name:"title",color:"light-blue-10","bg-color":"grey-1",label:"",outlined:"",clearable:""},{label:(0,o.w5)((()=>[n])),_:1},8,["modelValue"]),(0,o.Wm)(p,{class:"col-md-8 col-11",dense:"",modelValue:i.text,"onUpdate:modelValue":l[2]||(l[2]=e=>i.text=e),name:"header",color:"light-blue-10","bg-color":"grey-1",label:"",outlined:"",type:"textarea",clearable:""},{label:(0,o.w5)((()=>[c])),_:1},8,["modelValue"]),(0,o._)("div",r,[(0,o.Wm)(h,{disable:i.disableButton,type:"submit",color:"light-blue-8",glossy:""},{default:(0,o.w5)((()=>[d])),_:1},8,["disable"])])])),_:1},8,["onSubmit"])])}var m=t(1959),b=t(9728),p=t(3617);const h={name:"CreateNote",setup(){const{dispatch:e}=(0,p.oR)(),l=(0,b.tv)(),t=(0,m.iH)(null),a=(0,m.iH)(null),u=(0,m.iH)(null),s=(0,m.Fl)((()=>!(t.value&&a.value&&u.value)));function n(){const o={title:t.value,text:a.value,shortDesc:u.value,comments:[]};return e("CREATE_NOTE",o),l.push("/notes"),!0}return(0,o.bv)((()=>{e("FETCH_NOTES")})),{title:t,text:a,shortDesc:u,updateNotes:n,disableButton:s}}};var g=t(4260),v=t(8689),_=t(7967),w=t(4607),V=t(7518),f=t.n(V);const k=(0,g.Z)(h,[["render",i]]),U=k;f()(h,"components",{QForm:v.Z,QInput:_.Z,QBtn:w.Z})}}]);