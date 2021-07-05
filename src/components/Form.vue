<template>
<Loading :isLoading="isLoading"></Loading>
  <p class="text-xl rounded-top bg-secondary p-4">顧客資訊</p>
  <Form
    v-slot="{ errors }"

    ref="form"
    @submit="onSubmit"
    class="bg-table rounded-bottom py-6 px-8"
  >
    <div class="form-floating form-downline mb-3">
      <Field
        id="name"
        name="姓名"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="請輸入姓名"
        rules="required"
        v-model="form.user.name"
      ></Field>
      <label for="name" class="form-label">姓名 <sup>*</sup>：</label>
      <error-message name="姓名" class="invalid-feedback"></error-message>
    </div>

    <div class="form-floating form-downline mb-3">
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email"
        rules="email|required"
        v-model="form.user.email"
      ></Field>

      <label for="email">電子郵件 <sup>*</sup>：</label>
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>
    <div class="form-floating form-downline mb-3">
      <Field
        id="tel"
        name="聯絡電話"
        type="tel"
        class="form-control"
        :class="{ 'is-invalid': errors['聯絡電話'] }"
        placeholder="請輸入聯絡電話"
        :rules="isPhone"
        v-model="form.user.tel"
      ></Field>
      <label for="tel">聯絡電話 <sup>*</sup>：</label>
      <error-message name="聯絡電話" class="invalid-feedback"></error-message>
    </div>
    <div class="form-floating form-downline mb-8">
      <Field
        id="address"
        name="地址"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['地址'] }"
        placeholder="請輸入地址"
        rules="required"

        v-model="form.user.address"
      ></Field>

      <label for="address">地址 <sup>*</sup>：</label>
      <error-message name="地址" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-8">
      <label for="exampleFormControlTextarea1" class="form-label text-dark px-4">備註：</label>
      <textarea
        class="form-control bg-transparent border-secondary"
        id="exampleFormControlTextarea1"
        rows="3" v-model="form.message"
      ></textarea>
    </div>
    <div class="form-check mb-3">

      <Field
        class="form-check-input"
        id="flexCheckChecked"
        name="check"
        type="checkbox"
        :class="{ 'is-invalid': errors['check'] }"
        value="checked"
        :rules="isChecked"
      ></Field>

      <label class="form-check-label text-dark" for="flexCheckChecked">
        我已閱讀並同意網站的 條款與條件 <sup>*</sup>
      </label>
        <error-message name="check" class="invalid-feedback"></error-message>
    </div>
    <button
      type="submit"
      class="w-100 btn-lg btn btn-secondary secondary-hover text-white shadow mb-6"
    >
      送出訂單
    </button>
  </Form>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  inject: ['emitter'],
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
    isChecked(value) {
      if (value && value.length) {
        return true;
      }

      return '請勾選同意網站的條款與條件';
    },
    onSubmit() {
      const data = {
        data: this.form,
      };
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.emitter.emit('update-cart');
            this.$refs.form.resetForm();
            this.$router.push({ name: 'check', params: { order: res.data.orderId } });
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

};
</script>
