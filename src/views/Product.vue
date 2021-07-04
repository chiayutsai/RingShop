<template>
  <div class="w-100 vh-100 position-absolute -z-1">
    <div class="img-overlay"></div>
  </div>
  <div class="container pt-15">
    <div class="row g-5">
      <div class="col-12 col-lg-6">
        <img
          v-if="!product.imagesUrl"
          class="rounded shadow product-img"
          :src="product.imageUrl"
          alt=""
        />
        <SwiperComponent v-else :product="product" />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1">
        <p class="text-light mb-3">{{ product.category }}</p>

        <h1 class="text-3xl mb-7">{{ product.title }}</h1>
        <ul class="mb-7 text-sm text-light point">
          <li class="mb-2">商品材質：鋯石 / 銅 (保色電鍍)</li>
          <li>SIZE長寬約：7 cm x 0.9 cm</li>
        </ul>

        <p class="fw-bold text-xl mb-7">
          NT${{ product.price
          }}<span class="text-light text-lg fw-normal text-decoration-line-through ms-4"
            >NT${{ product.origin_price }}</span
          >
        </p>

        <div class="d-flex w-100 w-lg-75 mb-3" :class="{ 'mb-7': !failQty }">
          <button
            class="quantity-btn remove text-xl"
            type="button"
            @click="minusQty"
            :disabled="qty <= 1"
          >
            -
          </button>
          <input
            class="text-center quantity w-100 text-lg"
            type="number"
            min="1"
            v-model="qty"
            @change="checkQty"
          />
          <button type="button" class="quantity-btn plus text-xl" @click="addQty">+</button>
        </div>
        <p v-if="failQty" class="text-sm text-primary opacity-5 mb-7">商品數量最少為一件!</p>

        <div
          class="position-relative w-100 w-lg-75
           "
        >
          <button

            class="w-100 d-flex justify-content-center white-hover
            btn btn-secondary text-white shadow secondary-hover"
            @click="addCart(product.id, qty)"
          >
            <span class="material-icons"> shopping_cart </span>加入購物車</button
          >
          <button v-if="addLoading"
            class=" btn d-flex justify-content-center align-items-center position-absolute no-allow
               w-100 h-100 top-0 start-0 bg-light"
          >
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </div>

        <a href="" class="d-flex my-7">
          <span class="material-icons me-3"> favorite_border </span>加入收藏清單</a
        >
        <ul class="border-start border-3 border-secondary text-sm ps-5">
          <li class="mb-2">
            <span class="fw-bold text-primary opacity-8">限時活動</span> 全館$101免運
          </li>
          <li>
            <span class="fw-bold text-primary opacity-8">夏季優惠</span> 全館單件9/兩件85/三件8折
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container border-bottom border-light pt-15 mb-15">
    <Tab :product="product" />

    <div v-if="relativeProduct.length > 0" class="container mb-15">
      <p class="text-3xl text-center border-bottom border-light pb-4 mb-8">相關產品</p>
      <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
        <Card v-for="item in relativeProduct" :key="item.id" :product="item" />
      </ul>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue';
import SwiperComponent from '@/components/SwiperComponent.vue';

import Tab from '@/components/Tab.vue';

export default {
  components: {
    SwiperComponent,
    Tab,
    Card,
  },
  data() {
    return {
      allProduct: [],
      product: [],
      thumbsSwiper: null,
      qty: 1,
      failQty: false,
      relativeProduct: [],
      routeID: '',
      addLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    addQty() {
      this.failQty = false;
      this.qty += 1;
    },
    minusQty() {
      this.qty -= 1;
    },
    checkQty() {
      if (this.qty <= 1) {
        this.failQty = true;
        this.qty = 1;
      }
    },
    getAll() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.allProduct = res.data.products;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;

      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.product = res.data.product;
            this.getRelativeProduct();
          } else {
            alert(res.data.message);
            this.$router.push('/shop');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRelativeProduct() {
      this.relativeProduct = [];
      this.allProduct.forEach((item) => {
        if (this.relativeProduct.length < 4) {
          if (item.category === this.product.category && item.id !== this.product.id) {
            this.relativeProduct.push(item);
          }
        }
      });
    },
    addCart(id, qty) {
      this.addLoading = true;
      const data = {
        data: { product_id: id, qty },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.qty = 1;
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.addLoading = false;
            this.emitter.emit('update-cart');
          } else {
            this.addLoading = false;
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id(newID) {
      this.routeID = newID;
      if (this.$route.name === 'product') {
        this.getProduct(this.routeID);
      }
    },
  },
  created() {
    this.routeID = this.$route.params.id;
    this.getAll();
    this.getProduct(this.routeID);
  },
};
</script>
