<template>
  <BannerSwiper />
  <div class="container position-relative my-15">
    <div class="line"></div>
    <div class="row align-items-center pb-15">
      <div class="col-4">
        <h3 class="title d-inline-block mb-7">戒指</h3>
        <p>
          Lorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum
          dLorem ipsum dLorem ipsum dLorem ipsum d
        </p>
      </div>
      <div class="col-5 offset-3">
        <div class="position-relative  bg-ring py-11">
          <div class="bg-mask "></div>

          <img
            class="position-relative z-1 -ms-offset-4 rounded-3 shadow translate-left-hover"
            src="@/assets/images/ring.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="row align-items-center py-15">
      <div class="col-5 ">
        <div class="position-relative bg-bracelet py-11">
          <div class="bg-mask "></div>

          <img
            class="position-relative z-1 ms-offset-4 shadow rounded-3 translate-right-hover"
            src="@/assets/images/bracelet.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-4 offset-3">
        <h3 class="title d-inline-block mb-7">手鍊</h3>
        <p>
          Lorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum
          dLorem ipsum dLorem ipsum dLorem ipsum d
        </p>
      </div>
    </div>
    <div class="row align-items-center pt-15">
      <div class="col-4">
        <h3 class="title d-inline-block mb-7">耳環</h3>
        <p>
          Lorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum
          dLorem ipsum dLorem ipsum dLorem ipsum d
        </p>
      </div>
      <div class="col-5 offset-3">
        <div class="position-relative bg-earring py-11">
          <div class="bg-mask "></div>

          <img
            class="position-relative z-1 -ms-offset-4 rounded-3 shadow translate-left-hover"
            src="@/assets/images/earrings.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container py-15">
    <div class="d-flex align-items-center mb-10">
      <h3 class="title text-4xl ">限時特價</h3>
      <p class="text-lg opacity-6">On Sale</p>
    </div>

    <div class="swiper-container sale-container" ref="Swiper">
      <div class="swiper-wrapper sale-wrapper">
        <!-- Slides -->
        <div class="swiper-slide  ">
          <div class="sale-item">
            <div class="sale-tag">Hot Issue</div>
            <img src="@/assets/images/sale1.jpg" alt="" />

            <div
              class="d-flex align-items-center
              justify-content-between border-top
              border-light mt-5 pt-5"
            >
              <div>
                <h4 class=" fw-normal mb-2  text-xl">永恆愛戀戒指</h4>
                <p>
                  NT$280<span class="text-light text-decoration-line-through ms-2">NT$200</span>
                </p>
              </div>
              <div class="d-flex align-items-center ">
                <a href="" class="border rounded-circle  px-3 py-2 me-4 icon-hover">
                  <span class="material-icons"> favorite_border </span></a
                >
                <a
                  href=""
                  class="border rounded-circle  px-3 py-2 icon-hover"
                  @click.prevent="addCart(product.id)"
                >
                  <span class="material-icons"> shopping_cart </span></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide ">
          <div class="sale-item">
            <div class="sale-tag">Hot Issue</div>
            <img src="@/assets/images/sale2.jpg" alt="" />
            <div
              class="d-flex align-items-center
              justify-content-between border-top
              border-light mt-5 pt-5"
            >
              <div>
                <h4 class=" fw-normal mb-2  text-xl">永恆愛戀戒指</h4>
                <p>
                  NT$280<span class="text-light text-decoration-line-through ms-2">NT$200</span>
                </p>
              </div>
              <div class="d-flex align-items-center ">
                <a href="" class="border rounded-circle  px-3 py-2 me-4 icon-hover">
                  <span class="material-icons"> favorite_border </span></a
                >
                <a
                  href=""
                  class="border rounded-circle  px-3 py-2 icon-hover"
                  @click.prevent="addCart(product.id)"
                >
                  <span class="material-icons"> shopping_cart </span></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide ">
          <div class="sale-item">
            <div class="sale-tag">Hot Issue</div>
            <img src="@/assets/images/topic-earring.jpg" alt="" />
            <div
              class="d-flex align-items-center
              justify-content-between border-top
              border-light mt-5 pt-5"
            >
              <div>
                <h4 class=" fw-normal mb-2  text-xl">永恆愛戀戒指</h4>
                <p>
                  NT$280<span class="text-light text-decoration-line-through ms-2">NT$200</span>
                </p>
              </div>
              <div class="d-flex align-items-center ">
                <a href="" class="border rounded-circle  px-3 py-2 me-4 icon-hover">
                  <span class="material-icons"> favorite_border </span></a
                >
                <a
                  href=""
                  class="border rounded-circle  px-3 py-2 icon-hover"
                  @click.prevent="addCart(product.id)"
                >
                  <span class="material-icons"> shopping_cart </span></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide  ">
          <div class="sale-item">
            <div class="sale-tag">Hot Issue</div>
            <img src="@/assets/images/topic-ring.jpg" alt="" />
            <div
              class="d-flex align-items-center
              justify-content-between border-top
              border-light mt-5 pt-5"
            >
              <div>
                <h4 class=" fw-normal mb-2  text-xl">永恆愛戀戒指</h4>
                <p>
                  NT$280<span class="text-light text-decoration-line-through ms-2">NT$200</span>
                </p>
              </div>
              <div class="d-flex align-items-center ">
                <a href="" class="border rounded-circle  px-3 py-2 me-4 icon-hover">
                  <span class="material-icons"> favorite_border </span></a
                >
                <a
                  href=""
                  class="border rounded-circle  px-3 py-2 icon-hover"
                  @click.prevent="addCart(product.id)"
                >
                  <span class="material-icons"> shopping_cart </span></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide ">
          <div class="sale-item">
            <div class="sale-tag">Hot Issue</div>
            <img src="@/assets/images/topic-watch.jpg" alt="" />
            <div
              class="d-flex align-items-center
              justify-content-between border-top
              border-light mt-5 pt-5"
            >
              <div>
                <h4 class=" fw-normal mb-2  text-xl">永恆愛戀戒指</h4>
                <p>
                  NT$280<span class="text-light text-decoration-line-through ms-2">NT$200</span>
                </p>
              </div>
              <div class="d-flex align-items-center ">
                <a href="" class="border rounded-circle  px-3 py-2 me-4 icon-hover">
                  <span class="material-icons"> favorite_border </span></a
                >
                <a
                  href=""
                  class="border rounded-circle  px-3 py-2 icon-hover"
                  @click.prevent="addCart(product.id)"
                >
                  <span class="material-icons"> shopping_cart </span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="container py-15">
    <div class="d-flex align-items-center mb-10">
      <h3 class="title text-4xl ">商品專區</h3>
      <p class="text-lg opacity-6">Products</p>
    </div>
    <div class="row row-cols-3">
      <div class="col">
        <div class="bg-topic  mb-7">
          <img
            class="position-absolute top-0 rounded-3"
            src="@/assets/images/topic-ring.jpg"
            alt=""
          />
          <div class=" bg-topic-mask rounded-3"></div>
          <p class="text-3xl position-absolute">戒指</p>
        </div>
        <div class="bg-topic rounded-3">
          <img
            class="position-absolute top-0 rounded-3"
            src="@/assets/images/topic-watch.jpg"
            alt=""
          />
          <div class=" bg-topic-mask rounded-3"></div>
          <p class="text-3xl position-absolute">手錶</p>
        </div>
      </div>
      <div class="col">
        <div class="bg-topic  bg-topic-necklace rounded-3">
          <img
            class="position-absolute top-0 rounded-3"
            src="@/assets/images/topic-necklace.jpg"
            alt=""
          />
          <div class=" bg-topic-mask rounded-3"></div>
          <p class="text-3xl position-absolute">項鍊</p>
        </div>
      </div>
      <div class="col">
        <div class="bg-topic rounded-3 mb-7">
          <img
            class="position-absolute top-0 rounded-3"
            src="@/assets/images/topic-earring.jpg"
            alt=""
          />
          <div class=" bg-topic-mask rounded-3"></div>
          <p class="text-3xl position-absolute">耳環</p>
        </div>

        <div class="bg-topic rounded-3">
          <img
            class="position-absolute top-0 rounded-3"
            src="@/assets/images/topic-bracelet.jpg"
            alt=""
          />
          <div class=" bg-topic-mask rounded-3"></div>
          <p class="text-3xl position-absolute">手鍊</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-15">
    <div class="d-flex align-items-center mb-10">
      <h3 class="title text-4xl ">關於品牌</h3>
      <p class="text-lg opacity-6">About Us</p>
    </div>
    <div class="row row-cols-2 align-items-center pb-10 mb-10 border-bottom border-light">
      <div class="col position-relative">
        <h2 class="about-title font-design mb-10">RingRing</h2>
        <p class="text-xl lh-lg letter-spacing-1">
          我們的目標是提供平價但不平凡的飾品，<br />
          讓女孩們追求漂亮的道路變得簡單，<br />
          Ring不僅代表著飾品也代表著環，<br />願你的美麗與RingRing環環相扣。
        </p>
        <div class="home-ellipse">
          <svg viewBox="0 0 340 200" height="200">
            <ellipse
              fill="none"
              stroke="#fff"
              stroke-width="1"
              stroke-dasharray="2"
              cx="160"
              cy="100"
              rx="160"
              ry="70"
              transform="rotate(-15,150,80)"
            />
          </svg>
        </div>
      </div>
      <div class="col">
        <img class="rounded-3" src="@/assets/images/shop.jpg" alt="" />
      </div>
    </div>
    <div class="row row-cols-4 g-5 pb-10 border-bottom border-light mb-15">
      <div class="col border-end border-light">
        <span class="material-icons text-4xl mb-7">
          local_shipping
        </span>
        <p class="text-xl mb-4">交貨快速</p>
        <p>
          在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。
        </p>
      </div>
      <div class="col border-end border-light">
        <span class="material-icons text-4xl mb-7">
          lock
        </span>
        <p class="text-xl mb-4">售後服務</p>

        <p>為保障買家權益， 所有商品皆享有30日的售後服務。</p>
      </div>
      <div class="col border-end border-light">
        <span class="material-icons text-4xl mb-7">
          question_answer
        </span>
        <p class="text-xl mb-4">客服服務</p>
        <p>如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
      </div>
      <div class="col">
        <span class="material-icons text-4xl mb-7">
          card_giftcard
        </span>

        <p class="text-xl mb-4">包裝服務</p>
        <p>如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
      </div>
    </div>
    <div class="row row-cols-3 ">
      <div class="col">
        <p class="text-lg mb-4">品牌故事</p>
        <ul>
          <li class="mb-2">關於品牌<span class="text-light ms-2">About Us</span></li>
          <li>聯絡我們 <span class="text-light ms-2">Contact Us</span></li>
        </ul>
      </div>
      <div class="col">
        <p class="text-lg mb-4">商品專區</p>
        <ul>
          <li class="mb-2">戒指 <span class="text-light ms-2">Rings</span></li>
          <li class="mb-2">耳環 <span class="text-light ms-2">Earrings</span></li>
          <li class="mb-2">手鍊 <span class="text-light ms-2">Bracelets</span></li>
          <li class="mb-2">手錶 <span class="text-light ms-2">Watches</span></li>
          <li>項鍊 <span class="text-light ms-2">Necklaces</span></li>
        </ul>
      </div>
      <div class="col">
        <p class="text-lg mb-4">聯絡我們</p>
        <ul class="mb-4">
          <li class="mb-2">電話 : 02 213 1234</li>
          <li class="mb-2">E-mail : ringring@gmail.com</li>
          <li>MON - FRI : 9:00 am - 18:00 pm</li>
        </ul>
        <div class="d-flex social-icon">
          <a class="me-4" href="#" target="_blank"
            ><span><img src="@/assets/images/fb.svg" /> </span>
          </a>
          <a class="me-4" href="#" target="_blank"
            ><span><img src="@/assets/images/ig.svg" /> </span>
          </a>
          <a href="#" target="_blank"
            ><span><img src="@/assets/images/line.svg" /> </span>
          </a>
        </div>
      </div>
    </div>

  </div>
  <div class="text-center text-xs text-light py-4">
  <p>Copyright ©RingRing All Rights Reserved. Designed by ChiaYu</p>
  </div>
</template>

<script>
import BannerSwiper from '@/components/BannerSwiper.vue';
import Swiper from 'swiper/bundle';

export default {
  components: {
    BannerSwiper,
  },
  data() {
    return {
      saleSwiper: '',
    };
  },
  methods: {},
  mounted() {
    this.swiper = new Swiper(this.$refs.Swiper, {
      slidesPerView: 3,
      speed: 800,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },

};
</script>
