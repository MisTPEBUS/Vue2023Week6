import{k as I,l as At,_ as vt,o as U,c as Q,a as C,t as K,f as J,g as Tt,v as Dt}from"./index-92e8dc37.js";var Et={exports:{}},X={exports:{}},Z={exports:{}};/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function wt(){return ct||(ct=1,function(A,w){(function(e,o){A.exports=o()})(I,function(){const e=new Map;return{set(u,s,n){e.has(u)||e.set(u,new Map);const i=e.get(u);if(!i.has(s)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(s,n)},get(u,s){return e.has(u)&&e.get(u).get(s)||null},remove(u,s){if(!e.has(u))return;const n=e.get(u);n.delete(s),n.size===0&&e.delete(u)}}})}(Z)),Z.exports}var tt={exports:{}},z={exports:{}};/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function F(){return lt||(lt=1,function(A,w){(function(e,o){o(w)})(I,function(e){const s="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(a,r)=>`#${CSS.escape(r)}`)),t),i=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},d=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:r}=window.getComputedStyle(t);const y=Number.parseFloat(a),T=Number.parseFloat(r);return!y&&!T?0:(a=a.split(",")[0],r=r.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(r))*1e3)},E=t=>{t.dispatchEvent(new Event(s))},_=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),f=t=>_(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(n(t)):null,p=t=>{if(!_(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",r=t.closest("details:not([open])");if(!r)return a;if(r!==t){const y=t.closest("summary");if(y&&y.parentNode!==r||y===null)return!1}return a},N=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",M=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?M(t.parentNode):null},k=()=>{},v=t=>{t.offsetHeight},L=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],B=t=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of x)a()}),x.push(t)):t()},P=()=>document.documentElement.dir==="rtl",l=t=>{B(()=>{const a=L();if(a){const r=t.NAME,y=a.fn[r];a.fn[r]=t.jQueryInterface,a.fn[r].Constructor=t,a.fn[r].noConflict=()=>(a.fn[r]=y,t.jQueryInterface)}})},c=(t,a=[],r=t)=>typeof t=="function"?t(...a):r,m=(t,a,r=!0)=>{if(!r){c(t);return}const y=5,T=d(a)+y;let D=!1;const O=({target:q})=>{q===a&&(D=!0,a.removeEventListener(s,O),c(t))};a.addEventListener(s,O),setTimeout(()=>{D||E(a)},T)},g=(t,a,r,y)=>{const T=t.length;let D=t.indexOf(a);return D===-1?!r&&y?t[T-1]:t[0]:(D+=r?1:-1,y&&(D=(D+T)%T),t[Math.max(0,Math.min(D,T-1))])};e.defineJQueryPlugin=l,e.execute=c,e.executeAfterTransition=m,e.findShadowRoot=M,e.getElement=f,e.getNextActiveElement=g,e.getTransitionDurationFromElement=d,e.getUID=h,e.getjQuery=L,e.isDisabled=N,e.isElement=_,e.isRTL=P,e.isVisible=p,e.noop=k,e.onDOMContentLoaded=B,e.parseSelector=n,e.reflow=v,e.toType=i,e.triggerTransitionEnd=E,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(z,z.exports)),z.exports}/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function W(){return ut||(ut=1,function(A,w){(function(e,o){A.exports=o(F())})(I,function(e){const o=/[^.]*(?=\..*)\.|.*/,u=/\..*/,s=/::\d+$/,n={};let i=1;const h={mouseenter:"mouseover",mouseleave:"mouseout"},d=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E(l,c){return c&&`${c}::${i++}`||l.uidEvent||i++}function _(l){const c=E(l);return l.uidEvent=c,n[c]=n[c]||{},n[c]}function f(l,c){return function m(g){return P(g,{delegateTarget:l}),m.oneOff&&B.off(l,g.type,c),c.apply(l,[g])}}function p(l,c,m){return function g(t){const a=l.querySelectorAll(c);for(let{target:r}=t;r&&r!==this;r=r.parentNode)for(const y of a)if(y===r)return P(t,{delegateTarget:r}),g.oneOff&&B.off(l,t.type,c,m),m.apply(r,[t])}}function N(l,c,m=null){return Object.values(l).find(g=>g.callable===c&&g.delegationSelector===m)}function M(l,c,m){const g=typeof c=="string",t=g?m:c||m;let a=x(l);return d.has(a)||(a=l),[g,t,a]}function k(l,c,m,g,t){if(typeof c!="string"||!l)return;let[a,r,y]=M(c,m,g);c in h&&(r=(G=>function(b){if(!b.relatedTarget||b.relatedTarget!==b.delegateTarget&&!b.delegateTarget.contains(b.relatedTarget))return G.call(this,b)})(r));const T=_(l),D=T[y]||(T[y]={}),O=N(D,r,a?m:null);if(O){O.oneOff=O.oneOff&&t;return}const q=E(r,c.replace(o,"")),R=a?p(l,m,r):f(l,r);R.delegationSelector=a?m:null,R.callable=r,R.oneOff=t,R.uidEvent=q,D[q]=R,l.addEventListener(y,R,a)}function v(l,c,m,g,t){const a=N(c[m],g,t);a&&(l.removeEventListener(m,a,!!t),delete c[m][a.uidEvent])}function L(l,c,m,g){const t=c[m]||{};for(const[a,r]of Object.entries(t))a.includes(g)&&v(l,c,m,r.callable,r.delegationSelector)}function x(l){return l=l.replace(u,""),h[l]||l}const B={on(l,c,m,g){k(l,c,m,g,!1)},one(l,c,m,g){k(l,c,m,g,!0)},off(l,c,m,g){if(typeof c!="string"||!l)return;const[t,a,r]=M(c,m,g),y=r!==c,T=_(l),D=T[r]||{},O=c.startsWith(".");if(typeof a<"u"){if(!Object.keys(D).length)return;v(l,T,r,a,t?m:null);return}if(O)for(const q of Object.keys(T))L(l,T,q,c.slice(1));for(const[q,R]of Object.entries(D)){const $=q.replace(s,"");(!y||c.includes($))&&v(l,T,r,R.callable,R.delegationSelector)}},trigger(l,c,m){if(typeof c!="string"||!l)return null;const g=e.getjQuery(),t=x(c),a=c!==t;let r=null,y=!0,T=!0,D=!1;a&&g&&(r=g.Event(c,m),g(l).trigger(r),y=!r.isPropagationStopped(),T=!r.isImmediatePropagationStopped(),D=r.isDefaultPrevented());const O=P(new Event(c,{bubbles:y,cancelable:!0}),m);return D&&O.preventDefault(),T&&l.dispatchEvent(O),O.defaultPrevented&&r&&r.preventDefault(),O}};function P(l,c={}){for(const[m,g]of Object.entries(c))try{l[m]=g}catch{Object.defineProperty(l,m,{configurable:!0,get(){return g}})}return l}return B})}(tt)),tt.exports}var et={exports:{}},nt={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function yt(){return dt||(dt=1,function(A,w){(function(e,o){A.exports=o()})(I,function(){function e(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function o(s){return s.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(s,n,i){s.setAttribute(`data-bs-${o(n)}`,i)},removeDataAttribute(s,n){s.removeAttribute(`data-bs-${o(n)}`)},getDataAttributes(s){if(!s)return{};const n={},i=Object.keys(s.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of i){let d=h.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),n[d]=e(s.dataset[h])}return n},getDataAttribute(s,n){return e(s.getAttribute(`data-bs-${o(n)}`))}}})}(nt)),nt.exports}/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ft;function at(){return ft||(ft=1,function(A,w){(function(e,o){A.exports=o(yt(),F())})(I,function(e,o){class u{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,i){const h=o.isElement(i)?e.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...o.isElement(i)?e.getDataAttributes(i):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,i=this.constructor.DefaultType){for(const[h,d]of Object.entries(i)){const E=n[h],_=o.isElement(E)?"element":o.toType(E);if(!new RegExp(d).test(_))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${_}" but expected type "${d}".`)}}}return u})}(et)),et.exports}/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function Nt(){return ht||(ht=1,function(A,w){(function(e,o){A.exports=o(wt(),W(),at(),F())})(I,function(e,o,u,s){const n="5.3.3";class i extends u{constructor(d,E){super(),d=s.getElement(d),d&&(this._element=d,this._config=this._getConfig(E),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),o.off(this._element,this.constructor.EVENT_KEY);for(const d of Object.getOwnPropertyNames(this))this[d]=null}_queueCallback(d,E,_=!0){s.executeAfterTransition(d,E,_)}_getConfig(d){return d=this._mergeConfigObj(d,this._element),d=this._configAfterMerge(d),this._typeCheckConfig(d),d}static getInstance(d){return e.get(s.getElement(d),this.DATA_KEY)}static getOrCreateInstance(d,E={}){return this.getInstance(d)||new this(d,typeof E=="object"?E:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(d){return`${d}${this.EVENT_KEY}`}}return i})}(X)),X.exports}var st={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function H(){return pt||(pt=1,function(A,w){(function(e,o){A.exports=o(F())})(I,function(e){const o=s=>{let n=s.getAttribute("data-bs-target");if(!n||n==="#"){let i=s.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),n=i&&i!=="#"?i.trim():null}return n?n.split(",").map(i=>e.parseSelector(i)).join(","):null},u={find(s,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,s))},findOne(s,n=document.documentElement){return Element.prototype.querySelector.call(n,s)},children(s,n){return[].concat(...s.children).filter(i=>i.matches(n))},parents(s,n){const i=[];let h=s.parentNode.closest(n);for(;h;)i.push(h),h=h.parentNode.closest(n);return i},prev(s,n){let i=s.previousElementSibling;for(;i;){if(i.matches(n))return[i];i=i.previousElementSibling}return[]},next(s,n){let i=s.nextElementSibling;for(;i;){if(i.matches(n))return[i];i=i.nextElementSibling}return[]},focusableChildren(s){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(n,s).filter(i=>!e.isDisabled(i)&&e.isVisible(i))},getSelectorFromElement(s){const n=o(s);return n&&u.findOne(n)?n:null},getElementFromSelector(s){const n=o(s);return n?u.findOne(n):null},getMultipleElementsFromSelector(s){const n=o(s);return n?u.find(n):[]}};return u})}(st)),st.exports}var it={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mt;function St(){return mt||(mt=1,function(A,w){(function(e,o){A.exports=o(W(),at(),F())})(I,function(e,o,u){const s="backdrop",n="fade",i="show",h=`mousedown.bs.${s}`,d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},E={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class _ extends o{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return d}static get DefaultType(){return E}static get NAME(){return s}show(p){if(!this._config.isVisible){u.execute(p);return}this._append();const N=this._getElement();this._config.isAnimated&&u.reflow(N),N.classList.add(i),this._emulateAnimation(()=>{u.execute(p)})}hide(p){if(!this._config.isVisible){u.execute(p);return}this._getElement().classList.remove(i),this._emulateAnimation(()=>{this.dispose(),u.execute(p)})}dispose(){this._isAppended&&(e.off(this._element,h),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(n),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=u.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),e.on(p,h,()=>{u.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){u.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return _})}(it)),it.exports}var j={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _t;function Ct(){return _t||(_t=1,function(A,w){(function(e,o){o(w,W(),H(),F())})(I,function(e,o,u,s){const n=(i,h="hide")=>{const d=`click.dismiss${i.EVENT_KEY}`,E=i.NAME;o.on(document,d,`[data-bs-dismiss="${E}"]`,function(_){if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),s.isDisabled(this))return;const f=u.getElementFromSelector(this)||this.closest(`.${E}`);i.getOrCreateInstance(f)[h]()})};e.enableDismissTrigger=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(j,j.exports)),j.exports}var ot={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gt;function Ot(){return gt||(gt=1,function(A,w){(function(e,o){A.exports=o(W(),H(),at())})(I,function(e,o,u){const s="focustrap",i=".bs.focustrap",h=`focusin${i}`,d=`keydown.tab${i}`,E="Tab",_="forward",f="backward",p={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class M extends u{constructor(v){super(),this._config=this._getConfig(v),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return p}static get DefaultType(){return N}static get NAME(){return s}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,i),e.on(document,h,v=>this._handleFocusin(v)),e.on(document,d,v=>this._handleKeydown(v)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,i))}_handleFocusin(v){const{trapElement:L}=this._config;if(v.target===document||v.target===L||L.contains(v.target))return;const x=o.focusableChildren(L);x.length===0?L.focus():this._lastTabNavDirection===f?x[x.length-1].focus():x[0].focus()}_handleKeydown(v){v.key===E&&(this._lastTabNavDirection=v.shiftKey?f:_)}}return M})}(ot)),ot.exports}var rt={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bt;function Mt(){return bt||(bt=1,function(A,w){(function(e,o){A.exports=o(yt(),H(),F())})(I,function(e,o,u){const s=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n=".sticky-top",i="padding-right",h="margin-right";class d{constructor(){this._element=document.body}getWidth(){const _=document.documentElement.clientWidth;return Math.abs(window.innerWidth-_)}hide(){const _=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,i,f=>f+_),this._setElementAttributes(s,i,f=>f+_),this._setElementAttributes(n,h,f=>f-_)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,i),this._resetElementAttributes(s,i),this._resetElementAttributes(n,h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(_,f,p){const N=this.getWidth(),M=k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+N)return;this._saveInitialAttribute(k,f);const v=window.getComputedStyle(k).getPropertyValue(f);k.style.setProperty(f,`${p(Number.parseFloat(v))}px`)};this._applyManipulationCallback(_,M)}_saveInitialAttribute(_,f){const p=_.style.getPropertyValue(f);p&&e.setDataAttribute(_,f,p)}_resetElementAttributes(_,f){const p=N=>{const M=e.getDataAttribute(N,f);if(M===null){N.style.removeProperty(f);return}e.removeDataAttribute(N,f),N.style.setProperty(f,M)};this._applyManipulationCallback(_,p)}_applyManipulationCallback(_,f){if(u.isElement(_)){f(_);return}for(const p of o.find(_,this._element))f(p)}}return d})}(rt)),rt.exports}/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(A,w){(function(e,o){A.exports=o(Nt(),W(),H(),St(),Ct(),Ot(),F(),Mt())})(I,function(e,o,u,s,n,i,h,d){const E="modal",f=".bs.modal",p=".data-api",N="Escape",M=`hide${f}`,k=`hidePrevented${f}`,v=`hidden${f}`,L=`show${f}`,x=`shown${f}`,B=`resize${f}`,P=`click.dismiss${f}`,l=`mousedown.dismiss${f}`,c=`keydown.dismiss${f}`,m=`click${f}${p}`,g="modal-open",t="fade",a="show",r="modal-static",y=".modal.show",T=".modal-dialog",D=".modal-body",O='[data-bs-toggle="modal"]',q={backdrop:!0,focus:!0,keyboard:!0},R={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class $ extends e{constructor(b,S){super(b,S),this._dialog=u.findOne(T,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new d,this._addEventListeners()}static get Default(){return q}static get DefaultType(){return R}static get NAME(){return E}toggle(b){return this._isShown?this.hide():this.show(b)}show(b){this._isShown||this._isTransitioning||o.trigger(this._element,L,{relatedTarget:b}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(g),this._adjustDialog(),this._backdrop.show(()=>this._showElement(b)))}hide(){!this._isShown||this._isTransitioning||o.trigger(this._element,M).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(a),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){o.off(window,f),o.off(this._dialog,f),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new s({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new i({trapElement:this._element})}_showElement(b){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const S=u.findOne(D,this._dialog);S&&(S.scrollTop=0),h.reflow(this._element),this._element.classList.add(a);const V=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,o.trigger(this._element,x,{relatedTarget:b})};this._queueCallback(V,this._dialog,this._isAnimated())}_addEventListeners(){o.on(this._element,c,b=>{if(b.key===N){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),o.on(window,B,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),o.on(this._element,l,b=>{o.one(this._element,P,S=>{if(!(this._element!==b.target||this._element!==S.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(g),this._resetAdjustments(),this._scrollBar.reset(),o.trigger(this._element,v)})}_isAnimated(){return this._element.classList.contains(t)}_triggerBackdropTransition(){if(o.trigger(this._element,k).defaultPrevented)return;const S=this._element.scrollHeight>document.documentElement.clientHeight,V=this._element.style.overflowY;V==="hidden"||this._element.classList.contains(r)||(S||(this._element.style.overflowY="hidden"),this._element.classList.add(r),this._queueCallback(()=>{this._element.classList.remove(r),this._queueCallback(()=>{this._element.style.overflowY=V},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const b=this._element.scrollHeight>document.documentElement.clientHeight,S=this._scrollBar.getWidth(),V=S>0;if(V&&!b){const Y=h.isRTL()?"paddingLeft":"paddingRight";this._element.style[Y]=`${S}px`}if(!V&&b){const Y=h.isRTL()?"paddingRight":"paddingLeft";this._element.style[Y]=`${S}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(b,S){return this.each(function(){const V=$.getOrCreateInstance(this,b);if(typeof b=="string"){if(typeof V[b]>"u")throw new TypeError(`No method named "${b}"`);V[b](S)}})}}return o.on(document,m,O,function(G){const b=u.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&G.preventDefault(),o.one(b,L,Y=>{Y.defaultPrevented||o.one(b,v,()=>{h.isVisible(this)&&this.focus()})});const S=u.findOne(y);S&&$.getInstance(S).hide(),$.getOrCreateInstance(b).toggle(this)}),n.enableDismissTrigger($),h.defineJQueryPlugin($),$})})(Et);var kt=Et.exports;const xt=At(kt),Lt={props:{product:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",qty:1}},mounted(){this.modal=new xt(this.$refs.modal,{keyboard:!1,backdrop:"static"})},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}}},It={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Rt={class:"modal-dialog modal-xl",role:"document"},Vt={class:"modal-content border-0"},qt={class:"modal-header bg-dark text-white"},$t={class:"modal-title",id:"exampleModalLabel"},Bt=C("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ft={class:"modal-body"},Pt={class:"row"},Kt={class:"col-sm-6"},Yt=["src"],Wt={class:"col-sm-6"},Ut={class:"badge bg-primary rounded-pill"},Qt={key:0,class:"h5"},zt={key:1,class:"h6"},jt={key:2,class:"h5"},Ht={class:"input-group"};function Gt(A,w,e,o,u,s){return U(),Q("div",It,[C("div",Rt,[C("div",Vt,[C("div",qt,[C("h5",$t,[C("span",null,K(e.product.title),1)]),Bt]),C("div",Ft,[C("div",Pt,[C("div",Kt,[C("img",{class:"img-fluid",src:e.product.imagesUrl,alt:""},null,8,Yt)]),C("div",Wt,[C("span",Ut,K(e.product.category),1),C("p",null,"商品描述："+K(e.product.description),1),C("p",null,"商品內容："+K(e.product.content),1),e.product.price?J("",!0):(U(),Q("div",Qt,K(e.product.origin_price)+" 元 ",1)),e.product.price?(U(),Q("del",zt,"原價 "+K(e.product.origin_price)+" 元",1)):J("",!0),e.product.price?(U(),Q("div",jt," 現在只要 "+K(e.product.price)+" 元 ",1)):J("",!0),C("div",null,[C("div",Ht,[Tt(C("input",{type:"number",class:"form-control","onUpdate:modelValue":w[0]||(w[0]=n=>u.qty=n),min:"1"},null,512),[[Dt,u.qty,void 0,{number:!0}]]),C("button",{type:"button",class:"btn btn-primary",onClick:w[1]||(w[1]=n=>A.$emit("add-to-cart",e.product.id,u.qty))}," 加入購物車 ")])])])])])])])],512)}const Xt=vt(Lt,[["render",Gt]]);export{xt as M,Xt as U};
