(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b2a5c9e"],{3835:function(e,t,a){"use strict";function c(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function o(e,t){var a=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var c,o,i=[],l=!0,n=!1;try{for(a=a.call(e);!(l=(c=a.next()).done);l=!0)if(i.push(c.value),t&&i.length===t)break}catch(r){n=!0,o=r}finally{try{l||null==a["return"]||a["return"]()}finally{if(n)throw o}}return i}}var i=a("06c5");function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){return c(e)||o(e,t)||Object(i["a"])(e,t)||l()}},"9e3f":function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a"),a("ac1f"),a("1276");var c=a("7a23"),o={class:"d-flex align-items-center justify-content-between mb-5 "},i=Object(c["createVNode"])("h2",{class:"text-dark"},"文章列表",-1),l=Object(c["createTextVNode"])(" 新增文章 "),n={class:"bg-white rounded overflow-hidden border border-secondary"},r={class:"table table-borderless mb-0"},s=Object(c["createVNode"])("thead",{class:"bg-secondary text-white"},[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",{class:"w-10"},"文章主圖"),Object(c["createVNode"])("th",{class:"w-20"},"文章標題"),Object(c["createVNode"])("th",{class:"w-20"},"描述"),Object(c["createVNode"])("th",null,"文章分類"),Object(c["createVNode"])("th",null,"作者"),Object(c["createVNode"])("th",null,"建立時間"),Object(c["createVNode"])("th",null,"更新時間"),Object(c["createVNode"])("th",null,"是否公開"),Object(c["createVNode"])("th",{class:"text-center"},"預覽"),Object(c["createVNode"])("th",null,"編輯 / 刪除")])],-1),d={class:"w-10 "},b={class:"w-20 py-6"},u={class:"w-20"},p={key:0},m={key:1},h={class:"form-check form-switch"},j=Object(c["createVNode"])("span",{class:"material-icons text-lg "}," visibility ",-1),O={class:"d-flex justify-content-end align-items-center py-4 px-6 bg-secondary "};function g(e,t,a,g,f,y){var v=Object(c["resolveComponent"])("Loading"),V=Object(c["resolveComponent"])("router-link"),N=Object(c["resolveComponent"])("Pagination"),k=Object(c["resolveComponent"])("ViewArticleModal"),w=Object(c["resolveComponent"])("ArticleModal"),x=Object(c["resolveComponent"])("DeleteModal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(v,{isLoading:f.isLoading},null,8,["isLoading"]),Object(c["createVNode"])("div",o,[i,Object(c["createVNode"])(V,{to:"/dashboard/newArticle",class:"btn btn-secondary text-white shadow-none"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]),Object(c["createVNode"])("div",n,[Object(c["createVNode"])("table",r,[s,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(f.articles,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e.id,class:{"table-primary":e.isPublic}},[Object(c["createVNode"])("td",d,[e.imageUrl?(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:0,class:"w-100 small-size",src:e.imageUrl,alt:e.title},null,8,["src","alt"])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("td",b,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("td",u,Object(c["toDisplayString"])(e.description),1),Object(c["createVNode"])("td",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.tag,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{key:t},"＃"+Object(c["toDisplayString"])(e),1)})),128))]),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.author),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(new Date(1e3*e.create_at).toISOString().split("T")[0]),1),e.updateDate?(Object(c["openBlock"])(),Object(c["createBlock"])("td",p,Object(c["toDisplayString"])(new Date(1e3*e.updateDate).toISOString().split("T")[0]),1)):(Object(c["openBlock"])(),Object(c["createBlock"])("td",m,Object(c["toDisplayString"])(new Date(1e3*e.create_at).toISOString().split("T")[0]),1)),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("div",h,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"enabled"+t,"onUpdate:modelValue":function(t){return e.isPublic=t},onClick:function(t){return y.getSingle(e,"status")}},null,8,["id","onUpdate:modelValue","onClick"]),[[c["vModelCheckbox"],e.isPublic]]),e.isPublic?(Object(c["openBlock"])(),Object(c["createBlock"])("label",{key:0,class:"form-check-label",for:"enabled"+t}," 公開 ",8,["for"])):(Object(c["openBlock"])(),Object(c["createBlock"])("label",{key:1,class:"form-check-label",for:"enabled"+t},"未公開",8,["for"]))])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("a",{href:"#",class:" text-secondary text-center shadow-none eye-hover",onClick:Object(c["withModifiers"])((function(t){return y.getSingle(e,"view")}),["prevent"])},[j],8,["onClick"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-sm btn-secondary text-white",onClick:function(t){return y.getSingle(e,"modal")}}," 編輯 ",8,["onClick"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary white-hover ms-2",onClick:function(t){return y.openModal("delete",e)}}," 刪除 ",8,["onClick"])])],2)})),128))])]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])(N,{pagination:f.pagination,onEmitPage:y.getArticle},null,8,["pagination","onEmitPage"])])]),Object(c["createVNode"])(k,{article:f.tempArticle,ref:"viewModal",onEdit:y.editArticle},null,8,["article","onEdit"]),Object(c["createVNode"])(w,{article:f.tempArticle,ref:"updateModal",onUpdate:y.updateArticle},null,8,["article","onUpdate"]),Object(c["createVNode"])(x,{item:f.tempArticle,type:"normal",ref:"delModal",onDelete:y.deleteArticle},null,8,["item","onDelete"])],64)}var f=a("5530"),y=(a("99af"),a("1799")),v=a("e7c6"),V={class:"modal fade",id:"updateModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"},k={class:"modal-content"},w=Object(c["createVNode"])("div",{class:"modal-header bg-secondary text-white py-4"},[Object(c["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"編輯文章"),Object(c["createVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),x={class:"modal-body"},A={class:"modal-footer"},M=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary white-hover","data-bs-dismiss":"modal"}," 取消 ",-1);function B(e,t,a,o,i,l){var n=Object(c["resolveComponent"])("ArticleForm");return Object(c["openBlock"])(),Object(c["createBlock"])("div",V,[Object(c["createVNode"])("div",N,[Object(c["createVNode"])("div",k,[w,Object(c["createVNode"])("div",x,[Object(c["createVNode"])(n,{article:a.article,isAdd:!1,ref:"articleForm"},null,8,["article"])]),Object(c["createVNode"])("div",A,[M,Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary text-white",onClick:t[1]||(t[1]=function(){return l.update&&l.update.apply(l,arguments)})}," 確認編輯 ")])])])],512)}var D=a("e0ae"),S=a("96e0"),C={props:{article:{type:Object}},emits:["update"],components:{ArticleForm:S["a"]},mixins:[D["a"]],methods:{update:function(){var e=this,t=this.$refs.articleForm;t.$refs.addForm.validate().then((function(t){if(t.valid){var a=Math.round((new Date).getTime()/1e3);e.updateArticle=Object(f["a"])({updateDate:a},e.article),e.$emit("update",e.updateArticle)}}))}}};C.render=B;var L=C,$={class:"modal fade",id:"updateModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"},F={class:"modal-content"},T={class:"modal-header bg-secondary text-white py-4"},U={class:"modal-title",id:"exampleModalLabel"},I=Object(c["createVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),_={class:"modal-body text-dark"},E={class:"mb-4"},J={class:"d-flex mb-4"},z={class:"d-flex justify-content-between mb-4"},H={ref:"content"},q={class:"modal-footer"},G=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary white-hover","data-bs-dismiss":"modal"}," 關閉 ",-1);function K(e,t,a,o,i,l){return Object(c["openBlock"])(),Object(c["createBlock"])("div",$,[Object(c["createVNode"])("div",P,[Object(c["createVNode"])("div",F,[Object(c["createVNode"])("div",T,[Object(c["createVNode"])("h5",U,Object(c["toDisplayString"])(a.article.title),1),I]),Object(c["createVNode"])("div",_,[Object(c["createVNode"])("h2",E,Object(c["toDisplayString"])(a.article.title),1),Object(c["createVNode"])("div",J,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.article.tag,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t,class:"bg-primary py-1 px-4 rounded-pill text-xs me-4"}," #"+Object(c["toDisplayString"])(e),1)})),128))]),Object(c["createVNode"])("div",z,[Object(c["createVNode"])("p",null,"作者 : "+Object(c["toDisplayString"])(a.article.author),1),Object(c["createVNode"])("p",null,"發布日期 : "+Object(c["toDisplayString"])(i.publicDate),1)]),a.article.imageUrl?(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:0,class:"w-100 mb-6",src:a.article.imageUrl},null,8,["src"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",H,null,512)]),Object(c["createVNode"])("div",q,[G,Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary text-white",onClick:t[1]||(t[1]=function(){return l.edit&&l.edit.apply(l,arguments)})}," 編輯文章 ")])])])],512)}var Q=a("3835"),R={props:{article:{type:Object}},emits:["edit"],data:function(){return{publicDate:""}},watch:{article:function(){var e=new Date(1e3*this.article.create_at).toISOString().split("T"),t=Object(Q["a"])(e,1);this.publicDate=t[0],this.$refs.content.innerHTML=this.article.content}},mixins:[D["a"]],methods:{edit:function(){this.hideModal(),this.$emit("edit")}}};R.render=K;var W=R,X={data:function(){return{isLoading:!1,articles:[],pagination:{},tempArticle:{}}},inject:["emitter"],components:{Pagination:y["a"],DeleteModal:v["a"],ArticleModal:L,ViewArticleModal:W},methods:{getArticle:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/articles?page=").concat(t)).then((function(t){t.data.success?(e.articles=t.data.articles,e.pagination=t.data.pagination,e.isLoading=!1):e.isLoading=!1})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},getSingle:function(e,t){var a=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/article/").concat(e.id)).then((function(e){e.data.success?(a.tempArticle=e.data.article,a.isLoading=!1,"modal"===t?(a.tempArticle.tag||(a.tempArticle.tag=[]),a.openModal("edit",a.tempArticle)):"status"===t?(a.tempArticle.isPublic=!a.tempArticle.isPublic,a.updateArticle(a.tempArticle)):"view"===t&&a.openModal("view",a.tempArticle)):a.isLoading=!1})).catch((function(){a.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},openModal:function(e,t){"edit"===e?this.$refs.updateModal.openModal():"view"===e?this.$refs.viewModal.openModal():"delete"===e&&(this.tempArticle=Object(f["a"])({},t),this.$refs.delModal.openModal())},updateArticle:function(e){var t=this;this.isLoading=!0;var a={data:e};this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/article/").concat(e.id),a).then((function(e){e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.$refs.updateModal.hideModal(),t.getArticle(t.pagination.current_page)):t.emitter.emit("push-message",{type:"error",message:e.data.message})})).catch((function(){t.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},deleteArticle:function(){var e=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/article/").concat(this.tempArticle.id)).then((function(t){t.data.success?(e.emitter.emit("push-message",{type:"success",message:t.data.message}),e.$refs.delModal.hideModal(),e.getArticle(e.pagination.current_page)):e.emitter.emit("push-message",{type:"error",message:t.data.message})})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},editArticle:function(){this.$refs.updateModal.openModal()}},mounted:function(){this.getArticle()}};X.render=g;t["default"]=X}}]);
//# sourceMappingURL=chunk-4b2a5c9e.5db47797.js.map