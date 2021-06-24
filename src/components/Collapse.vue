<template>
  <div class="collapse text-sm p-8" :id="`collapseExample${num}`" ref="collapse">
    <div class="d-flex mb-5">
      <div class="me-2 flex-shrink-0">產品單位 :</div>
      <div class="">{{ product.unit }}</div>
    </div>
    <div class="d-flex mb-5">
      <div class="me-2 flex-shrink-0">產品規格 :</div>
      <div class="">
        <p v-for="(item, key) in product.formats" :key="key" class="mb-3">
          {{ item.format }} : {{ item.content }}
        </p>
      </div>
    </div>
    <div class="d-flex mb-5">
      <div class="me-2 flex-shrink-0">產品描述 :</div>
      <div class="">{{ product.description }}</div>
    </div>
    <div class="d-flex mb-5">
      <div class="me-2 flex-shrink-0">說明內容 :</div>
      <div class="">{{ product.content }}</div>
    </div>
    <div class="d-flex mb-5">
      <div class="me-2 flex-shrink-0">輪播圖片 :</div>
      <div class="">
        <div class="d-flex flex-wrap">
          <img
            class="w-15 small-size me-3"
            v-for="(img, i) in product.imagesUrl"
            :src="img"
            :key="'img' + i"
          />
        </div>
      </div>
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
