(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bbbe209"],{"0fa5":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["createVNode"])("div",{class:"vh-40 vh-lg-60 bg-all"},null,-1),r={class:"container border-bottom border-light py-15 mb-15"},n={class:"row"},s={class:"col-12 col-xl-3 mt-xl-14 mb-10 mb-sm-14 mb-xl-0"},i={class:"d-none d-xl-block w-xl-90"},l=Object(a["createStaticVNode"])('<div class="d-none d-xl-flex justify-content-between text-xl mb-6"><div class="d-flex"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span></div><p> 全部商品 \b<span class="font-abril text-lg\n          opacity-8 align-self-end">All Products</span></p><div class="d-flex"><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></div></div>',1),d={class:"mb-xl-10"},u={class:"category-link"},p=Object(a["createTextVNode"])("全部商品 "),b=Object(a["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),g={class:"w-xl-90"},m=Object(a["createStaticVNode"])('<div class="d-none d-xl-flex justify-content-between text-xl mb-6"><div class="d-flex"><span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span></div><p> 商品分類 \b<span class="font-abril text-lg  opacity-8  align-self-end">Category</span></p><div class="d-flex"><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span></div></div>',1),f={class:"d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center"},h={class:"d-block d-xl-none category-link mb-5 mb-md-0"},j=Object(a["createTextVNode"])("全部商品 "),O=Object(a["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),v=Object(a["createVNode"])("span",{class:"text-base material-icons"}," double_arrow ",-1),k={class:"col-12 col-xl-9"},y={class:"d-flex mb-10"},x={class:"title text-4xl"},N={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mb-13"};function V(e,t,c,V,w,C){var B=Object(a["resolveComponent"])("Card"),_=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",i,[l,Object(a["createVNode"])("ul",d,[Object(a["createVNode"])("li",u,[Object(a["createVNode"])("a",{href:"",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return C.getCategoryProduct("全部商品")}),["prevent"])),class:{"cate-active":"全部商品"===w.activeCategory}},[p,b],2)])])]),Object(a["createVNode"])("div",g,[m,Object(a["createVNode"])("ul",f,[Object(a["createVNode"])("li",h,[Object(a["createVNode"])("a",{href:"",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return C.getCategoryProduct("全部商品")}),["prevent"])),class:{"cate-active":"全部商品"===w.activeCategory}},[j,O],2)]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(w.productsCategory,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:"category-link\n           mb-xl-4 ",key:e},[Object(a["createVNode"])("a",{href:"",onClick:Object(a["withModifiers"])((function(t){return C.getCategoryProduct(e)}),["prevent"]),class:{"cate-active":w.activeCategory===e}},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e)+" ",1),v],10,["onClick"])])})),128))])])]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("h1",x,Object(a["toDisplayString"])(w.activeCategory),1)]),Object(a["createVNode"])("ul",N,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(w.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:"col",key:e.id},[Object(a["createVNode"])(B,{product:e},null,8,["product"])])})),128))]),"全部商品"===w.activeCategory?(Object(a["openBlock"])(),Object(a["createBlock"])(_,{key:0,pagination:w.pagination,onEmitPage:C.getData},null,8,["pagination","onEmitPage"])):Object(a["createCommentVNode"])("",!0)])])])],64)}c("99af"),c("159b"),c("caad"),c("2532"),c("4de4");var w=c("ae8d"),C=c("1799"),B={data:function(){return{products:[],productsAll:[],productsCategory:[],activeCategory:"全部商品",pagination:{}}},components:{Card:w["a"],Pagination:C["a"]},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products?page=").concat(t)).then((function(t){console.log(t),t.data.success?(e.products=t.data.products,e.pagination=t.data.pagination):alert(t.data.message)})).catch((function(e){console.log(e)})),this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){console.log(t),t.data.success?(e.productsAll=t.data.products,e.productsAll.forEach((function(t){e.productsCategory.includes(t.category)||e.productsCategory.push(t.category)}))):alert(t.data.message)})).catch((function(e){console.log(e)}))},getCategoryProduct:function(e){if(this.activeCategory=e,"全部商品"!==e){var t=this.productsAll.filter((function(t){return t.category===e}));this.products=t}else this.getData()}},mounted:function(){this.getData()}};B.render=V;t["default"]=B},"159b":function(e,t,c){var a=c("da84"),o=c("fdbc"),r=c("17c2"),n=c("9112");for(var s in o){var i=a[s],l=i&&i.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(d){l.forEach=r}}},1799:function(e,t,c){"use strict";var a=c("7a23"),o={key:0,class:"pagination"},r=Object(a["createVNode"])("span",{class:"double-arrow"},"«",-1),n=Object(a["createVNode"])("span",{class:"material-icons  text-base"}," chevron_left ",-1),s=Object(a["createVNode"])("span",{class:"material-icons  text-base"}," chevron_right ",-1),i=Object(a["createVNode"])("span",{class:"double-arrow"},"»",-1);function l(e,t,c,l,d,u){return 1!==c.pagination.total_pages?(Object(a["openBlock"])(),Object(a["createBlock"])("ul",o,[c.pagination.has_pre?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:0,class:"page-item ",onClick:t[1]||(t[1]=function(e){return u.emitPage(1)})},[r])):Object(a["createCommentVNode"])("",!0),c.pagination.has_pre?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:1,class:"page-item ",onClick:t[2]||(t[2]=function(e){return u.emitPage(c.pagination.current_page-1)})},[n])):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pagination.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:e,class:["page-item",{active:e===c.pagination.current_page}],onClick:function(t){return u.emitPage(e)}},Object(a["toDisplayString"])(e),11,["onClick"])})),128)),c.pagination.has_next?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:2,class:"page-item ",onClick:t[3]||(t[3]=function(e){return u.emitPage(c.pagination.current_page+1)})},[s])):Object(a["createCommentVNode"])("",!0),c.pagination.has_next?(Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:3,class:"page-item ",onClick:t[4]||(t[4]=function(e){return u.emitPage(c.pagination.total_pages)})},[i])):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)}var d={props:{pagination:Object},methods:{emitPage:function(e){this.$emit("emit-page",e)}}};d.render=l;t["a"]=d},"17c2":function(e,t,c){"use strict";var a=c("b727").forEach,o=c("a640"),r=o("forEach");e.exports=r?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},2532:function(e,t,c){"use strict";var a=c("23e7"),o=c("5a34"),r=c("1d80"),n=c("ab13");a({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(r(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var a=c("861d"),o=c("c6b6"),r=c("b622"),n=r("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==o(e))}},"4de4":function(e,t,c){"use strict";var a=c("23e7"),o=c("b727").filter,r=c("1dde"),n=r("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,c){var a=c("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},a640:function(e,t,c){"use strict";var a=c("d039");e.exports=function(e,t){var c=[][e];return!!c&&a((function(){c.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,c){var a=c("b622"),o=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[o]=!1,"/./"[e](t)}catch(a){}}return!1}},ae8d:function(e,t,c){"use strict";var a=c("7a23"),o={class:" card"},r={class:"card-body"},n={key:0},s={class:"mb-2"},i={class:"text-dark text-sm opacity-5 text-decoration-line-through ms-2"},l={key:1,class:"d-flex align-items-center justify-content-between"},d={class:"card-title mb-3"},u={class:"text-light text-decoration-line-through ms-2"},p={class:"d-flex"},b=Object(a["createVNode"])("a",{href:"",class:"border rounded-circle  p-2  me-4 icon-hover"},[Object(a["createVNode"])("span",{class:"material-icons"}," favorite_border ")],-1),g={key:0,class:"add-loading border rounded-circle  p-2 "},m=Object(a["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),f={class:"position-relative"},h=Object(a["createVNode"])("span",{class:"material-icons"}," shopping_cart ",-1);function j(e,t,c,j,O,v){var k=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])(k,{class:["card-img ",{"card-img-rotate":!c.cartCard,"card-small-img":c.cartCard}],onMouseover:v.changeImg,onMouseleave:v.recoveryImg,to:"/product/".concat(c.product.id)},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("img",{src:c.product.imageUrl,class:{"show-card-img":O.showFirstImg},alt:""},null,10,["src"]),c.product.imagesUrl?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,class:{"show-card-img":!O.showFirstImg},src:c.product.imagesUrl[0],alt:""},null,10,["src"])):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["class","onMouseover","onMouseleave","to"]),Object(a["createVNode"])("div",r,[c.cartCard?(Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])("p",s,[Object(a["createTextVNode"])(" NT$"+Object(a["toDisplayString"])(c.product.price),1),Object(a["createVNode"])("span",i,"NT$"+Object(a["toDisplayString"])(c.product.origin_price),1)]),Object(a["createVNode"])("div",{class:"btn btn-sm btn-secondary text-white secondary-hover",onClick:t[1]||(t[1]=function(e){return v.addCart(c.product.id)})}," 加入購物車 ")])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("h3",d,[Object(a["createVNode"])(k,{to:"/product/".concat(c.product.id),class:{"text-dark ":c.cartCard,"text-base":c.cartCard}},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(c.product.title),1)]})),_:1},8,["to","class"])]),Object(a["createVNode"])("p",null,[Object(a["createTextVNode"])(" NT$"+Object(a["toDisplayString"])(c.product.price),1),Object(a["createVNode"])("span",u,"NT$"+Object(a["toDisplayString"])(c.product.origin_price),1)])]),Object(a["createVNode"])("div",p,[b,O.loading?(Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[m])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",f,[O.loading?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("a",{key:0,href:"",class:" border rounded-circle  p-2  icon-hover",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return v.addCart(c.product.id)}),["prevent"]))},[h]))])])]))])])}c("99af");var O={props:{product:Object,cartCard:Boolean},data:function(){return{showFirstImg:!0,loading:!1}},inject:["emitter"],methods:{changeImg:function(){this.product.imagesUrl&&(this.showFirstImg=!1)},recoveryImg:function(){this.showFirstImg=!0},addCart:function(e){var t=this;this.loading=!0;var c={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),c).then((function(e){console.log(e),e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.emitter.emit("update-cart"),t.loading=!1):(t.emitter.emit("push-message",{type:"error",message:e.data.message}),t.loading=!1)})).catch((function(e){console.log(e)}))}}};O.render=j;t["a"]=O},b727:function(e,t,c){var a=c("0366"),o=c("44ad"),r=c("7b0b"),n=c("50c4"),s=c("65f0"),i=[].push,l=function(e){var t=1==e,c=2==e,l=3==e,d=4==e,u=6==e,p=7==e,b=5==e||u;return function(g,m,f,h){for(var j,O,v=r(g),k=o(v),y=a(m,f,3),x=n(k.length),N=0,V=h||s,w=t?V(g,x):c||p?V(g,0):void 0;x>N;N++)if((b||N in k)&&(j=k[N],O=y(j,N,v),e))if(t)w[N]=O;else if(O)switch(e){case 3:return!0;case 5:return j;case 6:return N;case 2:i.call(w,j)}else switch(e){case 4:return!1;case 7:i.call(w,j)}return u?-1:l||d?d:w}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},caad:function(e,t,c){"use strict";var a=c("23e7"),o=c("4d64").includes,r=c("44d2");a({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")}}]);
//# sourceMappingURL=chunk-5bbbe209.342dec21.js.map