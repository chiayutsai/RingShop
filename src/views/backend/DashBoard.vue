<template>
<Loading :isLoading="isLoading" ></Loading>
<Noty />
  <div v-if="check">
    <div
      class="position-fixed w-100 bg-secondary z-1 d-flex align-items-center
      justify-content-between "
    >
      <p class="p-4">
        <span class="material-icons me-2">
          dashboard
        </span>
        後台管理
      </p>
      <div class="d-flex">
        <router-link :to="`/`" class="p-4 dashboard-hover">
          <span class="material-icons">
            home
          </span>
          前往前台
        </router-link>
        <a href="" class="p-4 dashboard-hover" @click.prevent="logOut">
          <span class="material-icons">
            logout
          </span>
          登出
        </a>
      </div>
    </div>
    <div class="position-fixed w-10 h-dashboard bg-secondary" ref="nav">
      <a
        href=""
        class="p-4 dropdown"
        :class="{ 'page-active': nowPage === 'admin' }"
        @click.prevent="changeDropdown('admin')"
        >產品</a
      >
      <ul
        class="dropdown-menu"
        :class="{ show: nowPage == 'admin'}"
        ref="admin"
      >
        <router-link :to="`/dashboard/admin`" class="p-4 border-bottom border-secondary"
          >產品列表</router-link
        >
        <router-link :to="`/dashboard/newProduct`" class="p-4 ">新增產品</router-link>
      </ul>
      <a
        href=""
        class="p-4 dropdown"
        :class="{ 'page-active': nowPage == 'order' }"
        @click.prevent="changeDropdown('order')"
        >訂單</a
      >
      <ul class="dropdown-menu" :class="{ show: nowPage == 'order' }" ref="order">
        <router-link :to="`/dashboard/order`" class="p-4">訂單列表</router-link>
      </ul>
      <a
        href=""
        class="p-4 dropdown"
        :class="{ 'page-active': nowPage == 'coupons' }"
        @click.prevent="changeDropdown('coupons')"
        >優惠券</a
      >
      <ul class="dropdown-menu" :class="{ show: nowPage == 'coupons' }" ref="coupon">
        <router-link :to="`/dashboard/coupons`" class="p-4 border-bottom border-secondary"
          >優惠券列表</router-link
        >
        <router-link :to="`/dashboard/newCoupon`" class="p-4">新增優惠券</router-link>
      </ul>
       <a
        href=""
        class="p-4 dropdown"
        :class="{ 'page-active': nowPage == 'articles' }"
        @click.prevent="changeDropdown('articles')"
        >文章</a
      >
      <ul class="dropdown-menu" :class="{ show: nowPage == 'articles' }" ref="article">
        <router-link :to="`/dashboard/articles`" class="p-4 border-bottom border-secondary"
          >文章列表</router-link
        >
        <router-link :to="`/dashboard/newArticle`" class="p-4">新增文章</router-link>
      </ul>
    </div>

    <div class="w-90 float-end py-15 px-8 bg-dashboard min-vh-100">
      <router-view v-if="check" />
    </div>
  </div>
</template>

<script>
import Noty from '@/components/Noty.vue';
import emitter from '../../methods/eventBus';

export default {
  components: {
    Noty,
  },
  data() {
    return {
      check: false,
      nowPage: '',
      isLoading: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    checkUser() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}api/user/check`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.check = true;
            this.isLoading = false;
          } else {
            emitter.emit('push-message', {
              type: 'error',
              message: '驗證錯誤，請重新登入',
            });
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logOut() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}logout`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            emitter.emit('push-message', {
              type: 'success',
              message: '已登入',
            });
            this.isLoading = false;
            this.$router.push('/login');
          } else {
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeDropdown(page) {
      this.nowPage = page;
      this.$refs.nav.childNodes.forEach((item) => {
        if (item.classList.contains('show')) {
          this.$refs.admin.classList.remove('show');
        }
      });
      if (page === 'admin') {
        this.$refs.admin.classList.add('show');
        this.$router.push('/dashboard/admin');
      } else if (page === 'order') {
        this.$refs.order.classList.add('show');
        this.$router.push('/dashboard/order');
      } else if (page === 'coupons') {
        this.$refs.coupon.classList.add('show');
        this.$router.push('/dashboard/coupons');
      } else if (page === 'articles') {
        this.$refs.article.classList.add('show');
        this.$router.push('/dashboard/articles');
      }
    },
    pageCheck() {
      if (this.$route.name === 'admin' || this.$route.name === 'newProduct') {
        this.nowPage = 'admin';
      } else if (this.$route.name === 'order' || this.$route.name === 'editOrder') {
        this.nowPage = 'order';
      } else if (this.$route.name === 'coupons' || this.$route.name === 'newCoupon') {
        this.nowPage = 'coupons';
      } else if (this.$route.name === 'articles' || this.$route.name === 'newArticle') {
        this.nowPage = 'articles';
      }
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
  mounted() {
    this.pageCheck();
  },
};
</script>
