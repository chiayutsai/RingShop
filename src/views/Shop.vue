<template>
  <Loading :isLoading="isLoading" />
  <div class="vh-40 vh-lg-60 bg-all"></div>
  <div class="container border-bottom border-light py-15 mb-15">
    <ol class="breadcrumb mb-10 mb-sm-13 mb-xl-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item"><router-link :to="`/shop`">產品</router-link></li>
      <li class="breadcrumb-item active">{{ nowCategory === "" ? "全部商品" : nowCategory }}</li>
    </ol>
    <div class="row">
      <div class="col-12 col-xl-3 mt-xl-13 mb-10 mb-sm-13 mb-xl-0">
        <div class="d-none d-xl-block w-xl-90">
          <div class="d-none d-xl-flex justify-content-between text-xl mb-6">
            <div class="d-flex">
              <span class="w-bar bg-white me-1"></span>
              <span class="w-bar bg-white me-2"></span>
            </div>
            <h3 class="text-xl">
              全部商品 <span class="font-abril text-lg opacity-8 align-self-end">All Products</span>
            </h3>
            <div class="d-flex">
              <span class="w-bar bg-white ms-2"></span>
              <span class="w-bar bg-white ms-1"></span>
            </div>
          </div>
          <ul class="mb-xl-10">
            <li class="category-link">
              <a
                href="#"
                @click.prevent="changeCategory('')"
                :class="{
                  'cate-active': selectCategory === '' && selectSeries === ''
                }"
              >
                全部商品
                <span class="text-base material-icons">
                  double_arrow
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-xl-90 mb-10">
          <div class="d-none d-xl-flex justify-content-between text-xl mb-6">
            <div class="d-flex">
              <span class="w-bar bg-white me-1"></span><span class="w-bar bg-white me-2"></span>
            </div>
            <h3 class="text-xl">
              系列產品 <span class="font-abril text-lg opacity-8 align-self-end">Series</span>
            </h3>
            <div class="d-flex">
              <span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span>
            </div>
          </div>
          <ul class="d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center">
            <li class="d-block d-xl-none category-link mb-5 mb-md-0">
              <a
                href="#"
                @click.prevent="changeCategory('')"
                :class="{
                  'cate-active': selectCategory === '' && selectSeries === ''
                }"
              >
                全部商品
                <span class="text-base material-icons">
                  double_arrow
                </span>
              </a>
            </li>
            <li class="category-link mb-xl-4">
              <a
                href="#"
                @click.prevent="changeSeries('珍珠系列')"
                :class="{ 'cate-active': selectSeries === '珍珠系列' }"
              >
                珍珠系列
                <span class="text-base material-icons">
                  double_arrow
                </span>
              </a>
            </li>
            <li class="category-link mb-xl-4">
              <a
                href="#"
                @click.prevent="changeSeries('水晶系列')"
                :class="{ 'cate-active': selectSeries === '水晶系列' }"
              >
                水晶系列
                <span class="text-base material-icons">
                  double_arrow
                </span>
              </a>
            </li>
            <li class="category-link mb-xl-4">
              <a
                href="#"
                @click.prevent="changeSeries('鎖骨鏈系列')"
                :class="{ 'cate-active': selectSeries === '鎖骨鏈系列' }"
              >
                鎖骨鏈系列
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
            <h3 class="text-xl">
              商品分類 <span class="font-abril text-lg opacity-8 align-self-end">Category</span>
            </h3>
            <div class="d-flex">
              <span class="w-bar bg-white ms-2"></span><span class="w-bar bg-white ms-1"></span>
            </div>
          </div>
          <ul class="d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center">
            <li v-for="category in productsCategory" class="category-link mb-xl-4" :key="category">
              <a
                href="#"
                @click.prevent="changeCategory(category)"
                :class="{ 'cate-active': selectCategory === category }"
              >
                {{ category }}
                <span class="text-base material-icons">
                  double_arrow
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-xl-9">
        <div class="d-flex mb-10">
          <h1 class="title text-4xl">{{ nowCategory === "" ? "全部商品" : nowCategory }}</h1>
        </div>
        <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mb-13">
          <li class="col" v-for="item in productByCategory" :key="item.id">
            <Card :product="item" :myFavorite="myFavorite" @emit-add-favorite="addMyFavorite" />
          </li>
        </ul>
        <Pagination :pagination="pagination" @emit-page="showCategory" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
import localStorage from '@/mixins/localStorage';

export default {
  data() {
    return {
      productsAll: [],
      productsCategory: [],
      selectCategory: '',
      selectSeries: '',
      isLoading: false,
      nowCategory: '',
      productByCategory: [],
      myFavorite: this.getLocalStorage() || [],
      pagination: {
        current_page: 1,
        has_next: true,
        has_pre: false,
        total_pages: 1,
      },
    };
  },
  mixins: [localStorage],
  inject: ['emitter'],
  components: {
    Card,
    Pagination,
  },
  methods: {
    getAllData() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.productsAll = res.data.products;
            this.isLoading = false;
            this.productsAll.forEach((product) => {
              if (!this.productsCategory.includes(product.category)) {
                this.productsCategory.push(product.category);
              }
            });
          } else {
            this.isLoading = false;
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    changeCategory(category) {
      this.$router.push({ name: 'shop', query: { category } });
      this.nowCategory = category;
    },
    changeSeries(series) {
      this.$router.push({ name: 'shop', query: { series } });
      this.nowCategory = series;
    },
    showCategory(page = 1) {
      const tempProductCategory = [...this.categoryProduct];
      const allPage = Math.ceil(tempProductCategory.length / 10);
      if (this.selectSeries || this.selectSeries !== '') {
        this.nowCategory = this.selectSeries;
      } else {
        this.nowCategory = this.selectCategory === '' ? '全部商品' : this.selectCategory;
      }
      this.pagination = {
        current_page: page,
        total_pages: allPage,
        has_pre: page > 1,
        has_next: page < allPage,
      };
      this.productByCategory = tempProductCategory.splice((page - 1) * 10, page * 10);
    },
  },
  watch: {
    $route() {
      this.selectCategory = this.$route.query.category || '';
      this.selectSeries = this.$route.query.series || '';
    },
    categoryProduct() {
      this.showCategory();
    },
  },
  computed: {
    categoryProduct() {
      let categoryProduct = [];
      if (this.selectSeries || this.selectSeries !== '') {
        categoryProduct = this.productsAll.filter((item) => item.series?.match(this.selectSeries));
      } else {
        categoryProduct = this.productsAll.filter(
          (item) => item.category?.match(this.selectCategory),
        );
      }
      return categoryProduct;
    },
  },
  mounted() {
    this.getAllData();
    this.selectCategory = this.$route.query.category || '';
    this.selectSeries = this.$route.query.series || '';
  },
};
</script>
