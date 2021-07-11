<template>
  <div class="container py-15">
     <ol class="breadcrumb mb-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>

      <li class="breadcrumb-item active">關於品牌</li>
    </ol>
    <div class="py-12 border-bottom border-top border-light mb-12">
      <h3 class="text-3xl text-lg-4xl text-center ">時尚生活，由妳自己定義</h3>
    </div>

    <div class="row align-items-end flex-column flex-md-row pb-15 border-bottom border-light mb-10">
      <div class="col-12 col-md-6 col-lg-4 offset-lg-1 mb-10">
        <div class="d-flex align-items-center  mb-10">
          <p class="title text-3xl">關於品牌</p>
          <p class="text-lg opacity-6">About Us</p>
        </div>
        <img
          class="rounded-3 w-80 w-md-100 mx-auto"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625594098072.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RAuLGbl54S05g9Inj0U%2B8Dwgfnl%2F6L5FMqrq2rHtA4YUIBxOyS800%2FNdhUFQRN5G%2FxJYA0pEk9DlkHGzLNbhkUNZlSqGctKJif9gCptgaZxbHr0cWv1RCx01aUCECuxPKdtvHdWRFzOMFzt4LR2aPQMcnqFSXkgOcnfUtjvwEObh2S%2BGSGfcfbfXe1Di6laywVpekNYfZAvF8DOFvdgYGksk7RBArVeSjKiRNzi4addRph84fnZTjfK%2BbMcSMeHb7hrBCLHa2GC80YxYj67l3BaTBIS22qx4KF2xeTkhH6U42OQKwLL%2FsFlsfTjlzSNAI9waqQFJyZia1McbaRoWug%3D%3D"
          alt=""
        />
      </div>
      <div class="col-12 col-md-6 col-lg-4 offset-lg-2  mb-10">
        <p class="lh-lg letter-spacing-1 mb-10">
          我們的目標是提供平價但不平凡的飾品，<br />
          讓女孩們追求漂亮的道路變得簡單，<br />
          Ring不僅代表著飾品也代表著環，<br />願你的美麗與RingRing環環相扣。
        </p>
        <img
          class="rounded-3 w-100 d-none d-md-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625595219225.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=plX8uwz8wL13PWWxptaHcD28r3J4yPMCsy4PWr5Zy6zd9UEqBjnQC3lV8LJ3RL9AezAklzfXJwU%2BM65vt9Y%2FzAlvzPsUek2hVH3FHIkHkyAbtKW0VUiCAt2dPPwXmvmmzK%2BBNBO6TtZOK4W3DnqBo8VIap%2BuEi8Og56C7cvmpzwVeIGSuwWgRSrqI3xlzCUtEtUmzfyfHujoPWw71a3q5Lre5MZZhWbPlFAH1PKmLuKkz7cmPZxGfuIJ94RE8zke68PJkcI1MswRIBIyICS9ssnt%2F43s1BXC04XmPO%2FapPR8TOszY%2BEdRgXL0T2%2BYwVQZFtegmhYArxoxv%2FeGiVcKA%3D%3D"
          alt=""
        />
      </div>
      <div class="col-12 col-md-6 col-lg-4 offset-lg-1 order-1 order-md-0">
        <p class="lh-lg letter-spacing-1 mb-md-10">
          我們只想給你最好的品質，<br />
          因此提供完善的售後服務以保障買家權益。<br />
          所有商品皆享有30日的售後服務，<br />
          收到商品後記得先檢查喔！
        </p>
        <img
          class="rounded-3 w-100 d-none d-md-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625596510189.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hwwmbCHgDY8hX5UCJUq62ISOkRFiEmvnPxMke04%2FJxAUW3fG1eVa5XVpeIzyIcB2CAOEWSZULxGcw2tNh8bccp3YXWtNlcMccKK8dbVJ6IZf3A34%2FrYtqDm9xvXtRN9DkxfFvRIgOUIwAZiQm2%2BIFka0he239oDQMh8yRX7VyjaYznthwwZJX1qXVoqWYZH9e8MY7UEQ4oaGqz6NJp08H%2B%2FHMkhukHADwJfBiUd6SQ%2B4qgT9eWYN8MlV6jpwc0KYp9Wk8drE%2BK0nqN9OPukfYUhZ5LA%2BD%2Fe%2BzuHw2baBDUTSWOr8vBKjLJcAzDPgm%2BgoLQz4Jxb5Zw2wTbW%2F843Gyw%3D%3D"
          alt=""
        />
      </div>
      <div class="col-12 col-md-6 col-lg-4 offset-lg-2 ">
        <img
          class="rounded-3  w-80 w-md-100 mx-auto mb-10 mb-md-0"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625595789939.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Lrtb6bvtzIvowaWXn5y%2Fb9fn2e1EsaWXPCmfXDEfle0DTTE1bY%2Fj72vslrMrZ9Ge7ju%2Fqfdm5az1rRgJnBQ%2BnWuMk2HWg%2BhB7OxT2xh0lYBhwJH8ObV7ZzMoGhVB6I9Ihz6ZsbuM3OCGMv8J%2FBRt%2B2VNkQ%2BaQKrtqiwXvzR50jvNWZ7eS532NSwTGjdLBnU95O2GrNdICuYXEIRe10dG244OHfsYoAxwcP%2FEKwWvhryqGl5XHdrSM7aF7upMGNhcV0MhJrtaI7aa8cdb29WTXFPyPWkKCCrBpmmhfFgiBpmxrdFoqyWQv%2BqyZD%2FuS9lpzu8%2FHEoDb7Ygbas8yCh1Ig%3D%3D"
          alt=""
        />
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
