<template>
  <div class="d-flex w-75 mb-3" :class="{ 'mb-6': !failQty }">
          <input
            class="quantity-btn remove text-xl"
            value="-"
            type="button"
            @click="minusQty"
            :disabled="qty <= 1"
          />
          <input
            class="text-center quantity w-100 text-lg"
            type="number"
            min="1"
            v-model="qty"
            @change="checkQty"
          />
          <input type="button" class="quantity-btn plus text-xl" value="+" @click="addQty" />
        </div>
        <p v-if="failQty" class="text-sm text-primary opacity-5 mb-6">商品數量最少為一件!</p>
</template>

<script>
export default {
  props: {
    qty: String,
  },
  data() {
    return {
      failQty: false,
    };
  },
};
</script>
