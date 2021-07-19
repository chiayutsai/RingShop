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
          <h5 class="modal-title" id="exampleModalLabel">{{ article.title }}</h5>

          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-dark">
          <h2 class="mb-4">{{ article.title }}</h2>
          <div class="d-flex mb-4">
            <div
              v-for="(item, key) in article.tag"
              :key="key"
              class="bg-primary py-1 px-4 rounded-pill text-xs me-4"
            >
              #{{ item }}
            </div>
          </div>
          <div class="d-flex justify-content-between  mb-4">
            <p>作者 : {{ article.author }}</p>
            <p>發布日期 : {{ publicDate }}</p>
          </div>
          <img class="w-100 mb-6" v-if="article.imageUrl" :src="article.imageUrl" alt="" />

          <div ref="content"></div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary white-hover"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-secondary text-white" @click="edit">
            編輯文章
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
    article: {
      type: Object,
    },
  },
  data() {
    return {
      publicDate: '',
    };
  },
  watch: {
    article() {
      [this.publicDate] = new Date(this.article.create_at * 1000).toISOString().split('T');
      this.$refs.content.innerHTML = this.article.content;
    },
  },
  mixins: [modalMixin],
  methods: {
    edit() {
      this.hideModal();
      this.$emit('edit');
    },
  },

};
</script>
