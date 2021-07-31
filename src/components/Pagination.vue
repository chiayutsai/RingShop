<template>
  <ul v-if="pagination.total_pages !== 1" class="pagination">
    <li v-if="pagination.has_pre">
      <a href="#" class="page-item" @click.prevent="emitPage(1)">
        <span class="double-arrow">&laquo;</span>
      </a>
    </li>
    <li v-if="pagination.has_pre">
      <a href="#" class="page-item" @click.prevent="emitPage(pagination.current_page - 1)">
        <span class="material-icons text-base"> chevron_left </span>
      </a>
    </li>
    <li v-for="page in pagination.total_pages" :key="page">
      <a
        href="#"
        class="page-item"
        :class="{ active: page === pagination.current_page }"
        @click.prevent="emitPage(page)"
      >
        {{ page }}
      </a>
    </li>
    <li v-if="pagination.has_next">
      <a href="#" class="page-item" @click.prevent="emitPage(pagination.current_page + 1)">
        <span class="material-icons text-base"> chevron_right </span>
      </a>
    </li>
    <li v-if="pagination.has_next">
      <a href="#" class="page-item" @click.prevent="emitPage(pagination.total_pages)">
        <span class="double-arrow">&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pagination: Object,
  },
  emits: ['emit-page'],
  methods: {
    emitPage(page) {
      this.$emit('emit-page', page);
    },
  },
};
</script>
