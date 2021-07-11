<template>
  <div class="container py-15">
      <ol class="breadcrumb mb-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>

      <li class="breadcrumb-item active">聯絡我們</li>
    </ol>
    <div class="py-12 border-bottom border-top border-light mb-12">
      <h3 class="text-3xl text-lg-4xl text-center ">美麗，從這裡出發</h3>
    </div>

    <div
      class="row align-items-center
     flex-column flex-md-row pb-15 border-bottom border-light mb-10"
    >
      <div class="col-12 col-md-6 col-lg-4 offset-lg-1 mb-10">
        <div class="d-flex align-items-center  mb-10">
          <p class="title text-3xl">聯絡我們</p>
          <p class="text-lg opacity-6">Contact Us</p>
        </div>
        <img
          class="rounded-3 w-80 w-md-100 mx-auto"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625638666278.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jTNMXMwJRjARojrEpu0R1uWFZ%2B9CXpB%2BeDqBcXlJ6IeeHdSFDKviG2dBEuAx3qXbgrv4D4sa23fyVoI6JpHtDMMY2Kf0xHAXjFGDR4WfsPfwow7Dka%2BaHGW7Gphr0mdoJ8uHxSOPvJF%2B6F2FxU8WSwDnEf6GIeDQvpxKv1D9Kkd3mitBguwDh%2FsEvQ2ujLnFlWgHts85wZJIG2cfE28vTOMoE%2B6O9tyDWt32FiOqcA7fVUHJ5hosungoUN0iCo99JMAd3rfAZUqjLxknfUO4rjLFtorkkHgIjBrjQmAH1zR87Cfqk9Ivsa5pdC0qtGZDdEzSOIimFAbVqvs5BxF2gQ%3D%3D"
          alt=""
        />
      </div>
      <div class="col-12 col-md-6 col-lg-4 offset-lg-2  mb-10">
        <ul class="mb-7">
          <li class="lh-lg letter-spacing-1 ">
             客服電話：(02)-213-1234
          </li>
           <li class="lh-lg letter-spacing-1 ">
             客服信箱：ringring@gmail.com
          </li>
            <li class="lh-lg letter-spacing-1 ">
             客服時間：週一至週五：9:00 am - 18:00 pm
          </li>
           <li class="lh-lg letter-spacing-1 ">
             Instgram：@ringring
          </li>
          <li class="lh-lg letter-spacing-1 ">
             Facebook：Ringring
          </li>
        </ul>
         <div class="d-flex social-icon">
          <a class="scale-hover me-5" href="#" target="_blank"
            ><span><img src="@/assets/images/fb.svg" /> </span>
          </a>
          <a class="scale-hover me-5" href="#" target="_blank"
            ><span><img src="@/assets/images/ig.svg" /> </span>
          </a>
          <a class="scale-hover" href="#" target="_blank"
            ><span><img src="@/assets/images/line.svg" /> </span>
          </a>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 pb-10 border-bottom border-light">
      <div class="col border-bottom border-md-end border-bottom-md-0  border-light pb-9 pb-md-0">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          local_shipping
        </span>
        <p class="text-xl mb-4">交貨快速</p>
        <p>
          在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。
        </p>
      </div>
      <div class="col border-bottom border-lg-end border-bottom-md-0 border-light  pb-9 pb-md-0">
        <span class="material-icons text-4xl mb-4 mb-md-7  ">
          lock
        </span>
        <p class="text-xl mb-4">售後服務</p>

        <p>為保障買家權益， 所有商品皆享有30日的售後服務。</p>
      </div>

      <div class="col border-bottom border-md-end border-bottom-md-0 border-light pb-9 pb-md-0">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          question_answer
        </span>
        <p class="text-xl mb-4">客服服務</p>
        <p>如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
      </div>
      <div class="col">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          card_giftcard
        </span>

        <p class="text-xl mb-4">包裝服務</p>
        <p>如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
      </div>
    </div>
  </div></template
>
