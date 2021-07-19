<template>
  <Loading :isLoading="isLoading" />
  <div class="d-flex align-items-center justify-content-between mb-5 ">
    <h2 class="text-dark">優惠券列表</h2>
    <router-link :to="`/dashboard/newCoupon`" class="btn btn-secondary text-white shadow-none "
      >新增優惠券</router-link
    >
  </div>
  <div class="bg-white rounded overflow-hidden border border-secondary">
    <p v-if="this.coupons.length == 0" class="bg-secondary text-center py-8">目前沒有優惠券</p>
    <div v-else>
      <table class="table table-borderless mb-0">
        <thead class="bg-secondary text-white">
          <tr>
            <th>優惠券名稱</th>
            <th>優惠碼</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, key) in coupons" :key="item.id">
            <tr :class="{ 'table-primary': item.is_enabled }">
              <td class="py-8">{{ item.title }}</td>
              <td>{{ item.code }}</td>
              <td>{{ item.percent }}</td>
              <td v-if="item.due_date === 8640000000000000">
                未設定
              </td>
              <td v-else>{{ new Date(item.due_date * 1000).toISOString().split("T")[0] }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="'enabled' + key"
                    v-model="item.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    @change="changeStatus(item)"
                  />
                  <label v-if="item.is_enabled" class="form-check-label" :for="'enabled' + key"
                    >啟用</label
                  >
                  <label v-else class="form-check-label" :for="'enabled' + key">未啟用</label>
                </div>
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
        <Pagination :pagination="pagination" @emit-page="getCoupon" />
      </div>
    </div>
  </div>
  <CouponModal :coupon="tempCoupon" ref="updateModal" @update="updateCoupon" />
  <DeleteModal :item="tempCoupon" :type="'normal'" ref="delModal" @delete="deleteCoupon" />
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DeleteModal from '@/components/Modal/DeleteModal.vue';
import CouponModal from '@/components/Modal/CouponModal.vue';

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isLoading: false,
    };
  },
  inject: ['emitter'],
  components: {
    Pagination,
    DeleteModal,
    CouponModal,
  },
  methods: {
    getCoupon(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
        })
        .catch((err) => err);
    },
    openModal(type, item) {
      this.tempCoupon = { ...item };
      if (type === 'edit') {
        this.$refs.updateModal.openModal();
      } else if (type === 'delete') {
        this.$refs.delModal.openModal();
      }
    },
    updateCoupon(item) {
      this.isLoading = true;
      const data = {
        data: item,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`,
          data,
        )
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.$refs.updateModal.hideModal();
            this.getCoupon(this.pagination.current_page);
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
    },
    changeStatus(item) {
      this.tempCoupon = {
        ...item,
      };
      this.updateCoupon(this.tempCoupon);
    },
    deleteCoupon() {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.$refs.delModal.hideModal();
            this.getCoupon(this.pagination.current_page);
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
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
