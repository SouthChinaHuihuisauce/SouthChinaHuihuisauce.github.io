import{b as V}from"./brand.3104c39c.js";import{H as y}from"./Main.adb0565e.js";import{H as D,F}from"./Main.0aab928a.js";import{P as I}from"./Pricing.428ebe1e.js";import{_ as k}from"./Illustration.d5301823.js";import{_ as x,r as e,o as l,c as v,a as t,w as a,b as n,n as f,t as r,F as B,h as H,g as S,p as C,e as M}from"./entry.b2448997.js";import"./vue-i18n.runtime.esm-bundler.5f185f1c.js";import"./SearchField.f6ecc7b5.js";import"./Basic.a3a1f3e5.js";import"./starter-logo.e83da669.js";const N=[{q:"Pellentesque ac bibendum tortor?",a:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."},{q:"In mi nulla, fringilla vestibulum?",a:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "},{q:"Quisque lacinia purus ut libero?",a:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "},{q:"Quisque ut metus sit amet augue?",a:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "},{q:"Pellentesque ac bibendum tortor?",a:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "}],Q={components:{Hidden:D},data(){return{panel:0,faqData:N}},computed:{isMobile(){return this.$vuetify.display.smAndDown}}},z=s=>(C("data-v-8e1d4e4c"),s=s(),M(),s),A={class:"root"},E=z(()=>n("div",{class:"illustration"},[n("img",{src:k,alt:"illustration"})],-1)),L={class:"accordion"},U={class:"heading"};function j(s,_,h,q,o,p){const m=e("hidden"),i=e("v-col"),d=e("v-expansion-panel-title"),u=e("v-expansion-panel-text"),b=e("v-expansion-panel"),g=e("v-expansion-panels"),w=e("v-row"),$=e("v-container");return l(),v("div",A,[t($,{class:"fixed-width"},{default:a(()=>[t(w,{class:"spacing6"},{default:a(()=>[t(i,{md:"6",class:"pa-6"},{default:a(()=>[n("h4",{class:f(["use-text-title2 mb-3",[p.isMobile?"text-center":"text-start"]])},r(s.$t("common.faq_title")),3),n("p",{class:f(["text use-text-subtitle2",[p.isMobile?"text-center":"text-start"]])},r(s.$t("common.faq_desc")),3),t(m,{point:"smDown"},{default:a(()=>[E]),_:1})]),_:1}),t(i,{md:"6",cols:"12",class:"pa-6"},{default:a(()=>[n("div",L,[t(g,{modelValue:o.panel,"onUpdate:modelValue":_[0]||(_[0]=c=>o.panel=c),"active-class":"expanded"},{default:a(()=>[(l(!0),v(B,null,H(o.faqData,(c,P)=>(l(),S(b,{key:P,class:"paper"},{default:a(()=>[t(d,{class:"content"},{default:a(()=>[n("span",U,r(c.q),1)]),_:2},1024),t(u,{class:"detail"},{default:a(()=>[n("span",null,r(c.a),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})])}const G=x(Q,[["render",j],["__scopeId","data-v-8e1d4e4c"]]);const J={components:{"main-header":y,"main-footer":F,Pricing:I,Faq:G},head(){return{title:V.starter.name+" - Pricing"}}},K={class:"main-wrap"},O={class:"space-top"},R={class:"space-top-short"};function T(s,_,h,q,o,p){const m=e("main-header"),i=e("pricing",!0),d=e("faq"),u=e("main-footer");return l(),v("div",K,[t(m),n("div",O,[t(i)]),n("div",R,[t(d)]),t(u)])}const ie=x(J,[["render",T],["__scopeId","data-v-b5177af4"]]);export{ie as default};