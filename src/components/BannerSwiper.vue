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
     wow animate__animated animate__zoomIn"
  >
    <RingCircle class="banner-ring" />
    <div class="home-banner">
      <div ref="bannerSwiper" class="swiper-container bannerSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-MdzislBPdzePO6Wqbdp`" class="h-100">
              <img
                class="banner-swiper-img "
                src="https://images.unsplash.com/photo-1590820204872-81fbd313de9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
            </router-link>
          </div>
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-MdzhX5kvyXgP4xVEsE5`" class="h-100">
              <img
                class="banner-swiper-img "
                src="https://images.unsplash.com/photo-1596942499930-c980d61ddd70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
            </router-link>
          </div>
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-MdzgVs6D-zpxYwm4Eaa`" class="h-100">
              <img
                class="banner-swiper-img"
                src="https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
            </router-link>
          </div>
          <div class="swiper-slide rounded-sm-pill">
            <router-link :to="`/product/-Me-0e65M2XmteADsRl4`" class="h-100">
              <img
                class="banner-swiper-img "
                src="https://images.unsplash.com/photo-1590820233493-ffc0efee2dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                alt=""
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
              src="https://images.unsplash.com/photo-1596942499930-c980d61ddd70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://images.unsplash.com/photo-1590820233493-ffc0efee2dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              class="banner-swiper-img rounded-pill"
              src="https://images.unsplash.com/photo-1590820204872-81fbd313de9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
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
