import{_ as v,r as e,o as m,g,w as n,b as a,a as o,t as s,d as r,n as y}from"./entry.b2448997.js";const h={props:{img:{type:String,required:!0},title:{type:String,required:!0},date:{type:String,required:!0},desc:{type:String,required:!0},orientation:{type:String,default:"portrait"},type:{type:String,default:"full"},href:{type:String,default:"#"},onDownload:{type:Function,required:!0}}},x={class:"figure"},b={class:"properties"},w={class:"use-text-subtitle text-truncate"},S={class:"text-body-1"};function C(c,i,t,q,V,k){const l=e("v-img"),_=e("v-card-subtitle"),u=e("v-card-text"),d=e("v-btn"),f=e("v-card-actions"),p=e("v-card");return m(),g(p,{class:y([[t.orientation,t.type],"post-card mx-auto"]),"max-width":"1200"},{default:n(()=>[a("div",x,[o(l,{src:t.img,cover:"",class:"white--text",height:"280px"},null,8,["src"])]),a("div",b,[a("strong",w,[a("span",null,s(t.title),1)]),o(_,null,{default:n(()=>[r(s(t.date),1)]),_:1}),o(u,{class:"desc"},{default:n(()=>[a("span",S,[a("span",null,s(t.desc),1)])]),_:1}),o(f,null,{default:n(()=>[o(d,{size:"small",variant:"outlined",class:"action-btn",color:"primary",onClick:i[0]||(i[0]=z=>t.onDownload(t.href))},{default:n(()=>[r(s(c.$t("blog.down")),1)]),_:1}),o(d,{size:"small",href:t.href,variant:"outlined",class:"action-btn",color:"primary"},{default:n(()=>[r(s(c.$t("blog.downHistoryVersion")),1)]),_:1},8,["href"])]),_:1})])]),_:1},8,["class"])}const D=v(h,[["render",C],["__scopeId","data-v-5065dffd"]]);export{D as P};
