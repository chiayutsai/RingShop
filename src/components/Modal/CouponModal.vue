<template>
  <div
    class="modal fade"
    id="updateModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-secondary text-white py-4">
          <h5 class="modal-title" id="exampleModalLabel">編輯優惠券</h5>

          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <CouponForm :coupon="coupon" :isAdd="false" ref="coupon" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary white-hover"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-secondary text-white" @click="update">
            確認編輯
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import CouponForm from '@/components/CouponForm.vue';

export default {
  props: {
    coupon: {
      type: Object,
    },
  },

  components: {
    CouponForm,
  },
  mixins: [modalMixin],
  methods: {
    update() {
      const { coupon } = this.$refs;
      coupon.$refs.addForm.validate().then((success) => {
        console.log(success);
        if (success.valid) {
          this.$emit('update', this.coupon);
        } else {
          console.log('error');
        }
      });
    },
  },

};
</script>
