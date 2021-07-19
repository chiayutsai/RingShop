<template>
  <Form v-slot="{ errors }" ref="addForm" class="text-dark">
    <div class="row">
      <div class="col-12 mb-8">
        <label for="productTitle" class="form-label">產品名稱<span v-if="isAdd">必填</span></label>
        <Field
          type="text"
          class="form-control"
          id="productTitle"
          name="產品名稱"
          placeholder="輸入產品標題"
          rules="required"
          :class="{ 'is-backend-invalid': errors['產品名稱'] }"
          v-model.lazy.trim="tempProduct.title"
        ></Field>
        <error-message name="產品名稱" class="backend-invalid-feedback"></error-message>
      </div>
      <div class="col-6 mb-8">
        <label for="productOriginPrice" class="form-label"
          >產品原價<span v-if="isAdd">必填</span></label
        >
        <Field
          type="number"
          class="form-control"
          id="productOriginPrice"
          name="產品原價"
          min="0"
          placeholder="輸入產品原價"
          :rules="isPositive"
          :class="{ 'is-backend-invalid': errors['產品原價'] }"
          v-model.number="tempProduct.origin_price"
        ></Field>
        <error-message name="產品原價" class="backend-invalid-feedback"></error-message>
      </div>
      <div class="col-6 mb-8">
        <label for="productPrice" class="form-label">產品售價<span v-if="isAdd">必填</span></label>
        <Field
          type="number"
          class="form-control"
          id="productPrice"
          min="0"
          name="產品售價"
          placeholder="輸入產品售價"
          :rules="isPositive"
          :class="{ 'is-backend-invalid': errors['產品售價'] }"
          v-model.number="tempProduct.price"
        ></Field>
        <error-message name="產品售價" class="backend-invalid-feedback"></error-message>
      </div>
    </div>
    <div class="row row-cols-2 align-items-end">
      <div class="col mb-8">
        <label class="form-label">產品分類<span v-if="isAdd">必填</span></label>
        <Field
          name="產品分類"
          class="form-select"
          :class="{ 'is-backend-invalid': errors['產品分類'] }"
          placeholder="產品分類"
          rules="required"
          as="select"
          v-model="tempProduct.category"
        >
          <option :disabled="product.category">請選擇</option>
          <option v-for="category in productsCategory" :value="category" :key="category">
            {{ category }}</option>
        </Field>
        <error-message name="產品分類" class="backend-invalid-feedback"></error-message>
      </div>
      <div class="col mb-8">
        <div v-if="isAddCategory" class="d-flex">
          <input
            type="text"
            v-model.trim="tempCategory"
            class="form-control"
            placeholder="新增分類"
          />
          <div class="btn btn-secondary text-white flex-shrink-0 ms-4" @click="addCategory">
            新增
          </div>
        </div>
        <div v-else class="btn btn-secondary text-white" @click="this.isAddCategory = true">
          新增產品分類
        </div>
      </div>
    </div>
    <div class="row row-cols-2 align-items-end">
      <div class="col ">
        <label class="form-label">產品規格</label>
        <div
          v-for="(item, key) in tempProduct.formats"
          class="d-flex align-items-center mb-8"
          :key="key"
        >
          <input
            type="text"
            name="規格"
            class=" form-control me-2"
            placeholder="規格"
            v-model="item.format"
          />
          <p>:</p>
          <input
            type="text"
            name="內容"
            class="form-control ms-2"
            placeholder="內容"
            v-model="item.content"
          />
        </div>
      </div>
      <div class="col mb-8">
        <div class="btn btn-secondary text-white" @click="addFormat()">
          新增產品規格
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 mb-8">
        <label for="productUnit" class="form-label">產品單位<span v-if="isAdd">必填</span></label>
        <Field
          type="text"
          class="form-control"
          id="productUnit"
          name="產品單位"
          placeholder="輸入產品單位"
          rules="required"
          :class="{ 'is-backend-invalid': errors['產品單位'] }"
          v-model.trim="tempProduct.unit"
        ></Field>
        <error-message name="產品單位" class="backend-invalid-feedback"></error-message>
      </div>
      <div class="col-6 mb-8">
        <p class="mb-3">是否上架產品</p>
        <div class="form-check mt-4">
          <input
            class="form-check-input"
            type="checkbox"
            name="check"
            id="flexCheckDefault"
            v-model="tempProduct.is_enabled"
            :true-value="1"
            :false-value="0"
          />
          <label v-if="product.is_enabled" class="form-check-label" for="flexCheckDefault"
            >上架</label
          >
          <label v-else class="form-check-label" for="flexCheckDefault">未上架</label>
        </div>
      </div>

      <div class="col-12 mb-8">
        <label for="productDescription" class="form-label">產品描述</label>
        <textarea
          type="text"
          rows="5"
          name="產品描述"
          class="form-control"
          id="productDescription"
          placeholder="輸入產品描述"
          v-model="tempProduct.description"
        ></textarea>
      </div>
      <div class="col-12 mb-8">
        <label for="productContent" class="form-label">說明內容</label>
        <textarea
          type="text"
          rows="5"
          name="說明內容"
          class="form-control"
          id="productContent"
          placeholder="輸入說明內容"
          v-model="tempProduct.content"
        ></textarea>
      </div>
      <div class="col-12 mb-8">
        <p class="mb-3">主要圖片</p>
        <div class="row row-cols-2 align-items-center">
          <div class="col">
            <label for="productImage" class="form-label text-xs">圖片位址</label>
            <input
              type="text"
              name="主要圖片"
              class="form-control mb-2"
              id="productImage"
              placeholder="輸入圖片位址"
              v-model="tempProduct.imageUrl"
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
              <input style="display: none" type="file" @change="uploadImage('main', $event)" />
              <span class="material-icons text-base "> file_upload </span>
              上傳圖片
            </label>
          </div>
          <div class="col">
            <img class="w-100 h-auto" :src="tempProduct.imageUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="col-12 mb-8">
        <p class="mb-3">輪播圖片</p>
        <div class="row row-cols-3 align-items-end">
          <div v-for="(item, key) in tempProduct.imagesUrl" class="col mb-8" :key="key">
            <img class="w-100 h-auto" :src="tempProduct.imagesUrl[key]" alt="" />

            <label :for="'productImage' + key" class="form-label text-xs">圖片位址</label>
            <input
              type="text"
              name="輪播圖片"
              class="form-control mb-2"
              :id="'productImage' + key"
              placeholder="輸入圖片位址"
              v-model="tempProduct.imagesUrl[key]"
            />
            <p class="text-xs mb-2">或</p>
            <button
              v-if="isUploads[key]"
              class="d-block w-100 btn btn-primary text-sm text-secondary mb-4"
              type="button"
              disabled
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              上傳中...
            </button>
            <label v-else class="d-block btn btn-primary text-sm text-secondary mb-4">
              <input style="display: none" type="file" @change="uploadImage(key, $event)" />
              <span class="material-icons text-base align-text-bottom"> file_upload </span>
              上傳圖片
            </label>

            <div
              v-if="tempProduct.imagesUrl[key]"
              class="btn btn-outline-secondary text-xs white-hover"
              @click="deleteImage(key)"
            >
              刪除圖片
            </div>
            <div
              v-else
              class="btn btn-outline-secondary white-hover text-xs"
              @click="deleteImage(key)"
            >
              取消
            </div>
          </div>
        </div>
        <div class="btn btn-secondary text-white text-sm" @click="createImage">新增輪播圖片</div>
      </div>
    </div>

  </Form>

