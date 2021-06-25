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
          <h5 class="modal-title" id="exampleModalLabel">編輯文章</h5>

          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ArticleForm :article="article" :isAdd="false" ref="articleForm" />
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
import ArticleForm from '@/components/ArticleForm.vue';

export default {
  props: {
    article: {
      type: Object,
    },
  },

  components: {
    ArticleForm,
  },
  mixins: [modalMixin],
  methods: {
    update() {
      const { articleForm } = this.$refs;
      articleForm.$refs.addForm.validate().then((success) => {
        if (success.valid) {
          const updateDate = Math.round(new Date().getTime() / 1000);
          this.updateArticle = {
            updateDate,
            ...this.article,
          };
          this.$emit('update', this.updateArticle);
        }
      });
    },
  },

};
</script>
