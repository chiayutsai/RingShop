<template>
  <div class="d-none"></div>
</template>
<script>
import Noty from 'noty';

import '../../node_modules/noty/src/noty.scss';
import '../../node_modules/noty/src/themes/nest.scss';

export default {
  data() {
    return {
      noty: {},
    };
  },
  inject: ['emitter'],
  methods: {
    getNoty(message) {
      this.noty = new Noty({
        type: message.type,
        theme: 'nest',
        text: message.message,
        timeout: '1500',
        progressBar: true,
        closeWith: ['click', 'button'],
        killer: true,
      }).show();
    },
  },
  mounted() {
    this.emitter.on('push-message', this.getNoty);
  },
  unmounted() {
    this.emitter.off('push-message', this.getNoty);
  },
};
</script>
