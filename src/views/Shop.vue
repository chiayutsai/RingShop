<template>
  <Loading :isLoading="isLoading"></Loading>

  <div class="vh-40 vh-lg-60 bg-all"></div>
  <div class="container border-bottom border-light py-15 mb-15">
    <div class="row">
      <div class="col-12 col-xl-3 mt-xl-14 mb-10 mb-sm-14 mb-xl-0">

          <div class="d-none d-xl-block w-xl-90">
            <div class="d-none d-xl-flex justify-content-between text-xl mb-6">
              <div class="d-flex">
                <span class="w-bar bg-white me-1"></span>
                <span class="w-bar bg-white me-2"></span>
              </div>
              <p>
                全部商品 <span
                  class="font-abril text-lg
          opacity-8 align-self-end"
                  >All Products</span
                >
              </p>
              <div class="d-flex">
                <span class="w-bar bg-white ms-2"></span>
                <span class="w-bar bg-white ms-1"></span>
              </div>
            </div>
            <ul class="mb-xl-10">
              <li class="category-link">
                <a
                  href=""
                  @click.prevent="getCategoryProduct('全部商品')"
                  :class="{ 'cate-active': activeCategory === '全部商品' }"
                  >全部商品
                  <span class="text-base material-icons">
                    double_arrow
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="w-xl-90">
            <div class="d-none d-xl-flex justify-content-between text-xl mb-6">
              <div class="d-flex">
                <span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span>
              </div>
              <p>
                商品分類 <span class="font-abril text-lg  opacity-8  align-self-end">Category</span>
              </p>
              <div class="d-flex">
                <span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span>
              </div>
            </div>
            <ul class="d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center">
               <li class="d-block d-xl-none category-link mb-5 mb-md-0">
                <a
                  href=""
                  @click.prevent="getCategoryProduct('全部商品')"
                  :class="{ 'cate-active': activeCategory === '全部商品' }"
                  >全部商品
                  <span class="text-base material-icons">
                    double_arrow
                  </span>
                </a>
              </li>
              <li
                v-for="category in productsCategory"
                class="category-link
           mb-xl-4 "
                :key="category"
              >
                <a
                  href=""
                  @click.prevent="getCategoryProduct(category)"
                  :class="{ 'cate-active': activeCategory === category }"
                  >{{ category }}
                  <span class="text-base material-icons">
                    double_arrow
                  </span></a
                >
              </li>
            </ul>
          </div>

      </div>
      <div class="col-12 col-xl-9">
        <div class="d-flex mb-10">
          <h1 class="title text-4xl">{{ activeCategory }}</h1>
          <!-- <p class="font-abril text-3xl opacity-8 align-self-end">All Products</p> -->
        </div>

        <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mb-13">
          <li class="col" v-for="item in products" :key="item.id">
            <Card :product="item" />
          </li>
        </ul>

        <Pagination
          v-if="activeCategory === '全部商品'"
          :pagination="pagination"
          @emit-page="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
      isLoading: false,
    };
  },
  components: {
    Card,
    Pagination,
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            console.log(res.data.message);
            this.isLoading = false;
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
