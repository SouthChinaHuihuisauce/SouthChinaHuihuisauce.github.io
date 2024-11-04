import{b as y}from"./brand.3104c39c.js";import{H as $}from"./Basic.a3a1f3e5.js";import{F as k}from"./Main.0aab928a.js";import{S as q,A}from"./AuthFrame.e64a1321.js";import{_ as f,r as s,o as v,g as D,w as r,b as n,t as c,a as o,d as p,c as F}from"./entry.b2448997.js";import"./vue-i18n.runtime.esm-bundler.5f185f1c.js";import"./starter-logo.e83da669.js";const S={components:{SocialAuth:q,AuthFrame:A},data(){return{valid:!0,email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],password:"",requiredRules:[e=>!!e||"This field is required"],checkbox:!1}},computed:{isMobile(){return this.$vuetify.display.smAndDown}},methods:{handleSubmit(){this.$refs.form.validate()&&console.log("data submited")}}},B={class:"head"},C={class:"use-text-subtitle"},R={class:"separator"},U={class:"form-helper"},E={class:"form-control-label"},L={class:"btn-area"};function N(e,l,b,h,t,_){const d=s("social-auth"),i=s("v-text-field"),m=s("v-col"),g=s("v-row"),w=s("v-checkbox"),u=s("v-btn"),V=s("v-form"),x=s("AuthFrame");return v(),D(x,{title:e.$t("common.login_subtitle"),subtitle:e.$t("common.auth_desc")},{default:r(()=>[n("div",null,[n("div",B,[n("h3",C,c(e.$t("common.login_title")),1)]),o(d),n("div",R,[n("p",null,c(e.$t("common.login_or")),1)]),o(V,{ref:"form",modelValue:t.valid,"onUpdate:modelValue":l[3]||(l[3]=a=>t.valid=a)},{default:r(()=>[o(g,{class:"spacing3"},{default:r(()=>[o(m,{cols:"12",sm:"12",class:"px-3"},{default:r(()=>[o(i,{modelValue:t.email,"onUpdate:modelValue":l[0]||(l[0]=a=>t.email=a),label:e.$t("common.login_email"),rules:t.emailRules,color:"secondary",name:"email",required:""},null,8,["modelValue","label","rules"])]),_:1}),o(m,{cols:"12",sm:"12",class:"px-3"},{default:r(()=>[o(i,{modelValue:t.password,"onUpdate:modelValue":l[1]||(l[1]=a=>t.password=a),label:e.$t("common.login_password"),rules:t.requiredRules,color:"secondary",type:"password",name:"email",required:""},null,8,["modelValue","label","rules"])]),_:1})]),_:1}),n("div",U,[n("div",E,[o(w,{modelValue:t.checkbox,"onUpdate:modelValue":l[2]||(l[2]=a=>t.checkbox=a),label:e.$t("common.login_remember"),color:"secondary"},null,8,["modelValue","label"])]),o(u,{size:"small",class:"button-link",variant:"text",href:"#"},{default:r(()=>[p(c(e.$t("common.login_forgot")),1)]),_:1})]),n("div",L,[o(u,{size:"large",block:"",color:"secondary",onClick:_.handleSubmit},{default:r(()=>[p(c(e.$t("common.continue")),1)]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])])]),_:1},8,["title","subtitle"])}const z=f(S,[["render",N],["__scopeId","data-v-8fc3d08c"]]);const H={components:{"main-header":$,"main-footer":k,LoginForm:z},head(){return{title:y.starter.name+" - Login"}},computed:{isMobile(){return this.$vuetify.display.xs}}},I={class:"main-wrap"},M={class:"space-top"};function T(e,l,b,h,t,_){const d=s("main-header"),i=s("login-form"),m=s("main-footer");return v(),F("div",I,[o(d,{text:"register",href:"/register"}),n("div",M,[o(i)]),o(m)])}const W=f(H,[["render",T],["__scopeId","data-v-ee084729"]]);export{W as default};
