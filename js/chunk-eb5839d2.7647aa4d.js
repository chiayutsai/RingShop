(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb5839d2"],{"057f":function(e,t,r){var c=r("fc6a"),a=r("241c").f,o={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return a(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==o.call(e)?i(e):a(c(e))}},"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var c=r("6b75");function a(e,t){if(e){if("string"===typeof e)return Object(c["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c["a"])(e,t):void 0}}},"0fa5":function(e,t,r){"use strict";r.r(t);var c=r("7a23"),a=Object(c["createVNode"])("div",{class:"vh-40 vh-lg-60 bg-all"},null,-1),o={class:"container border-bottom border-light py-15 mb-15"},n={class:"breadcrumb mb-10 mb-sm-13 mb-xl-5"},i={class:"breadcrumb-item"},s=Object(c["createTextVNode"])("首頁"),l={class:"breadcrumb-item"},d=Object(c["createTextVNode"])("產品"),u={class:"breadcrumb-item active"},b={class:"row"},p={class:"col-12 col-xl-3 mt-xl-13 mb-10 mb-sm-13 mb-xl-0"},f={class:"d-none d-xl-block w-xl-90"},g=Object(c["createStaticVNode"])('<div class="d-none d-xl-flex justify-content-between text-xl mb-6"><div class="d-flex"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span></div><h3 class="text-xl"> 全部商品 <span class="font-abril text-lg opacity-8 align-self-end">All Products</span></h3><div class="d-flex"><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></div></div>',1),m={class:"mb-xl-10"},h={class:"category-link"},j=Object(c["createTextVNode"])(" 全部商品 "),O=Object(c["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),v={class:"w-xl-90 mb-10"},y=Object(c["createStaticVNode"])('<div class="d-none d-xl-flex justify-content-between text-xl mb-6"><div class="d-flex"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span></div><h3 class="text-xl"> 系列產品 <span class="font-abril text-lg opacity-8 align-self-end">Series</span></h3><div class="d-flex"><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></div></div>',1),w={class:"d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center"},x={class:"d-block d-xl-none category-link mb-5 mb-md-0"},k=Object(c["createTextVNode"])(" 全部商品 "),N=Object(c["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),V={class:"category-link mb-xl-4"},C=Object(c["createTextVNode"])(" 珍珠系列 "),S=Object(c["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),B={class:"category-link mb-xl-4"},_=Object(c["createTextVNode"])(" 水晶系列 "),M=Object(c["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),A={class:"category-link mb-xl-4"},F=Object(c["createTextVNode"])(" 鎖骨鏈系列 "),T=Object(c["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),P={class:"w-xl-90"},L=Object(c["createStaticVNode"])('<div class="d-none d-xl-flex justify-content-between text-xl mb-6"><div class="d-flex"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span></div><h3 class="text-xl"> 商品分類 <span class="font-abril text-lg opacity-8 align-self-end">Category</span></h3><div class="d-flex"><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></div></div>',1),$={class:"d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center"},I=Object(c["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),D={class:"col-12 col-xl-9"},E={class:"d-flex mb-10"},q={class:"title text-4xl"},U={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mb-13"};function J(e,t,r,J,R,Q){var W=Object(c["resolveComponent"])("Loading"),z=Object(c["resolveComponent"])("router-link"),G=Object(c["resolveComponent"])("Card"),H=Object(c["resolveComponent"])("Pagination");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(W,{isLoading:R.isLoading},null,8,["isLoading"]),a,Object(c["createVNode"])("div",o,[Object(c["createVNode"])("ol",n,[Object(c["createVNode"])("li",i,[Object(c["createVNode"])(z,{to:"/"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]),Object(c["createVNode"])("li",l,[Object(c["createVNode"])(z,{to:"/shop"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})]),Object(c["createVNode"])("li",u,Object(c["toDisplayString"])(""===R.nowCategory?"全部商品":R.nowCategory),1)]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",f,[g,Object(c["createVNode"])("ul",m,[Object(c["createVNode"])("li",h,[Object(c["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return Q.changeCategory("")}),["prevent"])),class:{"cate-active":""===R.selectCategory&&""===R.selectSeries}},[j,O],2)])])]),Object(c["createVNode"])("div",v,[y,Object(c["createVNode"])("ul",w,[Object(c["createVNode"])("li",x,[Object(c["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return Q.changeCategory("")}),["prevent"])),class:{"cate-active":""===R.selectCategory&&""===R.selectSeries}},[k,N],2)]),Object(c["createVNode"])("li",V,[Object(c["createVNode"])("a",{href:"#",onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(e){return Q.changeSeries("珍珠系列")}),["prevent"])),class:{"cate-active":"珍珠系列"===R.selectSeries}},[C,S],2)]),Object(c["createVNode"])("li",B,[Object(c["createVNode"])("a",{href:"#",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return Q.changeSeries("水晶系列")}),["prevent"])),class:{"cate-active":"水晶系列"===R.selectSeries}},[_,M],2)]),Object(c["createVNode"])("li",A,[Object(c["createVNode"])("a",{href:"#",onClick:t[5]||(t[5]=Object(c["withModifiers"])((function(e){return Q.changeSeries("鎖骨鏈系列")}),["prevent"])),class:{"cate-active":"鎖骨鏈系列"===R.selectSeries}},[F,T],2)])])]),Object(c["createVNode"])("div",P,[L,Object(c["createVNode"])("ul",$,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(R.productsCategory,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:"category-link mb-xl-4",key:e},[Object(c["createVNode"])("a",{href:"#",onClick:Object(c["withModifiers"])((function(t){return Q.changeCategory(e)}),["prevent"]),class:{"cate-active":R.selectCategory===e}},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e)+" ",1),I],10,["onClick"])])})),128))])])]),Object(c["createVNode"])("div",D,[Object(c["createVNode"])("div",E,[Object(c["createVNode"])("h1",q,Object(c["toDisplayString"])(""===R.nowCategory?"全部商品":R.nowCategory),1)]),Object(c["createVNode"])("ul",U,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(R.productByCategory,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:"col",key:t.id},[Object(c["createVNode"])(G,{product:t,myFavorite:R.myFavorite,onEmitAddFavorite:e.addMyFavorite},null,8,["product","myFavorite","onEmitAddFavorite"])])})),128))]),Object(c["createVNode"])(H,{pagination:R.pagination,onEmitPage:Q.showCategory},null,8,["pagination","onEmitPage"])])])])],64)}var R=r("2909"),Q=(r("99af"),r("159b"),r("caad"),r("2532"),r("a434"),r("4de4"),r("ac1f"),r("466d"),r("ae8d")),W=r("1799"),z=r("1c33"),G={data:function(){return{productsAll:[],productsCategory:[],selectCategory:"",selectSeries:"",isLoading:!1,nowCategory:"",productByCategory:[],myFavorite:this.getLocalStorage()||[],pagination:{current_page:1,has_next:!0,has_pre:!1,total_pages:1}}},mixins:[z["a"]],inject:["emitter"],components:{Card:Q["a"],Pagination:W["a"]},methods:{getAllData:function(){var e=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){t.data.success?(e.productsAll=t.data.products,e.isLoading=!1,e.productsAll.forEach((function(t){e.productsCategory.includes(t.category)||e.productsCategory.push(t.category)}))):e.isLoading=!1})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},changeCategory:function(e){this.$router.push({name:"shop",query:{category:e}}),this.nowCategory=e},changeSeries:function(e){this.$router.push({name:"shop",query:{series:e}}),this.nowCategory=e},showCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(R["a"])(this.categoryProduct),r=Math.ceil(t.length/10);this.selectSeries||""!==this.selectSeries?this.nowCategory=this.selectSeries:this.nowCategory=""===this.selectCategory?"全部商品":this.selectCategory,this.pagination={current_page:e,total_pages:r,has_pre:e>1,has_next:e<r},this.productByCategory=t.splice(10*(e-1),10*e)}},watch:{$route:function(){this.selectCategory=this.$route.query.category||"",this.selectSeries=this.$route.query.series||""},categoryProduct:function(){this.showCategory()}},computed:{categoryProduct:function(){var e=this,t=[];return t=this.selectSeries||""!==this.selectSeries?this.productsAll.filter((function(t){var r;return null===(r=t.series)||void 0===r?void 0:r.match(e.selectSeries)})):this.productsAll.filter((function(t){var r;return null===(r=t.category)||void 0===r?void 0:r.match(e.selectCategory)})),t}},mounted:function(){this.getAllData(),this.selectCategory=this.$route.query.category||"",this.selectSeries=this.$route.query.series||""}};G.render=J;t["default"]=G},1799:function(e,t,r){"use strict";var c=r("7a23"),a={key:0,class:"pagination"},o={key:0},n=Object(c["createVNode"])("span",{class:"double-arrow"},"«",-1),i={key:1},s=Object(c["createVNode"])("span",{class:"material-icons text-base"}," chevron_left ",-1),l={key:2},d=Object(c["createVNode"])("span",{class:"material-icons text-base"}," chevron_right ",-1),u={key:3},b=Object(c["createVNode"])("span",{class:"double-arrow"},"»",-1);function p(e,t,r,p,f,g){return 1!==r.pagination.total_pages?(Object(c["openBlock"])(),Object(c["createBlock"])("ul",a,[r.pagination.has_pre?(Object(c["openBlock"])(),Object(c["createBlock"])("li",o,[Object(c["createVNode"])("a",{href:"#",class:"page-item",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return g.emitPage(1)}),["prevent"]))},[n])])):Object(c["createCommentVNode"])("",!0),r.pagination.has_pre?(Object(c["openBlock"])(),Object(c["createBlock"])("li",i,[Object(c["createVNode"])("a",{href:"#",class:"page-item",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return g.emitPage(r.pagination.current_page-1)}),["prevent"]))},[s])])):Object(c["createCommentVNode"])("",!0),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.pagination.total_pages,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:e},[Object(c["createVNode"])("a",{href:"#",class:["page-item",{active:e===r.pagination.current_page}],onClick:Object(c["withModifiers"])((function(t){return g.emitPage(e)}),["prevent"])},Object(c["toDisplayString"])(e),11,["onClick"])])})),128)),r.pagination.has_next?(Object(c["openBlock"])(),Object(c["createBlock"])("li",l,[Object(c["createVNode"])("a",{href:"#",class:"page-item",onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(e){return g.emitPage(r.pagination.current_page+1)}),["prevent"]))},[d])])):Object(c["createCommentVNode"])("",!0),r.pagination.has_next?(Object(c["openBlock"])(),Object(c["createBlock"])("li",u,[Object(c["createVNode"])("a",{href:"#",class:"page-item",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return g.emitPage(r.pagination.total_pages)}),["prevent"]))},[b])])):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)}var f={props:{pagination:Object},emits:["emit-page"],methods:{emitPage:function(e){this.$emit("emit-page",e)}}};f.render=p;t["a"]=f},2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r("6b75");function a(e){if(Array.isArray(e))return Object(c["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=r("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return a(e)||o(e)||Object(n["a"])(e)||i()}},"466d":function(e,t,r){"use strict";var c=r("d784"),a=r("825a"),o=r("50c4"),n=r("1d80"),i=r("8aa5"),s=r("14c3");c("match",1,(function(e,t,r){return[function(t){var r=n(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,r):new RegExp(t)[e](String(r))},function(e){var c=r(t,e,this);if(c.done)return c.value;var n=a(e),l=String(this);if(!n.global)return s(n,l);var d=n.unicode;n.lastIndex=0;var u,b=[],p=0;while(null!==(u=s(n,l))){var f=String(u[0]);b[p]=f,""===f&&(n.lastIndex=i(l,o(n.lastIndex),d)),p++}return 0===p?null:b}]}))},"4de4":function(e,t,r){"use strict";var c=r("23e7"),a=r("b727").filter,o=r("1dde"),n=o("filter");c({target:"Array",proto:!0,forced:!n},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,r){"use strict";var c=r("0366"),a=r("7b0b"),o=r("9bdd"),n=r("e95a"),i=r("50c4"),s=r("8418"),l=r("35a1");e.exports=function(e){var t,r,d,u,b,p,f=a(e),g="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,j=void 0!==h,O=l(f),v=0;if(j&&(h=c(h,m>2?arguments[2]:void 0,2)),void 0==O||g==Array&&n(O))for(t=i(f.length),r=new g(t);t>v;v++)p=j?h(f[v],v):f[v],s(r,v,p);else for(u=O.call(f),b=u.next,r=new g;!(d=b.call(u)).done;v++)p=j?o(u,h,[d.value,v],!0):d.value,s(r,v,p);return r.length=v,r}},"6b75":function(e,t,r){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}r.d(t,"a",(function(){return c}))},"746f":function(e,t,r){var c=r("428f"),a=r("5135"),o=r("e538"),n=r("9bf2").f;e.exports=function(e){var t=c.Symbol||(c.Symbol={});a(t,e)||n(t,e,{value:o.f(e)})}},"9bdd":function(e,t,r){var c=r("825a"),a=r("2a62");e.exports=function(e,t,r,o){try{return o?t(c(r)[0],r[1]):t(r)}catch(n){throw a(e),n}}},a4d3:function(e,t,r){"use strict";var c=r("23e7"),a=r("da84"),o=r("d066"),n=r("c430"),i=r("83ab"),s=r("4930"),l=r("fdbf"),d=r("d039"),u=r("5135"),b=r("e8b5"),p=r("861d"),f=r("825a"),g=r("7b0b"),m=r("fc6a"),h=r("c04e"),j=r("5c6c"),O=r("7c73"),v=r("df75"),y=r("241c"),w=r("057f"),x=r("7418"),k=r("06cf"),N=r("9bf2"),V=r("d1e7"),C=r("9112"),S=r("6eeb"),B=r("5692"),_=r("f772"),M=r("d012"),A=r("90e3"),F=r("b622"),T=r("e538"),P=r("746f"),L=r("d44e"),$=r("69f3"),I=r("b727").forEach,D=_("hidden"),E="Symbol",q="prototype",U=F("toPrimitive"),J=$.set,R=$.getterFor(E),Q=Object[q],W=a.Symbol,z=o("JSON","stringify"),G=k.f,H=N.f,K=w.f,X=V.f,Y=B("symbols"),Z=B("op-symbols"),ee=B("string-to-symbol-registry"),te=B("symbol-to-string-registry"),re=B("wks"),ce=a.QObject,ae=!ce||!ce[q]||!ce[q].findChild,oe=i&&d((function(){return 7!=O(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,r){var c=G(Q,t);c&&delete Q[t],H(e,t,r),c&&e!==Q&&H(Q,t,c)}:H,ne=function(e,t){var r=Y[e]=O(W[q]);return J(r,{type:E,tag:e,description:t}),i||(r.description=t),r},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},se=function(e,t,r){e===Q&&se(Z,t,r),f(e);var c=h(t,!0);return f(r),u(Y,c)?(r.enumerable?(u(e,D)&&e[D][c]&&(e[D][c]=!1),r=O(r,{enumerable:j(0,!1)})):(u(e,D)||H(e,D,j(1,{})),e[D][c]=!0),oe(e,c,r)):H(e,c,r)},le=function(e,t){f(e);var r=m(t),c=v(r).concat(fe(r));return I(c,(function(t){i&&!ue.call(r,t)||se(e,t,r[t])})),e},de=function(e,t){return void 0===t?O(e):le(O(e),t)},ue=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===Q&&u(Y,t)&&!u(Z,t))&&(!(r||!u(this,t)||!u(Y,t)||u(this,D)&&this[D][t])||r)},be=function(e,t){var r=m(e),c=h(t,!0);if(r!==Q||!u(Y,c)||u(Z,c)){var a=G(r,c);return!a||!u(Y,c)||u(r,D)&&r[D][c]||(a.enumerable=!0),a}},pe=function(e){var t=K(m(e)),r=[];return I(t,(function(e){u(Y,e)||u(M,e)||r.push(e)})),r},fe=function(e){var t=e===Q,r=K(t?Z:m(e)),c=[];return I(r,(function(e){!u(Y,e)||t&&!u(Q,e)||c.push(Y[e])})),c};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=A(e),r=function(e){this===Q&&r.call(Z,e),u(this,D)&&u(this[D],t)&&(this[D][t]=!1),oe(this,t,j(1,e))};return i&&ae&&oe(Q,t,{configurable:!0,set:r}),ne(t,e)},S(W[q],"toString",(function(){return R(this).tag})),S(W,"withoutSetter",(function(e){return ne(A(e),e)})),V.f=ue,N.f=se,k.f=be,y.f=w.f=pe,x.f=fe,T.f=function(e){return ne(F(e),e)},i&&(H(W[q],"description",{configurable:!0,get:function(){return R(this).description}}),n||S(Q,"propertyIsEnumerable",ue,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),I(v(re),(function(e){P(e)})),c({target:E,stat:!0,forced:!s},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var r=W(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),c({target:"Object",stat:!0,forced:!s,sham:!i},{create:de,defineProperty:se,defineProperties:le,getOwnPropertyDescriptor:be}),c({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pe,getOwnPropertySymbols:fe}),c({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(g(e))}}),z){var ge=!s||d((function(){var e=W();return"[null]"!=z([e])||"{}"!=z({a:e})||"{}"!=z(Object(e))}));c({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,r){var c,a=[e],o=1;while(arguments.length>o)a.push(arguments[o++]);if(c=t,(p(t)||void 0!==e)&&!ie(e))return b(t)||(t=function(e,t){if("function"==typeof c&&(t=c.call(this,e,t)),!ie(t))return t}),a[1]=t,z.apply(null,a)}})}W[q][U]||C(W[q],U,W[q].valueOf),L(W,E),M[D]=!0},a630:function(e,t,r){var c=r("23e7"),a=r("4df4"),o=r("1c7e"),n=!o((function(e){Array.from(e)}));c({target:"Array",stat:!0,forced:n},{from:a})},ae8d:function(e,t,r){"use strict";r("caad"),r("2532");var c=r("7a23"),a={class:"card"},o={class:"card-body"},n={key:0},i={class:"card-title mb-2"},s={class:"mb-2"},l={key:0,class:"text-dark text-sm opacity-5 text-decoration-line-through ms-2"},d=Object(c["createVNode"])("span",{class:"material-icons text-base"}," favorite ",-1),u=Object(c["createVNode"])("span",{class:"material-icons text-base"}," favorite_border ",-1),b={class:"position-relative d-inline-block"},p=Object(c["createVNode"])("span",null,"加入購物車",-1),f={key:0,type:"button",class:" btn d-flex justify-content-center align-items-center\n                position-absolute no-allow\n                h-100 w-100 top-0 start-0 bg-light"},g=Object(c["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(c["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),m={key:1,class:"d-flex align-items-center justify-content-between"},h={class:"card-title mb-3"},j={key:0,class:"text-light text-decoration-line-through ms-2"},O={class:"d-flex"},v=Object(c["createVNode"])("span",{class:"material-icons"}," favorite ",-1),y=Object(c["createVNode"])("span",{class:"material-icons"}," favorite_border ",-1),w={key:2,class:"add-loading border rounded-circle p-2 "},x=Object(c["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark",role:"status"},[Object(c["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),k={class:"position-relative"},N=Object(c["createVNode"])("span",{class:"material-icons"}," shopping_cart ",-1);function V(e,t,r,V,C,S){var B=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])(B,{class:["card-img ",{"card-img-rotate":!r.cartCard,"card-small-img":r.cartCard}],onMouseover:S.changeImg,onMouseleave:S.recoveryImg,to:"/product/".concat(r.product.id)},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("img",{src:r.product.imageUrl,class:{"show-card-img":C.showFirstImg},alt:r.product.title},null,10,["src","alt"]),r.product.imagesUrl?(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:0,class:{"show-card-img":!C.showFirstImg},src:r.product.imagesUrl[0],alt:r.product.title},null,10,["src","alt"])):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["class","onMouseover","onMouseleave","to"]),Object(c["createVNode"])("div",o,[r.cartCard?(Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[Object(c["createVNode"])("h3",i,[Object(c["createVNode"])(B,{to:"/product/".concat(r.product.id),class:{"text-dark ":r.cartCard,"text-base":r.cartCard}},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(r.product.title),1)]})),_:1},8,["to","class"])]),Object(c["createVNode"])("p",s,[Object(c["createTextVNode"])(" NT$"+Object(c["toDisplayString"])(e.toCurrency(r.product.price))+" ",1),r.product.price!==r.product.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",l,"NT$"+Object(c["toDisplayString"])(e.toCurrency(r.product.origin_price)),1)):Object(c["createCommentVNode"])("",!0)]),r.myFavorite.includes(r.product.id)?(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:0,href:"#",class:"btn btn-sm btn-secondary text-white secondary-hover me-2",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return S.emitaddMyFavorite(r.product.id)}),["prevent"]))},[d])):(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:1,href:"#",class:"btn btn-sm btn-outline-secondary white-hover cartCard-btn me-2",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return S.emitaddMyFavorite(r.product.id)}),["prevent"]))},[u])),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",{class:"btn btn-sm btn-secondary text-white secondary-hover",onClick:t[3]||(t[3]=function(e){return S.addCart(r.product.id)})},[p]),C.loading?(Object(c["openBlock"])(),Object(c["createBlock"])("button",f,[g])):Object(c["createCommentVNode"])("",!0)])])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",m,[Object(c["createVNode"])("div",null,[Object(c["createVNode"])("h3",h,[Object(c["createVNode"])(B,{to:"/product/".concat(r.product.id)},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(r.product.title),1)]})),_:1},8,["to"])]),Object(c["createVNode"])("p",null,[Object(c["createTextVNode"])(" NT$"+Object(c["toDisplayString"])(e.toCurrency(r.product.price))+" ",1),r.product.price!==r.product.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",j," NT$"+Object(c["toDisplayString"])(e.toCurrency(r.product.origin_price)),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",O,[r.myFavorite.includes(r.product.id)?(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:0,href:"#",class:"border bg-white text-secondary rounded-circle p-2 me-4 icon-active-hover",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return S.emitaddMyFavorite(r.product.id)}),["prevent"]))},[v])):(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:1,href:"#",class:"border rounded-circle p-2 me-4 icon-hover",onClick:t[5]||(t[5]=Object(c["withModifiers"])((function(e){return S.emitaddMyFavorite(r.product.id)}),["prevent"]))},[y])),C.loading?(Object(c["openBlock"])(),Object(c["createBlock"])("div",w,[x])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",k,[C.loading?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:0,href:"#",class:" border rounded-circle p-2 icon-hover",onClick:t[6]||(t[6]=Object(c["withModifiers"])((function(e){return S.addCart(r.product.id,e)}),["prevent"]))},[N])),Object(c["createVNode"])("img",{ref:"addImg",class:"addCartAnimation",style:{top:"".concat(C.elTop,"px"),left:"".concat(C.elLeft,"px")},src:r.product.imageUrl,alt:r.product.title},null,12,["src","alt"])])])]))])])}r("99af");var C=r("1c33"),S={props:{product:Object,cartCard:Boolean,myFavorite:{type:Array,default:function(){return[]}}},emits:["emit-add-favorite"],data:function(){return{showFirstImg:!0,loading:!1,elTop:0,elLeft:0}},mixins:[C["a"]],inject:["emitter"],methods:{changeImg:function(){this.product.imagesUrl&&(this.showFirstImg=!1)},recoveryImg:function(){this.showFirstImg=!0},addCart:function(e,t){var r=this;if(this.loading=!0,t){var c=t.target.parentNode.nextElementSibling;c.classList.add("show"),this.elTop=t.target.getBoundingClientRect().top-5,this.elLeft=t.target.getBoundingClientRect().left-5,setTimeout((function(){c.classList.add("move")}),10),setTimeout((function(){c.classList.remove("move","show")}),1e3)}var a={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),a).then((function(e){e.data.success?(r.emitter.emit("push-message",{type:"success",message:e.data.message}),r.emitter.emit("update-cart"),r.loading=!1):(r.emitter.emit("push-message",{type:"error",message:e.data.message}),r.loading=!1)})).catch((function(){r.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},emitaddMyFavorite:function(e){this.$emit("emit-add-favorite",e)}}};S.render=V;t["a"]=S},d28b:function(e,t,r){var c=r("746f");c("iterator")},e01a:function(e,t,r){"use strict";var c=r("23e7"),a=r("83ab"),o=r("da84"),n=r("5135"),i=r("861d"),s=r("9bf2").f,l=r("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};l(b,d);var p=b.prototype=d.prototype;p.constructor=b;var f=p.toString,g="Symbol(test)"==String(d("test")),m=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=f.call(e);if(n(u,e))return"";var r=g?t.slice(7,-1):t.replace(m,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:b})}},e538:function(e,t,r){var c=r("b622");t.f=c},fb6a:function(e,t,r){"use strict";var c=r("23e7"),a=r("861d"),o=r("e8b5"),n=r("23cb"),i=r("50c4"),s=r("fc6a"),l=r("8418"),d=r("b622"),u=r("1dde"),b=u("slice"),p=d("species"),f=[].slice,g=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var r,c,d,u=s(this),b=i(u.length),m=n(e,b),h=n(void 0===t?b:t,b);if(o(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return f.call(u,m,h);for(c=new(void 0===r?Array:r)(g(h-m,0)),d=0;m<h;m++,d++)m in u&&l(c,d,u[m]);return c.length=d,c}})}}]);
//# sourceMappingURL=chunk-eb5839d2.7647aa4d.js.map