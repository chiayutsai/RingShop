<template>
  <div class="navbar" :class="{ 'navbar-bg': scrollDown }">
    <router-link class="logo" :to="`/`" @click="changePage">RingRing</router-link>
    <div class="navbar-nav">
      <div v-if="scrollDown || showIcon" class="d-flex">
        <router-link class="me-7  scale-hover" :to="`/shop`">
          <span class="material-icons text-3xl"> storefront </span>
        </router-link>

        <a href="" class="me-7 scale-hover">
          <span class="material-icons text-base text-3xl "> favorite </span>
        </a>
        <router-link v-if="showCart" :to="`/cart`" class="position-relative  scale-hover me-7">
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
                @mouseenter="changeImg('home')"
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
              hoverImg: hoverPage === 'home' && nowPage !== ''
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
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625492435301.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c7FwVBPtQ1UK5BJawhwtiXs7rFeDuGH98BVhFGQj9mA%2B%2BCCIA5jSqcPvEkuEJZ4jb8Kvpj2cvpVMe26iZtgvKjPbXH0hAcqrVF%2B6W7wqsSn6OPD5P7E9c2F9iZyHx0JoN1CeY42PVhrnRKBLIBJpNPh8%2FbkT3b8bqm%2FwogEBsP%2FU3gzRRB8G9GJP19k83oblMs%2FLTkBW%2BleXfY4l3xkdSzi4580ADfPLbMYXv2oM0x55%2F3BV8zggSbVISk1%2FoZ8Dam0dly8zvlxnud8DZW46X586tuUATMWJgJOsKFKQjZQc1qB9RKeIgMuYdTXbzGeM6GDr4xGsxo%2B6lzkIbVYraw%3D%3D"
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
          <img
            :class="{
              show:
                nowPage !== 'shop' && nowPage !== '' && nowPage !== 'about' && nowPage !== 'contact'
            }"
            class="w-100 rounded-pill"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625492474348.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=F00OuaEcKhqza62j3q%2Blu%2BPr393XsWsWh2uptHGrhsSY%2FL1%2Btl48IlEOH9urqKmb4akEreUVB%2F6JZHuc9D8gG2JNm2%2BYqA8w2rfRUIy68R7XV%2Fcf9nUwvKiR81XaiHheImCDDybmXBQ0awPr4ZBuCL1I1pBvRnM1ueOoTscoTbMGTX2%2F%2Bk9rdfXFQhhlQAtoWDb%2BH7gq07MABk%2FFN7VirZivolsO4BGFNsZRrYUW3tRvoIVJSqckRe9995nhMZ2jqDrOMLTkQxggBNU6LpULyVLT2ebG4EbB3Qf8NAKbFvQcpF13Rgu0geTwxCkkZK3X2%2B6i3JwTKSd24y4TRR8%2FWg%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus';

const showIconRoute = ['product', 'cart', 'checkout', 'check', 'final'];
const showCartRoute = ['', 'shop', 'product'];
export default {
  props: {
    page: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      scrollDown: false,
      nowPage: '',
      hoverPage: '',
      carts: [],
      showIcon: false,
      showCart: false,
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
      if (window.scrollY > 100) {
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
  watch: {
    page() {
      this.showIcon = showIconRoute.includes(this.page);
      this.showCart = showCartRoute.includes(this.page);
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
