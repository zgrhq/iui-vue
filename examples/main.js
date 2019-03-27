import Vue from 'vue';
import App from './App.vue';

import iuiVue from '../src/index'
Vue.use(iuiVue)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
