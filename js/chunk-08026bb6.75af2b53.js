(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08026bb6"],{"4de4":function(e,t,c){"use strict";var o=c("23e7"),r=c("b727").filter,a=c("1dde"),n=a("filter");o({target:"Array",proto:!0,forced:!n},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},6062:function(e,t,c){"use strict";var o=c("6d61"),r=c("6566");e.exports=o("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(e,t,c){"use strict";var o=c("9bf2").f,r=c("7c73"),a=c("e2cc"),n=c("0366"),i=c("19aa"),s=c("2266"),d=c("7dd0"),l=c("2626"),u=c("83ab"),b=c("f183").fastKey,p=c("69f3"),m=p.set,f=p.getterFor;e.exports={getConstructor:function(e,t,c,d){var l=e((function(e,o){i(e,l,t),m(e,{type:t,index:r(null),first:void 0,last:void 0,size:0}),u||(e.size=0),void 0!=o&&s(o,e[d],{that:e,AS_ENTRIES:c})})),p=f(t),h=function(e,t,c){var o,r,a=p(e),n=j(e,t);return n?n.value=c:(a.last=n={index:r=b(t,!0),key:t,value:c,previous:o=a.last,next:void 0,removed:!1},a.first||(a.first=n),o&&(o.next=n),u?a.size++:e.size++,"F"!==r&&(a.index[r]=n)),e},j=function(e,t){var c,o=p(e),r=b(t);if("F"!==r)return o.index[r];for(c=o.first;c;c=c.next)if(c.key==t)return c};return a(l.prototype,{clear:function(){var e=this,t=p(e),c=t.index,o=t.first;while(o)o.removed=!0,o.previous&&(o.previous=o.previous.next=void 0),delete c[o.index],o=o.next;t.first=t.last=void 0,u?t.size=0:e.size=0},delete:function(e){var t=this,c=p(t),o=j(t,e);if(o){var r=o.next,a=o.previous;delete c.index[o.index],o.removed=!0,a&&(a.next=r),r&&(r.previous=a),c.first==o&&(c.first=r),c.last==o&&(c.last=a),u?c.size--:t.size--}return!!o},forEach:function(e){var t,c=p(this),o=n(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:c.first){o(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!j(this,e)}}),a(l.prototype,c?{get:function(e){var t=j(this,e);return t&&t.value},set:function(e,t){return h(this,0===e?0:e,t)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),u&&o(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(e,t,c){var o=t+" Iterator",r=f(t),a=f(o);d(e,t,(function(e,t){m(this,{type:o,target:e,state:r(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,c=e.last;while(c&&c.removed)c=c.previous;return e.target&&(e.last=c=c?c.next:e.state.first)?"keys"==t?{value:c.key,done:!1}:"values"==t?{value:c.value,done:!1}:{value:[c.key,c.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),c?"entries":"values",!c,!0),l(t)}}},"6d61":function(e,t,c){"use strict";var o=c("23e7"),r=c("da84"),a=c("94ca"),n=c("6eeb"),i=c("f183"),s=c("2266"),d=c("19aa"),l=c("861d"),u=c("d039"),b=c("1c7e"),p=c("d44e"),m=c("7156");e.exports=function(e,t,c){var f=-1!==e.indexOf("Map"),h=-1!==e.indexOf("Weak"),j=f?"set":"add",O=r[e],g=O&&O.prototype,v=O,y={},N=function(e){var t=g[e];n(g,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(h&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!l(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(h&&!l(e))&&t.call(this,0===e?0:e)}:function(e,c){return t.call(this,0===e?0:e,c),this})},x=a(e,"function"!=typeof O||!(h||g.forEach&&!u((function(){(new O).entries().next()}))));if(x)v=c.getConstructor(t,e,f,j),i.REQUIRED=!0;else if(a(e,!0)){var k=new v,V=k[j](h?{}:-0,1)!=k,C=u((function(){k.has(1)})),w=b((function(e){new O(e)})),B=!h&&u((function(){var e=new O,t=5;while(t--)e[j](t,t);return!e.has(-0)}));w||(v=t((function(t,c){d(t,v,e);var o=m(new O,t,v);return void 0!=c&&s(c,o[j],{that:o,AS_ENTRIES:f}),o})),v.prototype=g,g.constructor=v),(C||B)&&(N("delete"),N("has"),f&&N("get")),(B||V)&&N(j),h&&g.clear&&delete g.clear}return y[e]=v,o({global:!0,forced:v!=O},y),p(v,e),h||c.setStrong(v,e,f),v}},7156:function(e,t,c){var o=c("861d"),r=c("d2bb");e.exports=function(e,t,c){var a,n;return r&&"function"==typeof(a=t.constructor)&&a!==c&&o(n=a.prototype)&&n!==c.prototype&&r(e,n),e}},a3a3:function(e,t,c){"use strict";var o=c("7a23"),r={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},a={class:"modal-dialog modal-dialog-centered"},n={class:"modal-content"},i=Object(o["createStaticVNode"])('<div class="modal-header text-dark py-4 border-0"><button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p class="text-dark text-center"> 確定要移除商品嗎？ </p><p class="text-sm text-info text-center">(刪除後將無法恢復)</p></div>',2),s={class:"modal-footer"},d=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-warning","data-bs-dismiss":"modal"}," 取消 ",-1);function l(e,t,c,l,u,b){return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",n,[i,Object(o["createVNode"])("div",s,[d,Object(o["createVNode"])("button",{type:"button",class:"btn btn-warning text-white",onClick:t[1]||(t[1]=function(t){return e.$emit("delete")})}," 確認刪除 ")])])])],512)}var u=c("e0ae"),b={emits:["delete"],mixins:[u["a"]]};b.render=l;t["a"]=b},ad18:function(e,t,c){"use strict";var o=c("7a23"),r={class:"d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto"},a={class:"d-flex flex-column align-items-center"},n=Object(o["createVNode"])("p",null,"購物車",-1),i={class:"d-flex flex-column align-items-center"},s=Object(o["createVNode"])("p",null,"填寫資訊",-1),d={class:"d-flex flex-column align-items-center"},l=Object(o["createVNode"])("p",null,"確認訂單",-1),u={class:"d-flex flex-column align-items-center"},b=Object(o["createVNode"])("p",null,"完成購物",-1);function p(e,t,c,p,m,f){return Object(o["openBlock"])(),Object(o["createBlock"])("ul",r,[Object(o["createVNode"])("li",a,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-4",{"progress-active":"1"===c.step}]}," 1 ",2),n]),Object(o["createVNode"])("li",i,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle  rounded-circle border mb-4",{"progress-active":"2"===c.step}]}," 2 ",2),s]),Object(o["createVNode"])("li",d,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-4",{"progress-active":"3"===c.step}]}," 3 ",2),l]),Object(o["createVNode"])("li",u,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-4",{"progress-active":"4"===c.step}]}," 4 ",2),b])])}var m={props:{step:String}};m.render=p;t["a"]=m},ae8d:function(e,t,c){"use strict";c("caad"),c("2532");var o=c("7a23"),r={class:"card"},a={class:"card-body"},n={key:0},i={class:"card-title mb-2"},s={class:"mb-2"},d={key:0,class:"text-dark text-sm opacity-5 text-decoration-line-through ms-2"},l=Object(o["createVNode"])("span",{class:"material-icons text-base"}," favorite ",-1),u=Object(o["createVNode"])("span",{class:"material-icons text-base"}," favorite_border ",-1),b={class:"position-relative d-inline-block"},p=Object(o["createVNode"])("span",null,"加入購物車",-1),m={key:0,type:"button",class:" btn d-flex justify-content-center align-items-center\n                position-absolute no-allow\n                h-100 w-100 top-0 start-0 bg-light"},f=Object(o["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),h={key:1,class:"d-flex align-items-center justify-content-between"},j={class:"card-title mb-3"},O={key:0,class:"text-light text-decoration-line-through ms-2"},g={class:"d-flex"},v=Object(o["createVNode"])("span",{class:"material-icons"}," favorite ",-1),y=Object(o["createVNode"])("span",{class:"material-icons"}," favorite_border ",-1),N={key:2,class:"add-loading border rounded-circle p-2 "},x=Object(o["createVNode"])("div",{class:"spinner-border spinner-border-sm text-dark",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),k={class:"position-relative"},V=Object(o["createVNode"])("span",{class:"material-icons"}," shopping_cart ",-1);function C(e,t,c,C,w,B){var M=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(M,{class:["card-img ",{"card-img-rotate":!c.cartCard,"card-small-img":c.cartCard}],onMouseover:B.changeImg,onMouseleave:B.recoveryImg,to:"/product/".concat(c.product.id)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("img",{src:c.product.imageUrl,class:{"show-card-img":w.showFirstImg},alt:c.product.title},null,10,["src","alt"]),c.product.imagesUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,class:{"show-card-img":!w.showFirstImg},src:c.product.imagesUrl[0],alt:c.product.title},null,10,["src","alt"])):Object(o["createCommentVNode"])("",!0)]})),_:1},8,["class","onMouseover","onMouseleave","to"]),Object(o["createVNode"])("div",a,[c.cartCard?(Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[Object(o["createVNode"])("h3",i,[Object(o["createVNode"])(M,{to:"/product/".concat(c.product.id),class:{"text-dark ":c.cartCard,"text-base":c.cartCard}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.product.title),1)]})),_:1},8,["to","class"])]),Object(o["createVNode"])("p",s,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(e.toCurrency(c.product.price))+" ",1),c.product.price!==c.product.origin_price?(Object(o["openBlock"])(),Object(o["createBlock"])("span",d,"NT$"+Object(o["toDisplayString"])(e.toCurrency(c.product.origin_price)),1)):Object(o["createCommentVNode"])("",!0)]),c.myFavorite.includes(c.product.id)?(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",class:"btn btn-sm btn-secondary text-white secondary-hover me-2",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return B.emitaddMyFavorite(c.product.id)}),["prevent"]))},[l])):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:1,href:"#",class:"btn btn-sm btn-outline-secondary white-hover cartCard-btn me-2",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(e){return B.emitaddMyFavorite(c.product.id)}),["prevent"]))},[u])),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",{class:"btn btn-sm btn-secondary text-white secondary-hover",onClick:t[3]||(t[3]=function(e){return B.addCart(c.product.id)})},[p]),w.loading?(Object(o["openBlock"])(),Object(o["createBlock"])("button",m,[f])):Object(o["createCommentVNode"])("",!0)])])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",h,[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("h3",j,[Object(o["createVNode"])(M,{to:"/product/".concat(c.product.id)},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.product.title),1)]})),_:1},8,["to"])]),Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(e.toCurrency(c.product.price))+" ",1),c.product.price!==c.product.origin_price?(Object(o["openBlock"])(),Object(o["createBlock"])("span",O," NT$"+Object(o["toDisplayString"])(e.toCurrency(c.product.origin_price)),1)):Object(o["createCommentVNode"])("",!0)])]),Object(o["createVNode"])("div",g,[c.myFavorite.includes(c.product.id)?(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",class:"border bg-white text-secondary rounded-circle p-2 me-4 icon-active-hover",onClick:t[4]||(t[4]=Object(o["withModifiers"])((function(e){return B.emitaddMyFavorite(c.product.id)}),["prevent"]))},[v])):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:1,href:"#",class:"border rounded-circle p-2 me-4 icon-hover",onClick:t[5]||(t[5]=Object(o["withModifiers"])((function(e){return B.emitaddMyFavorite(c.product.id)}),["prevent"]))},[y])),w.loading?(Object(o["openBlock"])(),Object(o["createBlock"])("div",N,[x])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",k,[w.loading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#",class:" border rounded-circle p-2 icon-hover",onClick:t[6]||(t[6]=Object(o["withModifiers"])((function(e){return B.addCart(c.product.id,e)}),["prevent"]))},[V])),Object(o["createVNode"])("img",{ref:"addImg",class:"addCartAnimation",style:{top:"".concat(w.elTop,"px"),left:"".concat(w.elLeft,"px")},src:c.product.imageUrl,alt:c.product.title},null,12,["src","alt"])])])]))])])}c("99af");var w=c("1c33"),B={props:{product:Object,cartCard:Boolean,myFavorite:{type:Array,default:function(){return[]}}},emits:["emit-add-favorite"],data:function(){return{showFirstImg:!0,loading:!1,elTop:0,elLeft:0}},mixins:[w["a"]],inject:["emitter"],methods:{changeImg:function(){this.product.imagesUrl&&(this.showFirstImg=!1)},recoveryImg:function(){this.showFirstImg=!0},addCart:function(e,t){var c=this;if(this.loading=!0,t){var o=t.target.parentNode.nextElementSibling;o.classList.add("show"),this.elTop=t.target.getBoundingClientRect().top-5,this.elLeft=t.target.getBoundingClientRect().left-5,setTimeout((function(){o.classList.add("move")}),10),setTimeout((function(){o.classList.remove("move","show")}),1e3)}var r={data:{product_id:e,qty:1}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart"),r).then((function(e){e.data.success?(c.emitter.emit("push-message",{type:"success",message:e.data.message}),c.emitter.emit("update-cart"),c.loading=!1):(c.emitter.emit("push-message",{type:"error",message:e.data.message}),c.loading=!1)})).catch((function(){c.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},emitaddMyFavorite:function(e){this.$emit("emit-add-favorite",e)}}};B.render=C;t["a"]=B},b789:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r={class:"container pt-15"},a=Object(o["createVNode"])("h3",{class:"d-flex rounded-top align-items-center\n        bg-title text-xl p-4 mt-10 mt-sm-12"},[Object(o["createVNode"])("span",{class:"material-icons me-3"}," shopping_cart "),Object(o["createTextVNode"])("購物車 ")],-1),n={key:0,class:"p-4 border border-white border-bottom-0 bg-table text-dark"},i=Object(o["createVNode"])("p",{class:"text-center text-xl mb-6"},"購物車目前沒有商品",-1),s={class:"d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5"},d=Object(o["createTextVNode"])(" 前往商店"),l={key:1},u=Object(o["createVNode"])("tr",{class:"d-none d-md-flex row g-0 p-4 border border-white\n       border-bottom-0 bg-table text-dark"},[Object(o["createVNode"])("td",{class:"col-4"},"商品資料"),Object(o["createVNode"])("td",{class:"col-2"},"單件價格"),Object(o["createVNode"])("td",{class:"col-3"},"數量"),Object(o["createVNode"])("td",{class:"col-2"},"小計"),Object(o["createVNode"])("td",{class:"col-1"})],-1),b={class:"col-11 col-md-4 mb-5 mb-md-0"},p={class:"d-flex align-items-center"},m={class:"text-base"},f={class:"col-6 col-md-2 order-4 order-md-0"},h={class:"d-flex d-md-block align-items-end"},j={class:"me-3 me-md-0"},O={key:0,class:"text-dark opacity-5 text-sm text-decoration-line-through"},g={class:"col-12 col-md-3 order-3 order-md-0 mb-5 mb-md-0"},v={class:"d-flex w-100 w-md-75 position-relative"},y={key:0,type:"button",class:" btn d-flex justify-content-center align-items-center\n                position-absolute no-allow\n                w-100 h-100 top-0 start-0 bg-light"},N=Object(o["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),x={class:"col-6 col-md-2 order-4 order-md-0 text-end text-md-start"},k=Object(o["createVNode"])("span",{class:"d-inline d-md-none"},"小計：",-1),V={class:"col-1 order-2 order-md-0"},C=Object(o["createVNode"])("span",{class:"material-icons"}," delete_forever ",-1),w={class:"d-flex\n         justify-content-between align-items-end align-items-sm-center\n         rounded-bottom bg-table border border-white p-6"},B={class:"d-flex flex-column flex-sm-row align-items-center"},M={class:"text-dark text-base text-md-xl mb-5 mb-sm-0 me-sm-5 "},D=Object(o["createVNode"])("span",null,"繼續購物",-1),F={class:"container border-bottom border-light mt-9 mt-lg-15 pb-15 mb-15"},L={class:"row g-5"},T={class:"col-12 col-lg-8"},_=Object(o["createVNode"])("p",{class:"text-xl rounded-top bg-title p-4"},"不要錯過",-1),S={class:"p-4 rounded-bottom border border-white bg-table text-dark"},I={class:"row row-cols-2 row-cols-sm-3"},$={class:"col-12 col-lg-4"},E=Object(o["createVNode"])("p",{class:"text-xl rounded-top bg-title p-4"},"訂單資訊",-1),q={class:"row g-0 p-6 rounded-bottom border border-white bg-table text-dark"},P=Object(o["createVNode"])("div",{class:"col-4 mb-4"},[Object(o["createVNode"])("p",null,"商品數量：")],-1),z={class:"col-8 mb-4 text-end"},R=Object(o["createVNode"])("div",{class:"col-4 mb-4 "},[Object(o["createVNode"])("p",null,"小計：")],-1),U={class:"col-8 mb-4 text-end"},Q={key:0,class:"col-12 mb-4 "},A={key:1,class:"col-8 mb-4 pe-2"},J={key:2,class:"col-4 mb-4"},K={class:"position-relative"},W={key:0,type:"button",class:" btn d-flex justify-content-center align-items-center\n                position-absolute no-allow\n                h-100 w-100 top-0 start-0 bg-light"},G=Object(o["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),H={key:3,class:"col-4 mb-6"},X=Object(o["createVNode"])("p",{class:"text-secondary fw-bold"},"折扣：",-1),Y={key:4,class:"col-8 mb-6 text-end"},Z={class:"text-secondary fw-bold"},ee=Object(o["createVNode"])("div",{class:"col-12 mb-6"},[Object(o["createVNode"])("div",{class:"border-bottom border-white"})],-1),te=Object(o["createVNode"])("div",{class:"col-4 mb-4"},[Object(o["createVNode"])("p",{class:"fw-bold"},"總計：")],-1),ce={class:"col-8 mb-4 text-end"},oe={class:"fw-bold"},re={class:"col-12"};function ae(e,t,c,ae,ne,ie){var se=Object(o["resolveComponent"])("Loading"),de=Object(o["resolveComponent"])("Progress"),le=Object(o["resolveComponent"])("router-link"),ue=Object(o["resolveComponent"])("Card"),be=Object(o["resolveComponent"])("FrontDelModal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(se,{isLoading:ne.isLoading},null,8,["isLoading"]),Object(o["createVNode"])("div",r,[Object(o["createVNode"])(de,{step:"1"}),a,ne.cart.length<=0?(Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[i,Object(o["createVNode"])("div",s,[Object(o["createVNode"])(le,{class:"white-hover",to:"/shop"},{default:Object(o["withCtx"])((function(){return[d]})),_:1})])])):(Object(o["openBlock"])(),Object(o["createBlock"])("table",l,[u,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(ne.cart,(function(t,c){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id,class:"row g-0 p-4 border border-white align-items-center\n          bg-table text-dark border-bottom-0"},[Object(o["createVNode"])("td",b,[Object(o["createVNode"])("div",p,[Object(o["createVNode"])("img",{class:"w-40 me-4",src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"]),Object(o["createVNode"])("h3",m,Object(o["toDisplayString"])(t.product.title),1)])]),Object(o["createVNode"])("td",f,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("p",j,"NT$"+Object(o["toDisplayString"])(e.toCurrency(t.product.price)),1),t.product.price!==t.product.origin_price?(Object(o["openBlock"])(),Object(o["createBlock"])("p",O," NT$"+Object(o["toDisplayString"])(e.toCurrency(t.product.origin_price)),1)):Object(o["createCommentVNode"])("",!0)])]),Object(o["createVNode"])("td",g,[Object(o["createVNode"])("div",v,[Object(o["createVNode"])("button",{disabled:t.qty<=1,class:"quantity-btn cart-remove text-dark border-dark",type:"button",onClick:function(e){return ie.minusCartQty(c)}}," - ",8,["disabled","onClick"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"text-center quantity w-100 border-start-0\n                border-end-0 border-dark bg-transparent",type:"number","onUpdate:modelValue":function(e){return t.qty=e},min:"1",onChange:function(e){return ie.updateCart(c,t.id,t.qty)}},null,40,["onUpdate:modelValue","onChange"]),[[o["vModelText"],t.qty,void 0,{number:!0}]]),Object(o["createVNode"])("button",{type:"button",class:"quantity-btn plus text-dark border-dark",onClick:function(e){return ie.addCartQty(c)}}," + ",8,["onClick"]),ne.updateLoading?(Object(o["openBlock"])(),Object(o["createBlock"])("button",y,[N])):Object(o["createCommentVNode"])("",!0)])]),Object(o["createVNode"])("td",x,[k,Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(e.toCurrency(t.total)),1)]),Object(o["createVNode"])("td",V,[Object(o["createVNode"])("a",{onClick:Object(o["withModifiers"])((function(e){return ie.openModal(t.id)}),["prevent"]),href:"#",class:"text-dark scale-hover"},[C],8,["onClick"])])])})),128)),Object(o["createVNode"])("tr",w,[Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return ie.openModal()}),["prevent"])),class:"btn btn-outline-dark"},"清空購物車")]),Object(o["createVNode"])("td",B,[Object(o["createVNode"])("p",M," 總計：NT$"+Object(o["toDisplayString"])(e.toCurrency(ne.total)),1),Object(o["createVNode"])(le,{to:"/shop",class:"btn btn-dark btn-hover px-7"},{default:Object(o["withCtx"])((function(){return[D]})),_:1})])])]))]),Object(o["createVNode"])("div",F,[Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",T,[_,Object(o["createVNode"])("div",S,[Object(o["createVNode"])("ul",I,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(ne.randomProduct,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:"col mb-5 mb-sm-0",key:t.id},[Object(o["createVNode"])(ue,{cartCard:!0,product:t,myFavorite:ne.myFavorite,onEmitAddFavorite:e.addMyFavorite},null,8,["product","myFavorite","onEmitAddFavorite"])])})),128))])])]),Object(o["createVNode"])("div",$,[E,Object(o["createVNode"])("div",q,[P,Object(o["createVNode"])("div",z,[Object(o["createVNode"])("p",null,"共 "+Object(o["toDisplayString"])(ne.allQty)+" 件",1)]),R,Object(o["createVNode"])("div",U,[Object(o["createVNode"])("p",null,"NT$"+Object(o["toDisplayString"])(e.toCurrency(ne.total)),1)]),ne.showCoupon?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("div",Q,[Object(o["createVNode"])("a",{class:"text-secondary underline",href:"#",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(e){return ne.showCoupon=!0}),["prevent"]))}," 使用優惠券 ")])),ne.showCoupon?(Object(o["openBlock"])(),Object(o["createBlock"])("div",A,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"coupon",name:"優惠券代碼",type:"text",class:"form-control ",placeholder:"請輸入優惠券代碼","onUpdate:modelValue":t[3]||(t[3]=function(e){return ne.couponCode=e})},null,512),[[o["vModelText"],ne.couponCode]])])):Object(o["createCommentVNode"])("",!0),ne.showCoupon?(Object(o["openBlock"])(),Object(o["createBlock"])("div",J,[Object(o["createVNode"])("div",K,[Object(o["createVNode"])("button",{type:"button",class:["btn btn-secondary secondary-hover text-white w-100",{"use-disable ":""===ne.couponCode}],onClick:t[4]||(t[4]=Object(o["withModifiers"])((function(){return ie.getCoupon&&ie.getCoupon.apply(ie,arguments)}),["prevent"]))}," 套用 ",2),ne.loading?(Object(o["openBlock"])(),Object(o["createBlock"])("button",W,[G])):Object(o["createCommentVNode"])("",!0)])])):Object(o["createCommentVNode"])("",!0),ne.useCoupon?(Object(o["openBlock"])(),Object(o["createBlock"])("div",H,[X])):Object(o["createCommentVNode"])("",!0),ne.useCoupon?(Object(o["openBlock"])(),Object(o["createBlock"])("div",Y,[Object(o["createVNode"])("p",Z," -NT$"+Object(o["toDisplayString"])(e.toCurrency(ne.total-ne.final_total)),1)])):Object(o["createCommentVNode"])("",!0),ee,te,Object(o["createVNode"])("div",ce,[Object(o["createVNode"])("p",oe,"NT$"+Object(o["toDisplayString"])(e.toCurrency(ne.final_total)),1)]),Object(o["createVNode"])("div",re,[Object(o["createVNode"])("div",{onClick:t[5]||(t[5]=function(){return ie.goToPay&&ie.goToPay.apply(ie,arguments)}),class:"btn btn-secondary w-100 fw-bold text-white shadow-sm secondary-hover"}," 前往結帳 ")])])])])]),Object(o["createVNode"])(be,{item:ne.tempCartID,ref:"delModal",onDelete:ie.deleteCart},null,8,["item","onDelete"])],64)}c("99af"),c("159b"),c("d81d"),c("4de4"),c("caad"),c("2532"),c("d3b7"),c("6062"),c("3ca3"),c("ddb0");var ne=c("ad18"),ie=c("ae8d"),se=c("a3a3"),de=c("1c33");function le(e){return Math.floor(Math.random()*e)}var ue={data:function(){return{cart:[],total:0,final_total:0,allQty:0,allProduct:[],randomProduct:[],tempCartID:"",isLoading:!1,updateLoading:!1,myFavorite:this.getLocalStorage()||[],loading:!1,showCoupon:!1,useCoupon:!1,couponCode:""}},mixins:[de["a"]],inject:["emitter"],components:{Progress:ne["a"],Card:ie["a"],FrontDelModal:se["a"]},methods:{getAllData:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){t.data.success&&(e.allProduct=t.data.products,e.getRandom())})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},addCartQty:function(e){this.cart[e].qty+=1,this.updateCart(e,this.cart[e].id,this.cart[e].qty)},minusCartQty:function(e){this.cart[e].qty-=1,this.updateCart(e,this.cart[e].id,this.cart[e].qty)},getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart");this.$http.get(t).then((function(t){t.data.success?(e.allQty=0,e.cart=t.data.data.carts,e.final_total=Math.round(t.data.data.final_total),e.total=t.data.data.total,e.total!==e.final_total&&0!==e.final_total?e.useCoupon=!0:e.useCoupon=!1,e.cart.forEach((function(t){e.allQty+=t.qty})),e.isLoading=!1):e.isLoading=!1})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},updateCart:function(e,t,c){var o=this;if(this.cart[e].qty<1)this.cart[e].qty=1;else{var r={data:{product_id:t,qty:c}};this.updateLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart/").concat(t);this.$http.put(a,r).then((function(e){e.data.success?(o.emitter.emit("update-cart"),o.updateLoading=!1,o.emitter.emit("push-message",{type:"success",message:e.data.message}),o.getCart()):(o.updateLoading=!1,o.emitter.emit("push-message",{type:"error",message:e.data.message}))})).catch((function(){o.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))}},deleteCart:function(){var e=this,t="";t=this.tempCartID?"".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/cart/").concat(this.tempCartID):"".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/carts"),this.isLoading=!0,this.$http.delete(t).then((function(t){t.data.success?(e.$refs.delModal.hideModal(),e.emitter.emit("update-cart"),e.emitter.emit("push-message",{type:"success",message:t.data.message}),e.isLoading=!1,e.getCart()):(e.isLoading=!1,e.emitter.emit("push-message",{type:"error",message:t.data.message}))})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},goToPay:function(){0!==this.cart.length?this.$router.push("/checkout"):this.emitter.emit("push-message",{type:"warning",message:"購物車是空的，快去新增商品喔！"})},openModal:function(e){this.tempCartID=e,this.$refs.delModal.openModal()},getRandom:function(){var e=this;this.randomProduct=[];for(var t=this.cart.map((function(e){return e.product_id})),c=this.allProduct.filter((function(e){return!t.includes(e.id)})),o=new Set([]),r=c.length<3?c.length:3,a=0;o.size<r;a+1){var n=le(c.length);o.add(n)}o.forEach((function(t){e.randomProduct.push(c[t])}))},getCoupon:function(){var e=this;this.loading=!0;var t={data:{code:this.couponCode}};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/coupon"),t).then((function(t){t.data.success?(e.loading=!1,e.couponCode="",e.showCoupon=!1,e.useCoupon=!0,e.final_total=Math.round(t.data.data.final_total),e.emitter.emit("push-message",{type:"success",message:t.data.message})):(e.loading=!1,e.couponCode="",e.emitter.emit("push-message",{type:"error",message:t.data.message}))})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))}},mounted:function(){var e=this;this.getCart(),this.getAllData(),this.emitter.on("update-cart",(function(){e.getCart()}))},unmounted:function(){var e=this;this.emitter.off("update-cart",(function(){e.getCart()}))}};ue.render=ae;t["default"]=ue},bb2f:function(e,t,c){var o=c("d039");e.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d81d:function(e,t,c){"use strict";var o=c("23e7"),r=c("b727").map,a=c("1dde"),n=a("map");o({target:"Array",proto:!0,forced:!n},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f183:function(e,t,c){var o=c("d012"),r=c("861d"),a=c("5135"),n=c("9bf2").f,i=c("90e3"),s=c("bb2f"),d=i("meta"),l=0,u=Object.isExtensible||function(){return!0},b=function(e){n(e,d,{value:{objectID:"O"+ ++l,weakData:{}}})},p=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,d)){if(!u(e))return"F";if(!t)return"E";b(e)}return e[d].objectID},m=function(e,t){if(!a(e,d)){if(!u(e))return!0;if(!t)return!1;b(e)}return e[d].weakData},f=function(e){return s&&h.REQUIRED&&u(e)&&!a(e,d)&&b(e),e},h=e.exports={REQUIRED:!1,fastKey:p,getWeakData:m,onFreeze:f};o[d]=!0}}]);
//# sourceMappingURL=chunk-08026bb6.75af2b53.js.map