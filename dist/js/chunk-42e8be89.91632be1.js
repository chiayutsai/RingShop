(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42e8be89"],{"159b":function(t,e,c){var a=c("da84"),r=c("fdbc"),o=c("17c2"),n=c("9112");for(var s in r){var i=a[s],l=i&&i.prototype;if(l&&l.forEach!==o)try{n(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,e,c){"use strict";var a=c("b727").forEach,r=c("a640"),o=r("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,c){var a=c("d039"),r=c("b622"),o=c("2d00"),n=r("species");t.exports=function(t){return o>=51||!a((function(){var e=[],c=e.constructor={};return c[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,c){var a=c("861d"),r=c("e8b5"),o=c("b622"),n=o("species");t.exports=function(t,e){var c;return r(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!r(c.prototype)?a(c)&&(c=c[n],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var a=c("c04e"),r=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var n=a(e);n in t?r.f(t,n,o(0,c)):t[n]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),r=c("d039"),o=c("e8b5"),n=c("861d"),s=c("7b0b"),i=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),h=c("2d00"),p=b("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",v=h>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=u("concat"),g=function(t){if(!n(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},m=!v||!O;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,c,a,r,o,n=s(this),u=d(n,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?n:arguments[e],g(o)){if(r=i(o.length),b+r>f)throw TypeError(j);for(c=0;c<r;c++,b++)c in o&&l(u,b,o[c])}else{if(b>=f)throw TypeError(j);l(u,b++,o)}return u.length=b,u}})},a640:function(t,e,c){"use strict";var a=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&a((function(){c.call(null,e||function(){throw 1},1)}))}},ad18:function(t,e,c){"use strict";var a=c("7a23"),r={class:"d-flex justify-content-around w-50 mx-auto mb-10"},o={class:"d-flex flex-column align-items-center"},n=Object(a["h"])("p",null,"購物車",-1),s={class:"d-flex flex-column align-items-center"},i=Object(a["h"])("p",null,"填寫資訊",-1),l={class:"d-flex flex-column align-items-center"},d=Object(a["h"])("p",null,"確認訂單",-1),u={class:"d-flex flex-column align-items-center"},b=Object(a["h"])("p",null,"完成購物",-1);function h(t,e,c,h,p,f){return Object(a["v"])(),Object(a["d"])("div",r,[Object(a["h"])("div",o,[Object(a["h"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"1"===c.step}]}," 1 ",2),n]),Object(a["h"])("div",s,[Object(a["h"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"2"===c.step}]}," 2 ",2),i]),Object(a["h"])("div",l,[Object(a["h"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"3"===c.step}]}," 3 ",2),d]),Object(a["h"])("div",u,[Object(a["h"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"4"===c.step}]}," 4 ",2),b])])}var p={props:{step:String}};p.render=h;e["a"]=p},ae8d:function(t,e,c){"use strict";var a=c("7a23"),r={class:"col card"},o={class:"card-body"},n={class:"card-title mb-2"},s={key:0},i={class:"mb-2"},l={class:"text-dark text-sm opacity-5 text-decoration-line-through ms-2"},d={key:1,class:"d-flex align-items-center justify-content-between"},u={class:"text-light text-decoration-line-through ms-2"},b={class:"d-flex"},h=Object(a["h"])("a",{href:"",class:"me-2"},[Object(a["h"])("span",{class:"material-icons"}," favorite_border ")],-1),p=Object(a["h"])("span",{class:"material-icons"}," shopping_cart ",-1);function f(t,e,c,f,j,v){var O=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])("li",r,[Object(a["h"])(O,{class:["card-img ",{"card-img-rotate":!c.cartCard,"card-small-img":c.cartCard}],onMouseover:v.changeImg,onMouseleave:v.recoveryImg,to:"/product/".concat(c.product.id)},{default:Object(a["L"])((function(){return[Object(a["h"])("img",{src:c.product.imageUrl,class:{"show-card-img":j.showFirstImg},alt:""},null,10,["src"]),c.product.imagesUrl?(Object(a["v"])(),Object(a["d"])("img",{key:0,class:{"show-card-img":!j.showFirstImg},src:c.product.imagesUrl[0],alt:""},null,10,["src"])):Object(a["e"])("",!0)]})),_:1},8,["class","onMouseover","onMouseleave","to"]),Object(a["h"])("div",o,[Object(a["h"])("h2",n,[Object(a["h"])(O,{to:"/product/".concat(c.product.id),class:{"text-dark ":c.cartCard,"text-base":c.cartCard}},{default:Object(a["L"])((function(){return[Object(a["g"])(Object(a["D"])(c.product.title),1)]})),_:1},8,["to","class"])]),c.cartCard?(Object(a["v"])(),Object(a["d"])("div",s,[Object(a["h"])("p",i,[Object(a["g"])(" NT$"+Object(a["D"])(c.product.price),1),Object(a["h"])("span",l,"NT$"+Object(a["D"])(c.product.origin_price),1)]),Object(a["h"])("div",{class:"btn btn-sm btn-secondary text-white secondary-hover",onClick:e[1]||(e[1]=function(t){return v.addCart(c.product.id)})}," 加入購物車 ")])):(Object(a["v"])(),Object(a["d"])("div",d,[Object(a["h"])("p",null,[Object(a["g"])(" NT$"+Object(a["D"])(c.product.price),1),Object(a["h"])("span",u,"NT$"+Object(a["D"])(c.product.origin_price),1)]),Object(a["h"])("div",b,[h,Object(a["h"])("a",{href:"",onClick:e[2]||(e[2]=Object(a["N"])((function(t){return v.addCart(c.product.id)}),["prevent"]))},[p])])]))])])}c("99af");var j={props:{product:Object,cartCard:Boolean},data:function(){return{showFirstImg:!0}},methods:{changeImg:function(){this.product.imagesUrl&&(this.showFirstImg=!1)},recoveryImg:function(){this.showFirstImg=!0},addCart:function(t){var e={data:{product_id:t,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),e).then((function(t){console.log(t),t.data.success,alert(t.data.message)})).catch((function(t){console.log(t)}))}}};j.render=f;e["a"]=j},b727:function(t,e,c){var a=c("0366"),r=c("44ad"),o=c("7b0b"),n=c("50c4"),s=c("65f0"),i=[].push,l=function(t){var e=1==t,c=2==t,l=3==t,d=4==t,u=6==t,b=7==t,h=5==t||u;return function(p,f,j,v){for(var O,g,m=o(p),y=r(m),x=a(f,j,3),w=n(y.length),k=0,C=v||s,_=e?C(p,w):c||b?C(p,0):void 0;w>k;k++)if((h||k in y)&&(O=y[k],g=x(O,k,m),t))if(e)_[k]=g;else if(g)switch(t){case 3:return!0;case 5:return O;case 6:return k;case 2:i.call(_,O)}else switch(t){case 4:return!1;case 7:i.call(_,O)}return u?-1:l||d?d:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},b789:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),r={class:"container pt-17"},o=Object(a["h"])("h3",{class:"d-flex rounded-top align-items-center\n     bg-secondary p-4"},[Object(a["h"])("span",{class:"material-icons me-3"}," shopping_cart "),Object(a["g"])("購物車 ")],-1),n={key:0,class:"p-4 border border-white border-bottom-0 bg-table text-dark"},s=Object(a["h"])("p",{class:"text-center text-xl mb-6"},"購物車目前沒有商品",-1),i={class:"d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5"},l=Object(a["g"])(" 前往商店"),d={key:1},u=Object(a["f"])('<div class="row g-0 p-4 border border-white border-bottom-0 bg-table text-dark"><div class="col-4">商品資料</div><div class="col-2">單件價格</div><div class="col-3">數量</div><div class="col-2">小計</div><div class="col-1"></div></div>',1),b={class:"cart_list"},h={class:"col-4"},p={class:"d-flex align-items-center"},f={class:"text-lg"},j={class:"col-2"},v={class:"text-dark opacity-5 text-sm text-decoration-line-through"},O={class:"col-3"},g={class:"col-2"},m={class:"col-1"},y=Object(a["h"])("span",{class:"material-icons"}," delete_forever ",-1),x={class:"d-flex justify-content-between align-items-center\n      rounded-bottom bg-table border border-white p-6"},w={class:"d-flex align-items-center"},k={class:"text-dark text-xl me-5"},C=Object(a["g"])("繼續購物"),_={class:"container mt-15 mb-17"},q={class:"row g-5"},$={class:"col-8"},A=Object(a["h"])("p",{class:"text-xl rounded-top bg-secondary p-4"},"超值加購",-1),D={class:"p-4 rounded-bottom border border-white bg-table text-dark"},T={class:"row row-cols-3"},N={class:"col-4"},P=Object(a["h"])("p",{class:"text-xl rounded-top bg-secondary p-4"},"訂單資訊",-1),E={class:"row g-0 p-6 rounded-bottom border border-white bg-table text-dark"},I=Object(a["h"])("div",{class:"col-4 mb-4"},[Object(a["h"])("p",null,"商品數量：")],-1),Q={class:"col-8 mb-4"},M=Object(a["h"])("div",{class:"col-4 mb-4"},[Object(a["h"])("p",null,"小計：")],-1),U={class:"col-8 mb-4"},F=Object(a["h"])("div",{class:"col-12 mb-6"},[Object(a["h"])("div",{class:"border-bottom border-white"})],-1),L=Object(a["h"])("div",{class:"col-4 mb-4"},[Object(a["h"])("p",{class:"fw-bold"},"總計：")],-1),z={class:"col-8 mb-4"},B={class:"fw-bold"},J={class:"col-12"};function R(t,e,c,R,S,V){var G=Object(a["A"])("Progress"),H=Object(a["A"])("router-link"),K=Object(a["A"])("Card");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",r,[Object(a["h"])(G,{step:"1"}),o,S.cart.length<=0?(Object(a["v"])(),Object(a["d"])("div",n,[s,Object(a["h"])("div",i,[Object(a["h"])(H,{class:"white-hover",to:"/shop"},{default:Object(a["L"])((function(){return[l]})),_:1})])])):(Object(a["v"])(),Object(a["d"])("div",d,[u,Object(a["h"])("div",b,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(S.cart,(function(t,e){return Object(a["v"])(),Object(a["d"])("div",{key:t.id,class:"row g-0 p-4 border border-white align-items-center\n        bg-table text-dark border-bottom-0"},[Object(a["h"])("div",h,[Object(a["h"])("div",p,[Object(a["h"])("img",{class:"w-40 me-4",src:t.product.imageUrl,alt:""},null,8,["src"]),Object(a["h"])("h3",f,Object(a["D"])(t.product.title),1)])]),Object(a["h"])("div",j,[Object(a["h"])("p",null,"NT$"+Object(a["D"])(t.product.price),1),Object(a["h"])("p",v," NT$"+Object(a["D"])(t.product.origin_price),1)]),Object(a["h"])("div",O,[Object(a["h"])("div",{class:["d-flex w-75",{"mb-2":S.failQty}]},[Object(a["h"])("input",{disabled:t.qty<=1,class:"quantity-btn cart-remove text-dark border-dark",value:"-",type:"button",onClick:function(t){return V.minusCartQty(e)}},null,8,["disabled","onClick"]),Object(a["M"])(Object(a["h"])("input",{class:"text-center quantity w-100 border-start-0\n              border-end-0 border-dark bg-transparent",type:"number","onUpdate:modelValue":function(e){return t.qty=e},min:"1",onChange:function(c){return V.updateCart(e,t.id,t.qty)}},null,40,["onUpdate:modelValue","onChange"]),[[a["I"],t.qty,void 0,{number:!0}]]),Object(a["h"])("input",{type:"button",class:"quantity-btn plus text-dark\n            border-dark",value:"+",onClick:function(t){return V.addCartQty(e)}},null,8,["onClick"])],2)]),Object(a["h"])("div",g,"NT$"+Object(a["D"])(t.final_total),1),Object(a["h"])("div",m,[Object(a["h"])("a",{onClick:Object(a["N"])((function(e){return V.deleteCart(t.id)}),["prevent"]),href:"",class:"text-dark"},[y],8,["onClick"])])])})),128))]),Object(a["h"])("div",x,[Object(a["h"])("a",{onClick:e[1]||(e[1]=Object(a["N"])((function(){return V.deleteAll&&V.deleteAll.apply(V,arguments)}),["prevent"])),class:"btn btn-outline-dark"},"清空購物車"),Object(a["h"])("div",w,[Object(a["h"])("p",k,"總計：NT$"+Object(a["D"])(S.final_total),1),Object(a["h"])(H,{to:"/shop",class:"btn btn-dark"},{default:Object(a["L"])((function(){return[C]})),_:1})])])]))]),Object(a["h"])("div",_,[Object(a["h"])("div",q,[Object(a["h"])("div",$,[A,Object(a["h"])("div",D,[Object(a["h"])("ul",T,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(S.randomProduct,(function(t){return Object(a["v"])(),Object(a["d"])(K,{key:t.id,cartCard:!0,product:t},null,8,["product"])})),128))])])]),Object(a["h"])("div",N,[P,Object(a["h"])("div",E,[I,Object(a["h"])("div",Q,[Object(a["h"])("p",null,"共 "+Object(a["D"])(S.allQty)+" 件",1)]),M,Object(a["h"])("div",U,[Object(a["h"])("p",null,"NT$"+Object(a["D"])(S.final_total),1)]),F,L,Object(a["h"])("div",z,[Object(a["h"])("p",B,"NT$"+Object(a["D"])(S.final_total),1)]),Object(a["h"])("div",J,[Object(a["h"])("div",{onClick:e[2]||(e[2]=function(){return V.goToPay&&V.goToPay.apply(V,arguments)}),class:"btn btn-secondary w-100 fw-bold text-white shadow secondary-hover"}," 前往結帳 ")])])])])])],64)}c("99af"),c("159b"),c("d81d");var S=c("ad18"),V=c("ae8d"),G={data:function(){return{cart:[],final_total:0,allQty:0,failQty:!1,allProduct:[],randomProduct:[]}},components:{Progress:S["a"],Card:V["a"]},methods:{getAllData:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(e){console.log(e),e.data.success?(t.allProduct=e.data.products,t.getRandom()):alert(e.data.message)})).catch((function(t){console.log(t)}))},addCartQty:function(t){this.cart[t].qty+=1,this.updateCart(t,this.cart[t].id,this.cart[t].qty)},minusCartQty:function(t){console.log(this.cart[t].qty),this.cart[t].qty-=1,this.updateCart(t,this.cart[t].id,this.cart[t].qty)},getcart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart");this.$http.get(e).then((function(e){console.log(e.data.data),e.data.success?(t.allQty=0,t.cart=e.data.data.carts,t.final_total=e.data.data.final_total,t.cart.forEach((function(e){t.allQty+=e.qty}))):alert(e.data.message)})).catch((function(t){console.log(t)}))},updateCart:function(t,e,c){var a=this;if(this.cart[t].qty<1)this.cart[t].qty=1;else{var r={data:{product_id:e,qty:c}},o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart/").concat(e);this.$http.put(o,r).then((function(t){console.log(t),t.data.success?(alert(t.data.message),a.getcart()):alert(t.data.message)})).catch((function(t){console.log(t)}))}},deleteCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart/").concat(t);this.$http.delete(c).then((function(t){console.log(t),t.data.success?(alert(t.data.message),e.getcart()):alert(t.data.message)})).catch((function(t){console.log(t)}))},deleteAll:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/carts");this.$http.delete(e).then((function(e){console.log(e),e.data.success?(alert(e.data.message),t.getcart()):alert(e.data.message)})).catch((function(t){console.log(t)}))},goToPay:function(){0!==this.cart.length?this.$router.push("/checkout"):alert("購物車是空的，快去新增商品吧")},getRandom:function(){var t=this,e=Math.floor(Math.random()*this.allProduct.length),c=[e,e+1,e+2],a=c.map((function(e){return e%t.allProduct.length}));a.forEach((function(e){t.randomProduct.push(t.allProduct[e])}))}},mounted:function(){this.getcart(),this.getAllData()}};G.render=R;e["default"]=G},d81d:function(t,e,c){"use strict";var a=c("23e7"),r=c("b727").map,o=c("1dde"),n=o("map");a({target:"Array",proto:!0,forced:!n},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,c){var a=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-42e8be89.91632be1.js.map