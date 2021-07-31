<template>
<Loading :isLoading="isLoading" />
<Noty />
<div class="position-relative bg-login w-100 min-vh-100">
  <div class="bg-overlay opacity-5 z-0"></div>
  <div class="position-relative d-flex justify-content-center align-items-center vh-100">
    <div class="w-40 bg-login-form rounded-3 px-12 py-8">
      <h2 class="text-white text-center mb-6">登入</h2>
      <Form v-slot="{ errors }" ref="form" @submit="login">
        <div class="form-floating form-downline form-login mb-6">
          <Field
            id="account"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="name@example.com"
            rules="email|required"
            v-model="user.username"
          ></Field>
          <label for="account">帳號：</label>
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>
        <div class="form-floating form-downline form-login mb-6">
          <Field
            id="password"
            name="密碼"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors['密碼'] }"
            placeholder="請輸入姓名"
            rules="required"
            autocomplete
            v-model="user.password"
          ></Field>
          <label for="password"> 密碼：</label>
          <ErrorMessage name="密碼" class="invalid-feedback" />
        </div>
        <button
          type="submit"
          class="btn btn-lg text-white btn-secondary secondary-hover w-100 mt-3"
          id="login">
          登入
        </button>
      </Form>
    </div>
  </div>
</div>
</template>

<script>
import Noty from '@/components/Noty.vue';
import emitter from '@/methods/eventBus';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  components: {
    Noty,
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}admin/signin`, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `chiayuToken=${token}; expires=${new Date(expired)}`;
            this.$refs.form.resetForm();
            this.$router.push('/dashboard');
            emitter.emit('push-message', {
              type: 'success',
              message: '登入成功 ',
            });
          } else {
            this.isLoading = false;
            emitter.emit('push-message', {
              type: 'error',
              message: `登入失敗 : ${res.data.error.message}`,
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
};
</script>
