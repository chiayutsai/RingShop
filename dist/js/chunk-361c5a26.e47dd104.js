(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-361c5a26"],{"83d7":function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),r={class:"container pt-15"},a={class:"container border-bottom border-light mt-15 pb-15 mb-15"},s={class:"row bg-linear rounded p-8"},l=Object(o["createVNode"])("h3",{class:"text-center mb-10"},"確認訂單",-1),d={class:"col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 "},n={class:"row mb-8"},i=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"下單日期：",-1),b={class:"col-8 mb-4 pb-4 border-bottom"},p=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"訂單編號：",-1),m={class:"col-8 mb-4 pb-4 border-bottom"},j=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"顧客姓名：",-1),u={class:"col-8 mb-4 pb-4 border-bottom"},O=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"聯絡電話：",-1),g={class:"col-8 mb-4 pb-4 border-bottom"},f=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"電子郵件：",-1),N={class:"col-8 mb-4 pb-4 border-bottom"},v=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"地址：",-1),V={class:"col-8 mb-4 pb-4 border-bottom"},h={key:0,class:"col-4 fw-bold mb-4 pb-4 border-bottom"},w={key:1,class:"col-8 mb-4 pb-4 border-bottom"},y=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"訂單金額：",-1),x={class:"col-8 mb-4 pb-4 border-bottom d-flex align-items-center justify-content-between"},k=Object(o["createVNode"])("span",{class:"material-icons"}," arrow_drop_down_circle ",-1),D={class:"collapse",id:"collapseExample",ref:"collapse"},S=Object(o["createStaticVNode"])('<p class="fw-bold mb-6">購買商品</p><div class="row align-items-center mb-4"><div class="col-6"><p>商品詳情</p></div><div class="col-3"><p>數量</p></div><div class="col-3"><p>小計</p></div></div>',2),L={class:"col-6"},B={class:"d-flex align-items-center"},C={class:"col-3"},$={class:"col-3"};function I(e,t,c,I,_,T){var E=Object(o["resolveComponent"])("Loading"),F=Object(o["resolveComponent"])("Progress");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(E,{isLoading:_.isLoading},null,8,["isLoading"]),Object(o["createVNode"])("div",r,[Object(o["createVNode"])(F,{step:"3"})]),Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",s,[l,Object(o["createVNode"])("div",d,[Object(o["createVNode"])("div",n,[i,Object(o["createVNode"])("p",b,Object(o["toDisplayString"])(_.orderDate),1),p,Object(o["createVNode"])("p",m,Object(o["toDisplayString"])(_.order.id),1),j,Object(o["createVNode"])("p",u,Object(o["toDisplayString"])(_.user.name),1),O,Object(o["createVNode"])("p",g,Object(o["toDisplayString"])(_.user.tel),1),f,Object(o["createVNode"])("p",N,Object(o["toDisplayString"])(_.user.email),1),v,Object(o["createVNode"])("p",V,Object(o["toDisplayString"])(_.user.address),1),_.order.message?(Object(o["openBlock"])(),Object(o["createBlock"])("p",h,"備註：")):Object(o["createCommentVNode"])("",!0),_.order.message?(Object(o["openBlock"])(),Object(o["createBlock"])("p",w,Object(o["toDisplayString"])(_.order.message),1)):Object(o["createCommentVNode"])("",!0),y,Object(o["createVNode"])("p",x,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(_.order.total)+" ",1),Object(o["createVNode"])("a",{href:"",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return T.openCollapse&&T.openCollapse.apply(T,arguments)}),["prevent"])),class:["lh-1",{"arrow-rotate":_.open}]},[k],2)]),Object(o["createVNode"])("div",D,[S,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(_.order.products,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:e.id,class:"row align-items-center mb-5"},[Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("img",{class:"w-40 me-4",src:e.product.imageUrl,alt:""},null,8,["src"]),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(e.product.title),1)])]),Object(o["createVNode"])("div",C,[Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(e.qty),1)]),Object(o["createVNode"])("div",$,[Object(o["createVNode"])("p",null,"NT$"+Object(o["toDisplayString"])(e.final_total),1)])])})),128))],512)]),Object(o["createVNode"])("button",{type:"button",onClick:t[2]||(t[2]=function(e){return T.pay(_.orderID)}),class:"w-100 text-white btn btn-lg btn-secondary secondary-hover shadow"}," 確認結帳 ")])])])],64)}var _=c("3835"),T=(c("99af"),c("ac1f"),c("1276"),c("ad18")),E=c("7b17"),F={data:function(){return{orderDate:"",orderID:"",order:{},user:{},isLoading:!1,collapse:"",open:!1}},components:{Progress:T["a"]},inject:["emitter"],methods:{getOrder:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/order/").concat(e);this.$http.get(c).then((function(e){if(console.log(e.data),e.data.success){t.order=e.data.order;var c=new Date(1e3*e.data.order.create_at).toISOString().split("T"),o=Object(_["a"])(c,1);t.orderDate=o[0],t.user=e.data.order.user,t.isLoading=!1}else console.log(e.data.message),t.isLoading=!1})).catch((function(e){console.log(e)}))},openCollapse:function(){this.collapse.toggle(),this.open=!0},pay:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/pay/").concat(e);this.$http.post(c).then((function(e){console.log(e.data),e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.$router.push({name:"final",params:{order:t.orderID}}),t.isLoading=!1):(t.emitter.emit("push-message",{type:"error",message:e.data.message}),t.isLoading=!1)})).catch((function(e){console.log(e)}))}},mounted:function(){var e=this;this.collapse=new E["a"](this.$refs.collapse,{toggle:!1}),this.$refs.collapse.addEventListener("hidden.bs.collapse",(function(){e.open=!1}))},created:function(){this.orderID=this.$route.params.order,this.getOrder(this.orderID)}};F.render=I;t["default"]=F},ad18:function(e,t,c){"use strict";var o=c("7a23"),r={class:"d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto mb-10"},a={class:"d-flex flex-column align-items-center"},s=Object(o["createVNode"])("p",null,"購物車",-1),l={class:"d-flex flex-column align-items-center"},d=Object(o["createVNode"])("p",null,"填寫資訊",-1),n={class:"d-flex flex-column align-items-center"},i=Object(o["createVNode"])("p",null,"確認訂單",-1),b={class:"d-flex flex-column align-items-center"},p=Object(o["createVNode"])("p",null,"完成購物",-1);function m(e,t,c,m,j,u){return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"1"===c.step}]}," 1 ",2),s]),Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"2"===c.step}]}," 2 ",2),d]),Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"3"===c.step}]}," 3 ",2),i]),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"4"===c.step}]}," 4 ",2),p])])}var j={props:{step:String}};j.render=m;t["a"]=j}}]);
//# sourceMappingURL=chunk-361c5a26.e47dd104.js.map