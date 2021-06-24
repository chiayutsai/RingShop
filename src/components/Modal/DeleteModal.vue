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
        <div class="modal-header bg-warning text-white py-4">
          <h5 class="modal-title" id="exampleModalLabel">刪除</h5>

          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="text-dark ">
            是否刪除
            <span v-if="type == 'normal'" class="text-warning">{{ item.title }}</span>
            <span v-if="type == 'order' && item.id" class="text-warning">{{ item.id }}</span>
            <span v-if="type == 'order' && !item.id" class="text-warning">全部訂單</span>?
          </p>
          <p class="text-sm text-info">(刪除後將無法恢復)</p>
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
  props: {
    item: {
      type: Object,
    },
    type: {
      type: String,
    },
  },

  mixins: [modalMixin],

};
</script>
