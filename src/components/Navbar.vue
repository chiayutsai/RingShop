<template>
  <div class="navbar" :class="{ 'navbar-bg': scrollDown }">
    <router-link class="logo" :to="`/`" @click="changePage">RingRing</router-link>
    <div class="navbar-nav">
      <div v-if="scrollDown" class="d-flex">
        <router-link class="me-7  scale-hover" :to="`/shop`">
          <span class="material-icons text-3xl"> storefront </span>
        </router-link>

        <a href="" class="me-7 scale-hover">
          <span class="material-icons text-base text-3xl "> favorite </span>
        </a>
        <router-link :to="`/cart`" class="position-relative  scale-hover me-7">
          <span v-if="carts.length" class="nav-num">
            {{ carts.length }}
          </span>
          <span class="material-icons text-3xl "> shopping_cart </span>
        </router-link>
      </div>
      <div class="navbar-toggle" @click="openNav" ref="toggle">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="navbar-collapse " ref="navbar">
      <div class="d-flex flex-column-reverse  flex-ipad-row align-items-center w-100">
        <div
          class="d-flex justify-content-start justify-content-sm-center
          justify-content-md-start w-100 w-md-50 "
        >
          <ul class="float-start">
            <li class="nav-item">
              <router-link
                :to="`/`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('')"
                @mouseleave="clear"
              >
                <p class="nav-number">01</p>
                <p class="nav-title">Home</p>
                <p class="nav-title-ch">首頁</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="`/shop`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('shop')"
                @mouseleave="clear"
              >
                <p class="nav-number">02</p>
                <p class="nav-title">Products</p>
                <p class="nav-title-ch">產品</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="`/about`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('about')"
                @mouseleave="clear"
              >
                <p class="nav-number">03</p>
                <p class="nav-title">About</p>
                <p class="nav-title-ch">關於<span class="font-design">RingRing</span></p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="`/contact`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('contact')"
                @mouseleave="clear"
              >
                <p class="nav-number">04</p>
                <p class="nav-title">Contact</p>
                <p class="nav-title-ch">聯絡<span class="font-design">RingRing</span></p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="d-none d-sm-block w-40 nav-circle rounded-pill mb-7 mb-ipad-0">
          <img
            :class="{
              show: nowPage === '',
              hoverImg: hoverPage === '' && nowPage !== ''
            }"
            class="w-100  rounded-pill"
            src="@/assets/images/home-link.jpg"
            alt=""
          />
          <img
            :class="{
              show: nowPage === 'shop',
              hoverImg: hoverPage === 'shop' && nowPage !== 'shop'
            }"
            class="w-100 rounded-pill"
            src="@/assets/images/shop-link.jpg"
            alt=""
          />
          <img
            :class="{
              show: nowPage === 'about',
              hoverImg: hoverPage === 'about' && nowPage !== 'about'
            }"
            class="w-100 rounded-pill"
            src="@/assets/images/about-link.jpg"
            alt=""
          />
          <img
            :class="{
              show: nowPage === 'contact',
              hoverImg: hoverPage === 'contact' && nowPage !== 'contact'
            }"
            class="w-100 rounded-pill"
            src="@/assets/images/contact-link.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus';

export default {
  data() {
    return {
      scrollDown: false,
      nowPage: '',
      hoverPage: '',
      carts: [],
    };
  },
  methods: {
    openNav() {
      this.$refs.toggle.classList.toggle('open');
      this.$refs.navbar.classList.toggle('open');
      this.nowPage = this.$route.name;

      console.log(this.nowPage);
    },
    changePage() {
      this.$refs.toggle.classList.remove('open');
      this.$refs.navbar.classList.remove('open');
    },
    changeImg(page) {
      this.hoverPage = page;
    },
    clear() {
      this.hoverPage = '';
    },
    handleScroll() {
      if (window.scrollY > 200) {
        this.scrollDown = true;
      } else {
        this.scrollDown = false;
      }
    },
    getcart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.success) {
            this.carts = res.data.data.carts;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getcart();
    emitter.on('update-cart', () => {
      this.getcart();
    });
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
