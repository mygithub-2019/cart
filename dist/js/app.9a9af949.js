(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4acb0926"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"3dbe0838"}[t]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,delete r[t],m.parentNode.removeChild(m),a(o)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1aab":function(t,e,a){"use strict";var n=a("50e1"),r=a.n(n);r.a},"50e1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Dashboard")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Carousel"),a("nav",{staticClass:"navbar navbar-expand-md bg-dark navbar-dark sticky-top"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavbar"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/electronics"}},[t._v("Electronics")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/men"}},[t._v("Men")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/women"}},[t._v("Women")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/baby-kids"}},[t._v("Baby & Kids")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/home-furniture"}},[t._v("Home & Furniture")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/sports-books-more"}},[t._v("Sports, Books & More")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/grocery"}},[t._v("Grocery")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1),t.getIsUserAuthenticated?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t.getIsUserAuthenticated?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])]):t._e(),a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}},[a("sup",{directives:[{name:"show",rawName:"v-show",value:t.getCartItems.length>0,expression:"getCartItems.length > 0"}]},[a("span",{staticClass:"badge badge-success"},[t._v(t._s(t.getCartItems.length))])])])])],1)])])]),a("br"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:""}},[a("i",[t._v("S-Cart")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("cebc"),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-fluid",staticStyle:{"background-color":"black"}},[n("div",{staticClass:"carousel slide",attrs:{id:"demo","data-ride":"carousel"}},[n("ul",{staticClass:"carousel-indicators",staticStyle:{bottom:"-14px"}},[n("li",{staticClass:"active",attrs:{"data-target":"#demo","data-slide-to":"0"}}),n("li",{attrs:{"data-target":"#demo","data-slide-to":"1"}}),n("li",{attrs:{"data-target":"#demo","data-slide-to":"2"}})]),n("div",{staticClass:"carousel-inner"},[n("div",{staticClass:"carousel-item active"},[n("img",{attrs:{src:a("7d93"),alt:"Los Angeles",width:"500",height:"300"}}),n("div",{staticClass:"carousel-caption"},[n("h3",[t._v("Los Angeles")]),n("p",[t._v("We had such a great time in LA!")])])]),n("div",{staticClass:"carousel-item"},[n("img",{attrs:{src:a("7d93"),alt:"Chicago",width:"500",height:"300"}}),n("div",{staticClass:"carousel-caption"},[n("h3",[t._v("Chicago")]),n("p",[t._v("Thank you, Chicago!")])])]),n("div",{staticClass:"carousel-item"},[n("img",{attrs:{src:a("7d93"),alt:"New York",width:"500",height:"300"}}),n("div",{staticClass:"carousel-caption"},[n("h3",[t._v("New York")]),n("p",[t._v("We love the Big Apple!")])])])]),n("a",{staticClass:"carousel-control-prev",attrs:{href:"#demo","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon"})]),n("a",{staticClass:"carousel-control-next",attrs:{href:"#demo","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon"})])])])])}],d={},m=d,p=a("2877"),f=Object(p["a"])(m,l,u,!1,null,"226b4358",null),v=f.exports,h=a("2f62"),b={data:function(){return{isUserLogged:!1}},methods:Object(c["a"])({},Object(h["d"])(["IS_USER_AUTHENTICATED"]),{logout:function(){this.IS_USER_AUTHENTICATED("false"),window.location.reload(),this.$router.push("/electronics")}}),props:{},components:{Carousel:v},computed:Object(c["a"])({},Object(h["c"])(["getIsUserAuthenticated","getCartItems"]))},g=b,C=(a("1aab"),Object(p["a"])(g,o,i,!1,null,"f0c755d4",null)),_=C.exports,y={components:{Dashboard:_}},k=y,E=(a("5c0b"),Object(p["a"])(k,r,s,!1,null,null,null)),w=E.exports,I=a("8c4f");n["a"].use(I["a"]);var A=new I["a"]({mode:"history",base:"/",routes:[{path:"/electronics",name:"electronics",component:function(){return a.e("about").then(a.bind(null,"2387"))}},{path:"/men",name:"men",component:function(){return a.e("about").then(a.bind(null,"98c2"))}},{path:"/women",name:"women",component:function(){return a.e("about").then(a.bind(null,"140a"))}},{path:"/baby-kids",name:"kids",component:function(){return a.e("about").then(a.bind(null,"2e3c"))}},{path:"/home-furniture",name:"home-furniture",component:function(){return a.e("about").then(a.bind(null,"0ab9"))}},{path:"/sports-books-more",name:"sports-books-more",component:function(){return a.e("about").then(a.bind(null,"e4be"))}},{path:"/grocery",name:"grocery",component:function(){return a.e("about").then(a.bind(null,"a6ab"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/login",name:"login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/cart",name:"cart",component:function(){return a.e("about").then(a.bind(null,"b789"))}},{path:"*",name:"none",redirect:{name:"electronics"}}]});a("7f7f"),a("3e8f");n["a"].use(h["a"]);var T=new h["a"].Store({state:{isUserAuthenticated:!1,cartItems:[],isCartEmpty:!0},mutations:{IS_USER_AUTHENTICATED:function(t,e){t.isUserAuthenticated=e},IS_USER_LOGGOUT:function(t,e){t.isUserAuthenticated=e},ADD_ITEM:function(t,e){if(t.isCartEmpty)return t.cartItems.push(e),e.quantity++,void(t.isCartEmpty=!1);for(var a=!1,n=0;n<t.cartItems.length;n++)if(t.cartItems[n].name===e.name){a=!0;break}a?e.quantity++:(t.cartItems.push(e),e.quantity++)},REMOVE_ITEM:function(t,e){t.cartItems[e].quantity=0,t.cartItems.splice(e,1),t.cartItems.length||(t.isCartEmpty=!0)}},getters:{getIsUserAuthenticated:function(t){return t.isUserAuthenticated},getCartItems:function(t){return t.cartItems},getCartEmptyStatus:function(t){return t.isCartEmpty}},actions:{removeItemAction:function(t,e){t.commit("REMOVE_ITEM",e)}}});n["a"].config.productionTip=!1,new n["a"]({router:A,store:T,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},"7d93":function(t,e,a){t.exports=a.p+"img/icon1.8674f1ab.png"}});
//# sourceMappingURL=app.9a9af949.js.map