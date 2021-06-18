<template>
  <ul v-if="pagination.total_pages !== 1" class="pagination">
    <li v-if="pagination.has_pre" class="page-item " @click="emitPage(1)">
      <span class="double-arrow">&laquo;</span>
    </li>
    <li v-if="pagination.has_pre" class="page-item " @click="emitPage(pagination.current_page - 1)">
      <span class="material-icons  text-base"> chevron_left </span>
    </li>
    <li
      v-for="page in pagination.total_pages"
      :key="page"
      class="page-item"
      :class="{ active: page === pagination.current_page }"
      @click="emitPage(page)"
    >
      {{ page }}
    </li>

    <li
      class="page-item "
      v-if="pagination.has_next"
      @click="emitPage(pagination.current_page + 1)"
    >
      <span class="material-icons  text-base"> chevron_right </span>
    </li>
    <li class="page-item " v-if="pagination.has_next" @click="emitPage(pagination.total_pages)">
      <span class="double-arrow">&raquo;</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pagination: Object,
  },
  methods: {
    emitPage(page) {
      this.$emit('emit-page', page);
    },
  },
};
</script>
