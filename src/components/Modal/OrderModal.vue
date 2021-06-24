<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-secondary text-white py-4">
          <h5 class="modal-title" id="exampleModalLabel">訂單 {{ order.id }}</h5>
          <div class="d-flex align-items-center">
            <div
              v-if="!order.is_paid && order.status !== 'cancel'"
              class="status status-wait pointer-none me-4"
            >
              等待付款中
            </div>

            <div
              v-if="order.is_paid && order.status !== 'finish' && order.status !== 'cancel'"
              class="status status-handle pointer-none me-4"
            >
              處理中
            </div>
            <div v-if="order.status === 'finish'" class="status status-finish pointer-none me-4">
              完成
            </div>
            <div v-if="order.status === 'cancel'" class="status status-cancel pointer-none me-4">
              取消
            </div>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="modal-body text-dark py-8">
          <div class="container-fluid">
            <div class="row g-5">
              <div class="col-6">
                <h4 class="border-bottom pb-3 mb-3">顧客資料</h4>
                <div class="row">
                  <p class="col-4 fw-bold mb-4">顧客姓名</p>
                  <p class="col-8 mb-4">{{ user.name }}</p>
                  <p class="col-4 fw-bold mb-4">顧客電話</p>
                  <p class="col-8 mb-4">{{ user.tel }}</p>
                  <p class="col-4 fw-bold mb-4">顧客E-mail</p>
                  <p class="col-8 mb-4">{{ user.email }}</p>
                  <p class="col-4 fw-bold mb-4">運送地址</p>
                  <p class="col-8 mb-4">{{ user.address }}</p>
                  <p v-if="order.message" class="col-4 fw-bold mb-4">備註</p>
                  <p v-if="order.message" class="col-8 mb-4">{{ order.message }}</p>
                </div>
              </div>
              <div class="col-6">
                <h4 class="border-bottom pb-3 mb-3">訂單資料</h4>
                <div class="row">
                  <p class="col-4 fw-bold mb-4">下單時間</p>
                  <p class="col-8 mb-4">
                    {{ orderDate }}
                  </p>
                  <p class="col-4 fw-bold mb-4">總金額</p>
                  <p class="col-8 mb-4">{{ order.total }}</p>
                  <p class="col-4 fw-bold mb-4">訂單編號</p>
                  <p class="col-8 mb-4">{{ order.id }}</p>
                  <p class="col-4 fw-bold mb-4">訂單狀態</p>

                  <div v-if="!order.is_paid && order.status !== 'cancel'" class="col-8 mb-4">
                    等待付款中
                  </div>
                  <div
                    v-if="order.is_paid && order.status !== 'finish' && order.status !== 'cancel'"
                    class="col-8 mb-4"
                  >
                    處理中
                  </div>
                  <div v-if="order.status === 'finish'" class="col-8 mb-4">
                    完成
                  </div>
                  <div v-if="order.status === 'cancel'" class="col-8 mb-4">
                    取消
                  </div>
                  <p v-if="order.paid_date" class="col-4 fw-bold mb-4">付款時間</p>
                  <p v-if="order.paid_date" class="col-8 mb-4">
                    {{ paidDate }}
                  </p>

                </div>
              </div>
              <div class="col-12">
                <h4 class=" pb-3 mb-3">購買商品</h4>
                <div class="row">
                  <p class="col-4 border-bottom fw-bold pb-3 mb-3">商品名稱</p>
                  <p class="col-4 border-bottom fw-bold pb-3 mb-3">數量</p>
                  <p class="col-4 border-bottom fw-bold pb-3 mb-3">小計</p>
                </div>
                <div class="row" v-for="item in order.products" :key="item.id">
                  <p class="col-4 ">{{ item.product.title }}</p>
                  <p class="col-4">{{ item.qty }} / {{ item.product.unit }}</p>
                  <p class="col-4">{{ item.final_total }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary white-hover"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-secondary text-white" @click="$emit('edit', order)">
            編輯訂單
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
    order: {
      type: Object,
    },
  },
  data() {
    return {
      tempOrder: {},
      user: {},
      orderDate: null,
      paidDate: null,
    };
  },
  watch: {
    order() {
      this.tempOrder = this.order;
      this.user = this.order.user;
      if (this.order.paid_date) {
        [this.orderDate] = new Date(this.order.create_at * 1000).toISOString().split('T');
      }
      if (this.order.paid_date) {
        [this.paidDate] = new Date(this.order.paid_date * 1000).toISOString().split('T');
      }
    },
  },
  mixins: [modalMixin],

};
</script>
