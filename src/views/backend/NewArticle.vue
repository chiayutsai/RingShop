<template>
  <Loading :isLoading="isLoading" />
  <div class="d-flex align-items-center justify-content-between mb-5 ">
    <h2 class="text-dark">新增文章</h2>
  </div>
  <div class="bg-white rounded overflow-hidden border border-secondary ">
    <div class="container-fluid py-6">
      <ArticleForm :isAdd="true" ref="articleForm" />
      <div class="d-flex justify-content-end border-top pt-6">
        <button type="button" class="btn btn-outline-secondary white-hover me-4" @click="clean">
          重填文章資訊
        </button>
        <button type="button" class="btn btn-secondary text-white px-12" @click.prevent="add">
          新增文章
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    ArticleForm,
  },
  inject: ['emitter'],
  methods: {
    add() {
      const { articleForm } = this.$refs;
      articleForm.$refs.addForm.validate().then((success) => {
        if (success.valid) {
          this.isLoading = true;
          const publicDate = Math.round(new Date().getTime() / 1000);
          const data = {
            data: {
              create_at: publicDate,
              ...articleForm.tempArticle,
            },
          };
          this.$http
            .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`,
              data)
            .then((res) => {
              if (res.data.success) {
                this.emitter.emit('push-message', {
                  type: 'success',
                  message: res.data.message,
                });
                articleForm.cleanForm();
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
      const { articleForm } = this.$refs;
      articleForm.cleanForm();
    },
  },
};
</script>
