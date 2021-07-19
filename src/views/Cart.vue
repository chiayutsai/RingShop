<template>
  <Loading :isLoading="isLoading" />
  <div class="container pt-15">
    <Progress step="1" />
    <h3
      class="d-flex rounded-top align-items-center
     bg-secondary text-2xl p-4"
    >
      <span class="material-icons me-3"> shopping_cart </span>購物車
    </h3>
    <div v-if="cart.length <= 0" class="p-4 border border-white border-bottom-0 bg-table text-dark">
      <p class="text-center text-xl mb-6">購物車目前沒有商品</p>
      <div class="d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5">
        <router-link class="white-hover" :to="`/shop`"> 前往商店</router-link>
      </div>
    </div>
    <div v-else>
      <div
        class="d-none d-md-flex row g-0 p-4 border border-white
       border-bottom-0 bg-table text-dark"
      >
        <div class="col-4">商品資料</div>
        <div class="col-2">單件價格</div>
        <div class="col-3">數量</div>
        <div class="col-2">小計</div>
        <div class="col-1"></div>
      </div>
      <div class="cart_list">
        <div
          v-for="(item, index) in cart"
          :key="item.id"
          class="row g-0 p-4 border border-white align-items-center
        bg-table text-dark border-bottom-0"
        >
          <div class="col-11 col-md-4 mb-5 mb-md-0">
            <div class="d-flex align-items-center">
              <img class="w-40 me-4" :src="item.product.imageUrl" alt="" />
              <h3 class="text-base">{{ item.product.title }}</h3>
            </div>
          </div>
          <div class="col-6 col-md-2 order-4 order-md-0">
            <div class="d-flex d-md-block align-items-end">
              <p class="me-3 me-md-0">NT${{ toCurrency(item.product.price) }}</p>
              <p
                v-if="item.product.price !== item.product.origin_price"
                class="text-dark opacity-5 text-sm text-decoration-line-through"
              >
                NT${{ toCurrency(item.product.origin_price) }}
              </p>
            </div>
          </div>
          <div class="col-12 col-md-3 order-3 order-md-0 mb-5 mb-md-0">
            <div class="d-flex w-100 w-md-75 position-relative">
              <button
                :disabled="item.qty <= 1"
                class="quantity-btn cart-remove text-dark border-dark"
                type="button"
                @click="minusCartQty(index)"
              >
                -
              </button>
              <input
                class="text-center quantity w-100 border-start-0
              border-end-0 border-dark bg-transparent"
                type="number"
                v-model.number="item.qty"
                min="1"
                @change="updateCart(index, item.id, item.qty)"
              />
              <button
                type="button"
                class="quantity-btn plus text-dark
            border-dark"
                @click="addCartQty(index)"
              >
                +
              </button>
              <button
                v-if="updateLoading"
                type="button"
                class=" btn d-flex justify-content-center align-items-center
                position-absolute no-allow
               w-100 h-100 top-0 start-0 bg-light"
              >
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>
          </div>
          <div class="col-6 col-md-2 order-4 order-md-0 text-end text-md-start">
            <span class="d-inline d-md-none">小計：</span>
            NT${{ toCurrency(item.final_total) }}
          </div>
          <div class="col-1 order-2 order-md-0">
            <a @click.prevent="openModal(item.id)" href="#" class="text-dark scale-hover"
              ><span class="material-icons"> delete_forever </span></a
            >
          </div>
        </div>
      </div>
      <div
        class="d-flex
         justify-content-between align-items-end align-items-sm-center
      rounded-bottom bg-table border border-white p-6"
      >
        <a @click.prevent="openModal()" class="btn btn-outline-dark">清空購物車</a>
        <div class="d-flex flex-column flex-sm-row align-items-center">
          <p class="text-dark text-base text-md-xl mb-5 mb-sm-0 me-sm-5 ">
            總計：NT${{ toCurrency(final_total) }}
          </p>
          <router-link :to="`/shop`" class="btn btn-dark btn-hover px-7"
            ><span>繼續購物</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container border-bottom border-light mt-9 mt-lg-15 pb-15 mb-15">
    <div class="row g-5">
      <div class="col-12 col-lg-8">
        <p class="text-xl rounded-top bg-secondary p-4">不要錯過～</p>
        <div class="p-4 rounded-bottom border border-white bg-table text-dark">
          <ul class="row row-cols-2 row-cols-sm-3">
            <li class="col mb-5 mb-sm-0" v-for="item in randomProduct" :key="item.id">
              <Card
                :cartCard="true"
                :product="item"
                :myFavorite="myFavorite"
                @emit-add-favorite="addMyFavorite"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <p class="text-xl rounded-top bg-secondary p-4">訂單資訊</p>
        <div class="row g-0 p-6 rounded-bottom border border-white bg-table text-dark">
          <div class="col-4 mb-4">
            <p>商品數量：</p>
          </div>
          <div class="col-8 mb-4 text-end">
            <p>共 {{ allQty }} 件</p>
          </div>
          <div class="col-4 mb-4 ">
            <p>小計：</p>
          </div>
          <div class="col-8 mb-4 text-end">
            <p>NT${{ toCurrency(final_total) }}</p>
          </div>
          <!-- <div class="col-4 mb-6">
            <p class="text-secondary">折扣：</p>
          </div>
          <div class="col-8 mb-6">
            <p class="text-secondary">-NT$33</p>
          </div> -->
          <div class="col-12 mb-6">
            <div class="border-bottom border-white"></div>
          </div>
          <div class="col-4 mb-4">
            <p class="fw-bold">總計：</p>
          </div>
          <div class="col-8 mb-4 text-end">
            <p class="fw-bold">NT${{ toCurrency(final_total) }}</p>
          </div>
          <div class="col-12">
            <div
              @click="goToPay"
              class="btn btn-secondary w-100 fw-bold text-white shadow secondary-hover"
            >
              前往結帳
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontDelModal :item="tempCartID" ref="delModal" @delete="deleteCart" />
</template>

