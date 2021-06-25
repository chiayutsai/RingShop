<template>
  <Form v-slot="{ errors }" ref="addForm" class="text-dark">
    <div class="row">
      <div class="col-12 mb-8">
        <label for="articleTitle" class="form-label">文章標題<span v-if="isAdd">必填</span></label>
        <Field
          type="text"
          class="form-control"
          id="articleTitle"
          name="文章標題"
          placeholder="輸入文章標題"
          rules="required"
          :class="{ 'is-backend-invalid': errors['文章標題'] }"
          v-model.lazy.trim="tempArticle.title"
        ></Field>
        <error-message name="產品名稱" class="backend-invalid-feedback"></error-message>
      </div>

      <div class="col-6 mb-8">
        <label for="author" class="form-label">作者<span v-if="isAdd">必填</span></label>
        <Field
          type="text"
          class="form-control"
          id="author"
          name="作者"
          placeholder="輸入作者"
          rules="required"
          :class="{ 'is-backend-invalid': errors['作者'] }"
          v-model.number="tempArticle.author"
        ></Field>
        <error-message name="作者" class="backend-invalid-feedback"></error-message>
      </div>
      <div class="col-6 mb-8">
        <p class="mb-3">是否公開文章</p>
        <div class="form-check mt-4">
          <input
            class="form-check-input"
            type="checkbox"
            name="check"
            id="flexCheckDefault"
            v-model="tempArticle.isPublic"
          />
          <label v-if="tempArticle.isPublic" class="form-check-label" for="flexCheckDefault"
            >公開</label
          >
          <label v-else class="form-check-label" for="flexCheckDefault">未公開</label>
        </div>
      </div>
      <div class="col-12 mb-8">
        <p class="mb-3">文章主圖</p>
        <div class="row row-cols-2 align-items-center">
          <div class="col">
            <label for="productImage" class="form-label text-xs">圖片位址</label>
            <input
              type="text"
              name="主要圖片"
              class="form-control mb-2"
              id="productImage"
              placeholder="輸入圖片位址"
              v-model="tempArticle.imageUrl"
            />
            <p class="text-xs mb-2">或</p>

            <button
              v-if="isUpload"
              class="btn btn-primary text-sm text-secondary"
              type="button"
              disabled
            >
              <span
                class="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              上傳中...
            </button>
            <label v-else class="btn btn-primary text-sm text-secondary">
              <input style="display: none" type="file" @change="uploadImage($event)" />
              <span class="material-icons text-base "> file_upload </span>
              上傳圖片
            </label>
          </div>
          <div class="col">
            <img class="w-100 h-auto" :src="tempArticle.imageUrl" alt="" />
          </div>
        </div>
      </div>

      <div class="col-12 mb-8">
        <p class="mb-3">文章標籤</p>
        <div class="row row-cols-6 align-items-end">
          <div v-for="(item, key) in tempArticle.tag" class="col mb-8" :key="key">
            <p>{{ item }}</p>

            <input
              type="text"
              class="form-control"
              placeholder="標籤"
              v-model="tempArticle.tag[key]"
            />
            <button type="button" class="btn-close" @click="deleteTag(key)"></button>
          </div>
        </div>
        <div class="btn btn-secondary text-white text-sm" @click="createTag">新增標籤</div>
      </div>
      <div class="col-12 mb-8">
        <label for="articleDescription" class="form-label">文章描述</label>
        <textarea
          type="text"
          rows="5"
          name="文章描述"
          class="form-control"
          id="articleDescription"
          placeholder="輸入文章描述"
          v-model="tempArticle.description"
        ></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-8">
        <ckeditor :editor="editor" :config="editorConfig" v-model="tempArticle.content"></ckeditor>
      </div>
    </div>
  </Form>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          tag: [],
          isPublic: false,
          editor: ClassicEditor,
          editorConfig: {
            toolbar: ['heading', 'typing', 'bold', 'italic', '|', 'link'],
          },
        };
      },
    },
    isAdd: Boolean,
  },
  data() {
    return {
      tempArticle: {},
      isUpload: false,
    };
  },
  watch: {
    article() {
      this.tempArticle = this.article;
    },
  },

  methods: {
    uploadImage(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.isUpload = true;
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.tempArticle.imageUrl = res.data.imageUrl;
            this.isUpload = false;
          }
        });
    },
    createTag() {
      if (this.tempArticle.tag === undefined) {
        this.tempArticle.tag = [];
      }
      this.tempArticle.tag.push('');
    },
    deleteTag(id) {
      this.tempArticle.tag.splice(id, 1);
    },

    cleanForm() {
      this.$refs.addForm.resetForm();
      this.tempArticle.description = '';
      this.tempArticle.content = '';
      this.tempArticle.imageUrl = '';
      this.tempArticle.formats = [
        {
          format: '',
          content: '',
        },
      ];
      this.tempArticle.imagesUrl = [];
    },
  },
  created() {
    if (this.isAdd) {
      this.tempArticle = {
        tag: [],
        isPublic: false,
      };
    }
  },
};
</script>
