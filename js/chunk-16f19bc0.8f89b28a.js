(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f19bc0"],{3835:function(e,t,o){"use strict";function a(e){if(Array.isArray(e))return e}o.d(t,"a",(function(){return d}));o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0");function c(e,t){var o=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var a,c,n=[],l=!0,d=!1;try{for(o=o.call(e);!(l=(a=o.next()).done);l=!0)if(n.push(a.value),t&&n.length===t)break}catch(r){d=!0,c=r}finally{try{l||null==o["return"]||o["return"]()}finally{if(d)throw c}}return n}}var n=o("06c5");function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return a(e)||c(e,t)||Object(n["a"])(e,t)||l()}},"42a4":function(e,t,o){"use strict";var a=o("7a23"),c={class:"mb-8"},n={for:"couponTitle",class:"form-label"},l=Object(a["createTextVNode"])("優惠券名稱"),d={key:0},r={class:"mb-8"},i={for:"couponCode",class:"form-label"},s=Object(a["createTextVNode"])("優惠碼"),u={key:0},p={class:"mb-8"},b={for:"productPrice",class:"form-label"},m=Object(a["createTextVNode"])("折扣百分比"),h={key:0},j={class:"mb-8"},f={class:"mb-3"},O=Object(a["createVNode"])("label",{for:"due_date"},"到期日",-1),g={class:"mb-8"},k=Object(a["createVNode"])("p",{class:"mb-3"},"是否啟用優惠券",-1),V={class:"form-check mt-4"},v={key:0,class:"form-check-label",for:"flexCheckDefault"},y={key:1,class:"form-check-label",for:"flexCheckDefault"};function C(e,t,o,C,N,x){var B=Object(a["resolveComponent"])("Field"),w=Object(a["resolveComponent"])("ErrorMessage"),M=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])(M,{ref:"addForm",class:"text-dark"},{default:Object(a["withCtx"])((function(e){var C=e.errors;return[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("label",n,[l,o.isAdd?(Object(a["openBlock"])(),Object(a["createBlock"])("span",d,"必填")):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])(B,{type:"text",class:["form-control",{"is-backend-invalid":C["優惠券名稱"]}],id:"couponTitle",name:"優惠券名稱",placeholder:"輸入優惠券名稱",rules:"required",modelValue:N.tempCoupon.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return N.tempCoupon.title=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(a["createVNode"])(w,{name:"優惠券名稱",class:"backend-invalid-feedback"})]),Object(a["createVNode"])("div",r,[Object(a["createVNode"])("label",i,[s,o.isAdd?(Object(a["openBlock"])(),Object(a["createBlock"])("span",u,"必填")):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])(B,{type:"text",class:["form-control",{"is-backend-invalid":C["優惠碼"]}],id:"couponCode",name:"優惠碼",placeholder:"輸入優惠碼",rules:"required",modelValue:N.tempCoupon.code,"onUpdate:modelValue":t[2]||(t[2]=function(e){return N.tempCoupon.code=e}),modelModifiers:{stringify:!0}},null,8,["class","modelValue"]),Object(a["createVNode"])(w,{name:"優惠碼",class:"backend-invalid-feedback"})]),Object(a["createVNode"])("div",p,[Object(a["createVNode"])("label",b,[m,o.isAdd?(Object(a["openBlock"])(),Object(a["createBlock"])("span",h,"必填")):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])(B,{type:"number",class:["form-control",{"is-backend-invalid":C["折扣百分比"]}],id:"productPrice",min:"0",name:"折扣百分比",placeholder:"輸入折扣百分比",rules:x.isPositive,modelValue:N.tempCoupon.percent,"onUpdate:modelValue":t[3]||(t[3]=function(e){return N.tempCoupon.percent=e}),modelModifiers:{number:!0}},null,8,["rules","class","modelValue"]),Object(a["createVNode"])(w,{name:"折扣百分比",class:"backend-invalid-feedback"})]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])("div",f,[O,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[4]||(t[4]=function(e){return N.dueDate=e}),onChange:t[5]||(t[5]=function(){return x.changeTime&&x.changeTime.apply(x,arguments)})},null,544),[[a["vModelText"],N.dueDate]])])]),Object(a["createVNode"])("div",g,[k,Object(a["createVNode"])("div",V,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",name:"check",id:"flexCheckDefault","onUpdate:modelValue":t[6]||(t[6]=function(e){return N.tempCoupon.is_enabled=e}),"true-value":1,"false-value":0},null,512),[[a["vModelCheckbox"],N.tempCoupon.is_enabled]]),N.tempCoupon.is_enabled?(Object(a["openBlock"])(),Object(a["createBlock"])("label",v,"啟用")):(Object(a["openBlock"])(),Object(a["createBlock"])("label",y,"未啟用"))])])]})),_:1},512)}var N=o("3835"),x=(o("ac1f"),o("1276"),864e13),B={props:{coupon:{type:Object,default:function(){return{}}},isAdd:Boolean},data:function(){return{tempCoupon:{},dueDate:""}},watch:{coupon:function(){if(this.tempCoupon=this.coupon,this.coupon.due_date===x)this.dueDate="";else{var e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T"),t=Object(N["a"])(e,1);this.dueDate=t[0]}}},methods:{isPositive:function(e){return e>0&&e%1===0||"請輸入正整數"},cleanForm:function(){this.$refs.addForm.resetForm(),this.dueDate="",this.tempCoupon.is_enabled=0,this.tempCoupon.due_date=x},changeTime:function(){""===this.dueDate?this.tempCoupon.due_date=x:this.tempCoupon.due_date=Math.round(new Date(this.dueDate).getTime()/1e3)}},created:function(){this.isAdd&&(this.tempCoupon={is_enabled:0,due_date:x})}};B.render=C;t["a"]=B},"8c58":function(e,t,o){"use strict";o.r(t);o("ac1f"),o("1276");var a=o("7a23"),c={class:"d-flex align-items-center justify-content-between mb-5 "},n=Object(a["createVNode"])("h2",{class:"text-dark"},"優惠券列表",-1),l=Object(a["createTextVNode"])(" 新增優惠券 "),d={class:"bg-white rounded overflow-hidden border border-secondary"},r={key:0,class:"bg-secondary text-center py-8"},i={key:1},s={class:"table table-borderless mb-0"},u=Object(a["createVNode"])("thead",{class:"bg-secondary text-white"},[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"優惠券名稱"),Object(a["createVNode"])("th",null,"優惠碼"),Object(a["createVNode"])("th",null,"折扣百分比"),Object(a["createVNode"])("th",null,"到期日"),Object(a["createVNode"])("th",null,"是否啟用"),Object(a["createVNode"])("th",null,"編輯 / 刪除")])],-1),p={class:"py-8"},b={key:0},m={key:1},h={class:"form-check form-switch"},j={class:"d-flex justify-content-end align-items-center py-4 px-6 bg-secondary "};function f(e,t,o,f,O,g){var k=Object(a["resolveComponent"])("Loading"),V=Object(a["resolveComponent"])("router-link"),v=Object(a["resolveComponent"])("Pagination"),y=Object(a["resolveComponent"])("CouponModal"),C=Object(a["resolveComponent"])("DeleteModal");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(k,{isLoading:O.isLoading},null,8,["isLoading"]),Object(a["createVNode"])("div",c,[n,Object(a["createVNode"])(V,{to:"/dashboard/newCoupon",class:"btn btn-secondary text-white shadow-none"},{default:Object(a["withCtx"])((function(){return[l]})),_:1})]),Object(a["createVNode"])("div",d,[0==this.coupons.length?(Object(a["openBlock"])(),Object(a["createBlock"])("p",r,"目前沒有優惠券")):(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("table",s,[u,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(O.coupons,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id,class:{"table-primary":e.is_enabled}},[Object(a["createVNode"])("td",p,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.code),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.percent),1),864e13===e.due_date?(Object(a["openBlock"])(),Object(a["createBlock"])("td",b," 未設定 ")):(Object(a["openBlock"])(),Object(a["createBlock"])("td",m,Object(a["toDisplayString"])(new Date(1e3*e.due_date).toISOString().split("T")[0]),1)),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",h,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"enabled"+t,"onUpdate:modelValue":function(t){return e.is_enabled=t},"true-value":1,"false-value":0,onChange:function(t){return g.changeStatus(e)}},null,40,["id","onUpdate:modelValue","onChange"]),[[a["vModelCheckbox"],e.is_enabled]]),e.is_enabled?(Object(a["openBlock"])(),Object(a["createBlock"])("label",{key:0,class:"form-check-label",for:"enabled"+t}," 啟用 ",8,["for"])):(Object(a["openBlock"])(),Object(a["createBlock"])("label",{key:1,class:"form-check-label",for:"enabled"+t},"未啟用",8,["for"]))])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-sm btn-secondary text-white",onClick:function(t){return g.openModal("edit",e)}}," 編輯 ",8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary white-hover ms-2",onClick:function(t){return g.openModal("delete",e)}}," 刪除 ",8,["onClick"])])],2)})),128))])]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])(v,{pagination:O.pagination,onEmitPage:g.getCoupon},null,8,["pagination","onEmitPage"])])]))]),Object(a["createVNode"])(y,{coupon:O.tempCoupon,ref:"updateModal",onUpdate:g.updateCoupon},null,8,["coupon","onUpdate"]),Object(a["createVNode"])(C,{item:O.tempCoupon,type:"normal",ref:"delModal",onDelete:g.deleteCoupon},null,8,["item","onDelete"])],64)}var O=o("5530"),g=(o("99af"),o("1799")),k=o("e7c6"),V={class:"modal fade",id:"updateModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"},y={class:"modal-content"},C=Object(a["createVNode"])("div",{class:"modal-header bg-secondary text-white py-4"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"編輯優惠券"),Object(a["createVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},x={class:"modal-footer"},B=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary white-hover","data-bs-dismiss":"modal"}," 取消 ",-1);function w(e,t,o,c,n,l){var d=Object(a["resolveComponent"])("CouponForm");return Object(a["openBlock"])(),Object(a["createBlock"])("div",V,[Object(a["createVNode"])("div",v,[Object(a["createVNode"])("div",y,[C,Object(a["createVNode"])("div",N,[Object(a["createVNode"])(d,{coupon:o.coupon,isAdd:!1,ref:"coupon"},null,8,["coupon"])]),Object(a["createVNode"])("div",x,[B,Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary text-white",onClick:t[1]||(t[1]=function(){return l.update&&l.update.apply(l,arguments)})}," 確認編輯 ")])])])],512)}var M=o("e0ae"),D=o("42a4"),_={props:{coupon:{type:Object}},emits:["update"],components:{CouponForm:D["a"]},mixins:[M["a"]],methods:{update:function(){var e=this,t=this.$refs.coupon;t.$refs.addForm.validate().then((function(t){t.valid&&e.$emit("update",e.coupon)}))}}};_.render=w;var T=_,L={data:function(){return{coupons:[],pagination:{},tempCoupon:{},isLoading:!1}},inject:["emitter"],components:{Pagination:g["a"],DeleteModal:k["a"],CouponModal:T},methods:{getCoupon:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/coupons?page=").concat(t)).then((function(t){t.data.success?(e.coupons=t.data.coupons,e.pagination=t.data.pagination,e.isLoading=!1):e.isLoading=!1})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},openModal:function(e,t){this.tempCoupon=Object(O["a"])({},t),"edit"===e?this.$refs.updateModal.openModal():"delete"===e&&this.$refs.delModal.openModal()},updateCoupon:function(e){var t=this;this.isLoading=!0;var o={data:e};this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/coupon/").concat(e.id),o).then((function(e){e.data.success?(t.emitter.emit("push-message",{type:"success",message:e.data.message}),t.$refs.updateModal.hideModal(),t.getCoupon(t.pagination.current_page)):t.emitter.emit("push-message",{type:"error",message:e.data.message})})).catch((function(){t.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},changeStatus:function(e){this.tempCoupon=Object(O["a"])({},e),this.updateCoupon(this.tempCoupon)},deleteCoupon:function(){var e=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiayu","/admin/coupon/").concat(this.tempCoupon.id)).then((function(t){t.data.success?(e.emitter.emit("push-message",{type:"success",message:t.data.message}),e.$refs.delModal.hideModal(),e.getCoupon(e.pagination.current_page)):e.emitter.emit("push-message",{type:"error",message:t.data.message})})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))}},created:function(){this.getCoupon()}};L.render=f;t["default"]=L}}]);
//# sourceMappingURL=chunk-16f19bc0.8f89b28a.js.map