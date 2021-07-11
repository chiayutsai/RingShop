<template>
  <div class="navbar" :class="{ 'navbar-bg': scrollDown }">
    <router-link class="logo" :to="`/`" @click="changePage">RingRing</router-link>
    <div class="navbar-nav">
      <div v-if="scrollDown || showIcon" class="d-flex">
        <router-link class="me-7  scale-hover" :to="`/shop`">
          <span class="material-icons text-3xl"> storefront </span>
        </router-link>
        <div class="popUp" @click="stopPropagation">
          <a
            @click.prevent="openNavList('favorite')"
            href=""
            v-if="page !== 'favorite'"
            class="position-relative me-7 scale-hover"
          >
            <span v-if="myFavorite.length" class="nav-num">
              {{ myFavorite.length }}
            </span>
            <span class="material-icons text-base text-3xl "> favorite </span>
          </a>
          <div class="nav-dropdown" ref="navFavoriteDropdown" @click="stopPropagation">
            <div v-if="favoriteProduct.length <= 0">
              <p class="text-dark text-center p-5">
                收藏清單目前沒有商品喔
              </p>
              <div class="p-5">
              <a
                @click.prevent="goToTarget('shop')"
                class="btn btn-secondary secondary-hover text-white w-100"
                >前往商店</a
              ></div>
            </div>
            <div v-else>
              <div class="nav-dropdown-body">
                <div
                  v-for="item in favoriteProduct"
                  class=" d-flex
                text-dark  align-items-center justify-content-between
          border-bottom p-5 "
                  :key="item.id"
                >
                  <div class="d-flex">
                    <img class="w-20 me-4" :src="item.imageUrl" alt="" />
                    <div class=" flex-shrink-0 me-4">
                      <p>{{ item.title }}</p>
                      <p class="text-sm opacity-6">NT${{ toCurrency(item.price) }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-5">
              <a
                @click.prevent="goToTarget('favorite')"
                class="btn btn-secondary secondary-hover text-white  w-100"
                >前往收藏清單</a
              >
              </div>
            </div>
          </div>
        </div>
        <div class="popUp" @click="stopPropagation">
          <a
            @click.prevent="openNavList('cart')"
            v-if="showCart"
            href=""
            class="position-relative  scale-hover me-7"
          >
            <span v-if="carts.length" class="nav-num">
              {{ carts.length }}
            </span>
            <span class="material-icons text-3xl "> shopping_cart </span>
          </a>
          <div class="nav-dropdown" ref="navCartDropdown">
            <div
              v-if="dropDownLoading"
              class="d-flex justify-content-center align-items-center position-absolute
          w-100 h-100 top-0 start-0 bg-light z-1"
            >
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-if="carts.length <= 0">
              <p class="text-dark text-center p-5">
                購物車目前沒有商品喔
              </p>
              <div class="p-5">
              <a
                @click.prevent="goToTarget('shop')"
                class="btn btn-secondary secondary-hover text-white  w-100"
                >前往商店</a
              >
              </div>
            </div>
            <div v-else>
              <div class="nav-dropdown-body">
                <div
                  v-for="item in carts"
                  class="d-flex text-dark align-items-center justify-content-between
          border-bottom p-5 "
                  :key="item.id"
                >
                  <div class="d-flex">
                    <img class="w-20 me-4" :src="item.product.imageUrl" alt="" />
                    <div class=" flex-shrink-0 me-4">
                      <p>{{ item.product.title }}</p>
                      <p class="text-sm opacity-6">
                        {{ item.qty }} * NT${{ toCurrency(item.product.price) }} = NT${{
                          toCurrency(item.final_total)
                        }}
                      </p>
                    </div>
                  </div>
                  <a @click.prevent="deleteCart(item.id)" href="" class="text-dark"
                    ><span class="material-icons scale-hover"> delete_forever </span></a
                  >
                </div>
              </div>
              <div class="p-5">
              <a
                @click.prevent="goToTarget('cart')"
                class="btn btn-secondary secondary-hover text-white  w-100"
                >前往購物車</a
              >
              </div>
            </div>
          </div>
        </div>
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
import localStorage from '@/mixins/localStorage';

const showIconRoute = ['product', 'cart', 'about', 'checkout', 'check', 'favorite', 'final'];
const showCartRoute = ['', 'shop', 'product', 'about', 'favorite'];
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
      favoriteProduct: [],
      showIcon: false,
      showCart: true,
      type: '',
      dropdownData: [],
      myFavorite: this.get() || [],
      dropDownLoading: false,
    };
  },
  mixins: [localStorage],
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
    getFavorite() {
      this.myFavorite = this.get() || [];
      this.favoriteProduct = [];

      if (this.myFavorite.length > 0) {
        this.myFavorite.forEach((item) => {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item}`;
          this.$http
            .get(url)
            .then((res) => {
              if (res.data.success) {
                this.favoriteProduct.push(res.data.product);
              } else {
                console.log(res.data.message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    },
    openNavList(type) {
      this.type = type;
      if (type === 'cart') {
        this.$refs.navCartDropdown.classList.toggle('show');
        this.$refs.navFavoriteDropdown.classList.remove('show');
      } else if (type === 'favorite') {
        this.$refs.navFavoriteDropdown.classList.toggle('show');
        this.$refs.navCartDropdown.classList.remove('show');
      } else {
        this.$refs.navCartDropdown.classList.remove('show');
        this.$refs.navFavoriteDropdown.classList.remove('show');
      }
    },
    stopPropagation(e) {
      e.stopPropagation();
    },
    deleteCart(id) {
      this.dropDownLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            emitter.emit('update-cart');
            emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.dropDownLoading = false;
            this.getcart();
          } else {
            this.dropDownLoading = false;
            emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goToTarget(page) {
      this.$refs.navCartDropdown.classList.remove('show');
      this.$refs.navFavoriteDropdown.classList.remove('show');
      this.$router.push(`/${page}`);
    },
  },
  watch: {
    page() {
      this.showIcon = showIconRoute.includes(this.page);
      this.showCart = showCartRoute.includes(this.page) || this.page === '';
    },
  },
  mounted() {
    this.getcart();
    this.getFavorite();
    emitter.on('update-cart', () => {
      this.getcart();
    });
    emitter.on('update-favorite', () => {
      this.myFavorite = this.get();
      this.getFavorite();
    });
    document.body.addEventListener('click', () => {
      if (this.$refs.navCartDropdown) {
        this.$refs.navCartDropdown.classList.remove('show');
      }
      if (this.$refs.navFavoriteDropdown) {
        this.$refs.navFavoriteDropdown.classList.remove('show');
      }
    });
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
