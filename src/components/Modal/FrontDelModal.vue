<template>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-dark py-4 border-0">
          <button
            type="button"
            class="btn-close "
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="text-dark text-center">
           確定要移除商品嗎？
          </p>
          <p class="text-sm text-info text-center">(刪除後將無法恢復)</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-warning text-white" @click="$emit('delete')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  emits: ['delete'],
  mixins: [modalMixin],
};
</script>
