import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import CKEditor from '@ckeditor/ckeditor5-vue';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from '@/components/Loading.vue';
import * as VueAos from 'vue-aos';
import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css';
import toCurrency from './methods/toCurrency';

defineRule('required', required);
defineRule('email', email);
defineRule('max', max);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.toCurrency = toCurrency;
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.use(VueAos);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', Loading);
app.mount('#app');
