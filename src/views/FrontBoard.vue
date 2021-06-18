<template>
  <Nabvar />
  <div class="bg-overlay"></div>
  <router-view/>
</template>

<script>

import Nabvar from '@/components/Navbar.vue';

export default {
  components: {
    Nabvar,
  },

};
</script>
