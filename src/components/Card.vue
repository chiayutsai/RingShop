<template>
  <div class=" card">
    <router-link
      class="card-img "
      :class="{ 'card-img-rotate': !cartCard, 'card-small-img': cartCard }"
      @mouseover="changeImg"
      @mouseleave="recoveryImg"
      :to="`/product/${product.id}`"
    >
      <img :src="product.imageUrl" :class="{ 'show-card-img': showFirstImg }" alt=""/>
      <img
        v-if="product.imagesUrl"
        :class="{ 'show-card-img': !showFirstImg }"
        :src="product.imagesUrl[0]"
        alt=""
    /></router-link>

    <div class="card-body">
      <div v-if="cartCard">
        <p class="mb-2">
          NT${{ product.price
          }}<span class="text-dark text-sm opacity-5 text-decoration-line-through ms-2"
            >NT${{ product.origin_price }}</span
          >
        </p>
        <div
          class="btn btn-sm btn-secondary text-white secondary-hover"
          @click="addCart(product.id)"
        >
          加入購物車
        </div>
      </div>
      <div v-else class="d-flex align-items-center justify-content-between">
        <div>
          <h3 class="card-title mb-3">
            <router-link
              :to="`/product/${product.id}`"
              :class="{ 'text-dark ': cartCard, 'text-base': cartCard }"
              >{{ product.title }}</router-link
            >
          </h3>
          <p>
            NT${{ product.price
            }}<span class="text-light text-decoration-line-through ms-2"
              >NT${{ product.origin_price }}</span
            >
          </p>
        </div>
        <div class="d-flex">
          <a href="" class="border rounded-circle  p-2  me-4 icon-hover">
            <span class="material-icons"> favorite_border </span></a
          >
          <div v-if="loading" class="add-loading border rounded-circle  p-2 ">
            <div class="spinner-border spinner-border-sm text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="position-relative">
            <a
              v-if="!loading"
              href=""
              class=" border rounded-circle  p-2  icon-hover"
              @click.prevent="addCart(product.id)"
            >
              <span class="material-icons"> shopping_cart </span>
            </a>
            <!-- <img ref="addImg"
              class="addCartAnimation"
              :class="{ 'show': showAddAnimation }"
              :src="product.imageUrl"
              alt=""
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    product: Object,
    cartCard: Boolean,
  },
  data() {
    return {
      showFirstImg: true,
      loading: false,

    };
  },
  inject: ['emitter'],
  methods: {
    changeImg() {
      if (this.product.imagesUrl) {
        this.showFirstImg = false;
      }
    },

    recoveryImg() {
      this.showFirstImg = true;
    },
    addCart(id) {
      this.loading = true;
      const data = {
        data: { product_id: id, qty: 1 },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.emitter.emit('update-cart');
            this.loading = false;
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
            this.loading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
