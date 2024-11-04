import{_ as x,r as o,o as c,c as h,w as n,a as s,f as e,p as W,g,t as b,h as J,b as w,F as $,d as V,e as M,j as U,l as H,H as I,m as L,n as z}from"./DE_E68rl.js";import{S as B}from"./D7QxJTRJ.js";import{P as F}from"./DNkg9TvF.js";import{M as E,P as O}from"./8zEwWxIX.js";import{C as T}from"./9P8y2Ezs.js";import{P as C}from"./DqIJjEuV.js";import{H as j}from"./CrYqHrC6.js";import"./CgGJSi96.js";const Q={props:{img:{type:String,required:!0},title:{type:String,required:!0},headline:{type:String,default:"news"},orientation:{type:String,default:"portrait"},type:{type:String,default:"full"},href:{type:String,default:"#"}},computed:{startPadding(){return{"ps-0":this.orientation==="landscape"&&this.type!=="over"}}}},R={class:"figure"},K={class:"use-text-subtitle2 news-title"};function Y(y,t,_,S,d,D){const v=o("v-img"),p=o("v-card-subtitle"),u=o("v-spacer"),i=o("v-btn"),l=o("v-card-actions"),a=o("v-card");return c(),h(a,{class:W([[_.orientation,_.type],"post-card mx-auto"]),"max-width":"1000"},{default:n(()=>[s("div",R,[e(v,{src:_.img,class:"white--text",height:"200px",cover:""},null,8,["src"])]),s("div",{class:W([D.startPadding,"properties"])},[e(p,{class:"head-line"},{default:n(()=>[g(b(_.headline),1)]),_:1}),s("div",K,b(_.title),1),e(l,null,{default:n(()=>[_.orientation==="portrait"?(c(),h(u,{key:0})):J("",!0),e(i,{size:_.orientation==="landscape"?"small":"regular",href:_.href,variant:"text",class:"action-btn",color:"primary"},{default:n(()=>t[0]||(t[0]=[g(" Read more ")])),_:1},8,["size","href"])]),_:1})],2)]),_:1},8,["class"])}const A=x(Q,[["render",Y],["__scopeId","data-v-72e8579d"]]),G={components:{Paper:C},data(){return{people:[{img:"/images/avatars/pp_boy5.svg",name:"John Doe",title:"Web Designer"},{img:"/images/avatars/pp_girl.svg",name:"Jean Doe",title:"Executive Merketing"},{img:"/images/avatars/pp_boy2.svg",name:"Jim Doe",title:"Dev Ops"},{img:"/images/avatars/pp_girl2.svg",name:"Jihan Doe",title:"Director"},{img:"/images/avatars/pp_girl3.svg",name:"Jena Doe",title:"CEO"},{img:"/images/avatars/pp_boy3.svg",name:"Johan Doe",title:"iOS Developer"}]}}};function X(y,t,_,S,d,D){const v=o("v-img"),p=o("v-avatar"),u=o("v-list-item-title"),i=o("v-list-item-subtitle"),l=o("v-btn"),a=o("v-list-item"),f=o("v-list"),m=o("paper");return c(),h(m,{title:"You may know",icon:"mdi-account-group",subtitle:"Donec commodo convallis ligula eget suscipit orci."},{default:n(()=>[s("div",null,[e(f,{subheader:"",lines:"two"},{default:n(()=>[(c(!0),w($,null,V(d.people,(r,P)=>(c(),h(a,{key:P},{prepend:n(()=>[e(p,null,{default:n(()=>[e(v,{src:r.img},null,8,["src"])]),_:2},1024)]),append:n(()=>[e(l,{size:"small",variant:"outlined",color:"primary"},{default:n(()=>t[0]||(t[0]=[g(" follow ")])),_:1})]),default:n(()=>[s("div",null,[e(u,null,{default:n(()=>[g(b(r.name),1)]),_:2},1024),e(i,null,{default:n(()=>[g(b(r.title),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1}),e(l,{variant:"text",block:"",color:"primary"},{default:n(()=>t[1]||(t[1]=[g(" See all ")])),_:1})])]),_:1})}const Z=x(G,[["render",X]]),tt={components:{Paper:C},data(){return{trending:[{title:"Vestibulum faucibus",share:130},{title:"Nulla eget lobortis lacus",share:120},{title:"Cras convallis",share:100},{title:"Quisque a consequat",share:88},{title:"Suspendisse",share:90}]}}};function et(y,t,_,S,d,D){const v=o("v-list-item-title"),p=o("v-list-item-subtitle"),u=o("v-list-item"),i=o("v-list"),l=o("paper");return c(),h(l,{title:"Trending now",icon:"mdi-trending-up",subtitle:"Donec commodo convallis ligula eget suscipit orci"},{default:n(()=>[e(i,{subheader:"",lines:"two"},{default:n(()=>[(c(!0),w($,null,V(d.trending,(a,f)=>(c(),h(u,{key:f,href:"#"},{default:n(()=>[s("div",null,[e(v,{class:"font-weight-bold"},{default:n(()=>[g(b(f+1)+". #"+b(a.title),1)]),_:2},1024),e(p,null,{default:n(()=>[g(b(a.share)+"k Views",1)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1})}const nt=x(tt,[["render",et]]),st={components:{Paper:C},data(){return{news:[{img:"https://source.unsplash.com/random/?orientation=squarish",title:"Vestibulum bibendum nisi eget magna",source:"the-news.com"},{img:"https://source.unsplash.com/random/?orientation=squarish",title:"Quisque a consequat ante",source:"the-news.com"},{img:"https://source.unsplash.com/random/?orientation=squarish",title:"Donec dignissim, odio ac imperdiet luctus",source:"the-news.com"},{img:"https://source.unsplash.com/random/?orientation=squarish",title:"Suspendisse eleifend nunc non",source:"the-news.com"},{img:"https://source.unsplash.com/random/?orientation=squarish",title:"Vestibulum a massa vestibulum",source:"the-news.com"}]}}};function ot(y,t,_,S,d,D){const v=o("v-img"),p=o("v-avatar"),u=o("v-list-item-title"),i=o("v-list-item-subtitle"),l=o("v-list-item"),a=o("v-list"),f=o("v-btn"),m=o("paper");return c(),h(m,{title:"Headline News",icon:"mdi-newspaper",subtitle:"Donec commodo convallis ligula eget suscipit orci."},{default:n(()=>[s("div",null,[e(a,{subheader:"",lines:"two"},{default:n(()=>[(c(!0),w($,null,V(d.news,(r,P)=>(c(),h(l,{key:P,href:"#"},{prepend:n(()=>[e(p,{rounded:"lg",width:"60"},{default:n(()=>[e(v,{cover:"",src:r.img},null,8,["src"])]),_:2},1024)]),default:n(()=>[s("div",null,[e(u,null,{default:n(()=>[g(b(r.title),1)]),_:2},1024),e(i,null,{default:n(()=>[g(b(r.source),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1}),e(f,{variant:"text",block:"",color:"primary"},{default:n(()=>t[0]||(t[0]=[g(" See all ")])),_:1})])]),_:1})}const it=x(st,[["render",ot]]),lt={components:{Paper:C},data(){return{images:[{src:"https://source.unsplash.com/random/?nice"},{src:"https://source.unsplash.com/random/?nice"},{src:"https://source.unsplash.com/random/?nice"},{src:"https://source.unsplash.com/random/?nice"}],selected:[]}}};function rt(y,t,_,S,d,D){const v=o("v-icon"),p=o("v-btn"),u=o("v-img"),i=o("v-item"),l=o("v-col"),a=o("v-row"),f=o("v-item-group"),m=o("paper");return c(),h(m,{title:y.$t("common.blog_album"),icon:"mdi-image-multiple",subtitle:""},{default:n(()=>[s("div",null,[e(f,{modelValue:d.selected,"onUpdate:modelValue":t[0]||(t[0]=r=>d.selected=r),multiple:""},{default:n(()=>[e(a,{class:"ma-0"},{default:n(()=>[(c(!0),w($,null,V(d.images,(r,P)=>(c(),h(l,{key:P,cols:"6",class:"gallery-item"},{default:n(()=>[e(i,null,{default:n(({active:k,toggle:N})=>[e(u,{cover:"",src:r.src,height:"150",class:"text-right pa-1",onClick:N},{default:n(()=>[e(p,{icon:"",variant:"text",color:"white"},{default:n(()=>[e(v,null,{default:n(()=>[g(b(k?"mdi-heart":"mdi-heart-outline"),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"]),e(p,{variant:"text",block:"",color:"primary"},{default:n(()=>[g(b(y.$t("common.btn_seeall")),1)]),_:1})])]),_:1},8,["title"])}const at=x(lt,[["render",rt],["__scopeId","data-v-af1410ef"]]),ut={components:{Paper:C},data(){return{products:[{image:"https://source.unsplash.com/random/?nice",text:"Sed lacinia velit",price:"32"},{image:"https://source.unsplash.com/random/?nice",text:"Sed lacinia velit",price:"20"},{image:"https://source.unsplash.com/random/?nice",text:"Sed lacinia velit",price:"15"},{image:"https://source.unsplash.com/random/?nice",text:"Sed lacinia velit",price:"21"}],selected:[]}}},ct={class:"link",href:"#"},dt={class:"text-truncate text-body-1 mt-2 mb-0"},pt={class:"text-h6 price"};function mt(y,t,_,S,d,D){const v=o("v-img"),p=o("v-item"),u=o("v-col"),i=o("v-row"),l=o("v-item-group"),a=o("v-btn"),f=o("paper"),m=M("ripple");return c(),h(f,{title:"Related Products",icon:"mdi-tag",subtitle:"Donec commodo convallis ligula eget suscipit orci."},{default:n(()=>[s("div",null,[e(l,{modelValue:d.selected,"onUpdate:modelValue":t[0]||(t[0]=r=>d.selected=r),multiple:""},{default:n(()=>[e(i,{class:"ma-0"},{default:n(()=>[(c(!0),w($,null,V(d.products,(r,P)=>(c(),h(u,{key:P,cols:"6",md:"6",sm:"3",class:"product-item"},{default:n(()=>[e(p,null,{default:n(()=>[U((c(),w("a",ct,[e(v,{cover:"",src:r.image,height:"100",class:"image"},null,8,["src"]),s("p",dt,b(r.text),1),s("h6",pt,"$ "+b(r.price),1)])),[[m]])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"]),e(a,{variant:"text",block:"",color:"primary"},{default:n(()=>t[1]||(t[1]=[g(" See all ")])),_:1})])]),_:1})}const _t=x(ut,[["render",mt],["__scopeId","data-v-62c356df"]]),vt={components:{PeopleWidget:Z,TrendingWidget:nt,NewsWidget:it,ImageWidget:at,ProductWidget:_t,HelpWidget:j}},gt={class:"mt-15"};function ft(y,t,_,S,d,D){const v=o("product-widget"),p=o("people-widget"),u=o("news-widget"),i=o("trending-widget"),l=o("image-widget"),a=o("help-widget");return c(),w("div",gt,[e(v),t[0]||(t[0]=s("div",{class:"py-6"},null,-1)),e(p),t[1]||(t[1]=s("div",{class:"py-6"},null,-1)),e(u),t[2]||(t[2]=s("div",{class:"py-6"},null,-1)),e(i),t[3]||(t[3]=s("div",{class:"py-6"},null,-1)),e(l),t[4]||(t[4]=s("div",{class:"py-6"},null,-1)),e(a)])}const bt=x(vt,[["render",ft]]),ht=H({data(){return{keyword:""}},components:{"main-header":I,"main-footer":L,Search:B,PostCard:F,NewsCard:A,MediaCard:E,ProductCard:T,ProfileCard:O,Sidebar:bt},head(){return{title:z.starter.name+" - Card Collection"}}},"$2vFicHeKl1"),yt={class:"main-wrap"},wt={class:"container-wrap"},Pt={class:"search-content"},Dt={id:"profile_portrait",class:"space-top-short"},xt={id:"profile_l",class:"space-top-short"},St={id:"product_p",class:"space-top-short"},$t={id:"product_l",class:"space-top-short"},Vt={id:"media_video",class:"space-top-short"},qt={id:"media_photo",class:"space-top-short"},Ct={id:"news_p",class:"space-top-short"},kt={id:"news_l",class:"space-top-short"},Nt={id:"post_p",class:"space-top-short"},Wt={id:"post_l",class:"space-top-short"};function Jt(y,t,_,S,d,D){const v=o("main-header"),p=o("search"),u=o("profile-card"),i=o("v-col"),l=o("v-row"),a=o("product-card"),f=o("media-card"),m=o("news-card"),r=o("post-card"),P=o("sidebar"),k=o("v-container"),N=o("main-footer");return c(),w("div",yt,[e(v),s("div",wt,[e(p,{modelValue:y.keyword,"onUpdate:modelValue":t[0]||(t[0]=q=>y.keyword=q)},null,8,["modelValue"]),s("div",Pt,[e(k,null,{default:n(()=>[e(l,{align:"start",justify:"center"},{default:n(()=>[e(i,{md:"8",cols:"12"},{default:n(()=>[s("div",Dt,[t[1]||(t[1]=s("h4",{class:"use-text-subtitle mb-3"}," Profile Cards Portrait ",-1)),e(l,null,{default:n(()=>[e(i,{sm:"6",cols:"12"},{default:n(()=>[e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"oval",orientation:"portrait"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"full",orientation:"portrait"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"round",orientation:"portrait"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"over",orientation:"portrait"})]),_:1})]),_:1})]),s("div",xt,[t[10]||(t[10]=s("h4",{class:"use-text-subtitle mb-3"}," Profile Cards Landscape ",-1)),e(l,null,{default:n(()=>[e(i,{md:"12"},{default:n(()=>[e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"full",orientation:"landscape"}),t[2]||(t[2]=s("br",null,null,-1)),t[3]||(t[3]=s("br",null,null,-1)),e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"oval",orientation:"landscape"}),t[4]||(t[4]=s("br",null,null,-1)),t[5]||(t[5]=s("br",null,null,-1)),e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"round",orientation:"landscape"}),t[6]||(t[6]=s("br",null,null,-1)),t[7]||(t[7]=s("br",null,null,-1)),e(u,{connection:100,favorites:10,albums:12,cover:"https://source.unsplash.com/random/?nice",name:"John Dalton",title:"Web Designer",type:"over",orientation:"landscape"}),t[8]||(t[8]=s("br",null,null,-1)),t[9]||(t[9]=s("br",null,null,-1))]),_:1})]),_:1})]),s("div",St,[t[11]||(t[11]=s("h4",{class:"use-text-subtitle mb-3"}," Product Cards Portrait ",-1)),e(l,null,{default:n(()=>[e(i,{sm:"6",cols:"12"},{default:n(()=>[e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"portrait",type:"full"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"portrait",type:"oval"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"portrait",type:"round"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"portrait",type:"over"})]),_:1})]),_:1})]),s("div",$t,[t[20]||(t[20]=s("h4",{class:"use-text-subtitle mb-3"}," Product Cards Landscape ",-1)),e(l,null,{default:n(()=>[e(i,{md:"12"},{default:n(()=>[e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"landscape",type:"full"}),t[12]||(t[12]=s("br",null,null,-1)),t[13]||(t[13]=s("br",null,null,-1)),e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"landscape",type:"oval"}),t[14]||(t[14]=s("br",null,null,-1)),t[15]||(t[15]=s("br",null,null,-1)),e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"landscape",type:"round"}),t[16]||(t[16]=s("br",null,null,-1)),t[17]||(t[17]=s("br",null,null,-1)),e(a,{rating:3,price:20,img:"https://source.unsplash.com/random/?nice",title:"Sed lacinia velit",desc:"Proin pretium arcu eget metus porta consecteturc",orientation:"landscape",type:"over"}),t[18]||(t[18]=s("br",null,null,-1)),t[19]||(t[19]=s("br",null,null,-1))]),_:1})]),_:1})]),s("div",Vt,[t[21]||(t[21]=s("h4",{class:"use-text-subtitle mb-3"}," Video Cards ",-1)),e(l,null,{default:n(()=>[(c(),w($,null,V(2,q=>e(i,{key:q,sm:"6",cols:"12"},{default:n(()=>[e(f,{title:"Sed lacinia velit, ut malesuada eros interdum a",orientation:"portrait",type:"video",thumb:"https://source.unsplash.com/random/?nice",href:"#"})]),_:2},1024)),64))]),_:1})]),s("div",qt,[t[22]||(t[22]=s("h4",{class:"use-text-subtitle mb-3"}," Image Cards ",-1)),e(l,null,{default:n(()=>[(c(),w($,null,V(2,q=>e(i,{key:q,sm:"6",cols:"12"},{default:n(()=>[e(f,{title:"Sed lacinia velit, ut malesuada eros interdum a",orientation:"portrait",type:"photo",thumb:"https://source.unsplash.com/random/?nice",href:"#"})]),_:2},1024)),64))]),_:1})]),s("div",Ct,[t[23]||(t[23]=s("h4",{class:"use-text-subtitle mb-3"}," News Cards Portrait ",-1)),e(l,null,{default:n(()=>[e(i,{sm:"6",cols:"12"},{default:n(()=>[e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"portrait",type:"full",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"portrait",type:"oval",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"portrait",type:"round",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"portrait",type:"over",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1})]),_:1})]),s("div",kt,[t[32]||(t[32]=s("h4",{class:"use-text-subtitle mb-3"}," News Cards Landscape ",-1)),e(l,null,{default:n(()=>[e(i,{md:"12"},{default:n(()=>[e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"landscape",type:"full",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[24]||(t[24]=s("br",null,null,-1)),t[25]||(t[25]=s("br",null,null,-1)),e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"landscape",type:"oval",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[26]||(t[26]=s("br",null,null,-1)),t[27]||(t[27]=s("br",null,null,-1)),e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"landscape",type:"round",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[28]||(t[28]=s("br",null,null,-1)),t[29]||(t[29]=s("br",null,null,-1)),e(m,{title:"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.",headline:"news",orientation:"landscape",type:"over",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[30]||(t[30]=s("br",null,null,-1)),t[31]||(t[31]=s("br",null,null,-1))]),_:1})]),_:1})]),s("div",Nt,[t[33]||(t[33]=s("h4",{class:"use-text-subtitle mb-3"}," Post Cards Portrait ",-1)),e(l,null,{default:n(()=>[e(i,{sm:"6",cols:"12"},{default:n(()=>[e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"portrait",type:"full",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"portrait",type:"oval",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"portrait",type:"round",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1}),e(i,{sm:"6",cols:"12"},{default:n(()=>[e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"portrait",type:"over",img:"https://source.unsplash.com/random/?nice",href:"#"})]),_:1})]),_:1})]),s("div",Wt,[t[42]||(t[42]=s("h4",{class:"use-text-subtitle mb-3"}," Post Cards Landscape ",-1)),e(l,null,{default:n(()=>[e(i,{md:"12"},{default:n(()=>[e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"landscape",type:"full",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[34]||(t[34]=s("br",null,null,-1)),t[35]||(t[35]=s("br",null,null,-1)),e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"landscape",type:"oval",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[36]||(t[36]=s("br",null,null,-1)),t[37]||(t[37]=s("br",null,null,-1)),e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"landscape",type:"round",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[38]||(t[38]=s("br",null,null,-1)),t[39]||(t[39]=s("br",null,null,-1)),e(r,{title:"Maecenas rutrum dolor sed nisi",desc:"Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant",date:"12 Nov 2020",orientation:"landscape",type:"over",img:"https://source.unsplash.com/random/?nice",href:"#"}),t[40]||(t[40]=s("br",null,null,-1)),t[41]||(t[41]=s("br",null,null,-1))]),_:1})]),_:1})])]),_:1}),e(i,{md:"3",cols:"12"},{default:n(()=>[e(P)]),_:1})]),_:1})]),_:1})])]),e(N)])}const Et=x(ht,[["render",Jt],["__scopeId","data-v-428b18e4"]]);export{Et as default};