import{_ as x,r as o,o as r,b as _,a as n,f as t,w as s,c as y,h as k,t as g,g as b,F as w,d as P,k as S,p as N}from"./DE_E68rl.js";import{S as B,a as I}from"./6rwvcvN8.js";import{M}from"./8zEwWxIX.js";const V={},q={class:"banner-wrap"},D={class:"inner"};function H(a,e){const u=o("v-col"),v=o("v-row"),i=o("v-container");return r(),_("div",q,[n("div",D,[t(i,null,{default:s(()=>[t(v,{align:"center",justify:"center"},{default:s(()=>[t(u,{lg:"7",sm:"6",class:"px-5"},{default:s(()=>e[0]||(e[0]=[n("div",{class:"text text-center text-sm-start"},[n("h4",{class:"text-h4"}," Pellentesque habitant morbi tristique senectus "),n("h5",{class:"text-h5"}," Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents ")],-1)])),_:1}),t(u,{lg:"3",sm:"6",class:"px-5"},{default:s(()=>e[1]||(e[1]=[n("div",{class:"img"},null,-1)])),_:1})]),_:1})]),_:1})])])}const Q=x(V,[["render",H],["__scopeId","data-v-ddac03e7"]]),z={components:{MediaCard:M,Splide:B,SplideSlide:I},data(){return{visible:!1,index:0,item:0,loaded:!1,imgs:["https://source.unsplash.com/random/?nice","https://source.unsplash.com/random/?nice","https://source.unsplash.com/random/?nice","https://source.unsplash.com/random/?nice","https://source.unsplash.com/random/?nice","https://source.unsplash.com/random/?nice"],slickOptions:{pagination:!1,arrows:!1,perPage:3,perMove:1,type:"loop",reducedMotion:{autoplay:!0,speed:500,rewindSpeed:1e3},breakpoints:{800:{perPage:2},600:{perPage:1}}}}},mounted(){this.loaded=!0},methods:{slickNext(){this.$refs.slider.go(">")},slickPrev(){this.$refs.slider.go("<")},showImg(a){this.index=a,this.visible=!0},handleHide(){this.visible=!1}}},K={class:"use-text-title2 mb-3"},U={key:0,class:"carousel"},A=["onClick","onKeydown"];function F(a,e,u,v,i,l){const m=o("vue-easy-lightbox"),p=o("v-icon"),c=o("v-btn"),f=o("media-card"),h=o("splide-slide"),$=o("splide"),C=o("v-container");return r(),_(w,null,[i.loaded?(r(),y(m,{key:0,visible:i.visible,imgs:i.imgs,index:i.index,onHide:l.handleHide},null,8,["visible","imgs","index","onHide"])):k("",!0),t(C,null,{default:s(()=>[n("h4",K,g(a.$t("common.about_gallery")),1),e[4]||(e[4]=n("p",{class:"use-text-subtitle2"}," Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1)),i.loaded?(r(),_("div",U,[t(c,{icon:"",size:"small",variant:"text",class:"nav prev",onClick:e[0]||(e[0]=d=>l.slickPrev())},{default:s(()=>[t(p,null,{default:s(()=>e[2]||(e[2]=[b("mdi-arrow-left")])),_:1})]),_:1}),t($,{ref:"slider",options:i.slickOptions},{default:s(()=>[(r(),_(w,null,P(6,d=>t(h,{key:d},{default:s(()=>[n("div",{class:"item px-3",onClick:()=>l.showImg(d),onKeydown:S(()=>l.showImg(d),["enter"])},[t(f,{title:"Sed lacinia velit, ut malesuada eros interdum a",orientation:"portrait",type:"photo",thumb:"https://source.unsplash.com/random/?nice"})],40,A)]),_:2},1024)),64))]),_:1},8,["options"]),t(c,{icon:"",variant:"text",size:"small",class:"nav next",onClick:e[1]||(e[1]=d=>l.slickNext())},{default:s(()=>[t(p,null,{default:s(()=>e[3]||(e[3]=[b("mdi-arrow-right")])),_:1})]),_:1})])):k("",!0)]),_:1})],64)}const R=x(z,[["render",F],["__scopeId","data-v-68b6ae6a"]]),L={computed:{isDektop(){return this.$vuetify.display.mdAndUp}}},O={class:"root"},j={class:"use-text-title pb-2"};function E(a,e,u,v,i,l){const m=o("v-col"),p=o("v-btn"),c=o("v-row"),f=o("v-card"),h=o("v-container");return r(),y(h,{class:N({"fixed-width":l.isDektop})},{default:s(()=>[n("div",O,[t(f,{class:"paper"},{default:s(()=>[t(c,{align:"center","no-gutters":""},{default:s(()=>[t(m,{cols:"12",md:"9"},{default:s(()=>[n("h4",j,g(a.$t("common.about_ready")),1),e[0]||(e[0]=n("p",null," Pellentesque ac bibendum tortor. Nulla eget lobortis lacus. ",-1))]),_:1}),t(m,{cols:"12",md:"3"},{default:s(()=>[t(c,{align:"center"},{default:s(()=>[t(p,{large:"",outlined:"",color:"secondary",href:"/contact",class:"button"},{default:s(()=>[b(g(a.$t("common.btn_contact")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["class"])}const W=x(L,[["render",E],["__scopeId","data-v-87082d5a"]]);export{Q as B,W as C,R as P};
