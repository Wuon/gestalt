import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/styles.scss';

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
