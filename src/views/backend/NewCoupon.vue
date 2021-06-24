<template>
  <Loading :isLoading="isLoading"></Loading>

  <h2 class="text-dark mb-5 ">新增優惠券</h2>

  <div class=" overflow-hidden ">
    <div class="container-fluid ">
      <div class="row  ">
        <div class="col-6 bg-white rounded border border-secondary py-6">
          <CouponForm ref="Coupon" :isAdd="true" />
          <div class="d-flex justify-content-end border-top pt-6">
            <button type="button" class="btn btn-outline-secondary white-hover me-4" @click="clean">
              重填優惠券資訊
            </button>
            <button type="submit" class="btn btn-secondary text-white px-12" @click.prevent="add">
              新增優惠券
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CouponForm from '@/components/CouponForm.vue';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    CouponForm,
  },
  inject: ['emitter'],
  methods: {
    add() {
      const { Coupon } = this.$refs;
      Coupon.$refs.addForm.validate().then((success) => {
        if (success.valid) {
          this.isLoading = true;
          const data = {
            data: Coupon.tempCoupon,
          };

          this.$http
            .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`,
              data)
            .then((res) => {
              console.log(res);
              if (res.data.success) {
                this.emitter.emit('push-message', {
                  type: 'success',
                  message: res.data.message,
                });
                Coupon.cleanForm();
                this.isLoading = false;
              } else {
                this.emitter.emit('push-message', {
                  type: 'error',
                  message: res.data.message,
                });
                this.isLoading = false;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    clean() {
      const { Coupon } = this.$refs;
      Coupon.cleanForm();
    },
  },
};
</script>
