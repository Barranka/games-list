(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],m=0,p=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"061c":function(t,e,s){t.exports=s.p+"assets/img/top.2bd0caaf.svg"},"301c":function(t,e,s){t.exports=s.p+"assets/img/banner.eba5fac2.jpg"},3146:function(t,e,s){t.exports=s.p+"assets/img/seven.1f6f02dd.svg"},"3b97":function(t,e,s){var n={"./banner.jpg":"301c","./logo.svg":"e347","./menu/cards.svg":"c0cd","./menu/live.svg":"94e2","./menu/roulette.svg":"3fc1","./menu/seven.svg":"3146","./menu/star.svg":"9cf7","./menu/table.svg":"d444","./menu/top.svg":"061c"};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="3b97"},"3fc1":function(t,e,s){t.exports=s.p+"assets/img/roulette.611aea5f.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("header",[s("banner")],1),s("body",[s("menu-list")],1)])},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"banner-container"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:s("e347"),alt:"логотип"}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"info__main"},[n("div",{staticClass:"info__text info__title"},[t._v("Sign up & get")]),n("div",{staticClass:"info__text info__title"},[t._v("Welcome Bonus")])]),n("div",{staticClass:"info__text"},[t._v("€ 100 + 55 free spins")]),n("button",{staticClass:"info__btn btn",attrs:{type:"button"}},[t._v("Deposit now")])])])])}],l=s("2877"),c={},u=Object(l["a"])(c,o,r,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container container-content"},[s("ul",{staticClass:"menu-list"},t._l(t.links,(function(e,n){return s("li",{key:e.title,staticClass:"menu-item",class:{active:e.isActive},on:{click:function(e){return t.makeActive(n)}}},[s("router-link",{staticClass:"menu-link",attrs:{title:e.title,to:e.url}},[e.icon?s("img",{staticClass:"menu-link__icon",attrs:{src:t.getImgUrl("./menu/"+e.icon+".svg"),alt:"вид игр"}}):t._e(),s("div",{staticClass:"menu-link__title"},[t._v(t._s(e.title))])])],1)})),0)]),s("router-view")],1)},d=[],f=(s("4160"),s("159b"),{data:function(){return{links:[{title:"All GAMES",url:"/",icon:"star",isActive:!0},{title:"TOP GAMES",url:"/top-games",icon:"top",isActive:null},{title:"LIVE CASINO",url:"/live-casino",icon:"live",isActive:null},{title:"SLOTS GAMES",url:"/slots-games",icon:"seven",isActive:null},{title:"ROULETTE",url:"/roulette",icon:"roulette",isActive:null},{title:"TABLE GAMES",url:"/table-games",icon:"table",isActive:null},{title:"CARD GAMES",url:"/card-games",icon:"cards",isActive:null}]}},methods:{getImgUrl:function(t){var e=s("3b97");return e(t)},makeActive:function(t){this.links.forEach((function(e,s){e.isActive=!1,s==t&&(e.isActive=!0)}))}}}),v=f,g=Object(l["a"])(v,p,d,!1,null,null,null),G=g.exports,h={components:{Banner:m,MenuList:G}},b=h,_=Object(l["a"])(b,a,i,!1,null,null,null),C=_.exports,O=s("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.allGames}})],1)},x=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container container-content"},[s("div",{staticClass:"games-list"},t._l(t.listGames,(function(t,e){return s("div",{key:e,staticClass:"game-item",style:{background:"url(https://aws-origin.image-tech-storage.com/gameRes/sq/200/"+t.item_title+".jpg)"}})})),0)])},k=[],A={props:{listGames:{type:Array,default:function(){return null}}}},w=A,j=Object(l["a"])(w,$,k,!1,null,null,null),E=j.exports,S={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setAllGames")},computed:{allGames:function(){return this.$store.getters.allGames}}},L=S,T=Object(l["a"])(L,y,x,!1,null,null,null),M=T.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.topGames}})],1)},W=[],R={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setTopGames")},computed:{topGames:function(){return this.$store.getters.topGames}}},U=R,D=Object(l["a"])(U,P,W,!1,null,null,null),I=D.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.liveCasino}})],1)},N=[],F={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setLiveCasino")},computed:{liveCasino:function(){return this.$store.getters.liveCasino}}},J=F,q=Object(l["a"])(J,B,N,!1,null,null,null),V=q.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.slotGames}})],1)},H=[],K={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setSlotsGames")},computed:{slotGames:function(){return this.$store.getters.slotsGames}}},Q=K,X=Object(l["a"])(Q,z,H,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.rouletteGames}})],1)},tt=[],et={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setRouletteGames")},computed:{rouletteGames:function(){return this.$store.getters.rouletteGames}}},st=et,nt=Object(l["a"])(st,Z,tt,!1,null,null,null),at=nt.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.tableGames}})],1)},ot=[],rt={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setTableGames")},computed:{tableGames:function(){return this.$store.getters.tableGames}}},lt=rt,ct=Object(l["a"])(lt,it,ot,!1,null,null,null),ut=ct.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-games"},[s("list-games-wrap",{attrs:{listGames:t.cardGames}})],1)},pt=[],dt={components:{ListGamesWrap:E},created:function(){this.$store.dispatch("setCardGames")},computed:{cardGames:function(){return this.$store.getters.cardGames}}},ft=dt,vt=Object(l["a"])(ft,mt,pt,!1,null,null,null),gt=vt.exports,Gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-content"},[s("section",[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("Страница не найдена!")]),s("div",[t._v("Вернуться "),s("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v(" на главную?")])],1)])])])},ht=[],bt=(s("fac1"),{}),_t=Object(l["a"])(bt,Gt,ht,!1,null,"2815c23a",null),Ct=_t.exports;n["a"].use(O["a"]);var Ot=new O["a"]({routes:[{path:"/",name:"AllGames",component:M},{path:"/top-games",name:"topGames",component:I},{path:"/live-casino",name:"liveCasino",component:V},{path:"/slots-games",name:"slotsGames",component:Y},{path:"/roulette",name:"roulette",component:at},{path:"/table-games",name:"tableGames",component:ut},{path:"/card-games",name:"cardGames",component:gt},{path:"*",name:"notFound",component:Ct}]}),yt=s("2f62"),xt=s("bc3a"),$t=s.n(xt);n["a"].use(yt["a"]);var kt=new yt["a"].Store({state:{allGames:null,topGames:null,liveCasino:null,slotsGames:null,rouletteGames:null,tableGames:null,cardGames:null,images:null},mutations:{setAllGames:function(t,e){t.allGames=e},setTopGames:function(t,e){t.topGames=e},setLiveCasino:function(t,e){t.liveCasino=e},setSlotsGames:function(t,e){t.slotsGames=e},setRouletteGames:function(t,e){t.rouletteGames=e},setTableGames:function(t,e){t.tableGames=e},setCardGames:function(t,e){t.cardGames=e}},actions:{setAllGames:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25").then((function(t){var e=t.data;s("setAllGames",e)}))},setTopGames:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&is_most_popular").then((function(t){var e=t.data;s("setTopGames",e)}))},setLiveCasino:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25").then((function(t){var e=t.data;s("setLiveCasino",e)}))},setSlotsGames:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25&is_hot").then((function(t){var e=t.data;s("setSlotsGames",e)}))},setRouletteGames:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25").then((function(t){var e=t.data;s("setRouletteGames",e)}))},setTableGames:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25").then((function(t){var e=t.data;s("setTableGames",e)}))},setCardGames:function(t,e){var s=t.commit;$t.a.get("https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io/?liveCasinoOnly=true&limit=25").then((function(t){var e=t.data;s("setCardGames",e)}))}},getters:{allGames:function(t){return t.allGames},topGames:function(t){return t.topGames},liveCasino:function(t){return t.liveCasino},slotsGames:function(t){return t.slotsGames},rouletteGames:function(t){return t.rouletteGames},tableGames:function(t){return t.tableGames},cardGames:function(t){return t.cardGames}}});s("c1c3");n["a"].config.productionTip=!1,new n["a"]({router:Ot,store:kt,render:function(t){return t(C)}}).$mount("#app")},"907a":function(t,e,s){},"94e2":function(t,e,s){t.exports=s.p+"assets/img/live.a239730f.svg"},"9cf7":function(t,e,s){t.exports=s.p+"assets/img/star.c04dcf75.svg"},c0cd:function(t,e,s){t.exports=s.p+"assets/img/cards.a1926f92.svg"},c1c3:function(t,e,s){},d444:function(t,e,s){t.exports=s.p+"assets/img/table.44c2806e.svg"},e347:function(t,e,s){t.exports=s.p+"assets/img/logo.4342b5b5.svg"},fac1:function(t,e,s){"use strict";var n=s("907a"),a=s.n(n);a.a}});