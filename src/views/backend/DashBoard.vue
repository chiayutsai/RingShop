<template>
  <div class="position-relative bg-login w-100 min-vh-100">
    <div class="bg-overlay opacity-5 z-0"></div>
    <div v-if="check" class="position-relative container-fluid py-15">
      <div class="row">
        <div class="col-3">
          <p class="bg-secondary p-3 rounded-top">後台管理</p>
          <ul class="bg-white rounded-bottom shadow overflow-hidden  ">
            <router-link :to="`/dashboard/admin`" class="p-4 dashboard-link">產品列表</router-link>
            <router-link :to="`/dashboard/newProduct`" class="p-4 dashboard-link"
              >新增產品</router-link
            >
            <router-link :to="`/dashboard/order`" class="p-4 dashboard-link">訂單列表</router-link>
              <router-link :to="`/dashboard/coupons`" class="p-4 dashboard-link">優惠券</router-link>
          </ul>
        </div>
        <div class="col-9 ">
          <router-view v-if="check" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    checkUser() {
      this.$http
        .post(`${process.env.VUE_APP_API}api/user/check`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.check = true;
          } else {
            alert('驗證錯誤，請重新登入');
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const cookieToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)chiayuToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = cookieToken;
    this.checkUser();
  },
};
</script>
