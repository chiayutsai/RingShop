(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64ae251e"],{"057f":function(e,t,c){var o=c("fc6a"),r=c("241c").f,a={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return r(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==a.call(e)?l(e):r(o(e))}},2532:function(e,t,c){"use strict";var o=c("23e7"),r=c("5a34"),a=c("1d80"),n=c("ab13");o({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(a(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var o=c("861d"),r=c("c6b6"),a=c("b622"),n=a("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==r(e))}},"5a34":function(e,t,c){var o=c("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"746f":function(e,t,c){var o=c("428f"),r=c("5135"),a=c("e538"),n=c("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});r(t,e)||n(t,e,{value:a.f(e)})}},a434:function(e,t,c){"use strict";var o=c("23e7"),r=c("23cb"),a=c("a691"),n=c("50c4"),l=c("7b0b"),i=c("65f0"),s=c("8418"),d=c("1dde"),u=d("splice"),b=Math.max,p=Math.min,m=9007199254740991,f="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,d,u,O,h,j=l(this),v=n(j.length),g=r(e,v),y=arguments.length;if(0===y?c=o=0:1===y?(c=0,o=v-g):(c=y-2,o=p(b(a(t),0),v-g)),v+c-o>m)throw TypeError(f);for(d=i(j,o),u=0;u<o;u++)O=g+u,O in j&&s(d,u,j[O]);if(d.length=o,c<o){for(u=g;u<v-o;u++)O=u+o,h=u+c,O in j?j[h]=j[O]:delete j[h];for(u=v;u>v-o+c;u--)delete j[u-1]}else if(c>o)for(u=v-o;u>g;u--)O=u+o-1,h=u+c-1,O in j?j[h]=j[O]:delete j[h];for(u=0;u<c;u++)j[u+g]=arguments[u+2];return j.length=v-o+c,d}})},a4d3:function(e,t,c){"use strict";var o=c("23e7"),r=c("da84"),a=c("d066"),n=c("c430"),l=c("83ab"),i=c("4930"),s=c("fdbf"),d=c("d039"),u=c("5135"),b=c("e8b5"),p=c("861d"),m=c("825a"),f=c("7b0b"),O=c("fc6a"),h=c("c04e"),j=c("5c6c"),v=c("7c73"),g=c("df75"),y=c("241c"),V=c("057f"),k=c("7418"),N=c("06cf"),x=c("9bf2"),w=c("d1e7"),P=c("9112"),U=c("6eeb"),C=c("5692"),B=c("f772"),S=c("d012"),T=c("90e3"),D=c("b622"),A=c("e538"),I=c("746f"),M=c("d44e"),F=c("69f3"),E=c("b727").forEach,_=B("hidden"),$="Symbol",J="prototype",q=D("toPrimitive"),L=F.set,z=F.getterFor($),Q=Object[J],R=r.Symbol,W=a("JSON","stringify"),G=N.f,H=x.f,K=V.f,X=w.f,Y=C("symbols"),Z=C("op-symbols"),ee=C("string-to-symbol-registry"),te=C("symbol-to-string-registry"),ce=C("wks"),oe=r.QObject,re=!oe||!oe[J]||!oe[J].findChild,ae=l&&d((function(){return 7!=v(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,c){var o=G(Q,t);o&&delete Q[t],H(e,t,c),o&&e!==Q&&H(Q,t,o)}:H,ne=function(e,t){var c=Y[e]=v(R[J]);return L(c,{type:$,tag:e,description:t}),l||(c.description=t),c},le=s?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof R},ie=function(e,t,c){e===Q&&ie(Z,t,c),m(e);var o=h(t,!0);return m(c),u(Y,o)?(c.enumerable?(u(e,_)&&e[_][o]&&(e[_][o]=!1),c=v(c,{enumerable:j(0,!1)})):(u(e,_)||H(e,_,j(1,{})),e[_][o]=!0),ae(e,o,c)):H(e,o,c)},se=function(e,t){m(e);var c=O(t),o=g(c).concat(me(c));return E(o,(function(t){l&&!ue.call(c,t)||ie(e,t,c[t])})),e},de=function(e,t){return void 0===t?v(e):se(v(e),t)},ue=function(e){var t=h(e,!0),c=X.call(this,t);return!(this===Q&&u(Y,t)&&!u(Z,t))&&(!(c||!u(this,t)||!u(Y,t)||u(this,_)&&this[_][t])||c)},be=function(e,t){var c=O(e),o=h(t,!0);if(c!==Q||!u(Y,o)||u(Z,o)){var r=G(c,o);return!r||!u(Y,o)||u(c,_)&&c[_][o]||(r.enumerable=!0),r}},pe=function(e){var t=K(O(e)),c=[];return E(t,(function(e){u(Y,e)||u(S,e)||c.push(e)})),c},me=function(e){var t=e===Q,c=K(t?Z:O(e)),o=[];return E(c,(function(e){!u(Y,e)||t&&!u(Q,e)||o.push(Y[e])})),o};if(i||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=T(e),c=function(e){this===Q&&c.call(Z,e),u(this,_)&&u(this[_],t)&&(this[_][t]=!1),ae(this,t,j(1,e))};return l&&re&&ae(Q,t,{configurable:!0,set:c}),ne(t,e)},U(R[J],"toString",(function(){return z(this).tag})),U(R,"withoutSetter",(function(e){return ne(T(e),e)})),w.f=ue,x.f=ie,N.f=be,y.f=V.f=pe,k.f=me,A.f=function(e){return ne(D(e),e)},l&&(H(R[J],"description",{configurable:!0,get:function(){return z(this).description}}),n||U(Q,"propertyIsEnumerable",ue,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!i,sham:!i},{Symbol:R}),E(g(ce),(function(e){I(e)})),o({target:$,stat:!0,forced:!i},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var c=R(t);return ee[t]=c,te[c]=t,c},keyFor:function(e){if(!le(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),o({target:"Object",stat:!0,forced:!i,sham:!l},{create:de,defineProperty:ie,defineProperties:se,getOwnPropertyDescriptor:be}),o({target:"Object",stat:!0,forced:!i},{getOwnPropertyNames:pe,getOwnPropertySymbols:me}),o({target:"Object",stat:!0,forced:d((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(f(e))}}),W){var fe=!i||d((function(){var e=R();return"[null]"!=W([e])||"{}"!=W({a:e})||"{}"!=W(Object(e))}));o({target:"JSON",stat:!0,forced:fe},{stringify:function(e,t,c){var o,r=[e],a=1;while(arguments.length>a)r.push(arguments[a++]);if(o=t,(p(t)||void 0!==e)&&!le(e))return b(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!le(t))return t}),r[1]=t,W.apply(null,r)}})}R[J][q]||P(R[J],q,R[J].valueOf),M(R,$),S[_]=!0},ab13:function(e,t,c){var o=c("b622"),r=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[r]=!1,"/./"[e](t)}catch(o){}}return!1}},b727:function(e,t,c){var o=c("0366"),r=c("44ad"),a=c("7b0b"),n=c("50c4"),l=c("65f0"),i=[].push,s=function(e){var t=1==e,c=2==e,s=3==e,d=4==e,u=6==e,b=7==e,p=5==e||u;return function(m,f,O,h){for(var j,v,g=a(m),y=r(g),V=o(f,O,3),k=n(y.length),N=0,x=h||l,w=t?x(m,k):c||b?x(m,0):void 0;k>N;N++)if((p||N in y)&&(j=y[N],v=V(j,N,g),e))if(t)w[N]=v;else if(v)switch(e){case 3:return!0;case 5:return j;case 6:return N;case 2:i.call(w,j)}else switch(e){case 4:return!1;case 7:i.call(w,j)}return u?-1:s||d?d:w}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},caad:function(e,t,c){"use strict";var o=c("23e7"),r=c("4d64").includes,a=c("44d2");o({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},da51:function(e,t,c){"use strict";c("a4d3"),c("e01a");var o=c("7a23"),r={class:"row"},a={class:"col-12 mb-8"},n={for:"productTitle",class:"form-label"},l=Object(o["createTextVNode"])("產品名稱"),i={key:0},s={class:"col-6 mb-8"},d={for:"productOriginPrice",class:"form-label"},u=Object(o["createTextVNode"])("產品原價"),b={key:0},p={class:"col-6 mb-8"},m={for:"productPrice",class:"form-label"},f=Object(o["createTextVNode"])("產品售價"),O={key:0},h={class:"row row-cols-2 align-items-end"},j={class:"col mb-8"},v={class:"form-label"},g=Object(o["createTextVNode"])("產品分類"),y={key:0},V={class:"col mb-8"},k={key:0,class:"d-flex"},N={class:"row row-cols-2 align-items-end"},x={class:"col "},w=Object(o["createVNode"])("label",{class:"form-label"},"產品規格",-1),P=Object(o["createVNode"])("p",null,":",-1),U={class:"col mb-8"},C={class:"row"},B={class:"col-6 mb-8"},S={for:"productUnit",class:"form-label"},T=Object(o["createTextVNode"])("產品單位"),D={key:0},A={class:"col-6 mb-8"},I=Object(o["createVNode"])("p",{class:"mb-3"},"是否上架產品",-1),M={class:"form-check mt-4"},F={key:0,class:"form-check-label",for:"flexCheckDefault"},E={key:1,class:"form-check-label",for:"flexCheckDefault"},_={class:"col-12 mb-8"},$=Object(o["createVNode"])("label",{for:"productDescription",class:"form-label"},"產品描述",-1),J={class:"col-12 mb-8"},q=Object(o["createVNode"])("label",{for:"productContent",class:"form-label"},"說明內容",-1),L={class:"col-12 mb-8"},z=Object(o["createVNode"])("p",{class:"mb-3"},"主要圖片",-1),Q={class:"row row-cols-2 align-items-center"},R={class:"col"},W=Object(o["createVNode"])("label",{for:"productImage",class:"form-label text-xs"},"圖片位址",-1),G=Object(o["createVNode"])("p",{class:"text-xs mb-2"},"或",-1),H={key:0,class:"btn btn-primary text-sm text-secondary",type:"button",disabled:""},K=Object(o["createVNode"])("span",{class:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"},null,-1),X=Object(o["createTextVNode"])(" 上傳中... "),Y={key:1,class:"btn btn-primary text-sm text-secondary"},Z=Object(o["createVNode"])("span",{class:"material-icons text-base "}," file_upload ",-1),ee=Object(o["createTextVNode"])(" 上傳圖片 "),te={class:"col"},ce={class:"col-12 mb-8"},oe=Object(o["createVNode"])("p",{class:"mb-3"},"輪播圖片",-1),re={class:"row row-cols-3 align-items-end"},ae=Object(o["createVNode"])("p",{class:"text-xs  mb-2"},"或",-1),ne={key:0,class:"d-block w-100 btn btn-primary text-sm  text-secondary mb-4",type:"button",disabled:""},le=Object(o["createVNode"])("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ie=Object(o["createTextVNode"])(" 上傳中... "),se={key:1,class:"d-block btn btn-primary text-sm text-secondary mb-4"},de=Object(o["createVNode"])("span",{class:"material-icons text-base align-text-bottom"}," file_upload ",-1),ue=Object(o["createTextVNode"])(" 上傳圖片 ");function be(e,t,c,be,pe,me){var fe=this,Oe=Object(o["resolveComponent"])("Field"),he=Object(o["resolveComponent"])("error-message"),je=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])(je,{ref:"addForm",class:"text-dark"},{default:Object(o["withCtx"])((function(e){var be=e.errors;return[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("label",n,[l,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",i,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"text",class:["form-control",{"is-backend-invalid":be["產品名稱"]}],id:"productTitle",name:"產品名稱",placeholder:"輸入產品標題",rules:"required",modelValue:pe.tempProduct.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return pe.tempProduct.title=e}),modelModifiers:{lazy:!0,trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(he,{name:"產品名稱",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",s,[Object(o["createVNode"])("label",d,[u,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",b,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"number",class:["form-control",{"is-backend-invalid":be["產品原價"]}],id:"productOriginPrice",name:"產品原價",min:"0",placeholder:"輸入產品原價",rules:me.isPositive,modelValue:pe.tempProduct.origin_price,"onUpdate:modelValue":t[2]||(t[2]=function(e){return pe.tempProduct.origin_price=e}),modelModifiers:{number:!0}},null,8,["rules","class","modelValue"]),Object(o["createVNode"])(he,{name:"產品原價",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",p,[Object(o["createVNode"])("label",m,[f,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",O,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"number",class:["form-control",{"is-backend-invalid":be["產品售價"]}],id:"productPrice",min:"0",name:"產品售價",placeholder:"輸入產品售價",rules:me.isPositive,modelValue:pe.tempProduct.price,"onUpdate:modelValue":t[3]||(t[3]=function(e){return pe.tempProduct.price=e}),modelModifiers:{number:!0}},null,8,["rules","class","modelValue"]),Object(o["createVNode"])(he,{name:"產品售價",class:"backend-invalid-feedback"})])]),Object(o["createVNode"])("div",h,[Object(o["createVNode"])("div",j,[Object(o["createVNode"])("label",v,[g,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",y,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{name:"產品分類",class:["form-select",{"is-backend-invalid":be["產品分類"]}],placeholder:"產品分類",rules:"required",as:"select",modelValue:pe.tempProduct.category,"onUpdate:modelValue":t[4]||(t[4]=function(e){return pe.tempProduct.category=e})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("option",{disabled:c.product.category},"請選擇",8,["disabled"]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(pe.productsCategory,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{value:e,key:e},Object(o["toDisplayString"])(e),9,["value"])})),128))]})),_:2},1032,["class","modelValue"]),Object(o["createVNode"])(he,{name:"產品分類",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",V,[pe.isAddCategory?(Object(o["openBlock"])(),Object(o["createBlock"])("div",k,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return pe.tempCategory=e}),class:"form-control",placeholder:"新增分類"},null,512),[[o["vModelText"],pe.tempCategory,void 0,{trim:!0}]]),Object(o["createVNode"])("div",{class:"btn btn-secondary text-white flex-shrink-0 ms-4",onClick:t[6]||(t[6]=function(){return me.addCategory&&me.addCategory.apply(me,arguments)})}," 新增 ")])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:1,class:"btn btn-secondary text-white",onClick:t[7]||(t[7]=function(e){return fe.isAddCategory=!0})}," 新增產品分類 "))])]),Object(o["createVNode"])("div",N,[Object(o["createVNode"])("div",x,[w,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(pe.tempProduct.formats,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"d-flex align-items-center mb-8",key:t},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"規格",class:" form-control  me-2",placeholder:"規格","onUpdate:modelValue":function(t){return e.format=t}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],e.format]]),P,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"內容",class:"form-control ms-2",placeholder:"內容","onUpdate:modelValue":function(t){return e.content=t}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],e.content]])])})),128))]),Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",{class:"btn btn-secondary text-white",onClick:t[8]||(t[8]=function(e){return me.addFormat()})}," 新增產品規格 ")])]),Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("label",S,[T,c.isAdd?(Object(o["openBlock"])(),Object(o["createBlock"])("span",D,"必填")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(Oe,{type:"text",class:["form-control",{"is-backend-invalid":be["產品單位"]}],id:"productUnit",name:"產品單位",placeholder:"輸入產品單位",rules:"required",modelValue:pe.tempProduct.unit,"onUpdate:modelValue":t[9]||(t[9]=function(e){return pe.tempProduct.unit=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(he,{name:"產品單位",class:"backend-invalid-feedback"})]),Object(o["createVNode"])("div",A,[I,Object(o["createVNode"])("div",M,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox",name:"check",id:"flexCheckDefault","onUpdate:modelValue":t[10]||(t[10]=function(e){return pe.tempProduct.is_enabled=e}),"true-value":1,"false-value":0},null,512),[[o["vModelCheckbox"],pe.tempProduct.is_enabled]]),c.product.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("label",F,"上架")):(Object(o["openBlock"])(),Object(o["createBlock"])("label",E,"未上架"))])]),Object(o["createVNode"])("div",_,[$,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",rows:"5",name:"產品描述",class:"form-control",id:"productDescription",placeholder:"輸入產品描述","onUpdate:modelValue":t[11]||(t[11]=function(e){return pe.tempProduct.description=e})},null,512),[[o["vModelText"],pe.tempProduct.description]])]),Object(o["createVNode"])("div",J,[q,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",rows:"5",name:"說明內容",class:"form-control",id:"productContent",placeholder:"輸入說明內容","onUpdate:modelValue":t[12]||(t[12]=function(e){return pe.tempProduct.content=e})},null,512),[[o["vModelText"],pe.tempProduct.content]])]),Object(o["createVNode"])("div",L,[z,Object(o["createVNode"])("div",Q,[Object(o["createVNode"])("div",R,[W,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"主要圖片",class:"form-control mb-2",id:"productImage",placeholder:"輸入圖片位址","onUpdate:modelValue":t[13]||(t[13]=function(e){return pe.tempProduct.imageUrl=e})},null,512),[[o["vModelText"],pe.tempProduct.imageUrl]]),G,pe.isUpload?(Object(o["openBlock"])(),Object(o["createBlock"])("button",H,[K,X])):(Object(o["openBlock"])(),Object(o["createBlock"])("label",Y,[Object(o["createVNode"])("input",{style:{display:"none"},type:"file",onChange:t[14]||(t[14]=function(e){return me.uploadImage("main",e)})},null,32),Z,ee]))]),Object(o["createVNode"])("div",te,[Object(o["createVNode"])("img",{class:"w-100 h-auto",src:pe.tempProduct.imageUrl,alt:""},null,8,["src"])])])]),Object(o["createVNode"])("div",ce,[oe,Object(o["createVNode"])("div",re,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(pe.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"col mb-8",key:t},[Object(o["createVNode"])("img",{class:"w-100 h-auto",src:pe.tempProduct.imagesUrl[t],alt:""},null,8,["src"]),Object(o["createVNode"])("label",{for:"productImage"+t,class:"form-label text-xs"},"圖片位址",8,["for"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",name:"輪播圖片",class:"form-control mb-2",id:"productImage"+t,placeholder:"輸入圖片位址","onUpdate:modelValue":function(e){return pe.tempProduct.imagesUrl[t]=e}},null,8,["id","onUpdate:modelValue"]),[[o["vModelText"],pe.tempProduct.imagesUrl[t]]]),ae,pe.isUploads[t]?(Object(o["openBlock"])(),Object(o["createBlock"])("button",ne,[le,ie])):(Object(o["openBlock"])(),Object(o["createBlock"])("label",se,[Object(o["createVNode"])("input",{style:{display:"none"},type:"file",onChange:function(e){return me.uploadImage(t,e)}},null,40,["onChange"]),de,ue])),pe.tempProduct.imagesUrl[t]?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:2,class:"btn btn-outline-secondary text-xs white-hover",onClick:function(e){return me.deleteImage(t)}}," 刪除圖片 ",8,["onClick"])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:3,class:"btn btn-outline-secondary white-hover text-xs",onClick:function(e){return me.deleteImage(t)}}," 取消 ",8,["onClick"]))])})),128))]),Object(o["createVNode"])("div",{class:"btn btn-secondary text-white text-sm",onClick:t[15]||(t[15]=function(){return me.createImage&&me.createImage.apply(me,arguments)})},"新增輪播圖片")])])]})),_:1},512)}c("99af"),c("159b"),c("caad"),c("2532"),c("a434");var pe={props:{product:{type:Object,default:function(){return{formats:[{format:"",content:""}],imagesUrl:[]}}},isAdd:Boolean},data:function(){return{tempProduct:{},productsAll:[],productsCategory:[],isUpload:!1,isUploads:[],isAddCategory:!1,tempCategory:""}},watch:{product:function(){this.tempProduct=this.product}},methods:{getData:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/products/all")).then((function(t){console.log(t),t.data.success?(e.productsAll=t.data.products,e.productsAll.forEach((function(t){e.productsCategory.includes(t.category)||e.productsCategory.push(t.category)}))):alert(t.data.message)})).catch((function(e){console.log(e)}))},addFormat:function(){var e={format:"",content:""};this.tempProduct.formats.push(e)},addCategory:function(){this.productsCategory.push(this.tempCategory),alert("新增".concat(this.tempCategory,"分類")),this.tempCategory="",this.isAddCategory=!1},uploadImage:function(e,t){var c=this,o=t.target.files[0],r=new FormData;r.append("file-to-upload",o),"main"===e?this.isUpload=!0:this.isUploads[e]=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/upload"),r).then((function(t){console.log(t),t.data.success&&("main"===e?(c.tempProduct.imageUrl=t.data.imageUrl,c.isUpload=!1):(c.tempProduct.imagesUrl[e]=t.data.imageUrl,c.isUploads[e]=!1))}))},createImage:function(){void 0===this.tempProduct.imagesUrl&&(this.tempProduct.imagesUrl=[]),this.isUploads.push(!1),this.tempProduct.imagesUrl.push("")},deleteImage:function(e){this.tempProduct.imagesUrl.splice(e,1),this.isUploads.pop()},isPositive:function(e){return e>0&&e%1===0||"請輸入正整數"},cleanForm:function(){this.$refs.addForm.resetForm(),this.tempProduct.description="",this.tempProduct.content="",this.tempProduct.imageUrl="",this.tempProduct.formats=[{format:"",content:""}],this.tempProduct.imagesUrl=[]}},created:function(){this.isAdd&&(this.tempProduct={formats:[{format:"",content:""}],imagesUrl:[]}),this.getData()}};pe.render=be;t["a"]=pe},e01a:function(e,t,c){"use strict";var o=c("23e7"),r=c("83ab"),a=c("da84"),n=c("5135"),l=c("861d"),i=c("9bf2").f,s=c("e893"),d=a.Symbol;if(r&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};s(b,d);var p=b.prototype=d.prototype;p.constructor=b;var m=p.toString,f="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;i(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=m.call(e);if(n(u,e))return"";var c=f?t.slice(7,-1):t.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}},e538:function(e,t,c){var o=c("b622");t.f=o}}]);
//# sourceMappingURL=chunk-64ae251e.269ed7ca.js.map