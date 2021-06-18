<template>
  <p class="bg-secondary p-3 rounded-top">新增商品</p>
  <div class="bg-white rounded-bottom shadow overflow-hidden  ">
    <ProductForm />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';

export default {
  components: {
    ProductForm,
  },
};
</script>
