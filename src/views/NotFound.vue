<template>
<div class="bg-overlay"></div>
 <div class="container w-100 vh-100 d-flex justify-content-center align-items-center">
    <div class="w-100 bg-linear rounded mx-5 p-8">
      <p class="text-center text-4xl mb-6">Oops!</p>
      <p class="text-center mb-6">這個頁面不存在喔</p>
      <div class="d-flex w-100 w-md-40 mx-auto">
        <router-link :to="`/`" class="w-50 btn btn-outline-light shadow-sm me-6">
          前往首頁
        </router-link>
        <router-link
          :to="`/shop`"
          class="w-50 btn btn-secondary shadow-sm text-white secondary-hover">
          前往商店
        </router-link>
      </div>
    </div>
  </div>
</template>
