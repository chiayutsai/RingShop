(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f43f388c"],{"057f":function(e,t,r){var o=r("fc6a"),c=r("241c").f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return c(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==n.call(e)?i(e):c(o(e))}},"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var o=r("6b75");function c(e,t){if(e){if("string"===typeof e)return Object(o["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(o["a"])(e,t):void 0}}},3835:function(e,t,r){"use strict";function o(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function c(e,t){var r=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var o,c,n=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(o=r.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(s){i=!0,c=s}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw c}}return n}}var n=r("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){return o(e)||c(e,t)||Object(n["a"])(e,t)||a()}},"4df4":function(e,t,r){"use strict";var o=r("0366"),c=r("7b0b"),n=r("9bdd"),a=r("e95a"),i=r("50c4"),s=r("8418"),l=r("35a1");e.exports=function(e){var t,r,d,b,u,f,p=c(e),m="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,y=void 0!==g,O=l(p),j=0;if(y&&(g=o(g,v>2?arguments[2]:void 0,2)),void 0==O||m==Array&&a(O))for(t=i(p.length),r=new m(t);t>j;j++)f=y?g(p[j],j):p[j],s(r,j,f);else for(b=O.call(p),u=b.next,r=new m;!(d=u.call(b)).done;j++)f=y?n(b,g,[d.value,j],!0):d.value,s(r,j,f);return r.length=j,r}},"6b75":function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}r.d(t,"a",(function(){return o}))},"746f":function(e,t,r){var o=r("428f"),c=r("5135"),n=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});c(t,e)||a(t,e,{value:n.f(e)})}},"83d7":function(e,t,r){"use strict";r.r(t);r("b0c0");var o=r("7a23"),c={class:"container pt-15"},n={class:"container border-bottom border-light mt-10 mt-sm-15 pb-15 mb-15"},a={class:"row bg-linear rounded p-8 mx-5"},i=Object(o["createVNode"])("h3",{class:"text-center mb-10"},"確認訂單",-1),s={class:"col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 "},l={class:"row mb-8"},d=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"下單日期：",-1),b={class:"col-8 mb-4 pb-4 border-bottom"},u=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"訂單編號：",-1),f={class:"col-8 mb-4 pb-4 border-bottom"},p=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"顧客姓名：",-1),m={class:"col-8 mb-4 pb-4 border-bottom"},v=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"聯絡電話：",-1),g={class:"col-8 mb-4 pb-4 border-bottom"},y=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"電子郵件：",-1),O={class:"col-8 mb-4 pb-4 border-bottom"},j=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"地址：",-1),h={class:"col-8 mb-4 pb-4 border-bottom"},w={key:0,class:"col-4 fw-bold mb-4 pb-4 border-bottom"},N={key:1,class:"col-8 mb-4 pb-4 border-bottom"},V=Object(o["createVNode"])("p",{class:"col-4 fw-bold mb-4 pb-4 border-bottom"},"訂單金額：",-1),S={class:"col-8 mb-4 pb-4 border-bottom d-flex align-items-center justify-content-between"},x=Object(o["createVNode"])("span",{class:"material-icons"}," arrow_drop_down_circle ",-1),k={class:"collapse",id:"collapseExample",ref:"collapse"},D=Object(o["createStaticVNode"])('<p class="fw-bold mb-6">購買商品</p><div class="row align-items-center mb-4"><div class="col-6"><p>商品詳情</p></div><div class="col-3"><p>數量</p></div><div class="col-3"><p>小計</p></div></div>',2),A={class:"col-6"},C={class:"d-flex align-items-center"},L={class:"col-3"},B={class:"col-3"};function P(e,t,r,P,$,I){var E=Object(o["resolveComponent"])("Loading"),T=Object(o["resolveComponent"])("Progress");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(E,{isLoading:$.isLoading},null,8,["isLoading"]),Object(o["createVNode"])("div",c,[Object(o["createVNode"])(T,{step:"3"})]),Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",a,[i,Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",l,[d,Object(o["createVNode"])("p",b,Object(o["toDisplayString"])($.orderDate),1),u,Object(o["createVNode"])("p",f,Object(o["toDisplayString"])($.order.id),1),p,Object(o["createVNode"])("p",m,Object(o["toDisplayString"])($.user.name),1),v,Object(o["createVNode"])("p",g,Object(o["toDisplayString"])($.user.tel),1),y,Object(o["createVNode"])("p",O,Object(o["toDisplayString"])($.user.email),1),j,Object(o["createVNode"])("p",h,Object(o["toDisplayString"])($.user.address),1),$.order.message?(Object(o["openBlock"])(),Object(o["createBlock"])("p",w,"備註：")):Object(o["createCommentVNode"])("",!0),$.order.message?(Object(o["openBlock"])(),Object(o["createBlock"])("p",N,Object(o["toDisplayString"])($.order.message),1)):Object(o["createCommentVNode"])("",!0),V,Object(o["createVNode"])("p",S,[Object(o["createTextVNode"])(" NT$"+Object(o["toDisplayString"])(e.toCurrency($.order.total))+" ",1),Object(o["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return I.openCollapse&&I.openCollapse.apply(I,arguments)}),["prevent"])),class:["lh-1",{"arrow-rotate":$.open}]},[x],2)]),Object(o["createVNode"])("div",k,[D,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])($.order.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t.id,class:"row align-items-center mb-5"},[Object(o["createVNode"])("div",A,[Object(o["createVNode"])("div",C,[Object(o["createVNode"])("img",{class:"w-40 me-4",src:t.product.imageUrl,alt:""},null,8,["src"]),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(t.product.title),1)])]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(t.qty),1)]),Object(o["createVNode"])("div",B,[Object(o["createVNode"])("p",null,"NT$"+Object(o["toDisplayString"])(e.toCurrency(t.final_total)),1)])])})),128))],512)]),Object(o["createVNode"])("button",{type:"button",onClick:t[2]||(t[2]=function(e){return I.pay($.orderID)}),class:"w-100 text-white btn btn-lg btn-secondary secondary-hover shadow"}," 確認結帳 ")])])])],64)}var $=r("3835"),I=(r("99af"),r("ac1f"),r("1276"),r("ad18")),E=r("7b17"),T={data:function(){return{orderDate:"",orderID:"",order:{},user:{},isLoading:!1,collapse:"",open:!1}},components:{Progress:I["a"]},inject:["emitter"],methods:{getOrder:function(e){var t=this;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/order/").concat(e);this.$http.get(r).then((function(e){if(e.data.success){t.order=e.data.order;var r=new Date(1e3*e.data.order.create_at).toISOString().split("T"),o=Object($["a"])(r,1);t.orderDate=o[0],t.user=e.data.order.user,t.isLoading=!1}else t.isLoading=!1})).catch((function(e){return e}))},openCollapse:function(){this.collapse.toggle(),this.open=!0},pay:function(e){var t=this;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/pay/").concat(e);this.$http.post(r).then((function(e){e.data.success?(t.$router.push({name:"final",params:{order:t.orderID}}),t.isLoading=!1):(t.emitter.emit("push-message",{type:"error",message:e.data.message}),t.isLoading=!1)})).catch((function(e){return e}))}},mounted:function(){var e=this;this.collapse=new E["a"](this.$refs.collapse,{toggle:!1}),this.$refs.collapse.addEventListener("hidden.bs.collapse",(function(){e.open=!1}))},created:function(){this.orderID=this.$route.params.order,this.getOrder(this.orderID)}};T.render=P;t["default"]=T},"9bdd":function(e,t,r){var o=r("825a"),c=r("2a62");e.exports=function(e,t,r,n){try{return n?t(o(r)[0],r[1]):t(r)}catch(a){throw c(e),a}}},a4d3:function(e,t,r){"use strict";var o=r("23e7"),c=r("da84"),n=r("d066"),a=r("c430"),i=r("83ab"),s=r("4930"),l=r("fdbf"),d=r("d039"),b=r("5135"),u=r("e8b5"),f=r("861d"),p=r("825a"),m=r("7b0b"),v=r("fc6a"),g=r("c04e"),y=r("5c6c"),O=r("7c73"),j=r("df75"),h=r("241c"),w=r("057f"),N=r("7418"),V=r("06cf"),S=r("9bf2"),x=r("d1e7"),k=r("9112"),D=r("6eeb"),A=r("5692"),C=r("f772"),L=r("d012"),B=r("90e3"),P=r("b622"),$=r("e538"),I=r("746f"),E=r("d44e"),T=r("69f3"),_=r("b727").forEach,F=C("hidden"),J="Symbol",M="prototype",U=P("toPrimitive"),q=T.set,Q=T.getterFor(J),W=Object[M],z=c.Symbol,G=n("JSON","stringify"),H=V.f,K=S.f,R=w.f,X=x.f,Y=A("symbols"),Z=A("op-symbols"),ee=A("string-to-symbol-registry"),te=A("symbol-to-string-registry"),re=A("wks"),oe=c.QObject,ce=!oe||!oe[M]||!oe[M].findChild,ne=i&&d((function(){return 7!=O(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,r){var o=H(W,t);o&&delete W[t],K(e,t,r),o&&e!==W&&K(W,t,o)}:K,ae=function(e,t){var r=Y[e]=O(z[M]);return q(r,{type:J,tag:e,description:t}),i||(r.description=t),r},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof z},se=function(e,t,r){e===W&&se(Z,t,r),p(e);var o=g(t,!0);return p(r),b(Y,o)?(r.enumerable?(b(e,F)&&e[F][o]&&(e[F][o]=!1),r=O(r,{enumerable:y(0,!1)})):(b(e,F)||K(e,F,y(1,{})),e[F][o]=!0),ne(e,o,r)):K(e,o,r)},le=function(e,t){p(e);var r=v(t),o=j(r).concat(pe(r));return _(o,(function(t){i&&!be.call(r,t)||se(e,t,r[t])})),e},de=function(e,t){return void 0===t?O(e):le(O(e),t)},be=function(e){var t=g(e,!0),r=X.call(this,t);return!(this===W&&b(Y,t)&&!b(Z,t))&&(!(r||!b(this,t)||!b(Y,t)||b(this,F)&&this[F][t])||r)},ue=function(e,t){var r=v(e),o=g(t,!0);if(r!==W||!b(Y,o)||b(Z,o)){var c=H(r,o);return!c||!b(Y,o)||b(r,F)&&r[F][o]||(c.enumerable=!0),c}},fe=function(e){var t=R(v(e)),r=[];return _(t,(function(e){b(Y,e)||b(L,e)||r.push(e)})),r},pe=function(e){var t=e===W,r=R(t?Z:v(e)),o=[];return _(r,(function(e){!b(Y,e)||t&&!b(W,e)||o.push(Y[e])})),o};if(s||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=B(e),r=function(e){this===W&&r.call(Z,e),b(this,F)&&b(this[F],t)&&(this[F][t]=!1),ne(this,t,y(1,e))};return i&&ce&&ne(W,t,{configurable:!0,set:r}),ae(t,e)},D(z[M],"toString",(function(){return Q(this).tag})),D(z,"withoutSetter",(function(e){return ae(B(e),e)})),x.f=be,S.f=se,V.f=ue,h.f=w.f=fe,N.f=pe,$.f=function(e){return ae(P(e),e)},i&&(K(z[M],"description",{configurable:!0,get:function(){return Q(this).description}}),a||D(W,"propertyIsEnumerable",be,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:z}),_(j(re),(function(e){I(e)})),o({target:J,stat:!0,forced:!s},{for:function(e){var t=String(e);if(b(ee,t))return ee[t];var r=z(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(b(te,e))return te[e]},useSetter:function(){ce=!0},useSimple:function(){ce=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!i},{create:de,defineProperty:se,defineProperties:le,getOwnPropertyDescriptor:ue}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),o({target:"Object",stat:!0,forced:d((function(){N.f(1)}))},{getOwnPropertySymbols:function(e){return N.f(m(e))}}),G){var me=!s||d((function(){var e=z();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));o({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,r){var o,c=[e],n=1;while(arguments.length>n)c.push(arguments[n++]);if(o=t,(f(t)||void 0!==e)&&!ie(e))return u(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!ie(t))return t}),c[1]=t,G.apply(null,c)}})}z[M][U]||k(z[M],U,z[M].valueOf),E(z,J),L[F]=!0},a630:function(e,t,r){var o=r("23e7"),c=r("4df4"),n=r("1c7e"),a=!n((function(e){Array.from(e)}));o({target:"Array",stat:!0,forced:a},{from:c})},ad18:function(e,t,r){"use strict";var o=r("7a23"),c={class:"d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto mb-10"},n={class:"d-flex flex-column align-items-center"},a=Object(o["createVNode"])("p",null,"購物車",-1),i={class:"d-flex flex-column align-items-center"},s=Object(o["createVNode"])("p",null,"填寫資訊",-1),l={class:"d-flex flex-column align-items-center"},d=Object(o["createVNode"])("p",null,"確認訂單",-1),b={class:"d-flex flex-column align-items-center"},u=Object(o["createVNode"])("p",null,"完成購物",-1);function f(e,t,r,f,p,m){return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"1"===r.step}]}," 1 ",2),a]),Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"2"===r.step}]}," 2 ",2),s]),Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"3"===r.step}]}," 3 ",2),d]),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-2",{"progress-active":"4"===r.step}]}," 4 ",2),u])])}var p={props:{step:String}};p.render=f;t["a"]=p},d28b:function(e,t,r){var o=r("746f");o("iterator")},e01a:function(e,t,r){"use strict";var o=r("23e7"),c=r("83ab"),n=r("da84"),a=r("5135"),i=r("861d"),s=r("9bf2").f,l=r("e893"),d=n.Symbol;if(c&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var b={},u=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof u?new d(e):void 0===e?d():d(e);return""===e&&(b[t]=!0),t};l(u,d);var f=u.prototype=d.prototype;f.constructor=u;var p=f.toString,m="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=p.call(e);if(a(b,e))return"";var r=m?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),o({global:!0,forced:!0},{Symbol:u})}},e538:function(e,t,r){var o=r("b622");t.f=o},fb6a:function(e,t,r){"use strict";var o=r("23e7"),c=r("861d"),n=r("e8b5"),a=r("23cb"),i=r("50c4"),s=r("fc6a"),l=r("8418"),d=r("b622"),b=r("1dde"),u=b("slice"),f=d("species"),p=[].slice,m=Math.max;o({target:"Array",proto:!0,forced:!u},{slice:function(e,t){var r,o,d,b=s(this),u=i(b.length),v=a(e,u),g=a(void 0===t?u:t,u);if(n(b)&&(r=b.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?c(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(b,v,g);for(o=new(void 0===r?Array:r)(m(g-v,0)),d=0;v<g;v++,d++)v in b&&l(o,d,b[v]);return o.length=d,o}})}}]);
//# sourceMappingURL=chunk-f43f388c.aed4b00f.js.map