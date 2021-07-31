<template>
  <Form v-slot="{ errors }" ref="addForm" class="text-dark">
    <div class="mb-8">
      <label for="couponTitle" class="form-label">優惠券名稱<span v-if="isAdd">必填</span></label>
      <Field
        type="text"
        class="form-control"
        id="couponTitle"
        name="優惠券名稱"
        placeholder="輸入優惠券名稱"
        rules="required"
        :class="{ 'is-backend-invalid': errors['優惠券名稱'] }"
        v-model.trim="tempCoupon.title"
      ></Field>
      <ErrorMessage name="優惠券名稱" class="backend-invalid-feedback" />
    </div>
    <div class="mb-8">
      <label for="couponCode" class="form-label">優惠碼<span v-if="isAdd">必填</span></label>
      <Field
        type="text"
        class="form-control"
        id="couponCode"
        name="優惠碼"
        placeholder="輸入優惠碼"
        rules="required"
        :class="{ 'is-backend-invalid': errors['優惠碼'] }"
        v-model.stringify="tempCoupon.code"
      ></Field>
      <ErrorMessage name="優惠碼" class="backend-invalid-feedback" />
    </div>
    <div class="mb-8">
      <label for="productPrice" class="form-label">折扣百分比<span v-if="isAdd">必填</span></label>
      <Field
        type="number"
        class="form-control"
        id="productPrice"
        min="0"
        name="折扣百分比"
        placeholder="輸入折扣百分比"
        :rules="isPositive"
        :class="{ 'is-backend-invalid': errors['折扣百分比'] }"
        v-model.number="tempCoupon.percent"
      ></Field>
      <ErrorMessage name="折扣百分比" class="backend-invalid-feedback" />
    </div>
    <div class="mb-8">
      <div class="mb-3">
        <label for="due_date">到期日</label>
        <input
          type="date"
          class="form-control"
          id="due_date"
          v-model="dueDate"
          @change="changeTime"
        />
      </div>
    </div>
    <div class="mb-8">
      <p class="mb-3">是否啟用優惠券</p>
      <div class="form-check mt-4">
        <input
          class="form-check-input"
          type="checkbox"
          name="check"
          id="flexCheckDefault"
          v-model="tempCoupon.is_enabled"
          :true-value="1"
          :false-value="0"
        />
        <label v-if="tempCoupon.is_enabled" class="form-check-label" for="flexCheckDefault"
          >啟用</label
        >
        <label v-else class="form-check-label" for="flexCheckDefault">未啟用</label>
      </div>
    </div>
  </Form>
</template>

<script>
const MAX_TIMESTAMP = 8640000000000000;

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
    isAdd: Boolean,
  },
  data() {
    return {
      tempCoupon: {},
      dueDate: '',
    };
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      if (this.coupon.due_date === MAX_TIMESTAMP) {
        this.dueDate = '';
      } else {
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString().split('T');
        [this.dueDate] = dateAndTime;
      }
    },
  },
  methods: {
    isPositive(value) {
      return value > 0 && value % 1 === 0 ? true : '請輸入正整數';
    },
    cleanForm() {
      this.$refs.addForm.resetForm();
      this.dueDate = '';
      this.tempCoupon.is_enabled = 0;
      this.tempCoupon.due_date = MAX_TIMESTAMP;
    },
    changeTime() {
      if (this.dueDate === '') {
        this.tempCoupon.due_date = MAX_TIMESTAMP;
      } else {
        this.tempCoupon.due_date = Math.round(new Date(this.dueDate).getTime() / 1000);
      }
    },
  },
  created() {
    if (this.isAdd) {
      this.tempCoupon = {
        is_enabled: 0,
        due_date: MAX_TIMESTAMP,
      };
    }
  },
};
</script>
