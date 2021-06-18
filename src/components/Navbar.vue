<template>
  <div class="navbar" :class="{ 'navbar-bg': scrollDown }">
     <router-link class="logo" :to="`/shop`">RingRing</router-link>
    <div class="navbar-nav">
       <router-link class="me-5" :to="`/cart`">
        <span class="material-icons text-2xl"> shopping_cart </span>
      </router-link >
      <div class="navbar-toggle"  @click="openNav" ref="toggle">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="navbar-collapse" ref="navbar">
      <ul>
        <li class="nav-item">
          <router-link :to="`/home`" class="nav-link" @click="changePage">
            <p class="nav-number">01</p>
            <p class="nav-title">Home</p>
            <p class="nav-title-ch">首頁</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/shop`" class="nav-link" @click="changePage">
            <p class="nav-number">02</p>
            <p class="nav-title">Products</p>
            <p class="nav-title-ch">產品</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/about`" class="nav-link" @click="changePage">
            <p class="nav-number">03</p>
            <p class="nav-title">About</p>
            <p class="nav-title-ch">關於<span class="font-design">RingRing</span></p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="`/contact`" class="nav-link" @click="changePage">
            <p class="nav-number">04</p>
            <p class="nav-title">Contact</p>
            <p class="nav-title-ch">聯絡<span class="font-design">RingRing</span></p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

// import $ from 'jquery';

export default {
  data() {
    return {
      scrollDown: false,
    };
  },
  methods: {
    openNav() {
      this.$refs.toggle.classList.toggle('open');
      this.$refs.navbar.classList.toggle('open');
    },
    changePage() {
      this.$refs.toggle.classList.remove('open');
      this.$refs.navbar.classList.remove('open');
    },
    handleScroll() {
      if (window.scrollY > 200) {
        this.scrollDown = true;
      } else {
        this.scrollDown = false;
      }
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
