<template>
  <Loading :isLoading="isLoading"></Loading>

  <div class="d-flex align-items-center justify-content-between mb-5 ">
    <h2 class="text-dark">文章列表</h2>
    <router-link :to="`/dashboard/newArticle`" class="btn btn-secondary text-white shadow-none "
      >新增文章</router-link
    >
  </div>

  <div class="bg-white rounded overflow-hidden border border-secondary  ">
    <table class="table table-borderless mb-0">
      <thead class="bg-secondary text-white">
        <tr>
          <th class="w-10">文章主圖</th>
          <th class="w-20">文章標題</th>
             <th class="w-20">描述</th>
          <th>文章分類</th>
          <th>作者</th>

          <th>建立時間</th>
          <th>是否公開</th>
          <th class="text-center">預覽</th>
          <th>編輯 / 刪除</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in articles" :key="item.id">
          <tr :class="{ 'table-primary': item.isPublic }">
            <td class="w-10">
              <img class="w-100 small-size" :src="item.imageUrl" />
            </td>
            <td class="w-20"> {{ item.title }}</td>
             <td class="w-20">{{ item.description }}</td>
            <td>
              <p v-for="(tag,key) in item.tag" :key="key">
                      {{tag}}
              </p>
            </td>
            <td>{{ item.author }}</td>

            <td>{{ item.create_at }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="'enabled' + key"
                  v-model="item.isPublic"
                  @change="changeStatus(item)"
                />

                <label v-if="item.isPublic" class="form-check-label" :for="'enabled' + key"
                  >公開</label
                >
                <label v-else class="form-check-label" :for="'enabled' + key">未公開</label>
              </div>
            </td>
            <td>
              <a
                href=""
                class=" text-secondary text-center shadow-none eye-hover"
                @click.prevent="openModal('watch', item)"
              >
                <span class="material-icons text-lg ">
                  visibility
                </span>
              </a>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-sm btn-secondary text-white"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary white-hover ms-2"
                @click="openModal('delete', item)"
              >
                刪除
              </button>

            </td>
          </tr>

        </template>
      </tbody>
    </table>
    <div class="d-flex justify-content-end align-items-center py-4 px-6 bg-secondary ">

      <Pagination :pagination="pagination" @emit-page="getData" />
    </div>
  </div>

  <DeleteModal :item="tempArticle" :type="'normal'" ref="delModal" @delete="deleteProduct" />
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DeleteModal from '@/components/Modal/DeleteModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      articles: [],
      pagination: {},
      tempArticle: {},
    };
  },
  inject: ['emitter'],
  components: {
    Pagination,
    DeleteModal,
  },

  methods: {
    getArticle(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`,
        )
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.articles = res.data.articles;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            console.log(res.data.messages);
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    openModal(type, item) {
      if (type === 'edit') {
        this.tempProduct = {
          ...item,
          formats:
            item.formats === undefined
              ? [
                {
                  format: '',
                  content: '',
                },
              ]
              : JSON.parse(JSON.stringify(item.formats)),
          imagesUrl: item.imagesUrl === undefined ? [] : [...item.imagesUrl],
        };
        this.$refs.updateModal.openModal();
      } else if (type === 'delete') {
        this.tempProduct = { ...item };
        this.$refs.delModal.openModal();
      }
    },
    updateProduct(item) {
      this.isLoading = true;
      const data = {
        data: item,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`,
          data,
        )
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.$refs.updateModal.hideModal();
            this.getData(this.pagination.current_page);
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
    },
    changeStatus(item) {
      this.tempProduct = {
        ...item,
      };
      this.updateProduct(this.tempProduct);
    },
    deleteProduct() {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`,
        )
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.$refs.delModal.hideModal();
            this.getData(this.pagination.current_page);
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
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
