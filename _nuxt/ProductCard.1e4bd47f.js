import{_ as f,r as s,i as v,o as r,g as m,w as c,k as p,c as n,d as i,b as t,t as a,a as o,j as l,n as y}from"./entry.b2448997.js";const b={props:{type:{type:String,default:"full"},img:{type:String,required:!0},title:{type:String,required:!0},desc:{type:String,required:!0},rating:{type:Number,default:0},price:{type:Number,default:0},orientation:{type:String,default:"portrait"},href:{type:String,default:"#"}}},k=["href"],x=["src","alt"],C={class:"desc"},S={class:"text"},N={class:"use-text-subtitle2 pb-2 text-truncate"},B={class:"use-text-paragraph"},V={class:"property"},q={key:0,class:"rating"},w={key:1};function D(d,z,e,P,j,E){const _=s("v-rating"),u=s("v-btn"),g=s("v-card"),h=v("ripple");return r(),m(g,{class:y([[e.orientation,e.type],"product-card"])},{default:c(()=>[p((r(),n("a",{href:e.href,class:"hidden-link"},[i(" ")],8,k)),[[h]]),t("figure",null,[t("img",{src:e.img,alt:e.title},null,8,x)]),t("div",C,[t("div",S,[t("h6",N,a(e.title),1),t("p",B,a(e.desc),1)]),t("div",null,[t("div",V,[e.rating>0?(r(),n("div",q,[o(_,{"model-value":e.rating,color:"orange lighten-3","background-color":"grey",length:"5",readonly:"",size:"24"},null,8,["model-value"])])):l("",!0),e.price>0?(r(),n("strong",w,"$"+a(e.price),1)):l("",!0)]),o(u,{href:e.href,block:"",class:"button",variant:"outlined",color:"primary"},{default:c(()=>[i(a(d.$t("common.btn_detail")),1)]),_:1},8,["href"])])])]),_:1},8,["class"])}const T=f(b,[["render",D],["__scopeId","data-v-cb67d3f4"]]);export{T as C};
