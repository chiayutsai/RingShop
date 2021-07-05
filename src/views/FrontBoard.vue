<template>

<Noty />
  <Nabvar :page="page"/>
  <SideBtn :page="page"/>
  <div class="bg-overlay"></div>
  <router-view/>
  <Footer/>
</template>

<script>
import Noty from '@/components/Noty.vue';

import Nabvar from '@/components/Navbar.vue';
import SideBtn from '@/components/SideBtn.vue';
import Footer from '@/components/Footer.vue';
import emitter from '@/methods/eventBus';

export default {
  components: {
    Nabvar,
    SideBtn,
    Footer,
    Noty,
  },
  data() {
    return {
      page: '',
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  updated() {
    this.page = this.$route.name;
  },
  mounted() {
    this.page = this.$route.name;
  },
};
</script>
