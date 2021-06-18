<template>
  <div class="bg-white rounded overflow-hidden">
    <table class="table table-borderless mb-0">
      <thead class="bg-secondary text-white">
        <tr>
          <th class="w-15">產品圖片</th>
          <th class="">產品名稱</th>
          <th>分類</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否上架</th>
          <th>編輯 / 刪除</th>
        </tr>
      </thead>
      <tbody id="productList">
        <template v-for="(item, key) in products" :key="item.id">
          <tr :class="{ 'table-primary': item.is_enabled }">
            <td class="w-15">
              <img class="w-100 small-size" :src="item.imageUrl" />
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="'enabled' + key"
                  v-model="item.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />

                <label v-if="item.is_enabled" class="form-check-label" :for="'enabled' + key"
                  >上架</label
                >
                <label v-else class="form-check-label" :for="'enabled' + key">未上架</label>
              </div>
            </td>
            <td>
              <button type="button" class="btn btn-sm btn-secondary text-white">
                編輯
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary white-hover ms-2"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
              <button
                class="btn btn-outline-secondary white-hover float-end p-0 lh-1 mt-2 me-4"
                @click="openCollapse(key)"
              >
                <span
                  class="material-icons text-lg align-bottom"
                  :class="{ 'arrow-rotate': key == isOpen.id && isOpen.open }"
                >
                  arrow_drop_down
                </span>
              </button>
            </td>
          </tr>
          <tr :class="{ 'table-primary': item.is_enabled }">
            <td colspan="8" class="p-0 border-bottom">
              <ProductCollapse ref="ProductCollapse" :product="item" :num="key" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="d-flex justify-content-between align-items-center py-4 px-6 bg-secondary ">
      <p class="text-white">目前有 {{ totalAmount }} 樣產品</p>
      <Pagination :pagination="pagination" @emit-page="getData" />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import ProductCollapse from '@/components/Collapse.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      totalAmount: 0,
      productsCategory: [],
      isOpen: {
        id: null,
        open: false,
      },
    };
  },
  components: {
    Pagination,
    ProductCollapse,
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`,
        )
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            alert(res.data.messages);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`)
        .then((res) => {
          if (res.data.success) {
            const productsAll = Object.values(res.data.products);
            this.totalAmount = productsAll.length;
            productsAll.forEach((product) => {
              if (!this.productsCategory.includes(product.category)) {
                this.productsCategory.push(product.category);
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openCollapse(id) {
      if (this.isOpen.id === id) {
        this.isOpen.open = !this.isOpen.open;
      } else {
        this.isOpen.id = id;
        this.isOpen.open = true;
      }
      this.$refs.ProductCollapse.showCollapse(id);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
