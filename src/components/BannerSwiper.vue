<template>
  <div class="banner position-relative z-2 wow animate__animated animate__zoomIn">
    <div class="d-flex align-items-end align-items-sm-center vh-50 vh-sm-60 vh-md-100">
      <p class="banner-text font-abril">New</p>
      <p class="banner-shop ">Fashion Shop<br />2021</p>
      <div class="banner-title" ref="title">
        <span ref="category">Earrings</span>
        <h2 ref="mainTitle">心之所向耳環</h2>
      </div>
      <p class="banner-description" ref="description">
        目之所及，心之所向<br />
        戴上耳環．吸引目光<br />
        讓妳愛上鏡中的自己<br />
        <span class="font-design">RingRing</span> 實現妳平凡中的不平凡
      </p>
      <div class="banner-ellipse">
        <svg viewBox="0 0 320 200" height="200">
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
      <div class="banner-icon">
        <router-link :to="`/shop`" class="tooltip">
          <span class="material-icons scale-hover ">
            storefront
          </span>
          <p class="tooltip-title">商店</p>
        </router-link>
        <router-link :to="`/cart`" class="tooltip">
          <span class="material-icons scale-hover">
            shopping_cart
          </span>
          <p class="tooltip-title">購物車</p>
        </router-link>
        <router-link :to="`/favorite`" class="tooltip">
          <span class="material-icons scale-hover">
            favorite
          </span>
          <p class="tooltip-title">收藏清單</p>
        </router-link>
      </div>
      <div class="scroll-down">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
  <div
    class="position-absolute d-flex justify-content-center align-items-center
     w-100 vh-50 vh-sm-60 vh-md-100 top-0
     wow animate__animated animate__zoomIn">
    <RingCircle class="banner-ring" />
    <div class="home-banner">
      <div ref="bannerSwiper" class="swiper-container bannerSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-MdzislBPdzePO6Wqbdp`" class="h-100">
              <img
                class="banner-swiper-img "
                src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490279478.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AQtB2Wc6M08kO%2F%2FMN4wM9NUuX7LOFLHa7IWsI%2BKvxvBgd2TGqpkyC5CyBVINxluGVJcd7hOYySFLQNR%2FGknbriEGk6ibFKv1EyNzYVTnBhiUip3r86xJ%2BY9GU8CvueaPIYu2zYMoyIX0dfS4g2gWc0hzfInFvL4eYSRsyV%2BKWKPijdIUn2HsJ5xCVg7yISADLjwpgx9nGl7KfEgcIb8wouvxcCqB4DYIFeHNoN4fy8R6gQPCEmGg52MMLHhopufz90KX0DtvUksfU5pKzk7JBEn4H%2FiN3GLU1XKnmvVOqoLyOKxIv2RZLawbpqDoZ%2FGSNhhdfMsSa1U8HCEsw9rCeg%3D%3D"
                alt="心之所向耳環"
              />
            </router-link>
          </div>
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-MdzhX5kvyXgP4xVEsE5`" class="h-100">
              <img
                class="banner-swiper-img "
                src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490088639.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OpnasDLxtp2ut6vAqzVnqogqjaNpOaB1agjufnQyZyOTiwoptC%2Fd49Dtz9OqP%2FHmqw41uUw0lWwxyOwKFkXRvd4XeiO2Rp8N05T3BvyajBPUqB1U7%2B42lIDnthnL8ind8PQBxfijpreEl0h73kPf2cd7J%2F76nlg7XpbMRp%2F2Zo9e2q0J1fmXQvI5b8QhBmEGewRZqGwtCv7SJJCJQKTaZwOkHbKXoQLLHut9LDqzZvQeI%2B5s00pR%2Fze6IEw7NVYFO61JxwpoAlNlLRh9q63qi%2BjIVsbhazG9FVnaYtmz3vFgpnVwlInTq9ZD1w3qrUja8hdK3savDNPmk%2FLhWlMJaw%3D%3D"
                alt="緊緊相連戒指"
              />
            </router-link>
          </div>
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-MdzgVs6D-zpxYwm4Eaa`" class="h-100">
              <img
                class="banner-swiper-img"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490157498.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QaWchMzP4uDC41NX%2BbByUzOefuA1f1podbIdVmN9RQgo0drCIeQ4f819OPUMeIA%2B2mD%2B8JkeO9yS4jdFtDPdxCqchUhIiGWNNUZbisBT6G%2FcoNAPqwrWuUQm2tz5t%2FfbjD3X%2F%2BwixsmbrhYx6Gzw3J5A9AB0KslsQjjbuAKtg54np3MDTFwEBCbjLIykoBMPUjMkyJ61IqvNyrlJdOGcLxWYSDoFCcDIlcctXN6HgbXGLjQiKi0LRP24fGevFfTnEaTJ17peBnseHL2L3JqRikDeHX7G7oQiahWHBphZHhNf%2BjitvdyQXELVhnjLmOgueIpM5axPPMYZ8BqWRrRfkA%3D%3D"
                alt="月光星辰項鍊"
              />
            </router-link>
          </div>
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-Me-0e65M2XmteADsRl4`" class="h-100">
              <img
                class="banner-swiper-img "
                src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490206013.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LK5pUaezFgt0glyumN4RNCQyyPNgNQP%2F36cGfBfpsOxnhMBwId%2BcUkVqv2V8FtbV%2BfaCALMkLo3aEo4bUfY6OIxD9WpnjEamYSxFJ7IW1AM5gunvTORYIRMRwk0VGGEo3N7qe71M%2BVlRmcgPFmCviVXYhfDhAb40UX64IpECkC3mmPYNVoaR7HWbpclz01Dptb%2BNHxBp0PxhOoGfW2R3ztTIIJkX1yQmp%2B7OWtTmI09Y7H5fSH2y%2FSQ%2BAuuC0NF4aMMDeamLEyLRH46QF6OPSWA1YxaPSsirp4tjXgmcE86JZ5KYjKdCShmvitv8pXkm2Tz0xIH1kZ5uDfej91eAng%3D%3D"
                alt="流動時光耳環"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="home-secondary-banner">
      <div ref="bannerSecondarySwiper" class="swiper-container bannerSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490088639.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OpnasDLxtp2ut6vAqzVnqogqjaNpOaB1agjufnQyZyOTiwoptC%2Fd49Dtz9OqP%2FHmqw41uUw0lWwxyOwKFkXRvd4XeiO2Rp8N05T3BvyajBPUqB1U7%2B42lIDnthnL8ind8PQBxfijpreEl0h73kPf2cd7J%2F76nlg7XpbMRp%2F2Zo9e2q0J1fmXQvI5b8QhBmEGewRZqGwtCv7SJJCJQKTaZwOkHbKXoQLLHut9LDqzZvQeI%2B5s00pR%2Fze6IEw7NVYFO61JxwpoAlNlLRh9q63qi%2BjIVsbhazG9FVnaYtmz3vFgpnVwlInTq9ZD1w3qrUja8hdK3savDNPmk%2FLhWlMJaw%3D%3D"
              alt="緊緊相連戒指"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490157498.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QaWchMzP4uDC41NX%2BbByUzOefuA1f1podbIdVmN9RQgo0drCIeQ4f819OPUMeIA%2B2mD%2B8JkeO9yS4jdFtDPdxCqchUhIiGWNNUZbisBT6G%2FcoNAPqwrWuUQm2tz5t%2FfbjD3X%2F%2BwixsmbrhYx6Gzw3J5A9AB0KslsQjjbuAKtg54np3MDTFwEBCbjLIykoBMPUjMkyJ61IqvNyrlJdOGcLxWYSDoFCcDIlcctXN6HgbXGLjQiKi0LRP24fGevFfTnEaTJ17peBnseHL2L3JqRikDeHX7G7oQiahWHBphZHhNf%2BjitvdyQXELVhnjLmOgueIpM5axPPMYZ8BqWRrRfkA%3D%3D"
              alt="月光星辰項鍊"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490206013.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LK5pUaezFgt0glyumN4RNCQyyPNgNQP%2F36cGfBfpsOxnhMBwId%2BcUkVqv2V8FtbV%2BfaCALMkLo3aEo4bUfY6OIxD9WpnjEamYSxFJ7IW1AM5gunvTORYIRMRwk0VGGEo3N7qe71M%2BVlRmcgPFmCviVXYhfDhAb40UX64IpECkC3mmPYNVoaR7HWbpclz01Dptb%2BNHxBp0PxhOoGfW2R3ztTIIJkX1yQmp%2B7OWtTmI09Y7H5fSH2y%2FSQ%2BAuuC0NF4aMMDeamLEyLRH46QF6OPSWA1YxaPSsirp4tjXgmcE86JZ5KYjKdCShmvitv8pXkm2Tz0xIH1kZ5uDfej91eAng%3D%3D"
              alt="流動時光耳環"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1627490279478.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AQtB2Wc6M08kO%2F%2FMN4wM9NUuX7LOFLHa7IWsI%2BKvxvBgd2TGqpkyC5CyBVINxluGVJcd7hOYySFLQNR%2FGknbriEGk6ibFKv1EyNzYVTnBhiUip3r86xJ%2BY9GU8CvueaPIYu2zYMoyIX0dfS4g2gWc0hzfInFvL4eYSRsyV%2BKWKPijdIUn2HsJ5xCVg7yISADLjwpgx9nGl7KfEgcIb8wouvxcCqB4DYIFeHNoN4fy8R6gQPCEmGg52MMLHhopufz90KX0DtvUksfU5pKzk7JBEn4H%2FiN3GLU1XKnmvVOqoLyOKxIv2RZLawbpqDoZ%2FGSNhhdfMsSa1U8HCEsw9rCeg%3D%3D"
              alt="心之所向耳環"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import RingCircle from '@/components/RingCircle.vue';

export default {
  data() {
    return {
      swiper: '',
      secondarySwiper: '',
      banner: [
        {
          title: '心之所向耳環',
          category: 'Earrings',
          description:
            '目之所及，心之所向<br />戴上耳環，吸引目光<br />讓妳愛上鏡中的自己<br /><span class="font-design">RingRing</span> 實現妳平凡中的不平凡',
        },
        {
          title: '緊緊相連戒指',
          category: 'Ring',
          description:
            '我們來自不同地方<br />對美麗有不同定義<br />無論有什麼樣的追求<br /><span class="font-design">RingRing</span>都能將美與你緊緊相連',
        },
        {
          title: '月光星辰項鍊',
          category: 'Necklace',
          description:
            '月光溫柔，星辰浩瀚<br />將之戴上，閃耀光芒<br />成為最閃亮的那顆星星<br /><span class="font-design">RingRing</span> 將妳的光芒傳遞出去',
        },
        {
          title: '流動時光耳環',
          category: 'Earrings',
          description:
            '時光流動，美麗依舊<br />即使時間無情<br />美仍然與妳並肩而行<br /><span class="font-design">RingRing</span> 為妳捕捉每個最美的時刻',
        },
      ],
      bannerIndex: 0,
      storeTooltip: '',
      cartTooltip: '',
      likeTooltip: '',
    };
  },
  components: {
    RingCircle,
  },
  methods: {
    changeBanner() {
      this.bannerIndex = this.swiper.realIndex;
      if (this.$refs.description) {
        this.$refs.description.classList.add('blurAnimation');
      }
      if (this.$refs.title) {
        this.$refs.title.classList.add('titleAnimation');
      }
    },
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.bannerSwiper, {
      slidesPerView: 1,
      speed: 800,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.secondarySwiper = new Swiper(this.$refs.bannerSecondarySwiper, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
    });
    this.swiper.on('slideNextTransitionStart', () => {
      this.secondarySwiper.slideNext();
    });
    this.swiper.on('slidePrevTransitionStart', () => {
      this.secondarySwiper.slidePrev();
    });
    this.swiper.on('slideChangeTransitionStart', () => {
      this.changeBanner();
    });
    this.swiper.on('slideChangeTransitionEnd', () => {
      this.$refs.description.innerHTML = this.banner[this.bannerIndex].description;
      this.$refs.category.innerHTML = this.banner[this.bannerIndex].category;
      this.$refs.mainTitle.innerHTML = this.banner[this.bannerIndex].title;
      setTimeout(() => {
        this.$refs.description.classList.remove('blurAnimation');
        this.$refs.title.classList.remove('titleAnimation');
      }, 800);
    });
  },
};
</script>
