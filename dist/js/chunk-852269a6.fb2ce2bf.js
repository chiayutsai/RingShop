(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-852269a6"],{"0fa5":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),r={class:"d-flex justify-content-center align-items-center position-relative vh-70 bg-all"},o={class:"text-large "},n={class:"container py-17"},i={class:"row"},s={class:"col-3 mt-16"},l=Object(a["createStaticVNode"])('<p class="d-flex text-xl mb-6"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span> 全部商品 \b<span class="font-abril text-lg opacity-8 align-self-end">All Products</span><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></p>',1),d={class:"mb-10"},u=Object(a["createStaticVNode"])('<p class="d-flex text-xl mb-6"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span>商品分類 \b<span class="font-abril text-lg  opacity-8  align-self-end">Category</span><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></p>',1),p={class:"col-9"},b={class:"d-flex mb-13"},g={class:"title"},f={class:"row row-cols-3 g-5 mb-13"};function h(e,t,c,h,j,O){var m=Object(a["resolveComponent"])("RingCircle"),v=Object(a["resolveComponent"])("Card"),y=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])(m,{top:"38%",right:"34%"}),Object(a["createVNode"])("h2",o,Object(a["toDisplayString"])(j.activeCategory),1)]),Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",s,[l,Object(a["createVNode"])("ul",d,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("a",{href:"",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return O.getCategoryProduct("全部商品")}),["prevent"])),class:{"cate-active":"全部商品"===j.activeCategory}},"全部商品",2)])]),u,Object(a["createVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(j.productsCategory,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:"mb-4",key:e},[Object(a["createVNode"])("a",{href:"",onClick:Object(a["withModifiers"])((function(t){return O.getCategoryProduct(e)}),["prevent"]),class:{"cate-active":j.activeCategory===e}},Object(a["toDisplayString"])(e),11,["onClick"])])})),128))])]),Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("h1",g,Object(a["toDisplayString"])(j.activeCategory),1)]),Object(a["createVNode"])("ul",f,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(j.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(v,{key:e.id,product:e},null,8,["product"])})),128))]),"全部商品"===j.activeCategory?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:0,pagination:j.pagination,onEmitPage:O.getData},null,8,["pagination","onEmitPage"])):Object(a["createCommentVNode"])("",!0)])])])],64)}c("99af"),c("159b"),c("caad"),c("2532"),c("4de4");var j=Object(a["createVNode"])("svg",{viewBox:"0 0 300 150",height:"150"},[Object(a["createVNode"])("path",{id:"zxxCircle",fill:"none",d:"M90 75a60 60 0 1 0 120 0a60 60 0 1 0 -120 0z"}),Object(a["createVNode"])("text",null,[Object(a["createVNode"])("textPath",{href:"#zxxCircle",fill:"#fff"},"RingRing • Pretty • Store RingRing")])],-1);function O(e,t,c,r,o,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"rotate position-absolute opacity-3",style:{top:"".concat(c.top),right:"".concat(c.right)}},[j],4)}var m={props:{top:String,right:String}};m.render=O;var v=m,y=c("ae8d"),k=c("1799"),x={data:function(){return{products:[],productsAll:[],productsCategory:[],activeCategory:"全部商品",pagination:{}}},components:{RingCircle:v,Card:y["a"],Pagination:k["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products?page=").concat(t)).then((function(t){console.log(t),t.data.success?(e.products=t.data.products,e.pagination=t.data.pagination):alert(t.data.message)})).catch((function(e){console.log(e)})),this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){console.log(t),t.data.success?(e.productsAll=t.data.products,e.productsAll.forEach((function(t){e.productsCategory.includes(t.category)||e.productsCategory.push(t.category)}))):alert(t.data.message)})).catch((function(e){console.log(e)}))},getCategoryProduct:function(e){if(this.activeCategory=e,"全部商品"!==e){var t=this.productsAll.filter((function(t){return t.category===e}));this.products=t}else this.getData()}},mounted:function(){this.getData()}};x.render=h;t["default"]=x},"159b":function(e,t,c){var a=c("da84"),r=c("fdbc"),o=c("17c2"),n=c("9112");for(var i in r){var s=a[i],l=s&&s.prototype;if(l&&l.forEach!==o)try{n(l,"forEach",o)}catch(d){l.forEach=o}}},1799:function(e,t,c){"use strict";var a=c("7a23"),r={key:0,class:"pagination"},o=Object(a["createVNode"])("span",{class:"double-arrow"},"«",-1),n=Object(a["createVNode"])("span",{class:"material-icons  text-base"}," chevron_left ",-1),i=Object(a["createVNode"])("span",{class:"material-icons  text-base"}," chevron_right ",-1),s=Object(a["createVNode"])("span",{class:"double-arrow"},"»",-1);function l(e,t,c,l,d,u){return 1!==c.pagination.total_pages?(Object(a["openBlock"])(),Object(a["createBlock"])("ul",r,[c.pagination.has_pre?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:0,class:"page-item ",onClick:t[1]||(t[1]=function(e){return u.emitPage(1)})},[o])):Object(a["createCommentVNode"])("",!0),c.pagination.has_pre?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:1,class:"page-item ",onClick:t[2]||(t[2]=function(e){return u.emitPage(c.pagination.current_page-1)})},[n])):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pagination.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:e,class:["page-item",{active:e===c.pagination.current_page}],onClick:function(t){return u.emitPage(e)}},Object(a["toDisplayString"])(e),11,["onClick"])})),128)),c.pagination.has_next?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:2,class:"page-item ",onClick:t[3]||(t[3]=function(e){return u.emitPage(c.pagination.current_page+1)})},[i])):Object(a["createCommentVNode"])("",!0),c.pagination.has_next?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:3,class:"page-item ",onClick:t[4]||(t[4]=function(e){return u.emitPage(c.pagination.total_pages)})},[s])):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)}var d={props:{pagination:Object},methods:{emitPage:function(e){this.$emit("emit-page",e)}}};d.render=l;t["a"]=d},"17c2":function(e,t,c){"use strict";var a=c("b727").forEach,r=c("a640"),o=r("forEach");e.exports=o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,c){var a=c("d039"),r=c("b622"),o=c("2d00"),n=r("species");e.exports=function(e){return o>=51||!a((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,c){"use strict";var a=c("23e7"),r=c("5a34"),o=c("1d80"),n=c("ab13");a({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(o(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var a=c("861d"),r=c("c6b6"),o=c("b622"),n=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==r(e))}},"4de4":function(e,t,c){"use strict";var a=c("23e7"),r=c("b727").filter,o=c("1dde"),n=o("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,c){var a=c("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,c){var a=c("861d"),r=c("e8b5"),o=c("b622"),n=o("species");e.exports=function(e,t){var c;return r(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!r(c.prototype)?a(c)&&(c=c[n],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},8418:function(e,t,c){"use strict";var a=c("c04e"),r=c("9bf2"),o=c("5c6c");e.exports=function(e,t,c){var n=a(t);n in e?r.f(e,n,o(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),r=c("d039"),o=c("e8b5"),n=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),p=c("b622"),b=c("2d00"),g=p("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",j=b>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),O=u("concat"),m=function(e){if(!n(e))return!1;var t=e[g];return void 0!==t?!!t:o(e)},v=!j||!O;a({target:"Array",proto:!0,forced:v},{concat:function(e){var t,c,a,r,o,n=i(this),u=d(n,0),p=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?n:arguments[t],m(o)){if(r=s(o.length),p+r>f)throw TypeError(h);for(c=0;c<r;c++,p++)c in o&&l(u,p,o[c])}else{if(p>=f)throw TypeError(h);l(u,p++,o)}return u.length=p,u}})},a640:function(e,t,c){"use strict";var a=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&a((function(){c.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,c){var a=c("b622"),r=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[r]=!1,"/./"[e](t)}catch(a){}}return!1}},ae8d:function(e,t,c){"use strict";var a=c("7a23"),r={class:"col card"},o={class:"card-body"},n={class:"card-title mb-2"},i={key:0},s={class:"mb-2"},l={class:"text-dark text-sm opacity-5 text-decoration-line-through ms-2"},d={key:1,class:"d-flex align-items-center justify-content-between"},u={class:"text-light text-decoration-line-through ms-2"},p={class:"d-flex"},b=Object(a["createVNode"])("a",{href:"",class:"me-2"},[Object(a["createVNode"])("span",{class:"material-icons"}," favorite_border ")],-1),g=Object(a["createVNode"])("span",{class:"material-icons"}," shopping_cart ",-1);function f(e,t,c,f,h,j){var O=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("li",r,[Object(a["createVNode"])(O,{class:["card-img ",{"card-img-rotate":!c.cartCard,"card-small-img":c.cartCard}],onMouseover:j.changeImg,onMouseleave:j.recoveryImg,to:"/product/".concat(c.product.id)},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("img",{src:c.product.imageUrl,class:{"show-card-img":h.showFirstImg},alt:""},null,10,["src"]),c.product.imagesUrl?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,class:{"show-card-img":!h.showFirstImg},src:c.product.imagesUrl[0],alt:""},null,10,["src"])):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["class","onMouseover","onMouseleave","to"]),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("h2",n,[Object(a["createVNode"])(O,{to:"/product/".concat(c.product.id),class:{"text-dark ":c.cartCard,"text-base":c.cartCard}},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(c.product.title),1)]})),_:1},8,["to","class"])]),c.cartCard?(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("p",s,[Object(a["createTextVNode"])(" NT$"+Object(a["toDisplayString"])(c.product.price),1),Object(a["createVNode"])("span",l,"NT$"+Object(a["toDisplayString"])(c.product.origin_price),1)]),Object(a["createVNode"])("div",{class:"btn btn-sm btn-secondary text-white secondary-hover",onClick:t[1]||(t[1]=function(e){return j.addCart(c.product.id)})}," 加入購物車 ")])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",d,[Object(a["createVNode"])("p",null,[Object(a["createTextVNode"])(" NT$"+Object(a["toDisplayString"])(c.product.price),1),Object(a["createVNode"])("span",u,"NT$"+Object(a["toDisplayString"])(c.product.origin_price),1)]),Object(a["createVNode"])("div",p,[b,Object(a["createVNode"])("a",{href:"",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return j.addCart(c.product.id)}),["prevent"]))},[g])])]))])])}c("99af");var h={props:{product:Object,cartCard:Boolean},data:function(){return{showFirstImg:!0}},methods:{changeImg:function(){this.product.imagesUrl&&(this.showFirstImg=!1)},recoveryImg:function(){this.showFirstImg=!0},addCart:function(e){var t={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),t).then((function(e){console.log(e),e.data.success,alert(e.data.message)})).catch((function(e){console.log(e)}))}}};h.render=f;t["a"]=h},b727:function(e,t,c){var a=c("0366"),r=c("44ad"),o=c("7b0b"),n=c("50c4"),i=c("65f0"),s=[].push,l=function(e){var t=1==e,c=2==e,l=3==e,d=4==e,u=6==e,p=7==e,b=5==e||u;return function(g,f,h,j){for(var O,m,v=o(g),y=r(v),k=a(f,h,3),x=n(y.length),C=0,N=j||i,w=t?N(g,x):c||p?N(g,0):void 0;x>C;C++)if((b||C in y)&&(O=y[C],m=k(O,C,v),e))if(t)w[C]=m;else if(m)switch(e){case 3:return!0;case 5:return O;case 6:return C;case 2:s.call(w,O)}else switch(e){case 4:return!1;case 7:s.call(w,O)}return u?-1:l||d?d:w}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},caad:function(e,t,c){"use strict";var a=c("23e7"),r=c("4d64").includes,o=c("44d2");a({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e8b5:function(e,t,c){var a=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-852269a6.fb2ce2bf.js.map