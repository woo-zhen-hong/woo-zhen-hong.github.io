(function(e){function t(t){for(var o,r,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},a={1:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{2:"3107d278",3:"97d1126a",4:"da438ac9",5:"0167e0db"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"0c25f110",3:"0c25f110",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===o||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var o=n("2b0e"),r=n("1f91"),a=n("42d2"),i=n("b05d"),c=n("515f"),l=n("18d6"),u=n("436b"),s=n("2a19"),f=n("f508"),p=n("b12a");o["a"].use(i["a"],{config:{notify:{icon:"check_circle_outline",position:"top",color:"secondary"}},lang:r["a"],iconSet:a["a"],plugins:{Cookies:c["a"],LocalStorage:l["a"],Dialog:u["a"],Notify:s["a"],Loading:f["a"],AppFullscreen:p["a"]}});var d=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},h=[],m={name:"App"},g=m,b=n("2877"),v=Object(b["a"])(g,d,h,!1,null,null,null),y=v.exports,w=n("8c4f");const P=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{name:"home",path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"bc13")),meta:{title:"notificationer"}},{name:"list",path:"list",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e00c")),meta:{title:"notificationer"}}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var O=P;o["a"].use(w["a"]);var _=function(){const e=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"history",base:"/"});return e},x=async function(e){const t="function"===typeof _?await _({Vue:o["a"],ssrContext:e}):_,n={router:t,render:e=>e(y)};return i["a"].ssrUpdate({app:n,ssr:e}),{app:n,router:t}},S=n("bc3a"),j=n.n(S);j.a.create({baseURL:"http://localhost:3333/"});var A=n("a1bc"),k=n.n(A),E=({router:e,store:t,redirect:n})=>{const o=k.a.needAuthRouteNames,r=k.a.noAuthOnlyRouteNames;e.beforeEach(((e,a,i)=>{const c=t.state.user.isLoggedIn;if(c)for(let t=0,o=r.length;t<o;t+=1){const o=r[t];if(o===e.name)return n("/"),void i()}if(!c)for(let t=0,r=o.length;t<r;t+=1){const r=o[t];if(r===e.name)return n("/login"),void i()}i()}))},C=n("fc1b");async function L({email:e,store:t}){await t.dispatch("user/login",{email:e})}var N=({app:e,store:t,router:n})=>{const o=c["a"].get("__session")||{},r=o.isLoggedIn,a=o.email;r&&L({email:a,store:t})};function R(e,t){const n=e?e.matched?e:t.resolve(e).route:t.currentRoute;if(!n)return[];const o=n.matched.filter((e=>void 0!==e.components));return 0===o.length?[]:Array.prototype.concat.apply([],o.map((e=>Object.keys(e.components).map((t=>{const n=e.components[t];return{path:e.path,c:n.options||n}})))))}function T(e,t){e.beforeResolve(((n,o,r)=>{const a=window.location.href.replace(window.location.origin,""),i=R(n,e),c=R(o,e);let l=!1;const u=i.filter(((e,t)=>l||(l=!c[t]||c[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>e.c&&"function"===typeof e.c.preFetch)).map((e=>e.c.preFetch));if(0===u.length)return r();let s=!1;const f=e=>{s=!0,r(e)},p=()=>{!1===s&&r()};u.reduce(((e,r)=>e.then((()=>!1===s&&r({currentRoute:n,previousRoute:o,redirect:f,urlPath:a,publicPath:t})))),Promise.resolve()).then(p).catch((e=>{console.error(e),p()}))}))}const I="/";async function z(){const{app:e,router:t}=await x();let n=!1;const r=e=>{n=!0;const o=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=o},a=window.location.href.replace(window.location.origin,""),i=[void 0,E,C["default"],N];for(let u=0;!1===n&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:t,Vue:o["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:I})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}if(!0===n)return;const c=new o["a"](e);t.onReady((()=>{T(t,I),c.$mount("#q-app")}))}z()},"31cd":function(e,t,n){},6592:function(e,t){e.exports={firebaseConfig:{apiKey:"AIzaSyDKrAk861nw55_JxO8EEB0JHNcxWSicfzs",authDomain:"notificationer-985a6.firebaseapp.com",projectId:"notificationer-985a6",storageBucket:"notificationer-985a6.appspot.com",messagingSenderId:"1034451100540",appId:"1:1034451100540:web:722fd4a6de6a0cf3c9faf9",measurementId:"G-RYM7KPN2R8"}}},a1bc:function(e,t){e.exports={noAuthOnlyRouteNames:["home"],publicRouteNames:[],i18n:{defaultLocale:"zh-TW",fallbackLocale:"zh-TW",languageMap:{"en-US":"English","zh-TW":"繁體中文"},mapFirebaseI18n:{"en-US":"en","zh-TW":"zh_tw"}}}},fc1b:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var o=n("260b"),r=(n("ea7b"),n("e71f"),n("588e"),n("6592")),a=n.n(r);const i=a.a.firebaseConfig;let c=null,l=null;0===o["a"].apps.length?(c=o["a"].initializeApp(i),l=o["a"].firestore()):(c=o["a"].app(),l=o["a"].firestore())}});