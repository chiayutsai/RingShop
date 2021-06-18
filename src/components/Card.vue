<template>
  <li class="col card">
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
      <h2 class="card-title mb-2">
        <router-link
          :to="`/product/${product.id}`"
          :class="{ 'text-dark ': cartCard, 'text-base': cartCard }"
          >{{ product.title }}</router-link
        >
      </h2>
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
        <p>
          NT${{ product.price
          }}<span class="text-light text-decoration-line-through ms-2"
            >NT${{ product.origin_price }}</span
          >
        </p>
        <div class="d-flex">
          <a href="" class="me-2"> <span class="material-icons"> favorite_border </span></a>
          <a href="" @click.prevent="addCart(product.id)">
            <span class="material-icons" > shopping_cart </span></a
          >
        </div>
      </div>
    </div>
  </li>
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
    };
  },
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
      const data = {
        data: { product_id: id, qty: 1 },
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
};
</script>
