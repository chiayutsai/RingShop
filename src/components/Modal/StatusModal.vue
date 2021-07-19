<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-secondary text-white py-4">
          <h5 class="modal-title" id="exampleModalLabel">選擇訂單狀態</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            v-if="status !== 'wait'"
            class="status status-wait me-4"
            @click="updateStatus('wait')"
          >
            等待付款中
          </div>
          <div
            v-if="status !== 'handle'"
            class="status status-handle me-4"
            @click="updateStatus('handle')"
          >
            處理中
          </div>
          <div
            v-if="status !== 'finish'"
            class="status status-finish me-4"
            @click="updateStatus('finish')"
          >
            完成
          </div>
          <div
            v-if="status !== 'cancel'"
            class="status status-cancel me-4"
            @click="updateStatus('cancel')"
          >
            取消
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    order: {
      type: Object,
    },
    status: {
      type: String,
    },
  },
  data() {
    return {
      tempOrder: {},
    };
  },
  watch: {
    order() {
      this.tempOrder = { ...this.order, status: this.status };
    },
  },
  mixins: [modalMixin],
  methods: {
    updateStatus(status) {
      this.tempOrder.status = status;
      if (status === 'handle' || status === 'finish') {
        this.tempOrder.is_paid = true;
        if (!this.tempOrder.paid_date) {
          this.tempOrder.paid_date = Math.round(new Date().getTime() / 1000);
        }
      }
      if (status === 'wait') {
        this.tempOrder.is_paid = false;
        this.tempOrder.paid_date = null;
      }
      this.$emit('emit-status', this.tempOrder);
    },
  },
};
</script>