<script>
import Progress from '@/components/Progress.vue';
import Card from '@/components/Card.vue';
import FrontDelModal from '@/components/Modal/FrontDelModal.vue';
import localStorage from '@/mixins/localStorage';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default {
  data() {
    return {
      cart: [],
      final_total: 0,
      allQty: 0,
      allProduct: [],
      randomProduct: [],
      tempCartID: '',
      isLoading: false,
      updateLoading: false,
      myFavorite: this.get() || [],
    };
  },
  mixins: [localStorage],
  inject: ['emitter'],
  components: {
    Progress,
    Card,
    FrontDelModal,
  },
  methods: {
    getAllData() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.allProduct = res.data.products;
            this.getRandom();
          }
        })
        .catch((err) => err);
    },
    addCartQty(item) {
      this.cart[item].qty += 1;
      this.updateCart(item, this.cart[item].id, this.cart[item].qty);
    },
    minusCartQty(item) {
      this.cart[item].qty -= 1;
      this.updateCart(item, this.cart[item].id, this.cart[item].qty);
    },
    getcart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.allQty = 0;
            this.cart = res.data.data.carts;
            this.final_total = res.data.data.final_total;
            this.cart.forEach((item) => {
              this.allQty += item.qty;
            });
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
        })
        .catch((err) => err);
    },
    updateCart(item, id, qty) {
      if (this.cart[item].qty < 1) {
        this.cart[item].qty = 1;
        return;
      }
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.updateLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .put(url, data)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('update-cart');
            this.updateLoading = false;
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.getcart();
          } else {
            this.updateLoading = false;
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch((err) => err);
    },
    deleteCart() {
      let url = '';
      if (this.tempCartID) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempCartID}`;
      } else {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      }
      this.isLoading = true;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.$refs.delModal.hideModal();
            this.emitter.emit('update-cart');
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.isLoading = false;
            this.getcart();
          } else {
            this.isLoading = false;
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch((err) => err);
    },
    goToPay() {
      if (this.cart.length === 0) {
        this.emitter.emit('push-message', {
          type: 'warning',
          message: '購物車是空的，快去新增商品喔！',
        });
        return;
      }
      this.$router.push('/checkout');
    },
    openModal(id) {
      this.tempCartID = id;
      this.$refs.delModal.openModal();
    },
    getRandom() {
      this.randomProduct = [];
      const cartProductId = this.cart.map((item) => item.product_id);
      const filterProduct = this.allProduct.filter((item) => !cartProductId.includes(item.id));
      const arrSet = new Set([]);
      const maxSize = filterProduct.length < 3 ? filterProduct.length : 3;
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(filterProduct.length);
        arrSet.add(num);
      }
      arrSet.forEach((item) => {
        this.randomProduct.push(filterProduct[item]);
      });
    },
  },
  mounted() {
    this.getcart();
    this.getAllData();
    this.emitter.on('update-cart', () => {
      this.getcart();
    });
  },
};
</script>
