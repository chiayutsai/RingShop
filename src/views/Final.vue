<template>
  <div class="container pt-15">
    <Progress step="4" />
  </div>
  <div class="container mt-10 mt-sm-15">
    <div class="row bg-linear rounded mx-5 p-8">
      <p class="text-center text-2xl mb-6">感謝您的購買</p>
      <p class="text-center mb-6">下列為您的訂單資訊</p>
      <div class="d-flex w-100 w-md-40 mx-auto">
        <router-link :to="`/`" class="w-50 btn btn-outline-light shadow-sm me-6"
          >前往首頁</router-link
        >
        <router-link
          :to="`/shop`"
          class="w-50 btn btn-secondary shadow-sm text-white secondary-hover"
          >前往商店</router-link
        >
      </div>
    </div>
  </div>
  <div class="container mt-9 mt-lg-12 border-bottom border-light pb-15 mb-15">
    <div class="row row-cols-1 row-cols-lg-2 flex-column-reverse flex-lg-row gx-5">
      <div class="col mt-9 mt-lg-0">
        <p class="text-xl rounded-top bg-secondary p-4">訂單資訊</p>
        <div class="bg-table px-8 rounded-bottom">
          <div class="row py-4 align-items-center text-dark border-bottom">
            <div class="col-6">
              <p>商品資訊</p>
            </div>
            <div class="col-3">
              <p>數量</p>
            </div>
            <div class="col-3">
              <p>小計</p>
            </div>
          </div>
          <div
            v-for="item in order.products"
            :key="item.id"
            class="row py-4 align-items-center text-dark border-bottom"
          >
            <div class="col-6">
              <div class="d-flex align-items-center">
                <img class="w-40 me-4" :src="item.product.imageUrl" alt="" />
                <p>{{ item.product.title }}</p>
              </div>
            </div>
            <div class="col-3">
              <p>{{ item.qty }}</p>
            </div>
            <div class="col-3">
              <p>NT${{ toCurrency(item.final_total) }}</p>
            </div>
          </div>
          <div class="border-bottom border-2 border-white"></div>
          <div class="row text-dark px-4 py-6">
            <!-- <div class="col-9 mb-4">
              <p class="fw-bold text-lg text-secondary">折扣</p>
            </div>
            <div class="col-3">
              <p class="fw-bold text-lg text-end text-secondary">-NT$80</p>
            </div> -->
            <div class="col-9">
              <p class="fw-bold text-lg">總計：</p>
            </div>
            <div class="col-3">
              <p class="fw-bold text-lg text-end">NT${{ toCurrency(order.total) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <p class="text-xl rounded-top bg-secondary p-4">顧客資訊</p>
        <div class="bg-table px-8 rounded-bottom text-dark">
          <div class="row row-cols-2 py-4 border-bottom">
            <p class="col">下單日期</p>
            <p class="col">{{ orderDate }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom">
            <p class="col">顧客姓名</p>
            <p class="col">{{ user.name }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom">
            <p class="col">聯絡電話</p>
            <p class="col">{{ user.tel }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom">
            <p class="col ">電子郵件</p>
            <p class="col text-break">{{ user.email }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom">
            <p class="col">地址</p>
            <p class="col">{{ user.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue';

export default {
  data() {
    return {
      orderDate: '',
      orderID: '',
      order: {},
      user: {},
    };
  },
  components: {
    Progress,
  },
  methods: {
    getOrder(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            const date = new Date(res.data.order.create_at * 1000).toISOString().split('T');
            [this.orderDate] = date;
            this.user = res.data.order.user;
          }
        })
        .catch((err) => err);
    },
  },
  created() {
    this.orderID = this.$route.params.order;
    this.getOrder(this.orderID);
  },
};
</script>
