<template>
  <Loading :isLoading="isLoading" />
  <h2 class="text-dark mb-5">訂單列表</h2>
  <div class="bg-white rounded overflow-hidden border border-secondary">
    <p v-if="this.orders.length == 0" class="bg-secondary text-center py-8">目前沒有訂單</p>
    <div v-else>
      <table class="table table-borderless mb-0">
        <thead class="bg-secondary text-white">
          <tr>
            <th class="w-10">購買時間</th>
            <th class="w-20">訂單編號</th>
            <th>購買人姓名</th>
            <th>購買人電話</th>
            <th>應付金額</th>
            <th>訂單狀態</th>
            <th class="text-center">預覽</th>
            <th>編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in orders" :key="item.id">
            <tr class="border-bottom border-secondary table-hover">
              <td class="w-10 py-8">
                {{ new Date(item.create_at * 1000).toISOString().split("T")[0] }}
              </td>
              <td class="w-20">{{ item.id }}</td>
              <td>{{ item.user.name }}</td>
              <td>{{ item.user.tel }}</td>
              <td>{{ toCurrency(item.total) }}</td>
              <td>
                <div
                  v-if="!item.is_paid && item.status !== 'cancel'"
                  class="status status-wait"
                  @click="openModal('status', item)">
                  等待付款中
                </div>
                <div
                  v-if="item.is_paid && item.status !== 'finish' && item.status !== 'cancel'"
                  class="status status-handle"
                  @click="openModal('status', item)">
                  處理中
                </div>
                <div
                  v-if="item.status === 'finish'"
                  class="status status-finish"
                  @click="openModal('status', item)">
                  完成
                </div>
                <div
                  v-if="item.status === 'cancel'"
                  class="status status-cancel"
                  @click="openModal('status', item)">
                  取消
                </div>
              </td>
              <td>
                <a
                  href="#"
                  class=" text-secondary text-center shadow-none eye-hover"
                  @click.prevent="openModal('watch', item)">
                  <span class="material-icons text-lg ">
                    visibility
                  </span>
                </a>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-secondary text-white"
                  @click="goToEdit(item)">
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary white-hover ms-2"
                  @click="openModal('delete', item)">
                  刪除
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="d-flex justify-content-between align-items-center py-4 px-6 bg-secondary ">
        <div class="btn btn-outline-white" @click="openModal('deleteAll')">刪除全部訂單</div>
        <Pagination :pagination="pagination" @emit-page="getOrder" />
      </div>
    </div>
  </div>
  <StatusModal :order="tempOrder" :status="status" ref="statusModal" @emit-status="updateOrder" />
  <OrderModal :order="tempOrder" ref="orderModal" @edit="goToEdit" />
  <DeleteModal :item="tempOrder" :type="'order'" ref="delModal" @delete="deleteOrder" />
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DeleteModal from '@/components/Modal/DeleteModal.vue';
import OrderModal from '@/components/Modal/OrderModal.vue';
import StatusModal from '@/components/Modal/StatusModal.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      status: '',
      isLoading: false,
    };
  },
  components: {
    Pagination,
    OrderModal,
    DeleteModal,
    StatusModal,
  },
  inject: ['emitter'],
  methods: {
    getOrder(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
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
      } else if (type === 'watch') {
        this.tempOrder = { ...item };
        this.$refs.orderModal.openModal();
      } else if (type === 'delete') {
        this.tempOrder = { ...item };
        this.$refs.delModal.openModal();
      } else if (type === 'deleteAll') {
        this.tempOrder = { id: null, user: {} };
        this.$refs.delModal.openModal();
      } else if (type === 'status') {
        this.tempOrder = { ...item };
        if (item.status) {
          this.status = item.status;
        } else {
          if (item.is_paid) {
            this.status = 'handle';
          }
          this.status = 'wait';
        }
        this.$refs.statusModal.openModal();
      }
    },
    deleteOrder() {
      this.isLoading = true;
      let url = '';
      if (this.tempOrder.id) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      } else {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      }
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.$refs.delModal.hideModal();
            this.getOrder(this.pagination.current_page);
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    goToEdit(item) {
      this.$refs.orderModal.hideModal();
      this.$router.push(`/dashboard/editOrder/${item.id}`);
    },
    updateOrder(item) {
      this.isLoading = true;
      const data = {
        data: item,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`,
          data,
        )
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.$refs.statusModal.hideModal();
            this.getOrder(this.pagination.current_page);
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
