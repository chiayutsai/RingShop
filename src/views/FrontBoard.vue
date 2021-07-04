<template>
  <Nabvar />
  <SideBtn />
  <div class="bg-overlay"></div>
  <router-view/>
  <Footer/>
</template>

<script>

import Nabvar from '@/components/Navbar.vue';
import SideBtn from '@/components/SideBtn.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Nabvar,
    SideBtn,
    Footer,
  },

};
</script>
