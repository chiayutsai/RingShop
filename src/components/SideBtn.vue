<template>
  <ul  v-if="scrollDown ||showIcon"  class="sideBtn">
    <li  class="sideBtn-item" :class="{'d-none': !showCart}">
      <a href="" @click.prevent="openOffcanvas">
        <span v-if="cart.length" class="cart-num">
          {{ cart.length }}
        </span>
        <span class="material-icons ">
          shopping_cart
        </span>
      </a>
    </li>
    <li v-if="scrollDown" class="sideBtn-item">
      <a href="" @click.prevent="goToTop">
        <span class="material-icons ">
          vertical_align_top
        </span>
      </a>
    </li>
  </ul>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    ref="offcanvas"
    aria-labelledby="offcanvasRightLabel"
  >
    <div v-if="offcanvasLoading" class="offcanvas-loading">
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="offcanvas-header bg-secondary">
      <h5>購物清單</h5>
      <button
        type="button"
        class="btn-close text-reset btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="offcanvas-content">
        <div
          v-if="cart.length <= 0"
          class="p-4 border border-white border-bottom-0 bg-table text-dark"
        >
          <p class="text-center text-base mb-6">購物車目前沒有商品<br />趕快加入商品到你的購物車吧</p>

          <router-link
            class="d-block  btn btn-dark btn-hover"
            :to="`/shop`"
            data-bs-dismiss="offcanvas"
          >
            <span>前往商店</span></router-link
          >
        </div>
        <div v-else>
          <div class="cart_list">
            <div
              v-for="(item, index) in cart"
              :key="item.id"
              class="d-flex g-0 mb-4 border border-white align-items-center
        bg-table text-dark border-bottom-0"
            >
              <img class="w-15 me-4" :src="item.product.imageUrl" alt="" />

              <div class="w-40 flex-shrink-0 me-4">
                <p>{{ item.product.title }}</p>
                <p class="text-sm opacity-6">
                  {{ item.qty }} * NT${{ item.product.price }} = NT${{ item.final_total }}
                </p>
              </div>

              <div class="sideCart d-flex me-4">
                <button
                  :disabled="item.qty <= 1"
                  class="quantity-btn remove text-dark border-dark"

                  type="button"
                  @click="minusCartQty(index)"
                >-</button>
                <input
                  class="text-center quantity w-100 border-start-0
              border-end-0 border-dark bg-transparent"
                  type="number"
                  v-model.lazy.number="item.qty"
                  min="1"
                  @change="updateCart(index, item.id, item.qty)"
                />
                <button
                  type="button"
                  class="quantity-btn plus text-dark
            border-dark"

                  @click="addCartQty(index)"
                >+</button>
              </div>

              <a @click.prevent="deleteCart(item.id)" href="" class="text-dark"
                ><span class="material-icons scale-hover"> delete_forever </span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="cart.length > 0" class="offcanvas-btn">
        <p class="text-dark text-lg mb-5">總計：NT${{ final_total }}</p>
        <router-link
          :to="`/shop`"
          class="d-block  btn btn-dark btn-hover py-3 mb-5"
          data-bs-dismiss="offcanvas"
          ><span>繼續購物</span></router-link
        >
        <router-link
          :to="`/cart`"
          class="d-block  btn btn-dark btn-hover py-3"
          data-bs-dismiss="offcanvas"
          ><span>前往購物車</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Offcanvas } from 'bootstrap';
import emitter from '@/methods/eventBus';

const showIconRoute = ['shop', 'product', 'cart', 'checkout', 'check', 'final'];
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
      offcanvas: '',
      cart: [],
      final_total: 0,
      offcanvasLoading: false,
      showIcon: false,
      showCart: false,
    };
  },
  watch: {
    page() {
      this.showIcon = showIconRoute.includes(this.page);
      this.showCart = showCartRoute.includes(this.page);
    },
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
    openOffcanvas() {
      this.offcanvas.show();
      document.querySelector(':root').style.overflowY = 'hidden';
    },
    handleScroll() {
      if (window.scrollY > 200) {
        this.scrollDown = true;
      } else {
        this.scrollDown = false;
      }
    },
    addCartQty(item) {
      this.cart[item].qty += 1;
      this.updateCart(item, this.cart[item].id, this.cart[item].qty);
    },
    minusCartQty(item) {
      console.log(this.cart[item].qty);
      this.cart[item].qty -= 1;
      this.updateCart(item, this.cart[item].id, this.cart[item].qty);
    },
    getcart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.success) {
            this.cart = res.data.data.carts;
            this.final_total = res.data.data.final_total;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCart(item, id, qty) {
      this.offcanvasLoading = true;
      if (this.cart[item].qty < 1) {
        this.cart[item].qty = 1;
        this.offcanvasLoading = false;
        return;
      }
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .put(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.offcanvasLoading = false;
            emitter.emit('update-cart');
            this.getcart();
          } else {
            this.offcanvasLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCart(id) {
      this.offcanvasLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.offcanvasLoading = false;
            this.getcart();
            emitter.emit('update-cart');
          } else {
            this.offcanvasLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas, { scroll: false });
    this.getcart();
    emitter.on('update-cart', () => {
      this.getcart();
    });

    this.$refs.offcanvas.addEventListener('hidden.bs.offcanvas', () => {
      document.querySelector(':root').style.overflowY = 'auto';
    });
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
