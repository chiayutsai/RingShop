(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46b4db1d"],{"057f":function(e,t,r){var c=r("fc6a"),o=r("241c").f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return o(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==n.call(e)?i(e):o(c(e))}},"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var c=r("6b75");function o(e,t){if(e){if("string"===typeof e)return Object(c["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c["a"])(e,t):void 0}}},"2d70":function(e,t,r){"use strict";r.r(t);r("b0c0");var c=r("7a23"),o={class:"container pt-15"},n={class:"container mt-10 mt-sm-12"},a={class:"row bg-linear rounded mx-5 p-8"},i=Object(c["createVNode"])("p",{class:"text-center text-2xl mb-6"},"感謝您的購買",-1),s=Object(c["createVNode"])("p",{class:"text-center mb-6"},"下列為您的訂單資訊",-1),l={class:"d-flex w-100 w-md-40 mx-auto"},d=Object(c["createTextVNode"])(" 前往首頁 "),u=Object(c["createTextVNode"])(" 前往商店 "),b={class:"container mt-9 mt-lg-12 border-bottom border-light pb-15 mb-15"},f={class:"row row-cols-1 row-cols-lg-2 flex-column-reverse flex-lg-row gx-5"},p={class:"col mt-9 mt-lg-0"},v=Object(c["createVNode"])("p",{class:"text-xl rounded-top bg-title p-4"},"訂單資訊",-1),O={class:"bg-table px-8 rounded-bottom"},j=Object(c["createVNode"])("div",{class:"row py-4 align-items-center text-dark border-bottom"},[Object(c["createVNode"])("div",{class:"col-6"},[Object(c["createVNode"])("p",null,"商品資訊")]),Object(c["createVNode"])("div",{class:"col-3"},[Object(c["createVNode"])("p",null,"數量")]),Object(c["createVNode"])("div",{class:"col-3"},[Object(c["createVNode"])("p",null,"小計")])],-1),g={class:"col-6"},m={class:"d-flex align-items-center"},y={class:"col-3"},h={class:"col-3"},N={class:"row text-dark px-4 py-6 border-top border-2 border-white"},w=Object(c["createVNode"])("div",{class:"col-9"},[Object(c["createVNode"])("p",{class:"fw-bold text-lg"},"總計：")],-1),V={class:"col-3"},x={class:"fw-bold text-lg text-end"},S={class:"col"},k=Object(c["createVNode"])("p",{class:"text-xl rounded-top bg-title p-4"},"顧客資訊",-1),D={class:"bg-table px-8 rounded-bottom text-dark"},A={class:"row row-cols-2 py-4 border-bottom"},P=Object(c["createVNode"])("p",{class:"col"},"下單日期",-1),C={class:"col"},L={class:"row row-cols-2 py-4 border-bottom"},B=Object(c["createVNode"])("p",{class:"col"},"顧客姓名",-1),I={class:"col"},T={class:"row row-cols-2 py-4 border-bottom"},$=Object(c["createVNode"])("p",{class:"col"},"聯絡電話",-1),E={class:"col"},F={class:"row row-cols-2 py-4 border-bottom"},J=Object(c["createVNode"])("p",{class:"col "},"電子郵件",-1),_={class:"col text-break"},M={class:"row row-cols-2 py-4 border-bottom"},U=Object(c["createVNode"])("p",{class:"col"},"地址",-1),q={class:"col"};function Q(e,t,r,Q,W,z){var G=Object(c["resolveComponent"])("Loading"),H=Object(c["resolveComponent"])("Progress"),K=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(G,{isLoading:W.isLoading},null,8,["isLoading"]),Object(c["createVNode"])("div",o,[Object(c["createVNode"])(H,{step:"4"})]),Object(c["createVNode"])("div",n,[Object(c["createVNode"])("div",a,[i,s,Object(c["createVNode"])("div",l,[Object(c["createVNode"])(K,{to:"/",class:"w-50 btn btn-outline-light shadow-sm me-6"},{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(K,{to:"/shop",class:"w-50 btn btn-secondary shadow-sm text-white secondary-hover"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})])])]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",p,[v,Object(c["createVNode"])("div",O,[j,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(W.order.products,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t.id,class:"row py-4 align-items-center text-dark border-bottom"},[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",m,[Object(c["createVNode"])("img",{class:"w-40 me-4",src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"]),Object(c["createVNode"])("p",null,Object(c["toDisplayString"])(t.product.title),1)])]),Object(c["createVNode"])("div",y,[Object(c["createVNode"])("p",null,Object(c["toDisplayString"])(t.qty),1)]),Object(c["createVNode"])("div",h,[Object(c["createVNode"])("p",null,"NT$"+Object(c["toDisplayString"])(e.toCurrency(t.final_total)),1)])])})),128)),Object(c["createVNode"])("div",N,[w,Object(c["createVNode"])("div",V,[Object(c["createVNode"])("p",x,"NT$"+Object(c["toDisplayString"])(e.toCurrency(W.order.total)),1)])])])]),Object(c["createVNode"])("div",S,[k,Object(c["createVNode"])("div",D,[Object(c["createVNode"])("div",A,[P,Object(c["createVNode"])("p",C,Object(c["toDisplayString"])(W.orderDate),1)]),Object(c["createVNode"])("div",L,[B,Object(c["createVNode"])("p",I,Object(c["toDisplayString"])(W.user.name),1)]),Object(c["createVNode"])("div",T,[$,Object(c["createVNode"])("p",E,Object(c["toDisplayString"])(W.user.tel),1)]),Object(c["createVNode"])("div",F,[J,Object(c["createVNode"])("p",_,Object(c["toDisplayString"])(W.user.email),1)]),Object(c["createVNode"])("div",M,[U,Object(c["createVNode"])("p",q,Object(c["toDisplayString"])(W.user.address),1)])])])])])],64)}var W=r("3835"),z=(r("99af"),r("ac1f"),r("1276"),r("ad18")),G={data:function(){return{orderDate:"",orderID:"",order:{},user:{},isLoading:!1}},components:{Progress:z["a"]},methods:{getOrder:function(e){var t=this;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/order/").concat(e);this.$http.get(r).then((function(e){if(e.data.success){t.order=e.data.order;var r=new Date(1e3*e.data.order.create_at).toISOString().split("T"),c=Object(W["a"])(r,1);t.orderDate=c[0],t.user=e.data.order.user,t.isLoading=!1}else t.isLoading=!1})).catch((function(){t.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))}},created:function(){this.orderID=this.$route.params.order,this.getOrder(this.orderID)}};G.render=Q;t["default"]=G},3835:function(e,t,r){"use strict";function c(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function o(e,t){var r=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var c,o,n=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(c=r.next()).done);a=!0)if(n.push(c.value),t&&n.length===t)break}catch(s){i=!0,o=s}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return n}}var n=r("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){return c(e)||o(e,t)||Object(n["a"])(e,t)||a()}},"4df4":function(e,t,r){"use strict";var c=r("0366"),o=r("7b0b"),n=r("9bdd"),a=r("e95a"),i=r("50c4"),s=r("8418"),l=r("35a1");e.exports=function(e){var t,r,d,u,b,f,p=o(e),v="function"==typeof this?this:Array,O=arguments.length,j=O>1?arguments[1]:void 0,g=void 0!==j,m=l(p),y=0;if(g&&(j=c(j,O>2?arguments[2]:void 0,2)),void 0==m||v==Array&&a(m))for(t=i(p.length),r=new v(t);t>y;y++)f=g?j(p[y],y):p[y],s(r,y,f);else for(u=m.call(p),b=u.next,r=new v;!(d=b.call(u)).done;y++)f=g?n(u,j,[d.value,y],!0):d.value,s(r,y,f);return r.length=y,r}},"6b75":function(e,t,r){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}r.d(t,"a",(function(){return c}))},"746f":function(e,t,r){var c=r("428f"),o=r("5135"),n=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=c.Symbol||(c.Symbol={});o(t,e)||a(t,e,{value:n.f(e)})}},"9bdd":function(e,t,r){var c=r("825a"),o=r("2a62");e.exports=function(e,t,r,n){try{return n?t(c(r)[0],r[1]):t(r)}catch(a){throw o(e),a}}},a4d3:function(e,t,r){"use strict";var c=r("23e7"),o=r("da84"),n=r("d066"),a=r("c430"),i=r("83ab"),s=r("4930"),l=r("fdbf"),d=r("d039"),u=r("5135"),b=r("e8b5"),f=r("861d"),p=r("825a"),v=r("7b0b"),O=r("fc6a"),j=r("c04e"),g=r("5c6c"),m=r("7c73"),y=r("df75"),h=r("241c"),N=r("057f"),w=r("7418"),V=r("06cf"),x=r("9bf2"),S=r("d1e7"),k=r("9112"),D=r("6eeb"),A=r("5692"),P=r("f772"),C=r("d012"),L=r("90e3"),B=r("b622"),I=r("e538"),T=r("746f"),$=r("d44e"),E=r("69f3"),F=r("b727").forEach,J=P("hidden"),_="Symbol",M="prototype",U=B("toPrimitive"),q=E.set,Q=E.getterFor(_),W=Object[M],z=o.Symbol,G=n("JSON","stringify"),H=V.f,K=x.f,R=N.f,X=S.f,Y=A("symbols"),Z=A("op-symbols"),ee=A("string-to-symbol-registry"),te=A("symbol-to-string-registry"),re=A("wks"),ce=o.QObject,oe=!ce||!ce[M]||!ce[M].findChild,ne=i&&d((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,r){var c=H(W,t);c&&delete W[t],K(e,t,r),c&&e!==W&&K(W,t,c)}:K,ae=function(e,t){var r=Y[e]=m(z[M]);return q(r,{type:_,tag:e,description:t}),i||(r.description=t),r},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof z},se=function(e,t,r){e===W&&se(Z,t,r),p(e);var c=j(t,!0);return p(r),u(Y,c)?(r.enumerable?(u(e,J)&&e[J][c]&&(e[J][c]=!1),r=m(r,{enumerable:g(0,!1)})):(u(e,J)||K(e,J,g(1,{})),e[J][c]=!0),ne(e,c,r)):K(e,c,r)},le=function(e,t){p(e);var r=O(t),c=y(r).concat(pe(r));return F(c,(function(t){i&&!ue.call(r,t)||se(e,t,r[t])})),e},de=function(e,t){return void 0===t?m(e):le(m(e),t)},ue=function(e){var t=j(e,!0),r=X.call(this,t);return!(this===W&&u(Y,t)&&!u(Z,t))&&(!(r||!u(this,t)||!u(Y,t)||u(this,J)&&this[J][t])||r)},be=function(e,t){var r=O(e),c=j(t,!0);if(r!==W||!u(Y,c)||u(Z,c)){var o=H(r,c);return!o||!u(Y,c)||u(r,J)&&r[J][c]||(o.enumerable=!0),o}},fe=function(e){var t=R(O(e)),r=[];return F(t,(function(e){u(Y,e)||u(C,e)||r.push(e)})),r},pe=function(e){var t=e===W,r=R(t?Z:O(e)),c=[];return F(r,(function(e){!u(Y,e)||t&&!u(W,e)||c.push(Y[e])})),c};if(s||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function(e){this===W&&r.call(Z,e),u(this,J)&&u(this[J],t)&&(this[J][t]=!1),ne(this,t,g(1,e))};return i&&oe&&ne(W,t,{configurable:!0,set:r}),ae(t,e)},D(z[M],"toString",(function(){return Q(this).tag})),D(z,"withoutSetter",(function(e){return ae(L(e),e)})),S.f=ue,x.f=se,V.f=be,h.f=N.f=fe,w.f=pe,I.f=function(e){return ae(B(e),e)},i&&(K(z[M],"description",{configurable:!0,get:function(){return Q(this).description}}),a||D(W,"propertyIsEnumerable",ue,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:z}),F(y(re),(function(e){T(e)})),c({target:_,stat:!0,forced:!s},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var r=z(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),c({target:"Object",stat:!0,forced:!s,sham:!i},{create:de,defineProperty:se,defineProperties:le,getOwnPropertyDescriptor:be}),c({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),c({target:"Object",stat:!0,forced:d((function(){w.f(1)}))},{getOwnPropertySymbols:function(e){return w.f(v(e))}}),G){var ve=!s||d((function(){var e=z();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));c({target:"JSON",stat:!0,forced:ve},{stringify:function(e,t,r){var c,o=[e],n=1;while(arguments.length>n)o.push(arguments[n++]);if(c=t,(f(t)||void 0!==e)&&!ie(e))return b(t)||(t=function(e,t){if("function"==typeof c&&(t=c.call(this,e,t)),!ie(t))return t}),o[1]=t,G.apply(null,o)}})}z[M][U]||k(z[M],U,z[M].valueOf),$(z,_),C[J]=!0},a630:function(e,t,r){var c=r("23e7"),o=r("4df4"),n=r("1c7e"),a=!n((function(e){Array.from(e)}));c({target:"Array",stat:!0,forced:a},{from:o})},ad18:function(e,t,r){"use strict";var c=r("7a23"),o={class:"d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto"},n={class:"d-flex flex-column align-items-center"},a=Object(c["createVNode"])("p",null,"購物車",-1),i={class:"d-flex flex-column align-items-center"},s=Object(c["createVNode"])("p",null,"填寫資訊",-1),l={class:"d-flex flex-column align-items-center"},d=Object(c["createVNode"])("p",null,"確認訂單",-1),u={class:"d-flex flex-column align-items-center"},b=Object(c["createVNode"])("p",null,"完成購物",-1);function f(e,t,r,f,p,v){return Object(c["openBlock"])(),Object(c["createBlock"])("ul",o,[Object(c["createVNode"])("li",n,[Object(c["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-4",{"progress-active":"1"===r.step}]}," 1 ",2),a]),Object(c["createVNode"])("li",i,[Object(c["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle  rounded-circle border mb-4",{"progress-active":"2"===r.step}]}," 2 ",2),s]),Object(c["createVNode"])("li",l,[Object(c["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-4",{"progress-active":"3"===r.step}]}," 3 ",2),d]),Object(c["createVNode"])("li",u,[Object(c["createVNode"])("div",{class:["d-flex align-items-center justify-content-center circle rounded-circle border mb-4",{"progress-active":"4"===r.step}]}," 4 ",2),b])])}var p={props:{step:String}};p.render=f;t["a"]=p},d28b:function(e,t,r){var c=r("746f");c("iterator")},e01a:function(e,t,r){"use strict";var c=r("23e7"),o=r("83ab"),n=r("da84"),a=r("5135"),i=r("861d"),s=r("9bf2").f,l=r("e893"),d=n.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};l(b,d);var f=b.prototype=d.prototype;f.constructor=b;var p=f.toString,v="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=p.call(e);if(a(u,e))return"";var r=v?t.slice(7,-1):t.replace(O,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:b})}},e538:function(e,t,r){var c=r("b622");t.f=c},fb6a:function(e,t,r){"use strict";var c=r("23e7"),o=r("861d"),n=r("e8b5"),a=r("23cb"),i=r("50c4"),s=r("fc6a"),l=r("8418"),d=r("b622"),u=r("1dde"),b=u("slice"),f=d("species"),p=[].slice,v=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var r,c,d,u=s(this),b=i(u.length),O=a(e,b),j=a(void 0===t?b:t,b);if(n(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?o(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(u,O,j);for(c=new(void 0===r?Array:r)(v(j-O,0)),d=0;O<j;O++,d++)O in u&&l(c,d,u[O]);return c.length=d,c}})}}]);
//# sourceMappingURL=chunk-46b4db1d.9c241e73.js.map