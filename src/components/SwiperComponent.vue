<template>
  <swiper
    :loop="false"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mySwiper2"
  >
    <swiper-slide><img :src="product.imageUrl"/></swiper-slide>
    <swiper-slide v-for="(img, index) in product.imagesUrl" :key="index"
      ><img :src="product.imagesUrl[index]"
    /></swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :loop="false"
    :spaceBetween="10"
    :slidesPerView="6"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    class="mySwiper"
  >
    <swiper-slide><img :src="product.imageUrl"/></swiper-slide>
    <swiper-slide v-for="(img, index) in product.imagesUrl" :key="index"
      ><img :src="product.imagesUrl[index]"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default {
  props: {
    product: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>
