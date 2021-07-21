<template>
  <div class="card">
    <router-link
      class="card-img "
      :class="{ 'card-img-rotate': !cartCard, 'card-small-img': cartCard }"
      @mouseover="changeImg"
      @mouseleave="recoveryImg"
      :to="`/product/${product.id}`"
    >
      <img :src="product.imageUrl" :class="{ 'show-card-img': showFirstImg }" :alt="product.title"/>
      <img
        v-if="product.imagesUrl"
        :class="{ 'show-card-img': !showFirstImg }"
        :src="product.imagesUrl[0]"
        :alt="product.title"/>
    </router-link>
    <div class="card-body">
      <div v-if="cartCard">
        <h3 class="card-title mb-2">
          <router-link
            :to="`/product/${product.id}`"
            :class="{ 'text-dark ': cartCard, 'text-base': cartCard }"
            >{{ product.title }}</router-link
          >
        </h3>
        <p class="mb-2">
          NT${{ toCurrency(product.price) }}
          <span
            v-if="product.price !== product.origin_price"
            class="text-dark text-sm opacity-5 text-decoration-line-through ms-2"
            >NT${{ toCurrency(product.origin_price) }}
          </span>
        </p>
        <a
          v-if="myFavorite.includes(product.id)"
          href="#"
          class="btn btn-sm btn-secondary text-white secondary-hover me-2"
          @click.prevent="emitaddMyFavorite(product.id)"
        >
          <span class="material-icons text-base"> favorite </span>
        </a>
        <a
          v-else
          href="#"
          class="btn btn-sm btn-outline-secondary white-hover cartCard-btn me-2"
          @click.prevent="emitaddMyFavorite(product.id)"
        >
          <span class="material-icons text-base"> favorite_border </span>
        </a>
        <div class="position-relative d-inline-block">
          <div
            class="btn btn-sm btn-secondary text-white secondary-hover"
            @click="addCart(product.id)"
          >
            <span>加入購物車</span>
          </div>
          <button
            v-if="loading"
            type="button"
            class=" btn d-flex justify-content-center align-items-center
                position-absolute no-allow
                h-100 w-100 top-0 start-0 bg-light"
          >
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </div>
      </div>
      <div v-else class="d-flex align-items-center justify-content-between">
        <div>
          <h3 class="card-title mb-3">
            <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
          </h3>
          <p>
            NT${{ toCurrency(product.price) }}
            <span
              v-if="product.price !== product.origin_price"
              class="text-light text-decoration-line-through ms-2"
              >
              NT${{ toCurrency(product.origin_price) }}
            </span>
          </p>
        </div>
        <div class="d-flex">
          <a
            v-if="myFavorite.includes(product.id)"
            href="#"
            class="border bg-white text-secondary rounded-circle p-2 me-4 icon-active-hover"
            @click.prevent="emitaddMyFavorite(product.id)"
          >
            <span class="material-icons"> favorite </span>
            </a>
          <a
            v-else
            href="#"
            class="border rounded-circle p-2 me-4 icon-hover"
            @click.prevent="emitaddMyFavorite(product.id)"
          >
            <span class="material-icons"> favorite_border </span>
          </a>
          <div v-if="loading" class="add-loading border rounded-circle p-2 ">
            <div class="spinner-border spinner-border-sm text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="position-relative">
            <a
              v-if="!loading"
              href="#"
              class=" border rounded-circle p-2 icon-hover"
              @click.prevent="addCart(product.id, $event)"
            >
              <span class="material-icons"> shopping_cart </span>
            </a>
            <img
              ref="addImg"
              class="addCartAnimation"
              :style="{ top: `${elTop}px`, left: `${elLeft}px` }"
              :src="product.imageUrl"
              :alt="product.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import localStorage from '@/mixins/localStorage';

export default {
  props: {
    product: Object,
    cartCard: Boolean,
    myFavorite: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      showFirstImg: true,
      loading: false,
      elTop: 0,
      elLeft: 0,
    };
  },
  mixins: [localStorage],
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
    addCart(id, event) {
      this.loading = true;
      if (event) {
        const addImg = event.target.parentNode.nextElementSibling;
        addImg.classList.add('show');
        this.elTop = event.target.getBoundingClientRect().top - 5;
        this.elLeft = event.target.getBoundingClientRect().left - 5;
        setTimeout(() => {
          addImg.classList.add('move');
        }, 10);
        setTimeout(() => {
          addImg.classList.remove('move', 'show');
        }, 1000);
      }
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
            this.loading = false;
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
            this.loading = false;
          }
        })
        .catch((err) => err);
    },
    emitaddMyFavorite(id) {
      this.$emit('emit-add-favorite', id);
    },
  },
};
</script>
