"use strict";(self["webpackChunkspa_blog"]=self["webpackChunkspa_blog"]||[]).push([[290],{9290:(t,e,s)=>{s.r(e),s.d(e,{default:()=>b});var n=s(3673),o=s(2323);const a=t=>((0,n.dD)("data-v-d4bd88e6"),t=t(),(0,n.Cn)(),t),d={class:"notes"},l=a((()=>(0,n._)("div",{class:"row justify-end"},null,-1))),c={key:0,class:"notes__list q-mt-md row q-gutter-md"},r={class:"text-h5"},u={class:"q-mt-md text-body"},i={class:"q-mt-md"},m={key:1,class:"text-h4 text-center"};function g(t,e,s,a,g,h){const v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",d,[l,t.notesLength>0?((0,n.wg)(),(0,n.iD)("ul",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.notesList,((e,s)=>((0,n.wg)(),(0,n.j4)(v,{class:"column notes__note q-pa-md shadow-2 text-grey-1 rounded-borders",key:s,to:{name:"note",params:{id:s}}},{default:(0,n.w5)((()=>[(0,n._)("div",r,(0,o.zw)(e.title),1),(0,n._)("div",u,(0,o.zw)(e.shortDesc),1),(0,n._)("div",i,"Комментариев : "+(0,o.zw)(t.getCommentsLength(s)),1)])),_:2},1032,["to"])))),128))])):((0,n.wg)(),(0,n.iD)("div",m,"Нет ни одной записи..."))])}var h=s(1959),v=s(3617);const w=(0,n.aZ)({name:"Notes",setup(){const{dispatch:t,state:e}=(0,v.oR)(),s=(0,h.Fl)((()=>e.notes||{})),o=(0,h.Fl)((()=>Object.keys(s.value).length));function a(t){return s.value[t].comments.length}return(0,n.bv)((()=>{t("FETCH_NOTES")})),{notesList:s,notesLength:o,getCommentsLength:a}}});var _=s(4260);const p=(0,_.Z)(w,[["render",g],["__scopeId","data-v-d4bd88e6"]]),b=p}}]);