<template>
  <Loading :isLoading="isLoading"></Loading>

   <div class="d-flex align-items-center justify-content-between mb-5 ">
    <h2 class="text-dark">新增產品</h2>

  </div>

  <div class="bg-white rounded overflow-hidden border border-secondary ">
    <div class="container-fluid py-6">
      <ProductForm :isAdd="true" ref="productForm"/>
      <div class="d-flex justify-content-end border-top pt-6">
        <button type="button" class="btn btn-outline-secondary white-hover me-4" @click="clean">
          重填產品資訊
        </button>
        <button
          type="submit"
          class="btn btn-secondary text-white px-12"
          @click.prevent="add"
        >
          新增產品
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    ProductForm,
  },
  inject: ['emitter'],
  methods: {
    add() {
      const { productForm } = this.$refs;
      productForm.$refs.addForm.validate().then((success) => {
        if (success.valid) {
          this.isLoading = true;
          const data = {
            data: productForm.tempProduct,
          };
          this.$http
            .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`, data)
            .then((res) => {
              if (res.data.success) {
                this.emitter.emit('push-message', {
                  type: 'success',
                  message: res.data.message,
                });
                productForm.cleanForm();
                this.isLoading = false;
              } else {
                this.emitter.emit('push-message', {
                  type: 'error',
                  message: res.data.message,
                });
                this.isLoading = false;
              }
            })
            .catch((err) => err);
        }
      });
    },
    clean() {
      const { productForm } = this.$refs;
      productForm.cleanForm();
    },
  },

};
</script>
