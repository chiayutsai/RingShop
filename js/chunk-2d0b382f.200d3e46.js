(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b382f"],{"294f":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),r={class:"position-relative bg-login w-100 min-vh-100"},n=Object(a["createVNode"])("div",{class:"bg-overlay opacity-5 z-0"},null,-1),s={class:"position-relative d-flex justify-content-center align-items-center vh-100"},c={class:"w-40 bg-login-form rounded-3 px-12 py-8"},i=Object(a["createVNode"])("h2",{class:"text-white text-center mb-6"},"登入",-1),l={class:"form-floating form-downline form-login mb-6"},d=Object(a["createVNode"])("label",{for:"account"},"帳號：",-1),m={class:"form-floating form-downline form-login mb-6"},u=Object(a["createVNode"])("label",{for:"password"}," 密碼：",-1),b=Object(a["createVNode"])("button",{type:"submit",class:"btn btn-lg text-white btn-secondary secondary-hover w-100 mt-3",id:"login"}," 登入 ",-1);function p(e,t,o,p,f,g){var v=Object(a["resolveComponent"])("Loading"),h=Object(a["resolveComponent"])("Noty"),j=Object(a["resolveComponent"])("Field"),O=Object(a["resolveComponent"])("ErrorMessage"),V=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(v,{isLoading:f.isLoading},null,8,["isLoading"]),Object(a["createVNode"])(h),Object(a["createVNode"])("div",r,[n,Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",c,[i,Object(a["createVNode"])(V,{ref:"form",onSubmit:g.login},{default:Object(a["withCtx"])((function(e){var o=e.errors;return[Object(a["createVNode"])("div",l,[Object(a["createVNode"])(j,{id:"account",name:"email",type:"email",class:["form-control",{"is-invalid":o["email"]}],placeholder:"name@example.com",rules:"email|required",modelValue:f.user.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.user.username=e})},null,8,["class","modelValue"]),d,Object(a["createVNode"])(O,{name:"email",class:"invalid-feedback"})]),Object(a["createVNode"])("div",m,[Object(a["createVNode"])(j,{id:"password",name:"密碼",type:"password",class:["form-control",{"is-invalid":o["密碼"]}],placeholder:"請輸入姓名",rules:"required",autocomplete:"",modelValue:f.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.user.password=e})},null,8,["class","modelValue"]),u,Object(a["createVNode"])(O,{name:"密碼",class:"invalid-feedback"})]),b]})),_:1},8,["onSubmit"])])])])],64)}o("99af");var f=o("b86a"),g=o("37ca"),v={data:function(){return{user:{username:"",password:""},isLoading:!1}},provide:function(){return{emitter:g["a"]}},components:{Noty:f["a"]},methods:{login:function(){var e=this;this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/","admin/signin"),this.user).then((function(t){if(t.data.success){var o=t.data,a=o.token,r=o.expired;document.cookie="chiayuToken=".concat(a,"; expires=").concat(new Date(r)),e.$refs.form.resetForm(),e.$router.push("/dashboard"),g["a"].emit("push-message",{type:"success",message:"登入成功 "})}else e.isLoading=!1,g["a"].emit("push-message",{type:"error",message:"登入失敗 : ".concat(t.data.error.message)})})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))}}};v.render=p;t["default"]=v}}]);
//# sourceMappingURL=chunk-2d0b382f.200d3e46.js.map