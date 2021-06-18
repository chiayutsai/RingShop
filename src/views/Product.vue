<template>
  <div class="container pt-17">
    <div class="img-overlay"></div>
    <div class="row g-5">
      <div class="col-6">
        <img v-if="!product.imagesUrl" class="rounded shadow" :src="product.imageUrl" alt="" />
        <SwiperComponent v-else :product="product"/>
        <!-- <div class="swiper" >

        </div> -->
      </div>
      <div class="col-5 offset-1">
        <p class="text-light mb-2">{{ product.category }}</p>

        <h1 class="text-3xl mb-6">{{ product.title }}</h1>
        <ul class="mb-6 ms-2 text-sm text-light point">
          <li class="mb-2">商品材質：鋯石 / 銅 (保色電鍍)</li>
          <li>SIZE長寬約：7 cm x 0.9 cm</li>
        </ul>

        <p class="fw-bold text-xl mb-8">
          NT${{ product.price
          }}<span class="text-light text-lg fw-normal text-decoration-line-through ms-4"
            >NT${{ product.origin_price }}</span
          >
        </p>
        <div class="d-flex w-75 mb-3" :class="{ 'mb-6': !failQty }">
          <input
            class="quantity-btn remove text-xl"
            value="-"
            type="button"
            @click="minusQty"
            :disabled="qty <= 1"
          />
          <input
            class="text-center quantity w-100 text-lg"
            type="number"
            min="1"
            v-model="qty"
            @change="checkQty"
          />
          <input type="button" class="quantity-btn plus text-xl" value="+" @click="addQty" />
        </div>
        <p v-if="failQty" class="text-sm text-primary opacity-5 mb-6">商品數量最少為一件!</p>
        <div class="w-75 btn btn-secondary text-white shadow secondary-hover mb-5">
          <a
            href=""
            class="d-flex justify-content-center white-hover"
            @click.prevent="addCart(product.id, qty)"
          >
            <span class="material-icons"> shopping_cart </span>加入購物車</a
          >
        </div>
        <a href="" class="d-flex mb-8">
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
  <Tab :product="product" />
  <div v-if="relativeProduct.length > 0" class="container mb-17">
    <p class="text-3xl text-center border-bottom border-light pb-4 mb-8">相關產品</p>
    <ul class="row row-cols-4 g-5">
      <Card v-for="item in relativeProduct" :key="item.id" :product="item" />
    </ul>
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
    };
  },
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
      const data = {
        data: { product_id: id, qty },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert(res.data.message);
          } else {
            alert(res.data.message);
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
