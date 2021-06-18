<template>
  <div class="container pt-17">
    <Progress step="1" />
    <h3
      class="d-flex rounded-top align-items-center
     bg-secondary p-4"
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
      <div class="row g-0 p-4 border border-white border-bottom-0 bg-table text-dark">
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
          <div class="col-4">
            <div class="d-flex align-items-center">
              <img class="w-40 me-4" :src="item.product.imageUrl" alt="" />

              <h3 class="text-lg">{{ item.product.title }}</h3>
            </div>
          </div>
          <div class="col-2">
            <p>NT${{ item.product.price }}</p>
            <p class="text-dark opacity-5 text-sm text-decoration-line-through">
              NT${{ item.product.origin_price }}
            </p>
          </div>
          <div class="col-3">
            <div class="d-flex w-75" :class="{ 'mb-2': failQty }">
              <input
                :disabled="item.qty <= 1"
                class="quantity-btn cart-remove text-dark border-dark"
                value="-"
                type="button"
                @click="minusCartQty(index)"
              />
              <input
                class="text-center quantity w-100 border-start-0
              border-end-0 border-dark bg-transparent"
                type="number"
                v-model.number="item.qty"
                min="1"
                @change="updateCart(index, item.id, item.qty)"
              />
              <input
                type="button"
                class="quantity-btn plus text-dark
            border-dark"
                value="+"
                @click="addCartQty(index)"
              />
            </div>
          </div>
          <div class="col-2">NT${{ item.final_total }}</div>
          <div class="col-1">
            <a @click.prevent="deleteCart(item.id)" href="" class="text-dark"
              ><span class="material-icons"> delete_forever </span></a
            >
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-between align-items-center
      rounded-bottom bg-table border border-white p-6"
      >
        <a @click.prevent="deleteAll" class="btn btn-outline-dark">清空購物車</a>

        <div class="d-flex align-items-center">
          <p class="text-dark text-xl me-5">總計：NT${{ final_total }}</p>
          <router-link  :to="`/shop`" class="btn btn-dark">繼續購物</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-15 mb-17">
    <div class="row g-5">
      <div class="col-8">
        <p class="text-xl rounded-top bg-secondary p-4">超值加購</p>
        <div class="p-4 rounded-bottom border border-white bg-table text-dark">
          <ul class="row row-cols-3">
            <Card v-for="item in randomProduct" :key="item.id"
             :cartCard="true" :product="item"/>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <p class="text-xl rounded-top bg-secondary p-4">訂單資訊</p>
        <div class="row g-0 p-6 rounded-bottom border border-white bg-table text-dark">
          <div class="col-4 mb-4">
            <p>商品數量：</p>
          </div>
          <div class="col-8 mb-4">
            <p>共 {{ allQty }} 件</p>
          </div>
          <div class="col-4 mb-4">
            <p>小計：</p>
          </div>
          <div class="col-8 mb-4">
            <p>NT${{ final_total }}</p>
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
          <div class="col-8 mb-4">
            <p class="fw-bold">NT${{ final_total }}</p>
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
</template>

<script>
import Progress from '@/components/Progress.vue';
import Card from '@/components/Card.vue';

export default {
  data() {
    return {
      cart: [],
      final_total: 0,
      allQty: 0,
      failQty: false,
      allProduct: [],
      randomProduct: [],

    };
  },
  components: {
    Progress,
    Card,
  },
  methods: {
    getAllData() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.allProduct = res.data.products;

            this.getRandom();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
            this.allQty = 0;
            this.cart = res.data.data.carts;
            this.final_total = res.data.data.final_total;
            this.cart.forEach((item) => {
              this.allQty += item.qty;
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .put(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.getcart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.getcart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteAll() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.getcart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goToPay() {
      if (this.cart.length === 0) {
        alert('購物車是空的，快去新增商品吧');
        return;
      }
      this.$router.push('/checkout');
    },
    getRandom() {
      const ran = Math.floor(Math.random() * (this.allProduct.length));
      const ranArr = [ran, ran + 1, ran + 2];
      const ranFinal = ranArr.map((item) => item % this.allProduct.length);
      ranFinal.forEach((item) => {
        this.randomProduct.push(this.allProduct[item]);
      });
    },
  },
  mounted() {
    this.getcart();
    this.getAllData();
  },
};
</script>
