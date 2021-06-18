<template>
  <div class="collapse p-8" :id="`collapseExample${num}`" ref="collapse">
    <p class="text-sm  mb-3">產品單位 : {{ product.unit }}</p>
    <p class="text-sm  mb-3">產品描述 :{{ product.description }}</p>
    <p class="text-sm  mb-3">說明內容 :{{ product.content }}</p>
    <p class="text-sm  mb-3">輪播圖片 :</p>
    <div class="d-flex flex-wrap">
      <img
        class="w-15 m-4 small-size"
        v-for="(img, i) in product.imagesUrl"
        :src="img"
        :key="'img' + i"
      />
    </div>
  </div>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  props: {
    product: Object,
    num: Number,
  },
  data() {
    return {
      collapse: [],

    };
  },
  methods: {
    showCollapse(id) {
      const collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
      this.collapse = collapseElementList.map((collapseEl, key) => {
        if (key === id) {
          // eslint-disable-next-line no-undef
          return new Collapse(collapseEl, { toggle: false }).toggle();
        }
        // eslint-disable-next-line no-undef
        return new Collapse(collapseEl, { toggle: false }).hide();
      });
    },
  },

};
</script>