</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          formats: [
            {
              format: '',
              content: '',
            },
          ],
          imagesUrl: [],
        };
      },
    },
    isAdd: Boolean,
  },
  inject: ['emitter'],
  data() {
    return {
      tempProduct: {},
      productsAll: [],
      productsCategory: [],
      isUpload: false,
      isUploads: [],
      isAddCategory: false,
      tempCategory: '',
    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },

  methods: {
    getData() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.productsAll = res.data.products;
            this.productsAll.forEach((product) => {
              if (!this.productsCategory.includes(product.category)) {
                this.productsCategory.push(product.category);
              }
            });
          }
        })
        .catch((err) => err);
    },
    addFormat() {
      const formatObj = {
        format: '',
        content: '',
      };
      this.tempProduct.formats.push(formatObj);
    },
    addCategory() {
      this.productsCategory.push(this.tempCategory);
      this.emitter.emit('push-message', {
        type: 'success',
        message: `新增${this.tempCategory}分類`,
      });
      this.tempCategory = '';
      this.isAddCategory = false;
    },
    uploadImage(key, e) {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append('file-to-upload', file);
      if (key === 'main') {
        this.isUpload = true;
      } else {
        this.isUploads[key] = true;
      }
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          if (res.data.success) {
            if (key === 'main') {
              this.tempProduct.imageUrl = res.data.imageUrl;
              this.isUpload = false;
            } else {
              this.tempProduct.imagesUrl[key] = res.data.imageUrl;
              this.isUploads[key] = false;
            }
          }
        });
    },
    createImage() {
      if (this.tempProduct.imagesUrl === undefined) {
        this.tempProduct.imagesUrl = [];
      }
      this.isUploads.push(false);
      this.tempProduct.imagesUrl.push('');
    },
    deleteImage(id) {
      this.tempProduct.imagesUrl.splice(id, 1);
      this.isUploads.pop();
    },
    isPositive(value) {
      return value > 0 && value % 1 === 0 ? true : '請輸入正整數';
    },
    cleanForm() {
      this.$refs.addForm.resetForm();
      this.tempProduct.description = '';
      this.tempProduct.content = '';
      this.tempProduct.imageUrl = '';
      this.tempProduct.formats = [
        {
          format: '',
          content: '',
        },
      ];
      this.tempProduct.imagesUrl = [];
    },

  },
  created() {
    if (this.isAdd) {
      this.tempProduct = {
        formats: [
          {
            format: '',
            content: '',
          },
        ],
        imagesUrl: [],
      };
    }
    this.getData();
  },
};
</script>
