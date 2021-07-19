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
  mounted() {
    this.emitter.on('push-message', (message) => {
      this.noty = new Noty({
        type: message.type,
        theme: 'nest',
        text: message.message,
        timeout: '1500',
        progressBar: true,
        closeWith: ['click', 'button'],
        killer: true,
      }).show();
    });
  },

};
</script>
