import Antd from 'ant-design-vue'
import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router/index';
// import store from './store/index';
import { createStore } from './store'

Vue.config.productionTip = false
Vue.use(Antd);
const store = createStore();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
