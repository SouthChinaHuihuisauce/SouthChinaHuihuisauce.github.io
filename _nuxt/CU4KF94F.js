import{_ as g,r as s,o as r,c as D,w as l,a as e,b as d,F as w,d as $,i as M,e as V,f as t,g as O,h as L,j as C,k as N,t as R,l as T,H as q,m as H,n as Y}from"./DE_E68rl.js";import{B as A,P as F,C as E}from"./DjjnGd98.js";import{C as K}from"./CaNBYX73.js";import{M as U,P as W}from"./8zEwWxIX.js";import{S as j,a as G}from"./6rwvcvN8.js";import{C as J}from"./bR91QK1s.js";import"./CgGJSi96.js";const X={data(){return{logos:["/images/logos/architect.png","/images/logos/cloud.png","/images/logos/coin.png","/images/logos/mobile.png","/images/logos/profile.png","/images/logos/saas.png"]}}},z={class:"root"},Q=["src","alt"];function Z(_,o,f,h,n,i){const a=s("v-container");return r(),D(a,{class:"fixed-width"},{default:l(()=>[e("div",z,[(r(!0),d(w,null,$(n.logos,(c,p)=>(r(),d("img",{key:p,src:c,alt:"logo"+p},null,8,Q))),128))])]),_:1})}const ee=g(X,[["render",Z],["__scopeId","data-v-da1cdacc"]]),oe={use:!0},te={components:{MediaCard:U},data(){return{videoId:"sf15CtXuw9M",player:null,yt:oe,imgAPI:M,dialog:!1,playerVars:{autoplay:0,controls:1,rel:0,showinfo:1,mute:0,origin:"https://localhost:8008"}}},methods:{handleVideoOpen(){this.yt.use&&(this.dialog=!0)},onReady(){this.$refs.youtube.playVideo()},handleVideoClose(){this.dialog=!1,this.$refs.youtube.pauseVideo()}}},se={key:0,class:"text-center mx-auto py-4"};function ne(_,o,f,h,n,i){const a=s("v-icon"),c=s("v-btn"),p=s("v-card-title"),m=s("YouTube"),v=s("v-card"),b=s("v-dialog"),y=s("media-card"),x=V("ripple");return r(),d("div",null,[t(b,{modelValue:n.dialog,"onUpdate:modelValue":o[1]||(o[1]=u=>n.dialog=u),"max-width":"690"},{default:l(()=>[t(v,{class:"video-popup"},{default:l(()=>[t(p,{class:"headline"},{default:l(()=>[o[5]||(o[5]=e("h4",{class:"text-h6 title-main"}," Vestibulum consequat hendrerit lacus ",-1)),t(c,{variant:"text",icon:"",onClick:o[0]||(o[0]=u=>i.handleVideoClose())},{default:l(()=>[t(a,null,{default:l(()=>o[4]||(o[4]=[O("mdi-close")])),_:1})]),_:1})]),_:1}),n.yt.use?(r(),d("div",se,[t(m,{ref:"youtube",src:n.videoId,vars:n.playerVars,width:640,height:360,class:"youtube",onReady:i.onReady},null,8,["src","vars","onReady"])])):L("",!0)]),_:1})]),_:1},8,["modelValue"]),o[6]||(o[6]=e("h4",{class:"use-text-subtitle mb-3"}," Lorem ipsum dolor sit amet. ",-1)),o[7]||(o[7]=e("p",{class:"pb-2 use-text-subtitle2"}," Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat. In porttitor congue libero ",-1)),C((r(),d("div",{onClick:o[2]||(o[2]=(...u)=>i.handleVideoOpen&&i.handleVideoOpen(...u)),onKeydown:o[3]||(o[3]=N((...u)=>i.handleVideoOpen&&i.handleVideoOpen(...u),["enter"]))},[t(y,{title:"Sed lacinia velit, ut malesuada eros interdum a",orientation:"landscape",type:"video",thumb:"https://source.unsplash.com/random/?nice"})],32)),[[x]])])}const ae=g(te,[["render",ne],["__scopeId","data-v-3b3ed200"]]),le={data(){return{play:!1}},methods:{handleScroll(){const{wrapper:_}=this.$refs;_.getBoundingClientRect().top<100&&(this.play=!0)}}},ie={ref:"wrapper",class:"progress-wrap"};function re(_,o,f,h,n,i){const a=s("v-progress-linear"),c=V("scroll");return C((r(),d("div",ie,[e("ul",null,[e("li",null,[o[0]||(o[0]=e("div",{class:"text-icon"},[e("i",{class:"ion-ios-color-wand"}),e("h5",{class:"use-text-subtitle2"}," UI Interface Design ")],-1)),t(a,{height:10,"model-value":n.play?80:0,color:"none",class:"progress"},null,8,["model-value"])]),e("li",null,[o[1]||(o[1]=e("div",{class:"text-icon"},[e("i",{class:"ion-logo-dribbble"}),e("h5",{class:"use-text-subtitle2"}," Icon Design ")],-1)),t(a,{height:10,"model-value":n.play?70:0,color:"none",class:"progress"},null,8,["model-value"])]),e("li",null,[o[2]||(o[2]=e("div",{class:"text-icon"},[e("i",{class:"ion-ios-globe"}),e("h5",{class:"use-text-subtitle2"}," HTML Prototyping ")],-1)),t(a,{height:10,"model-value":n.play?60:0,color:"none",class:"progress"},null,8,["model-value"])]),e("li",null,[o[3]||(o[3]=e("div",{class:"text-icon"},[e("i",{class:"ion-ios-camera"}),e("h5",{class:"use-text-subtitle2"}," Photo Editing ")],-1)),t(a,{height:10,"model-value":n.play?90:0,color:"none",class:"progress"},null,8,["model-value"])]),e("li",null,[o[4]||(o[4]=e("div",{class:"text-icon"},[e("i",{class:"ion-ios-snow"}),e("h5",{class:"use-text-subtitle2"}," Graphic Illustrations ")],-1)),t(a,{height:10,"model-value":n.play?80:0,color:"none",class:"progress"},null,8,["model-value"])])])])),[[c,i.handleScroll]])}const ce=g(le,[["render",re],["__scopeId","data-v-2e21a9cb"]]),de={components:{ProfileCard:W,Splide:j,SplideSlide:G},data(){return{slickOptions:{pagination:!0,arrows:!1,perPage:2,perMove:1,autoWidth:!0,direction:"ltr",reducedMotion:{autoplay:!0,speed:500,rewindSpeed:1e3},breakpoints:{600:{perPage:1}}}}}},pe={class:"bg-wrapper team-root"},ue={class:"use-text-title2 mb-3"},_e={class:"carousel mt-15"},me={class:"item px-3"};function ve(_,o,f,h,n,i){const a=s("v-container"),c=s("profile-card"),p=s("splide-slide"),m=s("splide");return r(),d("div",pe,[t(a,null,{default:l(()=>[e("h4",ue,R(_.$t("common.about_team")),1),o[0]||(o[0]=e("p",{class:"use-text-subtitle2"}," Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1))]),_:1}),e("div",_e,[t(m,{ref:"slick",options:n.slickOptions},{default:l(()=>[(r(),d(w,null,$(6,v=>t(p,{key:v},{default:l(()=>[e("div",me,[t(c,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"full",orientation:"landscape",avatar:"/images/avatars/pp_girl3.svg"})])]),_:2},1024)),64))]),_:1},8,["options"])])])}const ge=g(de,[["render",ve],["__scopeId","data-v-264ab4b9"]]),fe=T({components:{"main-header":q,"main-footer":H,Banner:A,CompanyLogo:ee,Counter:K,"about-progress":ce,"about-video":ae,TeamSlider:ge,PhotoSlider:F,CallAction:E,ContactMap:J},head(){return{title:Y.starter.name+" - About"}}},"$46HtYhc5ci"),he={class:"main-wrap"},be={class:"space-top-short"},ye={class:"space-top-short"},xe={class:"space-bottom-short"},we={class:"space-bottom-short"},$e={class:"space-top-short"},Ve={id:"footer"};function Ce(_,o,f,h,n,i){const a=s("main-header"),c=s("banner"),p=s("company-logo"),m=s("counter"),v=s("about-video"),b=s("v-col"),y=s("about-progress"),x=s("v-row"),u=s("v-container"),k=s("team-slider"),I=s("photo-slider"),P=s("call-action"),S=s("contact-map"),B=s("main-footer");return r(),d("div",he,[t(a),t(c),e("div",be,[t(p)]),t(m),e("div",ye,[t(u,null,{default:l(()=>[t(x,null,{default:l(()=>[t(b,{md:"6",cols:"12",class:"px-md-12"},{default:l(()=>[t(v)]),_:1}),t(b,{md:"6",cols:"12",class:"px-md-12"},{default:l(()=>[t(y)]),_:1})]),_:1})]),_:1})]),e("div",xe,[t(k)]),e("div",we,[t(I)]),t(P),e("div",$e,[t(S,{full:""})]),e("div",Ve,[t(B)])])}const Oe=g(fe,[["render",Ce],["__scopeId","data-v-a909d905"]]);export{Oe as default};