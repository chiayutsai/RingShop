<template>
  <div class="loading" v-if="isLoading">
    <span class="loader"> </span>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
