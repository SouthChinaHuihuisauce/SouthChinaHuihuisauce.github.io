import{E as Y,G as Q,o as I,c as N,f as h,A as G,h as ee,j as qe,I as Te,F as ke,J as we,K as L,C as y,N as z,O as S,P as te,Q as B,R as oe,T as M,U as A,V as _e,W as P,X as Ce,_ as ze,r as _,b as ae,w as f,a as b,g as x,p as ue,t as W,d as je}from"./DE_E68rl.js";let $=Symbol("map"),V=Symbol("api"),be=Symbol("marker"),Me=Symbol("markerCluster"),U=Symbol("CustomMarker"),xe=Symbol("mapTilesLoaded"),Se="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var Ne=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(o=i;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[o]))return!1;for(o=i;o--!==0;)if(i=s[o],!r(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};class O{constructor({apiKey:e,channel:t,client:o,id:i="__googleMapsScriptId",libraries:s=[],language:a,region:n,version:p,mapIds:u,nonce:l,retries:d=3,url:m="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=p,this.apiKey=e,this.channel=t,this.client=o,this.id=i||"__googleMapsScriptId",this.libraries=s,this.language=a,this.region=n,this.mapIds=u,this.nonce=l,this.retries=d,this.url=m,O.instance){if(!Ne(this.options,O.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(O.instance.options)}`);return O.instance}O.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(o=>{o?t(o.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function Be(r){return class extends r.OverlayView{constructor(e){super();let{element:t,...o}=e;this.element=t,this.opts=o,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof r.LatLng?this.opts.position:new r.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let o=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-o;break;case"LEFT_CENTER":t=e.x,e=e.y-o/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-o/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-o;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-o;break;default:t=e.x-t/2,e=e.y-o/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let de,pe="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var re=L({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:pe,setup(r,{emit:e}){let t=y(),o=y(!1),i=y(),s=y(),a=y(!1);z($,i),z(V,s),z(xe,a);let n=()=>{const l={...r};Object.keys(l).forEach(m=>{l[m]===void 0&&delete l[m]});var d=m=>{var c;return m?{position:(c=s.value)===null||c===void 0?void 0:c.ControlPosition[m]}:{}};return d={scaleControlOptions:r.scaleControlStyle?{style:r.scaleControlStyle}:{},panControlOptions:d(r.panControlPosition),zoomControlOptions:d(r.zoomControlPosition),rotateControlOptions:d(r.rotateControlPosition),streetViewControlOptions:d(r.streetViewControlPosition),fullscreenControlOptions:d(r.fullscreenControlPosition),disableDefaultUI:r.disableDefaultUi},{...l,...d}},p=S([s,i],([l,d])=>{l&&d&&(l.event.addListenerOnce(d,"tilesloaded",()=>{a.value=!0}),setTimeout(p,0))},{immediate:!0}),u=l=>{s.value=P(l.maps),i.value=P(new l.maps.Map(t.value,n())),l=Be(s.value),s.value[U]=l,pe.forEach(d=>{var m;(m=i.value)===null||m===void 0||m.addListener(d,c=>e(d,c))}),o.value=!0,l=Object.keys(r).filter(d=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(d)).map(d=>Ce(r,d)),S([()=>r.center,()=>r.zoom,...l],([d,m],[c,g])=>{var v,k,C;const{center:R,zoom:q,...D}=n();(v=i.value)===null||v===void 0||v.setOptions(D),m!==void 0&&m!==g&&((k=i.value)===null||k===void 0||k.setZoom(m)),m=!c||d.lng!==c.lng||d.lat!==c.lat,d&&m&&((C=i.value)===null||C===void 0||C.panTo(d))})};return te(()=>{if(r.apiPromise&&r.apiPromise instanceof Promise)r.apiPromise.then(u);else{try{const{apiKey:l,region:d,version:m,language:c,libraries:g}=r;de=new O({apiKey:l,region:d,version:m,language:c,libraries:g})}catch(l){console.error(l)}de.load().then(u)}}),B(()=>{var l;a.value=!1,i.value&&((l=s.value)===null||l===void 0||l.event.clearInstanceListeners(i.value))}),{mapRef:t,ready:o,map:i,api:s,mapTilesLoaded:a}}});function ie(r,e){if(e===void 0&&(e={}),e=e.insertAt,r&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}}ie(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let $e=oe();Y("data-v-177d06e3");let Ve={ref:"mapRef",class:"mapdiv"};Q();let Re=$e(r=>(I(),N("div",null,[h("div",Ve,null,512),G(r.$slots,"default",{ready:r.ready,map:r.map,api:r.api,mapTilesLoaded:r.mapTilesLoaded},void 0,!0)])));re.render=Re;re.__scopeId="data-v-177d06e3";var F=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(o=i;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[o]))return!1;for(o=i;o--!==0;)if(i=s[o],!r(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};let Oe=(r,e,t,o)=>{const i=y(),s=M($,y()),a=M(V,y()),n=M(Me,y()),p=A(()=>!!(n.value&&a.value&&(i.value instanceof a.value.Marker||i.value instanceof a.value[U])));return S([s,t],(u,[l,d])=>{var m,c,g;u=!F(t.value,d)||s.value!==l,s.value&&a.value&&u&&(i.value?(i.value.setOptions(t.value),p.value&&((m=n.value)===null||m===void 0||m.removeMarker(i.value),(c=n.value)===null||c===void 0||c.addMarker(i.value))):(i.value=r==="Marker"?P(new a.value[r](t.value)):r===U?P(new a.value[r](t.value)):P(new a.value[r]({...t.value,map:s.value})),p.value?(g=n.value)===null||g===void 0||g.addMarker(i.value):i.value.setMap(s.value),e.forEach(v=>{var k;(k=i.value)===null||k===void 0||k.addListener(v,C=>o(v,C))})))},{immediate:!0}),B(()=>{var u,l;i.value&&((u=a.value)===null||u===void 0||u.event.clearInstanceListeners(i.value),p.value?(l=n.value)===null||l===void 0||l.removeMarker(i.value):i.value.setMap(null))}),i},me="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var Ze=L({name:"Marker",props:{options:{type:Object,required:!0}},emits:me,setup(r,{emit:e,expose:t,slots:o}){return r=Ce(r,"options"),e=Oe("Marker",me,r,e),z(be,e),t({marker:e}),()=>{var i;return(i=o.default)===null||i===void 0?void 0:i.call(o)}}});Se.concat(["bounds_changed"]);Se.concat(["center_changed","radius_changed"]);var Ae=L({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(r,{emit:e}){let t=y(null),o=M($,y()),i=M(V,y()),s=M(xe,y(!1)),a=y(!1),n=S([s,i,t],([l,d,m])=>{d&&l&&m&&(p(r.position),a.value=!0,e("content:loaded"),setTimeout(n,0))},{immediate:!0}),p=l=>{o.value&&i.value&&t.value&&o.value.controls[i.value.ControlPosition[l]].push(t.value)},u=l=>{if(o.value&&i.value){let d=null;l=i.value.ControlPosition[l],o.value.controls[l].forEach((m,c)=>{m===t.value&&(d=c)}),d!==null&&o.value.controls[l].removeAt(d)}};return B(()=>u(r.position)),S(()=>r.position,(l,d)=>{u(d),p(l)}),S(()=>r.index,l=>{l&&t.value&&(t.value.index=r.index)}),{controlRef:t,showContent:a}}});let Ue={ref:"controlRef"};Ae.render=function(r){return I(),N(ke,null,[ee(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),qe(h("div",Ue,[G(r.$slots,"default")],512),[[Te,r.showContent]])],2112)};let ce="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var se=L({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:ce,setup(r,{slots:e,emit:t}){let o=y(),i=y(),s=M($,y()),a=M(V,y()),n=M(be,y()),p,u=A(()=>{var l;return(l=e.default)===null||l===void 0?void 0:l.call(e).some(d=>d.type!==_e)});return te(()=>{S([s,()=>r.options],([,l],[d,m])=>{d=!F(l,m)||s.value!==d,s.value&&a.value&&d&&(o.value?(o.value.setOptions({...l,content:u.value?i.value:l.content}),n.value||o.value.open({map:s.value})):(o.value=P(new a.value.InfoWindow({...l,content:u.value?i.value:l.content})),n.value?p=n.value.addListener("click",()=>{o.value&&o.value.open({map:s.value,anchor:n.value})}):o.value.open({map:s.value}),ce.forEach(c=>{var g;(g=o.value)===null||g===void 0||g.addListener(c,v=>t(c,v))})))},{immediate:!0})}),B(()=>{var l;p&&p.remove(),o.value&&((l=a.value)===null||l===void 0||l.event.clearInstanceListeners(o.value),o.value.close())}),{infoWindow:o,infoWindowRef:i,hasSlotContent:u}}});ie(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let Fe=oe();Y("data-v-5b373d6e");let Ke={key:0,class:"info-window-wrapper"};Q();let Ge=Fe(r=>r.hasSlotContent?(I(),N("div",Ke,[h("div",we({ref:"infoWindowRef"},r.$attrs),[G(r.$slots,"default",{},void 0,!0)],16)])):ee("v-if",!0));se.render=Ge;se.__scopeId="data-v-5b373d6e";function X(r,e,t,o,i,s){if(!(i-o<=t)){var a=o+i>>1;Ie(r,e,a,o,i,s%2),X(r,e,t,o,a-1,s+1),X(r,e,t,a+1,i,s+1)}}function Ie(r,e,t,o,i,s){for(;i>o;){if(600<i-o){var a=i-o+1,n=t-o+1,p=Math.log(a),u=.5*Math.exp(2*p/3);p=.5*Math.sqrt(p*u*(a-u)/a)*(0>n-a/2?-1:1),Ie(r,e,t,Math.max(o,Math.floor(t-n*u/a+p)),Math.min(i,Math.floor(t+(a-n)*u/a+p)),s)}for(a=e[2*t+s],n=o,u=i,T(r,e,o,t),e[2*i+s]>a&&T(r,e,o,i);n<u;){for(T(r,e,n,u),n++,u--;e[2*n+s]<a;)n++;for(;e[2*u+s]>a;)u--}e[2*o+s]===a?T(r,e,o,u):(u++,T(r,e,u,i)),u<=t&&(o=u+1),t<=u&&(i=u-1)}}function T(r,e,t,o){H(r,t,o),H(e,2*t,2*o),H(e,2*t+1,2*o+1)}function H(r,e,t){let o=r[e];r[e]=r[t],r[t]=o}let De=r=>r[0],We=r=>r[1];class he{constructor(e,t=De,o=We,i=64,s=Float64Array){this.nodeSize=i,this.points=e;let a=this.ids=new(65536>e.length?Uint16Array:Uint32Array)(e.length);s=this.coords=new s(2*e.length);for(let n=0;n<e.length;n++)a[n]=n,s[2*n]=t(e[n]),s[2*n+1]=o(e[n]);X(a,s,i,0,a.length-1,0)}range(e,t,o,i){{var s=this.ids,a=this.coords,n=this.nodeSize;let u=[0,s.length-1,0],l=[],d,m;for(;u.length;){var p=u.pop();let c=u.pop(),g=u.pop();if(c-g<=n){for(p=g;p<=c;p++)d=a[2*p],m=a[2*p+1],d>=e&&d<=o&&m>=t&&m<=i&&l.push(s[p]);continue}let v=Math.floor((g+c)/2);d=a[2*v],m=a[2*v+1],d>=e&&d<=o&&m>=t&&m<=i&&l.push(s[v]);let k=(p+1)%2;(p===0?e<=d:t<=m)&&(u.push(g),u.push(v-1),u.push(k)),(p===0?o>=d:i>=m)&&(u.push(v+1),u.push(c),u.push(k))}e=l}return e}within(e,t,o){{var i=this.ids,s=this.coords,a=this.nodeSize;let d=[0,i.length-1,0],m=[],c=o*o;for(;d.length;){var n=d.pop();let g=d.pop();var p=d.pop();if(g-p<=a){for(n=p;n<=g;n++){p=s[2*n]-e;var u=s[2*n+1]-t;p=p*p+u*u,p<=c&&m.push(i[n])}continue}u=Math.floor((p+g)/2);let v=s[2*u],k=s[2*u+1];{var l=v-e;let C=k-t;l=l*l+C*C}l<=c&&m.push(i[u]),l=(n+1)%2,(n===0?e-o<=v:t-o<=k)&&(d.push(p),d.push(u-1),d.push(l)),(n===0?e+o>=v:t+o>=k)&&(d.push(u+1),d.push(g),d.push(l))}e=m}return e}}let He={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:r=>r},K=Math.fround||(r=>e=>(r[0]=+e,r[0]))(new Float32Array(1));class Xe{constructor(e){this.options=j(Object.create(He),e),this.trees=Array(this.options.maxZoom+1)}load(e){let{log:t,minZoom:o,maxZoom:i,nodeSize:s}=this.options;t&&console.time("total time");var a=`prepare ${e.length} points`;t&&console.time(a),this.points=e;let n=[];for(let p=0;p<e.length;p++)e[p].geometry&&n.push(Ye(e[p],p));for(this.trees[i+1]=new he(n,ge,fe,s,Float32Array),t&&console.timeEnd(a),e=i;e>=o;e--)a=+Date.now(),n=this._cluster(n,e),this.trees[e]=new he(n,ge,fe,s,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,n.length,+Date.now()-a);return t&&console.timeEnd("total time"),this}getClusters(e,t){let o=((e[0]+180)%360+360)%360-180;var i=Math.max(-90,Math.min(90,e[1])),s=e[2]===180?180:((e[2]+180)%360+360)%360-180;let a=Math.max(-90,Math.min(90,e[3]));if(360<=e[2]-e[0])o=-180,s=180;else if(o>s){var n=this.getClusters([o,i,180,a],t);return i=this.getClusters([-180,i,s,a],t),n.concat(i)}t=this.trees[this._limitZoom(t)],s=t.range(o/360+.5,Z(a),s/360+.5,Z(i)),i=[];for(n of s)s=t.points[n],i.push(s.numPoints?ve(s):this.points[s.index]);return i}getChildren(e){var t=this._getOriginId(e),o=this._getOriginZoom(e);let i=this.trees[o];if(!i||(t=i.points[t],!t))throw Error("No cluster with the specified id.");t=i.within(t.x,t.y,this.options.radius/(this.options.extent*Math.pow(2,o-1))),o=[];for(let s of t)t=i.points[s],t.parentId===e&&o.push(t.numPoints?ve(t):this.points[t.index]);if(o.length===0)throw Error("No cluster with the specified id.");return o}getLeaves(e,t,o){let i=[];return this._appendLeaves(i,e,t||10,o||0,0),i}getTile(e,t,o){let i=this.trees[this._limitZoom(e)];e=Math.pow(2,e);let{extent:s,radius:a}=this.options,n=a/s,p=(o-n)/e,u=(o+1+n)/e,l={features:[]};return this._addTileFeatures(i.range((t-n)/e,p,(t+1+n)/e,u),i.points,t,o,e,l),t===0&&this._addTileFeatures(i.range(1-n/e,p,1,u),i.points,e,o,e,l),t===e-1&&this._addTileFeatures(i.range(0,p,n/e,u),i.points,-1,o,e,l),l.features.length?l:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom&&(e=this.getChildren(e),t++,e.length===1);)e=e[0].properties.cluster_id;return t}_appendLeaves(e,t,o,i,s){t=this.getChildren(t);for(let a of t)if((t=a.properties)&&t.cluster?s=s+t.point_count<=i?s+t.point_count:this._appendLeaves(e,t.cluster_id,o,i,s):s<i?s++:e.push(a),e.length===o)break;return s}_addTileFeatures(e,t,o,i,s,a){for(let u of e){e=t[u];let l=e.numPoints;var n=void 0;let d;var p=void 0;l?(n=Pe(e),d=e.x,p=e.y):(p=this.points[e.index],n=p.properties,d=p.geometry.coordinates[0]/360+.5,p=Z(p.geometry.coordinates[1])),n={type:1,geometry:[[Math.round(this.options.extent*(d*s-o)),Math.round(this.options.extent*(p*s-i))]],tags:n};let m;l?m=e.id:this.options.generateId?m=e.index:this.points[e.index].id&&(m=this.points[e.index].id),m!==void 0&&(n.id=m),a.features.push(n)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){let o=[],{radius:i,extent:s,reduce:a,minPoints:n}=this.options,p=i/(s*Math.pow(2,t));for(let c=0;c<e.length;c++){var u=e[c];if(u.zoom<=t)continue;u.zoom=t;let g=this.trees[t+1];var l=g.within(u.x,u.y,p),d=u.numPoints||1;let v=d;for(let k of l){var m=g.points[k];m.zoom>t&&(v+=m.numPoints||1)}if(v>d&&v>=n){m=u.x*d;let k=u.y*d;d=a&&1<d?this._map(u,!0):null;let C=(c<<5)+(t+1)+this.points.length;for(let R of l){if(l=g.points[R],l.zoom<=t)continue;l.zoom=t;let q=l.numPoints||1;m+=l.x*q,k+=l.y*q,l.parentId=C,a&&(d||(d=this._map(u,!0)),a(d,this._map(l)))}u.parentId=C,o.push(Je(m/v,k/v,C,v,d))}else if(o.push(u),1<v)for(let k of l)u=g.points[k],u.zoom<=t||(u.zoom=t,o.push(u))}return o}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?j({},e.properties):e.properties;e=this.points[e.index].properties;let o=this.options.map(e);return t&&o===e?j({},o):o}}function Je(r,e,t,o,i){return{x:K(r),y:K(e),zoom:1/0,id:t,parentId:-1,numPoints:o,properties:i}}function Ye(r,e){let[t,o]=r.geometry.coordinates;return{x:K(t/360+.5),y:K(Z(o)),zoom:1/0,index:e,parentId:-1}}function ve(r){var e=r.id,t=Pe(r);return{type:"Feature",id:e,properties:t,geometry:{type:"Point",coordinates:[360*(r.x-.5),360*Math.atan(Math.exp((180-360*r.y)*Math.PI/180))/Math.PI-90]}}}function Pe(r){let e=r.numPoints,t=1e4<=e?`${Math.round(e/1e3)}k`:1e3<=e?`${Math.round(e/100)/10}k`:e;return j(j({},r.properties),{cluster:!0,cluster_id:r.id,point_count:e,point_count_abbreviated:t})}function Z(r){return r=Math.sin(r*Math.PI/180),r=.5-.25*Math.log((1+r)/(1-r))/Math.PI,0>r?0:1<r?1:r}function j(r,e){for(let t in e)r[t]=e[t];return r}function ge(r){return r.x}function fe(r){return r.y}class J{constructor({markers:e,position:t}){this.markers=e,t&&(this._position=t instanceof google.maps.LatLng?t:new google.maps.LatLng(t))}get bounds(){if(this.markers.length!==0||this._position)return this.markers.reduce((e,t)=>e.extend(t.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class Qe{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return et(e)}}let et=r=>r.map(e=>new J({position:e.getPosition(),markers:[e]}));class tt extends Qe{constructor(e){var{maxZoom:t,radius:o=60}=e,i=["maxZoom","radius"],s={},a;for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>i.indexOf(a)&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>i.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]])}super({maxZoom:t}),this.superCluster=new Xe(Object.assign({maxZoom:this.maxZoom,radius:o},s)),this.state={zoom:null}}calculate(e){let t=!1;if(!F(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var o=this.markers.map(i=>({type:"Feature",geometry:{type:"Point",coordinates:[i.getPosition().lng(),i.getPosition().lat()]},properties:{marker:i}}));this.superCluster.load(o)}return o={zoom:e.map.getZoom()},t||this.state.zoom>this.maxZoom&&o.zoom>this.maxZoom||(t=t||!F(this.state,o)),this.state=o,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,t]},properties:o}){return o.cluster?new J({markers:this.superCluster.getLeaves(o.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:t,lng:e})}):(e=o.marker,new J({markers:[e],position:e.getPosition()}))}}class ot{constructor(e,t){this.markers={sum:e.length},e=t.map(i=>i.count);let o=e.reduce((i,s)=>i+s,0);this.clusters={count:t.length,markers:{mean:o/t.length,sum:o,min:Math.min(...e),max:Math.max(...e)}}}}class rt{render({count:e,position:t},o){return o=window.btoa(`
  <svg fill="${e>Math.max(10,o.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`),new google.maps.Marker({position:t,icon:{url:`data:image/svg+xml;base64,${o}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}class ne{constructor(){var e=ne,t=google.maps.OverlayView;for(let o in t.prototype)e.prototype[o]=t.prototype[o]}}var E,le=E||(E={});le.CLUSTERING_BEGIN="clusteringbegin";le.CLUSTERING_END="clusteringend";le.CLUSTER_CLICK="click";let it=(r,e,t)=>{t.fitBounds(e.bounds)};class st extends ne{constructor({map:e,markers:t=[],algorithm:o=new tt({}),renderer:i=new rt,onClusterClick:s=it}){super(),this.markers=[...t],this.clusters=[],this.algorithm=o,this.renderer=i,this.onClusterClick=s,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(o=>{this.addMarker(o,!0)}),t||this.render()}removeMarker(e,t){let o=this.markers.indexOf(e);return o===-1?!1:(e.setMap(null),this.markers.splice(o,1),t||this.render(),!0)}removeMarkers(e,t){let o=!1;return e.forEach(i=>{o=this.removeMarker(i,!0)||o}),o&&!t&&this.render(),o}clearMarkers(e){this.markers.length=0,e||this.render()}render(){let e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,E.CLUSTERING_BEGIN,this);let{clusters:t,changed:o}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(o||o==null)&&(this.reset(),this.clusters=t,this.renderClusters()),google.maps.event.trigger(this,E.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){let e=new ot(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(o=>{o.markers.length===1?o.marker=o.markers[0]:(o.marker=this.renderer.render(o,e),this.onClusterClick&&o.marker.addListener("click",i=>{google.maps.event.trigger(this,E.CLUSTER_CLICK,o),this.onClusterClick(i,o,t)})),o.marker.setMap(t)})}}let ye=Object.values(E);var nt=L({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:ye,setup(r,{emit:e,expose:t,slots:o}){let i=y(),s=M($,y()),a=M(V,y());return z(Me,i),S(s,()=>{s.value&&(i.value=P(new st({map:s.value,...r.options})),ye.forEach(n=>{var p;(p=i.value)===null||p===void 0||p.addListener(n,u=>e(n,u))}))},{immediate:!0}),B(()=>{var n;i.value&&((n=a.value)===null||n===void 0||n.event.clearInstanceListeners(i.value),i.value.clearMarkers(),i.value.setMap(null))}),t({markerCluster:i}),()=>{var n;return(n=o.default)===null||n===void 0?void 0:n.call(o)}}}),Ee=L({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(r,{slots:e,emit:t}){let o=y(),i=y(),s=A(()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e).some(p=>p.type!==_e)}),a=A(()=>({...r.options,element:o.value}));return te(()=>{i=Oe(U,[],a,t)}),{customMarkerRef:o,customMarker:i,hasSlotContent:s}}});ie(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let lt=oe();Y("data-v-b9d5ec8a");let at={key:0,class:"custom-marker-wrapper"};Q();let ut=lt(r=>r.hasSlotContent?(I(),N("div",at,[h("div",we({ref:"customMarkerRef",style:{cursor:r.$attrs.onClick?"pointer":void 0}},r.$attrs),[G(r.$slots,"default",{},void 0,!0)],16)])):ee("v-if",!0));Ee.render=ut;Ee.__scopeId="data-v-b9d5ec8a";const dt={components:{GoogleMap:re,Marker:Ze,MarkerCluster:nt,InfoWindow:se},props:{full:{type:Boolean,default:!1}},data:()=>({currentLocation:{},locations:[{lat:44.933076,lng:15.629058}],valid:!0,snackbar:!1,name:"",nameRules:[r=>!!r||"Name is required"],email:"",emailRules:[r=>!!r||"E-mail is required",r=>/.+@.+\..+/.test(r)||"E-mail must be valid"],phone:"",company:"",message:"",checkbox:!1}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)}}},pt={class:"page-wrap"},mt={class:"form"},ct={class:"text-center"},ht={class:"use-text-title2 mb-3"},vt={class:"form-control-label"},gt={href:"#",class:"link"},ft={class:"btn-area"},yt={class:"bubel"};function kt(r,e,t,o,i,s){const a=_("v-icon"),n=_("v-btn"),p=_("v-snackbar"),u=_("v-text-field"),l=_("v-col"),d=_("v-textarea"),m=_("v-row"),c=_("v-checkbox"),g=_("v-form"),v=_("v-card"),k=_("InfoWindow"),C=_("Marker"),R=_("MarkerCluster"),q=_("GoogleMap"),D=_("v-container");return I(),ae("div",pt,[h(p,{modelValue:r.snackbar,"onUpdate:modelValue":e[1]||(e[1]=w=>r.snackbar=w),timeout:4e3,top:"",right:"",class:"notification"},{default:f(()=>[e[9]||(e[9]=b("div",{class:"action"}," Message Sent ",-1)),h(n,{text:"",icon:"",onClick:e[0]||(e[0]=w=>r.snackbar=!1)},{default:f(()=>[h(a,null,{default:f(()=>e[8]||(e[8]=[x("mdi-close")])),_:1})]),_:1})]),_:1},8,["modelValue"]),h(D,{class:"inner-wrap"},{default:f(()=>[h(m,{align:"center"},{default:f(()=>[h(l,{md:"6",cols:"12",class:"pe-md-0 wrap-deco"},{default:f(()=>[h(v,{class:ue([{"map-form":t.full},"form-box"])},{default:f(()=>[b("div",mt,[b("div",ct,[b("h4",ht,W(r.$t("common.contact_title2")),1),e[10]||(e[10]=b("p",null,"Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.",-1))]),h(g,{ref:"form",modelValue:r.valid,"onUpdate:modelValue":e[7]||(e[7]=w=>r.valid=w)},{default:f(()=>[h(m,{class:"spacing6"},{default:f(()=>[h(l,{cols:"12",sm:"12",class:"px-6"},{default:f(()=>[h(u,{modelValue:r.name,"onUpdate:modelValue":e[2]||(e[2]=w=>r.name=w),rules:r.nameRules,label:r.$t("common.form_name"),required:""},null,8,["modelValue","rules","label"])]),_:1}),h(l,{cols:"12",sm:"12",class:"px-6"},{default:f(()=>[h(u,{modelValue:r.email,"onUpdate:modelValue":e[3]||(e[3]=w=>r.email=w),rules:r.emailRules,label:r.$t("common.form_email"),required:""},null,8,["modelValue","rules","label"])]),_:1}),h(l,{cols:"12",sm:"12",class:"px-6"},{default:f(()=>[h(u,{modelValue:r.phone,"onUpdate:modelValue":e[4]||(e[4]=w=>r.phone=w),label:r.$t("common.form_phone")},null,8,["modelValue","label"])]),_:1}),h(l,{cols:"12",class:"px-6"},{default:f(()=>[h(d,{modelValue:r.message,"onUpdate:modelValue":e[5]||(e[5]=w=>r.message=w),rows:"6",label:r.$t("common.form_message")},null,8,["modelValue","label"])]),_:1})]),_:1}),b("div",vt,[h(c,{modelValue:r.checkbox,"onUpdate:modelValue":e[6]||(e[6]=w=>r.checkbox=w),color:"secondary",rules:[w=>!!w||"You must agree to continue!"],label:r.$t("common.form_terms"),required:""},null,8,["modelValue","rules","label"]),b("span",null,[b("a",gt,W(r.$t("common.form_privacy")),1)])]),b("div",ft,[h(n,{size:"large",block:"",color:"primary",onClick:s.validate},{default:f(()=>[x(W(r.$t("common.form_send")),1)]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])])]),_:1},8,["class"])]),_:1}),h(l,{md:"6",cols:"12",class:"ps-md-0"},{default:f(()=>[h(v,{class:ue([{full:t.full},"map"]),raised:""},{default:f(()=>[h(q,{zoom:5,center:{lat:r.locations[0].lat,lng:r.locations[0].lng},style:{width:"100%",height:"100%"}},{default:f(()=>[h(k,{options:{position:{lat:r.locations[0].lat+1,lng:r.locations[0].lng}}},{default:f(()=>[b("div",yt,[e[17]||(e[17]=b("h6",{class:"use-text-subtitle pb-1 px-3"}," Head Quarter ",-1)),h(m,{class:"ma-3"},{default:f(()=>[h(l,{item:"",sm:"6",cols:"12"},{default:f(()=>[b("p",null,[h(a,{class:"icon"},{default:f(()=>e[11]||(e[11]=[x(" mdi-phone ")])),_:1}),e[12]||(e[12]=x(" +98 765 432 10 "))])]),_:1}),h(l,{item:"",sm:"6",cols:"12"},{default:f(()=>[b("p",null,[h(a,{class:"icon"},{default:f(()=>e[13]||(e[13]=[x(" mdi-email ")])),_:1}),e[14]||(e[14]=x(" hello@luxi.com "))])]),_:1}),h(l,{item:"",sm:"12",cols:"12"},{default:f(()=>[b("p",null,[h(a,{class:"icon"},{default:f(()=>e[15]||(e[15]=[x(" mdi-map-marker ")])),_:1}),e[16]||(e[16]=x(" Lorem ipsum street Block C - Vestibullum Building "))])]),_:1})]),_:1})])]),_:1},8,["options"]),h(R,null,{default:f(()=>[(I(!0),ae(ke,null,je(r.locations,(w,Le)=>(I(),N(C,{key:Le,options:{position:w}},null,8,["options"]))),128))]),_:1})]),_:1},8,["center"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1})])}const _t=ze(dt,[["render",kt],["__scopeId","data-v-2c009dc6"]]);export{_t as C};
