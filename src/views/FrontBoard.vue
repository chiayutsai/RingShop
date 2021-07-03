<template>
  <Nabvar />
  <SideBtn />
  <div class="bg-overlay"></div>
  <router-view/>
</template>

<script>

import Nabvar from '@/components/Navbar.vue';
import SideBtn from '@/components/SideBtn.vue';

export default {
  components: {
    Nabvar,
    SideBtn,
  },

};
</script>
