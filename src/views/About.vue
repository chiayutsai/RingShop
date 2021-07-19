<template>
  <div class="container py-15">
    <ol class="breadcrumb mb-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item active">關於品牌</li>
    </ol>
    <div
      class="py-12 border-bottom border-top border-light mb-12
       wow animate__animated animate__flipInX"
    >
      <h3 class="text-3xl text-lg-4xl text-center ">時尚生活，由妳自己定義</h3>
    </div>
    <div
      class="row align-items-end flex-column flex-md-row pb-15 border-bottom border-light mb-10
    "
    >
      <div
        data-wow-delay="0.5s"
        class="col-12 col-md-6 col-lg-4 offset-lg-1 mb-10
       wow animate__animated animate__fadeInLeft"
      >
        <div class="d-flex align-items-center mb-10 ">
          <p class="title text-3xl">關於品牌</p>
          <p class="text-lg opacity-6">About Us</p>
        </div>
        <img
          class="rounded-3 w-80 w-md-100 mx-auto"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002100807.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gOUmRi%2FMLvpWeUxqHqRD2Ua36RwE43MDW%2Bh9cbTxDoDaMsRCqzXkhYgb8WAsmZ5PIfF4u7DhXuXu%2Bp5LqZ7LAcwhfX19nVUgNieX9D6H3lkW0mxea7%2FFaxTetnc2l%2FfOVHzOJgBhtntNmLE5eeu6R%2F879ZpigBpvex1T9tPiVhYDj8jwB834SPW1NxSxsxQMhay3CiPv54DbdjVmEqWurDMVX0nSxYiCr5W7uAqt3PcO4UMldnzvN68HIHEB50F7Lb5IqkN%2BHzT6g3Nn3KmcsL4Zv215DU35Vk%2BIQi20TrE13uQ6N4Yxbe14uTd2FqndwWyFQbYk1jqkMQUhwlrX0g%3D%3D"
          alt=""
        />
      </div>
      <div
        data-wow-delay="0.5s"
        class="col-12 col-md-6 col-lg-4 offset-lg-2 mb-10
       wow animate__animated animate__fadeInRight"
      >
        <p class="lh-lg letter-spacing-1 mb-10">
          我們的目標是提供平價但不平凡的飾品，<br />
          讓女孩們追求漂亮的道路變得簡單，<br />
          Ring不僅代表著飾品也代表著環，<br />願你的美麗與RingRing環環相扣。
        </p>
        <img
          class="rounded-3 w-100 d-none d-md-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002126625.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NfxUb1qm6ZSc2HQi%2FVgKwSR7Q3e1THmFmT5C6xRZFX%2Bau35AGe1Ze8shAwm8IUKo9kWPIJS8hg5YzjK%2BRSyT60GNJILY9j4FYhLT4IV8QW4ouZGZD0I%2FbSdgjKK5JinCGTMRoWXSyKqvI2dvH1HQT5m0fJ6Pt2HWVSTz6kOUUd5ZWOoaQP%2Boy%2BEa2JbIjZpICMbfAME6R4fUqj94Vg%2FNcbNvp0bpx8PP2UYHCuMRuHnZmXPpqjGth5EZoKGe10Q3DaCSWvevg2Y0zvA7dy1GqbTbP5XdmW4VP9hbLXTCDc35ruhvXZiAM%2FwJ3o9aF28LmUkQ6Jvh8MtLkltw6VZsCA%3D%3D"
          alt=""
        />
      </div>
      <div
        class="col-12 col-md-6 col-lg-4 offset-lg-1 order-1 order-md-0
       wow animate__animated animate__fadeInLeft"
      >
        <p class="lh-lg letter-spacing-1 mb-md-10">
          我們只想給你最好的品質，<br />
          因此提供完善的售後服務以保障買家權益。<br />
          所有商品皆享有30日的售後服務，<br />
          收到商品後記得先檢查喔！
        </p>
        <img
          class="rounded-3 w-100 d-none d-md-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002178729.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lbw0%2FedNqyx2YR84w3r5mxSxRWMcf1Z76LzdVNPpJov%2BVG8N4taoko9sKLL0wc07mLoyFtpqYMKGm%2BlmIvuuvwWKMTrPyd%2B1OwaH9YA0OPHSaxQk9ZBzdMUfEUEI13ZkUl3646LX8ShPmPFuBfBkseKHeo%2BLjFwx9O5XpguNzSmO5G4ZgVDUZphMOTTJRp3UrK2Wxi7gegiH5jiTZuoWSho3ytOf7WOkP4fmVAGJZyvwVujHU4aGxpO3fezvnYeSgcJFZLJym4v9Wrgwia%2BBh%2BF8%2BlBHbpbcxURwvUy03RqoTjSJTa7XGQDUGqDsA9Fe6moL1Bd%2B6xR%2B7YVqmC2sKg%3D%3D"
          alt=""
        />
      </div>
      <div
        class="col-12 col-md-6 col-lg-4 offset-lg-2
       wow animate__animated animate__fadeInRight"
      >
        <img
          class="rounded-3 w-80 w-md-100 mx-auto mb-10 mb-md-0"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002142810.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aFo90%2F6RPgTHbltitJlchKED5smRJf7qvSYcecmPbbV6hd7%2BwPRSGkZZ%2FC%2BOxlNLnWOBeuhoVLToVOnbJNq9MmMMJXP9SnToUToIvtDzo57VH4vrmikr9UDdp502aQ%2Bc75lcSyyhWfeWtjRHGzOO9nHbKP8NmNhYEJo8laZkZuc%2F5ejyujctmFXPootLiOHWoYul24NAzBNGfR0sAXpl6J6DcPK0ePbj1Ara2IfjyKBPL2RhueMTXqleGII4dYN6oQq5FLuC7eOxUSQhr%2BTEsZ2x1cLyTWsbvYohaF9m8K73tI%2FIB%2B74cMiRa7X%2BeHXdkwHWCQYYOpk2r86ntDTkPg%3D%3D"
          alt=""
        />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 pb-10 border-bottom border-light">
      <div
        class="col border-bottom border-md-end border-bottom-md-0 border-light pb-9 pb-md-0
       wow animate__animated animate__zoomIn"
      >
        <span class="material-icons text-4xl mb-4 mb-md-7">
          local_shipping
        </span>
        <p class="text-xl mb-4">交貨快速</p>
        <p>
          在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。
        </p>
      </div>
      <div
        data-wow-delay="0.5s"
        class="col border-bottom border-lg-end border-bottom-md-0 border-light pb-9 pb-md-0
       wow animate__animated animate__zoomIn"
      >
        <span class="material-icons text-4xl mb-4 mb-md-7">
          lock
        </span>
        <p class="text-xl mb-4">售後服務</p>
        <p>為保障買家權益， 所有商品皆享有30日的售後服務。</p>
      </div>
      <div
        data-wow-delay="1s"
        class="col border-bottom border-md-end border-bottom-md-0 border-light pb-9 pb-md-0
       wow animate__animated animate__zoomIn"
      >
        <span class="material-icons text-4xl mb-4 mb-md-7">
          question_answer
        </span>
        <p class="text-xl mb-4">客服服務</p>
        <p>如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
      </div>
      <div data-wow-delay="1.5s" class="col wow animate__animated animate__zoomIn">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          card_giftcard
        </span>
        <p class="text-xl mb-4">包裝服務</p>
        <p>如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
      </div>
    </div>
  </div>
</template>
