<template>
  <div class="d-flex justify-content-center align-items-center position-relative vh-70 bg-all">
    <RingCircle top="38%" right="34%" />
    <h2 class="text-large ">{{activeCategory}}</h2>
  </div>
  <div class="container py-17">
    <div class="row">
      <div class="col-3 mt-16">
        <p class="d-flex text-xl mb-6">
          <span class="w-bar bg-white me-1"></span>
          <span class="w-bar bg-white me-2"></span>
          全部商品
          <span class="font-abril text-lg opacity-8 align-self-end">All Products</span>
          <span class="w-bar bg-white ms-2"></span>
          <span class="w-bar bg-white ms-1"></span>
        </p>
        <ul class="mb-10">
          <li>
            <a
              href=""
              @click.prevent="getCategoryProduct('全部商品')"
              :class="{ 'cate-active': activeCategory === '全部商品' }"
              >全部商品</a
            >
          </li>
        </ul>
        <p class="d-flex text-xl mb-6">
          <span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span>商品分類
          <span class="font-abril text-lg  opacity-8  align-self-end">Category</span
          ><span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span>
        </p>
        <ul>
          <li v-for="category in productsCategory" class="mb-4" :key="category">
            <a
              href=""
              @click.prevent="getCategoryProduct(category)"
              :class="{ 'cate-active': activeCategory === category }"
              >{{ category }}</a
            >
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div class="d-flex mb-13">
          <h1 class="title">{{activeCategory}}</h1>
         <!-- <p class="font-abril text-3xl opacity-8 align-self-end">All Products</p> -->
        </div>

        <ul class="row row-cols-3 g-5 mb-13">
          <Card v-for="item in products" :key="item.id" :product="item" />
        </ul>

        <Pagination v-if="activeCategory==='全部商品'" :pagination="pagination" @emit-page="getData"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RingCircle from '@/components/RingCircle.vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      productsAll: [],
      productsCategory: [],
      activeCategory: '全部商品',
      pagination: {},
    };
  },
  components: {
    RingCircle,
    Card,
    Pagination,
  },
  methods: {
    getData(page = 1) {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.productsAll = res.data.products;
            this.productsAll.forEach((product) => {
              if (!this.productsCategory.includes(product.category)) {
                this.productsCategory.push(product.category);
              }
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCategoryProduct(category) {
      this.activeCategory = category;
      if (category !== '全部商品') {
        const tempProduct = this.productsAll.filter((product) => product.category === category);
        this.products = tempProduct;
      } else {
        this.getData();
      }
    },

  },
  mounted() {
    this.getData();
  },
};
</script>
