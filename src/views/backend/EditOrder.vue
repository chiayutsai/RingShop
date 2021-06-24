<template>
 <Loading :isLoading="isLoading"></Loading>
  <div class="d-flex align-items-center justify-content-between mb-5 ">
    <h2 class="text-dark">編輯訂單</h2>
    <router-link :to="`/dashboard/order`" class="btn btn-secondary text-white shadow-none "
      >返回訂單列表</router-link
    >
  </div>
  <div class="bg-white rounded overflow-hidden border border-secondary ">
    <div class="container-fluid  py-6">
      <Form v-slot="{ errors }" ref="editForm" class="text-dark">
        <div class="row mb-6">
          <div class="col-6">
            <div class=" mb-6">
              <h4 class="mb-4 pb-4 border-bottom">顧客資料</h4>
              <label for="name" class="form-label">顧客姓名<span>必填</span> </label>
              <Field
                type="text"
                class="form-control"
                id="name"
                name="顧客姓名"
                rules="required"
                :class="{ 'is-backend-invalid': errors['顧客姓名'] }"
                v-model.lazy.trim="user.name"
              ></Field>
              <error-message name="顧客姓名" class="backend-invalid-feedback"></error-message>
            </div>
            <div class="mb-6">
              <label for="tel" class="form-label">顧客電話<span>必填</span></label>
              <Field
                type="tel"
                class="form-control"
                id="tel"
                name="顧客電話"
                :rules="isPhone"
                :class="{ 'is-backend-invalid': errors['顧客電話'] }"
                v-model="user.tel"
              ></Field>
              <error-message name="顧客電話" class="backend-invalid-feedback"></error-message>
            </div>
            <div class="mb-6">
              <label for="email" class="form-label">顧客電子信箱<span>必填</span></label>
              <Field
                type="email"
                class="form-control"
                id="email"
                name="顧客電子信箱"
                rules="email|required"
                :class="{ 'is-backend-invalid': errors['顧客電子信箱'] }"
                v-model="user.email"
              ></Field>
              <error-message name="顧客電子信箱" class="backend-invalid-feedback"></error-message>
            </div>
            <div class="mb-6">
              <label for="address" class="form-label">顧客地址<span>必填</span></label>
              <Field
                type="text"
                class="form-control"
                id="address"
                name="顧客地址"
                rules="required"
                :class="{ 'is-backend-invalid': errors['顧客地址'] }"
                v-model="user.address"
              ></Field>
              <error-message name="顧客地址" class="backend-invalid-feedback"></error-message>
            </div>
            <div v-if="order.message" class="mb-6">
              <label for="note" class="form-label">備註</label>
              <textarea
                type="text"
                rows="5"
                name="備註"
                class="form-control"
                id="note"
                v-model="order.message"
              ></textarea>
            </div>
          </div>
          <div class="col-6">
            <div class=" mb-6">
              <h4 class="mb-4 pb-4 border-bottom">訂單資料</h4>
              <p class="form-label">訂單編號</p>
              <p class="form-control border-white">{{ order.id }}</p>
            </div>
            <div class=" mb-6">
              <p class="form-label">下單時間</p>
              <p class="form-control border-white">
                {{ orderDate }}
              </p>
            </div>
            <div class=" mb-6">
              <p class="form-label">總金額</p>
              <p class="form-control border-white">
                {{ order.total }}
              </p>
            </div>
            <div class="mb-6">
              <label class="form-label">訂單狀態</label>
              <select class="form-select" v-model="status" @change="updateStatus(status)">
                <option value="wait">等待付款中</option>
                <option value="handle">處理中</option>
                <option value="finish">完成</option>
                <option value="cancel">取消</option>
              </select>
            </div>
          </div>
        </div>
        <h4 class=" pb-3 mb-3">購買商品</h4>
        <div class="row mx-2">
          <p class="col-4 border-bottom fw-bold pb-3 mb-3">商品名稱</p>
          <p class="col-4 border-bottom fw-bold pb-3 mb-3">數量</p>
          <p class="col-4 border-bottom fw-bold pb-3 mb-3">小計</p>
        </div>
        <div class="row mx-2 mb-6" v-for="item in order.products" :key="item.id">
          <p class="col-4 ">{{ item.product.title }}</p>
          <p class="col-4">{{ item.qty }} / {{ item.product.unit }}</p>
          <p class="col-4">{{ item.final_total }}</p>
        </div>
      </Form>
      <div class="d-flex justify-content-end border-top pt-6">
        <button type="submit" class="btn btn-secondary text-white px-12" @click.prevent="editOrder">
          確定編輯
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      order: {},
      user: {},
      orderDate: '',
      status: '',
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getOrder(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            if (res.data.order) {
              this.isLoading = false;
              this.order = res.data.order;
              this.user = res.data.order.user;
              [this.orderDate] = new Date(res.data.order.create_at * 1000).toISOString().split('T');
              if (res.data.order.status) {
                this.status = res.data.order.status;
              } else {
                if (res.data.order.is_paid) {
                  this.status = 'handle';
                }
                this.status = 'wait';
              }
            } else {
              this.emitter.emit('push-message', {
                type: 'error',
                message: '找不到這筆訂單',
              });
              this.$router.push('/dashboard/order');
            }
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateStatus(status) {
      if (status === 'handle' || status === 'finish') {
        this.order.is_paid = true;
        if (!this.order.paid_date) {
          this.order.paid_date = Math.round(new Date().getTime() / 1000);
        }
      }
      if (status === 'wait') {
        this.order.is_paid = false;
        this.order.paid_date = null;
      }
    },
    editOrder() {
      this.$refs.editForm.validate().then((success) => {
        if (success.valid) {
          this.isLoading = true;
          const data = {
            data: { ...this.order, user: this.user, status: this.status },
          };
          this.$http
            .put(
              `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.order.id}`,
              data,
            )
            .then((res) => {
              console.log(res);
              if (res.data.success) {
                this.emitter.emit('push-message', {
                  type: 'success',
                  message: res.data.message,
                });
                this.isLoading = false;
                this.$router.push('/dashboard/order');
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
        }
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
  },
  created() {
    const routeID = this.$route.params.id;
    this.getOrder(routeID);
  },
};
</script>
