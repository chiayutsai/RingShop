<template>
  <Loading :isLoading="isLoading" />
  <div class="container pt-15 border-bottom border-light pb-15 mb-15">
    <ol class="breadcrumb mb-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item active">收藏清單</li>
    </ol>
    <h3
      class="d-flex rounded-top align-items-center
      bg-title text-xl p-4"
    >
      <span class="material-icons me-3"> favorite </span>收藏清單
    </h3>
    <div
      v-if="myFavorite.length <= 0"
      class="p-4 border border-white border-bottom-0 bg-table text-dark"
    >
      <p class="text-center text-xl mb-6">目前沒有收藏商品，快去逛逛商店吧～</p>
      <div class="d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5">
        <router-link class="white-hover" :to="`/shop`"> 前往商店</router-link>
      </div>
    </div>
    <table v-else>
      <tr
        class="d-none d-md-flex row g-0 p-4 border border-white
        border-bottom-0 bg-table text-dark"
      >
        <td class="col-6">商品資料</td>
        <td class="col-2">價格</td>
        <td class="col-3">購買狀態</td>
        <td class="col-1">刪除</td>
      </tr>
      <tr
        v-for="item in favoriteProduct"
        :key="item.id"
        class="row g-0 p-4 border border-white align-items-center
          bg-table text-dark border-bottom-0">
        <td class="col-11 col-md-6 mb-5 mb-md-0">
          <router-link :to="`/product/${item.id}`">
            <div class="d-flex align-items-center">
              <img class="w-40 me-4" :src="item.imageUrl" :alt="item.title" />
              <h3 class="text-base text-dark">{{ item.title }}</h3>
            </div>
          </router-link>
        </td>
        <td class="col-6 col-md-2 order-4 order-md-0">
          <div class="d-flex d-md-block align-items-end">
            <p class="me-3 me-md-0">NT${{ toCurrency(item.price) }}</p>
            <p
              v-if="item.price !== item.origin_price"
              class="text-dark opacity-5 text-sm text-decoration-line-through">
              NT${{ toCurrency(item.origin_price) }}
            </p>
          </div>
        </td>
        <td class="col-6 col-md-3 order-4 order-md-0 ">
          <div class="position-relative">
            <button
              type="button"
              class="btn btn-secondary secondary-hover text-white w-100 w-md-75"
              @click="addCart(item.id)">
              加入購物車
            </button>
            <button
              v-if="addloading"
              type="button"
              class=" btn d-flex justify-content-center
                align-items-center position-absolute no-allow w-100
                w-md-75 h-100 top-0 start-0 bg-light">
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
        </td>
        <td class="col-1 order-2 order-md-0">
          <a @click.prevent="openModal(item.id)" href="#" class="text-dark scale-hover">
            <span class="material-icons"> delete_forever </span>
          </a>
        </td>
      </tr>
      <tr class="d-flex justify-content-end rounded-bottom bg-table border border-white p-6">
        <td>
          <router-link :to="`/shop`" class="btn btn-dark btn-hover px-7">
            <span>前往商店</span>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
  <FrontDelModal ref="delModal" @delete="deleteFavorite" />
</template>

<script>
import FrontDelModal from '@/components/Modal/FrontDelModal.vue';
import localStorage from '@/mixins/localStorage';

export default {
  data() {
    return {
      isLoading: false,
      updateLoading: false,
      myFavorite: [],
      favoriteProduct: [],
      addloading: false,
      tempID: '',
    };
  },
  mixins: [localStorage],
  inject: ['emitter'],
  components: {
    FrontDelModal,
  },
  methods: {
    getFavorite() {
      this.myFavorite = this.getLocalStorage() || [];
      this.favoriteProduct = [];
      this.isLoading = true;
      if (this.myFavorite.length > 0) {
        this.myFavorite.forEach((item) => {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item}`;
          this.$http
            .get(url)
            .then((res) => {
              if (res.data.success) {
                this.favoriteProduct.push(res.data.product);
                this.isLoading = false;
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
        });
      } else {
        this.isLoading = false;
      }
    },
    openModal(id) {
      this.tempID = id;
      this.$refs.delModal.openModal();
    },
    addCart(id) {
      this.addloading = true;
      const data = {
        data: { product_id: id, qty: 1 },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.emitter.emit('update-cart');
            this.addloading = false;
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
            this.addloading = false;
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    deleteFavorite() {
      this.myFavorite.splice(this.myFavorite.indexOf(this.tempID), 1);
      this.saveLocalStorage(this.myFavorite);
      this.emitter.emit('update-favorite');
      this.$refs.delModal.hideModal();
      this.emitter.emit('push-message', {
        type: 'success',
        message: '商品已移除收藏清單',
      });
      this.getFavorite();
    },
  },
  mounted() {
    this.getFavorite();
  },
};
</script>
